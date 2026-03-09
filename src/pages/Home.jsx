import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Bot, BrainCircuit, Paintbrush } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Reusable animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
    return (
        <PageTransition>
            {/* SECTION 2: Hero */}
            <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Left Column */}
                        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 10 }}>
                            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                                <span className="pill font-mono" style={{ backgroundColor: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
                                    Available for Collaboration
                                </span>
                            </motion.div>

                            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                                <span style={{ display: 'block', fontSize: '1.25rem', fontFamily: "'JetBrains Mono', monospace", color: 'var(--highlight)', marginBottom: '1rem', fontWeight: 400, letterSpacing: 'normal' }}>Hi, I'm Rohit Bele.</span>
                                Data Engineer.<br />
                                AI Builder.<br />
                                Open Source Mind.
                            </motion.h1>

                            <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '520px', lineHeight: 1.5, color: 'var(--text-accent)' }}>
                                I turn messy healthcare data into clean pipelines, and blank pages into shipped AI products.
                            </motion.p>

                            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: '99px', border: '1px solid var(--border-soft)' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Currently Data Engineer at <strong style={{ color: 'url(#gradient) || #006eb6' }}>EVERSANA</strong></span>
                                </div>
                                <a href="https://linkedin.com/in/belerohit" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', backgroundColor: '#0A66C2', color: 'white', borderRadius: '50%' }}>
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </motion.div>

                            <motion.div variants={fadeUp} style={{ gap: '1rem', display: 'flex', flexWrap: 'wrap' }}>
                                <Link to="/projects" className="btn btn-primary">
                                    View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                                </Link>
                                <Link to="/writing" className="btn btn-outline">
                                    Read My Writing
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '400px',
                                aspectRatio: '3/4',
                                borderRadius: '2rem',
                                transform: 'rotate(-2deg)',
                                overflow: 'hidden',
                                border: '8px solid var(--bg-surface)',
                                backgroundColor: 'var(--border-soft)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                            }}>
                                <img
                                    src="/images/rohit.jpg"
                                    alt="Rohit Bele"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.backgroundColor = 'var(--bg-surface)';
                                    }}
                                />
                            </div>

                            {/* Floating Stat Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-accent)' }}>1+ yr</span>
                                    <span style={{ fontSize: '0.875rem', lineHeight: 1.2, color: 'var(--text-body)' }}>Production<br />Experience</span>
                                </div>
                                <div style={{ height: '1px', backgroundColor: 'var(--border-soft)' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-accent)' }}>2</span>
                                    <span style={{ fontSize: '0.875rem', lineHeight: 1.2, color: 'var(--text-body)' }}>AI Products<br />Shipped</span>
                                </div>
                                <div style={{ height: '1px', backgroundColor: 'var(--border-soft)' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-accent)' }}>2</span>
                                    <span style={{ fontSize: '0.875rem', lineHeight: 1.2, color: 'var(--text-body)' }}>IEEE / Conf.<br />Papers</span>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: Services */}
            <section style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        style={{ maxWidth: '800px', marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
                            There's no shortage of data tools.<br />
                            But there is a shortage of engineers who make them actually work.
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                icon: <Database size={32} strokeWidth={1.5} />,
                                title: "Data Pipeline Engineering",
                                desc: "End-to-end AWS pipelines, Snowflake warehouses, Airflow orchestration — built for reliability at scale.",
                            },
                            {
                                icon: <Bot size={32} strokeWidth={1.5} />,
                                title: "AI / LLM Product Development",
                                desc: "From RAG systems to voice assistants — I build AI products that users can actually interact with.",
                            },
                            {
                                icon: <BrainCircuit size={32} strokeWidth={1.5} />,
                                title: "Applied ML & Deep Learning",
                                desc: "CNNs, LSTMs, HuggingFace Transformers — applied to real datasets with measurable accuracy benchmarks.",
                            },
                            {
                                icon: <Paintbrush size={32} strokeWidth={1.5} />,
                                title: "Creative Coding & Generative Art",
                                desc: "MediaPipe hand tracking, Canvas 2D, generative visuals — where engineering meets creative expression.",
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } }
                                }}
                                className="card-hover"
                                style={{ backgroundColor: 'var(--bg-primary)', padding: '2.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                    <div style={{ color: 'var(--text-accent)' }}>{item.icon}</div>
                                    <span className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)' }}>0{idx + 1}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9375rem', marginBottom: '2rem', flex: 1 }}>{item.desc}</p>
                                <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>
                                    explore <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Philosophy block */}
            <section style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="pill font-mono" style={{ marginBottom: '2rem' }}>MY APPROACH</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.4, marginBottom: '2rem', fontStyle: 'italic' }}>
                            "I believe the best data products are invisible — they just work, and they make someone's job easier."
                        </h2>
                        <p style={{ fontSize: '1rem', color: 'var(--text-subtle)' }}>— Rohit Bele, Data Engineer & Builder</p>
                    </motion.div>

                    {/* Testimonial / Social Proof */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '800px', margin: '4rem auto 0', padding: '2.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '1rem', border: '1px solid var(--border-soft)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                        {/* Decorative Quote Icon */}
                        <div style={{ position: 'absolute', top: '-1.5rem', left: '2rem', backgroundColor: 'var(--bg-surface)', padding: '0.5rem', borderRadius: '50%', color: 'var(--text-accent)', border: '1px solid var(--border-soft)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                        </div>

                        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-body)', fontStyle: 'italic', zIndex: 1, marginTop: '1rem' }}>
                            "Rohit is an exceptional builder who consistently ships high-quality systems. His ability to understand complex data and translate it into reliable pipelines has been invaluable. He operates with a product mindset, not just a purely technical one."
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-soft)', paddingTop: '1.5rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--border-soft)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-subtle)', fontWeight: 'bold' }}>
                                JD
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-accent)' }}>John Doe</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)' }}>Engineering Manager / Colleague</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: Featured Projects */}
            <section style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Featured Work</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                        {/* Callout Project Card 0 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="card-hover"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', backgroundColor: 'var(--bg-primary)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border-soft)' }}
                        >
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>Next.js 16</span>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>Llama 3.3</span>
                                    <span className="pill pill-highlight" style={{ fontSize: '0.75rem' }}>Live</span>
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AI Career Navigator</h3>
                                <p style={{ marginBottom: '2rem' }}>
                                    A full-stack platform providing an AI career coach, resume analyzer, skill gap mapping, and learning roadmaps. Built with Next.js 16, TypeScript, Supabase, and Groq APIs.
                                </p>
                                <div>
                                    <a href="https://lnkd.in/ggNCBKMF" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                                        View Project <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </a>
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'var(--border-soft)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/projects/AI_career_navigator.png" alt="AI Career Navigator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        </motion.div>

                        {/* Callout Project Card 1 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="card-hover"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', backgroundColor: 'var(--bg-primary)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border-soft)' }}
                        >
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>LLM</span>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>Full-Stack</span>
                                    <span className="pill pill-highlight" style={{ fontSize: '0.75rem' }}>Deployed</span>
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Resume–Job Match Intelligence Platform</h3>
                                <p style={{ marginBottom: '2rem' }}>
                                    An LLM-powered application that parses resumes and job descriptions to deliver ATS scoring, skill gap analysis, and tailored career advice. Built with React + FastAPI + cloud backend.
                                </p>
                                <div>
                                    <a href="https://resume-job-match-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                                        View Project <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </a>
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'var(--border-soft)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/projects/ResumeMatch.png" alt="Resume Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        </motion.div>

                        {/* Callout Project Card 2 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="card-hover"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', backgroundColor: 'var(--bg-primary)', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border-soft)' }}
                        >
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 1 }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>Voice AI</span>
                                    <span className="pill" style={{ fontSize: '0.75rem' }}>Multilingual</span>
                                    <span className="pill pill-highlight" style={{ fontSize: '0.75rem' }}>Live</span>
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>BhashaCare — Voice Assistant</h3>
                                <p style={{ marginBottom: '2rem' }}>
                                    End-to-end voice pipeline: Speech → STT → LLM → TTS. Supports multiple Indian languages with zero form-based interaction. Architecture: React → FastAPI → Sarvam AI APIs.
                                </p>
                                <div>
                                    <Link to="/projects" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                                        View Project <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </Link>
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'var(--border-soft)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', order: 0 }}>
                                <img src="/projects/BhashaCare.png" alt="BhashaCare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 6: Numbers block */}
            <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-soft)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { num: '30%', text: 'Reduction in pipeline time' },
                            { num: '40%', text: 'Faster report generation' },
                            { num: '2', text: 'AI Products Shipped' },
                            { num: '2', text: 'IEEE/Conf. Publications' },
                        ].map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}>
                                <div style={{ fontSize: '3rem', fontWeight: 500, fontFamily: "'Playfair Display', serif", color: 'var(--text-accent)', marginBottom: '0.5rem' }}>{stat.num}</div>
                                <div style={{ fontSize: '0.9375rem', color: 'var(--text-subtle)', maxWidth: '150px', margin: '0 auto' }}>{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Latest Writing */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Latest Writing</h2>
                        <Link to="/writing" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                            Browse All <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            "How I built a real-time voice AI pipeline in a weekend",
                            "What 1 year of healthcare data pipelines taught me about reliability",
                            "Generative Art with MediaPipe Hands — a creative coding deep dive"
                        ].map((title, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="card-hover"
                                style={{ padding: '2rem', backgroundColor: 'var(--bg-surface)', borderRadius: '1rem', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' }}
                            >
                                <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '1rem' }}>Article · Coming Soon</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', flex: 1 }}>{title}</h3>
                                <Link to="/writing" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>
                                    Read <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: CTA Banner */}
            <section style={{ padding: '0 1rem', marginBottom: '4rem' }}>
                <div className="container" style={{ backgroundColor: 'var(--bg-surface)', padding: '6rem 2rem', borderRadius: '2rem', textAlign: 'center', border: '1px solid var(--border-soft)' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>Let's build something worth shipping.</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-body)', marginBottom: '3rem' }}>
                            Whether you're working on a data system, an AI product, or an open-source idea — I'm always open to interesting conversations.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                            Get In Touch <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </PageTransition>
    );
};

export default Home;
