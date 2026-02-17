'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    FiLayout, FiServer, FiDatabase, FiTool, FiGlobe, FiCode, FiLayers
} from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiPostman, SiRedux } from 'react-icons/si';

const categories = [
    {
        id: 'frontend',
        title: 'Frontend Artistry',
        icon: FiLayout,
        color: '#064E3B',
        skills: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'Tailwind', icon: SiTailwindcss },
            { name: 'Redux', icon: SiRedux },
        ]
    },
    {
        id: 'backend',
        title: 'Backend Architecture',
        icon: FiServer,
        color: '#B45309',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'REST APIs', icon: FiGlobe },
        ]
    },
    {
        id: 'database',
        title: 'Data Foundations',
        icon: FiDatabase,
        color: '#022C22',
        skills: [
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Mongoose', icon: FiLayers },
        ]
    },
    {
        id: 'tools',
        title: 'Master\'s Toolkit',
        icon: FiTool,
        color: '#D97706',
        skills: [
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Git/GitHub', icon: FiCode },
            { name: 'Postman', icon: SiPostman },
        ]
    }
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="skills" className="folio-section folio-layer z-10 bg-bg-secondary/20">
            <div className="section-container relative">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter II — The Geometry
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-4 italic text-emerald-primary">
                        The Architect's <span className="gradient-text">Toolkit</span>
                    </h2>
                    <div className="h-[0.5px] w-16 md:w-24 bg-emerald-primary/10 mx-auto" />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

                    {/* The Girih Master Controller (Radial) */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                        {/* Background Star SVG */}
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-emerald-primary/5 -rotate-90">
                            <path
                                d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                            />
                        </svg>

                        {/* Orbit Circles */}
                        <div className="absolute inset-0 border border-emerald-primary/10 rounded-full scale-100" />
                        <div className="absolute inset-0 border border-emerald-primary/5 rounded-full scale-[1.3] border-dashed animate-[spin_20s_linear_infinite]" />

                        {/* Central Icon */}
                        <motion.div
                            key={activeCategory.id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 md:w-32 md:h-32 bg-bg-primary rounded-full shadow-2xl flex items-center justify-center p-6 border border-gold-accent/20 z-10"
                        >
                            <activeCategory.icon className="w-full h-full text-gold-accent" />
                        </motion.div>

                        {/* Category Nodes */}
                        {categories.map((cat, i) => {
                            const angle = (i * 360) / categories.length;
                            const radius = 130; // Control the orbit distance
                            const x = `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`;
                            const y = `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`;
                            const isActive = activeCategory.id === cat.id;

                            return (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 z-20 overflow-hidden
                                        ${isActive ? 'bg-emerald-primary text-bg-primary border-gold-accent shadow-lg scale-110' : 'bg-bg-primary text-emerald-primary border-emerald-primary/10 hover:border-gold-accent'}
                                    `}
                                    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <cat.icon className="text-lg md:text-2xl" />
                                    {isActive && (
                                        <motion.div
                                            layoutId="aura"
                                            className="absolute inset-0 bg-gold-accent/20 animate-pulse"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Illuminated Skills Box */}
                    <div className="w-full max-w-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="bg-bg-secondary/40 backdrop-blur-sm p-8 md:p-12 border border-emerald-primary/10 rounded-sm deckle-edge deckle-top deckle-bottom shadow-2xl relative"
                            >
                                <h3 className="text-xl md:text-2xl font-heading italic text-emerald-primary mb-2">
                                    {activeCategory.title}
                                </h3>
                                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gold-accent font-bold mb-6 md:mb-8">
                                    Discipline of the Folio
                                </p>

                                <div className="grid grid-cols-2 gap-4 md:gap-6">
                                    {activeCategory.skills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group flex flex-col gap-2 md:gap-3 p-4 border border-emerald-primary/5 hover:border-gold-accent/20 transition-all duration-500 bg-bg-primary/30"
                                        >
                                            <div className="flex items-center justify-between">
                                                <skill.icon className="text-2xl md:text-3xl text-emerald-primary/60 group-hover:text-gold-accent transition-colors duration-500" />
                                                <div className="w-1 h-1 rounded-full bg-gold-accent/40" />
                                            </div>
                                            <span className="text-xs md:text-base font-heading italic text-text-secondary tracking-tight">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Marginalia Note */}
                                <div className="mt-10 md:mt-12 pt-8 border-t border-emerald-primary/5 opacity-40 italic font-heading text-[10px] md:text-xs text-text-secondary text-right">
                                    * Every skill is a brushstroke in the digital manuscript.
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
