'use client';
export function LocationCard() {
  return (
      <div>
        {/* Overlay box */}
        <div className="map-overlay-box">
          <h2 className="map-title">Place Title</h2>
          <img
            className="map-image"
            src="path/to/your/image.jpg"
            alt="Place Image"
          />
          <p className="map-description">
            This is a description of the place. Add details here.
          </p>
        </div>
      </div>
  );
}
