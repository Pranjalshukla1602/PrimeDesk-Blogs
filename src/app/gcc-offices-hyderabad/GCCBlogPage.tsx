
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import './primedesk.css';

// export default function GCCBlogPage() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formStep, setFormStep] = useState('phone');
//   const [phone, setPhone] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [activeSection, setActiveSection] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 500);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in');
//             if (entry.target.id && !entry.target.classList.contains('reveal')) {
//               setActiveSection(entry.target.id);
//             }
//           }
//         });
//       },
//       { rootMargin: '-40px 0px' }
//     );

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

//     // TOC active logic
//     const sections = document.querySelectorAll('section[id], div[id="faq"]');
//     const tocObs = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, { rootMargin: '-25% 0px -65% 0px' });
//     sections.forEach((s) => tocObs.observe(s));

//     return () => {
//       observer.disconnect();
//       tocObs.disconnect();
//     };
//   }, []);

//   const handlePhoneSubmit = (e) => {
//     e.preventDefault();
//     if (phone.length >= 10) setFormStep('details');
//   };

//   const handleDetailsSubmit = (e) => {
//     e.preventDefault();
//     setFormStep('success');
//   };

//   const openModal = (e) => {
//     if (e) e.preventDefault();
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = '';
//   };

//   const submitModal = (e) => {
//     e.preventDefault();
//     // Simulate modal success step
//     setFormStep('modal-success');
//   };

//   return (
//     <div className="gcc-page">


//       {/*  ══════ TOP NAV ══════  */}
//       <div className="topnav">
//         <div className="wrap">
//           <div className="logo">
//             <div className="logo-mark"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
//             <span className="logo-text">PrimeDesk</span>
//           </div>
//           <div className="nav-links">
//             <a href="/">Home</a>
//             <a href="/managed-office-space/">Managed Offices</a>
//             <a href="/locations/">Locations</a>
//             <a href="/contact-us/">Contact</a>
//             <a href="#" className="nav-cta" onClick={openModal}>Book A Space</a>
//           </div>
//           <a href="tel:+919876543210" className="nav-phone">
//             <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
//             Call Us
//           </a>
//         </div>
//       </div>

//       {/*  ══════ STICKY BAR ══════  */}
//       <div id="sticky">
//         <div className="sticky-inner">
//           <div className="sticky-logo">
//             <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="#00c9b1" strokeWidth="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#00c9b1" strokeWidth="2" /></svg>
//             <span>PrimeDesk · GCC Office Solutions</span>
//           </div>
//           <div className="sticky-meta">
//             <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
//             Zero Brokerage · 24hr Turnaround
//           </div>
//           <button className="sticky-btn" onClick={openModal}>
//             Get Office Options
//             <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//           </button>
//         </div>
//       </div>

//       {/*  ══════ MODAL ══════  */}
//       <div className={`modal-overlay ${modalOpen ? 'open' : ''}`} id="modal">
//         <div className="modal-box">
//           <div className="modal-top"></div>
//           <button className="modal-close" onClick={closeModal}><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
//           <div className="modal-body">
//             {formStep !== 'success' ? (
//               <div id="m-form-wrap">
//                 <p className="modal-tag">PrimeDesk · Zero Brokerage</p>
//                 <h2 className="modal-title">Get GCC Office Options in 24 Hours</h2>
//                 <p className="modal-sub">Curated enterprise office options shared within 24–48 hours.</p>

//                 {/* Progress */}
//                 <div className="prog-wrap"><div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div></div>

//                 {formStep === 'phone' && (
//                   <div className="step active">
//                     <form onSubmit={handlePhoneSubmit}>
//                       <div className="field">
//                         <label style={{ fontSize: "12px", fontWeight: "600", color: "var(--navy)", display: "block", marginBottom: "5px" }}>Your Phone Number</label>
//                         <div className="phone-row">
//                           <span className="phone-prefix">🇮🇳 +91</span>
//                           <input type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={10} required value={phone} onChange={(e) => setPhone(e.target.value)} />
//                         </div>
//                       </div>
//                       <button type="submit" className="submit-btn" disabled={phone.length < 10}>
//                         Continue
//                         <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                       </button>
//                     </form>
//                   </div>
//                 )}

//                 {formStep === 'details' && (
//                   <div className="step active">
//                     <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
//                       <button type="button" onClick={() => setFormStep('phone')} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer" }}><svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg></button>
//                       <div>
//                         <div className="hfc-title" style={{ fontSize: "16px", margin: 0 }}>Almost There!</div>
//                         <p className="hfc-sub" style={{ margin: 0 }}>Share a few details to match the best spaces</p>
//                       </div>
//                     </div>
//                     <form onSubmit={handleDetailsSubmit} className="space-y-3">
//                       <div className="grid-2" style={{ marginBottom: "10px" }}>
//                         <div className="field" style={{ marginBottom: "0" }}><input type="text" className="form-input" required placeholder="Your Name" /></div>
//                         <div className="field" style={{ marginBottom: "0" }}><input type="text" className="form-input" required placeholder="Company Name" /></div>
//                       </div>
//                       <div className="field" style={{ marginBottom: "10px" }}><input type="email" className="form-input" required placeholder="Work Email" /></div>
//                       <div className="field">
//                         <select className="form-input" required style={{ appearance: "none", background: "#fff", color: "var(--text-2)" }} defaultValue="">
//                           <option value="" disabled>Team Size</option>
//                           <option value="50-100">50–100 seats</option>
//                           <option value="100-250">100–250 seats</option>
//                           <option value="250-500">250–500 seats</option>
//                           <option value="500-1000">500–1000 seats</option>
//                           <option value="1000-2000">1000–2000 seats</option>
//                           <option value="2000+">2000+ seats</option>
//                         </select>
//                       </div>
//                       <button type="submit" className="submit-btn" style={{ marginTop: "16px" }}>
//                         Get Curated Office Options
//                         <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                       </button>
//                     </form>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div id="m-success" className="success-card">
//                 <div className="success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
//                 <h3>We'll Be in Touch Soon!</h3>
//                 <p>Our GCC workspace advisors will share curated office options within 24–48 hours.</p>
//               </div>
//             )}

//             <div className="nm-footer">
//               <p className="nm-footer-text">Prefer instant help? Call or WhatsApp us directly.</p>
//               <div className="nm-action-btns">
//                 <a href="tel:+919876543210" className="nm-action-btn nm-btn-blue">
//                   <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
//                   Call Now
//                 </a>
//                 <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="nm-action-btn nm-btn-green">
//                   <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
//                   WhatsApp Chat
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*  ══════ HERO ══════  */}
//       <header className="hero">
//         <div className="wrap">
//           {/*  breadcrumb inside hero area, light  */}
//           <div style={{ "display": "flex", "alignItems": "center", "gap": "6px", "marginBottom": "28px", "fontSize": "12px", "color": "rgba(255,255,255,.35)" }}>
//             <a href="/" style={{ "color": "rgba(255,255,255,.45)", "transition": "color .2s" }}>Home</a>
//             <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
//             <a href="/blogs/" style={{ "color": "rgba(255,255,255,.45)", "transition": "color .2s" }}>Blog</a>
//             <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
//             <span style={{ "color": "rgba(255,255,255,.55)" }}>GCC Hyderabad</span>
//           </div>

//           <div className="hero-grid">
//             {/*  Left: headline + stats  */}
//             <div>
//               <div className="hero-badge">
//                 <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
//                 India's #1 GCC Office Platform
//               </div>
//               <h1>Hyderabad: The Rising Hub for <em>Global Capability Centres</em> in India</h1>
//               <p className="hero-lead">Enterprise-grade managed offices in Hitech City, Financial District &amp; Gachibowli. Move-in ready spaces for teams of 100–2000. Zero brokerage, delivered in 24 hours.</p>

//               <div className="hero-stats">
//                 <div className="stat-item"><div className="val">100+</div><div className="lbl">GCCs in Hyderabad</div></div>
//                 <div className="stat-item"><div className="val">2000</div><div className="lbl">Max seat capacity</div></div>
//                 <div className="stat-item"><div className="val">24h</div><div className="lbl">Options delivered</div></div>
//                 <div className="stat-item"><div className="val">₹0</div><div className="lbl">Brokerage</div></div>
//               </div>

//               <div className="hero-trust">
//                 <span className="hero-trust-label">Trusted by</span>
//                 <div className="trust-logos">
//                   <span>Keka</span><span>Cloud Angles</span><span>SoftStandard Solutions</span><span>Envista</span>
//                 </div>
//               </div>
//             </div>

//             {/*  Right: 2-step lead form  */}
//             <div className="hide-on-mobile">
//               <div className="hero-form-card">
//                 <div className="hfc-accent"></div>
//                 <div className="hfc-body">
//                   <span className="urgency-badge">Limited: Free Consultation This Week</span>

//                   {/*  Progress  */}
//                   <div className="prog-wrap"><div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div></div>

//                   {/*  Step 1  */}
//                   {formStep === 'phone' && (
//                     <div className="step active">
//                       <div className="hfc-title">Get GCC Office Options in 24 Hours</div>
//                       <p className="hfc-sub">100+ verified spaces · Zero brokerage · 100–2000 seats</p>
//                       <form onSubmit={handlePhoneSubmit}>
//                         <div className="field">
//                           <label>Your Phone Number</label>
//                           <div className="phone-row">
//                             <span className="phone-prefix">🇮🇳 +91</span>
//                             <input type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={10} required value={phone} onChange={(e) => setPhone(e.target.value)} />
//                           </div>
//                         </div>
//                         <button type="submit" className="submit-btn" disabled={phone.length < 10}>
//                           Get Free Office Options
//                           <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                         </button>
//                       </form>
//                       <div className="form-trust">
//                         <div className="form-trust-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>No Spam</div>
//                         <div className="form-trust-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
//                         <div className="form-trust-item"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Zero Brokerage</div>
//                       </div>
//                     </div>
//                   )}

//                   {/*  Step 2  */}
//                   {formStep === 'details' && (
//                     <div className="step active">
//                       <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "14px" }}>
//                         <button type="button" onClick={() => setFormStep('phone')} style={{ "background": "#f1f5f9", "border": "none", "borderRadius": "50%", "width": "28px", "height": "28px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "cursor": "pointer" }}><svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg></button>
//                         <div>
//                           <div className="hfc-title" style={{ "fontSize": "16px" }}>Almost There!</div>
//                           <p className="hfc-sub" style={{ "margin": "0" }}>Share a few details to match the best spaces</p>
//                         </div>
//                       </div>
//                       <form onSubmit={handleDetailsSubmit} className="space-y-3">
//                         <div className="grid-2" style={{ "marginBottom": "10px" }}>
//                           <div className="field" style={{ "marginBottom": "0" }}><input type="text" className="form-input" required placeholder="Your Name" /></div>
//                           <div className="field" style={{ "marginBottom": "0" }}><input type="text" className="form-input" required placeholder="Company Name" /></div>
//                         </div>
//                         <div className="field" style={{ marginBottom: "10px" }}><input type="email" className="form-input" required placeholder="Work Email" /></div>
//                         <div className="field">
//                           <select className="form-input" required style={{ "appearance": "none", "background": "#fff", "color": "var(--text-2)" }} defaultValue="">
//                             <option value="" disabled>Team Size</option>
//                             <option value="50-100">50–100 seats</option>
//                             <option value="100-250">100–250 seats</option>
//                             <option value="250-500">250–500 seats</option>
//                             <option value="500-1000">500–1000 seats</option>
//                             <option value="1000-2000">1000–2000 seats</option>
//                             <option value="2000+">2000+ seats</option>
//                           </select>
//                         </div>
//                         <button type="submit" className="submit-btn" style={{ marginTop: "16px" }}>
//                           Get My Curated Office Options
//                           <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                         </button>
//                       </form>
//                     </div>
//                   )}

//                   {/*  Success  */}
//                   {formStep === 'success' && (
//                     <div className="step active">
//                       <div className="success-card">
//                         <div className="success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
//                         <h3>We'll Call You Shortly!</h3>
//                         <p>Our GCC workspace advisor will share curated options within 24 hours.</p>
//                       </div>
//                     </div>
//                   )}

//                   {/*  Social proof  */}
//                   <div className="social-proof">
//                     <div className="avatar-stack">
//                       <div className="avatar" style={{ "background": "#2563eb" }}>A</div>
//                       <div className="avatar" style={{ "background": "#059669" }}>M</div>
//                       <div className="avatar" style={{ "background": "#d97706" }}>S</div>
//                       <div className="avatar" style={{ "background": "#7c3aed" }}>R</div>
//                     </div>
//                     <p className="sp-text"><b>200+ companies</b> found offices through PrimeDesk</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/*  Full-width hero image  */}
//           <div className="hero-img-strip" style={{ "marginTop": "40px" }}>
//             <img src="/images/hero_nanobanana.jpg" alt="GCC office in Hyderabad Hitech City"
//             />
//             <div className="hero-img-fallback" style={{ "display": "none" }}><span>GCC Offices — Hitech City, Hyderabad</span></div>
//             <div className="img-badges">
//               <div className="img-badge">
//                 <svg viewBox="0 0 24 24" style={{ "stroke": "var(--teal)" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
//                 Hitech City, Hyderabad
//               </div>
//               <div className="img-badge" style={{ "display": "none" }} id="img-badge-2">
//                 <svg viewBox="0 0 24 24" style={{ "stroke": "#10b981" }}><polyline points="20 6 9 17 4 12" /></svg>
//                 Move-in Ready
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/*  ══════ ARTICLE + TOC ══════  */}
//       <div className="article-wrap">
//         <div className="wrap">
//           <div className="article-grid">

//             {/*  SIDEBAR TOC  */}
//             <aside>
//               <div className="toc-card">
//                 <p className="toc-heading">In This Article</p>
//                 <ul className="toc-list" id="toc">
//                   <li><a href="#what-are-gccs">What Are GCCs?</a></li>
//                   <li><a href="#why-hyderabad">Why Hyderabad?</a></li>
//                   <li><a href="#talent">Talent Ecosystem</a></li>
//                   <li><a href="#infrastructure">Office Infrastructure</a></li>
//                   <li><a href="#costs">Operating Costs</a></li>
//                   <li><a href="#government">Government Support</a></li>
//                   <li><a href="#districts">Business Districts</a></li>
//                   <li><a href="#managed-offices">Managed Offices</a></li>
//                   <li><a href="#primedesk">How PrimeDesk Helps</a></li>
//                   <li><a href="#future">Future of GCCs</a></li>
//                   <li><a href="#faq">FAQs</a></li>
//                 </ul>
//                 <div className="toc-cta">
//                   <p>Ready to find your GCC office? Get options within 24 hours — zero brokerage.</p>
//                   <button className="toc-cta-btn" onClick={openModal}>Get Office Options →</button>
//                 </div>
//               </div>
//             </aside>

//             {/*  ARTICLE BODY  */}
//             <article className="article">

//               {/*  WHAT ARE GCCs  */}
//               <section id="what-are-gccs" className="reveal">
//                 <h2>What Are Global Capability Centres (GCCs)?</h2>
//                 <p>Multinational companies set up Global Capability Centers (GCCs) in other countries or close to their own to handle important business tasks. GCCs are different from traditional outsourcing models because the parent company owns and runs them. This lets companies build long-term operational skills while keeping control over processes, data, and new ideas.</p>
//                 <blockquote><p>India is now the world leader in GCC establishments, with hundreds of multinational companies running large capability centers in major tech hubs.</p></blockquote>
//                 <p>Key business functions handled by GCCs include:</p>
//                 <div className="pill-grid">
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Technology Development</div>
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Engineering Services</div>
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Data Analytics</div>
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Finance &amp; Accounting</div>
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Customer Services</div>
//                   <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Product Development</div>
//                 </div>
//               </section>

//               {/*  WHY HYDERABAD  */}
//               <section id="why-hyderabad" className="reveal">
//                 <h2>Why Hyderabad Is Emerging as a GCC Powerhouse</h2>
//                 <p>While cities like Bangalore have historically dominated the GCC ecosystem, Hyderabad has rapidly positioned itself as one of the most competitive destinations for global capability centres.</p>
//                 <p>Hyderabad is becoming the top choice for global companies that want to set up scalable and future-ready operations in India. The city has world-class infrastructure, a highly skilled workforce, and low operating costs.</p>
//                 <p>Hyderabad is a great place for businesses that want to set up or grow their Global Capability Centres because it has a unique mix of low costs, a large pool of skilled workers, and high-quality office space.</p>
//               </section>

//               {/*  TALENT  */}
//               <section id="talent" className="reveal">
//                 <h3>Strong Talent Ecosystem</h3>
//                 <p>Hyderabad's deep and diverse talent pool is one of the best things about the city. Every year, the city graduates a large number of students from the best engineering and management schools. The presence of global tech companies has made the talent pool even stronger, giving workers experience in running complicated global operations.</p>
//                 <div className="skills-box">
//                   <p className="skills-box-label">Key Skills Available in Hyderabad</p>
//                   <div className="skills-grid">
//                     <div className="skill-item"><span className="skill-dot"></span>Computer Programming</div>
//                     <div className="skill-item"><span className="skill-dot"></span>AI &amp; Data Science</div>
//                     <div className="skill-item"><span className="skill-dot"></span>Product Development</div>
//                     <div className="skill-item"><span className="skill-dot"></span>Financial Services</div>
//                     <div className="skill-item"><span className="skill-dot"></span>Business Operations</div>
//                     <div className="skill-item"><span className="skill-dot"></span>Software Engineering</div>
//                   </div>
//                 </div>
//               </section>

//               {/*  INFRASTRUCTURE  */}
//               <section id="infrastructure" className="reveal">
//                 <h3>World-Class Office Infrastructure</h3>
//                 <p>Hyderabad has one of the most advanced commercial real estate markets in India. Hitech City, Gachibowli, and the Financial District are examples of large business areas that have modern Grade-A office buildings that are made to help businesses run smoothly.</p>
//                 <div className="office-img-block">
//                   <img src="/images/office_location.jpg" alt="PrimeDesk managed office space Hyderabad GCC"
//                   />
//                   <div className="caption">PrimeDesk Managed Offices · GCC Hubs · Hyderabad</div>
//                 </div>
//                 <p>These business centers offer:</p>
//                 <div className="check-list">
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Scalable large office floors</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Enterprise security systems</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Modern amenities &amp; infrastructure</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Great residential connectivity</div>
//                 </div>
//                 <p style={{ "marginTop": "14px" }}>Many multinational companies choose these places to set up their GCCs because they let them grow their teams without having to move their operations.</p>
//               </section>

//               {/*  COSTS  */}
//               <section id="costs" className="reveal">
//                 <h3>Competitive Operating Costs</h3>
//                 <p>Hyderabad has a lot of cost advantages over other major tech hubs. Costs for renting office space, building infrastructure, and running the business are usually lower than in cities like Bangalore or Mumbai. This cost-effectiveness lets businesses hire more people while still running their operations efficiently.</p>
//                 <p>Hyderabad is the best place for global companies to look into expanding their GCC operations in India because it has the best mix of low costs and world-class infrastructure.</p>
//               </section>

//               {/*  INLINE CTA 1  */}
//               <div className="inline-cta reveal">
//                 <div className="ic-text">
//                   <p className="ic-tag">PrimeDesk · Zero Brokerage</p>
//                   <h3>Speak With a GCC Workspace Advisor</h3>
//                   <p>Our advisors help you find the perfect office in Hyderabad's top business districts.</p>
//                 </div>
//                 <button className="ic-btn" onClick={openModal}>
//                   Get Office Options
//                   <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                 </button>
//               </div>

//               {/*  GOVERNMENT  */}
//               <section id="government" className="reveal">
//                 <h3>Government Support and Pro-Business Policies</h3>
//                 <p>The government of Telangana has worked hard to help technology and innovation grow in the state. The government has made the business climate more friendly through a number of programs and policies that encourage investment from around the world.</p>
//                 <p>Some of the most important initiatives are:</p>
//                 <div className="govt-grid">
//                   <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Technology regulation frameworks</div>
//                   <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Infrastructure development programs</div>
//                   <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Startup ecosystem support</div>
//                   <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Simplified compliance rules</div>
//                 </div>
//               </section>

//               {/*  GLOBAL ECOSYSTEM CALLOUT  */}
//               <div className="callout reveal">
//                 <div className="callout-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
//                 <div>
//                   <h4>Presence of Global Technology &amp; Enterprise Companies</h4>
//                   <p>Many international organizations from different industries already have Global Capability Centers in Hyderabad. This strong ecosystem has network effects that make the city even more appealing to new businesses. Companies choose Hyderabad not only because it is cost-effective, but also because it has a well-developed business environment that can handle large operations.</p>
//                 </div>
//               </div>

//               {/*  BUSINESS DISTRICTS  */}
//               <section id="districts" className="reveal">
//                 <h2>Key Business Districts for GCCs in Hyderabad</h2>
//                 <p>When companies set up Global Capability Centers, they usually look for places with good connectivity and office infrastructure that can grow with them. Many people have started to like certain business areas in Hyderabad.</p>
//                 <div className="district-grid">
//                   <div className="d-card reveal reveal-delay-1">
//                     <div className="d-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
//                     <h4>Hitech City</h4>
//                     <p>Many people agree that Hitech City is the center of Hyderabad's tech industry. It is home to many multinational technology companies and has high-end office spaces for rent perfect for big corporate teams and technology innovation centers.</p>
//                     <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
//                   </div>
//                   <div className="d-card reveal reveal-delay-2">
//                     <div className="d-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
//                     <h4>Financial District</h4>
//                     <p>The Financial District has quickly become a popular place for big companies to set up offices. It has modern infrastructure that supports large-scale business operations and high-quality commercial buildings.</p>
//                     <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
//                   </div>
//                   <div className="d-card reveal reveal-delay-3">
//                     <div className="d-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
//                     <h4>Gachibowli</h4>
//                     <p>Gachibowli is another important business center with good transportation links and access to high-quality office space. There are a lot of corporate campuses and business office complexes in the area.</p>
//                     <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
//                   </div>
//                 </div>
//               </section>

//               {/*  MANAGED OFFICES  */}
//               <section id="managed-offices" className="reveal">
//                 <h2>Managed Offices for GCC Expansion</h2>
//                 <p>When setting up Global Capability Centers in Hyderabad, more and more multinational companies are choosing managed office solutions. Instead of spending a lot of money on interior design, infrastructure, and coordinating with vendors, businesses can move into fully furnished office spaces made for business teams.</p>
//                 <p>Managed offices have a number of benefits for big businesses:</p>
//                 <div className="benefits-grid">
//                   <div className="benefit-card reveal reveal-delay-1">
//                     <div className="ben-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
//                     <div>
//                       <div className="ben-title">Shorter Setup Timeframes</div>
//                       <div className="ben-sub">Move in faster, start operating sooner</div>
//                     </div>
//                   </div>
//                   <div className="benefit-card reveal reveal-delay-2">
//                     <div className="ben-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
//                     <div>
//                       <div className="ben-title">Reduced Upfront Investment</div>
//                       <div className="ben-sub">Lower capital expenditure for office fit-out</div>
//                     </div>
//                   </div>
//                   <div className="benefit-card reveal reveal-delay-1">
//                     <div className="ben-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
//                     <div>
//                       <div className="ben-title">Fully Furnished Workspaces</div>
//                       <div className="ben-sub">Enterprise-ready from day one</div>
//                     </div>
//                   </div>
//                   <div className="benefit-card reveal reveal-delay-2">
//                     <div className="ben-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
//                     <div>
//                       <div className="ben-title">Scalable Infrastructure</div>
//                       <div className="ben-sub">Grow your team without relocating</div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/*  INLINE CTA 2  */}
//               <div className="inline-cta reveal">
//                 <div className="ic-text">
//                   <p className="ic-tag">Get Enterprise Office Options</p>
//                   <h3>Ready to Set Up Your GCC in Hyderabad?</h3>
//                   <p>Offices for 100 to 2000 people. Curated options within 24–48 hours.</p>
//                 </div>
//                 <button className="ic-btn" onClick={openModal}>
//                   Get Office Options
//                   <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//                 </button>
//               </div>

//               {/*  HOW PRIMEDESK HELPS  */}
//               <section id="primedesk" className="reveal">
//                 <h2>How PrimeDesk Supports GCC Office Setup</h2>
//                 <p>Choosing the right office space is an important step for businesses that want to set up Global Capability Centers in Hyderabad. PrimeDesk helps international businesses find office spaces that meet their needs for operations, team size, and plans for growth in the future.</p>
//                 <p>PrimeDesk helps businesses find office space in Hyderabad that will help them grow now and in the future by giving them access to a large network of enterprise office spaces.</p>
//                 <p>The advisory process includes:</p>
//                 <div className="steps-box reveal">
//                   <p className="steps-label">Our Advisory Process</p>
//                   <div className="step-row"><div className="step-num">1</div><div className="step-text">Understanding your business office requirements</div></div>
//                   <div className="step-row"><div className="step-num">2</div><div className="step-text">Identifying suitable locations across Hyderabad</div></div>
//                   <div className="step-row"><div className="step-num">3</div><div className="step-text">Curating scalable workspace options tailored to your team size</div></div>
//                   <div className="step-row"><div className="step-num">4</div><div className="step-text">Setting up and supporting site visits</div></div>
//                   <div className="step-row"><div className="step-num">5</div><div className="step-text">Helping with lease negotiations and move-in support</div></div>
//                 </div>

//                 <div style={{ "marginTop": "20px", "marginBottom": "16px" }}>
//                   <p>PrimeDesk helps businesses all over the world find flexible office spaces that fit their long-term growth plans:</p>
//                 </div>
//                 <div className="check-list">
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Offices for 100 to 2000 people</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Enterprise-grade commercial buildings</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Strategic workspace location advice</div>
//                   <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero brokerage for tenants</div>
//                 </div>

//                 <div className="why-box reveal">
//                   <p className="why-label">Why Companies Choose PrimeDesk</p>
//                   <div className="why-list">
//                     <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero brokerage for tenants</div>
//                     <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Access to verified workspace operators and developers</div>
//                     <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Transparent comparisons and market insights</div>
//                     <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Fast turnaround — curated options shared within 24–48 hours</div>
//                     <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Experience supporting startups, growing companies, and enterprise teams</div>
//                   </div>
//                 </div>
//               </section>

//               {/*  FUTURE  */}
//               <section id="future" className="reveal">
//                 <h2>The Future of GCCs in Hyderabad</h2>
//                 <p>In the next few years, the number of Global Capability Centers in Hyderabad is expected to grow a lot faster. Hyderabad is becoming an even more appealing place for multinational companies to do business as they try to grow their operations around the world. This is because of the city's strong talent pool and business infrastructure.</p>
//                 <p>Experts in the field expect growth to continue in areas like:</p>
//                 <div className="growth-grid">
//                   <div className="g-card reveal reveal-delay-1">
//                     <div className="g-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
//                     <div className="g-name">Artificial Intelligence</div>
//                   </div>
//                   <div className="g-card reveal reveal-delay-2">
//                     <div className="g-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
//                     <div className="g-name">Fintech</div>
//                   </div>
//                   <div className="g-card reveal reveal-delay-1">
//                     <div className="g-icon"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
//                     <div className="g-name">Healthcare Technology</div>
//                   </div>
//                   <div className="g-card reveal reveal-delay-2">
//                     <div className="g-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
//                     <div className="g-name">Enterprise Software</div>
//                   </div>
//                 </div>
//                 <p style={{ "marginTop": "18px" }}>This growth will make Hyderabad an even stronger global hub for capability centers.</p>
//               </section>

//               {/*  FAQ  */}
//               <section id="faq" className="reveal">
//                 <h2>Frequently Asked Questions</h2>
//                 <p style={{ "marginBottom": "20px" }}>Common questions about setting up a Global Capability Centre in Hyderabad.</p>
//                 <div className="faq-list">
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">What is a Global Capability Centre?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">A Global Capability Centre is an offshore operational hub established by multinational companies to manage strategic functions such as technology development, analytics, finance operations, and customer services.</div></div>
//                   </div>
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">Why is Hyderabad a popular destination for GCCs?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">Hyderabad offers a large talent pool, competitive operating costs, enterprise office infrastructure, and a strong technology ecosystem, making it ideal for multinational companies expanding global operations.</div></div>
//                   </div>
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">Which areas are best for GCC offices in Hyderabad?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">Top locations include Hitech City, Financial District, and Gachibowli, which provide enterprise-grade office buildings and excellent connectivity.</div></div>
//                   </div>
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">How large are GCC offices typically?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">Global Capability Centres usually require office spaces supporting teams of 100 to 2000 employees, depending on the scale of operations.</div></div>
//                   </div>
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">Does PrimeDesk charge brokerage?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">No. PrimeDesk offers zero brokerage for tenants. We connect businesses with verified workspace operators and developers, providing transparent comparisons and fast turnaround.</div></div>
//                   </div>
//                   <div className="faq-item">
//                     <button className="faq-btn">
//                       <span className="faq-q">How quickly can I get curated office options?</span>
//                       <div className="faq-chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg></div>
//                     </button>
//                     <div className="faq-body"><div className="faq-body-inner">PrimeDesk shares curated enterprise office options within 24–48 hours of understanding your requirements.</div></div>
//                   </div>
//                 </div>
//               </section>

//             </article>
//           </div>
//         </div>
//       </div>

//       {/*  ══════ BOTTOM CTA ══════  */}
//       <div className="bottom-cta-section">
//         <div className="wrap bcs-inner">
//           <p className="bcs-tag">PrimeDesk · Hyderabad's GCC Office Experts</p>
//           <h2 className="bcs-h2">Looking to Set Up a Global Capability Centre in Hyderabad?</h2>
//           <p className="bcs-p">Choosing the right office space is an important step if your company is thinking about setting up a Global Capability Center in Hyderabad. PrimeDesk helps businesses all over the world find scalable office spaces in important business areas like Hitech City, the Financial District, and Gachibowli. Get curated office options within 24–48 hours.</p>
//           <div className="bcs-actions">
//             <button className="bcs-btn-primary" onClick={openModal}>
//               Schedule GCC Workspace Consultation
//               <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//             </button>
//             <a href="mailto:hello@primedesk.in" className="bcs-btn-sec">
//               <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
//               hello@primedesk.in
//             </a>
//           </div>
//           <div className="bcs-trust">
//             <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero Brokerage</div>
//             <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Verified Operators</div>
//             <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
//             <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>100–2000 Seats</div>
//           </div>
//         </div>
//       </div>

//       {/*  ══════ FOOTER ══════  */}
//       <footer className="footer">
//         <div className="wrap">
//           <div className="footer-inner">
//             <div className="footer-logo">
//               <div className="footer-logo-mark"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
//               <span className="footer-logo-text">PRIMEDESK</span>
//               <span style={{ "fontSize": "12px", "color": "rgba(255,255,255,.2)" }}>· Smart Office Space Aggregator, Hyderabad</span>
//             </div>
//             <div className="footer-links">
//               <a href="#">Privacy Policy</a>
//               <a href="#">Terms</a>
//               <a href="/contact-us/">Contact</a>
//               <a href="/locations/">Locations</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/*  ══════ MOBILE BOTTOM CTA ══════  */}
//       <div className="mobile-bottom-cta">
//         <div className="mbc-trust">
//           <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Zero Brokerage</div>
//           <div className="mbc-trust-item" style={{ color: "var(--border)" }}>|</div>
//           <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Premium GCC Specs</div>
//         </div>
//         <button className="mbc-btn" onClick={openModal}>
//           Talk to a Workspace Expert
//           <svg viewBox="0 0 24 24"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
//         </button>
//       </div>

//     </div>
//   );
// }

'use client';
import { useState, useEffect, useRef } from 'react';
import './primedesk.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthorCard from '@/components/AuthorCard';
import Image from 'next/image';

export default function GCCBlogPage() {
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const abandonTimer = useRef(null);
  const emailjsRef = useRef(null);

  // Initialize EmailJS lazily
  useEffect(() => {
    import('@emailjs/browser').then((mod) => {
      emailjsRef.current = mod.default;
      emailjsRef.current.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            if (entry.target.id && !entry.target.classList.contains('reveal')) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: '-40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // TOC active logic
    const sections = document.querySelectorAll('section[id], div[id="faq"]');
    const tocObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((s) => tocObs.observe(s));

    return () => {
      observer.disconnect();
      tocObs.disconnect();
    };
  }, []);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    
    setIsSubmittingPhone(true);
    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, source: 'GCC Hyderabad Page' }),
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        setLeadId(data.leadId);
        setFormStep('details');
        
        // Start 1-minute abandonment timer
        abandonTimer.current = setTimeout(() => {
          emailjsRef.current?.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ABANDON!,
            {
              type: 'Abandoned Lead (Step 1 Only)',
              phone: phone,
              name: 'Not provided',
              email: 'Not provided',
              company: 'Not provided',
              team_size: 'Not provided',
              source: 'GCC Hyderabad Page'
            }
          ).then(() => console.log('Abandoned lead email sent!')).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
        }, 60000);
      } else {
        alert('Failed to capture details: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error submitting phone:', err);
      // Fallback: let them proceed anyway if backend is down locally, or show error
      setFormStep('details');
    } finally {
      setIsSubmittingPhone(false);
    }
  };

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    if (!leadId) {
      // If for some reason we missed the initial capture, create a new one
      return submitNewLead();
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`http://localhost:5000/api/leads/${leadId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, companyName, teamSize }),
      });
      
      if (response.ok) {
        setFormStep('success');
        
        // Clear abandonment timer
        if (abandonTimer.current) {
          clearTimeout(abandonTimer.current);
        }
        
        // Send Full Lead Email
        emailjsRef.current?.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE!,
          {
            type: 'Complete Lead',
            phone: phone,
            name: name,
            email: email,
            company: companyName,
            team_size: teamSize,
            source: 'GCC Hyderabad Page'
          }
        ).then(() => console.log('Complete lead email sent!')).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
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

  // Fallback if leadId was not captured
  const submitNewLead = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, companyName, teamSize, source: 'GCC Hyderabad Page' }),
      });
      
      if (response.ok) {
        setFormStep('success');
        
        // Send Full Lead Email
        emailjsRef.current?.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPLETE!,
          {
            type: 'Complete Lead',
            phone: phone,
            name: name,
            email: email,
            company: companyName,
            team_size: teamSize,
            source: 'GCC Hyderabad Page'
          }
        ).then(() => console.log('Complete lead email sent!')).catch((e) => console.error('EmailJS Error:', e?.text || JSON.stringify(e)));
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

  const openModal = (e) => {
    if (e) e.preventDefault();
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const submitModal = (e) => {
    e.preventDefault();
    setFormStep('modal-success');
  };

  return (
    <div className="gcc-page">


      {/*  ══════ TOP NAV ══════  */}
      <Header />

      {/*  ══════ STICKY BAR ══════  */}
      <div id="sticky" role="banner" aria-label="Sticky navigation bar">
        <div className="sticky-inner">
          <div className="sticky-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image src="https://primedesk.co.in/wp-content/uploads/2025/05/WhatsApp_Image_2025-05-26_at_3.19.51_PM__2_-removebg-preview-e1748493491575.png" alt="PrimeDesk Logo" width={96} height={24} style={{ height: '24px', width: 'auto' }} />
            <span>PrimeDesk · GCC Office Solutions</span>
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

      {/*  ══════ MODAL ══════  */}
      <div className={`modal-overlay ${modalOpen ? 'open' : ''}`} id="modal" role="dialog" aria-modal="true" aria-label="Lead capture form">
        <div className="modal-box">
          <div className="modal-top"></div>
          <button className="modal-close" onClick={closeModal} aria-label="Close dialog"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
          <div className="modal-body">
            {formStep !== 'success' ? (
              <div id="m-form-wrap">
                <p className="modal-tag">PrimeDesk · Zero Brokerage</p>
                <h2 className="modal-title">Get GCC Office Options in 24 Hours</h2>
                <p className="modal-sub">Curated enterprise office options shared within 24–48 hours.</p>

                {/* Progress */}
                <div className="prog-wrap" role="progressbar" aria-valuenow={formStep === 'phone' ? 50 : 100} aria-valuemin={0} aria-valuemax={100} aria-label="Form progress"><div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div></div>

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
                        {!isSubmittingPhone && <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                      </button>
                    </form>
                  </div>
                )}

                {formStep === 'details' && (
                  <div className="step active">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                      <button type="button" aria-label="Go back to phone number step" onClick={() => setFormStep('phone')} style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer" }}><svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg></button>
                      <div>
                        <div className="hfc-title" style={{ fontSize: "16px", margin: 0 }}>Almost There!</div>
                        <p className="hfc-sub" style={{ margin: 0 }}>Share a few details to match the best spaces</p>
                      </div>
                    </div>
                    <form onSubmit={handleDetailsSubmit} className="space-y-3">
                      <div className="grid-2" style={{ marginBottom: "10px" }}>
                        <div className="field" style={{ marginBottom: "0" }}><label htmlFor="modal-name" className="sr-only">Your Name</label><input id="modal-name" type="text" className="form-input" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
                        <div className="field" style={{ marginBottom: "0" }}><label htmlFor="modal-company" className="sr-only">Company Name</label><input id="modal-company" type="text" className="form-input" required placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" /></div>
                      </div>
                      <div className="field" style={{ marginBottom: "10px" }}><label htmlFor="modal-email" className="sr-only">Work Email</label><input id="modal-email" type="email" className="form-input" required placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
                      <div className="field">
                        <label htmlFor="modal-teamsize" className="sr-only">Team Size</label>
                        <select id="modal-teamsize" className="form-input" required style={{ appearance: "none", background: "#fff", color: "var(--text-2)" }} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                          <option value="" disabled>Team Size</option>
                          <option value="50-100">50–100 seats</option>
                          <option value="100-250">100–250 seats</option>
                          <option value="250-500">250–500 seats</option>
                          <option value="500-1000">500–1000 seats</option>
                          <option value="1000-2000">1000–2000 seats</option>
                          <option value="2000+">2000+ seats</option>
                        </select>
                      </div>
                      <button type="submit" className="submit-btn" style={{ marginTop: "16px" }} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Get Curated Office Options'}
                        {!isSubmitting && <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div id="m-success" className="success-card">
                <div className="success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                <h3>We'll Be in Touch Soon!</h3>
                <p>Our GCC workspace advisors will share curated office options within 24–48 hours.</p>
              </div>
            )}

            <div className="nm-footer">
              <p className="nm-footer-text">Prefer instant help? Call or WhatsApp us directly.</p>
              <div className="nm-action-btns">
                <a href="tel:+917993726302" className="nm-action-btn nm-btn-blue">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Call Now
                </a>
                <a href="https://wa.me/918978426302?text=Hello,%20I%20would%20like%20to%20inquire%20about%20GCC%20office%20spaces%20in%20Hyderabad." target="_blank" rel="noopener noreferrer" className="nm-action-btn nm-btn-green">
                  <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  ══════ HERO ══════  */}
      <header className="hero">
        <div className="wrap">
          {/*  breadcrumb inside hero area, light  */}
          <nav aria-label="Breadcrumb" style={{ "display": "flex", "alignItems": "center", "gap": "6px", "marginBottom": "28px", "fontSize": "12px", "color": "rgba(255,255,255,.35)" }}>
            <a href="/" style={{ "color": "rgba(255,255,255,.45)", "transition": "color .2s" }}>Home</a>
            <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <a href="/blogs/" style={{ "color": "rgba(255,255,255,.45)", "transition": "color .2s" }}>Blog</a>
            <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            <span aria-current="page" style={{ "color": "rgba(255,255,255,.55)" }}>GCC Hyderabad</span>
          </nav>

          <div className="hero-grid">
            {/*  Left: headline + stats  */}
            <div>
              <div className="hero-badge">
                <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                India's #1 GCC Office Platform
              </div>
              <h1>Hyderabad: The Rising Hub for <em>Global Capability Centres</em> in India</h1>
              <p className="hero-lead">Enterprise-grade managed offices in Hitech City, Financial District &amp; Gachibowli. Move-in ready spaces for teams of 100–2000. Zero brokerage, delivered in 24 hours.</p>

              <div className="hero-stats">
                <div className="stat-item"><div className="val">5+</div><div className="lbl">Years of Experience</div></div>
                <div className="stat-item"><div className="val">4+</div><div className="lbl">Premium Locations</div></div>
                <div className="stat-item"><div className="val">50+</div><div className="lbl">Clients Served</div></div>
                <div className="stat-item"><div className="val">₹0</div><div className="lbl">Brokerage</div></div>
              </div>

              
            </div>

            {/*  Right: 2-step lead form  */}
            <div className="hide-on-mobile">
              <div className="hero-form-card">
                <div className="hfc-accent"></div>
                <div className="hfc-body">
                  <span className="urgency-badge">Limited: Free Consultation This Week</span>

                  {/*  Progress  */}
                  <div className="prog-wrap" role="progressbar" aria-valuenow={formStep === 'phone' ? 50 : 100} aria-valuemin={0} aria-valuemax={100} aria-label="Form progress"><div className="prog-bar" style={{ width: formStep === 'phone' ? '50%' : '100%' }}></div></div>

                  {/*  Step 1  */}
                  {formStep === 'phone' && (
                    <div className="step active">
                      <div className="hfc-title">Get GCC Office Options in 24 Hours</div>
                      <p className="hfc-sub">100+ verified spaces · Zero brokerage · 100–2000 seats</p>
                      <form onSubmit={handlePhoneSubmit}>
                        <div className="field">
                          <label htmlFor="hero-phone">Your Phone Number</label>
                          <div className="phone-row">
                            <span className="phone-prefix" aria-hidden="true">🇮🇳 +91</span>
                            <input id="hero-phone" type="tel" className="phone-input" placeholder="Enter 10-digit number" maxLength={10} required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                          </div>
                        </div>
                        <button type="submit" className="submit-btn" disabled={phone.length < 10 || isSubmittingPhone}>
                          {isSubmittingPhone ? 'Sending...' : 'Get Free Office Options'}
                          {!isSubmittingPhone && <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                      </form>
                      <div className="form-trust">
                        <div className="form-trust-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>No Spam</div>
                        <div className="form-trust-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>24hr Turnaround</div>
                        <div className="form-trust-item"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>Zero Brokerage</div>
                      </div>
                    </div>
                  )}

                  {/*  Step 2  */}
                  {formStep === 'details' && (
                    <div className="step active">
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "14px" }}>
                        <button type="button" aria-label="Go back to phone number step" onClick={() => setFormStep('phone')} style={{ "background": "#f1f5f9", "border": "none", "borderRadius": "50%", "width": "28px", "height": "28px", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "cursor": "pointer" }}><svg width="13" height="13" fill="none" stroke="#475569" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg></button>
                        <div>
                          <div className="hfc-title" style={{ "fontSize": "16px" }}>Almost There!</div>
                          <p className="hfc-sub" style={{ "margin": "0" }}>Share a few details to match the best spaces</p>
                        </div>
                      </div>
                      <form onSubmit={handleDetailsSubmit} className="space-y-3">
                        <div className="grid-2" style={{ "marginBottom": "10px" }}>
                          <div className="field" style={{ "marginBottom": "0" }}><label htmlFor="hero-name" className="sr-only">Your Name</label><input id="hero-name" type="text" className="form-input" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
                          <div className="field" style={{ "marginBottom": "0" }}><label htmlFor="hero-company" className="sr-only">Company Name</label><input id="hero-company" type="text" className="form-input" required placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" /></div>
                        </div>
                        <div className="field" style={{ marginBottom: "10px" }}><label htmlFor="hero-email" className="sr-only">Work Email</label><input id="hero-email" type="email" className="form-input" required placeholder="Work Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
                        <div className="field">
                          <label htmlFor="hero-teamsize" className="sr-only">Team Size</label>
                        <select id="hero-teamsize" className="form-input" required style={{ "appearance": "none", "background": "#fff", "color": "var(--text-2)" }} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                            <option value="" disabled>Team Size</option>
                            <option value="50-100">50–100 seats</option>
                            <option value="100-250">100–250 seats</option>
                            <option value="250-500">250–500 seats</option>
                            <option value="500-1000">500–1000 seats</option>
                            <option value="1000-2000">1000–2000 seats</option>
                            <option value="2000+">2000+ seats</option>
                          </select>
                        </div>
                        <button type="submit" className="submit-btn" style={{ marginTop: "16px" }} disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Get My Curated Office Options'}
                          {!isSubmitting && <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                        </button>
                      </form>
                    </div>
                  )}

                  {/*  Success  */}
                  {formStep === 'success' && (
                    <div className="step active">
                      <div className="success-card">
                        <div className="success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                        <h3>We'll Call You Shortly!</h3>
                        <p>Our GCC workspace advisor will share curated options within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {/*  Social proof  */}
                  <div className="social-proof">
                    <div className="avatar-stack">
                      <div className="avatar" style={{ "background": "#2563eb" }}>A</div>
                      <div className="avatar" style={{ "background": "#059669" }}>M</div>
                      <div className="avatar" style={{ "background": "#d97706" }}>S</div>
                      <div className="avatar" style={{ "background": "#7c3aed" }}>R</div>
                    </div>
                    <p className="sp-text"><b>200+ companies</b> found offices through PrimeDesk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Full-width hero image  */}
          <div className="hero-img-strip" style={{ "marginTop": "40px" }}>
            <Image src="/images/hero_nanobanana.jpg" alt="GCC office in Hyderabad Hitech City" width={1200} height={600} priority sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className="hero-img-fallback" style={{ "display": "none" }}><span>GCC Offices — Hitech City, Hyderabad</span></div>
            <div className="img-badges">
              <div className="img-badge">
                <svg viewBox="0 0 24 24" style={{ "stroke": "var(--teal)" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Hitech City, Hyderabad
              </div>
              <div className="img-badge" style={{ "display": "none" }} id="img-badge-2">
                <svg viewBox="0 0 24 24" style={{ "stroke": "#10b981" }}><polyline points="20 6 9 17 4 12" /></svg>
                Move-in Ready
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  ══════ ARTICLE + TOC ══════  */}
      <div className="article-wrap">
        <div className="wrap">
          <div className="article-grid">

            {/*  SIDEBAR TOC  */}
            <aside>
              <div className="toc-card">
                <p className="toc-heading">In This Article</p>
                <ul className="toc-list" id="toc">
                  <li><a href="#what-are-gccs">What Are GCCs?</a></li>
                  <li><a href="#why-hyderabad">Why Hyderabad?</a></li>
                  <li><a href="#talent">Talent Ecosystem</a></li>
                  <li><a href="#infrastructure">Office Infrastructure</a></li>
                  <li><a href="#costs">Operating Costs</a></li>
                  <li><a href="#government">Government Support</a></li>
                  <li><a href="#districts">Business Districts</a></li>
                  <li><a href="#managed-offices">Managed Offices</a></li>
                  <li><a href="#primedesk">How PrimeDesk Helps</a></li>
                  <li><a href="#future">Future of GCCs</a></li>
                  <li><a href="#faq">FAQs</a></li>
                </ul>
                <div className="toc-cta">
                  <p>Ready to find your GCC office? Get options within 24 hours — zero brokerage.</p>
                  <button className="toc-cta-btn" onClick={openModal}>Get Office Options →</button>
                </div>
              </div>
            </aside>

            {/*  ARTICLE BODY  */}
            <main className="article">

              {/* ── INTRO PARAGRAPHS (from PDF opening, before first H2) ── */}
              {/* NOTE: These 3 paragraphs appear in the PDF before the first section heading.
                  They are the opening of the article and should appear before "What Are GCCs?" */}
              <div className="article-intro reveal">
                <p>Hyderabad has become one of the best places in India for Global Capability Centers (GCCs) to set up shop in the last ten years. Multinational companies in the technology, banking, healthcare, and consulting sectors are growing their presence in the city by setting up large operational hubs that support business functions around the world.</p>
                <p>Hyderabad is becoming the top choice for global companies that want to set up scalable and future-ready operations in India. The city has world-class infrastructure, a highly skilled workforce, and low operating costs.</p>
                <p>Hyderabad is a great place for businesses that want to set up or grow their Global Capability Centres because it has a unique mix of low costs, a large pool of skilled workers, and high-quality office space.</p>
              </div>

              {/*  WHAT ARE GCCs  */}
              <section id="what-are-gccs" className="reveal">
                <h2>What Are Global Capability Centres (GCCs)?</h2>
                <p>Multinational companies set up Global Capability Centers (GCCs) in other countries or close to their own to handle important business tasks like:</p>
                <div className="pill-grid">
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Technology Development</div>
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Engineering Services</div>
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Data Analytics</div>
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Finance &amp; Accounting</div>
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Customer Services</div>
                  <div className="pill"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Product Development</div>
                </div>
                <p>GCCs are different from traditional outsourcing models because the parent company owns and runs them. This lets companies build long-term operational skills while keeping control over processes, data, and new ideas.</p>
                <blockquote><p>India is now the world leader in GCC establishments, with hundreds of multinational companies running large capability centers in major tech hubs.</p></blockquote>
              </section>

              {/*  WHY HYDERABAD  */}
              <section id="why-hyderabad" className="reveal">
                <h2>Why Hyderabad Is Emerging as a GCC Powerhouse</h2>
                <p>While cities like Bangalore have historically dominated the GCC ecosystem, Hyderabad has rapidly positioned itself as one of the most competitive destinations for global capability centres.</p>
                <p>Several factors contribute to this growth.</p>
              </section>

              {/*  TALENT  */}
              <section id="talent" className="reveal">
                <h3>Strong Talent Ecosystem</h3>
                <p>Hyderabad's deep and diverse talent pool is one of the best things about the city. Every year, the city graduates a lot of students from the best engineering and management schools.</p>
                <p>Hyderabad is home to some of the best universities and technical schools in the world, which are always turning out skilled workers in fields like:</p>
                <div className="skills-box">
                  <p className="skills-box-label">Key Skills Available in Hyderabad</p>
                  <div className="skills-grid">
                    <div className="skill-item"><span className="skill-dot"></span>Computer Programming</div>
                    <div className="skill-item"><span className="skill-dot"></span>AI &amp; Data Science</div>
                    <div className="skill-item"><span className="skill-dot"></span>Product Development</div>
                    <div className="skill-item"><span className="skill-dot"></span>Financial Services</div>
                    <div className="skill-item"><span className="skill-dot"></span>Business Operations</div>
                    <div className="skill-item"><span className="skill-dot"></span>Software Engineering</div>
                  </div>
                </div>
                <p>The presence of global tech companies has made the talent pool even stronger, giving workers experience in running complicated global operations.</p>
              </section>

              {/*  INFRASTRUCTURE  */}
              <section id="infrastructure" className="reveal">
                <h3>World-Class Office Infrastructure</h3>
                <p>Hyderabad has one of the most advanced commercial real estate markets in India. Hitech City, Gachibowli, and the Financial District are examples of large business areas that have modern Grade-A office buildings that are made to help businesses run smoothly.</p>
                <div className="office-img-block">
                  <Image src="/images/office_location.jpg" alt="PrimeDesk managed office space Hyderabad GCC" width={800} height={450} loading="lazy" sizes="(max-width: 768px) 100vw, 800px" style={{ width: '100%', height: 'auto' }} />
                  <div className="caption">PrimeDesk Managed Offices · GCC Hubs · Hyderabad</div>
                </div>
                <p>These business centers offer:</p>
                <div className="check-list">
                  <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Scalable large office floors</div>
                  <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Enterprise security systems</div>
                  <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Modern amenities &amp; infrastructure</div>
                  <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Great residential connectivity</div>
                </div>
                <p style={{ "marginTop": "14px" }}>Many multinational companies choose these places to set up their GCCs because they let them grow their teams without having to move their operations.</p>
              </section>

              {/*  COSTS  */}
              <section id="costs" className="reveal">
                <h3>Competitive Operating Costs</h3>
                <p>Hyderabad has a lot of cost advantages over other major tech hubs.</p>
                <p>Costs for renting office space, building infrastructure, and running the business are usually lower than in cities like Bangalore or Mumbai. This cost-effectiveness lets businesses hire more people while still running their operations efficiently.</p>
                <p>Hyderabad is the best place for global companies to look into expanding their GCC operations in India because it has the best mix of low costs and world-class infrastructure.</p>
              </section>

              {/*  INLINE CTA 1  */}
              <div className="inline-cta reveal">
                <div className="ic-text">
                  <p className="ic-tag">PrimeDesk · Zero Brokerage</p>
                  <h3>Speak With a GCC Workspace Advisor</h3>
                  <p>Our advisors help you find the perfect office in Hyderabad's top business districts.</p>
                </div>
                <button className="ic-btn" onClick={openModal}>
                  Get Office Options
                  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>

              {/*  GOVERNMENT  */}
              <section id="government" className="reveal">
                <h3>Government Support and Pro-Business Policies</h3>
                <p>The government of Telangana has worked hard to help technology and innovation grow in the state. The government has made the business climate more friendly through a number of programs and policies that encourage investment from around the world.</p>
                <p>Some of the most important initiatives are:</p>
                <div className="govt-grid">
                  <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Technology regulation frameworks</div>
                  <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Infrastructure development programs</div>
                  <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Startup ecosystem support</div>
                  <div className="govt-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Simplified compliance rules</div>
                </div>
                <p style={{ "marginTop": "14px" }}>Many multinational companies have set up large operational centers in the area because of these initiatives.</p>
              </section>

              {/*  GLOBAL ECOSYSTEM CALLOUT  */}
              <div className="callout reveal">
                <div className="callout-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
                <div>
                  <h3>Presence of Global Technology &amp; Enterprise Companies</h3>
                  <p>Many international organizations from different industries already have Global Capability Centers in Hyderabad. This strong ecosystem has network effects that make the city even more appealing to new businesses. Companies choose Hyderabad not only because it is cost-effective, but also because it has a well-developed business environment that can handle large operations.</p>
                  <p>Hyderabad has become one of India's most dynamic business centers thanks to the presence of global technology companies, banks, and consulting firms.</p>
                </div>
              </div>

              {/*  BUSINESS DISTRICTS  */}
              <section id="districts" className="reveal">
                <h2>Key Business Districts for GCCs in Hyderabad</h2>
                <p>When companies set up Global Capability Centers, they usually look for places with good connectivity and office infrastructure that can grow with them. Many people have started to like certain business areas in Hyderabad.</p>
                <div className="district-grid">
                  <div className="d-card reveal reveal-delay-1">
                    <div className="d-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
                    <h3>Hitech City</h3>
                    <p>Many people agree that Hitech City is the center of Hyderabad's tech industry. It is home to many multinational technology companies and has high-end office spaces for rent that are perfect for big corporate teams.</p>
                    <p>This place is perfect for businesses that want to set up centers for technology and innovation.</p>
                    <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                  </div>
                  <div className="d-card reveal reveal-delay-2">
                    <div className="d-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                    <h3>Financial District</h3>
                    <p>The Financial District has quickly become a popular place for big companies to set up offices. It has modern infrastructure that supports large-scale business operations and high-quality commercial buildings.</p>
                    <p>A lot of big banks, consulting firms, and tech companies from around the world have set up shop in this area.</p>
                    <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                  </div>
                  <div className="d-card reveal reveal-delay-3">
                    <div className="d-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                    <h3>Gachibowli</h3>
                    <p>Gachibowli is another important business center with good transportation links and access to high-quality office space. There are a lot of corporate campuses and business office complexes in the area.</p>
                    <p>It is especially appealing to businesses that want to build big operational centers.</p>
                    <a href="#" className="d-link" onClick={openModal}>Explore offices <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>
                  </div>
                </div>
              </section>

              {/*  MANAGED OFFICES  */}
              <section id="managed-offices" className="reveal">
                <h2>Managed Offices for GCC Expansion</h2>
                <p>When setting up Global Capability Centers in Hyderabad, more and more multinational companies are choosing managed office solutions.</p>
                <p>Managed offices have a number of benefits for big businesses:</p>
                <div className="benefits-grid">
                  <div className="benefit-card reveal reveal-delay-1">
                    <div className="ben-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                    <div>
                      <div className="ben-title">Shorter Setup Timeframes</div>
                      <div className="ben-sub">Move in faster, start operating sooner</div>
                    </div>
                  </div>
                  <div className="benefit-card reveal reveal-delay-2">
                    <div className="ben-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
                    <div>
                      <div className="ben-title">Reduced Upfront Investment</div>
                      <div className="ben-sub">Less money spent up front</div>
                    </div>
                  </div>
                  <div className="benefit-card reveal reveal-delay-1">
                    <div className="ben-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                    <div>
                      <div className="ben-title">Fully Furnished Workspaces</div>
                      <div className="ben-sub">Enterprise-ready from day one</div>
                    </div>
                  </div>
                  <div className="benefit-card reveal reveal-delay-2">
                    <div className="ben-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                    <div>
                      <div className="ben-title">Scalable Infrastructure</div>
                      <div className="ben-sub">Office infrastructure that can grow</div>
                    </div>
                  </div>
                  <div className="benefit-card reveal reveal-delay-1">
                    <div className="ben-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                    <div>
                      <div className="ben-title">Operational Support Services</div>
                      <div className="ben-sub">Services that help with operations</div>
                    </div>
                  </div>
                </div>
                <p style={{ "marginTop": "16px" }}>Instead of spending a lot of money on interior design, infrastructure, and coordinating with vendors, businesses can move into fully furnished office spaces made for business teams.</p>
              </section>

              {/*  EXPLORE ENTERPRISE CTA SECTION  */}
              <div className="inline-cta reveal">
                <div className="ic-text">
                  <p className="ic-tag">Get Enterprise Office Options</p>
                  <h3>Explore Enterprise Office Spaces for GCCs</h3>
                  <p>Choosing the right office space is very important if your company is thinking about expanding to Hyderabad in the GCC. PrimeDesk helps businesses all over the world find flexible office spaces that fit their long-term growth plans.</p>
                  <div className="check-list" style={{ "marginTop": "10px" }}>
                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Offices for 100 to 2000 people</div>
                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Commercial buildings that are up to enterprise standards</div>
                    <div className="check-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Advice on how to set up a strategic workspace</div>
                  </div>
                </div>
                <button className="ic-btn" onClick={openModal}>
                  Get Enterprise Office Options
                  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>

              {/*  HOW PRIMEDESK HELPS  */}
              <section id="primedesk" className="reveal">
                <h2>How PrimeDesk Supports GCC Office Setup</h2>
                <p>Choosing the right office space is an important step for businesses that want to set up Global Capability Centers in Hyderabad. PrimeDesk helps international businesses find office spaces that meet their needs for operations, team size, and plans for growth in the future.</p>
                <p>The advisory process has:</p>
                <div className="steps-box reveal">
                  <p className="steps-label">Our Advisory Process</p>
                  <div className="step-row"><div className="step-num">1</div><div className="step-text">Knowing what the business office needs</div></div>
                  <div className="step-row"><div className="step-num">2</div><div className="step-text">Finding good places to set up an office</div></div>
                  <div className="step-row"><div className="step-num">3</div><div className="step-text">Making a list of scalable workspace options</div></div>
                  <div className="step-row"><div className="step-num">4</div><div className="step-text">Setting up visits to the site</div></div>
                  <div className="step-row"><div className="step-num">5</div><div className="step-text">Helping with lease negotiations</div></div>
                </div>

                <p style={{ "marginTop": "20px", "marginBottom": "16px" }}>PrimeDesk helps businesses find office space in Hyderabad that will help them grow now and in the future by giving them access to a large network of enterprise office spaces.</p>

                <div className="why-box reveal">
                  <p className="why-label">Why Companies Choose PrimeDesk</p>
                  <div className="why-list">
                    <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Zero brokerage for tenants</div>
                    <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Access to verified workspace operators and developers</div>
                    <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Transparent comparisons and market insights</div>
                    <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Fast turnaround — curated options shared within 24–48 hours</div>
                    <div className="why-item"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>Experience supporting startups, growing companies, and enterprise teams</div>
                  </div>
                </div>
              </section>

              {/*  INLINE CTA 2  */}
              <div className="inline-cta reveal">
                <div className="ic-text">
                  <p className="ic-tag">Get Enterprise Office Options</p>
                  <h3>Ready to Set Up Your GCC in Hyderabad?</h3>
                  <p>Offices for 100 to 2000 people. Curated options within 24–48 hours.</p>
                </div>
                <button className="ic-btn" onClick={openModal}>
                  Get Office Options
                  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>

              {/*  FUTURE  */}
              <section id="future" className="reveal">
                <h2>The Future of GCCs in Hyderabad</h2>
                <p>In the next few years, the number of Global Capability Centers in Hyderabad is expected to grow a lot faster. Hyderabad is becoming an even more appealing place for multinational companies to do business as they try to grow their operations around the world. This is because of the city's strong talent pool and business infrastructure.</p>
                <p>Experts in the field expect growth to continue in areas like:</p>
                <div className="growth-grid">
                  <div className="g-card reveal reveal-delay-1">
                    <div className="g-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                    <div className="g-name">Artificial Intelligence</div>
                  </div>
                  <div className="g-card reveal reveal-delay-2">
                    <div className="g-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg></div>
                    <div className="g-name">Fintech</div>
                  </div>
                  <div className="g-card reveal reveal-delay-1">
                    <div className="g-icon"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
                    <div className="g-name">Healthcare Technology</div>
                  </div>
                  <div className="g-card reveal reveal-delay-2">
                    <div className="g-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
                    <div className="g-name">Enterprise Software</div>
                  </div>
                </div>
                <p style={{ "marginTop": "18px" }}>This growth will make Hyderabad an even stronger global hub for capability centers.</p>
              </section>

              {/*  FAQ  */}
              <section id="faq" className="reveal">
                <h2>Frequently Asked Questions</h2>
                <p style={{ "marginBottom": "20px" }}>Common questions about setting up a Global Capability Centre in Hyderabad.</p>
                <div className="faq-list">
                  {[
                    { q: "What is a Global Capability Centre?", a: "A Global Capability Centre is an offshore operational hub established by multinational companies to manage strategic functions such as technology development, analytics, finance operations, and customer services." },
                    { q: "Why is Hyderabad a popular destination for GCCs?", a: "Hyderabad offers a large talent pool, competitive operating costs, enterprise office infrastructure, and a strong technology ecosystem, making it ideal for multinational companies expanding global operations." },
                    { q: "Which areas are best for GCC offices in Hyderabad?", a: "Top locations include Hitech City, Financial District, and Gachibowli, which provide enterprise-grade office buildings and excellent connectivity." },
                    { q: "How large are GCC offices typically?", a: "Global Capability Centres usually require office spaces supporting teams of 100 to 2000 employees, depending on the scale of operations." },
                    { q: "Does PrimeDesk charge brokerage?", a: "No. PrimeDesk offers zero brokerage for tenants. We connect businesses with verified workspace operators and developers, providing transparent comparisons and fast turnaround." },
                    { q: "How quickly can I get curated office options?", a: "PrimeDesk shares curated enterprise office options within 24–48 hours of understanding your requirements." }
                  ].map((faq, idx) => (
                    <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`}>
                      <button className="faq-btn" aria-expanded={activeFaq === idx} onClick={() => setActiveFaq(activeFaq === idx ? null : idx as any)}>
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

      {/*  ══════ ABOUT THE AUTHOR ══════  */}
      <AuthorCard />

      {/*  ══════ BOTTOM CTA ══════  */}
      <div className="bottom-cta-section">
        <div className="wrap bcs-inner">
          <p className="bcs-tag">PrimeDesk · Hyderabad's GCC Office Experts</p>
          <h2 className="bcs-h2">Looking to Set Up a Global Capability Centre in Hyderabad?</h2>
          <p className="bcs-p">Choosing the right office space is an important step if your company is thinking about setting up a Global Capability Center in Hyderabad. PrimeDesk helps businesses all over the world find scalable office spaces in important business areas like Hitech City, the Financial District, and Gachibowli. Get curated office options within 24–48 hours.</p>
          <div className="bcs-actions">
            <button className="bcs-btn-primary" onClick={openModal}>
              Schedule GCC Workspace Consultation
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
            <div className="bcs-trust-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>100–2000 Seats</div>
          </div>
        </div>
      </div>

      {/*  ══════ FOOTER ══════  */}
      <Footer />
      {/*  ══════ MOBILE BOTTOM CTA ══════  */}
      <div className="mobile-bottom-cta">
        <div className="mbc-trust">
          <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Zero Brokerage</div>
          <div className="mbc-trust-item" style={{ color: "var(--border)" }}>|</div>
          <div className="mbc-trust-item"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 10 0 1-5.93 9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Premium GCC Specs</div>
        </div>
        <button className="mbc-btn" onClick={openModal}>
          Talk to a Workspace Expert
          <svg viewBox="0 0 24 24"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>

    </div>
  );
}