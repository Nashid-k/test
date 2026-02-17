'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiBookOpen } from 'react-icons/fi';

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
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="bg-paper-warm border border-ink-light/12 p-5 sm:p-6 lg:p-8 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 transition-all duration-500 h-full flex flex-col overflow-hidden"
    >
      {/* Folded corner effect */}
      <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-0 border-r-[32px] sm:border-r-[40px] border-b-[32px] sm:border-b-[40px] border-l-0 border-t-transparent border-r-page-edge border-b-transparent border-l-transparent drop-shadow-[-1px_1px_2px_rgba(0,0,0,0.1)]" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with Icon and Links */}
        <div className="flex items-start justify-between mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-ink-light/20">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
              <FiBookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gold-dark" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gold-dark uppercase tracking-widest font-medium mb-1">
                {project.category}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-ink-black truncate">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-sepia hover:text-gold-dark transition-colors duration-300 hover:scale-110 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="View Source Code"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ink-sepia hover:text-gold-dark transition-colors duration-300 hover:scale-110 min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="View Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-sepia leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-ink-black uppercase tracking-widest mb-3 sm:mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm font-medium text-gold-dark bg-gold-dark/10 px-2.5 sm:px-3 py-1.5 rounded-sm border border-gold-dark/20 hover:bg-gold-dark/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <h4 className="text-xs sm:text-sm font-semibold text-ink-black uppercase tracking-widest mb-3 sm:mb-4">
            Key Features
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-ink-sepia">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-dark mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Ornament */}
        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-ink-light/20 text-center">
          <div className="text-gold-dark text-sm opacity-40">✦</div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      ref={ref}
      id="projects"
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
            Chapter Five
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Featured <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-sepia mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            A curated selection of projects that showcase my skills, creativity, and passion 
            for building quality software that solves real-world problems.
          </p>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-block px-4">
            <div className="text-gold-dark text-lg sm:text-xl mb-6 sm:mb-8 tracking-[0.5rem]">✦ ✦ ✦</div>
            <p className="text-ink-sepia mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl">
              Explore more of my work on GitHub
            </p>
            <a
              href="https://github.com/fidhafathima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gold-dark text-paper-cream font-body text-sm sm:text-base font-medium tracking-wide border-2 border-gold-dark rounded-none shadow-[0_2px_4px_rgba(26,21,17,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-gold hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 min-h-[44px]"
            >
              <FiGithub className="w-5 h-5" />
              Visit GitHub Profile
            </a>
            <div className="text-gold-dark text-lg sm:text-xl mt-6 sm:mt-8 tracking-[0.5rem]">✦ ✦ ✦</div>
          </div>
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
