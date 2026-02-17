'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBriefcase, FiUser, FiCode } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const infoItems = [
    { icon: FiUser, label: 'Name', value: 'Fidha Fathima M' },
    { icon: FiMapPin, label: 'Location', value: 'Kerala, India' },
    { icon: FiBriefcase, label: 'Role', value: 'Full-Stack Developer' },
    { icon: FiCode, label: 'Education', value: 'BCA Graduate' },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="folio-section bg-bg-secondary/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.5]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs md:text-sm text-accent-primary font-medium tracking-[0.3em] uppercase block mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="vintage-card p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-ink-primary mb-6">
                A Bit About Myself
              </h3>
              <div className="space-y-4 text-ink-secondary leading-relaxed">
                <p>
                  I'm a passionate Full-Stack Developer with hands-on experience building scalable
                  and responsive web applications. My journey in tech started with curiosity and
                  has evolved into a deep love for creating solutions that make a difference.
                </p>
                <p>
                  I specialize in <span className="text-accent-primary font-medium">React, Next.js, Node.js, Express, and MongoDB</span>,
                  with a solid understanding of end-to-end application architecture. I believe in
                  writing clean, maintainable code and creating intuitive user experiences.
                </p>
                <p>
                  Beyond coding, I'm continuously learning and staying updated with the latest
                  technologies. I approach every project with dedication, attention to detail, and
                  a commitment to delivering excellence.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' },
                { number: '10+', label: 'Technologies' },
                { number: '100%', label: 'Commitment' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="vintage-card p-6 text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-ink-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="vintage-card p-6 flex items-center gap-4 group hover:border-accent-primary/30"
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-display font-medium text-ink-primary">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
