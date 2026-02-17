'use client';

import { motion } from 'framer-motion';

interface ManuscriptRevealProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

export default function ManuscriptReveal({
    text,
    className = '',
    delay = 0,
    stagger = 0.05
}: ManuscriptRevealProps) {
    const characters = text.split('');

    return (
        <motion.span
            whileInView="show"
            initial="hidden"
            viewport={{ once: true, amount: "some" }}
            className={`inline-block font-heading ${className}`}
        >
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, filter: 'blur(10px)', y: 5 },
                        show: { opacity: 1, filter: 'blur(0px)', y: 0 }
                    }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * stagger,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}
