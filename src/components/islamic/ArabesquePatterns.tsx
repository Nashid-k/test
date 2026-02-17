'use client';

import { motion } from 'framer-motion';

interface ArabesquePatternsProps {
    variant?: 'star8' | 'star10' | 'girih' | 'rosette' | 'hexagonal' | 'zellige' | 'arabesque' | 'interlaced';
    className?: string;
    opacity?: number;
    size?: number;
}

export default function ArabesquePatterns({
    variant = 'girih',
    className = '',
    opacity = 0.1,
    size = 100
}: ArabesquePatternsProps) {
    const patterns = {
        star8: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50 0 L54.4 20 L73.5 4.4 L65.5 23.6 L85.4 18.4 L72.8 34 L92.7 42.7 L73.5 50 L92.7 57.3 L72.8 65.4 L85.4 81.6 L65.5 76.4 L73.5 95.6 L54.4 80 L50 100 L45.6 80 L26.5 95.6 L34.5 76.4 L14.6 81.6 L27.2 65.4 L7.3 57.3 L26.5 50 L7.3 42.7 L27.2 34 L14.6 18.4 L34.5 23.6 L26.5 4.4 L45.6 20 Z" />
                <circle cx="50" cy="50" r="15" />
                <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
            </g>
        ),
        star10: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50 0 L53.8 18.6 L70.7 6.9 L61.8 24.1 L80.9 28.7 L64.1 40.9 L76.8 58.2 L56.8 54.9 L55.6 75 L43.2 58.2 L28.4 71.9 L31.8 51.8 L11.9 49.6 L29.6 39.3 L19.1 21.6 L37.5 31.3 L44.2 12.7 Z" />
                <circle cx="50" cy="50" r="20" />
                <circle cx="50" cy="50" r="35" strokeWidth="0.3" />
            </g>
        ),
        girih: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
                <path d="M0 0 L15 15 M65 65 L80 80 M80 0 L65 15 M15 65 L0 80" strokeWidth="0.3" />
            </g>
        ),
        rosette: (
            <g fill="none" stroke="currentColor" strokeWidth="0.4">
                <circle cx="50" cy="50" r="45" />
                {[...Array(12)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                        <path d="M50 5 Q55 25 50 45 Q45 25 50 5" fill="currentColor" fillOpacity="0.1" />
                        <path d="M50 5 L50 50" />
                        <circle cx="50" cy="15" r="2" fill="currentColor" />
                    </g>
                ))}
                <circle cx="50" cy="50" r="20" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.2" />
            </g>
        ),
        hexagonal: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                {[...Array(7)].map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    const x = 50 + Math.cos(angle) * 30;
                    const y = 50 + Math.sin(angle) * 30;
                    return (
                        <path key={i} d={`M50 50 L${x} ${y} L${50 + Math.cos((angle + Math.PI/3)) * 30} ${50 + Math.sin((angle + Math.PI/3)) * 30} Z`} />
                    );
                })}
                <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="10" />
            </g>
        ),
        zellige: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                {[...Array(6)].map((_, i) => {
                    const angle = i * 60;
                    const x = 50 + Math.cos(angle * Math.PI / 180) * 25;
                    const y = 50 + Math.sin(angle * Math.PI / 180) * 25;
                    return (
                        <polygon
                            key={i}
                            points={`${x},${y - 8} ${x + 7},${y - 4} ${x + 7},${y + 4} ${x},${y + 8} ${x - 7},${y + 4} ${x - 7},${y - 4}`}
                            transform={`rotate(${angle} 50 50)`}
                        />
                    );
                })}
                <circle cx="50" cy="50" r="35" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="15" strokeWidth="0.3" />
            </g>
        ),
        arabesque: (
            <g fill="none" stroke="currentColor" strokeWidth="0.4">
                <path d="M50 0 C70 20, 80 40, 50 50 C20 60, 30 80, 50 100" />
                <path d="M50 0 C30 20, 20 40, 50 50 C80 60, 70 80, 50 100" />
                {[...Array(8)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                        <path d="M50 20 Q60 35, 50 50 Q40 35, 50 20" />
                        <circle cx="50" cy="25" r="2" fill="currentColor" />
                    </g>
                ))}
                <circle cx="50" cy="50" r="12" strokeWidth="0.6" />
            </g>
        ),
        interlaced: (
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
                {[...Array(4)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                        <path d="M50 0 L50 50 L85 85" />
                        <path d="M50 0 L50 50 L15 85" />
                        <path d="M50 50 L50 100" />
                    </g>
                ))}
                <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" strokeWidth="0.3" />
                <circle cx="50" cy="50" r="20" />
                <path d="M50 30 L50 70 M30 50 L70 50" strokeWidth="0.3" />
            </g>
        )
    };

    return (
        <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
            <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ opacity }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id={`arabesque-${variant}`}
                        x="0"
                        y="0"
                        width={size}
                        height={size}
                        patternUnits="userSpaceOnUse"
                    >
                        {patterns[variant]}
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill={`url(#arabesque-${variant})`}
                />
            </svg>
        </div>
    );
}
