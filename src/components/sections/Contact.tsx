import { motion } from 'framer-motion'
import InkBlot from '../ui/InkBlot'
import '../../assets/styles/Contact.css'

const socialLinks = [
    { label: 'LinkedIn', icon: '🔗', url: 'https://www.linkedin.com/in/fidha-fathima-m-k/' },
    { label: 'GitHub', icon: '⚙', url: 'https://github.com/Nashid-k' },
    { label: 'LeetCode', icon: '📊', url: 'https://leetcode.com/u/FIDHA_FATHIMA_MK/' },
    { label: 'Portfolio', icon: '🌐', url: 'https://portofoliofidha.vercel.app/' },
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
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] as any }}
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
