import React from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-light-blue)] text-[var(--secondary-dark)] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Pamoja Twaweza</h2>
            <p className="text-sm text-[var(--neutral-gray)]">
              Empowering communities through sustainable development.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-[var(--primary-blue)] transition-colors">
              About Us
            </a>
            <a href="#programs" className="hover:text-[var(--primary-blue)] transition-colors">
              Programs
            </a>
            <a href="#contact" className="hover:text-[var(--primary-blue)] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/PamojaTwaw37933" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
              <Image src="/images/X.png" alt="X Logo" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--neutral-gray)] my-6"></div>

        {/* Copyright */}
        <div className="bg-[var(--secondary-light)] text-center text-sm text-[var(--neutral-dark)] py-4">
          © {new Date().getFullYear()} Pamoja Twaweza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
