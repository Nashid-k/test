'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiDownload } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-parchment-light border-t-2 border-ink-light/20 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#4A3F35_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.04]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Opening Ornament */}
          <div className="text-gold-dark text-xl sm:text-2xl mb-8 sm:mb-10 tracking-[1rem]">✦ ✦ ✦</div>

          {/* Epilogue Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <span className="block text-xs sm:text-sm font-heading text-gold-dark uppercase tracking-[0.3em]">
              Epilogue
            </span>
          </motion.div>

          {/* Name - Signature Style */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-ink-black mb-3 sm:mb-4"
          >
            Fidha Fathima
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-gold-dark font-display text-lg sm:text-xl font-semibold italic">
              Full-Stack Developer
            </p>
            <div className="w-20 sm:w-24 h-px bg-gold-dark mx-auto mt-3 sm:mt-4 opacity-30" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-xl mx-auto mb-10 sm:mb-12 px-4"
          >
            <p className="text-base sm:text-lg text-ink-sepia leading-relaxed font-accent italic">
              "Every line of code is a verse in the poetry of creation. 
              Every project, a chapter in the story of innovation."
            </p>
          </motion.div>

          {/* Social Links - Book Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 flex-wrap"
          >
            <a
              href="https://github.com/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-paper-warm border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1)] transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px]"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-paper-warm border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1)] transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px]"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:contact@fidhafathima.dev"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-paper-warm border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1)] transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px]"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="/Fidha_Fathima_Resume.pdf"
              download="Fidha_Fathima_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-paper-warm border-2 border-ink-light/20 rounded-sm flex items-center justify-center text-ink-sepia hover:text-gold-dark hover:border-gold-dark shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1)] transition-all duration-300 hover:scale-110 min-h-[48px] min-w-[48px]"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FiDownload className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>

          {/* Divider with Ornament */}
          <div className="flex items-center justify-center mb-8 sm:mb-10">
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />
            <span className="px-4 sm:px-6 text-gold-dark text-sm">✦</span>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent" />
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
          <div className="text-gold-dark text-xl sm:text-2xl mt-8 sm:mt-10 tracking-[1rem]">✦</div>

          {/* Final Page Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-8"
          >
            <p className="text-sm font-heading text-ink-muted italic">
              — End of Portfolio —
            </p>
          </motion.div>
        </motion.div>

        {/* Back to Top Button - Vintage Style */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToTop}
          className="fixed bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-10 w-12 h-12 sm:w-14 sm:h-14 bg-gold-dark text-paper-cream rounded-sm shadow-[0_4px_8px_rgba(26,21,17,0.08),0_8px_24px_rgba(26,21,17,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-lg transition-all duration-300 hover:scale-110 z-50 border-2 border-gold-dark hover:bg-gold flex flex-col items-center justify-center min-h-[48px] min-w-[48px]"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" />
          <span className="text-[8px] font-medium tracking-wider uppercase">Top</span>
        </motion.button>
      </div>
    </footer>
  );
}
