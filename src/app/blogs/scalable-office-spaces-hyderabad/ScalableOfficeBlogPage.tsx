'use client';
import { useState, useEffect } from 'react';
import '@/app/gcc-offices-hyderabad/primedesk.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthorCard from '@/components/AuthorCard';
import Image from 'next/image';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function ScalableOfficeBlogPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                    }
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

        return () => {
            observer.disconnect();
            tocObs.disconnect();
        };
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
        {
            q: 'What is a scalable office space?',
            a: 'A scalable office space allows businesses to expand their team size without relocating, offering flexible layouts, modular seating, and infrastructure that grows with your headcount.',
        },
        {
            q: 'Why do companies prefer managed offices for scaling?',
            a: 'Managed offices offer flexibility, lower setup costs, easy expansion within the same building or network, and ready-to-use infrastructure — eliminating the disruption of repeated relocations.',
        },
        {
            q: 'How fast can a company scale office space?',
            a: 'With managed offices, companies can expand within weeks. PrimeDesk helps you find offices where you can add seats, upgrade to a larger floor, or move to an adjacent unit without operational downtime.',
        },
        {
            q: 'Which areas are best for scalable offices in Hyderabad?',
            a: 'Hitech City is ideal for startups and tech companies. Financial District is best for enterprises and GCC setups. Gachibowli offers a balanced mix of cost and connectivity.',
        },
        {
            q: 'What does it cost to scale office space in Hyderabad?',
            a: 'Approximate monthly costs: 20–50 seats ₹1.5L–₹6L; 50–100 seats ₹4L–₹12L; 100–200+ seats ₹10L–₹40L+. Costs vary by location, building grade, and customisation.',
        },
        {
            q: 'Does PrimeDesk charge brokerage for office space?',
            a: 'No. PrimeDesk offers zero brokerage for tenants. We connect businesses with verified workspace operators and developers, providing transparent comparisons and fast turnaround.',
        },
    ];

    return (
        <div className="gcc-page">

            {/* ══════ TOP NAV ══════ */}
            <Header />

            {/* ══════ STICKY BAR ══════ */}
            <div id="sticky" role="banner" aria-label="Sticky navigation bar">
                <div className="sticky-inner">
                    <div className="sticky-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Image src="/images/logo.webp" alt="PrimeDesk Logo" width={96} height={24} style={{ height: '24px', width: 'auto' }} />
                        <span>PrimeDesk · Scalable Office Solutions</span>
                    </div>
                    <div className="sticky-meta">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Zero Brokerage · 24–48hr Turnaround
                    </div>
                    <button className="sticky-btn" onClick={openModal} aria-label="Open consultation form">
                        Get Office Options
                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                </div>
            </div>

            {/* ══════ MODAL ══════ */}
            <LeadCaptureModal
                isOpen={modalOpen}
                onClose={closeModal}
                source="Scalable Office Blog Page"
                title="Get Scalable Office Options in 24 Hours"
                subtitle="Curated office options that grow with your team — shared within 24–48 hours."
            />

            {/* ══════ HERO ══════ */}
            <header className="hero">
                <div className="wrap">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '28px', fontSize: '12px', color: 'rgba(255,255,255,.35)' }}>
                        <a href="/" style={{ color: 'rgba(255,255,255,.45)', transition: 'color .2s' }}>Home</a>
                        <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                        <a href="/blogs/" style={{ color: 'rgba(255,255,255,.45)', transition: 'color .2s' }}>Blog</a>
                        <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                        <span aria-current="page" style={{ color: 'rgba(255,255,255,.55)' }}>Scalable Office Spaces</span>
                    </nav>

                    <div className="hero-grid">
                        {/* Left: headline + stats */}
                        <div>
                            <div className="hero-badge">
                                <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                Hyderabad's #1 Scalable Workspace Platform
                            </div>
                            <h1>Scalable Office Spaces for Growing Companies: <em>From 20 Seats to 200 Seats</em></h1>
                            <p className="hero-lead">
                                Stop moving offices every time your team grows. Find managed workspaces in Hyderabad that scale with you — from 20 seats to 200+ — without disrupting operations. Zero brokerage, options in 24 hours.
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

                        {/* Right: 2-step lead form */}
                        <div className="hide-on-mobile">
                            <div className="hero-form-card">
                                <div className="hfc-accent"></div>
                                <div className="hfc-body">
                                    <span className="urgency-badge">Limited: Free Consultation This Week</span>
                                    <LeadCaptureForm
                                        source="Scalable Office Blog Page"
                                        title="Get Scalable Office Options in 24 Hours"
                                        subtitle="Grow without moving · Zero brokerage · 20–200+ seats"
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

                    {/* Full-width hero image */}
                    <div className="hero-img-strip" style={{ marginTop: '40px' }}>
                        <Image
                            src="/images/hero_nanobanana.jpg"
                            alt="Scalable managed office space in Hyderabad for growing companies"
                            width={1200}
                            height={600}
                            priority
                            sizes="100vw"
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

            {/* ══════ ARTICLE + TOC ══════ */}
            <div className="article-wrap">
                <div className="wrap">
                    <div className="article-grid">

                        {/* SIDEBAR TOC */}
                        <aside>
                            <div className="toc-card">
                                <p className="toc-heading">In This Article</p>
                                <ul className="toc-list" id="toc">
                                    <li><a href="#why-scalability" className={activeSection === 'why-scalability' ? 'active' : ''}>Why Scalability Matters</a></li>
                                    <li><a href="#problem-traditional" className={activeSection === 'problem-traditional' ? 'active' : ''}>Problem with Traditional Leasing</a></li>
                                    <li><a href="#what-are-scalable" className={activeSection === 'what-are-scalable' ? 'active' : ''}>What Are Scalable Office Spaces?</a></li>
                                    <li><a href="#managed-vs-traditional" className={activeSection === 'managed-vs-traditional' ? 'active' : ''}>Managed vs Traditional Office</a></li>
                                    <li><a href="#how-to-scale" className={activeSection === 'how-to-scale' ? 'active' : ''}>How Companies Scale 20→200</a></li>
                                    <li><a href="#cost-of-scaling" className={activeSection === 'cost-of-scaling' ? 'active' : ''}>Cost of Scaling</a></li>
                                    <li><a href="#best-locations" className={activeSection === 'best-locations' ? 'active' : ''}>Best Locations</a></li>
                                    <li><a href="#checklist" className={activeSection === 'checklist' ? 'active' : ''}>Scalability Checklist</a></li>
                                    <li><a href="#mistakes" className={activeSection === 'mistakes' ? 'active' : ''}>Common Mistakes</a></li>
                                    <li><a href="#real-example" className={activeSection === 'real-example' ? 'active' : ''}>Real Example</a></li>
                                    <li><a href="#why-primedesk" className={activeSection === 'why-primedesk' ? 'active' : ''}>Why PrimeDesk</a></li>
                                    <li><a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQs</a></li>
                                </ul>
                                <div className="toc-cta">
                                    <p>Ready to find an office that grows with you? Get options within 24 hours — zero brokerage.</p>
                                    <button className="toc-cta-btn" onClick={openModal}>Get Office Options →</button>
                                </div>
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="article">

                            {/* INTRO */}
                            <div className="article-intro reveal">
                                <p>
                                    Hyderabad is now one of India's fastest-growing business centres, with new businesses, scale-ups, and established companies growing quickly. But one of the biggest problems that growing businesses face is moving offices too often because the team is expanding.
                                </p>
                                <p>
                                    Moving offices over and over again leads to disruption of operations, loss of productivity, higher costs, and unhappy employees. This is why companies are now shifting towards scalable office spaces in Hyderabad that allow them to grow from 20 seats to 200+ seats seamlessly.
                                </p>
                            </div>

                            {/* QUICK GUIDE */}
                            <div className="callout reveal" style={{ marginBottom: '28px' }}>
                                <div className="callout-icon">
                                    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <div>
                                    <h3>Quick Guide: How to Expand Your Office from 20 to 200 Seats</h3>
                                    <div className="check-list" style={{ marginTop: '10px' }}>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Start with a flexible managed office with 20 to 50 seats</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Get a dedicated office with 50 to 100 seats</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Grow to the enterprise level (100–200+ seats)</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Choose places where you can grow</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Make sure the lease and infrastructure are flexible</div>
                                    </div>
                                </div>
                            </div>

                            {/* WHO SHOULD CHOOSE */}
                            <div className="skills-box reveal">
                                <p className="skills-box-label">Who Should Choose Scalable Office Spaces?</p>
                                <div className="skills-grid">
                                    <div className="skill-item"><span className="skill-dot"></span>Startups that are growing quickly</div>
                                    <div className="skill-item"><span className="skill-dot"></span>Companies that recently raised funding</div>
                                    <div className="skill-item"><span className="skill-dot"></span>Companies growing their teams</div>
                                    <div className="skill-item"><span className="skill-dot"></span>GCC setups</div>
                                </div>
                            </div>

                            {/* INLINE CTA — GET SCALABLE OPTIONS */}
                            <div className="inline-cta reveal">
                                <div className="ic-text">
                                    <p className="ic-tag">PrimeDesk · Zero Brokerage</p>
                                    <h3>Get Scalable Office Options for Your Team</h3>
                                    <p>Find office spaces that can grow with your business — options in 24 to 48 hours.</p>
                                    <div className="check-list" style={{ marginTop: '10px' }}>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Grow without moving</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Offices in the best parts of Hyderabad</div>
                                        <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Options in 24 to 48 hours</div>
                                    </div>
                                </div>
                                <button className="ic-btn" onClick={openModal}>
                                    Get Free Expert Advice
                                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </button>
                            </div>

                            {/* WHY SCALABILITY MATTERS */}
                            <section id="why-scalability" className="reveal">
                                <h2>Why Scalability Matters in Office Space</h2>
                                <p>
                                    It's no longer a choice to pick a scalable workspace — it's a strategic decision. As businesses grow, their needs for space change: more workers, more rooms for meetings, better infrastructure, and more brand presence.
                                </p>
                                <p>
                                    A non-scalable office forces you to move constantly, but a scalable office lets you keep growing without any problems.
                                </p>
                                <blockquote>
                                    <p>Most businesses outgrow their offices in 6 to 12 months. Moving causes significant disruption. Scalable offices lower costs and problems in the long run.</p>
                                </blockquote>
                            </section>

                            {/* PROBLEM WITH TRADITIONAL LEASING */}
                            <section id="problem-traditional" className="reveal">
                                <h2>The Problem with Traditional Office Leasing</h2>
                                <p>
                                    Traditional offices are not designed for fast-growing companies. Here's why:
                                </p>
                                <div className="benefits-grid">
                                    <div className="benefit-card reveal reveal-delay-1">
                                        <div className="ben-icon">
                                            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                        </div>
                                        <div>
                                            <div className="ben-title">Fixed Lease Size</div>
                                            <div className="ben-sub">No flexibility to expand as headcount grows</div>
                                        </div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-2">
                                        <div className="ben-icon">
                                            <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <div>
                                            <div className="ben-title">High Setup Cost</div>
                                            <div className="ben-sub">Expensive relocation every time you grow</div>
                                        </div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-1">
                                        <div className="ben-icon">
                                            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        </div>
                                        <div>
                                            <div className="ben-title">Long Lock-in Periods</div>
                                            <div className="ben-sub">Reduced agility when the market changes</div>
                                        </div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-2">
                                        <div className="ben-icon">
                                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                        </div>
                                        <div>
                                            <div className="ben-title">No Expansion Path</div>
                                            <div className="ben-sub">Forced relocation disrupts team and operations</div>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ marginTop: '16px' }}>
                                    This is why companies are moving towards managed office space in Hyderabad.
                                </p>
                            </section>

                            {/* WHAT ARE SCALABLE OFFICES */}
                            <section id="what-are-scalable" className="reveal">
                                <h2>What Are Scalable Office Spaces?</h2>
                                <p>
                                    Scalable office spaces are flexible, managed workspaces that can grow with your team. They are great for businesses that expect their teams to grow quickly.
                                </p>
                                <div className="check-list">
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Office layouts that can be changed and reconfigured</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Flexible seating expansion within the same building</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Ready-to-use infrastructure from day one</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Flexibility in both short and long-term lease terms</div>
                                </div>
                            </section>

                            {/* MANAGED VS TRADITIONAL */}
                            <section id="managed-vs-traditional" className="reveal">
                                <h2>Managed Office vs Traditional Office (For Scaling)</h2>
                                <div className="district-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon">
                                            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <h3>Managed Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>High scalability</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Fast setup time</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>High flexibility</div>
                                            <div className="check-item" style={{ fontSize: '13px' }}><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Easy expansion</div>
                                        </div>
                                        <a href="#" className="d-link" style={{ marginTop: '14px' }} onClick={openModal}>
                                            Explore Managed Offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2" style={{ opacity: 0.75 }}>
                                        <div className="d-icon" style={{ background: 'rgba(239,68,68,0.1)' }}>
                                            <svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                        </div>
                                        <h3>Traditional Office</h3>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Low scalability</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Slow setup time</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Low flexibility</div>
                                            <div className="check-item" style={{ fontSize: '13px', color: 'var(--text-2)' }}><svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>Difficult expansion</div>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ marginTop: '14px' }}>
                                    Managed offices clearly provide better scalability for growing teams.
                                </p>
                            </section>

                            {/* HOW COMPANIES SCALE */}
                            <section id="how-to-scale" className="reveal">
                                <h2>How Companies Scale from 20 to 200 Seats</h2>
                                <p>Scaling office space is a three-stage journey. Here's what each stage looks like:</p>

                                <div className="benefits-grid" style={{ gridTemplateColumns: '1fr', gap: '14px', marginTop: '20px' }}>
                                    <div className="benefit-card reveal reveal-delay-1" style={{ padding: '20px 22px' }}>
                                        <div className="ben-icon" style={{ background: 'rgba(16,185,129,0.1)', fontSize: '20px', color: '#10b981', fontWeight: 700, fontFamily: 'var(--heading)' }}>
                                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="ben-title">Stage 1: 20–50 Employees</div>
                                            <div className="ben-sub" style={{ marginTop: '6px', lineHeight: 1.6 }}>
                                                Start with shared office space or private cabins. Focus on layouts that can change as your team grows. Low cost to set up, maximum flexibility to adjust.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-2" style={{ padding: '20px 22px' }}>
                                        <div className="ben-icon" style={{ background: 'rgba(37,99,235,0.1)' }}>
                                            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="ben-title">Stage 2: 50–100 Employees</div>
                                            <div className="ben-sub" style={{ marginTop: '6px', lineHeight: 1.6 }}>
                                                Move to a dedicated office space with personalised branding and structured meeting rooms. This stage reflects a transition from early-stage hustle to organised growth.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="benefit-card reveal reveal-delay-1" style={{ padding: '20px 22px' }}>
                                        <div className="ben-icon" style={{ background: 'rgba(124,58,237,0.1)' }}>
                                            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="ben-title">Stage 3: 100–200+ Employees</div>
                                            <div className="ben-sub" style={{ marginTop: '6px', lineHeight: 1.6 }}>
                                                Take whole floors with enterprise infrastructure and long-term scalability. Companies now require customised layouts, department-wise seating, and a strong company culture.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Inline CTA after stages */}
                                <div className="inline-cta reveal" style={{ marginTop: '28px' }}>
                                    <div className="ic-text">
                                        <p className="ic-tag">Scale Without Disruption</p>
                                        <h3>Want to go from 20 to 100 or more employees?</h3>
                                        <p>We help you find offices that work with your hiring plan, not against it.</p>
                                        <div className="check-list" style={{ marginTop: '10px' }}>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Add more seats whenever you want</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Upgrade in the same workspace</div>
                                            <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No operational disruption</div>
                                        </div>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Plan Your Office Expansion
                                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>
                            </section>

                            {/* COST OF SCALING */}
                            <section id="cost-of-scaling" className="reveal">
                                <h2>Cost of Scaling Office Space in Hyderabad</h2>
                                <p>
                                    As companies grow, office cost increases based on team size. Here's what you can expect to pay for scalable managed office space in Hyderabad:
                                </p>
                                <div className="district-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginTop: '20px' }}>
                                    <div className="d-card reveal reveal-delay-1" style={{ textAlign: 'center' }}>
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg></div>
                                        <h3 style={{ fontSize: '15px' }}>20–50 Seats</h3>
                                        <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--teal)', margin: '8px 0 4px' }}>₹1.5L – ₹6L</p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-2)' }}>per month approx.</p>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2" style={{ textAlign: 'center', borderColor: 'var(--teal)', boxShadow: '0 0 0 2px rgba(0,201,177,0.15)' }}>
                                        <div className="d-icon" style={{ background: 'rgba(0,201,177,0.15)' }}><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                                        <h3 style={{ fontSize: '15px' }}>50–100 Seats</h3>
                                        <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--teal)', margin: '8px 0 4px' }}>₹4L – ₹12L</p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-2)' }}>per month approx.</p>
                                    </div>
                                    <div className="d-card reveal reveal-delay-3" style={{ textAlign: 'center' }}>
                                        <div className="d-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                                        <h3 style={{ fontSize: '15px' }}>100–200+ Seats</h3>
                                        <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--teal)', margin: '8px 0 4px' }}>₹10L – ₹40L+</p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-2)' }}>per month approx.</p>
                                    </div>
                                </div>
                                <p style={{ marginTop: '14px', fontSize: '13px', color: 'var(--text-2)' }}>
                                    Costs vary based on location, building grade, and customisation. PrimeDesk provides requirement-based evaluation to ensure budget optimisation.
                                </p>

                                {/* Inline CTA after costs */}
                                <div className="inline-cta reveal" style={{ marginTop: '24px' }}>
                                    <div className="ic-text">
                                        <p className="ic-tag">Know Your Expansion Cost</p>
                                        <h3>Get cost-based office options before you scale</h3>
                                        <p>Get exact office options based on the size of your current team and your plans for future growth.</p>
                                    </div>
                                    <button className="ic-btn" onClick={openModal}>
                                        Get Cost-Based Options
                                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                </div>
                            </section>

                            {/* BEST LOCATIONS */}
                            <section id="best-locations" className="reveal">
                                <h2>Best Locations for Scalable Offices in Hyderabad</h2>
                                <p>When choosing a scalable office, location matters as much as size. Here are the top areas:</p>
                                <div className="district-grid">
                                    <div className="d-card reveal reveal-delay-1">
                                        <div className="d-icon">
                                            <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                        </div>
                                        <h3>Hitech City</h3>
                                        <p>Ideal for startups and tech companies. Home to multinational technology companies with high-end office spaces that scale with fast-growing teams.</p>
                                        <a href="#" className="d-link" onClick={openModal}>
                                            Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-2">
                                        <div className="d-icon">
                                            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                        </div>
                                        <h3>Financial District</h3>
                                        <p>Best for enterprises and GCC setups. Modern infrastructure that supports large-scale business operations with high-quality commercial buildings.</p>
                                        <a href="#" className="d-link" onClick={openModal}>
                                            Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </a>
                                    </div>
                                    <div className="d-card reveal reveal-delay-3">
                                        <div className="d-icon">
                                            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <h3>Gachibowli</h3>
                                        <p>Balanced cost and connectivity. Corporate campuses and business office complexes with room to expand without breaking the budget.</p>
                                        <a href="#" className="d-link" onClick={openModal}>
                                            Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* SCALABILITY CHECKLIST */}
                            <section id="checklist" className="reveal">
                                <h2>Important Things to Look for in a Scalable Office Space</h2>
                                <p>Before you finalise, check these critical scalability factors:</p>
                                <div className="check-list" style={{ marginTop: '16px' }}>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Can you grow in the same building?</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Are there more seats available nearby?</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Can the layout be customised?</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Are the terms of the lease flexible?</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Does the infrastructure support bigger teams?</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Seating that can be moved around</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Access to multiple locations if needed</div>
                                </div>
                            </section>

                            {/* MISTAKES */}
                            <section id="mistakes" className="reveal">
                                <h2>Mistakes Companies Make While Scaling Offices</h2>
                                <p>These common mistakes lead to repeated relocations and unexpected costs:</p>
                                <div className="govt-grid">
                                    <div className="govt-item" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)' }}>
                                        <svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Choosing based only on the size of the team right now
                                    </div>
                                    <div className="govt-item" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)' }}>
                                        <svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Not thinking about future growth when signing leases
                                    </div>
                                    <div className="govt-item" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)' }}>
                                        <svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Choosing leases that aren't flexible
                                    </div>
                                    <div className="govt-item" style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.15)' }}>
                                        <svg viewBox="0 0 24 24" style={{ stroke: '#ef4444' }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Not looking into expansion options within the same building
                                    </div>
                                </div>
                            </section>

                            {/* EXPERT INSIGHT */}
                            <div className="callout reveal">
                                <div className="callout-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                </div>
                                <div>
                                    <h3>Expert Insight from PrimeDesk</h3>
                                    <p>
                                        Based on what PrimeDesk has learned from working with both startups and big businesses in Hyderabad: most businesses outgrow their offices in 6 to 12 months. Moving causes a lot of problems for business. Scalable offices lower costs and problems in the long run.
                                    </p>
                                    <p style={{ marginTop: '10px' }}>
                                        This is why planning a workspace should always take into account future growth, not just what you need right now.
                                    </p>
                                </div>
                            </div>

                            {/* REAL EXAMPLE */}
                            <section id="real-example" className="reveal">
                                <h2>Real Example: Scaling Without Moving</h2>
                                <p>A startup in Hyderabad showed exactly how scalable managed offices work in practice:</p>
                                <div className="steps-box reveal" style={{ marginTop: '16px' }}>
                                    <p className="steps-label">Year-by-year workspace growth</p>
                                    <div className="step-row">
                                        <div className="step-num">1</div>
                                        <div className="step-text">Began with <strong>25 seats</strong> in a managed office in Hitech City.</div>
                                    </div>
                                    <div className="step-row">
                                        <div className="step-num">2</div>
                                        <div className="step-text">Grew to <strong>80 seats</strong> in the same building — no relocation.</div>
                                    </div>
                                    <div className="step-row">
                                        <div className="step-num">3</div>
                                        <div className="step-text">Expanded to <strong>150+ seats</strong> without a single move.</div>
                                    </div>
                                </div>
                                <div className="check-list" style={{ marginTop: '16px' }}>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>No operational downtime across all three stages</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Team stayed together in the same location</div>
                                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Growth costs were significantly lower than repeated relocation</div>
                                </div>
                            </section>

                            {/* WHY PRIMEDESK */}
                            <section id="why-primedesk" className="reveal">
                                <h2>Why Businesses Pick PrimeDesk for Scalable Office Space</h2>
                                <p>
                                    PrimeDesk helps companies find office solutions that can grow with them. From the initial 20-person team to an enterprise floor of 200+, we match your growth plan to the right workspace.
                                </p>
                                <div className="why-box reveal">
                                    <p className="why-label">What PrimeDesk Offers</p>
                                    <div className="why-list">
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Verified workspace operators with proven scalability</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero brokerage fees for tenants</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Hand-picked office options matched to your growth plan</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>24 to 48 hours to get curated options</div>
                                        <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Deep knowledge of enterprise and GCC setups</div>
                                    </div>
                                </div>

                                <div className="skills-box reveal" style={{ marginTop: '20px' }}>
                                    <p className="skills-box-label">Workspace Types PrimeDesk Helps You Find</p>
                                    <div className="skills-grid">
                                        <div className="skill-item"><span className="skill-dot"></span>Managed offices</div>
                                        <div className="skill-item"><span className="skill-dot"></span>Plug &amp; play offices</div>
                                        <div className="skill-item"><span className="skill-dot"></span>Enterprise workspaces</div>
                                        <div className="skill-item"><span className="skill-dot"></span>GCC-ready offices</div>
                                    </div>
                                </div>
                            </section>

                            {/* FINAL INLINE CTA */}
                            <div className="inline-cta reveal">
                                <div className="ic-text">
                                    <p className="ic-tag">Find Scalable Office Space in Hyderabad</p>
                                    <h3>Ready to Scale Without Disruption?</h3>
                                    <p>Get expert advice on offices that grow with your team. Managed offices, plug &amp; play offices, enterprise workspaces — all with zero brokerage.</p>
                                </div>
                                <button className="ic-btn" onClick={openModal}>
                                    Get Free Expert Advisory
                                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </button>
                            </div>

                            {/* FAQ */}
                            <section id="faq" className="reveal">
                                <h2>Frequently Asked Questions</h2>
                                <p style={{ marginBottom: '20px' }}>Common questions about scaling office space for growing companies in Hyderabad.</p>
                                <div className="faq-list">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`}>
                                            <button
                                                className="faq-btn"
                                                aria-expanded={activeFaq === idx}
                                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                            >
                                                <span className="faq-q">{faq.q}</span>
                                                <div className="faq-chevron">
                                                    <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
                                                </div>
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

            {/* ══════ AUTHOR CARD ══════ */}
            <AuthorCard />

            {/* ══════ BOTTOM CTA ══════ */}
            <div className="bottom-cta-section">
                <div className="wrap bcs-inner">
                    <p className="bcs-tag">PrimeDesk · Hyderabad's Scalable Workspace Experts</p>
                    <h2 className="bcs-h2">Looking for Office Space That Grows with Your Team?</h2>
                    <p className="bcs-p">
                        Whether you're starting with 20 seats or planning for 200+, PrimeDesk helps growing companies find managed offices in Hyderabad that scale without disruption. Zero brokerage, curated options in 24–48 hours, and deep expertise in Hitech City, Financial District, and Gachibowli.
                    </p>
                    <div className="bcs-actions">
                        <button className="bcs-btn-primary" onClick={openModal}>
                            Schedule Workspace Consultation
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
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
                        <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>20–200+ Seats</div>
                    </div>
                </div>
            </div>

            {/* ══════ FOOTER ══════ */}
            <Footer />

            {/* ══════ MOBILE BOTTOM CTA ══════ */}
            <div className="mobile-bottom-cta">
                <div className="mbc-trust">
                    <div className="mbc-trust-item">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Zero Brokerage
                    </div>
                    <div className="mbc-trust-item" style={{ color: 'var(--border)' }}>|</div>
                    <div className="mbc-trust-item">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Scale Without Moving
                    </div>
                </div>
                <button className="mbc-btn" onClick={openModal}>
                    Talk to a Workspace Expert
                    <svg viewBox="0 0 24 24"><path d="M22 2L11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
            </div>

        </div>
    );
}