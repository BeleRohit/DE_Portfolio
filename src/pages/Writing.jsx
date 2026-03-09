import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { articleMetadata } from '../content/articleData';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Writing = () => {
    const papers = [
        {
            title: "Speech Emotion Recognition Using Deep Learning Techniques and Traditional Classifiers",
            status: "Published · IEEE",
            desc: "Built an end-to-end audio data pipeline, trained hybrid CNN + LSTM models. Achieved 96% classification accuracy on benchmark speech datasets.",
            link: "https://ieeexplore.ieee.org/document/10824482"
        },
        {
            title: "Explainable AI for Finance",
            status: "Presented · NCACSI-24, Guwahati",
            desc: "In-depth literature review on XAI in financial systems — risk management, portfolio optimization, anti-money laundering. Proposed strategies for responsible AI deployment in regulated environments.",
            link: "#"
        }
    ];

    // Convert the object metadata to a mapped array for rendering
    const articles = Object.keys(articleMetadata).map(slug => ({
        slug,
        ...articleMetadata[slug]
    }));

    return (
        <PageTransition>
            {/* SECTION: Hero */}
            <section style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: '800px' }}>
                        <span className="pill font-mono" style={{ marginBottom: '1.5rem' }}>WRITING</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                            Thinking out loud<br />
                            about data, AI, and making things.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: Research & Publications */}
            <section style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <BookOpen size={24} color="var(--text-accent)" />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Research & Publications</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {papers.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } } }}
                                className="card-hover"
                                style={{ backgroundColor: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' }}
                            >
                                <span className="pill" style={{ display: 'inline-block', marginBottom: '1.5rem', alignSelf: 'flex-start', fontSize: '0.75rem' }}>{paper.status}</span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>{paper.title}</h3>
                                <p style={{ fontSize: '0.9375rem', marginBottom: '2rem', flex: 1, color: 'var(--text-body)' }}>{paper.desc}</p>
                                <a href={paper.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-accent)' }}>
                                    Read Paper <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: Blog Articles */}
            <section style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <FileText size={24} color="var(--text-accent)" />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Articles & Notes</h2>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {articles.map((article, idx) => (
                            <motion.div
                                key={article.slug}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.5 } } }}
                                className="card-hover"
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '2rem',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    backgroundColor: 'var(--bg-surface)',
                                    border: '1px solid var(--border-soft)'
                                }}
                            >
                                <div style={{ flex: '1 1 300px' }}>
                                    <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--highlight)', marginBottom: '0.5rem' }}>{article.tag}</div>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{article.title}</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--text-subtle)' }}>
                                    <span className="font-mono" style={{ fontSize: '0.875rem' }}>{article.date}</span>
                                    {article.file ? (
                                        <Link to={`/writing/${article.slug}`} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-soft)' }}>
                                            <ArrowRight size={18} color="var(--text-accent)" />
                                        </Link>
                                    ) : (
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-soft)', opacity: 0.5 }}>
                                            <ArrowRight size={18} color="var(--text-subtle)" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </PageTransition>
    );
};

export default Writing;
