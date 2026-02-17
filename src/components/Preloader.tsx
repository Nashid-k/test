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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-parchment-light overflow-hidden"
        >
          {/* Paper Texture Background */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_#4A3F35_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.03]" />
          
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,21,17,0.03)_70%,_rgba(26,21,17,0.08)_100%)] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 z-10 px-6">
            {/* Opening Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gold-dark text-xl sm:text-2xl mb-2 sm:mb-4"
            >
              ✦
            </motion.div>

            {/* Animated Name - Book Title Style */}
            <div className="flex gap-1 sm:gap-2 md:gap-3 overflow-hidden">
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
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-medium text-ink-black"
                  style={{ textShadow: '2px 2px 4px rgba(26, 21, 17, 0.1)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-medium"
            >
              Full-Stack Developer
            </motion.p>

            {/* Progress Section */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-sm md:max-w-md mt-4 sm:mt-6">
              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-sm font-accent italic text-ink-sepia"
              >
                Opening portfolio...
              </motion.p>

              {/* Elegant Progress Bar - Book Underline Style */}
              <div className="relative w-full">
                {/* Background line */}
                <div className="h-px bg-ink-light/20 w-full" />
                {/* Animated progress */}
                <motion.div
                  className="absolute top-0 left-0 h-px bg-gold-dark"
                  initial={{ width: 0 }}
                  animate={{ width: `${counter}%` }}
                  transition={{ ease: "linear" }}
                />
                {/* Progress marker */}
                <motion.div
                  className="absolute top-0 w-2 h-2 rounded-full bg-gold-dark"
                  initial={{ left: 0 }}
                  animate={{ left: `${counter}%` }}
                  transition={{ ease: "linear" }}
                  style={{ transform: 'translate(-50%, -50%)' }}
                />
              </div>

              {/* Counter - Page Number Style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <span className="text-sm sm:text-base font-heading text-ink-muted">
                  {Math.min(counter, 100)}
                </span>
                <span className="text-xs text-ink-light">/</span>
                <span className="text-sm sm:text-base font-heading text-ink-muted">100</span>
              </motion.div>
            </div>

            {/* Closing Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-gold-dark text-lg sm:text-xl mt-4 sm:mt-6"
            >
              ✦
            </motion.div>
          </div>

          {/* Decorative Book Corners */}
          {[
            { position: 'top-6 left-6 sm:top-8 sm:left-8', borders: 'border-t-2 border-l-2' },
            { position: 'top-6 right-6 sm:top-8 sm:right-8', borders: 'border-t-2 border-r-2' },
            { position: 'bottom-6 left-6 sm:bottom-8 sm:left-8', borders: 'border-b-2 border-l-2' },
            { position: 'bottom-6 right-6 sm:bottom-8 sm:right-8', borders: 'border-b-2 border-r-2' },
          ].map((corner, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-gold-dark/20 ${corner.position} ${corner.borders}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
            />
          ))}

          {/* Corner Ornaments */}
          {[
            { position: 'top-4 left-4 sm:top-6 sm:left-6', rotate: '0deg' },
            { position: 'top-4 right-4 sm:top-6 sm:right-6', rotate: '90deg' },
            { position: 'bottom-4 left-4 sm:bottom-6 sm:left-6', rotate: '-90deg' },
            { position: 'bottom-4 right-4 sm:bottom-6 sm:right-6', rotate: '180deg' },
          ].map((ornament, i) => (
            <motion.div
              key={`ornament-${i}`}
              className={`absolute ${ornament.position} text-gold-dark text-xs sm:text-sm opacity-30`}
              style={{ transform: `rotate(${ornament.rotate})` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
            >
              ❦
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
