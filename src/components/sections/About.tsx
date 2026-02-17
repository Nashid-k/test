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
      className="book-section bg-parchment relative"
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
          <span className="chapter-number">Chapter Two</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Main Bio Card */}
            <div className="book-card">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-display font-semibold text-ink-black mb-8">
                  A Bit About Myself
                </h3>
                
                <div className="space-y-6 text-ink-sepia text-lg leading-loose">
                  <p className="drop-cap">
                    I'm a passionate Full-Stack Developer with hands-on experience building scalable
                    and responsive web applications. My journey in tech started with curiosity and
                    has evolved into a deep love for creating solutions that make a difference.
                  </p>
                  <p>
                    I specialize in <span className="text-accent-primary font-semibold">React</span>, <span className="text-accent-primary font-semibold">Next.js</span>, <span className="text-accent-primary font-semibold">Node.js</span>, <span className="text-accent-primary font-semibold">Express</span>, and <span className="text-accent-primary font-semibold">MongoDB</span>,
                    with a solid understanding of end-to-end application architecture. I believe in
                    writing clean, maintainable code and creating intuitive user experiences.
                  </p>
                  <p>
                    Beyond coding, I'm continuously learning and staying updated with the latest
                    technologies. I approach every project with dedication, attention to detail, and
                    a commitment to delivering excellence.
                  </p>
                </div>

                {/* Signature-style element */}
                <div className="mt-10 pt-8 border-t border-ink-light border-opacity-20">
                  <p className="font-accent text-ink-faded italic text-sm">
                    "Code is poetry written in logic, and design is art framed by function."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid - Vintage Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '3+', label: 'Years', sublabel: 'Experience' },
                { number: '15+', label: 'Projects', sublabel: 'Completed' },
                { number: '10+', label: 'Technologies', sublabel: 'Mastered' },
                { number: '100%', label: 'Commitment', sublabel: 'Always' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="book-card text-center hover:shadow-book transition-shadow duration-300"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-display font-semibold text-ink-black mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-ink-muted uppercase tracking-wider">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards */}
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="book-card group hover:shadow-book transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all duration-300 shadow-sm">
                    <item.icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-xs text-ink-muted uppercase tracking-widest mb-2 font-medium">
                      {item.label}
                    </div>
                    <div className="text-xl font-display font-semibold text-ink-black">
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="book-card decorative-border bg-accent-primary bg-opacity-5"
            >
              <div className="text-center py-4">
                <div className="ornamental-divider text-sm mb-4">✦</div>
                <h4 className="font-display text-lg font-semibold text-ink-black mb-3">
                  Open to Opportunities
                </h4>
                <p className="text-sm text-ink-sepia leading-relaxed">
                  Currently available for freelance projects and full-time positions.
                </p>
                <div className="ornamental-divider text-sm mt-4">✦</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="page-break mt-24"
        />
      </div>
    </section>
  );
}
