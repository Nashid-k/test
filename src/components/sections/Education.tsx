'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

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
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="vintage-card p-8 relative"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-6">
        <FiAward className="w-7 h-7 text-accent-primary" />
      </div>

      {/* Degree */}
      <h3 className="text-2xl font-display font-semibold text-ink-primary mb-2">
        {item.degree}
      </h3>

      {/* Institution */}
      <p className="text-lg font-medium text-accent-primary mb-4">
        {item.institution}
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-ink-muted">
        <span className="flex items-center gap-2">
          <FiCalendar className="w-4 h-4" />
          {item.period}
        </span>
        <span className="flex items-center gap-2">
          <FiMapPin className="w-4 h-4" />
          {item.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-ink-secondary leading-relaxed mb-6">
        {item.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {item.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>
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
      className="bg-bg-card border border-ink-light/10 rounded-lg p-6 hover:border-accent-primary/30 transition-all duration-300"
    >
      <div className="text-sm text-accent-primary font-medium mb-1">{cert.year}</div>
      <div className="text-ink-primary font-medium">{cert.title}</div>
      <div className="text-sm text-ink-muted mt-1">{cert.issuer}</div>
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
            Education
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto mb-8" />
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            My educational background and continuous learning path.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-display font-semibold text-ink-primary mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
