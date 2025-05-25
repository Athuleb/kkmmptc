import React, { useEffect, useState, useRef } from 'react';
import { Carousel, Container, Row, Col, Card,Modal, Button } from 'react-bootstrap';
import college from '../assets/images/clg.png';
import group from '../assets/images/group.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaUser } from 'react-icons/fa';
import '../styles/home.css';


export default function Home() {


  const missionControls = useAnimation();
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: false });

  const visionControls = useAnimation();
  const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: false });

  const [showHeading, setShowHeading] = useState(true);
  const lastScrollY = useRef(0);


  useEffect(() => {
    if (missionInView) {
      missionControls.start('visible');
    } else {
      missionControls.start('hidden');
    }
  }, [missionInView, missionControls]);

  useEffect(() => {
    if (visionInView) {
      visionControls.start('visible');
    } else {
      visionControls.start('hidden');
    }
  }, [visionInView, visionControls]);

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



  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };


  return (
    <div className='w-100' style={{ backgroundColor: '#e8f0fc', marginTop: '5px' }}>


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
            KKMMPTC<br /> KALLETTUMKARA
          </h1>
        </motion.div>


      </div>





      <Container className="my-5"  >
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Dosis', sans-serif",
          fontOpticalSizing: 'auto',
          fontWeight: 800,
          fontStyle: 'normal',
          fontSize: '30px'
        }}>
          <span className="text-center mb-4" style={{ fontFamily: "'Dosis', sans-serif", fontWeight: 800, fontSize: '30px' }}>
            <span style={{ color: 'rgb(0, 128, 255)' }}>WELCOME </span>
            <span>
              <Typewriter
                words={['TO KKMMPTC KALLETTUMKARA']}
                loop={1}
                typeSpeed={20}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </span>

        </h2>

        <Row >
          <Col md={6}>
            <p style={{
              fontFamily: "'Dosis', sans-serif",
              fontOpticalSizing: 'auto',
              fontWeight: 20,
              fontStyle: 'normal',
              fontSize: '20px',
              textAlign: 'justify'
            }}>
              K Karunakaran Memorial Model Polytechnic College, Mala, established in 1993, is one of the premier technical institutions located in Thrissur, Kerala. The affiliated college, approved by AICTE, imparts training to students in different diploma programmes in various disciplines of engineering. This college has sprawled over an area of 12.375 acres on which conducts a sound environment of technical education. This institute boasts the strength of 680 students and faculty strength of 10. Ensuring personal attention and quality education for its students is its priority.
            </p>
            <p style={{
              fontFamily: "'Dosis', sans-serif",
              fontOpticalSizing: 'auto',
              fontWeight: 20,
              fontStyle: 'normal',
              fontSize: '20px',
              textAlign: 'justify'
            }}>
              The college has a range of modern facilities supporting its programme of instruction. The library is a core learning resource, adding around 1,000 books a year to its list and subscribing to more than 100 current periodicals for use in electronic form; it offers online access to thousands of electronic journals and databases, providing students and faculty members with a greatly enhanced research capability. Every college, in every department, has well-equipped laboratories wherein the students can practically learn about the respective streams.
              There are six full-time diploma programmes for the students in K. Karunakaran Memorial Model Polytechnic College, completed over a period of three years. There are diploma courses in Computer Hardware Engineering, Biomedical Engineering, Electronics Engineering, Computer Engineering, Electrical and Electronics Engineering, and Robotic Process Automation            </p>
          </Col>
          <Col md={6}>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}

            >
              <img src={group} alt="College campus" className="img-fluid rounded" />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="announcement-bar" >
        <p className="scrolling-text">
          <a href="/MPT25.pdf">📢 Admission Open for 2025 | Admission to Diploma Courses in MPTCs under IHRD - Notification | </a>
        </p>
      </div>


      <Container className="mb-5">
        <Row className="justify-content-center text-center">
          <Col md={6}>
            <motion.div
              ref={missionRef}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <FaBook size={40} color="#0d47a1" className="mb-3" />
              <h2
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  fontWeight: 700,
                  fontSize: '32px',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  color: '#0d47a1',
                }}
              >
                Our Mission
              </h2>
              <ul
                style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  fontFamily: "'Dosis', sans-serif",
                  color: '#333',
                  padding: '0 20px',
                  listStyleType: 'none',
                }}
              >
                <li>
                  <strong>About Technical Knowledge:</strong>
                  <br />
                  To cultivate a community of professionals driven by a passion for technical excellence through comprehensive and cutting-edge education, mentorship, and experiential learning.
                </li>
                <li style={{ marginTop: '10px' }}>
                  <strong>About Social Commitment:</strong>
                  <br />
                  Promoting the true spirit of social commitment by accomplishing community development activities.
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              ref={visionRef}
              initial="hidden"
              animate={visionInView ? "visible" : "hidden"}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <FaUser size={40} color="#0d47a1" className="mb-3" />
              <h2
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  fontWeight: 700,
                  fontSize: '32px',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  color: '#0d47a1',
                }}
              >
                Our Vision
              </h2>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  fontFamily: "'Dosis', sans-serif",
                  color: '#333',
                  padding: '0 10px',
                }}
              >
                Creating professionals with excellent technical skills and social commitment
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
