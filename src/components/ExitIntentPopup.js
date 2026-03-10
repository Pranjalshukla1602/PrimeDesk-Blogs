'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';
import styles from './ExitIntentPopup.module.css';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('exitPopupShown');
    if (hasShown) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        document.removeEventListener('mouseout', handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setIsOpen(false)} aria-label="Close">
          <X size={24} />
        </button>
        <div className={styles.header}>
          <h2>Wait! Don&apos;t Miss Out 🏢</h2>
          <p>Get a <strong>free workspace consultation</strong> and find the perfect office space for your team.</p>
        </div>
        <LeadForm
          title=""
          subtitle=""
          variant="default"
        />
      </div>
    </div>
  );
}
