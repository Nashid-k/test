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
    title: 'Frontend',
    icon: FiLayout,
    color: '#61DAFB',
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
    title: 'Backend',
    icon: FiServer,
    color: '#68A063',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 80 },
      { name: 'REST APIs', icon: FiServer, level: 85 },
    ]
  },
  {
    id: 'database',
    title: 'Database',
    icon: FiDatabase,
    color: '#47A248',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Mongoose', icon: FiDatabase, level: 80 },
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: FiTool,
    color: '#FF6B6B',
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
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto mb-8" />
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="vintage-card p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-ink-primary">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ink-muted">
                    {category.skills.length} {category.skills.length === 1 ? 'technology' : 'technologies'}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-ink-secondary group-hover:text-accent-primary transition-colors duration-300" />
                        <span className="font-medium text-ink-primary">{skill.name}</span>
                      </div>
                      <span className="text-sm text-ink-muted">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-ink-light/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 vintage-card p-8 text-center"
        >
          <p className="text-ink-secondary leading-relaxed">
            I'm always exploring new technologies and improving my skills.
            Currently diving deeper into <span className="text-accent-primary font-medium">TypeScript</span>,
            <span className="text-accent-primary font-medium"> Next.js 14</span>, and
            <span className="text-accent-primary font-medium"> modern testing frameworks</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
