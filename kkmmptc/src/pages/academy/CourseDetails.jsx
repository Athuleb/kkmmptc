import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
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
    images: [elImg],
  },
  {
    title: 'Computer Hardware Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Computer Hardware Engineering is a field that focuses on the physical components of computer systems and electronic devices. It combines knowledge of electronics and computer science to design, develop, and maintain hardware components such as processors, memory units, motherboards, circuit boards, and peripheral devices. This discipline emphasizes the creation and optimization of computer hardware to ensure better speed, performance, and efficiency. Key areas include digital electronics, microp',
    images: [cheImg],
  },
  {
    title: 'Bio-Medical Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Integrates engineering principles with medical and biological sciences to develop innovative healthcare technologies. Students learn to design, build, and maintain medical devices such as imaging systems, prosthetics, and diagnostic equipment to improve patient care.',
    images: [BmeImg],
  },
  {
    title: 'Computer Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Computer Engineering is an interdisciplinary field that combines principles of electrical engineering and computer science to develop computer systems and hardware. It encompasses the design, development, and integration of hardware and software systems, focusing on optimizing computing power and efficiency. Key areas include computer architecture, embedded systems, networks, software development, and cybersecurity. Computer engineers design processors, memory systems, and circuit boards, as we.',
    images: [ceImg],
  },
  {
    title: 'Robotic Process Automation',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Specializes in using software robots and AI-driven automation to streamline business processes. This course covers automation tools, AI integration, workflow optimization, and the development of scalable digital solutions to enhance operational efficiency across industries.',
    images: [rpaImg],
  },
  {
    title: 'Electrical and Electronics Engineering',
    seats: 60,
    duration: '3 Years',
    eligibility: 'SSLC or equivalent',
    description: 'Electrical and Electronics Engineering (EEE) is a core branch of engineering that focuses on the study and application of electricity, electronics, and electromagnetism. It combines the principles of electrical systems, power generation, transmission, and electronic devices to develop technologies used in various industries. This field covers a broad range of topics including electric circuits, machines, power systems, control systems, digital electronics, embedded systems, and instrumentation..',
    images: [eeeImg],
  },
];

export default function CourseDetails() {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-5" style={{ fontFamily: 'Dosis, sans-serif' }}>
          Course Details
        </h2>

        {courseDetails.map((course, index) => (
          <Row className="mb-5 align-items-center" key={index}>
            <Col md={6} className="mb-3">
              <Image
                src={course.images[0]}
                alt={course.title}
                fluid
                rounded
                style={{ height: '250px', objectFit: 'cover', width: '100%' }}
              />
            </Col>

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

      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4" style={{ fontFamily: 'Dosis, sans-serif' }}>
          Fee Structure
        </h2>
        <Row className="g-4">
          {/* First Year Diploma Fee Structure */}
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-center mb-3">First Year Diploma Fee Structure</Card.Title>
                <p><strong>At the Time of Admission:</strong></p>
                <ul>
                  <li>Admission Fees: ₹600</li>
                  <li>Tuition Fees: ₹12,100</li>
                  <li>Caution Deposit: ₹2,000</li>
                  <li>PTA: ₹2,800</li>
                  <li>Technical Club Reg. Fees: ₹500</li>
                  <li>Placement Cell Reg. Fees: ₹750</li>
                  <li><strong>Total: ₹18,750</strong></li>
                </ul>

                <p><strong>2nd to 6th Semester:</strong></p>
                <ul>
                  <li>₹12,100 (each remaining semester)</li>

                </ul>
                <hr />

                <p><strong>First Year Fees:</strong> ₹30,850</p>
                <p><strong>Second Year:</strong> ₹24,200</p>
                <p><strong>Final Year:</strong> ₹24,200</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Lateral Entry Fee Structure */}
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold text-center mb-3">Lateral Entry Fee Structure</Card.Title>
                <p><strong>At the Time of Admission:</strong></p>
                <ul>
                  <li>Admission Fees: ₹600</li>
                  <li>Tuition Fees: ₹12,100</li>
                  <li>Caution Deposit: ₹2,000</li>
                  <li>Additional Tuition Fees: ₹10,000</li>
                  <li>PTA: ₹2,800</li>
                  <li>Technical Club Reg. Fees: ₹500</li>
                  <li>Placement Cell Reg. Fees: ₹750</li>
                  <li><strong>Total: ₹28,750</strong></li>
                </ul>

                <p><strong>4th to 6th Semester:</strong></p>
                <ul>
                  <li>₹12,100 (each remaining semester)</li>
                </ul>

                <hr />
                <p><strong>Second Year:</strong> ₹40850</p>
                <p><strong>Final Year:</strong> ₹24200</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
