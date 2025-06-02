import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import college from '../assets/images/placement.png';
import poster1 from '../assets/images/placement/placementcellofficer.jpeg';
import poster2 from '../assets/images/placement/placementcellofficer.jpeg';
import poster3 from '../assets/images/placement/placementcellofficer.jpeg';
import placedStudents from '../assets/images/placement/placementcellofficer.jpeg';
import infosys from '../assets/images/placement/infosys.svg';
import wipro from '../assets/images/placement/wipro.jpg';
import sfo from '../assets/images/placement/sfo.jpeg';
import ison from '../assets/images/placement/ison.jpeg';
import iron from '../assets/images/placement/iron.jpeg';
import dukesoft from '../assets/images/placement/dukesoft.jpeg';
import britco from '../assets/images/placement/britco.png';
import up from '../assets/images/placement/up.jpeg';

const logos = [infosys, wipro, sfo, ison, iron, dukesoft, britco, up];

export default function PlacementCell() {
  const [isHovered, setIsHovered] = useState(false);
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

  const placedStudentCount = 8; // adjust as needed

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '50dvh',
          backgroundImage: `url(${college})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={showHeading ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Dosis', sans-serif",
            fontWeight: '900',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            textShadow: '8px 9px 8px rgba(0,0,0)',
            color: '#0a80ff',
            WebkitTextStroke: '1.5px white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          PLACEMENT CELL
        </motion.h1>
      </div>


      <section style={{ backgroundColor: '#f8faff', padding: '3rem 1rem' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 500, marginBottom: '2rem' }}
          >
            Our Proudly Placed Students
          </Typography>
          <Grid container spacing={3}>
            {Array.from({ length: placedStudentCount }).map((_, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.03)", boxShadow: 6 }
                  }}
                >
                  <img
                    src={placedStudents}
                    alt={`Placed Student ${idx + 1}`}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="body1">Student {idx + 1}</Typography>
                    <Typography variant="body2" color="text.secondary">Company Name</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>


            <section style={{ padding: '3rem 1rem', textAlign: 'center', backgroundColor: '#f9fcff' }}>
  <motion.div whileInView={{ opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.6 }}>
    <h2 style={{ marginBottom: '2rem' }}><FaUserTie style={{ marginRight: '10px' }} />Previously Placed Students</h2>
    
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <img
        src={poster1}
        alt="Placed Students Poster 1"
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
      <img
        src={poster2}
        alt="Placed Students Poster 2"
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
      <img
        src={poster3}
        alt="Placed Students Poster 3"
        style={{
          width: '300px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
    </div>
    
    <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#666' }}>
      These are a few glimpses of our talented students placed in top companies!
    </p>
  </motion.div>
</section>


      {/* Recruitment Partners */}
      <section style={{ padding: '3rem 1rem', backgroundColor: '#ffffff' }}>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Our Recruitment Partners
          </Typography>

          <div
            style={{ overflow: 'hidden', marginTop: '2rem' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="scrolling-logos"
              style={{
                display: 'inline-flex',
                animation: isHovered ? 'none' : 'scrollLeft 20s linear infinite',
                whiteSpace: 'nowrap',
                alignItems: 'center',
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
          <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
            <motion.div whileInView={{ opacity: [0, 1], y: [30, 0] }} transition={{ duration: 0.6 }}>
              <h2><FaPhoneAlt style={{ marginRight: '10px' }} />Placement Cell Contact</h2>
              <div style={{
                maxWidth: '450px',
                margin: '1rem auto',
                padding: '2rem',
                borderRadius: '12px',
                background: 'linear-gradient(to right, #e0f7ff, #f0f9ff)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0.5rem 0' }}>Sri Ranthidev CS</h4>
                <p style={{ fontSize: '1rem', fontWeight: '500', color: '#444' }}><FaUserTie /> Placement Officer</p>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}><FaPhoneAlt /> +91 77367 06281</p>
             
              </div>
            </motion.div>
          </section>


          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .partner-logo {
              height: 60px;
              margin: 0 2rem;
              max-width: 100px;
              width: auto;
              object-fit: contain;
              transition: transform 0.3s ease;
            }
            .partner-logo:hover {
              transform: scale(1.1);
            }
            @media (max-width: 768px) {
              .partner-logo {
                height: 45px;
                margin: 0 1rem;
              }
            }
            @media (max-width: 480px) {
              .partner-logo {
                height: 35px;
                margin: 0 0.8rem;
              }
            }
          `}</style>
        </motion.div>
      </section>
    </div>
  );
}
