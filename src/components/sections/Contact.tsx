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
    threshold: 0.05,
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-paper-cream"
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
            Chapter Seven
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-ink-black">
            Let's <span className="bg-gradient-to-r from-ink-black via-ink-charcoal to-gold-dark bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-sepia mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to collaborate and bring visions to life.
          </p>
          <div className="w-20 h-0.5 bg-gold-dark/30 mx-auto mt-6" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Info - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-black mb-6 sm:mb-8 pb-4 border-b border-ink-light/20">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link || undefined}
                    target={item.link ? '_blank' : undefined}
                    rel={item.link ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className={`bg-paper-warm border border-ink-light/12 p-4 sm:p-5 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_8px_rgba(26,21,17,0.06),0_8px_24px_rgba(26,21,17,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-gold-dark/25 hover:-translate-y-1 transition-all duration-300 block group ${!item.link ? 'cursor-default' : ''}`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-dark/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-gold-dark/20 transition-all duration-300 shadow-sm">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-dark" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-ink-muted uppercase tracking-widest mb-1 sm:mb-2 font-medium">
                          {item.label}
                        </div>
                        <div className="text-sm sm:text-base font-display font-semibold text-ink-black truncate">
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
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-paper-warm border-2 border-gold-dark/15 p-5 sm:p-6 relative bg-gold-dark/5"
            >
              {/* Decorative border effect */}
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
              
              <div className="text-center py-2 sm:py-4">
                <div className="text-gold-dark text-sm mb-3 sm:mb-4 tracking-[0.5rem]">✦</div>
                <h4 className="text-base sm:text-lg font-display font-bold text-ink-black mb-2 sm:mb-3">
                  Current Availability
                </h4>
                <p className="text-sm sm:text-base text-ink-sepia leading-relaxed">
                  Open to freelance projects and full-time opportunities. 
                  Let's create something amazing together.
                </p>
                <div className="text-gold-dark text-sm mt-3 sm:mt-4 tracking-[0.5rem]">✦</div>
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
            <div className="bg-paper-warm border border-ink-light/12 p-6 sm:p-8 lg:p-10 relative shadow-[0_2px_4px_rgba(26,21,17,0.04),0_4px_12px_rgba(26,21,17,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] h-full flex flex-col justify-center pl-6 sm:pl-8 lg:pl-12">
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-leather-dark via-leather to-leather-dark shadow-[2px_0_4px_rgba(0,0,0,0.2)]" />

              <div className="relative z-10 text-center py-4 sm:py-8 lg:py-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="inline-block mb-6 sm:mb-8"
                >
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-gold-dark/10 rounded-sm flex items-center justify-center mx-auto shadow-sm">
                      <FiSend className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gold-dark" />
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute -top-2 -left-2 text-gold-dark text-xs sm:text-sm opacity-40">✦</div>
                    <div className="absolute -top-2 -right-2 text-gold-dark text-xs sm:text-sm opacity-40">✦</div>
                    <div className="absolute -bottom-2 -left-2 text-gold-dark text-xs sm:text-sm opacity-40">✦</div>
                    <div className="absolute -bottom-2 -right-2 text-gold-dark text-xs sm:text-sm opacity-40">✦</div>
                  </div>
                </motion.div>

                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink-black mb-4 sm:mb-6 leading-tight">
                  Ready to Work Together?
                </h3>

                {/* Description */}
                <div className="max-w-lg mx-auto mb-8 sm:mb-10">
                  <p className="text-base sm:text-lg lg:text-xl text-ink-sepia leading-relaxed sm:leading-loose">
                    Whether you have a project in mind, want to discuss opportunities, 
                    or simply wish to connect, I'd be delighted to hear from you. 
                    Every great collaboration begins with a conversation.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:gap-5 max-w-sm mx-auto">
                  <a
                    href="mailto:contact@fidhafathima.dev"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gold-dark text-paper-cream font-body text-sm sm:text-base font-medium tracking-wide border-2 border-gold-dark rounded-none shadow-[0_2px_4px_rgba(26,21,17,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-gold hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 min-h-[48px]"
                  >
                    <FiMail className="w-5 h-5" />
                    Send Me an Email
                  </a>
                  <a
                    href="https://linkedin.com/in/fidhafathima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-ink-black font-body text-sm sm:text-base font-medium tracking-wide border-2 border-ink-black rounded-none hover:bg-ink-black hover:text-paper-cream hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2)] transition-all duration-300 min-h-[48px]"
                  >
                    <FiLinkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                  <div className="relative my-1 sm:my-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-ink-light/20"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-paper-warm px-4 text-ink-muted tracking-widest">Or</span>
                    </div>
                  </div>
                  <a
                    href="/Fidha_Fathima_Resume.pdf"
                    download="Fidha_Fathima_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-gold-dark font-body text-sm sm:text-base font-medium tracking-wide border-2 border-gold-dark rounded-none hover:bg-gold-dark hover:text-paper-cream hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(26,21,17,0.2)] transition-all duration-300 min-h-[48px]"
                  >
                    <FiDownload className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>

                {/* Bottom Ornament */}
                <div className="text-gold-dark text-lg sm:text-xl mt-8 sm:mt-10 tracking-[0.5rem]">✦ ✦ ✦</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-paper-warm border-2 border-gold-dark/15 p-6 sm:p-8 lg:p-10 relative bg-gold-dark/5 text-center"
        >
          {/* Decorative border effect */}
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-gold-dark/8 pointer-events-none" />
          
          <p className="font-accent text-base sm:text-lg lg:text-xl text-ink-sepia italic max-w-2xl mx-auto leading-relaxed sm:leading-loose">
            "Great things in business are never done by one person. 
            They're done by a team of people working together towards a common vision."
          </p>
        </motion.div>

        {/* Final Page Divider */}
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
