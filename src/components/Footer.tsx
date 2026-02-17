'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { IslamicSeal } from './islamic';

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
                    <IslamicSeal
                        text="Fidha"
                        subtitle="The Scribe"
                        variant="star"
                        size="lg"
                    />
                </motion.div>

                {/* Epilogue Text */}
                <div className="text-center space-y-6 max-w-3xl px-4">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-gold-accent font-bold opacity-60">
                        The Manuscript Concludes — Alhamdulillah
                    </p>
                    <div className="h-[0.5px] w-32 md:w-48 bg-emerald-primary/10 mx-auto" />
                    <p className="text-base md:text-xl font-heading italic text-text-secondary max-w-2xl mx-auto leading-relaxed opacity-70">
                        "Every digital experience is a narrative, and every narrative deserves a beautiful conclusion — crafted with <span className="text-emerald-primary">ikhlas</span> (sincerity) for the pleasure of Allah."
                    </p>
                </div>

                {/* Closing Dua */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-bg-primary/50 backdrop-blur-sm p-6 md:p-8 border border-emerald-primary/10 deckle-edge deckle-top deckle-bottom rounded-sm max-w-2xl mx-auto"
                >
                    <p className="text-base md:text-lg font-heading italic text-emerald-primary leading-relaxed text-center">
                        "Our Lord, grant us good in this world and good in the Hereafter, and save us from the punishment of the Fire."
                    </p>
                    <p className="text-sm text-gold-accent/70 mt-3 tracking-widest uppercase text-center">
                        — Surah Al-Baqarah 2:201
                    </p>
                </motion.div>

                {/* Legal Ritual */}
                <div className="flex flex-col items-center gap-4 pt-12 border-t border-emerald-primary/5 w-full max-w-2xl px-4">
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-text-secondary italic opacity-70 text-center">
                        <span className="whitespace-nowrap">Crafted with</span>
                        <FiHeart size={10} className="text-gold-accent animate-pulse" aria-hidden="true" />
                        <span className="whitespace-nowrap">& iman (faith)</span>
                        <span className="whitespace-nowrap">in Kerala</span>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gold-accent/40" />
                        <span className="whitespace-nowrap">© {currentYear} Fidha Fathima M</span>
                    </div>
                    <p className="text-[9px] text-gold-accent/50 tracking-wide uppercase text-center">
                        All praise is due to Allah SWT
                    </p>
                </div>
            </div>
        </footer>
    );
}
