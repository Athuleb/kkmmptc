import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/about.css';

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-info text-white py-4 text-center mt-2">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="lead mb-0">K. Karunakaran Memorial Model Polytechnic College, Mala</p>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        {/* Legacy Section */}
        <Row className="mb-5">
          <Col md={12}>
            <h3 className="text-primary fw-bold mb-3">Our Legacy</h3>
            <p className="text-muted fs-5">
              Established in 1993, the college is a premier technical institution in Thrissur, Kerala.
              Situated on a lush 12.375-acre campus, the college is committed to providing
              quality technical education with a student strength of 680 and a dedicated faculty of 10.
            </p>
          </Col>
        </Row>

        {/* Facilities, Activities, Programmes */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <h4 className="text-secondary fw-semibold">Facilities</h4>
            <ul className="list-unstyled ps-3">
              <li>Modern classrooms and well-equipped labs</li>
              <li>Extensive library</li>
              <li>Dedicated faculty and staff</li>
              <li>Seminar hall</li>
              <li>Auditorium</li>
              <li>Canteen</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h4 className="text-secondary fw-semibold">Activities</h4>
            <ul className="list-unstyled ps-3">
              <li>NSS</li>
              <li>Bhoomithrasena Club</li>
              <li>Industry on Campus</li>
              <li>Technical Club</li>
              <li>Placement Cell</li>
              <li>Women Grievance Cell</li>
              <li>Anti Ragging Cell</li>
              <li>Sports and Arts</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h4 className="text-secondary fw-semibold">Programmes Offered</h4>
            <ul className="list-unstyled ps-3">
              <li>Computer Hardware Engineering</li>
              <li>Biomedical Engineering</li>
              <li>Electronics Engineering</li>
              <li>Computer Engineering</li>
              <li>Electrical and Electronics Engineering</li>
              <li>Robotic Process Automation</li>
            </ul>
          </Col>
        </Row>

        {/* Scholarships & Industry Collaboration */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <h4 className="text-success fw-semibold">Scholarships</h4>
            <ul className="list-unstyled ps-3">
              <li>Egrantz SC Department</li>
              <li>Egrantz for Fisheries</li>
              <li>APJ Abdul Kalam Scholarship</li>
              <li>Snehapoorvam Scholarship</li>
              <li>Merit Scholarship (NSP)</li>
              <li>Vidya Samunnadhi Scholarship</li>
              <li>Yashasvi Scholarship (AICTE)</li>
            </ul>
          </Col>

          <Col md={6} className="mb-4">
            <h4 className="text-success fw-semibold">Industry Collaboration</h4>
            <ul className="list-unstyled ps-3">
              <li>Lightner Power Control Private Limited</li>
              <li>Pilotsmith (India) Pvt. Ltd</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
