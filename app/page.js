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
        <div className="input-container">
          <label htmlFor="mood-input">How do you feel?</label>
          <input type="text" id="mood-input" name="mood-input" />
          <button className="submit-button">Submit</button>
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
