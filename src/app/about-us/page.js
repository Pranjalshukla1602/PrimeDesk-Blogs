import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import CTABanner from '@/components/CTABanner';
import { COMPANY, TEAM, FEATURES } from '@/lib/data';
import * as Icons from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'About PrimeDesk – Flexible Co-working & Managed Offices in India',
  description: 'PrimeDesk is a trusted provider of managed offices and coworking spaces in Hyderabad, helping startups, SMEs, and enterprises grow with flexible workspaces.',
  openGraph: {
    title: 'About PrimeDesk – Flexible Co-working & Managed Offices',
    description: 'A woman-led company redefining how businesses find and experience office spaces.',
  },
};

export default function AboutPage() {
  const values = [
    { title: 'Our Vision', text: 'To be the leading provider of premium office spaces that drive innovation, inspire success, foster growth, and create lasting value.', icon: 'Eye' },
    { title: 'Our Mission', text: 'To provide luxurious, functional, tech-driven workspaces that are cost-effective and brokerage-free supporting growth & creativity.', icon: 'Target' },
    { title: 'Our Values', text: 'Excellence, innovation, flexibility, luxury, sustainability, integrity, community, and well-being to build inspiring workspaces.', icon: 'Heart' },
    { title: 'Our Goals', text: 'Creating adaptable, premium, and responsible workspaces that inspire innovation and empower business growth at every stage.', icon: 'Flag' },
  ];

  return (
    <>
      <HeroSection
        headline="Workspaces Designed for Business Growth"
        subtext="A woman-led company redefining how businesses find and experience inspiring, efficient, and future-ready work environments."
        compact
      />

      {/* Vision / Mission */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Who We Are</span>
            <h2>Our Vision, Mission &amp; Values</h2>
            <div className="divider"></div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = Icons[v.icon] || Icons.Star;
              return (
                <div key={i} className={styles.valueCard}>
                  <div className={styles.valueIcon}><Icon size={28} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Why Choose Us</span>
            <h2>Experience Refined Workspaces Designed for Performance</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid--4">
            {FEATURES.slice(0, 4).map((f, i) => {
              const Icon = Icons[f.icon] || Icons.Check;
              return (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}><Icon size={24} /></div>
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Leadership</span>
            <h2>Meet Our Team</h2>
            <div className="divider"></div>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Join the PrimeDesk Family" subtext="Experience premium workspaces designed to elevate your team's productivity and growth." />
    </>
  );
}
