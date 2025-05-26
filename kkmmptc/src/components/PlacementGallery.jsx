import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FileLocation from '../assets/images/gallery/FileLocation';

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function PlacementGallery() {
  const [shuffledItems, setShuffledItems] = useState(shuffleArray(FileLocation));
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setShuffledItems(shuffleArray(FileLocation));
        setFadeClass('fade-in');
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const columns = [[], [], []];
  shuffledItems.slice(0, 15).forEach((item, index) => {
    columns[index % 3].push(item);
  });

  return (
    <section style={{ backgroundColor: '#f9f9f9' }}>
      <Container fluid className="p-0">
        <Row className="g-0">
          {columns.map((colItems, colIndex) => (
            <Col key={colIndex} lg={4} md={6} sm={12} className="p-0">
              {colItems.map((item, index) => (
                <div key={index} style={{ width: '100%' }}>
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={`gallery-${index}`}
                      className={`w-100 ${fadeClass}`}
                      style={{
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease-in-out',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      className={`w-100 ${fadeClass}`}
                      style={{
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease-in-out',
                        display: 'block',
                      }}
                    />
                  )}
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
