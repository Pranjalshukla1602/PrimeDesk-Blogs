'use client';
import { useState, useEffect } from 'react';
import '@/app/gcc-offices-hyderabad/primedesk.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthorCard from '@/components/AuthorCard';
import Image from 'next/image';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function ManagedOfficeBlogPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('in');
                });
            },
            { rootMargin: '-40px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        const sections = document.querySelectorAll('section[id]');
        const tocObs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-25% 0px -65% 0px' }
        );
        sections.forEach((s) => tocObs.observe(s));

        return () => { observer.disconnect(); tocObs.disconnect(); };
    }, []);

    const openModal = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };

    const faqs = [
        { q: 'What are the benefits of managed office spaces?', a: 'Lower cost, faster setup, flexibility, and scalability.' },
        { q: 'Are managed offices better than traditional offices?', a: 'Yes, for most growing companies due to flexibility and lower cost.' },
        { q: 'How quickly can I move into a managed office?', a: 'Typically within 7–15 days.' },
        { q: 'Why are companies shifting to flexible offices in Hyderabad?', a: 'Because they offer faster setup, lower cost, and scalability.' },
    ];

    return (
        <div className="gcc-page">

            <Header />

            {/* STICKY BAR */}
            <div id="sticky" role="banner" aria-label="Sticky navigation bar">
                <div className="sticky-inner">
                    <div className="sticky-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src="/images/logo.webp" alt="PrimeDesk Logo" width={96} height={24} style={{ height: '24px', width: 'auto' }} />
                        <span>PrimeDesk · Managed Office Solutions</span>
                    </div>
                    <div className="sticky-meta">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Zero Brokerage · 24hr Turnaround
                    </div>
                    <button className="sticky-btn" onClick={openModal} aria-label="Open consultation form">
                        Get Office Options
                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                </div>
            </div>

            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={closeModal}
                source="Managed Office Blog Page"
                title="Get Managed Office Options in 24 Hours"
                subtitle="Curated managed office spaces shared within 24–48 hours."
            />

            {/* HERO */}
            <header className="hero">
                <div className="wrap">
                    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '28px', fontSize: '12px', color: 'rgba(255,255,255,.35)' }}>
                        <a href="/" style={{ color: 'rgba(255,255,255,.45)', transition: 'color .2s' }}>Home</a>
                        <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                        <a href="/blogs/" style={{ color: 'rgba(255,255,255,.45)', transition: 'color .2s' }}>Blog</a>
                        <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                        <span aria-current="page" style={{ color: 'rgba(255,255,255,.55)' }}>Managed Office Spaces</span>
                    </nav>

                    <div className="hero-grid">
                        <div>
                            <div className="hero-badge">
                                <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                Hyderabad's Leading Managed Office Platform
                            </div>
                            <h1>Why Managed Office Spaces Are Replacing <em>Traditional Offices</em> in Hyderabad</h1>
                            <p className="hero-lead">
                                Companies in Hyderabad are moving to managed office spaces because they are cheaper to set up, can be moved into more quickly, and can be made bigger or smaller as needed. Zero brokerage, options in 24 hours.
                            </p>

                            <div className="hero-stats">
                                <div className="stat-item"><div className="val">5+</div><div className="lbl">Years of Experience</div></div>
                                <div className="stat-item"><div className="val">4+</div><div className="lbl">Premium Locations</div></div>
                                <div className="stat-item"><div className="val">50+</div><div className="lbl">Clients Served</div></div>
                                <div className="stat-item"><div className="val">₹0</div><div className="lbl">Brokerage</div></div>
                            </div>

                            <div className="hero-trust">
                                <span className="hero-trust-label">Trusted by</span>
                                <div className="trust-logos">
                                    <span>Keka</span><span>Cloud Angles</span><span>SoftStandard Solutions</span><span>Envista</span>
                                </div>
                            </div>
                        </div>

                        <div className="hide-on-mobile">
                            <div className="hero-form-card">
                                <div className="hfc-accent"></div>
                                <div className="hfc-body">
                                    <span className="urgency-badge">Limited: Free Consultation This Week</span>
                                    <LeadCaptureForm
                                        source="Managed Office Blog Page"
                                        title="Look at Managed Office Options for Your Team"
                                        subtitle="No broker fees · Verified office spaces · Options in 24–48 hours"
                                        showTrustBadges={true}
                                    />
                                    <div className="social-proof" style={{ marginTop: '20px' }}>
                                        <div className="avatar-stack">
                                            <div className="avatar" style={{ background: '#2563eb' }}>A</div>
                                            <div className="avatar" style={{ background: '#059669' }}>M</div>
                                            <div className="avatar" style={{ background: '#d97706' }}>S</div>
                                            <div className="avatar" style={{ background: '#7c3aed' }}>R</div>
                                        </div>
                                        <p className="sp-text"><b>200+ companies</b> found offices through PrimeDesk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-img-strip" style={{ marginTop: '40px' }}>
                        <Image
                            src="/images/hero_managed_office_spaces.jpeg"
                            alt="Managed office space in Hyderabad replacing traditional offices"
                            width={1200} height={600} priority sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className="img-badges">
                            <div className="img-badge">
                                <svg viewBox="0 0 24 24" style={{ stroke: 'var(--teal)' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Hitech City, Hyderabad
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ARTICLE + TOC */}
            <div className="article-wrap">
                <div className="wrap">
                    <div className="article-grid">

                        {/* SIDEBAR TOC */}
                        <aside>
                            <div className="toc-card">
                                <p className="toc-heading">In This Article</p>
                                <ul className="toc-list" id="toc">
                                    <li><a href="#who-should" className={activeSection === 'who-should' ? 'active' : ''}>Who Should Consider Managed Offices</a></li>
                                    <li><a href="#problem-traditional" className={activeSection === 'problem-traditional' ? 'active' : ''}>Problem with Traditional Offices</a></li>
                                    <li><a href="#cost-comparison" className={activeSection === 'cost-comparison' ? 'active' : ''}>Cost Comparison</a></li>
                                    <li><a href="#what-are-managed" className={activeSection === 'what-are-managed' ? 'active' : ''}>What Are Managed Office Spaces?</a></li>
                                    <li><a href="#managed-vs-traditional" className={activeSection === 'managed-vs-traditional' ? 'active' : ''}>Managed vs Traditional Office</a></li>
                                    <li><a href="#which-to-choose" className={activeSection === 'which-to-choose' ? 'active' : ''}>Which Should You Choose?</a></li>
                                    <li><a href="#less-capex" className={activeSection === 'less-capex' ? 'active' : ''}>Less Capital Expenditure</a></li>
                                    <li><a href="#faster-setup" className={activeSection === 'faster-setup' ? 'active' : ''}>Faster Office Setup</a></li>
                                    <li><a href="#scalability" className={activeSection === 'scalability' ? 'active' : ''}>Scalability Benefits</a></li>
                                    <li><a href="#best-locations" className={activeSection === 'best-locations' ? 'active' : ''}>Best Locations</a></li>
                                    <li><a href="#real-example" className={activeSection === 'real-example' ? 'active' : ''}>Real-Life Example</a></li>
                                    <li><a href="#when-traditional" className={activeSection === 'when-traditional' ? 'active' : ''}>When Traditional Offices Make Sense</a></li>
                                    <li><a href="#why-primedesk" className={activeSection === 'why-primedesk' ? 'active' : ''}>Why PrimeDesk</a></li>
                                    <li><a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQs</a></li>
                                </ul>
                                <div className="toc-cta">
                                    <p>Ready to find your managed office? Get options within 24 hours — zero brokerage.</p>
                                    <button className="toc-cta-btn" onClick={openModal}>Get Office Options →</button>
                                </div>
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="article">

                            {/* INTRO */}
                            <div className="article-intro reveal">
                                <p>Hyderabad has quickly become a major business center, drawing in startups, big businesses, and international companies that want to set up Global Capability Centers (GCCs).</p>
                                <p>But the way businesses pick their office spaces is changing. Companies are moving away from traditional office leasing in Hyderabad and choosing flexible office spaces that are fast, efficient, and able to grow with their needs.</p>
                                <p>This is because traditional offices don't meet the needs of modern businesses.</p>
                            </div>

                            {/* QUICK LOOK CALLOUT */}
                            <div className="callout reveal">
                                <div className="callout-icon">
                                    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <div>
                                    <h3>A Quick Look at Managed Offices and Traditional Offices</h3>
                                    <div className="check-list" style={{ marginTop: '10px' }}>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Managed offices are cheap, easy to set up, and can grow with your business.</div>
                                        <div className="check-item" style={{ color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Traditional offices are expensive, take a long time to set up, and don't offer much flexibility.</div>
                                    </div>
                                    <p style={{ marginTop: '10px' }}>Most businesses that are growing in Hyderabad prefer managed office spaces because they make things run more smoothly and quickly.</p>
                                </div>
                            </div>

                            {/* WHO SHOULD */}
                            <section id="who-should" className="reveal">
                                <h2>Who Should Think About Managed Office Spaces?</h2>
                                <p>This answer is perfect for:</p>
                                <div className="skills-box">
                                    <p className="skills-box-label">Ideal For</p>
                                    <div className="skills-grid">
                                        <div className="skill-item"><span className="skill-dot"></span>Startups getting their first office ready</div>
                                        <div className="skill-item"><span className="skill-dot"></span>Teams that are getting bigger quickly</div>
                                        <div className="skill-item"><span className="skill-dot"></span>Businesses growing their operations</div>
                                        <div className="skill-item"><span className="skill-dot"></span>GCCs moving to Hyderabad</div>
                                    </div>
                                </div>

                                <div className="inline-cta reveal" style={{ marginTop: '24px' }}>
                                    <div className="ic-text">
                                        <p className="ic-tag">PrimeDesk · Zero Brokerage</p>
                                        <h3>Look at the Different Managed Office Options for Your Team</h3>
                                        <p>Get personalised workspace solutions that fit your team's size, budget, and plans for growth.</p>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No broker fees</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Verified office spaces</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Choices in 24 to 48 hours</div>
                                        </div>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Look at Managed Office Options
                                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>
                            </section>

                            {/* PROBLEM WITH TRADITIONAL */}
                            <section id="problem-traditional" className="reveal">
                                <h2>The Problem with Traditional Offices</h2>
                                <p>Traditional office leasing comes with multiple challenges:</p>
                                <div className="benefits-grid">
                                    <div className="benefit-card reveal reveal-delay-1">
                                        <div className="ben-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                                        <div><div className="ben-title">High Setup Cost</div><div className="ben-sub">Large upfront investment before operations begin</div></div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-2">
                                        <div className="ben-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                        <div><div className="ben-title">Long Setup Time</div><div className="ben-sub">Delays operations for months before move-in</div></div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-1">
                                        <div className="ben-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
                                        <div><div className="ben-title">Fixed Lease Size</div><div className="ben-sub">No scalability as your team grows</div></div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-2">
                                        <div className="ben-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></div>
                                        <div><div className="ben-title">Maintenance Burden</div><div className="ben-sub">Operational overhead that distracts from business</div></div>
                                    </div>
                                </div>
                                <p style={{ marginTop: '16px' }}>These limitations make traditional offices less suitable for fast-growing companies.</p>
                            </section>

                            {/* COST COMPARISON */}
                            <section id="cost-comparison" className="reveal">
                                <h2>Cost Comparison: Managed vs Traditional Office</h2>
                                <p>Managed offices reduce upfront investment and simplify budgeting, making them ideal for growing companies.</p>
                                <div className="district-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <h3>Managed Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Setup Cost: Minimal</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Monthly Cost: Predictable</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Maintenance: Included</div>
                                        </div>
                                        <a href="#" className="d-link" style={{ marginTop: '14px' }} onClick={openModal}>Explore Managed Offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2" style={{ opacity: 0.75 }}>
                                        <div className="d-icon" style={{ background: 'rgba(239,68,68,0.1)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
                                        <h3>Traditional Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Setup Cost: High</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Monthly Cost: Variable</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Maintenance: Extra cost</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* WHAT ARE MANAGED OFFICES */}
                            <section id="what-are-managed" className="reveal">
                                <h2>What Are Managed Office Spaces?</h2>
                                <p>Managed office spaces are fully furnished, ready-to-use workspaces that are great for businesses that want to be flexible and get things done quickly.</p>
                                <p>Here are some of them:</p>
                                <div className="check-list">
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Furnished workstations</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Internet and utilities</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Rooms for meetings</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Maintenance and operations</div>
                                </div>
                                <p style={{ marginTop: '14px' }}>This gets rid of the need for multiple vendors and delays in setup.</p>
                            </section>

                            {/* MANAGED VS TRADITIONAL FULL */}
                            <section id="managed-vs-traditional" className="reveal">
                                <h2>Managed Office vs Traditional Office</h2>
                                <p>Managed offices clearly outperform traditional setups for modern businesses:</p>
                                <div className="district-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <h3>Managed Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Setup Cost: Low</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Move-in Time: 7–15 days</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Flexibility: High</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Scalability: Easy</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Operations: Managed</div>
                                        </div>
                                        <a href="#" className="d-link" style={{ marginTop: '14px' }} onClick={openModal}>Explore Managed Offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2" style={{ opacity: 0.75 }}>
                                        <div className="d-icon" style={{ background: 'rgba(239,68,68,0.1)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
                                        <h3>Traditional Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Setup Cost: High</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Move-in Time: 2–4 months</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Flexibility: Low</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Scalability: Difficult</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Operations: Self-managed</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* WHICH TO CHOOSE */}
                            <section id="which-to-choose" className="reveal">
                                <h2>Should You Choose Managed Office or Traditional Office?</h2>
                                <div className="district-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginTop: '20px' }}>
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                                        <h3>Startups</h3>
                                        <p>Best Option: <strong>Managed Office</strong></p>
                                        <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--text-2)' }}>Low cost + flexibility for early-stage teams</p>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                                        <h3>Growing Teams</h3>
                                        <p>Best Option: <strong>Managed Office</strong></p>
                                        <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--text-2)' }}>Scalability as headcount increases</p>
                                    </div>
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                                        <h3>Enterprises</h3>
                                        <p>Best Option: <strong>Managed Office / Hybrid</strong></p>
                                        <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--text-2)' }}>Efficiency at scale</p>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2" style={{ opacity: 0.75 }}>
                                        <div className="d-icon" style={{ background: 'rgba(239,68,68,0.08)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
                                        <h3>Large Stable Organisations</h3>
                                        <p>Best Option: <strong>Traditional</strong></p>
                                        <p style={{ marginTop: '6px', fontSize: '13px', color: 'var(--text-2)' }}>Long-term control when cost isn't an issue</p>
                                    </div>
                                </div>
                            </section>

                            {/* LESS CAPEX */}
                            <section id="less-capex" className="reveal">
                                <h2>1. Less Money Spent on Capital</h2>
                                <p>One of the best things about managed offices is that they cost less up front. Traditional offices need:</p>
                                <div className="check-list">
                                    <div className="check-item" style={{ color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Furniture and interiors</div>
                                    <div className="check-item" style={{ color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>IT infrastructure</div>
                                    <div className="check-item" style={{ color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Deposits for security</div>
                                </div>
                                <p style={{ marginTop: '14px' }}>Managed offices get rid of these costs by giving you fully furnished workspaces.</p>
                                <blockquote><p>Businesses can put more money into growth instead of infrastructure when capital expenses are lower.</p></blockquote>
                            </section>

                            {/* FASTER SETUP */}
                            <section id="faster-setup" className="reveal">
                                <h2>2. Setting Up an Office Faster</h2>
                                <p>Time is very important for businesses that are growing. Managed offices let you:</p>
                                <div className="check-list">
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Move in in a few days</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Start operations right away</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No delays in setup</div>
                                </div>
                                <blockquote style={{ marginTop: '16px' }}><p>Companies can focus on hiring and running their businesses instead of setting up their offices.</p></blockquote>

                                <div className="inline-cta reveal" style={{ marginTop: '24px' }}>
                                    <div className="ic-text">
                                        <p className="ic-tag">Thinking About Moving to a Managed Office?</p>
                                        <h3>Stay away from high setup costs and delays</h3>
                                        <p>We help you find offices that are ready to move into that meet your needs exactly.</p>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Find Office Options That Work for You
                                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>
                            </section>

                            {/* SCALABILITY */}
                            <section id="scalability" className="reveal">
                                <h2>3. Benefits of Scalability</h2>
                                <p>Managed offices are made to help businesses grow. Businesses can:</p>
                                <div className="check-list">
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Easily add more seats</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Move up to bigger spaces</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Grow without moving</div>
                                </div>
                                <blockquote style={{ marginTop: '16px' }}><p>Scalability keeps things running smoothly and efficiently over time.</p></blockquote>
                            </section>

                            {/* BEST LOCATIONS */}
                            <section id="best-locations" className="reveal">
                                <h2>Best Locations for Managed Offices in Hyderabad</h2>
                                <p>Top locations include:</p>
                                <div className="district-grid">
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
                                        <h3>Hitech City</h3>
                                        <p>The IT heart of Hyderabad. Home to multinational technology companies with enterprise-grade managed office buildings.</p>
                                        <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                                        <h3>Financial District</h3>
                                        <p>Rapidly growing corporate hub. Modern infrastructure supporting large-scale business operations for enterprises and GCCs.</p>
                                        <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-3">
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                        <h3>Gachibowli</h3>
                                        <p>Corporate campuses and business office complexes with good transportation links and access to high-quality managed spaces.</p>
                                        <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                                    </div>
                                </div>
                            </section>

                            {/* EXPERT INSIGHT */}
                            <div className="callout reveal">
                                <div className="callout-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                                <div>
                                    <h3>Expert Insight from PrimeDesk</h3>
                                    <p>From PrimeDesk's work with startups and big businesses in Hyderabad:</p>
                                    <div className="check-list" style={{ marginTop: '10px' }}>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Companies would rather have flexibility than ownership.</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>How fast it is to set up is a key factor in the decision.</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Scalable offices lower costs over time.</div>
                                    </div>
                                    <p style={{ marginTop: '10px' }}>Managed office spaces are growing because of this change.</p>
                                </div>
                            </div>

                            {/* REAL EXAMPLE */}
                            <section id="real-example" className="reveal">
                                <h2>Real-Life Example: Managed Office vs. Traditional Office</h2>
                                <p>A business that wants to build an office with 50 seats:</p>
                                <div className="steps-box reveal" style={{ marginTop: '16px' }}>
                                    <p className="steps-label">Side-by-side outcome</p>
                                    <div className="step-row">
                                        <div className="step-num" style={{ background: 'rgba(239,68,68,0.12)', color: '#ef4444', border: '1.5px solid rgba(239,68,68,0.2)' }}>✕</div>
                                        <div className="step-text">Traditional setup took <strong>three months</strong> and cost a lot.</div>
                                    </div>
                                    <div className="step-row">
                                        <div className="step-num">✓</div>
                                        <div className="step-text">Managed office setup done in <strong>10 days</strong>.</div>
                                    </div>
                                </div>
                                <div className="check-list" style={{ marginTop: '16px' }}>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Operations that are faster</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Lower cost</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>More room to grow</div>
                                </div>
                            </section>

                            {/* WHEN TRADITIONAL MAKES SENSE */}
                            <section id="when-traditional" className="reveal">
                                <h2>When Traditional Offices Still Make Sense</h2>
                                <p>If you meet these criteria, traditional offices may be right for you:</p>
                                <div className="govt-grid">
                                    <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>You need space that is fixed for a long time</div>
                                    <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Customization is extremely high</div>
                                    <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Money isn't an issue</div>
                                </div>
                                <p style={{ marginTop: '14px' }}>But most companies that are growing want flexibility.</p>
                            </section>

                            {/* WHY PRIMEDESK */}
                            <section id="why-primedesk" className="reveal">
                                <h2>Why Businesses Pick PrimeDesk</h2>
                                <p>Businesses can find the right office solutions with PrimeDesk. Stop putting a lot of money into offices that you won't need anymore. PrimeDesk helps you find office spaces in Hyderabad that are flexible and can grow with your business. You won't have to deal with setup problems or long waits.</p>
                                <div className="why-box reveal">
                                    <p className="why-label">What PrimeDesk Offers</p>
                                    <div className="why-list">
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Checked workspace operators</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No broking fees</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Hand-picked office options</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>24 to 48 hours to get it done</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Knowledgeable about enterprise and GCC setups</div>
                                    </div>
                                </div>

                                <div className="inline-cta reveal" style={{ marginTop: '24px' }}>
                                    <div className="ic-text">
                                        <p className="ic-tag">Change to a More Intelligent Office Setup</p>
                                        <h3>Look at Managed Office Options Today</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No broking fees</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Verified office spaces</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Move in in a few days</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Choices in 24 to 48 hours</div>
                                        </div>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Look at Managed Office Options
                                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>
                            </section>

                            {/* FAQ */}
                            <section id="faq" className="reveal">
                                <h2>Frequently Asked Questions</h2>
                                <p style={{ marginBottom: '20px' }}>Common questions about managed office spaces in Hyderabad.</p>
                                <div className="faq-list">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`}>
                                            <button className="faq-btn" aria-expanded={activeFaq === idx} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                                                <span className="faq-q">{faq.q}</span>
                                                <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
                                            </button>
                                            <div className="faq-body" style={{ maxHeight: activeFaq === idx ? '500px' : undefined }}>
                                                <div className="faq-body-inner">{faq.a}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </main>
                    </div>
                </div>
            </div>

            <AuthorCard />

            {/* BOTTOM CTA */}
            <div className="bottom-cta-section">
                <div className="wrap bcs-inner">
                    <p className="bcs-tag">PrimeDesk · Hyderabad's Managed Office Experts</p>
                    <h2 className="bcs-h2">Change to a More Intelligent Office Setup</h2>
                    <p className="bcs-p">Stop putting a lot of money into offices that you won't need anymore. PrimeDesk helps you find office spaces in Hyderabad that are flexible and can grow with your business. You won't have to deal with setup problems or long waits.</p>
                    <div className="bcs-actions">
                        <button className="bcs-btn-primary" onClick={openModal}>
                            Schedule Managed Office Consultation
                            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </button>
                        <a href="mailto:info@primedesk.co.in" className="bcs-btn-sec">
                            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            info@primedesk.co.in
                        </a>
                    </div>
                    <div className="bcs-trust">
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero Brokerage</div>
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Verified Operators</div>
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>7–15 Day Move-In</div>
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>24hr Turnaround</div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* MOBILE BOTTOM CTA */}
            <div className="mobile-bottom-cta">
                <div className="mbc-trust">
                    <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero Brokerage</div>
                    <div className="mbc-trust-item" style={{ color: 'var(--border)' }}>|</div>
                    <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Move In 7–15 Days</div>
                </div>
                <button className="mbc-btn" onClick={openModal}>
                    Talk to a Workspace Expert
                    <svg viewBox="0 0 24 24"><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
            </div>

        </div>
    );
}