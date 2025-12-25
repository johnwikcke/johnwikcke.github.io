import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import RetroCard from '../components/RetroCard';
import { projects } from '../data/seed';
import { ArrowLeft, ExternalLink, Github, Terminal as TerminalIcon, Cpu, Layers, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('OVERVIEW');
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <Layout title="Not Found">
                <h1>404: TRACK NOT FOUND</h1>
                <Link to="/projects">Return to Discography</Link>
            </Layout>
        );
    }

    return (
        <Layout title={project.title}>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-lg)' }}>
                <ArrowLeft size={16} /> BACK_TO_LIST
            </Link>

            <RetroCard hoverEffect={false}>
                <div style={{
                    height: '200px', // Reduced from 300px
                    background: `url(${project.image}) center/cover`,
                    marginBottom: 'var(--spacing-md)',
                    borderBottom: '2px solid var(--color-border)',
                    position: 'relative'
                }}>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem 1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                        <h1 className="text-gradient" style={{ fontSize: '2.2rem', margin: 0 }}>{project.title}</h1>
                    </div>
                </div>

                <div style={{ padding: '0 var(--spacing-md) var(--spacing-lg)' }}>

                    {/* Tabs Header */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', overflowX: 'auto' }}>
                        {['OVERVIEW', 'FEATURES', 'TECH_SPECS', 'INSTALL_&_USAGE'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text)',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.1rem',
                                    cursor: 'none',
                                    padding: '0.5rem',
                                    borderBottom: activeTab === tab ? '2px solid var(--color-primary)' : '2px solid transparent',
                                    opacity: activeTab === tab ? 1 : 0.6,
                                    transition: 'all 0.3s'
                                }}
                            >
                                {tab.replace(/_/g, ' ')}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{ minHeight: '200px' }} // Reduced from 300px
                        >
                            {activeTab === 'OVERVIEW' && (
                                <div>
                                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>{project.details}</p>
                                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="retro-border" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'var(--color-primary)', color: 'white' }}>
                                            <Github size={20} /> VIEW_GITHUB
                                        </a>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'FEATURES' && (
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                    {project.features?.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                                            <Play size={20} color="var(--color-secondary)" />
                                            <span style={{ fontSize: '1.1rem' }}>{feature}</span>
                                        </li>
                                    )) || <p>No features listed.</p>}
                                </ul>
                            )}

                            {activeTab === 'TECH_SPECS' && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    {project.stackDetails?.map((stack, i) => (
                                        <div key={i} style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '8px' }}>
                                            <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Layers size={18} /> {stack.category}
                                            </h4>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {stack.items.map(item => (
                                                    <span key={item} style={{ fontSize: '0.9rem', padding: '0.2rem 0.6rem', background: 'var(--color-surface)', borderRadius: '4px' }}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )) || (
                                            // Fallback for old data structure
                                            project.tech.map(t => <span key={t} style={{ padding: '0.5rem', border: '1px solid var(--color-secondary)' }}>{t}</span>)
                                        )}
                                </div>
                            )}

                            {activeTab === 'INSTALL_&_USAGE' && (
                                <div style={{ display: 'grid', gap: '2rem' }}>
                                    {project.installation && (
                                        <div>
                                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <TerminalIcon size={20} /> INSTALLATION
                                            </h3>
                                            <div style={{ background: '#000', padding: '1.5rem', borderRadius: '8px', fontFamily: 'monospace', border: '1px solid var(--color-border)' }}>
                                                {project.installation.map((line, i) => (
                                                    <div key={i} style={{ marginBottom: '0.5rem', color: line.startsWith('git') || line.startsWith('pip') || line.startsWith('python') ? 'var(--color-accent)' : '#fff' }}>
                                                        <span style={{ color: '#555', marginRight: '1rem' }}>$</span>{line}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.usage && (
                                        <div>
                                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Cpu size={20} /> USAGE
                                            </h3>
                                            <p style={{ lineHeight: '1.6', fontSize: '1.1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                                                {project.usage}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </RetroCard>
        </Layout>
    );
};

export default ProjectDetails;
