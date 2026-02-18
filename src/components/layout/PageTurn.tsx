import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTurnProps {
    children: ReactNode
}

export default function PageTurn({ children }: PageTurnProps) {
    return (
        <motion.div
            initial={{ rotateY: -10, opacity: 0, originX: 0 }}
            whileInView={{ rotateY: 0, opacity: 1, originX: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: '1200px' }}
        >
            {children}
        </motion.div>
    )
}
