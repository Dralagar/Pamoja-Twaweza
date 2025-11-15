'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import styles from '@/app/styles/Footer.module.css';

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

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pamoja-twaweza-6146232a2/?originalSubdomain=ke',
    icon: <FaLinkedin />,
    ariaLabel: 'Visit our LinkedIn page'
  },
  {
    id: 'x',
    platform: 'X',
    url: 'https://x.com/PamojaTwaw37933',
    icon: <Image src="/images/X.png" alt="X" width={24} height={24} />,
    ariaLabel: 'Follow us on X'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=100095464061098&_rdc=1&_rdr#',
    icon: <FaFacebook />,
    ariaLabel: 'Visit our Facebook page'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    url: 'https://www.youtube.com/channel/UCsBqWgvlTqposqFuwF5zUpg',
    icon: <FaYoutube />,
    ariaLabel: 'Subscribe to our YouTube channel'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/pamojatwawezacbo?igsh=YzljYTk1ODg3Zg==',
    icon: <FaInstagram />,
    ariaLabel: 'Follow us on Instagram'
  }
];

const NAV_LINKS: NavigationLink[] = [
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'programs', label: 'Programs', href: '/programs' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const LEGAL_LINKS: NavigationLink[] = [
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' }
];

const Footer = () => {
  const [year, setYear] = useState<number>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Organization Info */}
          <div className={styles.gridItem}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <Image
                  src="/images/Logo.png"
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

          {/* Navigation Links */}
          <div className={styles.gridItem}>
            <h2 className={styles.gridTitle}>Quick Links</h2>
            <nav aria-label="Footer navigation">
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

          {/* Social Links */}
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

        <div className={styles.divider} />

        <div className={styles.copyright}>
          <p>© {year} Pamoja Twaweza. All rights reserved.</p>
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map(link => (
              <Link key={link.id} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;