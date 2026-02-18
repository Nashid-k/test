import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const doodles = [
    // Heart
    <path d="M50 80 C20 50 10 30 50 10 C90 30 80 50 50 80" fill="none" stroke="currentColor" strokeWidth="2" />,
    // Star
    <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    // Sparkle
    <g>
        <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 30 L70 70 M30 70 L70 30" stroke="currentColor" strokeWidth="1" />
    </g>,
    // Cute Swirl
    <path d="M20 50 C20 20 80 20 80 50 C80 80 40 80 40 60 C40 50 60 50 60 60" fill="none" stroke="currentColor" strokeWidth="2" />,
]

export default function Marginalia() {
    const [instances, setInstances] = useState<{ id: number, x: number, y: number, doodleIndex: number, rotate: number, scale: number }[]>([])

    useEffect(() => {
        const newInstances = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: Math.random() * 90 + 5,
            y: Math.random() * 5000 + 50,
            doodleIndex: Math.floor(Math.random() * doodles.length),
            rotate: Math.random() * 360,
            scale: 0.5 + Math.random() * 0.8,
        }))
        setInstances(newInstances)
    }, [])

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
            {instances.map((inst) => (
                <motion.svg
                    key={inst.id}
                    viewBox="0 0 100 100"
                    width="40"
                    height="40"
                    style={{
                        position: 'absolute',
                        left: `${inst.x}%`,
                        top: `${inst.y}px`,
                        color: 'var(--gold)',
                        opacity: 0.25,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.25, scale: inst.scale, rotate: inst.rotate }}
                    viewport={{ once: false }}
                    animate={{
                        y: [0, -10, 0],
                        rotate: [inst.rotate, inst.rotate + 10, inst.rotate],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {doodles[inst.doodleIndex]}
                </motion.svg>
            ))}
        </div>
    )
}
