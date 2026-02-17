'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiDownload } from 'react-icons/fi';

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
      className="book-section bg-paper relative"
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
          <span className="chapter-number">Chapter Seven</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-ink-sepia mt-6 reading-column">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to collaborate and bring visions to life.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-ink-black mb-8 pb-4 border-b border-ink-light border-opacity-20">
                Contact Information
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
                    className={`book-card group hover:shadow-book transition-all duration-300 ${
                      !item.link ? 'cursor-default' : ''
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all duration-300 shadow-sm">
                        <item.icon className="w-7 h-7 text-accent-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-ink-muted uppercase tracking-widest mb-2 font-medium">
                          {item.label}
                        </div>
                        <div className="text-base font-display font-semibold text-ink-black">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="book-card decorative-border bg-accent-primary bg-opacity-5"
            >
              <div className="text-center py-6">
                <div className="ornamental-divider text-sm mb-4">✦</div>
                <h4 className="text-lg font-display font-bold text-ink-black mb-3">
                  Current Availability
                </h4>
                <p className="text-base text-ink-sepia leading-relaxed">
                  Open to freelance projects and full-time opportunities. 
                  Let's create something amazing together.
                </p>
                <div className="ornamental-divider text-sm mt-4">✦</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="book-card book-spine h-full flex flex-col justify-center">
              <div className="relative z-10 text-center py-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="inline-block mb-8"
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-accent-primary bg-opacity-10 rounded-sm flex items-center justify-center mx-auto shadow-sm">
                      <FiSend className="w-12 h-12 text-accent-primary" />
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute -top-2 -left-2 text-accent-primary text-sm opacity-40">✦</div>
                    <div className="absolute -top-2 -right-2 text-accent-primary text-sm opacity-40">✦</div>
                    <div className="absolute -bottom-2 -left-2 text-accent-primary text-sm opacity-40">✦</div>
                    <div className="absolute -bottom-2 -right-2 text-accent-primary text-sm opacity-40">✦</div>
                  </div>
                </motion.div>

                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-display font-bold text-ink-black mb-6 leading-tight">
                  Ready to Work Together?
                </h3>

                {/* Description */}
                <div className="reading-column mx-auto mb-10">
                  <p className="text-lg text-ink-sepia leading-loose">
                    Whether you have a project in mind, want to discuss opportunities, 
                    or simply wish to connect, I'd be delighted to hear from you. 
                    Every great collaboration begins with a conversation.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-5 max-w-md mx-auto">
                  <a
                    href="mailto:contact@fidhafathima.dev"
                    className="btn-vintage justify-center text-base"
                  >
                    <FiMail className="w-5 h-5" />
                    Send Me an Email
                  </a>
                  <a
                    href="https://linkedin.com/in/fidhafathima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vintage-outline justify-center text-base"
                  >
                    <FiLinkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                  <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-ink-light border-opacity-20"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-bg-card px-4 text-ink-muted tracking-widest">Or</span>
                    </div>
                  </div>
                  <a
                    href="/Fidha_Fathima_Resume.pdf"
                    download="Fidha_Fathima_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vintage-outline justify-center text-base border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-paper-cream"
                  >
                    <FiDownload className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>

                {/* Bottom Ornament */}
                <div className="ornamental-divider text-lg mt-10">✦ ✦ ✦</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 book-card decorative-border bg-accent-primary bg-opacity-5 text-center py-10"
        >
          <p className="font-accent text-lg md:text-xl text-ink-sepia italic reading-column mx-auto leading-loose">
            "Great things in business are never done by one person. 
            They're done by a team of people working together towards a common vision."
          </p>
        </motion.div>

        {/* Final Page Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="page-break mt-24"
        />
      </div>
    </section>
  );
}
