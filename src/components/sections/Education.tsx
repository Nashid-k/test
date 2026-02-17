'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { IslamicBorder } from '../islamic';

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            id="education"
            className="folio-section folio-layer z-10 bg-bg-secondary/10"
        >
            <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />

            <motion.div
                style={{ opacity }}
                className="section-container relative z-10"
            >
                {/* Section Header */}
                <div className="mb-14 md:mb-20 text-center">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter IV — The Path of Knowledge
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-6 italic text-emerald-primary">
                        Hall of <span className="gradient-text">Learning</span>
                    </h2>
                    <p className="text-sm md:text-base text-text-secondary italic max-w-2xl mx-auto leading-relaxed px-4 mt-4">
                        "Seeking knowledge is an obligation upon every Muslim" — following this noble pursuit through academic excellence.
                    </p>
                    <div className="h-[0.5px] w-20 md:w-28 bg-emerald-primary/10 mx-auto mt-6" />
                </div>

                {/* Timeline Path */}
                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* The Seam (Animated Path) */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-emerald-primary/5">
                        <motion.div
                            style={{ scaleY: pathLength }}
                            className="w-full h-full bg-gold-accent/40 origin-top"
                        />
                    </div>

                    {/* Education Event */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative mb-20 md:w-[48%] md:ml-0 md:mr-auto"
                    >
                        {/* Connector Star */}
                        <div className="absolute -left-[45px] md:left-auto md:-right-[66px] top-12 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-gold-accent/60 animate-[spin_20s_linear_infinite]">
                                <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" fill="currentColor" />
                            </svg>
                            <div className="absolute inset-0 bg-gold-accent/20 rounded-full blur-xl animate-pulse" />
                        </div>

                        <div className="bg-bg-primary/50 backdrop-blur-md p-8 md:p-12 border border-emerald-primary/10 rounded-sm deckle-edge deckle-top deckle-bottom shadow-2xl relative group overflow-hidden">
                            {/* Corner Accent */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 border border-gold-accent/10 rotate-45 group-hover:bg-gold-accent/5 transition-all duration-700" />

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-gold-accent/60 uppercase">Legacy Document</span>
                                <div className="h-[0.5px] flex-grow bg-gold-accent/10" />
                            </div>

                            <h3 className="text-xl md:text-3xl font-heading mb-3 italic text-emerald-primary leading-tight">
                                Bachelor of Computer Application
                            </h3>

                            <div className="space-y-2 mb-8">
                                <div className="flex items-center gap-3 text-text-secondary italic text-xs md:text-sm">
                                    <FiMapPin className="text-gold-accent/60 shrink-0" />
                                    <span>Kannur University, Kerala</span>
                                </div>
                                <div className="flex items-center gap-3 text-gold-accent italic text-xs md:text-sm font-medium opacity-80">
                                    <FiCalendar className="shrink-0" />
                                    <span>Anno Domini 2021 — 2024</span>
                                </div>
                            </div>

                            <p className="text-sm md:text-base text-text-secondary italic leading-relaxed mb-8 opacity-80 text-justify">
                                Immersed in the fundamental principles of computation, architecture, and the weaving of digital interfaces.
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {['MERN', 'DSA', 'Architecture', 'Design'].map(skill => (
                                    <span key={skill} className="px-3 md:px-4 py-1.5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-emerald-primary/60 border border-emerald-primary/10 rounded-full bg-emerald-primary/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Border */}
                <div className="mt-16">
                    <IslamicBorder variant="simple" className="w-full max-w-3xl mx-auto" />
                </div>
            </motion.div>
        </section>
    );
}
