'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side
  }

  const toggleMobile = () => setMobileOpen((v) => !v);
  const closeMobile = () => setMobileOpen(false);

  const handleDonateClick = () => {
    closeMobile();
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
    <header className="sticky top-0 z-50 w-full bg-[var(--accent-yellow)] shadow">
      {/* Main nav */}
      <nav className="border-b border-transparent bg-[var(--accent-yellow)]" aria-label="Main">
        <div className="container flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Pamoja Twaweza home">
            <Image src="/images/Logo.png" alt="Pamoja Twaweza" width={40} height={40} />
            <span className="hidden sm:inline text-base font-semibold text-gray-900">Pamoja Twaweza</span>
          </Link>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium hover:text-primary-blue ${isActive('/') ? 'text-primary-blue' : 'text-gray-700'}`}>Home</Link>
            <Link href="/about" className={`text-sm font-medium hover:text-primary-blue ${isActive('/about') ? 'text-primary-blue' : 'text-gray-700'}`}>About</Link>

            {/* Programs dropdown */}
            <div className="relative"
                 onMouseEnter={() => setProgramsOpen(true)}
                 onMouseLeave={() => setProgramsOpen(false)}>
              <button
                className={`text-sm font-medium hover:text-primary-blue ${pathname?.startsWith('/programs') ? 'text-primary-blue' : 'text-gray-700'}`}
                aria-haspopup="true"
                aria-expanded={programsOpen}
                aria-controls="programs-menu"
                onClick={() => setProgramsOpen((v) => !v)}
              >
                Programs
              </button>
              {programsOpen && (
                <div id="programs-menu" role="menu" className="absolute left-0 top-full mt-2 w-[560px] rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/programs#livelihoods" className="rounded-lg p-3 hover:bg-gray-50" role="menuitem">
                      <p className="text-sm font-semibold text-gray-900">Livelihoods</p>
                      <p className="text-xs text-gray-600">Digital skills, tailoring and entrepreneurship.</p>
                    </Link>
                    <Link href="/programs#education" className="rounded-lg p-3 hover:bg-gray-50" role="menuitem">
                      <p className="text-sm font-semibold text-gray-900">Education</p>
                      <p className="text-xs text-gray-600">English literacy and vocational training.</p>
                    </Link>
                    <Link href="/programs#mental-health" className="rounded-lg p-3 hover:bg-gray-50" role="menuitem">
                      <p className="text-sm font-semibold text-gray-900">Mental Health</p>
                      <p className="text-xs text-gray-600">Awareness and counseling.</p>
                    </Link>
                    <Link href="/programs#peace" className="rounded-lg p-3 hover:bg-gray-50" role="menuitem">
                      <p className="text-sm font-semibold text-gray-900">Peace</p>
                      <p className="text-xs text-gray-600">Dialogue and conflict resolution.</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className={`text-sm font-medium hover:text-primary-blue ${isActive('/blog') ? 'text-primary-blue' : 'text-gray-700'}`}>Blog</Link>
            <Link href="/contact" className={`text-sm font-medium hover:text-primary-blue ${isActive('/contact') ? 'text-primary-blue' : 'text-gray-700'}`}>Contact</Link>
          </div>

          {/* Right: Search + CTA + Mobile button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {searchOpen ? (
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-56 rounded-full border border-gray-300 px-3 text-sm outline-none focus:border-primary-blue"
                    aria-label="Search"
                  />
                </div>
              ) : null}
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label={searchOpen ? 'Close search' : 'Open search'}
                className="h-9 w-9 rounded-full border border-gray-300 text-gray-600 hover:text-gray-900"
                title="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-5 w-5"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 105.178 11.152l3.46 3.46a.75.75 0 101.06-1.06l-3.46-3.46A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" /></svg>
              </button>
              <button
                onClick={handleDonateClick}
                className="hidden lg:inline-flex items-center rounded-full bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Donate
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container flex h-16 items-center justify-between border-b">
            <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
              <Image src="/images/Logo.png" alt="Pamoja Twaweza" width={36} height={36} />
              <span className="text-base font-semibold">Pamoja Twaweza</span>
            </Link>
            <button
              onClick={closeMobile}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="container py-4">
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search..."
                className="h-11 w-full rounded-xl border border-gray-300 px-4 text-base outline-none focus:border-primary-blue"
                aria-label="Search"
              />
            </div>
            <nav className="flex flex-col divide-y divide-gray-100" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`py-4 text-lg ${isActive(link.href) ? 'text-primary-blue' : 'text-gray-800'}`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Programs sublinks */}
              <div className="py-4">
                <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Programs</p>
                <div className="grid grid-cols-1 gap-2">
                  <Link href="/programs#livelihoods" onClick={closeMobile} className="rounded-lg p-3 hover:bg-gray-50">Livelihoods</Link>
                  <Link href="/programs#education" onClick={closeMobile} className="rounded-lg p-3 hover:bg-gray-50">Education</Link>
                  <Link href="/programs#mental-health" onClick={closeMobile} className="rounded-lg p-3 hover:bg-gray-50">Mental Health</Link>
                  <Link href="/programs#peace" onClick={closeMobile} className="rounded-lg p-3 hover:bg-gray-50">Peace</Link>
                </div>
              </div>
              <button
                onClick={handleDonateClick}
                className="mt-4 w-full rounded-full bg-primary-blue px-5 py-3 text-base font-medium text-white"
              >
                Donate
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}