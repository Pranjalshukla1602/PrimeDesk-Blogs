import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, PRIMARY_SERVICES } from '@/lib/data';
import styles from './Footer.module.css';

const BASE_URL = 'https://primedesk.co.in';

export default function Footer() {
  const customQuickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Our Services', href: '/our-services/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Contact Us', href: '/contact-us/' }
  ];

  return (
    <footer className={styles.footer}>
      {/* Top Banner */}
      <div className={styles.topSection}>
        <Link href={BASE_URL} className={styles.logo}>
          <Image src="/images/logo.webp" alt="PrimeDesk" width={150} height={40} className={styles.logoSvg} style={{ objectFit: 'contain' }} loading="lazy" />
          <span style={{ display: 'none' }} className={styles.brandName}>PRIMEDESK</span>
        </Link>
        <p className={styles.brandDesc}>
          PrimeDesk offers flexible, premium workspaces across major cities in India—empowering businesses with hassle-free, fully serviced office solutions.
        </p>
      </div>

      <hr className={styles.divider} />

      {/* 4 Column Grid */}
      <div className={styles.grid}>
        {/* Col 1 */}
        <div className={styles.col}>
          <h3 className={styles.heading}>QUICK LINKS</h3>
          <ul className={styles.list}>
            {customQuickLinks.map((link) => (
              <li key={link.href}>
                <a href={`${BASE_URL}${link.href}`} className={styles.linkItem}>
                  <ChevronRight size={14} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 */}
        <div className={styles.col}>
          <h3 className={styles.heading}>OUR SERVICES</h3>
          <ul className={styles.list}>
            {PRIMARY_SERVICES.map((s) => (
              <li key={s.href}>
                <a href={`${BASE_URL}${s.href}`} className={styles.linkItem}>
                  <ChevronRight size={14} />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div className={styles.col}>
          <h3 className={styles.heading}>ADDRESS</h3>
          <ul className={styles.addressList}>
            {COMPANY.phone.map((p) => (
              <li key={p} className={styles.addressItem}>
                <Phone size={18} />
                <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
              </li>
            ))}
            <li className={styles.addressItem}>
              <Mail size={18} />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li className={styles.addressItem}>
              <MapPin size={18} />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className={styles.col}>
          <h3 className={styles.heading}>FIND AND FOLLOW US</h3>
          <div className={styles.socials}>
            <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div>Copyright © {new Date().getFullYear()} Primedesk, All rights reserved.</div>
        <div>Designed and Developed by <span className={styles.galaxySpan}>Galaxy Tech Solutions</span></div>
      </div>
    </footer>
  );
}
