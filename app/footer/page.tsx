'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pamoja-twaweza-6146232a2/?originalSubdomain=ke',
    icon: <Linkedin className="w-5 h-5" />,
    ariaLabel: 'Visit our LinkedIn page'
  },
  {
    id: 'x',
    platform: 'X',
    url: 'https://x.com/PamojaTwaw37933',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    ariaLabel: 'Follow us on X'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=100095464061098',
    icon: <Facebook className="w-5 h-5" />,
    ariaLabel: 'Visit our Facebook page'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    url: 'https://www.youtube.com/channel/UCsBqWgvlTqposqFuwF5zUpg',
    icon: <Youtube className="w-5 h-5" />,
    ariaLabel: 'Subscribe to our YouTube channel'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/pamojatwawezacbo',
    icon: <Instagram className="w-5 h-5" />,
    ariaLabel: 'Follow us on Instagram'
  }
];

const NAV_LINKS = [
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'programs', label: 'Programs', href: '/programs' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const PROGRAM_LINKS = [
  { id: 'livelihoods', label: 'Livelihoods', href: '/programs#livelihoods' },
  { id: 'education', label: 'Education', href: '/programs#education' },
  { id: 'mental-health', label: 'Mental Health', href: '/programs#mental-health' },
  { id: 'peace', label: 'Peace', href: '/programs#peace' }
];

const Footer = () => {
  const [year, setYear] = useState<number>();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribe:', email);
      setEmail('');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-[#ffffff] text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src="/images/Logo.png"
                alt="Pamoja Twaweza"
                className="h-16 w-auto"
              />
            </a>
            <h3 className="text-2xl font-bold mb-4 text-[#FFE66D]">Pamoja Twaweza</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Empowering refugee and host communities through sustainable development, education, and advocacy in Kitengela, Kenya.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#0089C7] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFE66D]">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#0089C7] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFE66D]">Our Programs</h4>
            <ul className="space-y-3">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#0089C7] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFE66D]">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#0089C7]" />
                <p className="text-sm">
                  Chairman Road, Next to Best Lady<br />
                  Kajiado East, Kitengela, Kenya
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#0089C7]" />
                <a href="mailto:info@pamojatwaweza.org" className="text-sm hover:text-[#0089C7] transition-colors">
                  info@pamojatwaweza.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#0089C7]" />
                <a href="tel:+254XXX" className="text-sm hover:text-[#0089C7] transition-colors">
                  +254 XXX XXX XXX
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-white">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-[#0089C7] transition-colors"
                />
                <motion.button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-[#0089C7] rounded-lg font-semibold text-sm hover:bg-[#0077b3] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {year} Pamoja Twaweza CBO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-[#0089C7] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-[#0089C7] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;