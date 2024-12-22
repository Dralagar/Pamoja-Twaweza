'use client';

import { useState, useEffect } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side
  }

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
            <Link href="/" className={styles.logoLink}>
              <Image 
                src="/images/PamojaTwaweza_Logo.png" 
                alt="Pamoja Twaweza Logo" 
                width={48}
                height={48}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>
                Pamoja Twaweza
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          {mounted && (
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
              <Link
                key={`${link.href}-${index}`}
                href={link.href as LinkProps['href']}
                className={`${styles.navLink} ${isActive(link.href) ? styles.activeLink : ''}`}
              >
                {link.label}
              </Link>
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
      {mounted && isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.activeMobileLink : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
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