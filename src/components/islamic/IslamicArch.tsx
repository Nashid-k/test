'use client';

import { motion } from 'framer-motion';

interface IslamicArchProps {
    variant?: 'ogee' | 'pointed' | 'horseshoe' | 'multifoil';
    className?: string;
    children?: React.ReactNode;
}

export default function IslamicArch({
    variant = 'ogee',
    className = '',
    children
}: IslamicArchProps) {
    const arches = {
        ogee: (
            <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M20 120 V50 C20 20, 40 10, 60 10 C80 10, 100 20, 100 50 C100 20, 120 10, 140 10 C160 10, 180 20, 180 50 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Inner detail */}
                <path
                    d="M30 120 V55 C30 30, 45 20, 60 20 C75 20, 90 30, 90 55 C90 30, 105 20, 120 20 C135 20, 150 30, 150 55 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.6"
                />
            </svg>
        ),
        pointed: (
            <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M20 120 V40 L50 20 L80 10 L100 5 L120 10 L150 20 L180 40 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Inner lines */}
                <path
                    d="M40 120 L40 45 M60 120 L60 28 M80 120 L80 15 M100 120 L100 10 M120 120 L120 15 M140 120 L140 28 M160 120 L160 45"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    opacity="0.4"
                />
                {/* Top ornament */}
                <circle cx="100" cy="5" r="3" fill="currentColor" opacity="0.6" />
            </svg>
        ),
        horseshoe: (
            <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M20 120 V60 C20 25, 55 10, 100 10 C145 10, 180 25, 180 60 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Decorative bands */}
                <path
                    d="M30 120 V60 C30 30, 60 18, 100 18 C140 18, 170 30, 170 60 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.6"
                />
                <path
                    d="M40 120 V60 C40 35, 65 26, 100 26 C135 26, 160 35, 160 60 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    opacity="0.4"
                />
            </svg>
        ),
        multifoil: (
            <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M20 120 V55 C20 35, 35 25, 50 18 C55 15, 60 12, 65 10 C70 8, 75 7, 80 6 L100 5 L120 6 C125 7, 130 8, 135 10 C140 12, 145 15, 150 18 C165 25, 180 35, 180 55 V120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                {/* Foil details */}
                {[...Array(5)].map((_, i) => {
                    const x = 50 + i * 25;
                    const y1 = 15 + Math.sin(i * 0.8) * 5;
                    const y2 = 20 + Math.cos(i * 0.6) * 3;
                    return (
                        <g key={i}>
                            <circle cx={x} cy={y1} r="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                            <circle cx={x} cy={y2} r="2" fill="currentColor" opacity="0.3" />
                        </g>
                    );
                })}
            </svg>
        )
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`relative text-emerald-primary ${className}`}
            style={{
                minHeight: variant === 'multifoil' ? '140px' : '120px'
            }}
        >
            {arches[variant]}
            {children && (
                <div className="absolute inset-0 flex items-center justify-center pt-8 px-12">
                    {children}
                </div>
            )}
        </motion.div>
    );
}
