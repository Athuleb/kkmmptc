import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const to = 'mptmala@ihrd.ac.in';
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Open user's email client with pre-filled details
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4" style={{ fontFamily: 'Dosis, sans-serif' }}>
        Contact Us
      </h2>

      <Row className="g-4">
        {/* Contact Form */}
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h5 className="fw-bold mb-3">Send Us a Message</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Email
              </Button>
            </Form>
          </Card>
        </Col>

        {/* College Contact Info */}
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h5 className="fw-bold mb-3">College Contact Information</h5>
            <p>
              <strong>The Principal</strong><br />
              K Karunakaran Memorial<br />
              Model Polytechnic College<br />
              Kallettumkara P.O., Thrissur District<br />
              Kerala, PIN-680 683
            </p>
            <p><strong>Phone:</strong> 0480-2720746</p>
            <p><strong>Mobile:</strong> 8547005080</p>
            <p><strong>Email:</strong> <a href="mailto:mptmala@ihrd.ac.in">mptmala@ihrd.ac.in</a></p>

            {/* Optional: Google Map */}
            <div className="mt-3">
              <iframe
                title="KKMMPTC Map"
                src="https://www.google.com/maps?q=K+Karunakaran+Memorial+Model+Polytechnic+College,+Kallettumkara&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
