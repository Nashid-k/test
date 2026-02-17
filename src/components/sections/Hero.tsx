'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-paper-cream overflow-hidden"
    >
      {/* Decorative Book Page Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment-light/50 via-paper-cream to-paper-aged/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(26,21,17,0.03)_70%,_rgba(26,21,17,0.08)_100%)]" />

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-4xl mx-auto">
          {/* Opening Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gold-dark text-xl sm:text-2xl mb-8 sm:mb-12 tracking-[1rem]"
          >
            ❦ ❦ ❦
          </motion.div>

          {/* Profile Image with Book Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gold-dark shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1),inset_0_1px_0_rgba(255,255,255,0.6)]">
                <img
                  src="/profile.jpeg"
                  alt="Fidha Fathima"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Corner ornaments */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 text-gold-dark text-lg sm:text-xl md:text-2xl opacity-40">❦</div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-gold-dark text-lg sm:text-xl md:text-2xl opacity-40">❦</div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 text-gold-dark text-lg sm:text-xl md:text-2xl opacity-40">❦</div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 text-gold-dark text-lg sm:text-xl md:text-2xl opacity-40">❦</div>
            </div>
          </motion.div>

          {/* Chapter Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <span className="block text-xs sm:text-sm font-heading text-gold-dark uppercase tracking-[0.3em]">
              Chapter One
            </span>
          </motion.div>

          {/* Name - Large Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-medium text-ink-black mb-6 sm:mb-8 leading-tight"
          >
            Fidha Fathima
          </motion.h1>

          {/* Title with Decorative Underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ink-sepia font-display font-light italic">
              <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-px bg-gold-dark mt-4 mx-auto opacity-30" />
          </motion.div>

          {/* Tagline - Reading Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="max-w-2xl mx-auto mb-10 sm:mb-16 px-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-ink-sepia leading-relaxed sm:leading-loose font-body">
              Crafting elegant web applications with clean code and modern technologies. 
              Passionate about creating beautiful, user-centric digital experiences that 
              stand the test of time.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 px-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gold-dark text-paper-cream font-body text-sm sm:text-base font-medium tracking-wide border-2 border-gold-dark rounded-none shadow-[0_2px_4px_rgba(26,21,17,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-gold hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 min-h-[44px] min-w-[160px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-ink-black font-body text-sm sm:text-base font-medium tracking-wide border-2 border-ink-black rounded-none hover:bg-ink-black hover:text-paper-cream hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2)] transition-all duration-300 min-h-[44px] min-w-[160px]"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Download Resume */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            href="/Fidha_Fathima_Resume.pdf"
            download="Fidha_Fathima_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-dark hover:text-gold transition-colors duration-300 mb-10 sm:mb-16 font-medium text-sm tracking-wide"
          >
            <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="border-b border-gold-dark/40 hover:border-gold-dark transition-all">
              Download Complete Resume
            </span>
          </motion.a>

          {/* Social Links with Decorative Border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="inline-flex items-center gap-4 sm:gap-6 md:gap-8 px-6 sm:px-8 py-3 sm:py-4 border border-gold-dark/20 rounded-sm"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 text-ink-sepia hover:text-gold-dark transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 text-ink-sepia hover:text-gold-dark transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="p-2 sm:p-3 text-ink-sepia hover:text-gold-dark transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>

          {/* Closing Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 1 }}
            className="text-gold-dark text-lg sm:text-xl mt-8 sm:mt-12 tracking-[1rem]"
          >
            ✦
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 flex flex-col items-center gap-2 sm:gap-3"
        >
          <span className="text-xs text-ink-faded tracking-widest uppercase font-body">
            Continue Reading
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-gold-dark w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Page Edge Effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-gradient-to-t from-parchment-light via-parchment-light/40 to-transparent pointer-events-none" />
    </section>
  );
}
