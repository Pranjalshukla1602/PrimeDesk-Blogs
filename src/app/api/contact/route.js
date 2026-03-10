import { NextResponse } from 'next/server';

// ─── Google Sheets Integration ───
// To connect to Google Sheets, set these environment variables:
//   GOOGLE_SHEETS_ID       – The ID from your spreadsheet URL
//   GOOGLE_SERVICE_EMAIL   – Service account email
//   GOOGLE_PRIVATE_KEY     – Service account private key (with \n for newlines)
//
// To send email notifications, set:
//   NOTIFY_EMAIL           – Email address to receive lead notifications
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS – SMTP credentials

async function appendToGoogleSheet(data) {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const serviceEmail = process.env.GOOGLE_SERVICE_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!sheetId || !serviceEmail || !privateKey) {
    console.log('Google Sheets not configured. Skipping sheet append.');
    return;
  }

  try {
    // Create JWT for Google Sheets API
    const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const now = Math.floor(Date.now() / 1000);
    const claimSet = btoa(JSON.stringify({
      iss: serviceEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }));

    // For production, use a proper JWT signing library. 
    // This is a simplified version – use `google-auth-library` or `googleapis` npm package.
    // For now, we'll use a direct API approach with API key if available.
    
    const apiKey = process.env.GOOGLE_API_KEY;
    if (apiKey) {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED&key=${apiKey}`;
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          values: [[
            new Date().toISOString(),
            data.name,
            data.email,
            data.phone,
            data.service || 'N/A',
            data.message || 'N/A',
          ]],
        }),
      });
    }
  } catch (error) {
    console.error('Google Sheets error:', error);
  }
}

async function sendEmailNotification(data) {
  const smtpHost = process.env.SMTP_HOST;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!smtpHost || !notifyEmail) {
    console.log('Email not configured. Skipping notification.');
    return;
  }

  // For production, use nodemailer or a service like Resend/SendGrid
  // Install: npm install nodemailer
  try {
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PrimeDesk Website" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: `🏢 New Lead: ${data.name} - ${data.service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #000b21; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #d4a647; margin: 0;">New Lead from PrimeDesk</h1>
          </div>
          <div style="padding: 32px; background: #f5f7fa; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td><td style="padding: 8px 0;">${data.service || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Message:</td><td style="padding: 8px 0;">${data.message || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Time:</td><td style="padding: 8px 0;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
            </table>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Email notification error:', error);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Validate
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Process lead in parallel
    await Promise.allSettled([
      appendToGoogleSheet({ name, email, phone, service, message }),
      sendEmailNotification({ name, email, phone, service, message }),
    ]);

    // Also log locally as backup
    console.log('📋 New Lead:', { name, email, phone, service, message, time: new Date().toISOString() });

    return NextResponse.json({ success: true, message: 'Thank you! We will contact you soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
