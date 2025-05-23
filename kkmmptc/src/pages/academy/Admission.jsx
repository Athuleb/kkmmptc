import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../styles/admission.css'
export default function Admission() {
  return (
    <Container className="my-5">
      <h2
        className="text-center mb-4 fw-bold"
        style={{ fontSize: '2.5rem', fontFamily: 'Dosis, sans-serif' }}
      >
        Diploma Admission in the Polytechnic Colleges
      </h2>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Text>
            <ul>
              <li>
                <a href="/MPT25.pdf" target="_blank" rel="noopener noreferrer" className="link-no-underline text-primary">
                  Admission to Diploma Courses in MPTCs under IHRD - Notification
                </a>
              </li>
              <li>
                <a href="https://www.polyadmission.org/" target="_blank" rel="noopener noreferrer" className="link-no-underline text-danger">
                  <strong>2025-26:</strong> അദ്ധ്യയന വർഷത്തിൽ ലാറ്ററൽ എൻട്രി വഴി നേരിട്ട് പോളിടെക്നിക് ഡിപ്ലോമ രണ്ടാം വർഷത്തിലേയ്ക്കുള്ള <em>One-time രജിസ്ട്രേഷനും ഓൺലൈൻ അപേക്ഷ സമർപ്പണവും</em>
                </a>
              </li>
              <li>
                <a href="https://www.polyadmission.org/" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                  <strong>2025-26:</strong> അദ്ധ്യയന വർഷത്തെ പോളിടെക്നിക് കോളേജ് റഗുലർ ഡിപ്ലോമ പ്രവേശനത്തിനുള്ള <em>One-time രജിസ്ട്രേഷനും ഓൺലൈൻ അപേക്ഷ സമർപ്പണവും</em>
                </a>
              </li>
            </ul>

          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="fw-bold">Contact for Admissions</Card.Title>
          <Card.Text>
            <strong>Phone:</strong> 0480-2720746<br />
            <strong>Mobile:</strong> 8547005080<br />
            <strong>Email:</strong> mptmala@ihrd.ac.in<br />
            <strong>Office Hours:</strong> Mon – Sat, 9 AM – 4 PM
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
