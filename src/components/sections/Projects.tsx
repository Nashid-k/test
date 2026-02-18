import { motion } from 'framer-motion'
import { useRef } from 'react'
import InkBlot from '../ui/InkBlot'
import '../../assets/styles/Projects.css'

const projects = [
    {
        title: 'LocalFix',
        subtitle: 'Service Providing SaaS Application',
        description: 'A multi-tenant SaaS platform connecting users with local home services through an intuitive, scalable interface.',
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Inversify'],
        highlights: [
            'Architected multi-tenant SaaS platform for home services',
            'Integrated Razorpay for subscription tier management',
            'Implemented Repository pattern & Dependency Injection (SOLID)',
            'Optimized auth with Redis caching, cutting latency by 30%',
            'Achieved 95% error capture via centralized handling',
        ],
        github: 'https://github.com/Nashid-k',
        live: '#',
    },
    {
        title: 'Art Mart',
        subtitle: 'Ecommerce Application',
        description: 'Full-stack platform for art supplies, featuring a modular architecture and heavy focus on UX performance.',
        tech: ['Node.js', 'Express', 'MongoDB', 'MVC', 'EJS', 'Cloudinary', 'AWS EC2'],
        highlights: [
            'Developed full-stack MVC platform with role-based auth',
            'Reduced page reloads by 40% via Fetch API integration',
            'Built admin dashboard with specialized data processing',
            'Deployed on AWS EC2 using Nginx & PM2 persistence',
            'Optimized 2,000+ images via Cloudinary for 30% faster loads',
        ],
        github: 'https://github.com/Nashid-k',
        live: '#',
    },
]

export default function Projects() {
    const ref = useRef(null)

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="deckle-edge" />

            <div className="ornament">
                <span className="ornament-symbol">✠</span>
            </div>

            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                A Folio of Works
            </motion.h2>

            <motion.p
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Notable Achievements & Commissions
            </motion.p>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="project-folio"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: index * 0.2, ease: [0.7, 0, 0.3, 1] as any }}
                    >
                        <div className="folio-spread rough-edge ink-filter">
                            <InkBlot rotation={45} scale={1.2} position={{ top: '10%', left: '5%' }} opacity={0.1} />
                            <div className="folio-left">
                                <span className="folio-number">Folio {index + 1}</span>
                                <h3 className="folio-title" style={{ filter: 'url(#inkBleed)' }}>{project.title}</h3>
                                <p className="folio-tagline">{project.subtitle}</p>
                                <p className="folio-description">{project.description}</p>
                                <div className="folio-links">
                                    <a href={project.github} className="folio-link" target="_blank" rel="noopener noreferrer">
                                        <span>⚙</span> GitHub
                                    </a>
                                    <a href={project.live} className="folio-link" target="_blank" rel="noopener noreferrer">
                                        <span>🌐</span> View Live
                                    </a>
                                </div>
                            </div>

                            <div className="folio-spine" />

                            <div className="folio-right">
                                <h4 className="folio-section-label">Key Highlights</h4>
                                <ul className="folio-highlights">
                                    {project.highlights.map((h, i) => (
                                        <li key={i}>
                                            <span className="quill-bullet">✎</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="folio-section-label">Tools & Techniques</h4>
                                <div className="folio-tech-seals">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-seal">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
