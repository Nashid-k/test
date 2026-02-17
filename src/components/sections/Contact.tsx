'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import MagneticButton from '../MagneticButton';

const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com' },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="contact" className="folio-section folio-layer z-30 deckle-edge deckle-top">
            <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />

            <motion.div
                style={{ opacity }}
                className="section-container relative z-10"
            >
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter V — The Connection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-4 md:mb-6 italic text-emerald-primary">
                        Seal & <span className="gradient-text">Send</span>
                    </h2>
                    <div className="h-[0.5px] w-20 md:w-28 bg-emerald-primary/10 mx-auto" />
                </div>

                <div className="max-w-4xl mx-auto text-center px-4">
                    <p className="text-lg md:text-3xl font-heading italic text-text-secondary leading-relaxed mb-16 md:mb-20">
                        "Sharing ideas, weaving projects, or simply exchanging reflections — I await your <span className="text-emerald-primary">correspondence</span>."
                    </p>

                    <div className="flex flex-col items-center gap-20 md:gap-24">
                        {/* The Seal (Primary CTA) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-3xl group-hover:bg-gold-accent/10 transition-all duration-700" />

                            <MagneticButton
                                href="mailto:fidhumusthafa3549@gmail.com"
                                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border border-dashed border-gold-accent/30 flex items-center justify-center p-4 bg-bg-secondary/20 backdrop-blur-md group-hover:border-gold-accent group-hover:rotate-6 transition-all duration-1000 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-0 bg-emerald-primary group-hover:h-full transition-all duration-700 ease-in-out" />

                                <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3 text-emerald-primary group-hover:text-bg-primary transition-colors duration-500">
                                    <FiSend className="text-2xl md:text-3xl" />
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] font-heading">
                                        Dispatch Letter
                                    </span>
                                </div>

                                {/* Inner Girih Star */}
                                <div className="absolute inset-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-primary">
                                        <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </MagneticButton>
                        </motion.div>

                        {/* Social Folio */}
                        <div className="flex flex-col items-center gap-8 pb-12">
                            <div className="flex items-center gap-4">
                                <div className="h-[0.5px] w-8 md:w-16 bg-emerald-primary/10" />
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">Digital Sigils</span>
                                <div className="h-[0.5px] w-8 md:w-16 bg-emerald-primary/10" />
                            </div>

                            <div className="flex gap-8 md:gap-12">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        aria-label={`Visit my ${social.label}`}
                                        whileHover={{ y: -5, color: 'var(--color-gold-accent)' }}
                                        className="text-2xl md:text-3xl text-emerald-primary/40 transition-all duration-500"
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
