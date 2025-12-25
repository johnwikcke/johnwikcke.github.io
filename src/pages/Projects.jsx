import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import RetroCard from '../components/RetroCard';
import GlitchText from '../components/GlitchText';
import { projects } from '../data/seed';
import { Disc } from 'lucide-react';

const Projects = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Layout title="Projects">
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-lg)' }}>
                    <GlitchText text="DISCOGRAPHY" style={{ fontSize: '3rem', margin: 0 }} />
                    <div style={{ fontFamily: 'var(--font-display)', color: 'var(--color-secondary)', fontSize: '0.9rem' }}>
                        [SELECT_TRACK]
                    </div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={item}>
                            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                                <RetroCard className="project-card" style={{ height: '100%', transition: 'transform 0.2s' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div style={{
                                            height: '200px',
                                            background: `url(${project.image}) center/cover`,
                                            marginBottom: 'var(--spacing-md)',
                                            border: '1px solid var(--color-border)',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8))'
                                            }} />
                                            <motion.div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    right: '10px',
                                                    background: 'rgba(0,0,0,0.8)',
                                                    padding: '8px',
                                                    borderRadius: '50%',
                                                    border: '1px solid var(--color-primary)'
                                                }}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Disc color="var(--color-primary)" size={24} />
                                            </motion.div>
                                        </div>
                                        <h3 style={{ color: 'var(--color-secondary)', margin: '0 0 var(--spacing-sm) 0', fontSize: '1.4rem' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: 'var(--spacing-md)', flex: 1, lineHeight: '1.5' }}>
                                            {project.description}
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                                            {project.tech.map(t => (
                                                <span key={t} style={{
                                                    fontSize: '0.7rem',
                                                    padding: '4px 8px',
                                                    border: '1px solid var(--color-text)',
                                                    fontFamily: 'var(--font-display)',
                                                    background: 'rgba(255,255,255,0.05)'
                                                }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </RetroCard>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Layout>
    );
};

export default Projects;
