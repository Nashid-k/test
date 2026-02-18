import { useEffect, useRef } from 'react'
import '../../assets/styles/DustParticles.css'

export default function DustParticles() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const count = 40

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div')
            particle.className = 'dust-mote'

            const size = Math.random() * 6 + 2 // Increased size variation
            const startX = Math.random() * 100
            const startY = Math.random() * 100
            const dx = (Math.random() - 0.5) * 100
            const dy = (Math.random() - 0.5) * 80
            const duration = Math.random() * 12 + 8
            const delay = Math.random() * 10
            const opacity = Math.random() * 0.5 + 0.1

            particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}%;
        top: ${startY}%;
        --dx: ${dx}px;
        --dy: ${dy}px;
        animation: dustFloat ${duration}s ${delay}s ease-in-out infinite;
        opacity: 0;
        max-opacity: ${opacity};
        background: ${Math.random() > 0.5 ? 'var(--gold)' : 'var(--umber)'}; /* Umber/ink color */
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Organic shape */
        filter: url(#inkBleed); /* Apply inkBleed filter */
      `
            container.appendChild(particle)
        }

        return () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            }
        }
    }, [])

    return <div ref={containerRef} className="dust-container" />
}
