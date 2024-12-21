'use client';
import React, { useState } from "react";
import { Map } from "./map";
import { LocationCard } from "./location_card";
import "./globals.css";

const WelcomePage = () => {
  const [mood, setMood] = useState("");
  const [activity, setActivity] = useState("");
  const [hobby, setHobby] = useState("");
  const [radius, setRadius] = useState(25);

  const handleButtonClick = () => {
    console.log("Mood:", mood);
    console.log("Activity:", activity);
    console.log("Hobby:", hobby);
    console.log("Radius:", radius);
  };

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
            <label htmlFor="mood-input" className="input-title">
              How do you feel?
            </label>
            <input
              type="text"
              id="mood-input"
              className="input-box"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Happy, sad, excited, etc."
            />
          </div>
          <div className="input-container">
            <label htmlFor="activity-input" className="input-title">
              What do you want to do?
            </label>
            <input
              type="text"
              id="activity-input"
              className="input-box"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Go for a walk, try a new restaurant, etc."
            />
          </div>
          <div className="input-container">
            <label htmlFor="hobby-input" className="input-title">
              What do you like to do?
            </label>
            <input
              type="text"
              id="hobby-input"
              className="input-box"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              placeholder="Play music, paint, etc."
            />
          </div>
          <div className="slider-container">
            <label htmlFor="radius-slider" className="slider-title">
              Radius
            </label>
            <input
              type="range"
              id="radius-slider"
              className="slider"
              min="0"
              max="50"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            />
            <span className="radius-value">{radius} km</span>
          </div>
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={handleButtonClick}>
            Submit
          </button>
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
