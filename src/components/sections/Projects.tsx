'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'LocalFix',
        id: 'localfix',
        subtitle: 'The Merchant\'s Ledger — SaaS Platform',
        description:
            'A digital sanctuary for home services, built with clean architecture and scalable intent. Designed to bring ease and order to the bustling world of service commerce.',
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
        features: [
            'Secure recurring payments with Razorpay',
            'Solid principles and clean architecture (Dependency Injection)',
            'Efficient session management with Redis caching',
        ],
        github: '#',
        live: '#',
        accent: 'var(--color-emerald-primary)',
        note: 'Written in the late winter of 2024. Focused on dependency injection rituals.'
    },
    {
        title: 'Art Mart',
        id: 'artmart',
        subtitle: 'The Bazaar — E-commerce Scroll',
        description:
            'An ethereal marketplace where art meets architecture. Modular design and role-based rituals ensure a seamless journey for both seeker and provider.',
        tech: ['Node.js', 'Express', 'MongoDB', 'MVC Architecture', 'AWS'],
        features: [
            'Fluid cart and wishlist rituals with reduced latency',
            'Comprehensive admin oversight with filtered transaction logs',
            'Resilient deployment on AWS EC2 with process management',
        ],
        github: '#',
        live: '#',
        accent: 'var(--color-gold-accent)',
        note: 'A study in high-concurrency bazaars and AWS deployment sigils.'
    },
];

function ProjectFolio({ project, index, total }: { project: (typeof projects)[0]; index: number; total: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -1 : 1, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

    return (
        <div
            ref={cardRef}
            className="sticky top-20 md:top-24 w-full mb-[8vh] lg:mb-[15vh]"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                style={{ scale, rotate, opacity }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 78, 59, 0.15)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-bg-secondary border border-emerald-primary/10 shadow-2xl relative overflow-hidden deckle-edge deckle-top deckle-bottom rounded-sm flex flex-col lg:flex-row h-auto min-h-[500px]"
            >
                {/* Visual Accent Column */}
                <div
                    className="w-full lg:w-40 xl:w-56 bg-emerald-primary/5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-emerald-primary/10 relative overflow-hidden shrink-0"
                >
                    <div className="absolute inset-0 girih-dot-bg opacity-20" />
                    <span className="text-3xl md:text-5xl font-heading text-gold-accent opacity-20 -rotate-90 select-none whitespace-nowrap">
                        M.Manuscript
                    </span>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] text-emerald-primary opacity-30 uppercase whitespace-nowrap">
                        Document {index + 1}
                    </div>
                </div>

                {/* Content Folio */}
                <div className="flex-grow p-8 md:p-12 lg:p-20 relative">
                    {/* Links (Floating) */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-5 z-20">
                        <motion.a
                            href={project.github}
                            whileHover={{ y: -3, color: 'var(--color-gold-accent)' }}
                            className="text-xl md:text-2xl text-emerald-primary/40"
                        >
                            <FiGithub aria-label="GitHub Repository" />
                        </motion.a>
                        <motion.a
                            href={project.live}
                            whileHover={{ y: -3, color: 'var(--color-gold-accent)' }}
                            className="text-xl md:text-2xl text-emerald-primary/40"
                        >
                            <FiExternalLink aria-label="Live Demo" />
                        </motion.a>
                    </div>

                    <div className="max-w-3xl">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                            Portfolio Exhibit
                        </span>
                        <h3 className="text-2xl md:text-4xl font-heading mb-3 italic text-emerald-primary leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-xs md:text-base font-body font-medium italic text-gold-accent border-b border-emerald-primary/5 pb-4 mb-6 tracking-wide">
                            {project.subtitle}
                        </p>

                        <p className="text-sm md:text-base font-body italic text-text-secondary leading-[1.8] mb-8 md:mb-10 border-l-2 border-emerald-primary/5 pl-5 md:pl-6 text-justify">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-emerald-primary/60 border border-emerald-primary/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-bg-primary/50">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-emerald-primary/30">Technical Manifest</h4>
                            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-xs md:text-sm italic text-text-secondary leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-accent/30 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Marginalia Note */}
                    <div className="absolute bottom-10 right-10 max-w-[180px] hidden xl:block">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[0.5px] flex-grow bg-gold-accent/10" />
                            <span className="text-[9px] uppercase tracking-[0.2em] text-gold-accent font-bold opacity-40">Marginalia</span>
                        </div>
                        <p className="text-[11px] font-heading italic text-text-muted leading-relaxed text-right opacity-60">
                            {project.note}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="folio-section folio-layer z-20">
            <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />

            <div className="section-container">
                {/* Header Section */}
                <div className="mb-14 md:mb-20 text-center">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter III — The Archives
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-4 md:mb-6 italic text-emerald-primary">
                        Case Studies <span className="gradient-text">in Ink</span>
                    </h2>
                    <p className="folio-text text-sm md:text-lg italic text-text-secondary leading-relaxed opacity-60">
                        Recorded manifest of digital artifacts and architectural experiments.
                    </p>
                    <div className="h-[0.5px] w-20 md:w-28 bg-emerald-primary/10 mx-auto mt-8 md:mt-10" />
                </div>

                <div className="flex flex-col relative">
                    {projects.map((project, i) => (
                        <ProjectFolio
                            key={project.id}
                            project={project}
                            index={i}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
