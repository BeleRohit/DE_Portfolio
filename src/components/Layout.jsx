import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    const { scrollYProgress } = useScroll();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <motion.div
                className="scroll-progress"
                style={{ scaleX: scrollYProgress }}
            />
            <Navigation />
            <main style={{ flex: 1, paddingTop: '6rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
