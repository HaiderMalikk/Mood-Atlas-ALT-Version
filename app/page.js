'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import {Map} from './map';

const WelcomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Mood Atlas</h1>
      <p>Chart your feelings, discover your destination.</p>
      <div className='map-container'>
        <Map />  
      </div>
    </div>
  );
};

export default WelcomePage;