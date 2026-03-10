'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';
import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
  return (
    <div className={styles.bar}>
      <a href={`tel:${COMPANY.phone[0].replace(/\s/g, '')}`} className={styles.phoneBtn}>
        <Phone size={18} />
        Call Now
      </a>
      <Link href="/contact-us/" className={styles.bookBtn}>
        Book a Space
      </Link>
    </div>
  );
}
