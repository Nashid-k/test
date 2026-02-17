'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // More organic, slightly slower spring for an "ink-like" feel
    const springConfig = { damping: 35, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if mobile/touch device on mount
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(!!isClickable);
        };

        if (!isMobile) {
            window.addEventListener('mousemove', moveCursor);
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', checkMobile);
        };
    }, [cursorX, cursorY, isMobile]);

    // Don't render on mobile/touch devices
    if (isMobile) return null;

    return (
        <>
            {/* Main Ink Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold-dark/20 pointer-events-none z-[9999]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isPointer ? 1.4 : 1,
                    borderColor: isPointer ? '#C9A961' : 'rgba(169, 139, 79, 0.2)',
                    backgroundColor: isPointer ? 'rgba(201, 169, 97, 0.05)' : 'transparent',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            />
            {/* Center Quill Point */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-dark rounded-full pointer-events-none z-[9999]"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isPointer ? 0.5 : 1,
                    backgroundColor: isPointer ? '#C9A961' : '#A98B4F',
                }}
            />
        </>
    );
}
