import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import elImg from '../../assets/images/courses/el.jpg';
import cheImg from '../../assets/images/courses/che.jpg';
import ceImg from '../../assets/images/courses/ce.jpg';
import rpaImg from '../../assets/images/courses/rpa.jpg';
import eeeImg from '../../assets/images/courses/eee.jpg';
import BmeImg from '../../assets/images/courses/bme.jpg';






const courseDetails = [
  {
    title: 'Electronics Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Focuses on electronics circuits, communication systems, microprocessors, and embedded systems.',
    images: [elImg, elImg, elImg, elImg],
  },
  {
    title: 'Computer Hardware Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Covers installation, maintenance, and troubleshooting of computer hardware and networks.',
    images: [cheImg, cheImg, cheImg, cheImg],
  },
  {
    title: 'Bio-Medical Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Combines engineering with medical sciences for the design of medical equipment and devices.',
    images: [BmeImg, BmeImg, BmeImg, BmeImg],
  },
  {
    title: 'Computer Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Emphasizes software development, programming, data structures, and computer networks.',
    images: [ceImg, ceImg, ceImg, ceImg],
  },
  {
    title: 'Robotic Process Automation',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Specializes in automation tools, AI, and software robotics to streamline digital workflows.',
    images: [rpaImg, rpaImg, rpaImg, rpaImg],
  },
  {
    title: 'Electrical and Electronics Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Covers power systems, control systems, electronics, and electrical machines.',
    images: [eeeImg, eeeImg, eeeImg, eeeImg],
  },
];

export default function CourseDetails() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-5" style={{ fontFamily: 'Dosis, sans-serif' }}>
        Course Details
      </h2>

      {courseDetails.map((course, index) => (
        <Row className="mb-5 align-items-center" key={index}>
          {/* Left: 2x2 Image Grid */}
          <Col md={6}>
            <Row>
              {course.images.map((img, idx) => (
                <Col xs={6} className="mb-3" key={idx}>
                  <Image
                    src={img}
                    alt={`${course.title} ${idx + 1}`}
                    fluid
                    rounded
                    style={{ height: '120px', objectFit: 'cover', width: '100%' }}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right: Course Info */}
          <Col md={6}>
            <h3 className="fw-bold">{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Seats:</strong> {course.seats}</p>
            <p><strong>Eligibility:</strong> {course.eligibility}</p>
            <p><strong>Description:</strong> {course.description}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
