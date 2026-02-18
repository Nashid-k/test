import { motion } from 'framer-motion'
import InkBlot from '../ui/InkBlot'
import '../../assets/styles/Contact.css'

const socialLinks = [
    {
        label: 'LinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                {/* Sketchy overlay */}
                <path d="M2 9 L6 21 M2 21 L6 9" opacity="0.2" strokeWidth="0.5" />
            </svg>
        ),
        url: 'https://www.linkedin.com/in/fidha-fathima-m/'
    },
    {
        label: 'GitHub',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                {/* Sketchy overlay */}
                <path d="M12 2 L12 22 M2 12 L22 12" opacity="0.1" strokeWidth="0.5" />
            </svg>
        ),
        url: 'https://github.com/fidhafathima-m'
    },
    {
        label: 'Instagram',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                {/* Sketchy spirals */}
                <circle cx="12" cy="12" r="5" strokeDasharray="2 2" opacity="0.3" />
            </svg>
        ),
        url: 'https://www.instagram.com/_fidha.m/'
    },
    {
        label: 'Pinterest',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="8" x2="12" y2="22" />
                <path d="M12 22c-1.5-4-3-6-3-9a3 3 0 1 1 6 0c0 3-1.5 5-3 9z" />
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                {/* Center P sketch */}
                <path d="M12 8 a2 2 0 1 1 0 4 h-2 v-4 z" fill="currentColor" opacity="0.2" />
            </svg>
        ),
        url: 'https://in.pinterest.com/fidhumusthafa/'
    },
]

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="deckle-edge" />

            <div className="ornament">
                <span className="ornament-symbol">✉</span>
            </div>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{ filter: 'url(#inkBleed)' }}
            >
                A Sealed Letter
            </motion.h2>

            <motion.p
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Correspondence Welcome
            </motion.p>

            <motion.div
                className="envelope ink-filter"
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] as const }}
            >
                <InkBlot rotation={180} scale={1.5} position={{ top: '-10%', left: '50%' }} opacity={0.2} />
                <div className="envelope-flap" />
                <div className="envelope-body rough-edge">
                    <div className="letter-content">
                        <p className="letter-greeting">Dear Visitor,</p>
                        <p className="letter-text">
                            I would be delighted to hear from you regarding any opportunity,
                            collaboration, or simply a conversation about the craft of web development.
                            Please do not hesitate to reach out through any of the channels below.
                        </p>

                        <div className="letter-details">
                            <div className="letter-detail-item">
                                <span className="detail-icon">📧</span>
                                <a href="mailto:fidhumusthafa3549@gmail.com">fidhumusthafa3549@gmail.com</a>
                            </div>
                            <div className="letter-detail-item">
                                <span className="detail-icon">📱</span>
                                <a href="tel:+919778728951">+91 9778728951</a>
                            </div>
                            <div className="letter-detail-item">
                                <span className="detail-icon">📍</span>
                                <span>Malappuram, Kerala, India</span>
                            </div>
                        </div>

                        <p className="letter-closing">Yours sincerely,</p>
                        <div style={{ position: 'relative', display: 'inline-block', float: 'right' }}>
                            <p className="letter-signature" style={{ filter: 'url(#inkBleed)' }}>Fidha Fathima M</p>
                            <motion.span
                                style={{ position: 'absolute', bottom: -15, left: -20, fontSize: '1.5rem', color: 'var(--crimson)' }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 0.6, scale: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                ♥
                            </motion.span>
                        </div>
                    </div>

                    <div className="social-seals">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-seal"
                                initial={{ scale: 0, rotate: -30 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6 + i * 0.15,
                                    duration: 0.5,
                                    ease: [0.34, 1.56, 0.64, 1],
                                }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <span className="seal-icon">{link.icon}</span>
                                <span className="seal-label">{link.label}</span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="finis-flourish">
                        <span>— ❦ Finis ❦ —</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
