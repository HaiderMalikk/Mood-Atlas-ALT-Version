'use client';

import Image from 'next/image';
import logo from '../assets/logo.png';

export function LocationCard() {
  return (
    <div>
      {/* Overlay box  ontop of the map, this file retusn the box with the content */}
      <div className="map-overlay-box">
        <div className="map-content">
          <div className="map-text">
            <h2 className="map-title">Place Title</h2>
            <p className="map-description">
              This is a description of the place. Add details here.
            </p>
            <p className="map-description">
              This is a description of the place. Add details here.
            </p>
            <p className="map-description">
              This is a description of the place. Add details here.
            </p>
          </div>
          <Image className='map-image' src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  );
}
