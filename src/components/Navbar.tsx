'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
            {/* Top Bar (Floating Sigil) */}
            <div className="px-6 md:px-12 pt-6 md:pt-10 flex justify-between items-start">

                {/* Logo Sigil */}
                <motion.button
                    onClick={() => scrollTo('#home')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="pointer-events-auto bg-bg-primary/60 backdrop-blur-md border border-emerald-primary/10 p-2 md:p-3 rounded-sm shadow-2xl group hover:border-gold-accent transition-all duration-700"
                >
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-lg md:text-xl font-heading italic text-emerald-primary group-hover:text-gold-accent transition-colors">Fidha</span>
                        <div className="h-[0.5px] w-full bg-emerald-primary/10 mt-1" />
                        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-gold-accent font-bold mt-1">Manifesto</span>
                    </div>
                </motion.button>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 bg-bg-primary/60 backdrop-blur-md border border-emerald-primary/10 px-8 py-4 rounded-sm shadow-2xl">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm uppercase tracking-[0.2em] font-bold text-emerald-primary hover:text-gold-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-accent group-hover:w-full transition-all duration-300" />
                        </button>
                    ))}
                </nav>

                {/* Menu Sigil (Mobile Only) */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="md:hidden pointer-events-auto bg-bg-primary/60 backdrop-blur-md border border-emerald-primary/10 w-12 h-12 flex items-center justify-center rounded-sm shadow-2xl hover:border-gold-accent transition-all duration-700 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gold-accent/5 group-hover:bg-gold-accent/10 transition-colors" />
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <HiX size={24} className="text-emerald-primary" />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                <HiMenuAlt4 size={24} className="text-emerald-primary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Fullscreen Folio Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 pointer-events-auto z-[90] bg-bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
                    >
                        {/* Background Scroll Decoration */}
                        <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />

                        <div className="relative max-w-5xl w-full grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">

                            {/* Menu Links */}
                            <div className="flex flex-col items-center lg:items-start gap-6 md:gap-10">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link.name}
                                        onClick={() => scrollTo(link.href)}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-4xl md:text-7xl font-heading italic text-emerald-primary hover:text-gold-accent transition-colors relative group"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <motion.div className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 w-4 md:w-6 h-4 md:h-6 rotate-45 border border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.button>
                                ))}
                            </div>

                            {/* Sidebar Reflection */}
                            <div className="hidden lg:flex flex-col items-center justify-center text-center p-12 md:p-16 border border-emerald-primary/10 deckle-edge deckle-top deckle-bottom bg-bg-secondary/30 relative overflow-hidden">
                                <div className="absolute inset-0 girih-dot-bg opacity-5" />
                                <span className="text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-10 md:mb-12 block relative z-10 p-4">Navigate the Folio</span>
                                <div className="relative w-24 h-24 md:w-28 md:h-28 border border-dashed border-emerald-primary/10 rounded-full flex items-center justify-center mb-10 md:mb-12 z-10">
                                    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-14 md:h-14 text-emerald-primary opacity-20 animate-[spin_25s_linear_infinite]">
                                        <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <p className="text-xl md:text-2xl font-heading italic text-text-secondary leading-relaxed relative z-10 max-w-xs mx-auto">
                                    "A digital manuscript woven from bits and intent."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
