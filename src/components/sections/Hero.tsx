'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ManuscriptReveal from '../ManuscriptReveal';
import { FiArrowDown } from 'react-icons/fi';

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
                {/* Background Girih Geometry (Integrating into the page) */}
                <div className="absolute inset-0 girih-dot-bg pointer-events-none" />

                {/* Opening Scroll Animation (Two halves moving apart) */}
                <div className="absolute inset-0 flex pointer-events-none z-50 overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-105%" }}
                        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                        className="w-1/2 h-full bg-bg-secondary border-r border-gold-accent/20 flex items-center justify-end pr-12"
                    >
                        <div className="w-[1px] h-32 bg-gold-accent/20" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "105%" }}
                        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                        className="w-1/2 h-full bg-bg-secondary border-l border-gold-accent/20 flex items-center justify-start pl-12"
                    >
                        <div className="w-[1px] h-32 bg-gold-accent/20" />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6 md:space-y-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-[9px] md:text-xs uppercase tracking-[0.5em] text-gold-accent font-bold mb-4">
                            The Illuminated Portfolio
                        </span>
                        <div className="flex items-center gap-4 mb-4 md:mb-8">
                            <div className="h-[0.5px] w-12 md:w-24 bg-emerald-primary/20" />
                            <div className="w-2 h-2 rotate-45 border border-gold-accent/30" />
                            <div className="h-[0.5px] w-12 md:w-24 bg-emerald-primary/20" />
                        </div>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col leading-[0.85] select-none tracking-tighter">
                        <ManuscriptReveal
                            text="Fidha"
                            className="gradient-text italic font-normal"
                            delay={2.2}
                        />
                        <ManuscriptReveal
                            text="Fathima"
                            className="text-emerald-primary -mt-[0.05em]"
                            delay={2.5}
                        />
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2, duration: 1 }}
                        className="folio-text pt-2 md:pt-4"
                    >
                        <p className="text-sm md:text-lg italic text-text-secondary leading-relaxed">
                            Weaving code into <span className="text-emerald-primary font-medium">digital tapestry</span>, <br className="hidden md:block" />
                            bound by <span className="text-gold-accent font-medium">intentionality</span> and sacred geometry.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Invitation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                    className="absolute bottom-10 md:bottom-16 flex flex-col items-center gap-4"
                >
                    <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-gold-accent/60 font-bold">Unroll Further</span>
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
