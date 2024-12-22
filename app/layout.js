'use client';

import React from 'react';
import Head from 'next/head';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <header className='header-links'>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            {/* About on the left */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <h1 className="about-header button" style={{ margin: 0 }}>About</h1>
            </div>
            {/* github and Learn More on the right */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <h1 className="github-header button" style={{ margin: 0 }}>Github</h1>
              <h1 className="learnmore-header button" style={{ margin: 0 }}>Learn More</h1>
            </div>
          </nav>
        </header>
        <div style={{ borderBottom: '5px solid black', marginBottom: '20px' }}></div>
        <main>
          {children}
        </main>
        <footer>
          {/* Add your footer content here */}
        </footer>
      </body>
    </html>
  );
};

export default Layout;
