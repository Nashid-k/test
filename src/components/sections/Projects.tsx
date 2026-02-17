'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder, FiBookOpen } from 'react-icons/fi';

const projects = [
  {
    id: 'localfix',
    title: 'LocalFix',
    category: 'Full-Stack Application',
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
    category: 'E-Commerce Platform',
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
    category: 'Web Application',
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
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="book-card folded-corner hover:shadow-book transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative z-10">
        {/* Header with Icon and Links */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-ink-light border-opacity-20">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
              <FiBookOpen className="w-8 h-8 text-accent-primary" />
            </div>
            <div>
              <div className="text-xs text-accent-primary uppercase tracking-widest font-medium mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-ink-black">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-sepia hover:text-accent-primary transition-colors duration-300 hover:scale-110"
              aria-label="View Source Code"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ink-sepia hover:text-accent-primary transition-colors duration-300 hover:scale-110"
                aria-label="View Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-sepia leading-loose mb-8 text-base">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-ink-black uppercase tracking-widest mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-accent-primary bg-accent-primary bg-opacity-10 px-4 py-2 rounded-sm border border-accent-primary border-opacity-20 hover:bg-opacity-20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <h4 className="text-sm font-semibold text-ink-black uppercase tracking-widest mb-4">
            Key Features
          </h4>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-ink-sepia">
                <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Ornament */}
        <div className="mt-8 pt-6 border-t border-ink-light border-opacity-20 text-center">
          <div className="text-accent-primary text-sm opacity-40">✦</div>
        </div>
      </div>
    </motion.article>
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
          <span className="chapter-number">Chapter Five</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-ink-sepia mt-6 reading-column">
            A curated selection of projects that showcase my skills, creativity, and passion 
            for building quality software that solves real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <div className="ornamental-divider text-lg mb-8">✦ ✦ ✦</div>
            <p className="text-ink-sepia mb-8 text-lg">
              Explore more of my work on GitHub
            </p>
            <a
              href="https://github.com/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vintage inline-flex items-center gap-3"
            >
              <FiGithub className="w-5 h-5" />
              Visit GitHub Profile
            </a>
            <div className="ornamental-divider text-lg mt-8">✦ ✦ ✦</div>
          </div>
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
