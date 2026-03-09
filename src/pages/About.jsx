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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: Skills */}
            <section style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Tech Stack & Skills</motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {[
                            { category: "Data Engineering", skills: ['Apache Airflow', 'Snowflake', 'AWS S3', 'AWS Glue', 'dbt', 'ETL/ELT', 'Star Schema', 'Data Warehousing'] },
                            { category: "AI / ML / NLP", skills: ['PyTorch', 'TensorFlow', 'Keras', 'HuggingFace Transformers', 'LLMs', 'CNN', 'LSTM', 'Computer Vision', 'NLP'] },
                            { category: "Languages & Frameworks", skills: ['Python', 'SQL', 'PL/SQL', 'FastAPI', 'React', 'PySpark'] },
                            { category: "Cloud & DevOps", skills: ['AWS (S3, Glue, Redshift)', 'Azure (Databricks, ML Studio)', 'Vercel', 'Render', 'Git'] },
                            { category: "Creative / Other", skills: ['MediaPipe', 'Canvas 2D', 'Generative Art', 'Sarvam AI APIs', 'REST APIs'] }
                        ].map((group, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--text-accent)' }}>{group.category}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {group.skills.map((skill, i) => (
                                        <span key={i} className="pill" style={{ backgroundColor: 'var(--bg-primary)' }}>{skill}</span>
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
                                desc: ["Built AWS data pipelines cutting processing time by 30%.", "Designed Snowflake star schema models for enterprise healthcare BI.", "Orchestrated workflows via Apache Airflow."]
                            },
                            {
                                num: "02",
                                title: "Data Engineering Intern",
                                company: "upGrad",
                                meta: "2023 · Remote (3 months)",
                                desc: ["Automated sensor data pipelines for predictive maintenance ML.", "Feature engineering reduced preprocessing time by ~30%.", "Research published from this work."]
                            },
                            {
                                num: "03",
                                title: "B.Tech Computer Science",
                                company: "Lovely Professional University",
                                meta: "2020–2024",
                                desc: ["CGPA: 7.3/10. Research in speech emotion recognition and XAI."]
                            }
                        ].map((exp, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ display: 'flex', gap: '2rem' }}>
                                <div className="font-mono" style={{ fontSize: '1rem', color: 'var(--text-subtle)', paddingTop: '0.25rem' }}>[{exp.num}]</div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.title} — {exp.company}</h3>
                                    <div className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', marginBottom: '1rem' }}>{exp.meta}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-body)' }}>
                                        {exp.desc.map((item, i) => (
                                            <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem' }}>
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

            {/* SECTION: Certifications */}
            <section style={{ backgroundColor: 'var(--bg-surface)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-accent)' }}>Certifications</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px' }}>
                            {[
                                "Neural Networks & Deep Learning — deeplearning.ai",
                                "Supervised Machine Learning — deeplearning.ai",
                                "SQL for Data Science — UC Davis",
                                "Crash Course on Python — Google",
                                "Database Management System — Coursera"
                            ].map((cert, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="pill" style={{ backgroundColor: 'var(--bg-primary)', padding: '0.5rem 1rem' }}
                                >
                                    {cert}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </PageTransition>
    );
};

export default About;
