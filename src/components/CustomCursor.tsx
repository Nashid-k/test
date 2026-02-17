'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // More organic, slightly slower spring for an "ink-like" feel
    const springConfig = { damping: 35, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
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

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Ink Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-emerald-primary/20 pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isPointer ? 1.4 : 1,
                    borderColor: isPointer ? 'var(--color-gold-accent)' : 'rgba(6, 78, 59, 0.2)',
                    backgroundColor: isPointer ? 'rgba(180, 83, 9, 0.03)' : 'rgba(6, 78, 59, 0)',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            />
            {/* Center Quill Point */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-emerald-primary rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isPointer ? 0.5 : 1,
                    backgroundColor: isPointer ? 'var(--color-gold-accent)' : 'var(--color-emerald-primary)',
                }}
            />
        </>
    );
}
