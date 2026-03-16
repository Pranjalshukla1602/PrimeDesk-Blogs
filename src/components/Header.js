'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // This page has its own navbar
  if (pathname?.startsWith('/gcc-offices-hyderabad')) return null;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Prime</span>
          <span className={styles.logoAccent}>Desk</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.children && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                onClick={() => link.children && setActiveDropdown(activeDropdown === link.href ? null : link.href)}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className={styles.chevron} />}
              </Link>

              {link.children && (
                <div className={`${styles.dropdown} ${activeDropdown === link.href ? styles.dropdownOpen : ''}`}>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${COMPANY.phone[0].replace(/\s/g, '')}`} className={styles.phoneBtn}>
            <Phone size={16} />
            <span className={styles.phoneText}>{COMPANY.phone[0]}</span>
          </a>
          <Link href="/contact-us/" className="btn btn--primary btn--sm">
            Book a Space
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
