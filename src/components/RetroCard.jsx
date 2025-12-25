import React from 'react';
import { motion } from 'framer-motion';
import '../styles/global.css';

const RetroCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            className={`retro-border ${className}`}
            style={{
                background: 'var(--color-surface)',
                padding: 'var(--spacing-md)',
                position: 'relative',
            }}
            whileHover={hoverEffect ? { scale: 1.02 } : {}}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {children}
            {/* Decorative Corner */}
            <div style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '10px',
                height: '10px',
                background: 'var(--color-primary)',
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
            }} />
        </motion.div>
    );
};

export default RetroCard;
