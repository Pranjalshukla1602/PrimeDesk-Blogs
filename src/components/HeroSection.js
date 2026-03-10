import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection({
  headline,
  subtext,
  primaryCTA = { label: 'Book Now', href: '/contact-us/' },
  secondaryCTA = null,
  overlay = true,
  compact = false,
}) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={styles.bg}></div>
      {overlay && <div className={styles.overlay}></div>}
      <div className={`container ${styles.content}`}>
        <h1 className={styles.headline}>{headline}</h1>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
        <div className={styles.actions}>
          {primaryCTA && (
            <Link href={primaryCTA.href} className="btn btn--primary btn--lg">
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <Link href={secondaryCTA.href} className="btn btn--outline btn--lg">
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
