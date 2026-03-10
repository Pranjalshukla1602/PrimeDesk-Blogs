'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">Testimonials</span>
          <h2>Voices of Trust, Stories of Success</h2>
          <div className="divider"></div>
        </div>

        <div className={styles.slider}>
          <button className={styles.arrow} onClick={() => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.slide}>
            <Quote size={40} className={styles.quote} />
            <p className={styles.text}>{TESTIMONIALS[current].text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {TESTIMONIALS[current].author.charAt(0)}
              </div>
              <div>
                <strong>{TESTIMONIALS[current].author}</strong>
                <span>{TESTIMONIALS[current].role}</span>
              </div>
            </div>
          </div>

          <button className={styles.arrow} onClick={() => setCurrent((current + 1) % TESTIMONIALS.length)} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
