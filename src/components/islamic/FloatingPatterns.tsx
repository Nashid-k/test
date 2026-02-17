'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingPatternsProps {
    count?: number;
    className?: string;
}

export default function FloatingPatterns({
    count = 8,
    className = ''
}: FloatingPatternsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const patterns = [
        { type: 'star', size: 40, color: '#064E3B' },
        { type: 'diamond', size: 30, color: '#B45309' },
        { type: 'circle', size: 25, color: '#064E3B' },
        { type: 'hexagon', size: 35, color: '#B45309' },
        { type: 'cross', size: 28, color: '#064E3B' },
    ];

    const renderPattern = (pattern: any, index: number) => {
        const delay = index * 0.2;
        const duration = 3 + Math.random() * 2;

        switch (pattern.type) {
            case 'star':
                return (
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: pattern.color }}>
                        <polygon
                            points="50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.15"
                        />
                    </svg>
                );
            case 'diamond':
                return (
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: pattern.color }}>
                        <rect
                            x="50"
                            y="10"
                            width="40"
                            height="40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.15"
                            transform="rotate(45 50 30)"
                        />
                    </svg>
                );
            case 'circle':
                return (
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: pattern.color }}>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
                    </svg>
                );
            case 'hexagon':
                return (
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: pattern.color }}>
                        <polygon
                            points="50,5 90,27 90,73 50,95 10,73 10,27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.15"
                        />
                    </svg>
                );
            case 'cross':
                return (
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: pattern.color }}>
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                        <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.08" />
                        <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.08" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {[...Array(count)].map((_, i) => {
                const pattern = patterns[i % patterns.length];
                const x = 10 + (i * 12) % 80;
                const y = 10 + (i * 15) % 80;
                const floatDuration = 4 + (i % 3) * 2;

                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${pattern.size}px`,
                            height: `${pattern.size}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: floatDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    >
                        {renderPattern(pattern, i)}
                    </motion.div>
                );
            })}

            {/* Subtle rotating central pattern */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
                style={{ rotate: rotation }}
            >
                <svg viewBox="0 0 200 200" className="w-full h-full text-emerald-primary/5">
                    <polygon
                        points="100,0 115,60 180,100 115,140 100,200 85,140 20,100 85,60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
