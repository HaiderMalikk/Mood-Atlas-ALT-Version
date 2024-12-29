'use client';

import React, { useState } from 'react';
import './globals.css';

const Layout = ({ children }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Toggle About Card Pop-up
  const toggleAboutPopup = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <html>
      <head>
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=YOUR_CALLBACK_NAME`}
        ></script>
      </head>
      <body>
        <header className='header-links'>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            {/* About on the left */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <h1 
                className="about-header button" 
                style={{ margin: 0, cursor: 'pointer' }}
                onClick={toggleAboutPopup}
              >
                About
              </h1>
            </div>
            {/* Github on the right */}
            <div style={{ display: 'flex', gap: '20px',}}>
              <a href="https://github.com/HaiderMalikk/Mood-Atlas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none',}}>
                <h1 className="github-header button" style={{ margin: 0, cursor: 'pointer',}}>Github</h1>
              </a>
            </div>
          </nav>
        </header>

        {/* Solid black line divider */}
        <div style={{ borderBottom: '5px solid black', marginBottom: '20px' }}></div>

        {/* About Card Overlay */}
        {isAboutOpen && (
          <div className='about-overlay'>
            <div className="about-card">
              <h2>About Us</h2>
              <p>This is the about section. You can add details about your project here.</p>
              <button
                onClick={toggleAboutPopup}
                className="close-button"
              >
                Close
              </button>
            </div>
          </div>
        )}

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
