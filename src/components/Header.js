'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import { NAV_LINKS } from '@/lib/data';
import styles from './Header.module.css';

const BASE_URL = 'https://primedesk.co.in';

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

  const customQuickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Our Services', href: '/our-services/', hasChildren: true },
    { label: 'Locations', href: '/locations/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Contact Us', href: '/contact-us/' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href={BASE_URL} className={styles.logo}>
          <img 
            src="/images/logo.webp" 
            srcSet="/images/logo-120w.webp 120w, /images/logo-240w.webp 240w" 
            sizes="(max-width: 768px) 120px, 150px"
            alt="PrimeDesk Logo" 
            width="150" 
            height="40" 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async" 
            fetchPriority="high" 
          />
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {customQuickLinks.map((link) => (
            <div
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.hasChildren && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={`${BASE_URL}${link.href}`}
                className={styles.navLink}
                onClick={() => link.hasChildren && setActiveDropdown(activeDropdown === link.href ? null : link.href)}
              >
                {link.label}
                {link.hasChildren && <ChevronDown size={14} className={styles.chevron} />}
              </a>

              {link.hasChildren && (
                <div className={`${styles.dropdown} ${activeDropdown === link.href ? styles.dropdownOpen : ''}`}>
                  {NAV_LINKS.find(n => n.label === 'Our Services')?.children?.map((child) => (
                    <a key={child.href} href={`${BASE_URL}${child.href}`} className={styles.dropdownLink}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`${BASE_URL}/contact-us/`} className={styles.bookBtn}>
            Book A Space &rarr;
          </a>
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
