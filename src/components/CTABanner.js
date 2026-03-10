import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner({
  headline = 'Ready to Find Your Perfect Workspace?',
  subtext = 'Book a free consultation today and let us help you find the ideal office space for your business.',
  ctaLabel = 'Get Started',
  ctaHref = '/contact-us/',
}) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.subtext}>{subtext}</p>
        </div>
        <Link href={ctaHref} className={`btn btn--gold btn--lg ${styles.cta}`}>
          {ctaLabel}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
