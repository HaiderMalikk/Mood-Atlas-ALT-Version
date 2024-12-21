import React from 'react';
import { Map } from './map';
import './globals.css';

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="left">
        <h1>Welcome to Mood Atlas</h1>
        <div className="input-container">
          <label htmlFor="mood-input">How do you feel?</label>
          <input type="text" id="mood-input" name="mood-input" />
          <button className="submit-button">Submit</button>
        </div>
      </div>
      <div className="right">
        <Map/>
      </div>
    </div>
  );
};

export default WelcomePage;
