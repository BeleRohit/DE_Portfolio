import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Projects = () => {
    const projects = [
        {
            title: "AI Career Navigator",
            stack: "Next.js 16 · TypeScript · Tailwind · Supabase · Groq (Llama 3.3)",
            status: "Live",
            statusHighlight: true,
            tags: ["AI Mentor", "Full-Stack", "LLM", "Open-Source"],
            desc: "A full-stack platform that acts as a comprehensive AI career coach and mentor, powered by Llama 3.3.\n\nKey Features:\n• AI Career Coach: Chat about pivots, negotiations, and interviews.\n• Resume Analyzer: ATS scoring, keyword matching, and bullet rewriting.\n• Skill Gap Analyzer: Maps missing skills and suggests ways to close them.\n• Learning Roadmaps: Generates structured learning plans.\n• Career Journal: Log and track personal growth.",
            links: [
                { label: "View Live", url: "https://lnkd.in/ggNCBKMF", icon: <ExternalLink size={16} /> },
                { label: "GitHub", url: "#", icon: <Github size={16} /> }
            ]
        },
        {
            title: "Resume–Job Match Intelligence Platform",
            stack: "React · FastAPI · LLM · Vercel · Cloud Backend",
            status: "Live",
            statusHighlight: true,
            tags: ["Full-Stack", "LLM", "Career Tech", "Deployed"],
            desc: "A production-ready LLM application that parses resumes and job descriptions to deliver ATS compatibility scoring, skill gap identification, and personalized improvement recommendations.\n\nBuilt with: React frontend, FastAPI backend, LLM inference layer, per-user session management, passwordless auth, and usage limits. Tracks job applications and aggregates skill gap analyses across roles.",
            links: [
                { label: "View Live", url: "https://resume-job-match-ai.vercel.app/", icon: <ExternalLink size={16} /> },
                { label: "GitHub", url: "#", icon: <Github size={16} /> }
            ]
        },
        {
            title: "BhashaCare — Multilingual Voice Assistant",
            stack: "React · FastAPI · Sarvam AI · Vercel · Render",
            status: "Live Demo Available",
            statusHighlight: true,
            tags: ["Voice AI", "Multilingual", "Real-time", "NLP"],
            desc: "End-to-end voice pipeline with zero form-based interaction, supporting multiple Indian languages. Architecture chains STT → LLM → TTS with minimal latency. Solved cross-browser MediaRecorder inconsistencies in production. Sarvam AI APIs power the language models.",
            links: [
                { label: "View Live Demo", url: "https://lnkd.in/dfRiW7gN", icon: <ExternalLink size={16} /> },
                { label: "GitHub", url: "#", icon: <Github size={16} /> }
            ]
        },
        {
            title: "Hand-Tracking Generative Art",
            stack: "MediaPipe Hands · Canvas 2D · Vanilla JS · HTML",
            status: "In Progress — FaceMesh Extension",
            statusHighlight: false,
            tags: ["Creative Coding", "Computer Vision", "Generative Art"],
            desc: "Browser-based interactive graphics web app with three visual modes: Particles, Waves, and Ink Diffusion — all controlled by hand gestures via MediaPipe Hands. Currently extending with FaceMesh integration and cinematic CGI effects.",
            links: [
                { label: "View Live", url: "https://hand-tracking-ecru.vercel.app/", icon: <ExternalLink size={16} /> },
                { label: "GitHub", url: "#", icon: <Github size={16} /> }
            ]
        },
        {
            title: "Predictive Maintenance ML System",
            stack: "Python · scikit-learn · Feature Eng. · Deep Learning",
            status: "Research Published",
            statusHighlight: true,
            tags: ["ML", "IoT", "Industrial", "Research"],
            desc: "ML models achieving 90% accuracy in equipment failure prediction. Designed feature transformation pipelines for sensor data at scale. Work conducted during upGrad internship and published as research.",
            links: [
                { label: "Read Paper", url: "#", icon: <ExternalLink size={16} /> }
            ]
        }
    ];

    return (
        <PageTransition>
            {/* SECTION: Hero */}
            <section style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: '800px' }}>
                        <span className="pill font-mono" style={{ marginBottom: '1.5rem' }}>PROJECTS</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                            Things I've shipped.<br />
                            <span style={{ color: 'var(--text-subtle)', fontStyle: 'italic' }}>(and a few I'm still shipping.)</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: Project List */}
            <section style={{ paddingBottom: '8rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {projects.map((proj, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                                className="card-hover"
                                style={{
                                    backgroundColor: 'var(--bg-surface)',
                                    borderRadius: '1.5rem',
                                    border: '1px solid var(--border-soft)',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem'
                                }}
                            >
                                {/* Top Section: Tags & Status */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {proj.tags.map((tag, i) => (
                                            <span key={i} className="pill" style={{ backgroundColor: 'var(--bg-primary)' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <span className={`pill ${proj.statusHighlight ? 'pill-highlight' : ''}`} style={{ backgroundColor: 'var(--bg-primary)' }}>
                                        {proj.status}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>{proj.title}</h2>
                                    <div className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', marginBottom: '2rem' }}>
                                        Stack: {proj.stack}
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-body)', fontSize: '1.0625rem', maxWidth: '800px', whiteSpace: 'pre-wrap' }}>
                                        {proj.desc}
                                    </div>
                                </div>

                                {/* Links Section */}
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                                    {proj.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', gap: '0.5rem' }}>
                                            {link.label} {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Projects;
