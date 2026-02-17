'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import GeometricPattern from './GeometricPattern';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const nameLetters = 'FIDHA'.split('');

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary overflow-hidden"
                >
                    <GeometricPattern opacity={0.08} />

                    {/* Subtle Antique Vignette */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,78,59,0.03)_100%)]" />

                    <div className="relative flex flex-col items-center gap-12 z-10">
                        {/* Animated Name in Antique Styling */}
                        <div className="flex gap-2 overflow-hidden">
                            {nameLetters.map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 120, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2 + i * 0.12,
                                        duration: 1.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="text-7xl md:text-9xl font-heading italic text-emerald-primary"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            {/* Thematic Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, letterSpacing: '0.2em' }}
                                animate={{ opacity: 1, letterSpacing: '0.6em' }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="text-xs md:text-sm uppercase font-bold text-gold-accent"
                            >
                                Building Dreams • Rooted in Deen
                            </motion.p>

                            {/* Antique Progress Scroll */}
                            <div className="relative w-48 md:w-64 h-[1px] bg-emerald-primary/10 mt-4">
                                <motion.div
                                    className="h-full bg-gold-accent origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: counter / 100 }}
                                    transition={{ ease: "linear" }}
                                />
                                {/* Progress Percentage - Hand-drawn feel */}
                                <motion.span
                                    className="absolute -right-12 -top-3 text-[10px] font-heading italic text-emerald-primary/40"
                                >
                                    {Math.min(counter, 100)}%
                                </motion.span>
                            </div>
                        </div>
                    </div>

                    {/* Corner Symbols (Antique Motif) */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-16 h-16 border-emerald-primary/10 ${i === 0 ? 'top-10 left-10 border-t border-l' :
                                    i === 1 ? 'top-10 right-10 border-t border-r' :
                                        i === 2 ? 'bottom-10 left-10 border-b border-l' :
                                            'bottom-10 right-10 border-b border-r'
                                }`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
