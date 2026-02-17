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
      className="book-section bg-paper relative"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="book-container relative z-10">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="chapter-header"
        >
          <span className="chapter-number">Chapter Three</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-ink-sepia mt-6 reading-column">
            The fundamental principles that guide my work and shape how I approach 
            every project, collaboration, and line of code.
          </p>
        </motion.div>

        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 reading-column"
        >
          <div className="book-card decorative-border bg-accent-primary bg-opacity-5 text-center py-10">
            <p className="font-accent text-lg md:text-xl text-ink-sepia italic leading-loose">
              "In the realm of code, principles are the foundation upon which 
              great software is built. These values are not mere words, but 
              commitments etched into every project I undertake."
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="book-card group hover:shadow-book transition-all duration-500"
            >
              {/* Icon with Ornamental Border */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 shadow-sm">
                    <value.icon className="w-10 h-10 text-accent-primary" />
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 text-accent-primary text-xs opacity-30">✦</div>
                  <div className="absolute -top-2 -right-2 text-accent-primary text-xs opacity-30">✦</div>
                  <div className="absolute -bottom-2 -left-2 text-accent-primary text-xs opacity-30">✦</div>
                  <div className="absolute -bottom-2 -right-2 text-accent-primary text-xs opacity-30">✦</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-ink-black mb-4 text-center">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-px bg-accent-primary mx-auto mb-4 opacity-30" />

              {/* Description */}
              <p className="text-ink-sepia leading-loose text-center">
                {value.description}
              </p>

              {/* Bottom Ornament */}
              <div className="mt-6 text-center text-accent-primary text-sm opacity-40">
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
          className="mt-20 text-center"
        >
          <div className="inline-block reading-column">
            <div className="ornamental-divider text-lg mb-6">✦ ✦ ✦</div>
            <p className="text-ink-sepia leading-relaxed text-lg mb-4">
              These values are more than principles—they are promises I make to 
              every project, every team member, and every user who interacts with my work.
            </p>
            <div className="ornamental-divider text-lg mt-6">✦ ✦ ✦</div>
          </div>
        </motion.div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="page-break mt-24"
        />
      </div>
    </section>
  );
}
