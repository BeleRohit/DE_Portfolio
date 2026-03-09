import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageTransition from '../components/PageTransition';

// Our central data source
import { articleMetadata } from '../content/articleData';

const Article = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    const meta = articleMetadata[slug];

    useEffect(() => {
        if (!meta) {
            navigate('/writing');
            return;
        }

        if (meta.file) {
            // Vite requires the extension and constant part to be statically analyzable
            // So we use the static prefix and the exact extension at the end of the template literal.
            const loadMarkdown = async () => {
                try {
                    // Using standard Vite asset import
                    const markdownFile = await import(`../content/articles/${slug}.md?raw`);
                    setContent(markdownFile.default);
                } catch (error) {
                    console.error("Failed to load article:", error);
                    setContent("# Error\n\nFailed to load this article.");
                } finally {
                    setLoading(false);
                }
            };

            loadMarkdown();
        } else {
            // Future placeholder stub
            setContent(`# ${meta.title}\n\n*Working on it! Check back soon.*`);
            setLoading(false);
        }
    }, [slug, meta, navigate]);

    if (!meta) return null;

    return (
        <PageTransition>
            <article style={{ paddingTop: '6rem', paddingBottom: '8rem', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>

                    {/* Navigation Bar */}
                    <div style={{ marginBottom: '4rem' }}>
                        <Link to="/writing" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-subtle)', fontSize: '0.875rem', fontWeight: 500 }}>
                            <ArrowLeft size={16} /> Back to Writing
                        </Link>
                    </div>

                    {/* Article Header Metadata */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        style={{ marginBottom: '4rem' }}
                    >
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            {meta.title}
                        </h1>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-soft)', paddingTop: '1.5rem', borderBottom: '1px solid var(--border-soft)', paddingBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-subtle)', fontSize: '0.875rem' }}>
                                <Clock size={16} /> <span>{meta.date}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--highlight)', fontSize: '0.875rem' }} className="font-mono">
                                <Tag size={16} /> <span>{meta.tag}</span>
                            </div>
                        </div>
                    </motion.header>

                    {/* Markdown Content */}
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-subtle)' }}>
                                <div className="animate-pulse-soft">Loading article content...</div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                                className="markdown-body"
                            >
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {content}
                                </ReactMarkdown>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </article>
        </PageTransition>
    );
};

export default Article;
