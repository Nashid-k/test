'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiDownload } from 'react-icons/fi';
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
      className="relative bg-parchment border-t-2 border-ink-light border-opacity-20 py-20 md:py-24"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="book-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Opening Ornament */}
          <div className="ornamental-divider text-xl mb-10">✦ ✦ ✦</div>

          {/* Epilogue Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="chapter-number">Epilogue</span>
          </motion.div>

          {/* Name - Signature Style */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-heading font-medium text-ink-black mb-4"
          >
            Fidha Fathima
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-accent-primary font-display text-xl font-semibold italic">
              Full-Stack Developer
            </p>
            <div className="w-24 h-px bg-accent-primary mx-auto mt-4 opacity-30" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="reading-column mx-auto mb-12"
          >
            <p className="text-lg text-ink-sepia leading-loose font-accent italic">
              "Every line of code is a verse in the poetry of creation. 
              Every project, a chapter in the story of innovation."
            </p>
          </motion.div>

          {/* Social Links - Book Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12 flex-wrap"
          >
            <a
              href="https://github.com/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-bg-card border-2 border-ink-light border-opacity-20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-accent-primary hover:border-accent-primary hover:shadow-book transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-bg-card border-2 border-ink-light border-opacity-20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-accent-primary hover:border-accent-primary hover:shadow-book transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="w-14 h-14 bg-bg-card border-2 border-ink-light border-opacity-20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-accent-primary hover:border-accent-primary hover:shadow-book transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
            <a
              href="/Fidha_Fathima_Resume.pdf"
              download="Fidha_Fathima_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-bg-card border-2 border-ink-light border-opacity-20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-accent-primary hover:border-accent-primary hover:shadow-book transition-all duration-300 hover:scale-110"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FiDownload className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Divider with Ornament */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-20" />
            <span className="px-6 text-accent-primary text-sm">✦</span>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-20" />
          </div>

          {/* Copyright - Book Colophon Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-sm text-ink-sepia font-body">
              © {new Date().getFullYear()} Fidha Fathima M. All rights reserved.
            </p>
            <p className="text-xs text-ink-muted font-accent italic">
              Crafted with dedication and attention to detail
            </p>
          </motion.div>

          {/* Closing Ornament */}
          <div className="ornamental-divider text-xl mt-10">✦</div>

          {/* Final Page Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <p className="page-number">— End of Portfolio —</p>
          </motion.div>
        </motion.div>

        {/* Back to Top Button - Vintage Style */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-14 h-14 bg-accent-primary text-paper-cream rounded-sm shadow-book hover:shadow-lg transition-all duration-300 hover:scale-110 z-50 border-2 border-accent-primary hover:bg-gold-dark"
          aria-label="Back to top"
        >
          <div className="flex flex-col items-center justify-center">
            <FiArrowUp className="w-6 h-6 mb-0.5" />
            <span className="text-[8px] font-medium tracking-wider uppercase">Top</span>
          </div>
        </motion.button>
      </div>
    </footer>
  );
}
