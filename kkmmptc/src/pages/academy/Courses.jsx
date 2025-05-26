import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

import elImg from '../../assets/images/courses/el.jpg';
import cheImg from '../../assets/images/courses/che.jpg';
import ceImg from '../../assets/images/courses/ce.jpg';
import rpaImg from '../../assets/images/courses/rpa.jpg';
import eeeImg from '../../assets/images/courses/eee.jpg';
import BmeImg from '../../assets/images/courses/bme.jpg';

const courses = [
    {
        id: 'electronics-engineering',
        title: 'Electronics Engineering',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Focuses on electronics circuits, communication systems, microprocessors, and embedded systems.',
        image: elImg
    },
    {
        id: 'computer-hardware-engineering',
        title: 'Computer Hardware Engineering',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Covers installation, maintenance, and troubleshooting of computer hardware and networks.',
        image: cheImg
    },
    {
        id: 'bio-medical-engineering',
        title: 'Bio-Medical Engineering',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Combines engineering with medical sciences for the design of medical equipment and devices.',
        image: BmeImg
    },
    {
        id: 'computer-engineering',
        title: 'Computer Engineering',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Emphasizes software development, programming, data structures, and computer networks.',
        image: ceImg
    },
    {
        id: 'robotic-process-automation',
        title: 'Robotic Process Automation',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Specializes in automation tools, AI, and software robotics to streamline digital workflows.',
        image: rpaImg
    },
    {
        id: 'electrical-and-electronics-engineering',
        title: 'Electrical and Electronics Engineering',
        seats: 60,
        duration: '3 Years',
        eligibility: 'SSLC or equivalent',
        description: 'Covers power systems, control systems, electronics, and electrical machines.',
        image: eeeImg
    }
];

export default function Course() {
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleShow = (course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 fw-bold" style={{ fontSize: '2.5rem', fontFamily: 'Dosis, sans-serif' }}>
                Courses Offered
            </h2>
            <Row className="g-4">
                {courses.map((course, idx) => (
                    <Col key={idx} md={6} lg={4}>
                        <Card className="shadow-lg h-100">
                            <Card.Img
                                variant="top"
                                src={course.image}
                                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="fw-bold">{course.title}</Card.Title>
                                    <Card.Text>{course.seats} Seats</Card.Text>
                                </div>
                                <Button
                                    variant="info"
                                    className="mt-3 w-100 text-white fw-semibold"
                                    onClick={() => handleShow(course)}
                                >
                                    Course Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {selectedCourse && (
                <Modal show={showModal} onHide={handleClose} centered size="lg" style={{ backgroundColor: 'rgb(0,0,0,.4' }}>

                    <div style={{backgroundColor:"white",borderRadius:"10px"}}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedCourse.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Row>
                                <Col md={5}>
                                    <img
                                        src={selectedCourse.image}
                                        alt={selectedCourse.title}
                                        className="img-fluid rounded"
                                    />
                                </Col>
                                <Col md={7}>
                                    <p><strong>Seats:</strong> {selectedCourse.seats}</p>
                                    <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                                    <p><strong>Eligibility:</strong> {selectedCourse.eligibility}</p>
                                    <p><strong>Description:</strong> {selectedCourse.description}</p>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </div>
                </Modal>
            )}
        </Container>
    );
}
