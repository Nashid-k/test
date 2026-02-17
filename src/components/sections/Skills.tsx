'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPostman,
  SiGit,
  SiJavascript,
} from 'react-icons/si';
import { FiLayout, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FiLayout,
    description: 'Building responsive and interactive user interfaces',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FiServer,
    description: 'Creating robust server-side applications',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 80 },
      { name: 'REST APIs', icon: FiServer, level: 85 },
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: FiDatabase,
    description: 'Designing and managing data storage solutions',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Mongoose', icon: FiDatabase, level: 80 },
    ]
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: FiTool,
    description: 'Essential tools for modern development',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'Postman', icon: SiPostman, level: 80 },
      { name: 'VS Code', icon: FiTool, level: 90 },
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="book-section bg-paper relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="book-container relative z-10">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="chapter-header"
        >
          <span className="chapter-number">Chapter Four</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-ink-sepia mt-6 reading-column">
            Technologies and tools I use to bring ideas to life with precision and creativity.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="book-card book-spine hover:shadow-book transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-start gap-5 mb-8 pb-6 border-b border-ink-light border-opacity-20">
                <div className="w-16 h-16 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  <category.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-ink-black mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ink-sepia">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08, duration: 0.4 }}
                    className="group"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-ink-sepia group-hover:text-accent-primary transition-colors duration-300" />
                        <span className="font-display text-lg font-semibold text-ink-black">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-heading text-sm text-ink-muted italic">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar - Vintage Style */}
                    <div className="relative h-3 bg-parchment-light rounded-sm overflow-hidden border border-ink-light border-opacity-20 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.3, 
                          duration: 1, 
                          ease: "easeOut" 
                        }}
                        className="h-full bg-gradient-to-r from-accent-primary to-gold-light relative"
                      >
                        {/* Subtle texture on progress bar */}
                        <div className="absolute inset-0 opacity-20" 
                          style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="mt-8 pt-6 border-t border-ink-light border-opacity-20 text-center">
                <span className="text-xs text-ink-muted uppercase tracking-widest">
                  {category.skills.length} {category.skills.length === 1 ? 'Technology' : 'Technologies'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 book-card decorative-border bg-accent-primary bg-opacity-5"
        >
          <div className="text-center py-8">
            <div className="ornamental-divider text-lg mb-6">✦ ✦ ✦</div>
            <h3 className="text-2xl font-display font-semibold text-ink-black mb-4">
              Continuous Learning
            </h3>
            <div className="reading-column">
              <p className="text-lg text-ink-sepia leading-relaxed mb-4">
                I'm always exploring new technologies and improving my craft.
                Currently diving deeper into <span className="text-accent-primary font-semibold">TypeScript patterns</span>,
                <span className="text-accent-primary font-semibold"> Next.js 14 features</span>, and
                <span className="text-accent-primary font-semibold"> modern testing frameworks</span>.
              </p>
              <p className="text-sm text-ink-faded italic font-accent">
                The journey of learning never ends, and each day brings new discoveries.
              </p>
            </div>
            <div className="ornamental-divider text-lg mt-6">✦ ✦ ✦</div>
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
