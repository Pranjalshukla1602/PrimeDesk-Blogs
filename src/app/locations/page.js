import HeroSection from '@/components/HeroSection';
import CTABanner from '@/components/CTABanner';
import { LOCATIONS } from '@/lib/data';
import { MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Managed Office & Coworking Locations Across India - PrimeDesk',
  description: 'Explore PrimeDesk workspace locations across India, offering professionally managed offices and flexible work environments in key business cities.',
};

export default function LocationsPage() {
  const cities = [...new Set(LOCATIONS.map(l => l.city))];

  return (
    <>
      <HeroSection
        headline="Prime Locations Across India"
        subtext="Discover our city locations across India's top business hubs—offering premium, flexible workspaces designed to elevate your team's productivity."
        compact
      />

      <section className="section">
        <div className="container">
          {cities.map((city) => (
            <div key={city} className={styles.citySection}>
              <h2 className={styles.cityName}>
                <MapPin size={24} />
                {city}
              </h2>
              <div className={styles.locGrid}>
                {LOCATIONS.filter(l => l.city === city).map((loc, i) => (
                  <div key={i} className={styles.locCard}>
                    <div className={styles.locIcon}>
                      <MapPin size={20} />
                    </div>
                    <h3>{loc.name}</h3>
                    <p>{loc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Visit Our Offices"
        subtext="Book a free guided tour of any of our locations and find your perfect workspace."
        ctaLabel="Schedule a Visit"
      />
    </>
  );
}
