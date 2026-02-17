'use client';

import { motion } from 'framer-motion';

interface IslamicSealProps {
    text: string;
    subtitle?: string;
    variant?: 'round' | 'octagon' | 'star';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function IslamicSeal({
    text,
    subtitle,
    variant = 'round',
    size = 'md',
    className = ''
}: IslamicSealProps) {
    const sizes = {
        sm: { container: 'w-16 h-16 md:w-20 md:h-20', text: 'text-[8px]', subtitle: 'text-[6px]' },
        md: { container: 'w-24 h-24 md:w-32 md:h-32', text: 'text-[10px]', subtitle: 'text-[7px]' },
        lg: { container: 'w-32 h-32 md:w-40 md:h-40', text: 'text-xs', subtitle: 'text-[8px]' }
    };

    const currentSize = sizes[size];

    const seals = {
        round: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-primary">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {/* Middle ring */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                {/* Inner ring */}
                <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                {/* Center decoration */}
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                {/* Central star */}
                <polygon
                    points="50,30 54,42 67,42 57,50 61,62 50,54 39,62 43,50 33,42 46,42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                />
            </svg>
        ),
        octagon: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-primary">
                {/* Outer octagon */}
                <polygon
                    points="50,2 75,12 95,38 95,62 75,88 50,98 25,88 5,62 5,38 25,12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Inner octagon */}
                <polygon
                    points="50,15 68,22 83,41 83,59 68,78 50,85 32,78 17,59 17,41 32,22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.6"
                />
                {/* Center circle */}
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
                {/* Cross pattern */}
                <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                <line x1="35" y1="35" x2="65" y2="65" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
                <line x1="65" y1="35" x2="35" y2="65" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
            </svg>
        ),
        star: (
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-primary">
                {/* 8-point star */}
                <polygon
                    points="50,0 58,38 100,50 58,62 50,100 42,62 0,50 42,38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Inner star */}
                <polygon
                    points="50,15 55,40 80,50 55,60 50,85 45,60 20,50 45,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.7"
                />
                {/* Center circle */}
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.6" />
                {/* Point decorations */}
                {[...Array(8)].map((_, i) => {
                    const angle = i * 45 * Math.PI / 180;
                    const x = 50 + Math.cos(angle) * 30;
                    const y = 50 + Math.sin(angle) * 30;
                    return <circle key={i} cx={x} cy={y} r="2" fill="currentColor" opacity="0.5" />;
                })}
            </svg>
        )
    };

    return (
        <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative ${currentSize.container} flex items-center justify-center ${className}`}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-xl" />

            {/* Seal SVG */}
            <div className="absolute inset-0 p-2">
                {seals[variant]}
            </div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center gap-1 text-center px-3">
                <p className={`font-heading font-bold text-emerald-primary leading-tight ${currentSize.text}`}>
                    {text}
                </p>
                {subtitle && (
                    <p className={`uppercase tracking-widest text-gold-accent ${currentSize.subtitle}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
