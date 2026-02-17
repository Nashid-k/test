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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-paper-cream"
    >
      {/* Background Pattern */}
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
            Chapter Four
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Technical <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-sepia mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life with precision and creativity.
          </p>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="bg-paper-warm border border-ink-light/12 p-5 sm:p-6 lg:p-8 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 transition-all duration-300 pl-6 sm:pl-8 lg:pl-10"
            >
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-leather-dark via-leather to-leather-dark shadow-[2px_0_4px_rgba(0,0,0,0.2)]" />

              {/* Category Header */}
              <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-ink-light/20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gold-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-ink-black mb-1 sm:mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ink-sepia">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08, duration: 0.4 }}
                    className="group"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ink-sepia group-hover:text-gold-dark transition-colors duration-300 flex-shrink-0" />
                        <span className="font-display text-base sm:text-lg font-semibold text-ink-black truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-heading text-sm text-ink-muted italic flex-shrink-0 ml-2">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar - Vintage Style */}
                    <div className="relative h-2.5 sm:h-3 bg-parchment-light rounded-sm overflow-hidden border border-ink-light/20 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.3, 
                          duration: 1, 
                          ease: "easeOut" 
                        }}
                        className="h-full bg-gradient-to-r from-gold-dark to-gold-light relative"
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
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-ink-light/20 text-center">
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
          className="mt-10 sm:mt-14 lg:mt-16 bg-paper-warm border-2 border-gold-dark/15 p-6 sm:p-8 lg:p-10 relative bg-gold-dark/5"
        >
          {/* Decorative border effect */}
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
          
          <div className="text-center py-2 sm:py-4">
            <div className="text-gold-dark text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 tracking-[0.5rem]">✦ ✦ ✦</div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-ink-black mb-3 sm:mb-4">
              Continuous Learning
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-ink-sepia leading-relaxed mb-4">
                I'm always exploring new technologies and improving my craft.
                Currently diving deeper into <span className="text-gold-dark font-semibold">TypeScript patterns</span>,
                <span className="text-gold-dark font-semibold"> Next.js 14 features</span>, and
                <span className="text-gold-dark font-semibold"> modern testing frameworks</span>.
              </p>
              <p className="text-sm sm:text-base text-ink-faded italic font-accent">
                The journey of learning never ends, and each day brings new discoveries.
              </p>
            </div>
            <div className="text-gold-dark text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 tracking-[0.5rem]">✦ ✦ ✦</div>
          </div>
        </motion.div>

        {/* Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 relative h-0.5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink-light/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper-cream px-4 text-gold-dark text-sm">
            ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
