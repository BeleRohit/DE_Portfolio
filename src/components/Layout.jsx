import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, paddingTop: '6rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
