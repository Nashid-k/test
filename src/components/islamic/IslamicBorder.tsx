'use client';

import { motion } from 'framer-motion';

interface IslamicBorderProps {
    variant?: 'ornate' | 'simple' | 'arabesque' | 'geometric';
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

export default function IslamicBorder({
    variant = 'ornate',
    orientation = 'horizontal',
    className = ''
}: IslamicBorderProps) {
    const isVertical = orientation === 'vertical';

    const borders = {
        ornate: (
            <svg
                viewBox="0 0 400 40"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B45309" stopOpacity="0" />
                        <stop offset="20%" stopColor="#B45309" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#B45309" stopOpacity="0.8" />
                        <stop offset="80%" stopColor="#B45309" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Main line */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="url(#goldGradient)" strokeWidth="1" />

                {/* Central motif */}
                <g transform="translate(200, 20)">
                    {/* Star pattern */}
                    <polygon
                        points="0,-12 3,-4 11,-4 5,1 7,9 0,5 -7,9 -5,1 -11,-4 -3,-4"
                        fill="none"
                        stroke="#B45309"
                        strokeWidth="0.8"
                    />
                    <circle cx="0" cy="0" r="3" fill="#B45309" fillOpacity="0.6" />

                    {/* Side decorations */}
                    {[-1, 1].map((dir) => (
                        <g key={dir} transform={`scale(${dir}, 1)`}>
                            <path
                                d="M15 0 L25 -8 L35 0 L25 8 Z"
                                fill="none"
                                stroke="#064E3B"
                                strokeWidth="0.5"
                                strokeOpacity="0.6"
                            />
                            <circle cx="25" cy="0" r="2" fill="#B45309" fillOpacity="0.4" />
                            <path
                                d="M45 0 L55 -5 L65 0 L55 5 Z"
                                fill="none"
                                stroke="#B45309"
                                strokeWidth="0.4"
                            />
                        </g>
                    ))}
                </g>

                {/* Edge ornaments */}
                {[0, 1].map((side) => (
                    <g key={side} transform={`translate(${side === 0 ? 30 : 370}, 20)`}>
                        <circle r="4" fill="none" stroke="#064E3B" strokeWidth="0.6" />
                        <circle r="2" fill="#B45309" fillOpacity="0.5" />
                    </g>
                ))}
            </svg>
        ),
        simple: (
            <svg
                viewBox="0 0 400 40"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <line x1="0" y1="20" x2="160" y2="20" stroke="#064E3B" strokeWidth="0.5" />
                <line x1="240" y1="20" x2="400" y2="20" stroke="#064E3B" strokeWidth="0.5" />

                {/* Central diamond */}
                <g transform="translate(200, 20)">
                    <rect
                        x="-12"
                        y="-12"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="#B45309"
                        strokeWidth="1"
                        transform="rotate(45)"
                    />
                    <rect
                        x="-6"
                        y="-6"
                        width="12"
                        height="12"
                        fill="#064E3B"
                        fillOpacity="0.2"
                        transform="rotate(45)"
                    />
                </g>
            </svg>
        ),
        arabesque: (
            <svg
                viewBox="0 0 400 40"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                {/* Wavy line */}
                <path
                    d="M0 20 Q50 10, 100 20 T200 20 T300 20 T400 20"
                    fill="none"
                    stroke="#B45309"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                />

                {/* Flowing motifs */}
                {[50, 150, 250, 350].map((x, i) => (
                    <g key={i} transform={`translate(${x}, 20)`}>
                        <circle r="5" fill="none" stroke="#064E3B" strokeWidth="0.5" />
                        <path
                            d="M-3 0 Q0 -8, 3 0 Q0 8, -3 0"
                            fill="#B45309"
                            fillOpacity="0.3"
                        />
                    </g>
                ))}

                {/* Central flourish */}
                <g transform="translate(200, 20)">
                    <path
                        d="M0 -15 Q10 -10, 15 0 Q10 10, 0 15 Q-10 10, -15 0 Q-10 -10, 0 -15"
                        fill="none"
                        stroke="#B45309"
                        strokeWidth="0.8"
                    />
                    <circle r="4" fill="#064E3B" fillOpacity="0.4" />
                </g>
            </svg>
        ),
        geometric: (
            <svg
                viewBox="0 0 400 40"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                {/* Dashed lines */}
                <line
                    x1="0"
                    y1="20"
                    x2="180"
                    y2="20"
                    stroke="#064E3B"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                />
                <line
                    x1="220"
                    y1="20"
                    x2="400"
                    y2="20"
                    stroke="#064E3B"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                />

                {/* Central geometric pattern */}
                <g transform="translate(200, 20)">
                    <polygon
                        points="0,-10 9,-5 9,5 0,10 -9,5 -9,-5"
                        fill="none"
                        stroke="#B45309"
                        strokeWidth="1"
                    />
                    <polygon
                        points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3"
                        fill="#064E3B"
                        fillOpacity="0.3"
                    />
                    {[...Array(6)].map((_, i) => (
                        <line
                            key={i}
                            x1="0"
                            y1="0"
                            x2={Math.cos(i * 60 * Math.PI / 180) * 15}
                            y2={Math.sin(i * 60 * Math.PI / 180) * 15}
                            stroke="#B45309"
                            strokeWidth="0.3"
                            strokeOpacity="0.5"
                        />
                    ))}
                </g>

                {/* Corner squares */}
                {[0, 1].map((side) => (
                    <g key={side} transform={`translate(${side === 0 ? 20 : 380}, 20)`}>
                        <rect
                            x="-4"
                            y="-4"
                            width="8"
                            height="8"
                            fill="none"
                            stroke="#064E3B"
                            strokeWidth="0.5"
                            transform="rotate(45)"
                        />
                    </g>
                ))}
            </svg>
        )
    };

    return (
        <motion.div
            initial={{ opacity: 0, scaleX: isVertical ? 0 : 1, scaleY: isVertical ? 1 : 0 }}
            whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`overflow-hidden ${isVertical ? 'h-auto w-8' : 'h-10 w-full'} ${className}`}
        >
            {borders[variant]}
        </motion.div>
    );
}
