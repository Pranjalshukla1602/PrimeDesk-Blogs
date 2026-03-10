import Link from 'next/link';
import { Suspense, lazy } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { COMPANY, CITIES, PRIMARY_SERVICES, FEATURES, LOCATIONS } from '@/lib/data';
import { Building2 } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import styles from './page.module.css';

const StatsCounter = lazy(() => import('@/components/StatsCounter'));
const TestimonialSlider = lazy(() => import('@/components/TestimonialSlider'));
const CTABanner = lazy(() => import('@/components/CTABanner'));
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));

export const metadata = {
  title: 'Managed Office & Coworking Spaces in Hyderabad - PrimeDesk',
  description: 'PrimeDesk provides premium managed office and coworking spaces in Hyderabad with flexible layouts, plug-and-play setup, and end-to-end management for startups, SMEs & enterprises.',
  openGraph: {
    title: 'PrimeDesk - Premium Managed Office & Coworking Spaces',
    description: 'Empowering businesses with flexible, premium workspaces across Hyderabad, Bangalore, Chennai, and Delhi.',
    url: COMPANY.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.cities}>
            {CITIES.map((city) => (
              <div key={city.name} className={styles.city}>
                <span className={styles.cityIcon}>{city.icon}</span>
                <span>{city.name}</span>
              </div>
            ))}
          </div>
          <h1 className={styles.heroTitle}>{COMPANY.tagline}</h1>
          <p className={styles.heroDesc}>{COMPANY.description}</p>
          <div className={styles.heroActions}>
            <Link href="/contact-us/" className="btn btn--primary btn--lg">
              Book Now
            </Link>
            <Link href="/our-services/" className="btn btn--outline btn--lg">
              More Details
            </Link>
          </div>
        </div>
        <div className={styles.heroGradient}></div>
      </section>

      {/* Locations Preview */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Prime Locations</span>
            <h2>Strategically Positioned Workspaces</h2>
            <div className="divider"></div>
            <p>PrimeDesk&apos;s strategically positioned workspaces in top business districts maximize connectivity, visibility, and growth potential.</p>
          </div>
          <div className={styles.locGrid}>
            {LOCATIONS.slice(0, 4).map((loc, i) => (
              <div key={i} className={styles.locCard}>
                <div className={styles.locImage}>
                  <Building2 size={32} />
                </div>
                <h3>{loc.name}</h3>
                <span className={styles.locCity}>{loc.city}</span>
                <p className={styles.locDesc}>{loc.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/locations/" className="btn btn--primary">More Locations</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Our Services</span>
            <h2>Workspace Solutions for Every Business</h2>
            <div className="divider"></div>
            <p>Experience seamless business growth with PrimeDesk through expert support, flexible spaces, smart savings, and effortless expansion.</p>
          </div>
          <div className="grid grid--3">
            {PRIMARY_SERVICES.map((service, i) => (
              <ServiceCard key={service.href} {...service} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/our-services/" className="btn btn--primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Suspense><StatsCounter /></Suspense>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Why PrimeDesk</span>
            <h2>Flexible, Scalable Workspaces That Drive Growth</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid--4">
            {FEATURES.map((feature, i) => {
              const Icon = getIcon(feature.icon);
              return (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <Icon size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Suspense><TestimonialSlider /></Suspense>

      {/* CTA */}
      <Suspense><CTABanner /></Suspense>

      {/* Exit Intent */}
      <Suspense><ExitIntentPopup /></Suspense>
    </>
  );
}
