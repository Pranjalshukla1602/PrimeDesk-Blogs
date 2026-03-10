import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientExtras from '@/components/ClientExtras';
import { COMPANY } from '@/lib/data';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: 'Managed Office & Coworking Spaces in Hyderabad - PrimeDesk',
    template: '%s | PrimeDesk',
  },
  description: COMPANY.description,
  keywords: ['coworking spaces', 'managed offices', 'plug and play offices', 'office space hyderabad', 'shared workspace', 'PrimeDesk'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: 'PrimeDesk - Premium Managed Office & Coworking Spaces',
    description: COMPANY.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeDesk - Premium Managed Office & Coworking Spaces',
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: COMPANY.name,
              description: COMPANY.description,
              url: COMPANY.url,
              telephone: COMPANY.phone[0],
              email: COMPANY.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'First floor T Hub Phase 2 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500081',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 09:00-19:00',
              sameAs: Object.values(COMPANY.social),
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientExtras />
      </body>
    </html>
  );
}
