import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text, as: Tag = 'h1', className = '' }) => {
    return (
        <Tag className={`glitch-wrapper ${className}`} data-text={text}>
            {text}
        </Tag>
    );
};

export default GlitchText;
