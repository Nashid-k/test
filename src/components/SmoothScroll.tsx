'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Skip Lenis on mobile for better performance
        if (isMobile) {
            window.scrollTo(0, 0);
            return () => window.removeEventListener('resize', checkMobile);
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Initial scroll to top on refresh
        window.scrollTo(0, 0);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    return <div className="relative">{children}</div>;
}
