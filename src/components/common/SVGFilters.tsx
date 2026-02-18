export default function SVGFilters() {
    return (
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
            <defs>
                {/* Ink Bleed Filter: Warps edges to look like liquid soaking into paper */}
                <filter id="inkBleed">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                    <feGaussianBlur stdDeviation="0.4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Paper Fiber Filter: Adds organic grain and varied absorption */}
                <filter id="paperFiber">
                    <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="5" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="var(--parchment)" surfaceScale="1">
                        <feDistantLight azimuth="45" elevation="60" />
                    </feDiffuseLighting>
                </filter>

                {/* Rough Edge Clip Mask */}
                <clipPath id="roughEdgePath" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 Q0.05,0.02 0.1,0 L0.2,0.03 Q0.25,0.01 0.3,0.04 L0.4,0 Q0.45,0.03 0.5,0.01 L0.6,0.04 Q0.65,0.01 0.7,0.03 L0.8,0 Q0.85,0.02 0.9,0 L1,0.04 L1,0.96 Q0.95,0.98 0.9,1 L0.8,0.97 Q0.75,0.99 0.7,0.96 L0.6,1 Q0.55,0.97 0.5,0.99 L0.4,0.96 Q0.35,0.99 0.3,0.97 L0.2,1 Q0.15,0.97 0.1,0.99 L0,0.96 Z" />
                </clipPath>
            </defs>
        </svg>
    );
}
