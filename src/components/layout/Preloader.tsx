import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InkReveal from '../ui/InkReveal';
import '../../assets/styles/Preloader.css';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 4000); // Slightly longer for the drip
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--parchment-deep)',
                        overflow: 'hidden',
                    }}
                >
                    {/* Collapsed Ink Sigil */}
                    <div style={{ position: 'relative' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: '6rem',
                                color: 'var(--ink)',
                                filter: 'url(#inkBleed)',
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            F
                        </motion.div>

                        {/* Growing Ink Drip */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1.2, 50],
                                opacity: [0, 1, 1]
                            }}
                            transition={{
                                duration: 3,
                                times: [0, 0.4, 1],
                                ease: "easeIn",
                                delay: 1
                            }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100px',
                                height: '100px',
                                background: 'var(--ink)',
                                borderRadius: '50%',
                                filter: 'url(#inkBleed)',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1
                            }}
                        />
                    </div>

                    {/* Faint writing text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, delay: 0.5 }}
                        style={{
                            position: 'absolute',
                            bottom: '20%',
                            fontFamily: 'var(--font-hand)',
                            fontSize: '1.5rem',
                            color: 'var(--ink)'
                        }}
                    >
                        Inking the chronicle...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
