'use client';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthorCard from '@/components/AuthorCard';
import '../../gcc-offices-hyderabad/primedesk.css';
import Image from 'next/image';



import ReactDOM from 'react-dom';

export default function ManagedOfficeChecklistPage() {
    ReactDOM.preconnect('https://primedesk.co.in', { crossOrigin: 'anonymous' });
    
    const [modalOpen, setModalOpen] = useState(false);
    const [formStep, setFormStep] = useState('phone');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [leadId, setLeadId] = useState(null);
    const [isSubmittingPhone, setIsSubmittingPhone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const abandonTimer = useRef(null);
    const emailjsRef = useRef(null);

    useEffect(() => {
        import('@emailjs/browser').then((mod) => {
            emailjsRef.current = mod.default;
            emailjsRef.current.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }); },
            { rootMargin: '-40px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        const sections = document.querySelectorAll('section[id]');
        const tocObs = new IntersectionObserver(
            (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
            { rootMargin: '-25% 0px -65% 0px' }
        );
        sections.forEach((s) => tocObs.observe(s));
        return () => { observer.disconnect(); tocObs.disconnect(); };
    }, []);

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        if (phone.length < 10) return;
        setIsSubmittingPhone(true);
        try {
            const res = await fetch('http://localhost:5000/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, source: '7 Things Checklist Page' }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setLeadId(data.leadId);
                setFormStep('details');
                abandonTimer.current = setTimeout(() => {
                    emailjsRef.current?.send(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ABANDON,
                        { type: 'Abandoned Lead', phone, name: 'Not provided', email: 'Not provided', company: 'Not provided', team_size: 'Not provided', source: '7 Things Checklist Page' }
                    ).catch(console.error);
                }, 60000);
            } else { alert('Failed: ' + (data.message || 'Unknown error')); }
        } catch { setFormStep('details'); }
        finally { setIsSubmittingPhone(false); }
    };

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();
        if (!leadId) return submitNewLead();
        setIsSubmitting(true);
        try {
            const res = await fetch(`http://localhost:5000/api/leads/${leadId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, companyName, teamSize }),
            });
            if (res.ok) {
                setFormStep('success');
                if (abandonTimer.current) clearTimeout(abandonTimer.current);
                emailjsRef.current?.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE,
                    { type: 'Complete Lead', phone, name, email, company: companyName, team_size: teamSize, source: '7 Things Checklist Page' }
                ).catch(console.error);
            } else { const d = await res.json(); alert('Failed: ' + (d.message || 'Unknown error')); }
        } catch { alert('An error occurred. Ensure backend is running.'); }
        finally { setIsSubmitting(false); }
    };

    const submitNewLead = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch('http://localhost:5000/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, companyName, teamSize, source: '7 Things Checklist Page' }),
            });
            if (res.ok) {
                setFormStep('success');
                emailjsRef.current?.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE,
                    { type: 'Complete Lead', phone, name, email, company: companyName, team_size: teamSize, source: '7 Things Checklist Page' }
                ).catch(console.error);
            } else { const d = await res.json(); alert('Failed: ' + (d.message || 'Unknown error')); }
        } catch { alert('An error occurred. Ensure backend is running.'); }
        finally { setIsSubmitting(false); }
    };

    const openModal = (e) => { if (e) e.preventDefault(); setModalOpen(true); document.body.style.overflow = 'hidden'; };
    const closeModal = () => { setModalOpen(false); document.body.style.overflow = ''; };

    const faqs = [
        { q: "What do I need to look into before renting office space in Hyderabad?", a: "Location, internet access, meeting rooms, lease terms, security, scalability, and the total cost." },
        { q: "Is a managed office better than a regular office?", a: "Yes, because it is more flexible and costs less to set up." },
        { q: "When can I move in?", a: "Most managed offices let you move in within 7 to 15 days." },
        { q: "How much does it cost on average?", a: "₹6,000 to ₹16,000 for each seat." },
        { q: "How do I pick the best managed office space in Hyderabad?", a: "Before choosing a managed office, you should think about things like the location, the internet infrastructure, the ability to grow, the flexibility of the lease, and the total cost. You can find the best option for your business needs by looking at more than one." },
        { q: "What comes with a managed office space in Hyderabad?", a: "Managed office spaces usually have desks, high-speed internet, meeting rooms, electricity, maintenance, cleaning, and security. Some providers also let you personalise your office space, add your own branding, and set up a dedicated office." },
    ];

    // The 7 checklist items from the PDF
    const checklistItems = [
        { num: "01", id: "location", title: "Location and Connectivity", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> },
        { num: "02", id: "internet", title: "IT Readiness and Internet Infrastructure", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg> },
        { num: "03", id: "meeting-rooms", title: "Meeting Rooms and Collaboration Spaces", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
        { num: "04", id: "lease-terms", title: "Terms and Flexibility of the Lease", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
        { num: "05", id: "security", title: "Standards for Security and Compliance", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
        { num: "06", id: "scalability", title: "Growth and Scalability in the Future", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg> },
        { num: "07", id: "total-cost", title: "Total Cost and Extra Fees", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    ];

    const LeadForm = ({ idPrefix }) => (
        <>
            <div className="prog-wrap" role="progressbar" aria-valuenow={formStep === 'phone' ? 50 : 100} aria-valuemin={0} aria-valuemax={100} aria-label="Form progress">
                <div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div>
            </div>
            {formStep === 'phone' && (
                <div className="step active">
                    <div className="hfc-title">Get Verified Managed Office Options</div>
                    <p className="hfc-sub">No brokerage · Verified spaces · 24–48 hr delivery</p>
                    <form onSubmit={handlePhoneSubmit}>
                        <div className="field">
                            <label htmlFor={`${idPrefix}-phone`}>Your Phone Number</label>
                            <div className="phone-row">
                                <span className="phone-prefix" aria-hidden="true">🇮🇳 +91</span>
                                <input id={`${idPrefix}-phone`} type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={10} required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn" disabled={phone.length < 10 || isSubmittingPhone}>
                            {isSubmittingPhone ? 'Sending...' : 'Get Verified Office Options'}
                            {!isSubmittingPhone && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                    </form>
                    <div className="form-trust">
                        <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>No Brokerage</div>
                        <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
                        <div className="form-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Verified Offices</div>
                    </div>
                </div>
            )}
            {formStep === 'details' && (
                <div className="step active">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                        <button type="button" aria-label="Go back" onClick={() => setFormStep('phone')} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <div>
                            <div className="hfc-title" style={{ fontSize: "16px", margin: 0 }}>Almost There!</div>
                            <p className="hfc-sub" style={{ margin: 0 }}>Share details to match the best spaces</p>
                        </div>
                    </div>
                    <form onSubmit={handleDetailsSubmit}>
                        <div className="grid-2" style={{ marginBottom: "10px" }}>
                            <div className="field" style={{ marginBottom: "0" }}>
                                <label htmlFor={`${idPrefix}-name`} className="sr-only">Your Name</label>
                                <input id={`${idPrefix}-name`} type="text" className="form-input" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                            </div>
                            <div className="field" style={{ marginBottom: "0" }}>
                                <label htmlFor={`${idPrefix}-company`} className="sr-only">Company Name</label>
                                <input id={`${idPrefix}-company`} type="text" className="form-input" required placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" />
                            </div>
                        </div>
                        <div className="field" style={{ marginBottom: "10px" }}>
                            <label htmlFor={`${idPrefix}-email`} className="sr-only">Work Email</label>
                            <input id={`${idPrefix}-email`} type="email" className="form-input" required placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                        </div>
                        <div className="field">
                            <label htmlFor={`${idPrefix}-teamsize`} className="sr-only">Team Size</label>
                            <select id={`${idPrefix}-teamsize`} className="form-input" required style={{ appearance: "none", background: "#fff", color: "var(--text-2)" }} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                                <option value="" disabled>Team Size</option>
                                <option value="1-10">1–10 employees</option>
                                <option value="10-50">10–50 employees</option>
                                <option value="50-100">50–100 employees</option>
                                <option value="100+">100+ employees</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-btn" style={{ marginTop: "16px" }} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get My Office Options'}
                            {!isSubmitting && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                    </form>
                </div>
            )}
            {formStep === 'success' && (
                <div className="step active">
                    <div className="success-card">
                        <div className="success-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></div>
                        <h3>We'll Call You Shortly!</h3>
                        <p>Our advisor will share verified office options within 24 hours.</p>
                    </div>
                </div>
            )}
            <div className="social-proof">
                <div className="avatar-stack" aria-hidden="true">
                    <div className="avatar" style={{ background: "#2563eb" }}>A</div>
                    <div className="avatar" style={{ background: "#059669" }}>M</div>
                    <div className="avatar" style={{ background: "#d97706" }}>S</div>
                    <div className="avatar" style={{ background: "#7c3aed" }}>R</div>
                </div>
                <p className="sp-text"><b>200+ businesses</b> found offices through PrimeDesk</p>
            </div>
        </>
    );

    return (
        <div className="gcc-page">

            {/* ── JSON-LD Schema ── */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "7 Things to Check Before Renting Managed Office Space in Hyderabad",
                    "description": "Before renting a managed office in Hyderabad, check location, internet infrastructure, meeting rooms, lease flexibility, security, scalability, and total cost.",
                    "author": { "@type": "Organization", "name": "PrimeDesk", "url": "https://primedesk.co.in" },
                    "publisher": { "@type": "Organization", "name": "PrimeDesk", "logo": { "@type": "ImageObject", "url": "https://primedesk.co.in/logo.png" } },
                    "mainEntityOfPage": "https://primedesk.co.in/blogs/things-to-check-before-renting-managed-office-space-hyderabad/",
                    "keywords": "managed office space Hyderabad, rent managed office Hyderabad, office space checklist Hyderabad",
                })
            }} />

            {/* ── FAQ Schema ── */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
                })
            }} />

            <Header />

            {/* ══════ STICKY BAR ══════ */}
            <div id="sticky" role="banner" aria-label="Sticky navigation bar">
                <div className="sticky-inner">
                    <div className="sticky-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src="/images/logo.webp" alt="PrimeDesk Logo" width={96} height={24} loading="lazy" style={{ height: '24px', width: 'auto' }} />
                        <span>PrimeDesk · Managed Office Guide</span>
                    </div>
                    <div className="sticky-meta">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                        No Brokerage · Verified Offices
                    </div>
                    <button className="sticky-btn" onClick={openModal} aria-label="Open consultation form">
                        Get Verified Options
                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                </div>
            </div>

            {/* ══════ MODAL ══════ */}
            <div className={`modal-overlay ${modalOpen ? 'open' : ''}`} id="modal" role="dialog" aria-modal="true" aria-label="Office inquiry form">
                <div className="modal-box">
                    <div className="modal-top"></div>
                    <button className="modal-close" onClick={closeModal} aria-label="Close dialog">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                    <div className="modal-body">
                        {formStep !== 'success' ? (
                            <div id="m-form-wrap">
                                <p className="modal-tag">PrimeDesk · No Brokerage</p>
                                <h2 className="modal-title">Get Verified Managed Office Options in 24 Hours</h2>
                                <p className="modal-sub">Confirmed office spaces in top Hyderabad locations. No brokerage fees.</p>
                                <div className="prog-wrap" role="progressbar" aria-valuenow={formStep === 'phone' ? 50 : 100} aria-valuemin={0} aria-valuemax={100} aria-label="Form progress">
                                    <div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div>
                                </div>
                                {formStep === 'phone' && (
                                    <div className="step active">
                                        <form onSubmit={handlePhoneSubmit}>
                                            <div className="field">
                                                <label htmlFor="modal-phone" style={{ fontSize: "12px", fontWeight: "600", color: "var(--navy)", display: "block", marginBottom: "5px" }}>Your Phone Number</label>
                                                <div className="phone-row">
                                                    <span className="phone-prefix" aria-hidden="true">🇮🇳 +91</span>
                                                    <input id="modal-phone" type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={10} required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                                                </div>
                                            </div>
                                            <button type="submit" className="submit-btn" disabled={phone.length < 10 || isSubmittingPhone}>
                                                {isSubmittingPhone ? 'Continuing...' : 'Continue'}
                                                {!isSubmittingPhone && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                                            </button>
                                        </form>
                                    </div>
                                )}
                                {formStep === 'details' && (
                                    <div className="step active">
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                                            <button type="button" aria-label="Go back" onClick={() => setFormStep('phone')} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                                <svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
                                            </button>
                                            <div>
                                                <div className="hfc-title" style={{ fontSize: "16px", margin: 0 }}>Almost There!</div>
                                                <p className="hfc-sub" style={{ margin: 0 }}>Share details to match the best spaces</p>
                                            </div>
                                        </div>
                                        <form onSubmit={handleDetailsSubmit}>
                                            <div className="grid-2" style={{ marginBottom: "10px" }}>
                                                <div className="field" style={{ marginBottom: "0" }}>
                                                    <label htmlFor="modal-name" className="sr-only">Your Name</label>
                                                    <input id="modal-name" type="text" className="form-input" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                                                </div>
                                                <div className="field" style={{ marginBottom: "0" }}>
                                                    <label htmlFor="modal-company" className="sr-only">Company Name</label>
                                                    <input id="modal-company" type="text" className="form-input" required placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" />
                                                </div>
                                            </div>
                                            <div className="field" style={{ marginBottom: "10px" }}>
                                                <label htmlFor="modal-email" className="sr-only">Work Email</label>
                                                <input id="modal-email" type="email" className="form-input" required placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                                            </div>
                                            <div className="field">
                                                <label htmlFor="modal-teamsize" className="sr-only">Team Size</label>
                                                <select id="modal-teamsize" className="form-input" required style={{ appearance: "none", background: "#fff", color: "var(--text-2)" }} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                                                    <option value="" disabled>Team Size</option>
                                                    <option value="1-10">1–10 employees</option>
                                                    <option value="10-50">10–50 employees</option>
                                                    <option value="50-100">50–100 employees</option>
                                                    <option value="100+">100+ employees</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="submit-btn" style={{ marginTop: "16px" }} disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Get Verified Office Options'}
                                                {!isSubmitting && <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div id="m-success" className="success-card">
                                <div className="success-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></div>
                                <h3>We'll Be in Touch Soon!</h3>
                                <p>Our workspace advisors will share verified options within 24–48 hours.</p>
                            </div>
                        )}
                        <div className="nm-footer">
                            <p className="nm-footer-text">Prefer instant help? Call or WhatsApp us directly.</p>
                            <div className="nm-action-btns">
                                <a href="tel:+917993726302" className="nm-action-btn nm-btn-blue">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    Call Now
                                </a>
                                <a href="https://wa.me/918978426302?text=Hello,%20I%20would%20like%20to%20inquire%20about%20managed%20office%20spaces%20in%20Hyderabad." target="_blank" rel="noopener noreferrer" className="nm-action-btn nm-btn-green">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                    WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main-content">

                {/* ══════ HERO ══════ */}
                <header className="hero" style={{ paddingTop: '90px' }}>
                    <div className="wrap">
                        <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "28px", fontSize: "12px", color: "rgba(255,255,255,.35)" }}>
                            <a href="/" className="bc-link">Home</a>
                            <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                            <a href="/blogs/" className="bc-link">Blog</a>
                            <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                            <span aria-current="page" style={{ color: "rgba(255,255,255,.55)" }}>7 Things to Check Before Renting</span>
                        </nav>

                        <div className="hero-grid">
                            <div>
                                <div className="hero-badge">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                    Managed Office Checklist · Hyderabad
                                </div>
                                <h1>7 Things to Check Before Renting <em>Managed Office Space</em> in Hyderabad</h1>
                                <p className="hero-lead">Before renting a managed office in Hyderabad, check location, internet infrastructure, meeting rooms, lease flexibility, security standards, scalability, and total cost. This checklist ensures your office works well for the long term.</p>

                                <div className="hero-stats" aria-label="Key statistics">
                                    <div className="stat-item"><div className="val">7</div><div className="lbl">Things to verify</div></div>
                                    <div className="stat-item"><div className="val">7–15</div><div className="lbl">Days to move in</div></div>
                                    <div className="stat-item"><div className="val">₹6K</div><div className="lbl">Avg. from /seat</div></div>
                                    <div className="stat-item"><div className="val">₹0</div><div className="lbl">Brokerage</div></div>
                                </div>

                                <div className="hero-trust">
                                    <span className="hero-trust-label">Trusted by</span>
                                    <div className="trust-logos">
                                        <span>Keka</span><span>Cloud Angles</span><span>SoftStandard Solutions</span><span>Envista</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Lead form */}
                            <div className="hide-on-mobile">
                                <div className="hero-form-card">
                                    <div className="hfc-accent"></div>
                                    <div className="hfc-body">
                                        <span className="urgency-badge">Limited: Free Consultation This Week</span>
                                        <LeadForm idPrefix="hero" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width hero image */}
                    <div className="hero-img-strip" style={{ marginTop: "40px" }}>
                        <Image src="/images/hero_managed_office_checklist.webp" alt="Managed office space checklist Hyderabad" width={720} height={400} priority fetchPriority="high" sizes="(max-width: 768px) 100vw, 720px" style={{ width: '100%', height: 'auto' }} />
                        <div className="img-badges">
                            <div className="img-badge">
                                <svg viewBox="0 0 24 24" style={{ stroke: "var(--teal)" }} aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Hyderabad, India
                            </div>
                        </div>
                    </div>
                </header>

                {/* ══════ ARTICLE + TOC ══════ */}
                <div className="article-wrap">
                    <div className="wrap">
                        <div className="article-grid">

                            {/* SIDEBAR TOC */}
                            <aside aria-label="Table of contents">
                                <nav className="toc-card">
                                    <p className="toc-heading" id="toc-heading">In This Article</p>
                                    <ul className="toc-list" aria-labelledby="toc-heading">
                                        <li><a href="#intro" className={activeSection === 'intro' ? 'active' : ''}>Introduction</a></li>
                                        <li><a href="#why-it-matters" className={activeSection === 'why-it-matters' ? 'active' : ''}>Why It Matters</a></li>
                                        <li><a href="#managed-vs-traditional" className={activeSection === 'managed-vs-traditional' ? 'active' : ''}>Managed vs Traditional</a></li>
                                        <li><a href="#checklist-overview" className={activeSection === 'checklist-overview' ? 'active' : ''}>Quick Checklist</a></li>
                                        <li><a href="#location" className={activeSection === 'location' ? 'active' : ''}>1. Location</a></li>
                                        <li><a href="#internet" className={activeSection === 'internet' ? 'active' : ''}>2. Internet Infrastructure</a></li>
                                        <li><a href="#meeting-rooms" className={activeSection === 'meeting-rooms' ? 'active' : ''}>3. Meeting Rooms</a></li>
                                        <li><a href="#lease-terms" className={activeSection === 'lease-terms' ? 'active' : ''}>4. Lease Flexibility</a></li>
                                        <li><a href="#security" className={activeSection === 'security' ? 'active' : ''}>5. Security</a></li>
                                        <li><a href="#scalability" className={activeSection === 'scalability' ? 'active' : ''}>6. Scalability</a></li>
                                        <li><a href="#total-cost" className={activeSection === 'total-cost' ? 'active' : ''}>7. Total Cost</a></li>
                                        <li><a href="#mistakes" className={activeSection === 'mistakes' ? 'active' : ''}>Common Mistakes</a></li>
                                        <li><a href="#real-example" className={activeSection === 'real-example' ? 'active' : ''}>Real-Life Example</a></li>
                                        <li><a href="#expert-insight" className={activeSection === 'expert-insight' ? 'active' : ''}>Expert Insight</a></li>
                                        <li><a href="#why-primedesk" className={activeSection === 'why-primedesk' ? 'active' : ''}>Why PrimeDesk</a></li>
                                        <li><a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQs</a></li>
                                    </ul>
                                    <div className="toc-cta">
                                        <p>Ready to find a verified managed office? Zero brokerage, options in 24 hrs.</p>
                                        <button className="toc-cta-btn" onClick={openModal}>Get Verified Options →</button>
                                    </div>
                                </nav>
                            </aside>

                            {/* ARTICLE BODY */}
                            <article className="article">

                                {/* INTRO */}
                                <section id="intro" className="reveal" aria-labelledby="intro-heading">
                                    <h2 id="intro-heading">Introduction</h2>
                                    <p>Hyderabad is now one of India's fastest-growing business centers. Startups, big companies, and even global companies are setting up Global Capability Centers (GCCs) there.</p>
                                    <p>If you're going to rent a managed office space in Hyderabad, you need to make the right choice. This is important not only for cost, but also for your team's productivity, growth, and ability to grow over time.</p>
                                    <p>But a lot of businesses make decisions too quickly and then have problems like:</p>
                                    <div className="check-list">
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Can't grow very much</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Costs that aren't obvious</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Bad infrastructure</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Problems with how things work</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>This guide has a full checklist that will help you avoid those mistakes before you rent office space in Hyderabad.</p>
                                </section>

                                {/* CTA 1 */}
                                <div className="inline-cta reveal" role="complementary" aria-label="Verified office options CTA">
                                    <div className="ic-text">
                                        <p className="ic-tag">PrimeDesk · No Brokerage</p>
                                        <h3>Get Verified Managed Office Options</h3>
                                        <p>Before you choose an office, talk to experts and look into verified workspace options that fit your needs.</p>
                                        <div className="check-list" style={{ marginTop: "10px" }}>
                                            <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>No brokerage</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Confirmed office spaces</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Choices in 24 to 48 hours</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Great places for business</div>
                                        </div>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Get Verified Office Options
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>

                                {/* WHY IT MATTERS */}
                                <section id="why-it-matters" className="reveal" aria-labelledby="why-heading">
                                    <h2 id="why-heading">Why It's Important to Choose the Right Managed Office</h2>
                                    <p>Choosing the right office isn't just about the rent; it also affects:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>How much work the team gets done</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Hiring ability</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>How people see the brand</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Operational efficiency</div>
                                    </div>
                                    <blockquote>
                                        <p>A well-chosen managed office space in Hyderabad can help your business grow, but the wrong one can slow it down.</p>
                                    </blockquote>
                                </section>

                                {/* MANAGED VS TRADITIONAL */}
                                <section id="managed-vs-traditional" className="reveal" aria-labelledby="comparison-heading">
                                    <h2 id="comparison-heading">Managed Office vs Traditional Office (Quick Comparison)</h2>
                                    <div style={{ overflowX: "auto", marginTop: "20px" }}>
                                        <table className="comparison-table" aria-label="Managed office vs traditional office comparison">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Factor</th>
                                                    <th scope="col">Managed Office</th>
                                                    <th scope="col">Traditional Office</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Setup Cost</td><td className="highlight-yes">Low</td><td className="highlight-bad">High</td></tr>
                                                <tr><td>Flexibility</td><td className="highlight-yes">High</td><td className="highlight-bad">Low</td></tr>
                                                <tr><td>Move-in Time</td><td className="highlight-yes">Fast</td><td className="highlight-bad">Slow</td></tr>
                                                <tr><td>Maintenance</td><td className="highlight-yes">Included</td><td className="highlight-bad">Separate</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* CHECKLIST OVERVIEW */}
                                <section id="checklist-overview" className="reveal" aria-labelledby="checklist-heading">
                                    <h2 id="checklist-heading">A Quick List of Things to Do Before Renting Office Space in Hyderabad</h2>
                                    <div className="checklist-overview-grid">
                                        {checklistItems.map((item) => (
                                            <a key={item.id} href={`#${item.id}`} className="checklist-overview-item">
                                                <span className="checklist-num">{item.num}</span>
                                                <span className="checklist-icon" aria-hidden="true">{item.icon}</span>
                                                <span className="checklist-label">{item.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </section>

                                {/* SECTION HEADING */}
                                <div className="section-divider reveal">
                                    <h2>7 Things to Look Into Before Renting Managed Office Space in Hyderabad</h2>
                                </div>

                                {/* 1. LOCATION */}
                                <section id="location" className="reveal checklist-section" aria-labelledby="location-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">01</div>
                                        <h3 id="location-heading">Location and How Easy It Is to Get To</h3>
                                    </div>
                                    <p>Choosing the right location has a direct effect on hiring, the commute for employees, and how easy it is for clients to get to you. Offices in prime locations have better connections, access to talent, and visibility for businesses.</p>
                                    <p>Hyderabad's best business centers are:</p>
                                    <div className="pill-grid" role="list">
                                        <div className="pill" role="listitem"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Hitech City</div>
                                        <div className="pill" role="listitem"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>The Financial District</div>
                                        <div className="pill" role="listitem"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Gachibowli</div>
                                    </div>
                                    <p>A good location makes sure that:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Employees can easily get to work</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Close to clients</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Access to the business ecosystem</div>
                                    </div>
                                    <div className="explore-links">
                                        <span className="explore-label">Explore:</span>
                                        <a href="/managed-office-space/" className="explore-link">Managed office space in Hyderabad</a>
                                        <a href="/office-space-hitech-city/" className="explore-link">Office space in Hitech City</a>
                                    </div>
                                </section>

                                {/* 2. INTERNET */}
                                <section id="internet" className="reveal checklist-section" aria-labelledby="internet-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">02</div>
                                        <h3 id="internet-heading">IT Readiness and Internet Infrastructure</h3>
                                    </div>
                                    <p>Businesses today depend on having a reliable internet connection. Even short periods of downtime can cause problems with operations, communication, and productivity.</p>
                                    <p>Look for:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Access to high-speed internet</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Backup links</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Help with IT</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>Bad connectivity can have a direct effect on how well a business runs.</p>
                                    <div className="callout" style={{ marginTop: "16px" }}>
                                        <div className="callout-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', width: '100%' }}>
                                            <div style={{ flex: '1 1 250px' }}>
                                                <strong style={{ display: 'block', marginBottom: '4px' }}>Not sure what office infrastructure is?</strong>
                                                <p style={{ margin: 0 }}>Not all managed offices have the same level of infrastructure.</p>
                                            </div>
                                            <button className="ic-btn" onClick={openModal} style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                                Get Verified Managed Office Options
                                                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '16px', height: '16px', marginLeft: '6px' }}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* 3. MEETING ROOMS */}
                                <section id="meeting-rooms" className="reveal checklist-section" aria-labelledby="meeting-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">03</div>
                                        <h3 id="meeting-heading">Meeting Rooms and Spaces for Working Together</h3>
                                    </div>
                                    <p>As teams get bigger, they need more structured ways to work together. Adequate meeting rooms make it easier for people to talk to each other, work together, and deal with clients in a professional way.</p>
                                    <p>Meeting rooms are important for:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Talks with clients</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Working together as a team</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Talks with the management</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>Check:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>How many meeting rooms there are</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Availability (shared vs. dedicated)</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>System for making reservations</div>
                                    </div>
                                </section>

                                {/* 4. LEASE TERMS */}
                                <section id="lease-terms" className="reveal checklist-section" aria-labelledby="lease-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">04</div>
                                        <h3 id="lease-heading">Terms and Flexibility of the Lease</h3>
                                    </div>
                                    <p>Business needs can change quickly, especially for new businesses and teams that are growing. Flexible lease terms let you change your mind without having to make long-term commitments.</p>
                                    <p>Check:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Smallest amount of time to lock in</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Exit clauses</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Flexibility in growth</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>Flexible contracts lower risk and help businesses grow.</p>
                                </section>

                                {/* CTA 2 */}
                                <div className="inline-cta reveal" role="complementary" aria-label="Scale your team CTA">
                                    <div className="ic-text">
                                        <p className="ic-tag">Planning to Scale Your Team?</p>
                                        <h3>Choose a Workspace That Allows Easy Expansion Without Relocation</h3>
                                        <p>Get verified managed office options matched to your growth plans.</p>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Get Verified Office Options
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>

                                {/* 5. SECURITY */}
                                <section id="security" className="reveal checklist-section" aria-labelledby="security-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">05</div>
                                        <h3 id="security-heading">Standards for Security and Compliance</h3>
                                    </div>
                                    <p>A safe place to work is important for keeping employees, property, and private business information safe. This is even more important for businesses and GCC operations.</p>
                                    <p>Look for:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Systems for controlling access</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>CCTV monitoring</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Managing visitors</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Following fire safety rules</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>Strong security makes people trust you and keeps things running smoothly.</p>
                                </section>

                                {/* 6. SCALABILITY */}
                                <section id="scalability" className="reveal checklist-section" aria-labelledby="scalability-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">06</div>
                                        <h3 id="scalability-heading">Growth and Scalability in the Future</h3>
                                    </div>
                                    <p>Your office should help you grow, not hold you back. A scalable workspace lets you grow without having to move around a lot or stop working.</p>
                                    <p>Make sure the provider lets you:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Adding more seats</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Growing into bigger spaces</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Moving to separate offices</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>This is very important for new businesses that are growing quickly.</p>

                                    <h4 style={{ marginTop: "20px", marginBottom: "12px", fontSize: "14px", fontWeight: "700", color: "var(--navy)" }}>Quick Check: Can Your Office Scale?</h4>
                                    <div style={{ overflowX: "auto" }}>
                                        <table className="comparison-table scale-check-table" aria-label="Scalability requirements checklist">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Requirement</th>
                                                    <th scope="col">Check</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>Add seats easily</td><td><span className="scale-check">Yes / No</span></td></tr>
                                                <tr><td>Expand to private office</td><td><span className="scale-check">Yes / No</span></td></tr>
                                                <tr><td>Upgrade to enterprise space</td><td><span className="scale-check">Yes / No</span></td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* 7. TOTAL COST */}
                                <section id="total-cost" className="reveal checklist-section" aria-labelledby="cost-heading">
                                    <div className="checklist-section-header">
                                        <div className="checklist-badge">07</div>
                                        <h3 id="cost-heading">Total Cost and Extra Fees</h3>
                                    </div>
                                    <p>Knowing the full cost structure helps you avoid costs that come up out of nowhere. A lot of businesses only think about rent and forget about other costs.</p>
                                    <p>Look for:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Deposit for security</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Costs for upkeep</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Fees for parking</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Costs for customisation</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>For detailed pricing, read: <a href="/managed-office-space/" className="pricing-link">Cost of Managed Office Space in Hyderabad</a></p>
                                </section>

                                {/* CTA 3 */}
                                <div className="inline-cta reveal" role="complementary" aria-label="Cost breakdown CTA">
                                    <div className="ic-text">
                                        <p className="ic-tag">Want a Cost Breakdown for Your Team?</p>
                                        <h3>Get Exact Office Options Based on Your Budget and Team Size</h3>
                                        <p>No hidden fees. Verified managed offices. Options in 24–48 hours.</p>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Get Verified Office Options
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>

                                {/* COMMON MISTAKES */}
                                <section id="mistakes" className="reveal" aria-labelledby="mistakes-heading">
                                    <h2 id="mistakes-heading">Things You Shouldn't Do</h2>
                                    <p>A lot of businesses do these things wrong:</p>
                                    <div className="check-list">
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Picking based only on price</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Not thinking about how big it can get</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Not looking over the terms of the lease</div>
                                        <div className="check-item cross"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Not paying attention to infrastructure</div>
                                    </div>
                                    <p style={{ marginTop: "14px" }}>Not making these mistakes can save you both time and money.</p>
                                </section>

                                {/* REAL EXAMPLE */}
                                <section id="real-example" className="reveal" aria-labelledby="example-heading">
                                    <h2 id="example-heading">Real-Life Example: Choosing the Wrong Office</h2>
                                    <div className="callout">
                                        <div className="callout-icon" aria-hidden="true">
                                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                        </div>
                                        <div>
                                            <h3>A Startup That Had to Move Twice</h3>
                                            <p>A startup in Hyderabad that is growing chose an office only because it was cheap. They had to move after six months because they had problems like not enough space, bad internet backup, and not enough meeting rooms.</p>
                                            <p style={{ marginTop: "10px" }}>On the other hand, companies that think about scalability and infrastructure ahead of time don't have these problems and grow smoothly.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* EXPERT INSIGHT */}
                                <section id="expert-insight" className="reveal" aria-labelledby="expert-heading">
                                    <h2 id="expert-heading">Expert Insight (EEAT)</h2>
                                    <div className="callout">
                                        <div className="callout-icon" aria-hidden="true">
                                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                        </div>
                                        <div>
                                            <h3>From PrimeDesk's Work With Startups and Enterprises</h3>
                                            <p>From PrimeDesk's work with startups and big businesses in the best business districts in Hyderabad, we know that:</p>
                                            <div className="check-list" style={{ marginTop: "10px" }}>
                                                <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Most businesses don't think about how much they will grow in the future</div>
                                                <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>A lot of people have problems because they chose the wrong workspace</div>
                                                <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Companies that pick scalable offices do better in terms of operations</div>
                                            </div>
                                            <p style={{ marginTop: "14px" }}>This is why a checklist that is well-organised is so important.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* WHY PRIMEDESK */}
                                <section id="why-primedesk" className="reveal" aria-labelledby="why-pd-heading">
                                    <h2 id="why-pd-heading">Why Businesses Pick PrimeDesk</h2>
                                    <p>PrimeDesk helps companies make better choices about their offices.</p>
                                    <div className="why-box">
                                        <p className="why-label">Why Companies Choose PrimeDesk</p>
                                        <div className="why-list">
                                            <div className="why-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><div><strong>Verified workspace operators</strong><span>Every office is verified before we recommend it.</span></div></div>
                                            <div className="why-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><div><strong>No brokerage fees</strong><span>Zero brokerage for tenants, always.</span></div></div>
                                            <div className="why-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><div><strong>Hand-picked office options</strong><span>Curated to match your team size and growth plans.</span></div></div>
                                            <div className="why-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><div><strong>24–48 hour turnaround</strong><span>Office options delivered fast.</span></div></div>
                                            <div className="why-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg><div><strong>Expert knowledge</strong><span>Knowledgeable about setting up startups and GCC offices.</span></div></div>
                                        </div>
                                    </div>

                                    <h3 style={{ marginTop: "24px", marginBottom: "14px" }}>Find the Best Managed Office in Hyderabad</h3>
                                    <p>PrimeDesk helps you find:</p>
                                    <div className="check-list">
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Managed workspaces</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Offices that are ready to use</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Workspaces for businesses</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Offices that are ready for GCC</div>
                                    </div>
                                </section>

                                {/* CTA 4 — BEFORE FAQ */}
                                <div className="inline-cta reveal" role="complementary" aria-label="Final office options CTA">
                                    <div className="ic-text">
                                        <p className="ic-tag">Get Verified Managed Office Options</p>
                                        <h3>Ready to Find Your Managed Office in Hyderabad?</h3>
                                        <p>Verified offices, no brokerage, options delivered in 24–48 hours.</p>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Get Verified Office Options
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>

                                {/* FAQ */}
                                <section id="faq" className="reveal" aria-labelledby="faq-heading">
                                    <h2 id="faq-heading">FAQs</h2>
                                    <p style={{ marginBottom: "20px" }}>Common questions about renting managed office space in Hyderabad.</p>
                                    <div className="faq-list" role="list">
                                        {faqs.map((faq, idx) => {
                                            const isOpen = openFaq === idx;
                                            return (
                                                <div key={idx} className={`faq-item${isOpen ? ' open' : ''}`} role="listitem">
                                                    <button className="faq-btn" aria-expanded={isOpen} aria-controls={`faq-body-${idx}`} id={`faq-trigger-${idx}`} onClick={() => setOpenFaq(isOpen ? null : idx)}>
                                                        <span className="faq-q">{faq.q}</span>
                                                        <div className="faq-chevron" aria-hidden="true">
                                                            <svg viewBox="0 0 24 24" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}><polyline points="6 9 12 15 18 9" /></svg>
                                                        </div>
                                                    </button>
                                                    <div className="faq-body" id={`faq-body-${idx}`} role="region" aria-labelledby={`faq-trigger-${idx}`} style={{ maxHeight: isOpen ? '500px' : '0px' }}>
                                                        <div className="faq-body-inner">{faq.a}</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>

                            </article>
                        </div>
                    </div>
                </div>

                <AuthorCard />

                {/* ══════ BOTTOM CTA ══════ */}
                <div className="bottom-cta-section">
                    <div className="wrap bcs-inner">
                        <p className="bcs-tag">PrimeDesk · Hyderabad's Managed Office Experts</p>
                        <h2 className="bcs-h2">Find the Best Managed Office in Hyderabad</h2>
                        <p className="bcs-p">PrimeDesk helps you find managed workspaces, plug &amp; play offices, scalable solutions, and GCC-ready spaces — with zero brokerage and options in 24–48 hours.</p>
                        <div className="bcs-actions">
                            <button className="bcs-btn-primary" onClick={openModal}>
                                Get Verified Office Options
                                <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                            <a href="mailto:hello@primedesk.in" className="bcs-btn-sec">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                hello@primedesk.in
                            </a>
                        </div>
                        <div className="bcs-trust">
                            <div className="bcs-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Zero Brokerage</div>
                            <div className="bcs-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>Verified Operators</div>
                            <div className="bcs-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
                            <div className="bcs-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>GCC &amp; Startup Ready</div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />

            {/* ══════ MOBILE BOTTOM CTA ══════ */}
            <div className="mobile-bottom-cta" role="complementary" aria-label="Mobile call to action">
                <div className="mbc-trust">
                    <div className="mbc-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Zero Brokerage</div>
                    <div className="mbc-trust-item" style={{ color: "var(--border)" }} aria-hidden="true">|</div>
                    <div className="mbc-trust-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>Verified Offices</div>
                </div>
                <button className="mbc-btn" onClick={openModal}>
                    Get Verified Office Options
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
            </div>

            {/* ══════ PAGE-SPECIFIC STYLES ══════ */}
            <style>{`
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }
        .bc-link { color: rgba(255,255,255,.45); }
        .pricing-link { color: var(--teal); font-weight: 600; }
        .explore-links { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 16px; padding: 12px 16px; background: #f0fdf9; border-radius: 10px; border: 1px solid #a7f3d0; }
        .explore-label { font-size: 12px; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: .5px; }
        .explore-link { font-size: 13px; font-weight: 600; color: var(--navy); text-decoration: underline; text-decoration-color: var(--teal); text-underline-offset: 3px; transition: color .2s; }
        .explore-link:hover { color: var(--teal); }

        /* Checklist overview grid */
        .checklist-overview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin: 16px 0; }
        .checklist-overview-item { display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: var(--white); border: 1px solid var(--border); border-radius: 10px; text-decoration: none; transition: all .2s; }
        .checklist-overview-item:hover { border-color: var(--teal); background: #f0fdf9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,201,177,.12); }
        .checklist-num { font-size: 11px; font-weight: 800; color: var(--teal); min-width: 24px; }
        .checklist-icon svg { width: 16px; height: 16px; fill: none; stroke: var(--navy); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
        .checklist-label { font-size: 12px; font-weight: 600; color: var(--navy); line-height: 1.3; }

        /* Section divider */
        .section-divider { border-top: 2px solid var(--border); padding-top: 32px; margin: 32px 0 0; }
        .section-divider h2 { font-size: 24px; font-weight: 800; color: var(--navy); }

        /* Checklist section */
        .checklist-section { border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 20px; background: var(--white); }
        .checklist-section-header { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
        .checklist-badge { width: 40px; height: 40px; border-radius: 10px; background: var(--navy); color: var(--white); font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; letter-spacing: .5px; }
        .checklist-section-header h3 { font-size: 18px; font-weight: 700; color: var(--navy); padding-top: 8px; line-height: 1.3; }

        /* Cross items */
        .check-item.cross svg { stroke: #ef4444; }
        .check-item.cross { color: var(--text-2); }

        /* Scale check table */
        .scale-check-table { max-width: 400px; }
        .scale-check { display: inline-flex; align-items: center; background: #f1f5f9; color: var(--text-2); border-radius: 6px; padding: 2px 10px; font-size: 12px; font-weight: 600; }

        /* Why box */
        .why-box { background: #f8fafc; border: 1px solid var(--border); border-radius: 14px; padding: 20px; margin: 20px 0; }
        .why-label { font-size: 12px; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
        .why-list { display: flex; flex-direction: column; gap: 12px; }
        .why-item { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text-1); line-height: 1.5; }
        .why-item svg { width: 16px; height: 16px; fill: none; stroke: var(--teal); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; margin-top: 2px; }
        .why-item strong { display: block; font-weight: 700; color: var(--navy); }
        .why-item span { font-size: 13px; color: var(--text-2); }

        /* Comparison table */
        .comparison-table { width: 100%; border-collapse: collapse; font-size: 14px; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(15,23,42,.07); }
        .comparison-table thead tr { background: var(--navy); color: #fff; }
        .comparison-table th { padding: 14px 18px; text-align: left; font-weight: 600; font-size: 13px; letter-spacing: .03em; }
        .comparison-table td { padding: 13px 18px; border-bottom: 1px solid var(--border); color: var(--text-1); background: #fff; }
        .comparison-table tbody tr:last-child td { border-bottom: none; }
        .comparison-table tbody tr:nth-child(even) td { background: #f8fafc; }
        .comparison-table td.highlight-yes { color: var(--teal); font-weight: 700; }
        .comparison-table td.highlight-bad { color: #ef4444; font-weight: 600; }

        /* FAQ */
        .faq-item.open .faq-btn { background: #f8fafc; }
        .faq-body { overflow: hidden; transition: max-height .3s ease; }

        @media (max-width: 768px) {
          .checklist-overview-grid { grid-template-columns: 1fr 1fr; }
          .checklist-section { padding: 16px; }
          .checklist-badge { width: 34px; height: 34px; font-size: 11px; }
          .checklist-section-header h3 { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .checklist-overview-grid { grid-template-columns: 1fr; }
          .comparison-table { font-size: 12px; }
          .comparison-table th, .comparison-table td { padding: 10px 12px; }
        }
      `}</style>

        </div>
    );
}