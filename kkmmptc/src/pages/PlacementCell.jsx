import React, { useEffect, useState, useRef } from 'react';
import college from '../assets/images/clg.png';
import { motion } from 'framer-motion';


export default function PlacementCell() {

  const [showHeading, setShowHeading] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeading(false);
      } else {
        // Scrolling up
        setShowHeading(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundImage: `url(${college})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ffffff',
          userSelect: 'none',
          opacity: '60%'
        }}
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={showHeading ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            style={{
              fontFamily: "'Dosis', sans-serif",
              fontWeight: '900',
              fontSize: 'clamp(2.4rem, 4vw, 4rem)',
              textShadow: '8px 9px 8px rgba(0,0,0)',
              margin: 0,
              letterSpacing: '4px',
              color: 'rgb(10, 128, 255)',
              WebkitTextStroke: '1.5px white'
            }}
          >
            Placement<br /> Cell
          </h1>
        </motion.div>


      </div>
    </>
  );
}
