import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavbarComponent() {
  return (
    <Navbar bg="info" variant="dark" expand="lg" sticky="top" className="shadow py-3">
      <Container>

        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src="/ihrdlogorx.png"
            alt="IHRD Logo"
            width="65"
            height="60"
            className="me-3"

          />
          <span className="fw-bold fs-9 text-wrap" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', letterSpacing: '1px' }}
          >
            K.KARUNAKARAN MEMORIAL MODEL POLYTECHNIC COLLEGE
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-hover">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/academy" className="nav-hover">Academy</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className="nav-hover">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/news" className="nav-hover">News</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-hover">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
