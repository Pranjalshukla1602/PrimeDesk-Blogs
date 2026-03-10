'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20PrimeDesk%2C%20I%27m%20interested%20in%20your%20workspace%20solutions.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
