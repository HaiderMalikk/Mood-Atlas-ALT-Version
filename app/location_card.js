'use client';

import Image from 'next/image';
import logo from '../assets/logo.png';

export function LocationCard({ title, description, picture }) {
  return (
    <div>
      <div className="map-overlay-box">
        <div className="map-content">
          <div className="map-text">
            <h2 className="map-title">{title}</h2>
            <p className="map-description">{description}</p>
            <p className="map-description">{picture}</p>
          </div>
          <Image className="map-image" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
