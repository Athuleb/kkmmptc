import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Col, Container } from 'react-bootstrap';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FaPhoneAlt, FaUserTie, FaListAlt, FaUsers } from 'react-icons/fa';
import college from '../assets/images/placement.png';
import officerImg from '../assets/images/placement/placementcellofficer.jpeg';
import infosys from '../assets/images/placement/infosys.svg';
import wipro from '../assets/images/placement/wipro.jpg';
import sfo from '../assets/images/placement/sfo.jpeg'
import ison from '../assets/images/placement/ison.jpeg'
import iron from '../assets/images/placement/iron.jpeg'
import dukesoft from '../assets/images/placement/dukesoft.jpeg'
import britco from '../assets/images/placement/britco.png'
import up from '../assets/images/placement/up.jpeg'


export default function PlacementCell() {

  const [isHovered, setIsHovered] = useState(false);
  const logos = [infosys, wipro, sfo, ison, iron, dukesoft, britco, up];

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



  const placementMembers = [
    { name: "Sri Ranthidev CS", role: "Placement Officer" },
    { name: "Sri. Anilkumar PR", role: "HOS CT" },
    { name: "Smt. Anila Kumari CA", role: "HOS EL" },
    { name: "Smt. Krishnaveni KR", role: "HOS BME" },
    { name: "Smt. Divya VV", role: "Lr. In EL" },
    { name: "Smt. Joshmy Jose", role: "Lr. In BME" },
    { name: "Smt. Hima A U", role: "Lr. In CT" },
    { name: "Smt. Sony KT", role: "Lr. In CT" },
    { name: "Smt. Badarunisa T S", role: "Lr. In CT" },
    { name: "Smt. Devasena KR", role: "Lr. In EE" },
  ];

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
            PLACEM<br /> Cell
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

      <section style={{ padding: "2rem 1rem", backgroundColor: "#f2f2f2" }}>
        <Container maxWidth="lg" style={{ padding: '1rem' }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Placement Cell Members
          </Typography>
          <Grid container spacing={3}>
            {placementMembers.map((member, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    boxShadow: 3,
                    transition: "0.3s",
                    padding: 1,
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </section>
      {/* Recruitment Partners */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f9f9f9' }}>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center' }}>Our Recruitment Partners</h2>

          <div
            style={{
              overflow: 'hidden',
              marginTop: '2rem',
              position: 'relative',
              width: '100%',
            }}
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
              {[...logos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Recruitment Partner Logo"
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scoped style tag */}
        <style>{`
    @keyframes scrollLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .partner-logo {
      height: 50px;
      margin-right: 2rem;
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
        height: 40px;
        margin-right: 1rem;
        max-width: 80px;
      }
    }

    @media (max-width: 480px) {
      .partner-logo {
        height: 30px;
        margin-right: 0.8rem;
        max-width: 60px;
      }
    }
  `}</style>
      </section>

    </Col>
  );
}
