'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
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
          <Image src="https://primedesk.co.in/wp-content/uploads/2025/05/WhatsApp_Image_2025-05-26_at_3.19.51_PM__2_-removebg-preview-e1748493491575.png" alt="PrimeDesk Logo" width={150} height={40} className={styles.logoImg} priority />
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
