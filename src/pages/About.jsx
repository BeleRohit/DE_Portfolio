import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const About = () => {
    return (
        <PageTransition>
            {/* SECTION: Hero */}
            <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ marginBottom: '4rem' }}>
                        <span className="pill font-mono" style={{ marginBottom: '1.5rem' }}>ABOUT ME</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', maxWidth: '800px' }}>
                            A builder who thinks<br />in pipelines and poetry.
                        </h1>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.5fr)', gap: '4rem', alignItems: 'start' }}>
                        {/* Left Column (Photo) */}
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '3/4',
                                borderRadius: '2rem',
                                overflow: 'hidden',
                                backgroundColor: 'var(--border-soft)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
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
                        </motion.div>

                        {/* Right Column (Bio) */}
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-body)' }}>
                            <motion.p variants={fadeUp}>
                                Hi, I'm Rohit. I'm a Data Engineer at EVERSANA India, where I build and maintain end-to-end data pipelines on AWS that process high-volume healthcare datasets — work that directly impacts how clinical teams access and act on information.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                Outside my day job, I ship things. I've built a full-stack LLM application that helps people navigate job markets, and a multilingual voice assistant that makes AI accessible in Indian languages. Both are live, both are used.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                My research background spans speech emotion recognition (published in IEEE) and explainable AI for financial systems. I hold a B.Tech in Computer Science from Lovely Professional University.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                When I'm not in data or AI, I'm playing guitar, exploring generative art with MediaPipe, or reading something that has nothing to do with technology.
                            </motion.p>

                            {/* GitHub Signal Card */}
                            <motion.div variants={fadeUp} style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--bg-primary)', borderRadius: '1rem', border: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface)', borderRadius: '50%' }}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-accent)', marginBottom: '0.25rem' }}>I build in public.</h4>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-body)' }}>Check out my open-source code and contributions.</p>
                                    </div>
                                </div>
                                <a href="https://github.com/BeleRohit" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                                    View GitHub Profile
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: Skills */}
            <section style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Tech Stack & Skills</motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { category: "Data Engineering", skills: [{ n: 'Apache Airflow', core: true }, { n: 'Snowflake', core: true }, { n: 'AWS (S3, Glue, Redshift)', core: true }, { n: 'dbt', core: false }, { n: 'Databricks', core: false }, { n: 'PySpark', core: false }, { n: 'Star Schema', core: false }] },
                            { category: "AI / ML / NLP", skills: [{ n: 'PyTorch', core: true }, { n: 'LLMs & RAG', core: true }, { n: 'FastAPI', core: true }, { n: 'TensorFlow', core: false }, { n: 'HuggingFace', core: false }, { n: 'CNN / LSTM', core: false }, { n: 'Computer Vision', core: false }] },
                            { category: "Languages & Web", skills: [{ n: 'Python', core: true }, { n: 'SQL', core: true }, { n: 'React', core: true }, { n: 'PL/SQL', core: false }, { n: 'Next.js', core: false }, { n: 'TypeScript', core: false }] }
                        ].map((group, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '1.5rem', border: '1px solid var(--border-soft)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-accent)' }}>{group.category}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {group.skills.map((skill, i) => (
                                        <span key={i} className="pill" style={{
                                            backgroundColor: skill.core ? 'var(--text-accent)' : 'var(--bg-surface)',
                                            color: skill.core ? 'var(--bg-primary)' : 'var(--text-body)',
                                            fontWeight: skill.core ? 600 : 400,
                                            border: skill.core ? '1px solid var(--text-accent)' : '1px solid var(--border-soft)'
                                        }}>
                                            {skill.n}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: Experience Timeline */}
            <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Experience & Education</motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px' }}>
                        {[
                            {
                                num: "01",
                                title: "Data Engineer",
                                company: "EVERSANA India",
                                meta: "Apr 2024 – Present · Pune",
                                desc: [
                                    <>Built AWS data pipelines cutting processing time by <strong style={{ color: 'var(--text-accent)' }}>30%</strong>.</>,
                                    <>Designed Snowflake star schema models serving <strong style={{ color: 'var(--text-accent)' }}>enterprise BI dashboards</strong>.</>,
                                    <>Orchestrated <strong style={{ color: 'var(--text-accent)' }}>100+ daily workflows</strong> via Apache Airflow.</>
                                ]
                            },
                            {
                                num: "02",
                                title: "Data Engineering Intern",
                                company: "upGrad",
                                meta: "2023 · Remote (3 months)",
                                desc: [
                                    <>Automated sensor data pipelines for predictive maintenance ML, achieving <strong style={{ color: 'var(--text-accent)' }}>96% classification accuracy</strong>.</>,
                                    <>Feature engineering reduced preprocessing time by <strong style={{ color: 'var(--text-accent)' }}>~30%</strong>.</>,
                                    <>Research paper published from this work in <strong style={{ color: 'var(--text-accent)' }}>IEEE Xplore</strong>.</>
                                ]
                            },
                            {
                                num: "03",
                                title: "B.Tech Computer Science",
                                company: "Lovely Professional University",
                                meta: "2020–2024",
                                desc: [
                                    <>Graduated with <strong style={{ color: 'var(--text-accent)' }}>7.3/10 CGPA</strong>.</>,
                                    <>Undergraduate research focus in <strong style={{ color: 'var(--text-accent)' }}>speech emotion recognition</strong> and Explainable AI.</>
                                ]
                            }
                        ].map((exp, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ display: 'flex', gap: '2rem' }}>
                                <div className="font-mono" style={{ fontSize: '1rem', color: 'var(--text-subtle)', paddingTop: '0.25rem' }}>[{exp.num}]</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.title} — {exp.company}</h3>
                                    <div className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', marginBottom: '1rem' }}>{exp.meta}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-body)' }}>
                                        {exp.desc.map((item, i) => (
                                            <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
                                                <span style={{ position: 'absolute', left: 0, color: 'var(--highlight)' }}>▹</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: Certifications & Continuous Learning */}
            <section style={{ backgroundColor: 'var(--bg-surface)', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Certifications Map */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-accent)' }}>Certifications</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {[
                                    "Neural Networks & Deep Learning — deeplearning.ai",
                                    "Supervised Machine Learning — deeplearning.ai",
                                    "SQL for Data Science — UC Davis",
                                    "Crash Course on Python — Google",
                                    "Database Management System — Coursera"
                                ].map((cert, idx) => (
                                    <span key={idx} className="pill" style={{ backgroundColor: 'var(--bg-primary)', padding: '0.5rem 1rem' }}>
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Currently Learning Block */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-accent)' }}>Currently Learning</h3>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)', borderRadius: '1rem', border: 'lpx solid var(--border-soft)' }}>
                                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                                    I strongly believe in continuous curiosity. Beyond my daily stack, I'm currently exploring tools to build more autonomous and robust data applications:
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <span className="pill pill-highlight">Apache Kafka</span>
                                    <span className="pill pill-highlight">LangGraph Agents</span>
                                    <span className="pill pill-highlight">dbt Cloud</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </PageTransition>
    );
};

export default About;
