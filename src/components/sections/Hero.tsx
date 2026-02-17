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
      className="relative min-h-screen bg-bg-primary overflow-hidden"
    >
      {/* Decorative Book Page Background */}
      <div className="absolute inset-0 parchment-bg" />
      <div className="absolute inset-0 vignette" />

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <div className="book-container max-w-4xl">
          {/* Opening Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="ornamental-divider mb-12"
          >
            ❦ ❦ ❦
          </motion.div>

          {/* Profile Image with Book Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent-primary shadow-book">
                <img
                  src="/profile.jpeg"
                  alt="Fidha Fathima"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Corner ornaments */}
              <div className="absolute -top-4 -left-4 text-accent-primary text-2xl opacity-40">❦</div>
              <div className="absolute -top-4 -right-4 text-accent-primary text-2xl opacity-40">❦</div>
              <div className="absolute -bottom-4 -left-4 text-accent-primary text-2xl opacity-40">❦</div>
              <div className="absolute -bottom-4 -right-4 text-accent-primary text-2xl opacity-40">❦</div>
            </div>
          </motion.div>

          {/* Chapter Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mb-6"
          >
            <span className="chapter-number">
              Chapter One
            </span>
          </motion.div>

          {/* Name - Large Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-medium text-ink-black mb-8 leading-tight"
          >
            Fidha Fathima
          </motion.h1>

          {/* Title with Decorative Underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-ink-sepia font-display font-light italic">
              <span className="text-gradient">Full-Stack Developer</span>
            </h2>
            <div className="w-32 h-px bg-accent-primary mt-4 mx-auto opacity-30" />
          </motion.div>

          {/* Tagline - Reading Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="reading-column mb-16"
          >
            <p className="text-lg md:text-xl text-ink-sepia leading-relaxed font-body">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-vintage"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-vintage-outline"
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
            className="inline-flex items-center gap-2 text-accent-primary hover:text-gold-dark transition-colors duration-300 mb-16 font-medium text-sm tracking-wide"
          >
            <FiDownload className="w-5 h-5" />
            <span className="border-b border-accent-primary border-opacity-40 hover:border-opacity-100 transition-all">
              Download Complete Resume
            </span>
          </motion.a>

          {/* Social Links with Decorative Border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="inline-flex items-center gap-8 px-8 py-4 border border-accent-primary border-opacity-20 rounded-sm"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-sepia hover:text-accent-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-sepia hover:text-accent-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="p-2 text-ink-sepia hover:text-accent-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Closing Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 1 }}
            className="ornamental-divider mt-12"
          >
            ✦
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-ink-faded tracking-widest uppercase font-body">
            Continue Reading
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-accent-primary w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Page Edge Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-parchment-light via-parchment-light/40 to-transparent pointer-events-none" />
    </section>
  );
}
