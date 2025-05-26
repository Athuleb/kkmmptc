import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import { FaPhoneAlt, FaUserTie, FaListAlt, FaUsers } from 'react-icons/fa';
import college from '../assets/images/placement.png';
import officerImg from '../assets/images/placement/placementcellofficer.jpeg';
import tcs from '../assets/images/placement/tcs.png';
import infosys from '../assets/images/placement/infosys.svg';
import wipro from '../assets/images/placement/wipro.jpg';
import PlacementGallery from '../components/PlacementGallery';



export default function PlacementCell() {

  const [isHovered, setIsHovered] = useState(false);
  const logos = [tcs, infosys, wipro];

  const scrollContainerStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "scrollLeftRight 20s linear infinite",
    animationPlayState: isHovered ? "paused" : "running",
  };


  const sectionStyle = {
    padding: "2rem 1rem",
    textAlign: "center",
    backgroundColor: "#f8faff",
    overflow: "hidden", // hide scrollbar and overflow
  };

  const logosWrapperStyle = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  };



  const [showHeading, setShowHeading] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeading(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Col style={{ padding: 0 }}>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '50dvh',
          backgroundImage: `url(${college})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          userSelect: 'none',
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
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              textShadow: '8px 9px 8px rgba(0,0,0)',
              margin: 0,
              letterSpacing: '4px',
              color: '#0a80ff',
              WebkitTextStroke: '1.5px white',
              padding: '1rem 2rem',
              borderRadius: '12px',
            }}
          >
            Placement<br /> Cell
          </h1>
        </motion.div>
      </div>

      {/* Placement Officer */}
      <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <motion.div whileInView={{ opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.6 }}>
          <h2><FaUserTie style={{ marginRight: '10px' }} />Placement Officer</h2>
          <div style={{
            maxWidth: '400px',
            margin: '1rem auto',
            padding: '1.5rem',
            borderRadius: '10px',
            background: 'linear-gradient(to right, #e0f7ff, #f0f9ff)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <img
              src={officerImg}
              alt="Placement Officer"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem'
              }}
            />
            <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>Sri Ranthidev CS</p>
            <p style={{ fontSize: '1.1rem' }}><FaPhoneAlt /> +91 77367 06281</p>
          </div>
        </motion.div>
      </section>

      {/* Recruitment Partners */}
      <section style={sectionStyle}>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Recruitment Partners</h2>
          <div
            style={{
              overflow: "hidden",
              marginTop: "1rem",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={scrollContainerStyle}>
              {[...logos, ...logos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Recruitment Partner Logo"
                  style={{ height: "60px", marginRight: "2rem" }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <style>
          {`
          @keyframes scrollLeftRight {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
        </style>
      </section>

      {/* Placement Cell Activities */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#ffffff' }}>
        <motion.div whileInView={{ opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.6 }}>
          <h2><FaListAlt style={{ marginRight: '10px' }} />Placement Cell Activities</h2>
          <ul style={{ maxWidth: '800px', margin: '1rem auto', textAlign: 'left', lineHeight: '2rem' }}>
            <li>Formation of Students’ Placement Committees for final placement and industry-linked projects.</li>
            <li>Preparation of Placement Brochure for final placement.</li>
            <li>Pre-placement visits (PPV) to companies.</li>
            <li>Communication and relationship building with potential recruiters.</li>
            <li>Invitation to recruiters to visit the Institute.</li>
            <li>Ongoing placement support until all students are placed.</li>
            <li>Grooming and training candidates to improve placement success.</li>
            <li>Conducting placement drives and campus interviews.</li>
          </ul>
        </motion.div>
      </section>

      {/* Committee Members */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f8faff' }}>
        <motion.div whileInView={{ opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.6 }}>
          <h2><FaUsers style={{ marginRight: '10px' }} />Placement Committee Members</h2>
          <ul style={{ maxWidth: '800px', margin: '1rem auto', textAlign: 'left', lineHeight: '2rem' }}>
            <li>1. Sri Ranthidev CS (Placement Officer)</li>
            <li>2. Sri. Anilkumar PR (HOS CT)</li>
            <li>3. Smt. Anila Kumari CA (HOS EL)</li>
            <li>4. Smt. Krishnaveni KR (HOS BME)</li>
            <li>5. Smt. Divya VV (Lecturer in EL)</li>
            <li>6. Smt. Joshmy Jose (Lecturer in BME)</li>
            <li>7. Smt. Hima A U (Lecturer in CT)</li>
            <li>8. Smt. Sony KT (Lecturer in CT)</li>
            <li>9. Smt. Badarunisa T S (Lecturer in CT)</li>
            <li>10. Smt. Devasena KR (Lecturer in EE)</li>
          </ul>
        </motion.div>
      </section>

      {/* Placement Gallery */}
      <PlacementGallery />
    </Col>
  );
}
