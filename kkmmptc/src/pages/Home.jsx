import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import tharang from '../assets/images/tharang.jpeg'
import tharang1 from '../assets/images/tharang1.jpeg'
import tharang2 from '../assets/images/tharang2.jpeg'
import college from '../assets/images/clg.png'
import event from '../assets/images/event.jpeg'
export default function Home() {
  return (
    <div className='w-100' style={{ backgroundColor: '#e8f0fc' }}>
      {/* Carousel Section */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={college}
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang}
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={event}
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang1}
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tharang2}
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />

        </Carousel.Item>
      </Carousel>

      {/* College Details Section */}
      <Container className="my-5"  >
        <h2 className="text-center mb-4" style={{
          fontFamily: "'Dosis', sans-serif",
          fontOpticalSizing: 'auto',
          fontWeight: 800,
          fontStyle: 'normal',
          fontSize: '50px'
        }}>WELCOME TO KKMMPTC KALLETTUMKARA</h2>
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

      {/* Mission/Vision Section */}
      <Container className="mb-5">
        <Row>
          <Col md={5}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Strive to uphold professional leadership, competitive research and development for social enhancement through innovative and dedicated teaching, emphasizing human values.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  To develop into a centre of excellence in technical education,providing highly disciplined skilled professionals, instrumental in the techno-socio-economic development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
