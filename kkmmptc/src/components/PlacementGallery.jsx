import React from 'react';
import FileLocation from '../assets/images/gallery/FileLocation';

const PlacementGallery = () => {
  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#f0f4f8' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Placement Gallery</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          padding: '0 1rem',
        }}
      >
        {FileLocation.map((item, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Gallery item ${idx}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <video
                src={item.src}
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacementGallery;
