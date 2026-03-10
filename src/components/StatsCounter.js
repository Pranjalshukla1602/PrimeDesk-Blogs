'use client';

import { useEffect, useState, useRef } from 'react';
import { STATS } from '@/lib/data';
import styles from './StatsCounter.module.css';

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const formatNumber = (n) => {
    if (n >= 100000) return (n / 1000).toFixed(0) + 'K';
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
    return n.toString();
  };

  return (
    <span ref={ref} className={styles.number}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <div key={i} className={styles.item}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
