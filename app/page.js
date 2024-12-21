import React from 'react';
import { Map } from './map';
import './globals.css';

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="header-title">
          <header className="header-title">
            <h1>Welcome to Mood Atlas</h1>
          </header>
        </div>
        <div className="input-container">
          <label htmlFor="mood-input">How do you feel?</label>
          <input type="text" id="mood-input" name="mood-input" />
          <button className="submit-button">Submit</button>
        </div>
      </div>
      <div className="right">
        <Map/>
        {/* Overlay box */}
      <div className="map-overlay-box">
        <h2 className="map-title">Place Title</h2>
        <img className="map-image" src="path/to/your/image.jpg" alt="Place Image" />
        <p className="map-description">This is a description of the place. Add details here.</p>
      </div>
      </div>
    </div>
  );
};

export default WelcomePage;
