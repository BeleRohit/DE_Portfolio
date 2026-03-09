import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Writing', path: '/writing' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50,
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(245, 240, 232, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent'
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/" className="text-xl font-medium tracking-tight" style={{
                        fontFamily: "'Playfair Display', serif",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--text-accent)',
                        color: 'var(--bg-primary)',
                        borderRadius: '8px',
                        lineHeight: 1
                    }}>
                        RB
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav items-center space-x-8" style={{ gap: '2.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `nav-link relative text-[15px] font-medium transition-colors hover:text-accent ${isActive ? 'nav-link-active text-accent' : 'text-body'}`
                                }
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--text-accent)' : 'var(--text-body)',
                                    letterSpacing: '0.02em'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link to="/contact" className="pill pill-highlight hover:bg-highlight hover:text-white transition-all shadow-sm hover:shadow-md" style={{
                            borderColor: 'var(--highlight)',
                            color: 'var(--highlight)',
                            fontWeight: 500,
                            padding: '0.5rem 1.25rem',
                            textDecoration: 'none'
                        }}>
                            Open to Opportunities
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-accent)' }}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'var(--bg-primary)',
                            zIndex: 100,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-accent)' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem', fontSize: '2rem', fontFamily: "'Playfair Display', serif" }}>
                            <Link to="/">Home</Link>
                            {navLinks.map(link => (
                                <Link key={link.name} to={link.path}>{link.name}</Link>
                            ))}
                            <Link to="/contact" style={{ display: 'inline-block', marginTop: '2rem', fontSize: '1.25rem', padding: '1rem 2rem', border: '1px solid var(--highlight)', color: 'var(--highlight)', borderRadius: '99px', textAlign: 'center', fontFamily: "'DM Sans', sans-serif" }}>
                                Open to Opportunities
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
