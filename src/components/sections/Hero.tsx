'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ManuscriptReveal from '../ManuscriptReveal';
import { FiArrowDown } from 'react-icons/fi';
import { ArabesquePatterns } from '../islamic';
import Bismillah from '../islamic/Bismillah';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative h-[120vh] bg-bg-primary overflow-hidden"
        >
            {/* The Floating Folio (Hero) */}
            <motion.div
                style={{ opacity, scale, y }}
                className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4"
            >
                {/* Enhanced Islamic Background Patterns */}
                <div className="absolute inset-0">
                    <ArabesquePatterns variant="girih" opacity={0.04} />
                    <div className="absolute inset-0 star-pattern opacity-[0.02]" />
                </div>

                {/* Opening Scroll Animation (Book opening effect) */}
                <div className="absolute inset-0 flex pointer-events-none z-50 overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-105%" }}
                        transition={{ duration: 2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                        className="w-1/2 h-full bg-bg-secondary border-r border-gold-accent/30 flex items-center justify-end pr-12"
                    >
                        <div className="w-[1px] h-32 bg-gold-accent/20" />
                        {/* Arabic calligraphy hint on left cover */}
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-10">
                            <svg viewBox="0 0 60 200" className="h-40 text-emerald-primary">
                                <path d="M30,10 Q20,50 30,100 Q40,150 30,190" fill="none" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "105%" }}
                        transition={{ duration: 2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                        className="w-1/2 h-full bg-bg-secondary border-l border-gold-accent/30 flex items-center justify-start pl-12"
                    >
                        <div className="w-[1px] h-32 bg-gold-accent/20" />
                        {/* Arabic calligraphy hint on right cover */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
                            <svg viewBox="0 0 60 200" className="h-40 text-emerald-primary">
                                <path d="M30,10 Q40,50 30,100 Q20,150 30,190" fill="none" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Bismillah Opening */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                    className="relative z-10 mb-8"
                >
                    <Bismillah variant="simple" showArabic={true} className="scale-75 md:scale-90" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-6 md:space-y-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-[9px] md:text-xs uppercase tracking-[0.5em] text-gold-accent font-bold mb-4">
                            The Illuminated Portfolio
                        </span>
                        <div className="flex items-center gap-4 mb-4 md:mb-8">
                            <div className="h-[0.5px] w-12 md:w-24 bg-emerald-primary/20" />
                            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold-accent/30 rotate-45">
                                <polygon points="10,0 20,10 10,20 0,10" fill="currentColor" opacity="0.3" />
                            </svg>
                            <div className="h-[0.5px] w-12 md:w-24 bg-emerald-primary/20" />
                        </div>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col leading-[0.85] select-none tracking-tighter">
                        <ManuscriptReveal
                            text="Fidha"
                            className="gradient-text italic font-normal"
                            delay={2.6}
                        />
                        <ManuscriptReveal
                            text="Fathima"
                            className="text-emerald-primary -mt-[0.05em]"
                            delay={2.9}
                        />
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.6, duration: 1 }}
                        className="folio-text pt-2 md:pt-4"
                    >
                        <p className="text-sm md:text-lg italic text-text-secondary leading-relaxed">
                            A Muslimah crafting <span className="text-emerald-primary font-medium">digital tapestry</span>, <br className="hidden md:block" />
                            weaving <span className="text-gold-accent font-medium">code</span> with <span className="text-emerald-primary font-medium">ikhlas</span> (sincerity),
                        </p>
                        <p className="text-sm md:text-lg italic text-text-secondary leading-relaxed mt-2">
                            guided by <span className="text-gold-accent font-medium">iman</span> (faith) & sacred geometry.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Invitation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.4, duration: 1 }}
                    className="absolute bottom-10 md:bottom-16 flex flex-col items-center gap-4"
                >
                    <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-gold-accent/60 font-bold">Unroll the Manuscript</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FiArrowDown className="text-base md:text-xl text-gold-accent/60" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Deckle Guard */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-primary to-transparent z-20" />
        </section>
    );
}
