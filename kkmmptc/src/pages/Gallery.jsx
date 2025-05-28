import React, { useState, useMemo } from 'react';
import { Skeleton } from '@mui/material';
import FileLocation from '../assets/images/gallery/FileLocation';
import '../styles/gallery.css';

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loadedIndexes, setLoadedIndexes] = useState({});

  const shuffledMedia = useMemo(() => {
    return [...FileLocation].sort(() => 0.5 - Math.random());
  }, []);

  const openModal = (media) => setSelectedMedia(media);
  const closeModal = () => setSelectedMedia(null);

  const handleLoad = (index) => {
    setLoadedIndexes((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <div className="gallery-grid">
        {shuffledMedia.map((media, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(media)}>
            {!loadedIndexes[index] && (
              <Skeleton variant="rectangular" animation="wave" height={200} width="100%" />
            )}
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={`media-${index}`}
                onLoad={() => handleLoad(index)}
                style={{ display: loadedIndexes[index] ? 'block' : 'none' }}
              />
            ) : (
              <video
                muted
                onLoadedData={() => handleLoad(index)}
                style={{ display: loadedIndexes[index] ? 'block' : 'none' }}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="media-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt="Preview" />
            ) : (
              <video controls autoPlay>
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
