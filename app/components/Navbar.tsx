'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Search, ChevronDown } from 'lucide-react';

export default function ModernNavbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs", hasDropdown: true },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  const programLinks = [
    { href: "/programs#livelihoods", title: "Livelihoods", desc: "Digital skills, tailoring and entrepreneurship" },
    { href: "/programs#education", title: "Education", desc: "English literacy and vocational training" },
    { href: "/programs#mental-health", title: "Mental Health", desc: "Awareness and counseling" },
    { href: "/programs#peace", title: "Peace", desc: "Dialogue and conflict resolution" }
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-[#FFE66D]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/images/Logo.png"
                alt="Pamoja Twaweza"
                className="w-12 h-12 object-contain"
              />
              <span className="hidden sm:block text-lg font-bold text-[#000000]">
                Pamoja Twaweza
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => setProgramsOpen(true)}
                      onMouseLeave={() => setProgramsOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 font-semibold transition-colors ${
                          isActive(link.href) ? 'text-[#0089C7]' : 'text-[#000000] hover:text-[#0089C7]'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {programsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-2 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-2 p-4">
                              {programLinks.map((program) => (
                                <motion.a
                                  key={program.href}
                                  href={program.href}
                                  className="p-4 rounded-xl hover:bg-[#e0f2ff] transition-colors group"
                                  whileHover={{ x: 5 }}
                                >
                                  <p className="font-semibold text-[#000000] mb-1 group-hover:text-[#0089C7]">
                                    {program.title}
                                  </p>
                                  <p className="text-sm text-[#6b7280]">{program.desc}</p>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className={`font-semibold transition-colors ${
                        isActive(link.href) ? 'text-[#0089C7]' : 'text-[#000000] hover:text-[#0089C7]'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="search"
                      placeholder="Search..."
                      className="h-10 w-64 px-4 rounded-full border-2 border-[#0089C7] outline-none"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5 text-[#000000]" />
              </motion.button>

              {/* Donate Button */}
              <motion.a
                href="/donate"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#0089C7] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-6 h-6 text-[#000000]" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Curtain Effect */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sliding Menu - Right to Left */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <a href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                  <div className="w-10 h-10 bg-[#0089C7] rounded-xl flex items-center justify-center text-white font-bold">
                    PT
                  </div>
                  <span className="font-bold text-lg text-[#000000]">Pamoja Twaweza</span>
                </a>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-[#000000]" />
                </motion.button>
              </div>

              {/* Search Bar */}
              <div className="p-6 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#0089C7]"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                        isActive(link.href)
                          ? 'bg-[#e0f2ff] text-[#0089C7]'
                          : 'text-[#000000] hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Programs Section */}
              <div className="px-6 pb-6">
                <p className="text-xs font-semibold text-[#6b7280] uppercase mb-3 px-4">Programs</p>
                <div className="space-y-2">
                  {programLinks.map((program, index) => (
                    <motion.a
                      key={program.href}
                      href={program.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-4 rounded-xl bg-gray-50 hover:bg-[#e0f2ff] transition-colors"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <p className="font-semibold text-[#000000] mb-1">{program.title}</p>
                      <p className="text-sm text-[#6b7280]">{program.desc}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <div className="p-6 border-t border-gray-100">
                <motion.a
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 bg-[#0089C7] text-white text-center font-semibold rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}