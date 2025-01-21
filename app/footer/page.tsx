'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
// Define types for better maintainability
type SocialLink = {
  id: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

type NavigationLink = {
  id: string;
  label: string;
  href: string;
};

// Configuration objects for easy updates
const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pamoja-twaweza-6146232a2/?originalSubdomain=ke',
    icon: <FaLinkedin className="w-6 h-6" />,
    ariaLabel: 'Visit our LinkedIn page'
  },
  {
    id: 'x',
    platform: 'X',
    url: 'https://x.com/PamojaTwaw37933',
    icon: <img src="/images/X.png" alt="X" width={24} height={24} />,
    ariaLabel: 'Follow us on X'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=100095464061098&_rdc=1&_rdr#',
    icon: <FaFacebook className="w-6 h-6" />,
    ariaLabel: 'Visit our Facebook page'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    url: 'https://www.youtube.com/channel/UCsBqWgvlTqposqFuwF5zUpg',
    icon: <FaYoutube className="w-6 h-6" />,
    ariaLabel: 'Subscribe to our YouTube channel'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/pamojatwawezacbo?igsh=YzljYTk1ODg3Zg==',
    icon: <FaInstagram className="w-6 h-6" />,
    ariaLabel: 'Follow us on Instagram'
  }
];

const NAV_LINKS: NavigationLink[] = [
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'programs', label: 'Programs', href: '/programs' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const Footer = () => {
  // Use state to handle client-side rendering
  const [year, setYear] = useState<number>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  return (
    <footer className={styles.footer} role="contentinfo" suppressHydrationWarning>
      <div className={styles.container}>
        {/* Grid Container */}
        <div className={styles.gridContainer}>
          {/* Organization Info Grid */}
          <div className={styles.gridItem}>
            <div className={styles.logoWrapper}>
              <Link href="/" aria-label="Pamoja Twaweza - Return to homepage">
                <Image
                  src="/images/PamojaTwaweza_Logo.png"
                  alt="Pamoja Twaweza Logo"
                  width={150}
                  height={50}
                  className={styles.logo}
                  priority
                />
              </Link>
            </div>
            <h2 className={styles.gridTitle}>Pamoja Twaweza</h2>
            <p className={styles.gridText}>
              Empowering communities through sustainable development and innovative solutions.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className={styles.gridItem}>
            <h2 className={styles.gridTitle}>Quick Links</h2>
            <nav aria-label="Footer Navigation">
              <ul className={styles.navList}>
                {NAV_LINKS.map(link => (
                  <li key={link.id}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links Grid */}
          <div className={styles.gridItem}>
            <h2 className={styles.gridTitle}>Connect With Us</h2>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className={styles.socialIcon}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Copyright Section */}
        <div className={styles.copyright}>
          <p suppressHydrationWarning>
            © {year} Pamoja Twaweza. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
