import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profileImg from '../../assets/images/profile.avif';
import { motion } from "framer-motion";

const departments = [
    {
        name: "Computer Engineering",
        description: `Computer Engineering is a technical course designed to provide students with fundamental knowledge and practical skills in computing, software development, and hardware systems. The course typically spans 3 years and is offered after completing the 10th grade.
The curriculum covers programming languages (like C, Java, Python), data structures, computer networks, OS, DBMS, and web development. It includes hands-on training through labs and projects.
This diploma prepares students for IT jobs or further studies like B.E./B.Tech.`,
        hod: "Anilkumar P R",
        phone: "9495462909",
        email: "anilnellayi@gmail.com",
        image: profileImg,
        vision: "",
        mission: ""
    },
    {
        name: "Computer Hardware Engineering",
        description: `A 3-year polytechnic course focusing on computer hardware, electronics, and networking. Students learn assembly, maintenance, and troubleshooting of computer systems.
Subjects include microprocessors, computer architecture, OS, and networking.`,
        hod: "Ulsah R",
        phone: "9447573143",
        email: "ulsahr@gmail.com",
        image: profileImg
    },
    {
        name: "Bio-Medical Engineering",
        description: `This 3-year program blends engineering with medical science. Students learn to operate and maintain equipment like ECG, MRI, ventilators, etc.
Covers anatomy, physiology, electronics, instrumentation, and diagnostics.`,
        hod: "Krishnaveni K R",
        phone: "8301004975",
        email: "krishnavenikr8@gmail.com",
        image: profileImg,
    },
    {
        name: "Electronics Engineering",
        description: `A 3-year diploma in electronic devices, circuits, communication, microprocessors, PCB design, etc. Includes practical work, industrial training, and simulation tools.`,
        hod: "Anilakumarai C A",
        phone: "8086819474",
        email: "caanila@gmail.com",
        image: profileImg
    },
    {
        name: "Electrical and Electronics Engineering",
        description: `A 3-year diploma program covering power systems, control systems, electromagnetism, and electronic devices. High scope due to demand in electric vehicles and solar systems.`,
        hod: "DwitheeshKumar P B",
        phone: "9744392786",
        email: "dwitheeshihrd@gmail.com",
        image: profileImg
    },
    {
        name: "Robotic Process Automation",
        description: `A 3-year course in RPA technologies like UiPath, Blue Prism, and Automation Anywhere. Trains students to automate repetitive tasks using bots and scripting.`,
        hod: "Ciya K Paul",
        phone: "9142225569",
        email: "ciyakpaul@gmail.com",
        image: profileImg
    }
];

export default function Department() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Departments</h2>
            <Row>
                {departments.map((dept, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                        {/* Motion wrapper per card with initial/whileInView */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}

                            whileHover={{ scale: 1.05 }}
                            style={{ height: '100%' }}
                        >
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={dept.image}
                                    alt={`HOD of ${dept.name}`}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{dept.name}</Card.Title>
                                    <Card.Text style={{ whiteSpace: "pre-line" }}>
                                        {dept.description}
                                    </Card.Text>
                                    {dept.vision && (
                                        <>
                                            <h6 className="mt-3">Vision</h6>
                                            <p style={{ whiteSpace: "pre-line" }}>{dept.vision}</p>
                                        </>
                                    )}
                                    {dept.mission && (
                                        <>
                                            <h6>Mission</h6>
                                            <p style={{ whiteSpace: "pre-line" }}>{dept.mission}</p>
                                        </>
                                    )}
                                    <hr />
                                    <p><strong>HOD:</strong> {dept.hod}</p>
                                    <p><strong>Phone:</strong> {dept.phone}</p>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <a
                                            href={`mailto:${dept.email}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {dept.email}
                                        </a>
                                    </p>

                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
