import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--bg-surface)', marginTop: '6rem' }}>
            <div className="container" style={{ padding: '4rem 2rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Col */}
                    <div>
                        <Link to="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-accent)' }}>
                            rohit—bele
                        </Link>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                            Data Engineer · AI Builder · Pune, India
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="https://github.com/BeleRohit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/belerohit" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:rohitnbele@gmail.com" style={{ color: 'var(--text-body)' }}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Sitemap Col */}
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-accent)', marginBottom: '1.5rem' }}>Sitemap</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-accent)', marginBottom: '1.5rem', opacity: 0 }}>Links</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><Link to="/writing">Writing</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Col */}
                    <div>
                        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-accent)', marginBottom: '1.5rem' }}>Newsletter</h4>
                        <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                            I write occasionally about data pipelines, AI products, and building in public. Join if that sounds interesting.
                        </p>
                        <form style={{ display: 'flex', gap: '0.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--border-soft)',
                                    backgroundColor: 'var(--bg-primary)',
                                    fontFamily: 'inherit',
                                    outline: 'none'
                                }}
                            />
                            <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem' }}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-subtle)' }}>
                    <p>© 2026 Rohit Bele. All rights reserved.</p>
                    <p>Built with React & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
