'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-bg-secondary py-16 md:py-20 border-t border-ink-light/10"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <div className="mb-6">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-semibold text-ink-primary"
            >
              Fidha Fathima
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-accent-primary font-medium mt-2"
            >
              Full-Stack Developer
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Building elegant web applications with clean code and modern technologies.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-bg-card border border-ink-light/10 rounded-lg flex items-center justify-center text-ink-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-bg-card border border-ink-light/10 rounded-lg flex items-center justify-center text-ink-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="w-12 h-12 bg-bg-card border border-ink-light/10 rounded-lg flex items-center justify-center text-ink-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Divider */}
          <div className="divider-elegant w-48 mx-auto mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-ink-muted"
          >
            © {new Date().getFullYear()} Fidha Fathima M. All rights reserved.
          </motion.p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent-dark transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
