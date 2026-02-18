import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface InkRevealProps {
    children: ReactNode
    delay?: number
}

export default function InkReveal({ children, delay = 0 }: InkRevealProps) {
    return (
        <motion.div
            initial={{
                clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
                opacity: 0,
                filter: 'blur(5px)'
            }}
            whileInView={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                opacity: 1,
                filter: 'blur(0px)'
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 1.8,
                delay,
                ease: [0.7, 0, 0.3, 1] // "Sticky" heavy ease
            }}
            style={{ filter: 'url(#inkBleed)' }} // Apply bleeding to the whole reveal
        >
            {children}
        </motion.div>
    )
}
