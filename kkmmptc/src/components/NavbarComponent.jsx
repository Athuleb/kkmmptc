import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      bg="info"
      variant="dark"
      expand="lg"
      sticky="top"
      className={`navbar-custom shadow py-3 ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src="/ihrdlogorx.png"
            alt="IHRD Logo"
            width="65"
            height="60"
            className="me-3"
          />
          <span
            className="fw-bold fs-9 text-wrap"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '2rem',
              letterSpacing: '1px',
            }}
          >
            K.KARUNAKARAN MEMORIAL MODEL POLYTECHNIC COLLEGE
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-hover">Home</Nav.Link>
            <NavDropdown title="Academy" id="academy-dropdown" className="nav-hover">
              <NavDropdown.Item as={NavLink} to="/academy/courses" >Courses</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/academy/course-details">Course Details</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/academy/admission">Admission Details</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/academy/department">Department</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Activities" id="activities-dropdown" className="nav-hover">
              <NavDropdown.Item as={NavLink} to="/activities/nss" >NSS</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/bhoomithrasena-club">Bhoomithrasena Club</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/industry-on-campus">Industry on Campus</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/technical-club">Technical Club</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/pta">PTA</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/women-grievance-cell">Women Grievance Cell</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/anti-ragging-cell">Anti Ragging Cell</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/activities/sports-and-arts">Sports and Arts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Profile" id="profile-dropdown" className="nav-hover">
              <NavDropdown.Item as={NavLink} to="/profile/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/profile/vision-mission">Vision and Mission</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/profile/principal">Principal</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/profile/administration">Administration</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/gallery" className="nav-hover">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/placement-cell" className="nav-hover">Placement cell</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-hover">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
