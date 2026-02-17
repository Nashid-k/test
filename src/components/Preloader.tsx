'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const nameLetters = 'FIDHA'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary overflow-hidden"
        >
          {/* Subtle Paper Texture */}
          <div className="absolute inset-0 pointer-events-none dot-pattern" />

          <div className="relative flex flex-col items-center gap-8 z-10 px-4">
            {/* Animated Name */}
            <div className="flex gap-1 md:gap-2 overflow-hidden">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-6xl md:text-8xl lg:text-9xl font-heading text-ink-primary"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {/* Elegant Progress Bar */}
              <div className="relative w-full h-[2px] bg-ink-light/20">
                <motion.div
                  className="h-full bg-accent-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: counter / 100 }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Counter */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs md:text-sm font-accent italic text-ink-muted"
              >
                {Math.min(counter, 100)}%
              </motion.span>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent-primary font-medium"
              >
                Full-Stack Developer
              </motion.p>
            </div>
          </div>

          {/* Decorative Corners */}
          {[
            { position: 'top-10 left-10', borders: 'border-t border-l' },
            { position: 'top-10 right-10', borders: 'border-t border-r' },
            { position: 'bottom-10 left-10', borders: 'border-b border-l' },
            { position: 'bottom-10 right-10', borders: 'border-b border-r' },
          ].map((corner, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 md:w-16 md:h-16 border-accent-primary/20 ${corner.position} ${corner.borders}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
