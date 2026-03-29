'use client';
import { useState, useRef, useEffect } from 'react';
import { getLeadsApiBase } from '@/lib/leadsApi';

type LeadCaptureFormProps = {
    source: string;
    title?: string;
    subtitle?: string;
    showTrustBadges?: boolean;
    onSuccess?: () => void;
};

export default function LeadCaptureForm({
    source,
    title = "Get Expert Workspace Advice in 24 Hours",
    subtitle = "Personalized office suggestions based on your team size, budget, and growth plans.",
    showTrustBadges = false,
    onSuccess
}: LeadCaptureFormProps) {
    const [formStep, setFormStep] = useState('phone');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [leadId, setLeadId] = useState(null);
    const [isSubmittingPhone, setIsSubmittingPhone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const abandonTimer = useRef(null);
    const emailjsRef = useRef(null);

    useEffect(() => {
        import('@emailjs/browser').then((mod) => {
            emailjsRef.current = mod.default;
            emailjsRef.current.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        });
    }, []);

    const handlePhoneChange = (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.startsWith('91') && val.length > 10) {
            val = val.slice(2);
        }
        setPhone(val.slice(0, 10));
    };

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        if (phone.length < 10) return;
        const apiBase = getLeadsApiBase();
        if (!apiBase) {
            alert('Leads API is not configured. Add NEXT_PUBLIC_API_BASE_URL in Vercel.');
            return;
        }
        setIsSubmittingPhone(true);
        try {
            const response = await fetch(`${apiBase}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, source }),
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setLeadId(data.leadId);
                setFormStep('details');
                abandonTimer.current = setTimeout(() => {
                    emailjsRef.current?.send(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ABANDON,
                        { type: 'Abandoned Lead (Step 1 Only)', phone, name: 'Not provided', email: 'Not provided', company: 'Not provided', team_size: 'Not provided', source }
                    ).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
                }, 60000);
            } else {
                alert('Failed to capture details: ' + (data.message || 'Unknown error'));
            }
        } catch (err) {
            console.error('Error submitting phone:', err);
            setFormStep('details');
        } finally {
            setIsSubmittingPhone(false);
        }
    };

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();
        if (!leadId) return submitNewLead();
        const apiBase = getLeadsApiBase();
        if (!apiBase) {
            alert('Leads API is not configured. Add NEXT_PUBLIC_API_BASE_URL in Vercel.');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch(`${apiBase}/api/leads/${leadId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, companyName, teamSize }),
            });
            if (response.ok) {
                setFormStep('success');
                if (abandonTimer.current) clearTimeout(abandonTimer.current);
                emailjsRef.current?.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE,
                    { type: 'Complete Lead', phone, name, email, company: companyName, team_size: teamSize, source }
                ).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
                if (onSuccess) onSuccess();
            } else {
                const data = await response.json();
                alert('Failed to submit form: ' + (data.message || 'Unknown error'));
            }
        } catch (err) {
            console.error('Error updating form:', err);
            alert('An error occurred submitting the form. Ensure backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const submitNewLead = async () => {
        const apiBase = getLeadsApiBase();
        if (!apiBase) {
            alert('Leads API is not configured. Add NEXT_PUBLIC_API_BASE_URL in Vercel.');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch(`${apiBase}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, companyName, teamSize, source }),
            });
            if (response.ok) {
                setFormStep('success');
                emailjsRef.current?.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE,
                    { type: 'Complete Lead', phone, name, email, company: companyName, team_size: teamSize, source }
                ).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
                if (onSuccess) onSuccess();
            } else {
                const data = await response.json();
                alert('Failed to submit form: ' + (data.message || 'Unknown error'));
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('An error occurred submitting the form. Ensure backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (formStep === 'success') {
        return (
            <div className="step active">
                <div className="success-card">
                    <div className="success-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></div>
                    <h3>We'll Call You Shortly!</h3>
                    <p>Our advisor will share curated options within 24 hours.</p>
                </div>
            </div>
        );
    }

    return (
        <div id="m-form-wrap" style={showTrustBadges ? { height: '100%' } : {}}>
            {!showTrustBadges && <p className="modal-tag">PrimeDesk · Zero Brokerage</p>}
            {title && <h2 className={showTrustBadges ? "hfc-title" : "modal-title"} style={showTrustBadges ? { fontSize: '20px', margin: 0, fontWeight: 700 } : {}}>{title}</h2>}
            {subtitle && <p className={showTrustBadges ? "hfc-sub" : "modal-sub"} style={showTrustBadges ? { marginBottom: '20px' } : {}}>{subtitle}</p>}
            
            <div
                className="prog-wrap"
                role="progressbar"
                aria-valuenow={formStep === 'phone' ? 50 : 100}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Form progress"
            >
                <div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div>
            </div>

            {formStep === 'phone' && (
                <div className="step active">
                    <form onSubmit={handlePhoneSubmit}>
                        <div className="field">
                            <label htmlFor="lead-phone" style={showTrustBadges ? {} : { fontSize: "12px", fontWeight: "600", color: "var(--navy)", display: "block", marginBottom: "5px" }}>Your Phone Number</label>
                            <div className="phone-row">
                                <span className="phone-prefix" aria-hidden="true">+91</span>
                                <input id="lead-phone" type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={15} required value={phone} onChange={handlePhoneChange} autoComplete="tel" />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn" disabled={phone.length < 10 || isSubmittingPhone}>
                            {isSubmittingPhone ? (showTrustBadges ? 'Sending...' : 'Continuing...') : (showTrustBadges ? 'Get Free Expert Advice' : 'Continue')}
                            {!isSubmittingPhone && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                    </form>
                    {showTrustBadges && (
                        <div className="form-trust">
                            <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>No Spam</div>
                            <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
                            <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Zero Brokerage</div>
                        </div>
                    )}
                </div>
            )}
            
            {formStep === 'details' && (
                <div className="step active">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                        <button type="button" aria-label="Go back to phone number step" onClick={() => setFormStep('phone')} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <div>
                            <div className="hfc-title" style={{ fontSize: "16px", margin: 0 }}>Almost There!</div>
                            <p className="hfc-sub" style={{ margin: 0 }}>Share a few details for the best match</p>
                        </div>
                    </div>
                    <form onSubmit={handleDetailsSubmit}>
                        <div className="grid-2" style={{ marginBottom: "10px" }}>
                            <div className="field" style={{ marginBottom: "0" }}>
                                <label htmlFor="lead-name" className="sr-only">Your Name</label>
                                <input id="lead-name" type="text" className="form-input" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                            </div>
                            <div className="field" style={{ marginBottom: "0" }}>
                                <label htmlFor="lead-company" className="sr-only">Company Name</label>
                                <input id="lead-company" type="text" className="form-input" required placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" />
                            </div>
                        </div>
                        <div className="field" style={{ marginBottom: "10px" }}>
                            <label htmlFor="lead-email" className="sr-only">Work Email</label>
                            <input id="lead-email" type="email" className="form-input" required placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="lead-teamsize" className="sr-only">Team Size</label>
                            <select id="lead-teamsize" className="form-input" required style={{ appearance: "none", background: "#fff", color: "var(--text-2)" }} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                                <option value="" disabled>Team Size</option>
                                <option value="1-5">1–5 employees</option>
                                <option value="5-15">5–15 employees</option>
                                <option value="15-50">15–50 employees</option>
                                <option value="50+">50+ employees</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-btn" style={{ marginTop: "16px" }} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get Free Expert Advice'}
                            {!isSubmitting && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
