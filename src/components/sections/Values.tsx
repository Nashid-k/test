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
      className="folio-section bg-bg-primary"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs md:text-sm text-accent-primary font-medium tracking-[0.3em] uppercase block mb-4">
            My Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            What I <span className="text-gradient">Stand For</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto mb-8" />
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            These principles guide my work and shape how I approach every project.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="vintage-card p-8 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-7 h-7 text-accent-primary group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-ink-primary mb-3">
                {value.title}
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
