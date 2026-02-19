import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function QuillCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 20, stiffness: 300 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const [isVisible, setIsVisible] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [cursorX, cursorY, isVisible])

    if (!isVisible) return null

    return (
        <>
            {/* Candlelight Glow */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    x: cursorXSpring,
                    y: cursorYSpring,
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(201, 169, 78, 0.09) 0%, rgba(201, 169, 78, 0.03) 35%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'screen',
                }}
            />

            {/* The Wand */}
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
                {/* Wand body */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: -2,
                        left: -2,
                        color: 'var(--umber-dark)',
                        transformOrigin: 'bottom left',
                        filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))',
                    }}
                    animate={{
                        rotate: isClicking ? -18 : [0, -4, 0],
                        y: isClicking ? 3 : 0
                    }}
                    transition={{
                        rotate: { duration: 0.2 },
                        y: { duration: 0.1 },
                        default: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                >
                    <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
                        <path d="M8 56 L54 10" stroke="var(--umber-dark)" strokeWidth="4" strokeLinecap="round" />
                        <path d="M10 52 L50 12" stroke="var(--gold-dark)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                        <circle cx="54" cy="10" r="3" fill="var(--gold-bright)" />
                        <circle cx="54" cy="10" r="7" fill="rgba(240, 208, 96, 0.25)" />
                    </svg>
                </motion.div>

                {/* Cursor point */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'var(--gold-bright)',
                        boxShadow: '0 0 16px rgba(240, 208, 96, 0.9)',
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.55, 0.95, 0.55] }}
                    transition={{ duration: 1.3, repeat: Infinity }}
                />
            </motion.div>
        </>
    )
}
