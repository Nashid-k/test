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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen bg-bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent-primary/20 shadow-2xl">
            <img
              src="/profile.jpeg"
              alt="Fidha Fathima"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-sm md:text-base text-accent-primary font-medium tracking-[0.2em] uppercase">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-medium text-ink-primary mb-6 leading-tight"
        >
          Fidha Fathima
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-ink-secondary font-display font-light">
            <span className="text-gradient">Full-Stack Developer</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="text-base md:text-lg text-ink-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting elegant web applications with clean code and modern technologies.
          Passionate about creating beautiful, user-centric digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Download Resume */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          href="/Fidha_Fathima_Resume.pdf"
          download="Fidha_Fathima_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent-primary hover:text-accent-dark transition-colors duration-300 mb-16 font-medium"
        >
          <FiDownload className="w-5 h-5" />
          Download Resume
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-ink-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-ink-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@fidhafathima.dev"
            className="p-3 text-ink-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-ink-muted tracking-[0.3em] uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-accent-primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
