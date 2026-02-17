'use client';

import { motion } from 'framer-motion';

interface QuranicVerseProps {
    verse: string;
    translation: string;
    reference: string;
    showArabic?: boolean;
    className?: string;
}

export default function QuranicVerse({
    verse,
    translation,
    reference,
    showArabic = true,
    className = ''
}: QuranicVerseProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`relative bg-bg-secondary/40 backdrop-blur-sm p-8 md:p-12 border border-emerald-primary/10 rounded-sm deckle-edge deckle-top deckle-bottom ${className}`}
        >
            {/* Corner Ornaments */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className={`absolute w-8 h-8 border-gold-accent/30 ${i < 2 ? 'top-4' : 'bottom-4'} ${i % 2 === 0 ? 'left-4 border-l border-t' : 'right-4 border-r border-t'}`}
                />
            ))}

            {/* Decorative top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 flex items-center justify-center">
                <svg viewBox="0 0 80 16" className="w-full h-full text-gold-accent/40">
                    <path d="M0 8 Q20 4, 40 8 T80 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="40" cy="8" r="2" fill="currentColor" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 text-center max-w-3xl mx-auto">
                {/* Arabic Verse */}
                {showArabic && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-4xl font-bold text-emerald-primary leading-relaxed"
                        style={{
                            fontFamily: 'Times New Roman, serif',
                            direction: 'rtl',
                            lineHeight: '2'
                        }}
                    >
                        {verse}
                    </motion.p>
                )}

                {/* Decorative Divider */}
                <div className="flex items-center gap-4 w-full">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gold-accent/40 to-gold-accent/60" />
                    <div className="w-3 h-3 rotate-45 border border-gold-accent bg-gold-accent/20" />
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-gold-accent/40 to-gold-accent/60" />
                </div>

                {/* Translation */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-2xl font-heading italic text-text-secondary leading-relaxed px-4"
                >
                    {translation}
                </motion.p>

                {/* Reference */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="pt-4 border-t border-emerald-primary/5"
                >
                    <span className="text-sm md:text-base text-gold-accent font-bold tracking-[0.2em] uppercase">
                        — {reference}
                    </span>
                </motion.div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 flex items-center justify-center">
                <svg viewBox="0 0 80 16" className="w-full h-full text-gold-accent/40">
                    <path d="M0 8 Q20 12, 40 8 T80 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="40" cy="8" r="2" fill="currentColor" />
                </svg>
            </div>
        </motion.div>
    );
}
