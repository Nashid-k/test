'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const rotate = useTransform(scrollYProgress, [0, 0.5], [-1, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const infoItems = [
        { label: 'Scribe', value: 'Fidha Fathima M' },
        { label: 'Origin', value: 'Kerala, India' },
        { label: 'Craft', value: 'Full-Stack Developer' },
        { label: 'Spirit', value: 'BCA Scholar' },
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="folio-section folio-layer z-20"
        >
            <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />

            <motion.div
                style={{ rotate, opacity }}
                className="section-container relative z-10"
            >
                {/* Header Folio */}
                <div className="mb-10 md:mb-14 text-center">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter I — The Reflection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-4 md:mb-6 italic text-emerald-primary">
                        Tracing the <span className="gradient-text">Journey</span>
                    </h2>
                    <div className="h-[0.5px] w-20 md:w-24 bg-emerald-primary/10 mx-auto" />
                </div>

                {/* Open Book Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-emerald-primary/10 bg-bg-secondary/30 backdrop-blur-sm relative overflow-hidden deckle-edge deckle-top deckle-bottom shadow-2xl rounded-sm">

                    {/* Spine Shadow */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-emerald-primary/10 to-transparent hidden lg:block z-20" />

                    {/* Page Left: The Narrative */}
                    <div className="p-8 md:p-14 lg:p-24 border-b lg:border-b-0 lg:border-r border-emerald-primary/5 relative">
                        {/* Marginalia Accent */}
                        <div className="absolute top-10 left-4 md:left-8 hidden lg:block">
                            <span className="text-[10px] rotate-90 block origin-left text-gold-accent font-heading opacity-40">Ad Fontes</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-heading mb-6 italic text-gold-accent flex items-center gap-4">
                            The Scribe's Intent
                            <div className="h-[1px] flex-grow bg-gold-accent/10" />
                        </h3>
                        <p className="text-sm md:text-md font-body italic text-text-secondary leading-[1.8] text-justify mb-8 md:mb-10">
                            A Full-Stack Developer with strong hands-on experience building scalable and responsive web applications.
                            Skilled in <span className="text-emerald-primary font-medium">React, Node.js, Express, and MongoDB</span>, with a solid understanding of end-to-end application architecture.
                            Passionate about writing clean, maintainable code and developing practical solutions through self-initiated projects
                            that reflect real-world challenges.
                        </p>

                        <div className="space-y-5 pt-8 border-t border-emerald-primary/5">
                            {infoItems.map((item, i) => (
                                <div key={i} className="flex justify-between items-baseline gap-4 group">
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#043327] font-bold group-hover:text-gold-accent transition-colors">
                                        {item.label}
                                    </span>
                                    <div className="h-[1px] flex-grow border-b border-dotted border-emerald-primary/10" />
                                    <span className="text-base md:text-lg font-heading italic text-emerald-primary">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Page Right: The Philosophy */}
                    <div className="p-8 md:p-14 lg:p-24 bg-bg-primary/20 relative">
                        <h3 className="text-xl md:text-2xl font-heading mb-8 italic text-gold-accent flex items-center gap-4">
                            Foundational Pillars
                            <div className="h-[1px] flex-grow bg-gold-accent/10" />
                        </h3>

                        <div className="space-y-10 md:space-y-12">
                            {[
                                { title: 'Scalability', desc: 'Building systems that grow organically, like geometric patterns expanding into infinity.' },
                                { title: 'Authenticity', desc: 'Every line of code is written with purpose, reflecting a genuine commitment to quality.' },
                                { title: 'Resilience', desc: 'Learning through failure to build robust applications that stand the test of time.' }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10 md:pl-12"
                                >
                                    <div className="absolute left-0 top-1 w-7 h-7 md:w-8 md:h-8 rotate-45 border border-emerald-primary/10 flex items-center justify-center text-[9px] md:text-[10px] font-heading font-bold text-gold-accent">
                                        0{i + 1}
                                    </div>
                                    <h4 className="text-lg md:text-xl font-heading mb-2 text-emerald-primary">{pillar.title}</h4>
                                    <p className="text-xs md:text-sm italic text-text-secondary leading-relaxed uppercase tracking-widest opacity-70">
                                        {pillar.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Ink Stamp Effect */}
                        <div className="mt-14 md:mt-16 flex justify-end opacity-10 rotate-12 pointer-events-none">
                            <div className="w-20 h-20 md:w-24 md:h-24 border-2 md:border-4 border-emerald-primary rounded-full flex items-center justify-center p-1 md:p-2">
                                <div className="w-full h-full border md:border-2 border-emerald-primary rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold text-center leading-tight">
                                    FIDHA M<br />CERTIFIED<br />CRAFT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
