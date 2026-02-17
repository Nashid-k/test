'use client';

interface GeometricPatternProps {
    className?: string;
    opacity?: number;
}

export default function GeometricPattern({ className = '', opacity = 0.1 }: GeometricPatternProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
            <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ opacity }}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <pattern
                        id="girih-pattern"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* 8-point star / Girih motif */}
                        <g fill="none" stroke="currentColor" strokeWidth="0.5">
                            <path d="M40 0 L52 28 L80 40 L52 52 L40 80 L28 52 L0 40 L28 28 Z" />
                            <circle cx="40" cy="40" r="10" />
                            <path d="M0 0 L15 15 M65 65 L80 80 M80 0 L65 15 M15 65 L0 80" />
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#girih-pattern)" />
            </svg>
        </div>
    );
}
