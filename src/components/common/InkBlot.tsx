import { motion } from 'framer-motion';

export default function InkBlot({
    className = "",
    color = "var(--ink)",
    opacity = 0.4,
    scale = 1,
    rotation = 0,
    position = { top: '50%', left: '50%' }
}) {
    return (
        <motion.div
            className={`ink-blot ${className}`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale, opacity }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
                ease: "easeOut",
                opacity: { duration: 1 }
            }}
            style={{
                position: 'absolute',
                ...position,
                width: '150px',
                height: '150px',
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                pointerEvents: 'none',
                zIndex: 0,
                filter: 'url(#inkBleed)',
            }}
        >
            <svg viewBox="0 0 100 100" fill={color}>
                {/* Randomized blob shape */}
                <path d="M30,20 Q50,5 70,25 T90,50 Q85,85 50,90 T10,60 Q15,15 30,20 Z" opacity={opacity} />
                {/* Extra splatters */}
                <circle cx="20" cy="20" r="2" opacity={opacity * 0.8} />
                <circle cx="80" cy="15" r="3" opacity={opacity * 0.8} />
                <circle cx="85" cy="80" r="2" opacity={opacity * 0.8} />
            </svg>
        </motion.div>
    );
}
