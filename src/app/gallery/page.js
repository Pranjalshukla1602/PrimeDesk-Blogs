'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `PrimeDesk workspace interior ${i + 1}`,
  category: i % 4 === 0 ? 'offices' : i % 3 === 0 ? 'meetings' : i % 2 === 0 ? 'lounges' : 'workstations',
}));

const categories = ['all', 'offices', 'meetings', 'lounges', 'workstations'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <HeroSection
        headline="Gallery"
        subtext="A visual look at PrimeDesk workspaces, office interiors, and thoughtfully designed environments."
        compact
      />

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((img) => (
              <div key={img.id} className={styles.item}>
                <div className={styles.placeholder}>
                  <div className={styles.placeholderInner}>
                    <span className={styles.placeholderIcon}>🏢</span>
                    <span className={styles.placeholderText}>{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Love What You See?"
        subtext="Book a tour to experience these workspaces in person. Your perfect office is waiting."
        ctaLabel="Book a Tour"
      />
    </>
  );
}
