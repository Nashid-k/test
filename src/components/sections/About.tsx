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

  const stats = [
    { number: '3+', label: 'Years', sublabel: 'Experience' },
    { number: '15+', label: 'Projects', sublabel: 'Completed' },
    { number: '10+', label: 'Technologies', sublabel: 'Mastered' },
    { number: '100%', label: 'Commitment', sublabel: 'Always' },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-parchment-light"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#4A3F35_1px,_transparent_1px)] bg-[length:24px_24px] opacity-[0.04]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="block text-xs sm:text-sm font-heading text-gold-dark uppercase tracking-[0.3em] mb-4">
            Chapter Two
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            About <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 sm:space-y-10"
          >
            {/* Main Bio Card */}
            <div className="bg-paper-warm border border-ink-light/12 p-6 sm:p-8 lg:p-10 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 hover:-translate-y-1 transition-all duration-300">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.025]" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-ink-black mb-6 sm:mb-8">
                  A Bit About Myself
                </h3>
                
                <div className="space-y-4 sm:space-y-6 text-ink-sepia text-base sm:text-lg leading-relaxed sm:leading-loose">
                  <p className="first-letter:font-heading first-letter:text-5xl sm:first-letter:text-6xl first-letter:leading-[0.85] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-gold-dark">
                    I'm a passionate Full-Stack Developer with hands-on experience building scalable
                    and responsive web applications. My journey in tech started with curiosity and
                    has evolved into a deep love for creating solutions that make a difference.
                  </p>
                  <p>
                    I specialize in <span className="text-gold-dark font-semibold">React</span>, <span className="text-gold-dark font-semibold">Next.js</span>, <span className="text-gold-dark font-semibold">Node.js</span>, <span className="text-gold-dark font-semibold">Express</span>, and <span className="text-gold-dark font-semibold">MongoDB</span>,
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
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-ink-light/20">
                  <p className="font-accent text-ink-faded italic text-sm sm:text-base">
                    "Code is poetry written in logic, and design is art framed by function."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid - Vintage Style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-paper-warm border border-ink-light/12 p-4 sm:p-5 lg:p-6 text-center relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold-dark mb-2 sm:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-display font-semibold text-ink-black mb-1">
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
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Info Cards */}
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-paper-warm border border-ink-light/12 p-4 sm:p-5 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-gold-dark/20 transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-dark" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-xs text-ink-muted uppercase tracking-widest mb-1 sm:mb-2 font-medium">
                      {item.label}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-display font-semibold text-ink-black">
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
              className="bg-paper-warm border-2 border-gold-dark/15 p-5 sm:p-6 relative bg-gold-dark/5"
            >
              {/* Decorative border effect */}
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
              
              <div className="text-center py-2 sm:py-4">
                <div className="text-gold-dark text-sm mb-4 tracking-[0.5rem]">✦</div>
                <h4 className="font-display text-base sm:text-lg font-semibold text-ink-black mb-3">
                  Open to Opportunities
                </h4>
                <p className="text-sm text-ink-sepia leading-relaxed">
                  Currently available for freelance projects and full-time positions.
                </p>
                <div className="text-gold-dark text-sm mt-4 tracking-[0.5rem]">✦</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 relative h-0.5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink-light/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-parchment-light px-4 text-gold-dark text-sm">
            ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
