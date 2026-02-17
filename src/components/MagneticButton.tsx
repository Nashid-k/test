'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
}

export default function MagneticButton({
    children,
    className = '',
    onClick,
    href,
    target,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(true);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = href ? motion.a : motion.div;

    return (
        <div 
            className="inline-block" 
            ref={ref} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <Component
                href={href}
                target={target}
                onClick={onClick}
                style={{ x: springX, y: springY }}
                className={className}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </Component>
        </div>
    );
}
