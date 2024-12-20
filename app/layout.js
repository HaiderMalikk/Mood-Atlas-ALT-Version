import React from 'react';
import Head from 'next/head';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html>
      <Head>
        <title>Mood Atlas</title>
        <meta name="description" content="Track and analyze your mood" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body>
        <header>
          <nav>
            {/* Add your navigation links here */}
          </nav>
        </header>
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