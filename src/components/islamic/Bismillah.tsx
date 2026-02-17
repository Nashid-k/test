'use client';

import { motion } from 'framer-motion';

interface BismillahProps {
    variant?: 'ornate' | 'simple' | 'caligraphic';
    showArabic?: boolean;
    className?: string;
}

export default function Bismillah({
    variant = 'ornate',
    showArabic = true,
    className = ''
}: BismillahProps) {
    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            {showArabic && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            viewBox="0 0 200 60"
                            className="w-full h-full text-gold-accent/20"
                        >
                            {/* Outer Frame */}
                            <rect
                                x="5"
                                y="5"
                                width="190"
                                height="50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                rx="25"
                            />
                            {/* Inner Frame */}
                            <rect
                                x="10"
                                y="10"
                                width="180"
                                height="40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.3"
                                rx="20"
                            />
                            {/* Corner Ornaments */}
                            {[...Array(4)].map((_, i) => (
                                <circle
                                    key={i}
                                    cx={i < 2 ? 15 : 185}
                                    cy={i % 2 === 0 ? 15 : 45}
                                    r="3"
                                    fill="currentColor"
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Arabic Text - Bismillah */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative z-10 text-3xl md:text-4xl font-bold text-emerald-primary"
                        style={{
                            fontFamily: 'Times New Roman, serif',
                            direction: 'rtl'
                        }}
                    >
                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </motion.span>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex items-center gap-4 w-full max-w-md"
            >
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gold-accent/40 to-gold-accent/60" />
                <div className="w-2 h-2 rotate-45 border border-gold-accent bg-gold-accent/20" />
                <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-gold-accent/40 to-gold-accent/60" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-sm md:text-base text-gold-accent font-bold tracking-[0.2em] uppercase"
            >
                In the Name of Allah, the Most Gracious, the Most Merciful
            </motion.p>
        </div>
    );
}
