'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'contact@fidhafathima.dev',
    link: 'mailto:contact@fidhafathima.dev',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/fidhafathima',
    link: 'https://github.com/fidhafathima',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fidhafathima',
    link: 'https://linkedin.com/in/fidhafathima',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Kerala, India',
    link: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="contact"
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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-primary mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent-primary/30 mx-auto mb-8" />
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-ink-primary mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link || undefined}
                  target={item.link ? '_blank' : undefined}
                  rel={item.link ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`vintage-card p-6 flex items-center gap-4 group ${
                    item.link ? 'hover:border-accent-primary/30' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-ink-primary font-medium">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 vintage-card p-6"
            >
              <h4 className="text-lg font-display font-semibold text-ink-primary mb-3">
                Availability
              </h4>
              <p className="text-ink-secondary leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities.
                Feel free to reach out, and I'll get back to you as soon as possible.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="vintage-card p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSend className="w-10 h-10 text-accent-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-ink-primary mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-ink-secondary leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@fidhafathima.dev"
                  className="btn-primary justify-center"
                >
                  Send Me an Email
                </a>
                <a
                  href="https://linkedin.com/in/fidhafathima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
