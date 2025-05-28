import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaUser } from 'react-icons/fa';

export default function VisionMission() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-info text-white py-5 text-center">
        <h1 className="display-5 fw-bold">Vision & Mission</h1>
        <p className="lead mb-0">K. Karunakaran Memorial Model Polytechnic College, Kallettumkara</p>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        <Row className="mb-5 justify-content-center text-center">
          <Col md={6} className="mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaBook size={40} color="#0d47a1" className="mb-3" />
              <h2
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  fontWeight: 700,
                  fontSize: '28px',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  color: '#0d47a1',
                }}
              >
                Our Mission
              </h2>
              <ul
                style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  fontFamily: "'Dosis', sans-serif",
                  color: '#333',
                  textAlign: 'center',
                  listStyleType: 'none',
                  padding: 0,
                }}
              >
                <li>
                  <strong>About Technical Knowledge:</strong>
                  <br />
                  To cultivate a community of professionals driven by a passion for technical excellence through comprehensive and cutting-edge education, mentorship, and experiential learning.
                </li>
                <li style={{ marginTop: '15px' }}>
                  <strong>About Social Commitment:</strong>
                  <br />
                  Promoting the true spirit of social commitment by accomplishing community development activities.
                </li>
              </ul>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <FaUser size={40} color="#0d47a1" className="mb-3" />
              <h2
                style={{
                  fontFamily: "'Dosis', sans-serif",
                  fontWeight: 700,
                  fontSize: '28px',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  color: '#0d47a1',
                }}
              >
                Our Vision
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  fontFamily: "'Dosis', sans-serif",
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                Creating professionals with excellent technical skills and social commitment.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
