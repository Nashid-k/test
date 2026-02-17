'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiMapPin, FiBook } from 'react-icons/fi';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Kerala',
    location: 'Kerala, India',
    period: '2020 - 2023',
    description: 'Comprehensive study of computer science fundamentals, programming languages, database management, and software engineering principles.',
    highlights: [
      'Specialized in Web Development and Database Systems',
      'Completed multiple practical projects',
      'Gained strong foundation in algorithms and data structures',
    ],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Government Higher Secondary School',
    location: 'Kerala, India',
    period: '2018 - 2020',
    description: 'Focus on computer science, mathematics, and core sciences. Developed strong analytical and problem-solving skills.',
    highlights: [
      'Computer Science specialization',
      'Active participant in coding competitions',
      'Strong academic performance',
    ],
  },
];

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    title: 'MongoDB Basics',
    issuer: 'MongoDB University',
    year: '2023',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    year: '2022',
  },
];

function EducationCard({ item, index }: { item: typeof education[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="bg-paper-warm border border-ink-light/12 p-5 sm:p-6 lg:p-8 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 transition-all duration-500 overflow-hidden"
    >
      {/* Folded corner effect */}
      <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-0 border-r-[32px] sm:border-r-[40px] border-b-[32px] sm:border-b-[40px] border-l-0 border-t-transparent border-r-page-edge border-b-transparent border-l-transparent drop-shadow-[-1px_1px_2px_rgba(0,0,0,0.1)]" />

      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-ink-light/20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
            <FiAward className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gold-dark" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-display font-bold text-ink-black mb-1 sm:mb-2 leading-tight">
              {item.degree}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gold-dark">
              {item.institution}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6 text-sm">
          <span className="flex items-center gap-2 text-ink-sepia">
            <FiCalendar className="w-4 h-4 text-gold-dark flex-shrink-0" />
            <span className="font-medium">{item.period}</span>
          </span>
          <span className="flex items-center gap-2 text-ink-sepia">
            <FiMapPin className="w-4 h-4 text-gold-dark flex-shrink-0" />
            <span className="font-medium">{item.location}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-ink-sepia leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="border-t border-ink-light/20 pt-4 sm:pt-6">
          <h4 className="text-xs sm:text-sm font-semibold text-ink-black uppercase tracking-widest mb-3 sm:mb-4">
            Key Highlights
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-ink-sepia">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-dark mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="bg-paper-warm border border-ink-light/12 p-4 sm:p-5 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 transition-all duration-300"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0">
          <FiBook className="w-5 h-5 sm:w-6 sm:h-6 text-gold-dark" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-1">
            {cert.year}
          </div>
          <div className="text-base sm:text-lg font-display font-semibold text-ink-black mb-1 leading-tight">
            {cert.title}
          </div>
          <div className="text-sm text-ink-sepia">
            {cert.issuer}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      ref={ref}
      id="education"
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
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="block text-xs sm:text-sm font-heading text-gold-dark uppercase tracking-[0.3em] mb-4">
            Chapter Six
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Educational <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-sepia mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            My academic background and continuous pursuit of knowledge through 
            formal education and professional certifications.
          </p>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent max-w-xs" />
            <span className="px-4 sm:px-6 text-gold-dark text-sm">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent max-w-xs" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink-black mb-3 sm:mb-4 text-center">
            Professional Certifications
          </h3>
          <p className="text-center text-ink-sepia mb-8 sm:mb-12 max-w-xl mx-auto px-4 text-base sm:text-lg">
            Continuous learning through structured courses and specialized training programs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-paper-warm border-2 border-gold-dark/15 p-6 sm:p-8 lg:p-10 relative bg-gold-dark/5 text-center"
        >
          {/* Decorative border effect */}
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
          
          <div className="text-gold-dark text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 tracking-[0.5rem]">✦ ✦ ✦</div>
          <p className="font-accent text-base sm:text-lg lg:text-xl text-ink-sepia italic max-w-2xl mx-auto leading-relaxed sm:leading-loose">
            "Education is not the learning of facts, but the training of the mind to think. 
            Every course completed, every skill mastered, is a stepping stone towards excellence."
          </p>
          <div className="text-gold-dark text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 tracking-[0.5rem]">✦ ✦ ✦</div>
        </motion.div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
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
