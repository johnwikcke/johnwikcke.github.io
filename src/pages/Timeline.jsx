import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import RetroCard from '../components/RetroCard';
import GlitchText from '../components/GlitchText';
import { Calendar, Briefcase, Award } from 'lucide-react';

const timelineData = [
    {
        year: '2025',
        title: 'Senior Frontend Engineer',
        company: 'Tech Corp',
        description: 'Leading the frontend team and architecting scalable React applications.',
        icon: <Briefcase />
    },
    {
        year: '2023',
        title: 'Full Stack Developer',
        company: 'Startup Inc',
        description: 'Built MVP for a fintech product using Node.js and React.',
        icon: <Briefcase />
    },
    {
        year: '2021',
        title: 'B.Tech - Computer Science',
        company: 'University of Technology',
        description: 'Graduated with honors. Specialized in AI and Web Technologies.',
        icon: <Award />
    }
];

const Timeline = () => {
    return (
        <Layout title="Journey">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <GlitchText text="CHRONICLES" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }} />

                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'var(--color-primary)',
                            originY: 0
                        }}
                    />

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ marginBottom: 'var(--spacing-lg)', position: 'relative' }}
                        >
                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300, delay: index * 0.2 + 0.2 }}
                                style={{
                                    position: 'absolute',
                                    left: '-2.6rem',
                                    top: '0',
                                    width: '1.2rem',
                                    height: '1.2rem',
                                    background: 'var(--color-bg)',
                                    border: '2px solid var(--color-secondary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ width: '6px', height: '6px', background: 'var(--color-secondary)', borderRadius: '50%' }}
                                />
                            </motion.div>

                            <RetroCard>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                                    <Calendar size={16} />
                                    <span style={{ fontFamily: 'var(--font-display)' }}>{item.year}</span>
                                </div>
                                <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
                                <h4 style={{ margin: '0 0 1rem 0', opacity: 0.8, fontWeight: 'normal' }}>{item.company}</h4>
                                <p style={{ lineHeight: '1.6' }}>{item.description}</p>
                            </RetroCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Timeline;
