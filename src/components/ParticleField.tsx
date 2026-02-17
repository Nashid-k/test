'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    ax: number;
    ay: number;
    opacity: number;
    hue: number;
}

export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouse);

        // Create particles
        const count = Math.min(100, Math.floor(window.innerWidth / 12));
        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            ax: 0,
            ay: 0,
            opacity: Math.random() * 0.5 + 0.1,
            hue: Math.random() > 0.5 ? 263 : 190,
        }));

        let lastMouse = { x: 0, y: 0 };

        const animate = () => {
            ctx.fillStyle = 'rgba(3, 3, 5, 0.15)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            // Calculate mouse velocity
            const mvx = mouse.x - lastMouse.x;
            const mvy = mouse.y - lastMouse.y;
            lastMouse = { ...mouse };

            particles.forEach((p, i) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Cursor interaction: Push/Pull based on proximity and velocity
                if (dist < 250) {
                    const force = (250 - dist) / 250;
                    p.ax += dx * force * 0.0002 + mvx * force * 0.02;
                    p.ay += dy * force * 0.0002 + mvy * force * 0.02;
                }

                // Friction
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Apply acceleration
                p.vx += p.ax;
                p.vy += p.ay;

                // Reset acceleration
                p.ax *= 0.9;
                p.ay *= 0.9;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
                ctx.fill();

                // Draw connections with limited distance and opacity
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (d < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `hsla(263, 70%, 60%, ${0.05 * (1 - d / 100)})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            style={{ opacity: 0.6 }}
        />
    );
}
