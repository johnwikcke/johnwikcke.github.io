import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';
import TiltCard from '../components/TiltCard';
import RetroCard from '../components/RetroCard';
import { profile, skills } from '../data/seed';
import { Terminal, Cpu, Code } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Home = () => {
    return (
        <Layout title="Home">
            {/* Hero Section */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                <motion.div
                    className="hero-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xl)',
                        // flexWrap handled by CSS now for better control
                    }}
                >
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <p style={{
                            color: 'var(--color-secondary)',
                            fontFamily: 'var(--font-display)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                        }}>
                            INITIALIZING SYSTEM...
                        </p>
                        <GlitchText text={profile.name} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, lineHeight: 1.2 }} />
                        <h2 style={{ color: 'var(--color-text)', marginTop: 'var(--spacing-sm)', opacity: 0.8, fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                            {profile.title}
                        </h2>
                        <p style={{ maxWidth: '600px', lineHeight: '1.6', marginTop: 'var(--spacing-md)' }}>
                            {profile.bio}
                        </p>
                        <div style={{ marginTop: 'var(--spacing-lg)' }}>
                            <a href="#contact" className="retro-border" style={{
                                padding: '1rem 2rem',
                                background: 'var(--color-primary)',
                                color: '#fff',
                                display: 'inline-block'
                            }}>
                                CONTACT_ME
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        style={{
                            position: 'relative',
                            width: '380px',
                            height: '380px',
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{ width: '100%', height: '100%', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                border: '2px solid var(--color-secondary)',
                                transform: 'translate(15px, 15px)',
                                zIndex: 0
                            }} />
                            <img
                                src="/me.jpeg"
                                alt="Kuldipsinh B. Jadeja"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    border: '2px solid var(--color-primary)',
                                    position: 'relative',
                                    zIndex: 1,
                                    filter: 'grayscale(100%) sepia(20%) contrast(120%) brightness(0.9)',
                                    transition: 'all 0.5s ease'
                                }}
                                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) sepia(0%) contrast(100%) brightness(1)'}
                                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) sepia(20%) contrast(120%) brightness(0.9)'}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* About / Specs Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: 'var(--spacing-xl)' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <Cpu color="var(--color-accent)" />
                    <h2 style={{ margin: 0 }}>PROFILE_OVERVIEW</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                    <TiltCard className="h-full">
                        <RetroCard className="h-full" hoverEffect={false}>
                            <h3 style={{ color: 'var(--color-secondary)' }}>EDUCATION</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-sm)' }}>
                                <Terminal size={20} />
                                <p style={{ margin: 0, fontWeight: 'bold' }}>{profile.education}</p>
                            </div>
                            <p style={{ fontSize: '1rem', opacity: 0.9, marginTop: '0.5rem' }}>
                                Specialized in Computer Science & Engineering.
                            </p>
                        </RetroCard>
                    </TiltCard>

                    <TiltCard className="h-full">
                        <RetroCard className="h-full" hoverEffect={false}>
                            <h3 style={{ color: 'var(--color-accent)' }}>STATUS</h3>
                            <p><strong>Experience:</strong> Early Career</p>
                            <p><strong>Current Focus:</strong> Full Stack Development</p>
                            <p><strong>Based in:</strong> India</p>
                        </RetroCard>
                    </TiltCard>
                </div>
            </motion.section>

            {/* Skills / Equalizer Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <Code color="var(--color-primary)" />
                    <h2 style={{ margin: 0 }}>TECHNICAL_PROFICIENCY</h2>
                </div>

                <TiltCard>
                    <RetroCard hoverEffect={false}>
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            {skills.map((skill) => {
                                // Helper to determine label based on level
                                const getLabel = (level) => {
                                    if (level >= 90) return "EXPERT";
                                    if (level >= 75) return "ADVANCED";
                                    if (level >= 50) return "INTERMEDIATE";
                                    return "BEGINNER";
                                };

                                return (
                                    <div key={skill.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                            <span style={{ fontFamily: 'var(--font-display)' }}>{skill.name}</span>
                                            <span style={{ color: 'var(--color-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                                [{getLabel(skill.level)}]
                                            </span>
                                        </div>
                                        {/* Segmented Bar Visual */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '4px',
                                            height: '12px'
                                        }}>
                                            {[...Array(10)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        flex: 1,
                                                        background: i < (skill.level / 10)
                                                            ? (i > 7 ? 'var(--color-primary)' : 'var(--color-secondary)') // Red for high levels
                                                            : 'var(--color-surface)',
                                                        border: '1px solid var(--color-bg)',
                                                        opacity: i < (skill.level / 10) ? 1 : 0.3
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </RetroCard>
                </TiltCard>
            </motion.section>
        </Layout>
    );
};

export default Home;
