import React, { useState, useMemo } from 'react';
import '../styles/gallery.css'; 
import FileLocation from '../assets/images/gallery/FileLocation';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const shuffledFileLocation = useMemo(() => shuffleArray(FileLocation), []);

  const handleOpenModal = (item) => {
    setSelectedMedia(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="gallery-grid">
        {shuffledFileLocation.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleOpenModal(item)}
            style={{ cursor: 'pointer' }}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={`Media ${index}`} />
            ) : (
              <video>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {modalOpen && selectedMedia && (
        <div className="media-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt="Enlarged media" />
            ) : (
              <video controls autoPlay>
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
