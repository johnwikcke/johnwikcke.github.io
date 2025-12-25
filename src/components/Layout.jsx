import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';
import Magnetic from './Magnetic';
import '../styles/global.css';

const Layout = ({ children, title = "Portfolio" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    return (
        <>
            <Helmet>
                <title>{title} | Kuldipsinh B. Jadeja</title>
                <meta name="description" content="Retro Portfolio of Kuldipsinh B. Jadeja - Creative Developer" />
            </Helmet>

            <InteractiveBackground />
            <div className="scanlines" />

            <motion.nav
                initial="top"
                animate={isScrolled ? "scrolled" : "top"}
                variants={{
                    top: {
                        padding: "2rem",
                        backgroundColor: "rgba(10, 10, 18, 0)",
                        backdropFilter: "blur(0px)",
                        borderBottom: "1px solid transparent",
                        boxShadow: "0 0 0 rgba(0,0,0,0)"
                    },
                    scrolled: {
                        padding: "0.8rem 2rem",
                        backgroundColor: "rgba(10, 10, 18, 0.9)",
                        backdropFilter: "blur(12px)",
                        borderBottom: "1px solid var(--color-border)",
                        boxShadow: "0 4px 30px rgba(0,0,0,0.5)"
                    }
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    width: '100%'
                }}
            >
                <motion.div
                    variants={{
                        top: { scale: 1 },
                        scrolled: { scale: 0.8 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: 'center' }}
                >
                    <Link to="/" style={{
                        display: 'block',
                        textDecoration: 'none'
                    }}>
                        <img
                            src="/logo.png"
                            alt="KBJ.SYS"
                            style={{
                                height: '50px',
                                width: 'auto',
                                mixBlendMode: 'screen',
                                filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.3))'
                            }}
                        />
                    </Link>
                </motion.div>

                <div className="desktop-nav">
                    <motion.div
                        style={{ display: 'flex', justifyContent: 'center' }}
                        variants={{
                            top: { gap: "var(--spacing-xl)" },
                            scrolled: { gap: "var(--spacing-lg)" }
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {['HOME', 'PROJECTS', 'JOURNEY', 'B-SIDES', 'CONTACT'].map((item) => (
                            <Magnetic key={item}>
                                <Link
                                    to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        position: 'relative',
                                        color: 'var(--color-text)',
                                        textDecoration: 'none',
                                        display: 'block',
                                        padding: '0.5rem'
                                    }}
                                >
                                    <motion.span
                                        animate={{ opacity: isScrolled ? 0.9 : 1 }}
                                        whileHover={{ color: 'var(--color-primary)' }}
                                        style={{ display: 'block' }}
                                    >
                                        {item}
                                    </motion.span>
                                </Link>
                            </Magnetic>
                        ))}
                    </motion.div>
                </div>

                <div className="mobile-nav-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)' }}>
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                <div /> {/* Spacer for grid centering */}
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '80px',
                            left: 0,
                            right: 0,
                            background: 'rgba(13, 13, 20, 0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            borderBottom: '1px solid var(--color-primary)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center'
                        }}
                    >
                        {['HOME', 'PROJECTS', 'JOURNEY', 'B-SIDES', 'CONTACT'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-text)',
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-display)'
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
                {children}
            </main>

            <footer style={{
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'var(--spacing-xl)',
                color: 'var(--color-text)',
                opacity: 0.7
            }}>
                <p>© 2025 Kuldipsinh B. Jadeja. Built with React & Retro Vibes.</p>
            </footer>
        </>
    );
};

export default Layout;
