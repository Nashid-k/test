'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    id: 'localfix',
    title: 'LocalFix',
    description:
      'A digital platform for home services connecting service providers with customers. Features secure payments, efficient session management, and a clean, intuitive interface built with the MERN stack.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis'],
    features: [
      'Secure recurring payments with Razorpay',
      'Clean architecture with SOLID principles',
      'Redis caching for optimal performance',
      'Real-time booking system',
    ],
    github: 'https://github.com/fidhafathima/localfix',
    live: '#',
  },
  {
    id: 'artmart',
    title: 'Art Mart',
    description:
      'An ethical marketplace where artists can showcase and sell their artwork. Features fair-trade principles, transparent pricing, and a seamless shopping experience for collectors.',
    tech: ['Node.js', 'Express', 'MongoDB', 'MVC', 'AWS'],
    features: [
      'Fluid cart and wishlist functionality',
      'Comprehensive admin dashboard',
      'Secure user authentication',
      'AWS EC2 deployment',
    ],
    github: 'https://github.com/fidhafathima/artmart',
    live: '#',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my work and skills. Built with Next.js, featuring smooth animations, and a clean design system.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Smooth scroll animations',
      'Fully responsive design',
      'Optimized performance',
      'Accessible interface',
    ],
    github: 'https://github.com/fidhafathima/portfolio',
    live: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="vintage-card p-8 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-accent-primary/10 rounded-lg flex items-center justify-center">
          <FiFolder className="w-7 h-7 text-accent-primary" />
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-ink-secondary hover:text-accent-primary transition-colors duration-300"
            aria-label="View Source Code"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-secondary hover:text-accent-primary transition-colors duration-300"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-display font-semibold text-ink-primary mb-4">
        {project.title}
      </h3>
      <p className="text-ink-secondary leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="border-t border-ink-light/20 pt-6">
        <h4 className="text-sm font-semibold text-ink-primary mb-3">Key Features</h4>
        <ul className="space-y-2">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
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
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto mb-8" />
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and passion for building quality software.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/fidhafathima"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View More on GitHub
            <FiGithub className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
