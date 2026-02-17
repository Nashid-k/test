'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiShield, FiUsers, FiBookOpen, FiStar, FiCode } from 'react-icons/fi';

const values = [
  {
    icon: FiHeart,
    title: 'Sincerity',
    description: 'Writing code with pure intention, focused on creating genuine value for users.',
  },
  {
    icon: FiShield,
    title: 'Trust',
    description: 'Building secure, reliable systems that protect user data and maintain integrity.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration',
    description: 'Creating inclusive technology that brings communities together and facilitates growth.',
  },
  {
    icon: FiBookOpen,
    title: 'Knowledge',
    description: 'Continuously learning and growing in technical expertise through dedicated practice.',
  },
  {
    icon: FiStar,
    title: 'Excellence',
    description: 'Striving for perfection in every project, paying attention to every detail.',
  },
  {
    icon: FiCode,
    title: 'Fairness',
    description: 'Creating unbiased, accessible interfaces that treat all users with equity and respect.',
  }
];

export default function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="values"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-paper-cream"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#4A3F35_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.04]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="block text-xs sm:text-sm font-heading text-gold-dark uppercase tracking-[0.3em] mb-4">
            Chapter Three
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Core <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-sepia mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            The fundamental principles that guide my work and shape how I approach 
            every project, collaboration, and line of code.
          </p>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto"
        >
          <div className="bg-paper-warm border-2 border-gold-dark/15 p-6 sm:p-8 lg:p-10 relative bg-gold-dark/5 text-center">
            {/* Decorative border effect */}
            <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
            
            <p className="font-accent text-base sm:text-lg md:text-xl text-ink-sepia italic leading-relaxed sm:leading-loose">
              "In the realm of code, principles are the foundation upon which 
              great software is built. These values are not mere words, but 
              commitments etched into every project I undertake."
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="bg-paper-warm border border-ink-light/12 p-5 sm:p-6 lg:p-8 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* Icon with Ornamental Border */}
              <div className="flex justify-center mb-5 sm:mb-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gold-dark/10 rounded-sm flex items-center justify-center group-hover:bg-gold-dark/20 transition-all duration-300 shadow-sm">
                    <value.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gold-dark" />
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute -top-1.5 -left-1.5 text-gold-dark text-[10px] opacity-30">✦</div>
                  <div className="absolute -top-1.5 -right-1.5 text-gold-dark text-[10px] opacity-30">✦</div>
                  <div className="absolute -bottom-1.5 -left-1.5 text-gold-dark text-[10px] opacity-30">✦</div>
                  <div className="absolute -bottom-1.5 -right-1.5 text-gold-dark text-[10px] opacity-30">✦</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-black mb-3 sm:mb-4 text-center">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-10 sm:w-12 h-px bg-gold-dark mx-auto mb-3 sm:mb-4 opacity-30" />

              {/* Description */}
              <p className="text-ink-sepia leading-relaxed text-center text-sm sm:text-base">
                {value.description}
              </p>

              {/* Bottom Ornament */}
              <div className="mt-4 sm:mt-6 text-center text-gold-dark text-sm opacity-40">
                ✦
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-block max-w-2xl px-4">
            <div className="text-gold-dark text-lg sm:text-xl mb-4 sm:mb-6 tracking-[0.5rem]">✦ ✦ ✦</div>
            <p className="text-ink-sepia leading-relaxed text-base sm:text-lg mb-4">
              These values are more than principles—they are promises I make to 
              every project, every team member, and every user who interacts with my work.
            </p>
            <div className="text-gold-dark text-lg sm:text-xl mt-4 tracking-[0.5rem]">✦ ✦ ✦</div>
          </div>
        </motion.div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 relative h-0.5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink-light/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper-cream px-4 text-gold-dark text-sm">
            ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
