'use client';

import { useState, useEffect } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDonateClick = () => {
    closeMenu();
    router.push('/donate');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar} suppressHydrationWarning>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              <img
                src="/images/PamojaTwaweza_Logo.png"
                alt="Pamoja Twaweza Logo"
                width={48}
                height={48}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>
                Pamoja Twaweza
              </span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          {isClient && (
            <button
              className={`${styles.mobileMenuButton} md:hidden`}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}

          {/* Desktop menu */}
          <div className={styles.desktopMenu}>
            {navLinks.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href.toString()}
                className={`${styles.navLink} ${isActive(link.href) ? styles.activeLink : ''}`}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={handleDonateClick}
              className={`${styles.donateButton} hover:bg-blue-700 transition-colors duration-200`}
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href.toString()}
                className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.activeMobileLink : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={handleDonateClick}
              className={`${styles.mobileDonateButton} hover:bg-blue-700 transition-colors duration-200`}
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 