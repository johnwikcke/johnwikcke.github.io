import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootScreen = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    const bootText = [
        "INITIALIZING K.B.J KERNEL...",
        "LOADING MEMORY MODULES... OK",
        "MOUNTING FILE SYSTEM... OK",
        "CHECKING PERIPHERALS... OK",
        "LOADING RETRO_UI.SYS...",
        "ESTABLISHING UPLINK...",
        "SYSTEM READY."
    ];

    useEffect(() => {
        let lineIndex = 0;
        const textInterval = setInterval(() => {
            if (lineIndex < bootText.length) {
                setLines(prev => [...prev, bootText[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 400);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                padding: '2rem'
            }}
        >
            <div style={{ width: '100%', maxWidth: '600px' }}>
                <div style={{ marginBottom: '2rem', minHeight: '200px' }}>
                    {lines.map((line, i) => (
                        <div key={i} style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: '#555', marginRight: '1rem' }}>
                                {`[${(i * 0.124).toFixed(3)}]`}
                            </span>
                            {line}
                        </div>
                    ))}
                </div>

                <div style={{
                    width: '100%',
                    height: '4px',
                    background: '#333',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        style={{
                            height: '100%',
                            background: 'var(--color-primary)',
                            width: `${progress}%`
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                    <span>LOADING...</span>
                    <span>{progress}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default BootScreen;
