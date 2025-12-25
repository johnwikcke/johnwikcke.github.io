import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = "" }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // Tilt rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); // Reverse for natural tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    // Glare position
    const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
    const glareOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 0.4]); // Only visible on tilt

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className={className}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full"
            >
                {/* Content */}
                <div style={{ transform: "translateZ(30px)" }}>
                    {children}
                </div>

                {/* Glare effect */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: glareOpacity,
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8), transparent 80%)`,
                        pointerEvents: 'none',
                        zIndex: 10,
                        mixBlendMode: 'overlay',
                        borderRadius: 'inherit'
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
