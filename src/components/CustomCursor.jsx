import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: mousePosition.x,
                y: mousePosition.y,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
            animate={{
                scale: isHovering ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 800, damping: 35 }}
        >
            {/* Offset SVG slightly so stroke doesn't clip at 0,0 */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translate(-2px, -2px)' }}>
                {isHovering ? (
                    // Pixel Hand Cursor - Tip at 2,2 matches translate
                    <path
                        d="M2 2 L6 2 L6 10 L12 10 L12 24 L0 24 L0 14 L2 14 L2 2 Z M12 14 L16 14 L16 20 L12 20 Z"
                        fill="var(--color-primary)"
                        stroke="var(--color-secondary)"
                        strokeWidth="2"
                    />
                ) : (
                    // Standard Arrow Cursor - Tip near 0,0
                    <path
                        d="M2 2 L12 26 L16 16 L26 12 L2 2 Z"
                        fill="var(--color-primary)"
                        stroke="var(--color-secondary)"
                        strokeWidth="2"
                    />
                )}
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
