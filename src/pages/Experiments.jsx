import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import RetroCard from '../components/RetroCard';
import GlitchText from '../components/GlitchText';
import { experiments } from '../data/seed';
import { AlertTriangle } from 'lucide-react';

const Experiments = () => {
    return (
        <Layout title="B-Sides">
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <GlitchText text="B-SIDES" style={{ fontSize: '3rem' }} />
                    <motion.div
                        animate={{ opacity: [1, 0.5, 1, 0.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                        <AlertTriangle color="var(--color-primary)" size={32} />
                    </motion.div>
                </div>
                <p style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)', marginBottom: 'var(--spacing-lg)' }}>
                    WARNING: UNSTABLE EXPERIMENTS & FAILED PROTOTYPES
                </p>

                <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                    {experiments.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(255, 42, 109, 0.1)' }}
                        >
                            <RetroCard style={{ borderColor: 'var(--color-primary)', borderStyle: 'dashed' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                                        {`> ${exp.title}`}
                                    </h3>
                                    <span style={{
                                        background: 'var(--color-primary)',
                                        color: '#000',
                                        padding: '2px 8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        animation: 'pulse 2s infinite'
                                    }}>
                                        {exp.status}
                                    </span>
                                </div>
                                <p style={{ opacity: 0.8, margin: '1rem 0', fontFamily: 'monospace' }}>
                                    {`// ${exp.description}`}
                                </p>
                                <pre style={{
                                    background: '#0a0a0a',
                                    padding: '1rem',
                                    overflowX: 'auto',
                                    border: '1px solid var(--color-text)',
                                    color: 'var(--color-secondary)',
                                    fontSize: '0.9rem',
                                    position: 'relative'
                                }}>
                                    <code>{exp.codeSnippet}</code>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'rgba(255,255,255,0.1)',
                                        animation: 'scanline 2s linear infinite'
                                    }} />
                                </pre>
                            </RetroCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Experiments;
