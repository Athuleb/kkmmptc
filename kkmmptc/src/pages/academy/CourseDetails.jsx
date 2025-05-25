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
    description: 'Focuses on the design, analysis, and application of electronic circuits, devices, and communication systems. This field covers analog and digital electronics, microprocessors, embedded systems, and signal processing, preparing students for roles in telecommunications, consumer electronics, and automation.',
    images: [elImg, elImg, elImg, elImg],
  },
  {
    title: 'Computer Hardware Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Computer Hardware Engineering is a field that focuses on the physical components of computer systems and electronic devices. It combines knowledge of electronics and computer science to design, develop, and maintain hardware components such as processors, memory units, motherboards, circuit boards, and peripheral devices. This discipline emphasizes the creation and optimization of computer hardware to ensure better speed, performance, and efficiency. Key areas include digital electronics, microp',
    images: [cheImg, cheImg, cheImg, cheImg],
  },
  {
    title: 'Bio-Medical Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Integrates engineering principles with medical and biological sciences to develop innovative healthcare technologies. Students learn to design, build, and maintain medical devices such as imaging systems, prosthetics, and diagnostic equipment to improve patient care.',
    images: [BmeImg, BmeImg, BmeImg, BmeImg],
  },
  {
    title: 'Computer Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Computer Engineering is an interdisciplinary field that combines principles of electrical engineering and computer science to develop computer systems and hardware. It encompasses the design, development, and integration of hardware and software systems, focusing on optimizing computing power and efficiency. Key areas include computer architecture, embedded systems, networks, software development, and cybersecurity. Computer engineers design processors, memory systems, and circuit boards, as we.',
    images: [ceImg, ceImg, ceImg, ceImg],
  },
  {
    title: 'Robotic Process Automation',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Specializes in using software robots and AI-driven automation to streamline business processes. This course covers automation tools, AI integration, workflow optimization, and the development of scalable digital solutions to enhance operational efficiency across industries.',
    images: [rpaImg, rpaImg, rpaImg, rpaImg],
  },
  {
    title: 'Electrical and Electronics Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Electrical and Electronics Engineering (EEE) is a core branch of engineering that focuses on the study and application of electricity, electronics, and electromagnetism. It combines the principles of electrical systems, power generation, transmission, and electronic devices to develop technologies used in various industries. This field covers a broad range of topics including electric circuits, machines, power systems, control systems, digital electronics, embedded systems, and instrumentation..',
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
