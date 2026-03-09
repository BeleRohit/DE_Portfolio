import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("This is a demo contact form. In a real app, this would send an email.");
    };

    return (
        <PageTransition>
            <section style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
                <div className="container">

                    {/* Hero */}
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ marginBottom: '4rem' }}>
                        <span className="pill font-mono" style={{ marginBottom: '1.5rem' }}>CONTACT</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}> Let's build something<br />worth shipping.</h1>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>

                        {/* Left Column: Info */}
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ fontSize: '1.125rem', color: 'var(--text-body)' }}>
                            <motion.p variants={fadeUp} style={{ marginBottom: '3rem', maxWidth: '400px' }}>
                                Whether you're working on an interesting data problem, an AI product, an open-source project, or you just want to talk shop — I'm always open to a conversation.
                            </motion.p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
                                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MapPin size={20} color="var(--text-accent)" />
                                    <span>Pune, India</span>
                                </motion.div>
                                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Mail size={20} color="var(--text-accent)" />
                                    <a href="mailto:rohitnbele@gmail.com" style={{ textDecoration: 'underline' }}>rohitnbele@gmail.com</a>
                                </motion.div>
                                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Linkedin size={20} color="var(--text-accent)" />
                                    <a href="https://linkedin.com/in/belerohit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>linkedin.com/in/belerohit</a>
                                </motion.div>
                                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Github size={20} color="var(--text-accent)" />
                                    <a href="https://github.com/BeleRohit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>github.com/BeleRohit</a>
                                </motion.div>
                            </div>

                            <motion.div variants={fadeUp} style={{ padding: '2rem', backgroundColor: 'var(--bg-surface)', borderRadius: '1rem', border: '1px solid var(--border-soft)' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)' }}>Currently</span>
                                    <p style={{ fontWeight: 500, color: 'var(--text-accent)' }}>Data Engineer @ EVERSANA India</p>
                                </div>
                                <div>
                                    <span className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)' }}>Open To</span>
                                    <p style={{ fontWeight: 500, color: 'var(--text-accent)' }}>Collaborations · Open source · Interesting conversations</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>Name *</label>
                                    <input
                                        type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                                        style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-soft)', backgroundColor: 'var(--bg-primary)', fontFamily: 'inherit', outline: 'none' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>Email *</label>
                                    <input
                                        type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                                        style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-soft)', backgroundColor: 'var(--bg-primary)', fontFamily: 'inherit', outline: 'none' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="subject" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>What's this about?</label>
                                    <select
                                        id="subject" name="subject" value={formData.subject} onChange={handleChange}
                                        style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-soft)', backgroundColor: 'var(--bg-primary)', fontFamily: 'inherit', outline: 'none', appearance: 'none' }}
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="Data Engineering">Data Engineering</option>
                                        <option value="AI Product">AI Product</option>
                                        <option value="Open Source">Open Source</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>Message *</label>
                                    <textarea
                                        id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
                                        style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-soft)', backgroundColor: 'var(--bg-primary)', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: 'fit-content', padding: '1rem 2rem' }}>
                                    Send Message <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Contact;
