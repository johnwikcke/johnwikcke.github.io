import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';
import { Mail, Send, Github, Linkedin, Twitter, Wifi, Terminal } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate network request
        setTimeout(() => {
            setStatus('sent');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <Layout title="Uplink">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-lg)' }}>
                    <Terminal size={40} color="var(--color-primary)" />
                    <GlitchText text="COMMUNICATION_STATION" style={{ fontSize: '2.5rem', margin: 0 }} />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        background: 'rgba(10, 10, 18, 0.8)',
                        border: '2px solid var(--color-primary)',
                        borderRadius: '10px',
                        padding: '2rem',
                        position: 'relative',
                        boxShadow: '0 0 20px rgba(255, 42, 109, 0.2)'
                    }}
                >
                    {/* Decorative Header Bar */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '30px',
                        background: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem',
                        justifyContent: 'space-between',
                        color: '#000',
                        fontWeight: 'bold',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.8rem'
                    }}>
                        <span>TERMINAL_ID: KBJ-9000</span>
                        <span>STATUS: ONLINE</span>
                    </div>

                    {/* Left Column: Transmission Form */}
                    <div style={{ marginTop: '1rem' }}>
                        <h3 style={{
                            color: 'var(--color-secondary)',
                            borderBottom: '1px dashed var(--color-secondary)',
                            paddingBottom: '0.5rem',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Send size={18} /> SEND_TRANSMISSION
                        </h3>

                        {status === 'sent' ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    height: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    border: '1px dashed var(--color-primary)',
                                    background: 'rgba(255, 42, 109, 0.05)'
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.5 }}
                                    style={{ color: 'var(--color-primary)', fontSize: '4rem', marginBottom: '1rem' }}
                                >
                                    ✓
                                </motion.div>
                                <h3 style={{ fontFamily: 'var(--font-display)', margin: 0 }}>PACKET_SENT</h3>
                                <p style={{ opacity: 0.7 }}>Awaiting response...</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                        &gt; ENTER_CODENAME:
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: '#050505',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-primary)',
                                            fontFamily: 'monospace',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="_"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                        &gt; TARGET_FREQUENCY (EMAIL):
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: '#050505',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-primary)',
                                            fontFamily: 'monospace',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="_"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                        &gt; DATA_PAYLOAD:
                                    </label>
                                    <textarea
                                        rows="5"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: '#050505',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-primary)',
                                            fontFamily: 'monospace',
                                            fontSize: '1rem',
                                            resize: 'vertical',
                                            outline: 'none'
                                        }}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        placeholder="_"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="retro-border"
                                    style={{
                                        padding: '1rem',
                                        background: status === 'sending' ? '#333' : 'var(--color-primary)',
                                        color: status === 'sending' ? '#888' : 'white',
                                        border: 'none',
                                        cursor: status === 'sending' ? 'wait' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {status === 'sending' ? 'UPLOADING...' : 'INITIATE_UPLOAD'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Social Frequencies */}
                    <div style={{ marginTop: '1rem', borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
                        <h3 style={{
                            color: 'var(--color-secondary)',
                            borderBottom: '1px dashed var(--color-secondary)',
                            paddingBottom: '0.5rem',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Wifi size={18} /> OPEN_FREQUENCIES
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: <Mail />, label: 'Email', value: 'hello@example.com', link: 'mailto:hello@example.com' },
                                { icon: <Github />, label: 'GitHub', value: '@kuldip-jadeja', link: '#' },
                                { icon: <Linkedin />, label: 'LinkedIn', value: 'in/kuldip-jadeja', link: '#' },
                                { icon: <Twitter />, label: 'Twitter', value: '@kuldip_dev', link: '#' }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        color: 'var(--color-text)',
                                        padding: '0.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid transparent'
                                    }}
                                >
                                    <div style={{
                                        background: 'var(--color-bg)',
                                        padding: '0.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                        {React.cloneElement(item.icon, { color: 'var(--color-secondary)' })}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.6, fontFamily: 'var(--font-display)' }}>{item.label}</div>
                                        <div style={{ fontSize: '1.1rem' }}>{item.value}</div>
                                    </div>
                                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} style={{
                                                width: '4px',
                                                height: `${i * 6}px`,
                                                background: 'var(--color-primary)',
                                                opacity: 0.5 + (i * 0.2)
                                            }} />
                                        ))}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            padding: '1rem',
                            background: 'rgba(0, 240, 255, 0.1)',
                            border: '1px solid var(--color-secondary)',
                            fontSize: '0.9rem',
                            lineHeight: '1.6'
                        }}>
                            <strong style={{ color: 'var(--color-secondary)' }}>SYSTEM_NOTE:</strong><br />
                            Open for freelance contracts and collaborative missions. Response time typically &lt; 24 hours.
                        </div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Contact;
