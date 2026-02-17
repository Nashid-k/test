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
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="book-card folded-corner hover:shadow-book transition-all duration-500"
    >
      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-ink-light border-opacity-20">
          <div className="w-16 h-16 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
            <FiAward className="w-8 h-8 text-accent-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-ink-black mb-2 leading-tight">
              {item.degree}
            </h3>
            <p className="text-lg font-semibold text-accent-primary">
              {item.institution}
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 mb-6 text-sm">
          <span className="flex items-center gap-2 text-ink-sepia">
            <FiCalendar className="w-4 h-4 text-accent-primary" />
            <span className="font-medium">{item.period}</span>
          </span>
          <span className="flex items-center gap-2 text-ink-sepia">
            <FiMapPin className="w-4 h-4 text-accent-primary" />
            <span className="font-medium">{item.location}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-ink-sepia leading-loose mb-6 text-base">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="border-t border-ink-light border-opacity-20 pt-6">
          <h4 className="text-sm font-semibold text-ink-black uppercase tracking-widest mb-4">
            Key Highlights
          </h4>
          <ul className="space-y-3">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-ink-sepia">
                <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
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
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
      className="book-card hover:shadow-book transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0">
          <FiBook className="w-6 h-6 text-accent-primary" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-accent-primary font-medium uppercase tracking-wider mb-2">
            {cert.year}
          </div>
          <div className="text-lg font-display font-semibold text-ink-black mb-1">
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
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="education"
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
          <span className="chapter-number">Chapter Six</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-ink-sepia mt-6 reading-column">
            My academic background and continuous pursuit of knowledge through 
            formal education and professional certifications.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-20" />
            <span className="px-6 text-accent-primary text-sm">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-20" />
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-ink-black mb-4 text-center">
            Professional Certifications
          </h3>
          <p className="text-center text-ink-sepia mb-12 reading-column mx-auto">
            Continuous learning through structured courses and specialized training programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 book-card decorative-border bg-accent-primary bg-opacity-5 text-center py-10"
        >
          <div className="ornamental-divider text-lg mb-6">✦ ✦ ✦</div>
          <p className="font-accent text-lg text-ink-sepia italic reading-column mx-auto leading-loose">
            "Education is not the learning of facts, but the training of the mind to think. 
            Every course completed, every skill mastered, is a stepping stone towards excellence."
          </p>
          <div className="ornamental-divider text-lg mt-6">✦ ✦ ✦</div>
        </motion.div>

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
