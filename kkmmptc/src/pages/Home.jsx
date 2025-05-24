import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import college from '../assets/images/clg.png';
import group from '../assets/images/group.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaBook, FaUser } from 'react-icons/fa';
import '../styles/home.css';

export default function Home() {
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
          backgroundAttachment: 'fixed', // This makes it stay still
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
      </div>





      <Container className="my-5"  >
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Dosis', sans-serif",
          fontOpticalSizing: 'auto',
          fontWeight: 800,
          fontStyle: 'normal',
          fontSize: '30px'
        }}>
          <h2 className="text-center mb-4" style={{ fontFamily: "'Dosis', sans-serif", fontWeight: 800, fontSize: '30px' }}>
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
          </h2>

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
            >
              <img src={group} alt="College campus" className="img-fluid rounded" />
            </motion.div>

          </Col>
        </Row>
      </Container>
      <div className="announcement-bar">
        <p className="scrolling-text">
          <a href="/MPT25.pdf">📢 Admission Open for 2025 | Admission to Diploma Courses in MPTCs under IHRD - Notification | </a>
        </p>
      </div>


      <Container className="mb-5">
        <Row className="justify-content-center text-center">
          <Col md={6}>
            <FaBook size={40} color="#0d47a1" className="mb-3" />
            <div>
              <h2 style={{
                fontFamily: "'Dosis', sans-serif",
                fontWeight: 700,
                fontSize: '32px',
                marginBottom: '15px',
                textTransform: 'uppercase',
                color: '#0d47a1',
              }}>Our Mission</h2>
              <ul style={{
                fontSize: '13px',
                lineHeight: '1.6',
                fontFamily: "'Dosis', sans-serif",
                color: '#333',
                padding: '0 20px',
                listStyleType: 'none'
              }}>
                <li>
                  <strong>About Technical Knowledge:</strong><br />
                  To cultivate a community of professionals driven by a passion for technical excellence through comprehensive and cutting-edge education, mentorship, and experiential learning.
                </li>
                <li style={{ marginTop: '10px' }}>
                  <strong>About Social Commitment:</strong><br />
                  Promoting the true spirit of social commitment by accomplishing community development activities.
                </li>
              </ul>

            </div>
          </Col>

          <Col md={6}>
            <FaUser size={40} color="#0d47a1" className="mb-3" />
            <div>
              <h2 style={{
                fontFamily: "'Dosis', sans-serif",
                fontWeight: 700,
                fontSize: '32px',
                marginBottom: '15px',
                textTransform: 'uppercase',
                color: '#0d47a1',
              }}>Our Vision</h2>
              <p style={{
                fontSize: '13px',
                lineHeight: '1.6',
                fontFamily: "'Dosis', sans-serif",
                color: '#333',
                padding: '0 10px'
              }}>
                Creating professionals with excellent technical skills and social commitment
              </p>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}
