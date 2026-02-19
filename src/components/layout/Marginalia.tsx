import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const doodles = [
    // Eight-point rune star
    <path d="M50 8 L58 34 L92 34 L64 52 L74 88 L50 66 L26 88 L36 52 L8 34 L42 34 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
    // Arcane circle
    <g>
        <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M50 16 L50 84 M16 50 L84 50" stroke="currentColor" strokeWidth="1.2" />
    </g>,
    // Spark cross
    <g>
        <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 30 L70 70 M30 70 L70 30" stroke="currentColor" strokeWidth="1" />
    </g>,
    // Constellation
    <g>
        <circle cx="18" cy="26" r="2" fill="currentColor" />
        <circle cx="46" cy="14" r="2" fill="currentColor" />
        <circle cx="76" cy="22" r="2" fill="currentColor" />
        <circle cx="62" cy="58" r="2" fill="currentColor" />
        <circle cx="28" cy="72" r="2" fill="currentColor" />
        <path d="M18 26 L46 14 L76 22 L62 58 L28 72 L18 26" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </g>,
]

export default function Marginalia() {
    const [instances, setInstances] = useState<{ id: number, x: number, y: number, doodleIndex: number, rotate: number, scale: number, duration: number }[]>([])

    useEffect(() => {
        const newInstances = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: Math.random() * 90 + 5,
            y: Math.random() * 4600 + 80,
            doodleIndex: Math.floor(Math.random() * doodles.length),
            rotate: Math.random() * 360,
            scale: 0.45 + Math.random() * 0.6,
            duration: 6 + Math.random() * 6,
        }))

        setTimeout(() => setInstances(newInstances), 0)
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
                        color: 'var(--gold-light)',
                        opacity: 0.2,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.2, scale: inst.scale, rotate: inst.rotate }}
                    viewport={{ once: false }}
                    animate={{
                        y: [0, -7, 0],
                        rotate: [inst.rotate, inst.rotate + 6, inst.rotate],
                    }}
                    transition={{
                        duration: inst.duration,
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
