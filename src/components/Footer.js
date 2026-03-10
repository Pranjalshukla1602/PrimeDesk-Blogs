import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY, NAV_LINKS, PRIMARY_SERVICES } from '@/lib/data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Prime</span>
              <span className={styles.logoAccent}>Desk</span>
            </Link>
            <p className={styles.brandDesc}>{COMPANY.description}</p>
            <div className={styles.socials}>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              {NAV_LINKS.filter(l => !l.children).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={styles.heading}>Our Services</h3>
            <ul className={styles.list}>
              {PRIMARY_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={styles.link}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.contactList}>
              {COMPANY.phone.map((p) => (
                <li key={p} className={styles.contactItem}>
                  <Phone size={16} />
                  <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                </li>
              ))}
              <li className={styles.contactItem}>
                <Mail size={16} />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright © {new Date().getFullYear()} PrimeDesk, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
