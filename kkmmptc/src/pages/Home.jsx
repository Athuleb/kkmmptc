import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import tharang from '../assets/images/tharang.jpeg'
import tharang1 from '../assets/images/tharang1.jpeg'
import tharang2 from '../assets/images/tharang2.jpeg'
import college from '../assets/images/clg.png'
import event from '../assets/images/event.jpeg'
import { Typewriter } from 'react-simple-typewriter';


export default function Home() {
  return (
    <div className='w-100' style={{ backgroundColor: '#e8f0fc', marginTop: '5px' }}>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={college}
            alt="First slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={event}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang1}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang2}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />

        </Carousel.Item>
      </Carousel>


      <Container className="my-5"  >
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Dosis', sans-serif",
          fontOpticalSizing: 'auto',
          fontWeight: 800,
          fontStyle: 'normal',
          fontSize: '50px'
        }}>
          <span>
            <Typewriter
              words={['WELCOME TO KKMMPTC KALLETTUMKARA']}
              loop={1}
              typeSpeed={20}
              deleteSpeed={50}
              delaySpeed={1000}
            />
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
            <img
              src={event}
              alt="College campus"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>


      <Container className="mb-5">
        <Row className="justify-content-center text-center">
          <Col md={6}>
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
                fontSize: '17px',
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
                fontSize: '17px',
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
