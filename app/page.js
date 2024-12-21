import React from "react";
import { Map } from "./map";
import { LocationCard } from "./location_card";
import "./globals.css";

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="header-title">
          <header className="header-title">
            <h1>Welcome to Mood Atlas</h1>
          </header>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="mood-input" className="input-title">How do you feel?</label>
            <input type="text" id="mood-input" name="mood-input" className="input-box" />
          </div>
          <div className="input-container">
            <label htmlFor="want-input" className="input-title">What do you want to do?</label>
            <input type="text" id="want-input" name="want-input" className="input-box" />
          </div>
          <div className="input-container">
            <label htmlFor="like-input" className="input-title">What do you like to do?</label>
            <input type="text" id="like-input" name="like-input" className="input-box" />
          </div>
        </div>
      </div>
      <div className="right">
        <Map />
        <LocationCard />
      </div>
    </div>
  );
};

export default WelcomePage;
