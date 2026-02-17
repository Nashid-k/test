'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiBook } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home', chapter: 'I' },
  { name: 'About', href: '#about', chapter: 'II' },
  { name: 'Values', href: '#values', chapter: 'III' },
  { name: 'Skills', href: '#skills', chapter: 'IV' },
  { name: 'Projects', href: '#projects', chapter: 'V' },
  { name: 'Education', href: '#education', chapter: 'VI' },
  { name: 'Contact', href: '#contact', chapter: 'VII' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar - Book Header Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-parchment-light/95 backdrop-blur-md shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] border-b-2 border-ink-light/20 py-2 sm:py-3'
            : 'bg-transparent py-3 sm:py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Monogram Style */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gold-dark/10 rounded-sm flex items-center justify-center border-2 border-gold-dark/30 group-hover:border-gold-dark transition-all duration-300 shadow-sm">
              <span className="text-xl sm:text-2xl font-heading font-bold text-gold-dark">F</span>
            </div>
            <div className="hidden md:block">
              <div className="text-base sm:text-lg font-display font-bold text-ink-black">Fidha Fathima</div>
              <div className="text-xs text-gold-dark font-medium tracking-wider">Portfolio</div>
            </div>
          </motion.a>

          {/* Desktop Navigation - Chapter Style */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'text-gold-dark'
                    : 'text-ink-sepia hover:text-ink-black'
                }`}
              >
                <span className="flex items-center gap-1.5 xl:gap-2">
                  <span className="text-xs font-heading opacity-60">{item.chapter}.</span>
                  <span>{item.name}</span>
                </span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[44px] min-w-[44px]"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[44px] min-w-[44px]"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="w-10 h-10 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[44px] min-w-[44px]"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-black hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[44px] min-w-[44px]"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Book Page Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-ink-black/40 backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-parchment-light shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] border-l-2 border-ink-light/20"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#4A3F35_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.03]" />
              
              <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-dark/10 rounded-sm flex items-center justify-center border-2 border-gold-dark/30">
                      <FiBook className="w-6 h-6 text-gold-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-display font-bold text-ink-black">Contents</div>
                      <div className="text-xs text-ink-muted">Navigation</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-11 h-11 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[44px] min-w-[44px]"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items - Table of Contents Style */}
                <nav className="flex-1 space-y-2 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-sm border-2 ${
                        activeSection === item.href.substring(1)
                          ? 'bg-gold-dark/10 border-gold-dark text-gold-dark'
                          : 'border-transparent hover:bg-gold-dark/5 text-ink-sepia'
                      } transition-all duration-300 min-h-[52px]`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-base sm:text-lg font-heading font-medium w-6">{item.chapter}</span>
                        <span className="text-base sm:text-lg font-display font-semibold">{item.name}</span>
                      </div>
                      <span className="text-xs opacity-60">→</span>
                    </motion.a>
                  ))}
                </nav>

                {/* Social Links */}
                <div className="pt-6 sm:pt-8 border-t-2 border-ink-light/20 mt-6 sm:mt-8">
                  <p className="text-xs text-ink-muted uppercase tracking-wider mb-4 text-center">Connect</p>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[48px] min-w-[48px]"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[48px] min-w-[48px]"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:contact@fidhafathima.dev"
                      className="w-12 h-12 border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark transition-all duration-300 min-h-[48px] min-w-[48px]"
                      aria-label="Email"
                    >
                      <FiMail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
