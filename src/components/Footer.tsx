'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="folio-section folio-layer z-40 bg-bg-secondary/40 border-t border-emerald-primary/10 deckle-edge deckle-top">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-accent/20 to-transparent" />

            <div className="section-container relative z-10 py-12 md:py-20 flex flex-col items-center gap-12">
                {/* The Final Seal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 border border-emerald-primary/10 rounded-full flex items-center justify-center p-4">
                        <div className="w-full h-full border-2 border-dashed border-emerald-primary/20 rounded-full flex items-center justify-center text-center">
                            <div className="rotate-[-10deg]">
                                <span className="text-xl md:text-2xl font-heading italic text-emerald-primary">Fidha</span>
                                <br />
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gold-accent font-bold">The Scribe</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Epilogue Text */}
                <div className="text-center space-y-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-gold-accent font-bold opacity-60">
                        Explicit Content Termination — Vol. 2.0
                    </p>
                    <div className="h-[0.5px] w-32 md:w-48 bg-emerald-primary/10 mx-auto" />
                    <p className="text-base md:text-xl font-heading italic text-text-secondary max-w-lg mx-auto leading-relaxed px-4 opacity-70">
                        "Every digital experience is a narrative, and every narrative deserves a beautiful conclusion."
                    </p>
                </div>

                {/* Legal Ritual */}
                <div className="flex flex-col items-center gap-4 pt-12 border-t border-emerald-primary/5 w-full max-w-2xl px-4">
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-text-secondary italic opacity-70 text-center">
                        <span className="whitespace-nowrap">Manifested with</span>
                        <FiHeart size={10} className="text-gold-accent animate-pulse" aria-hidden="true" />
                        <span className="whitespace-nowrap">in Kerala</span>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gold-accent/40" />
                        <span className="whitespace-nowrap">© {currentYear} F. Fathima</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
