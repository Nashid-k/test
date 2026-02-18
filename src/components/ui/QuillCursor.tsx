import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function QuillCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [cursorX, cursorY, isVisible])

    if (!isVisible) return null

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: cursorXSpring,
                y: cursorYSpring,
                pointerEvents: 'none',
                zIndex: 10000,
            }}
        >
            {/* The Quill Feather */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 10,
                    left: -5,
                    color: 'var(--ink)',
                    fontSize: '2rem',
                    transformOrigin: 'bottom left',
                }}
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                🪶
            </motion.div>

            {/* Ink Sparkles */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--ink)',
                    boxShadow: '0 0 10px var(--gold)',
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </motion.div>
    )
}
