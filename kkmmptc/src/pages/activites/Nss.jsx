import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { AwardFill, PeopleFill, BuildingFill } from 'react-bootstrap-icons';
import NssGallery from '../../components/NssGallery';

export default function Nss() {
    return (
        <Container className="py-5">
            <h2 className="text-center text-primary mb-4">National Service Scheme (NSS)</h2>

            {/* NSS Overview */}
            <Card className="mb-5 shadow rounded-4 border-0">
                <Card.Body>
                    <Card.Title className="h5 text-secondary">UNIT NO. 4/IHRD-KKM MPTC, KALLETTUMKARA</Card.Title>
                    <Card.Text className="mt-3" style={{ textAlign: 'justify' }}>
                        NSS started in our institution in <strong>2009</strong>. The unit functions under the <strong>IHRD NSS Cell</strong> and is identified as <strong>Unit No. 4/IHRD</strong>.
                        Our NSS unit has conducted various community-centric activities such as:
                    </Card.Text>
                    <ul>
                        <li>Tree sapling planting</li>
                        <li>Blood donation and medical camps</li>
                        <li>Digital literacy awareness</li>
                        <li>Electrification and solar lighting for poor houses</li>
                        <li>“We Care” financial support</li>
                        <li>Anti-drug awareness campaigns</li>
                        <li>Cleanliness drives and Onam kit distribution</li>
                        <li>Visits to Pratheeksha Bhavan and old age homes</li>
                    </ul>
                    <Card.Text className="mt-3">
                        Every year, our volunteers actively participate in <strong>National Integration Camps</strong> held in different states of India.
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Achievements Section */}
            <Card className="mb-5 shadow rounded-4 border-0">
                <Card.Body>
                    <Card.Title className="h5 text-success">
                        <AwardFill className="me-2" />
                        Major Achievements of NSS
                    </Card.Title>
                    <Row className="mt-3">
                        <Col md={6}>
                            <h6>🏆 NSS Unit Awards</h6>
                            <p>Best NSS Unit IHRD State Awards:</p>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2015-16</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2016-17</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2017-18</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2020-21</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2022-23</Badge>
                        </Col>
                        <Col md={6}>
                            <h6>👤 Program Officer Awards</h6>
                            <p>Best Program Officer Awards:</p>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2015-16</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2016-17</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2017-18</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2020-21</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2021-22</Badge>
                            <Badge bg="light" text="dark" className="me-2 mb-2">2022-23</Badge>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h6>🙋 Volunteer Awards</h6>
                        <p>Best Volunteer Awards:</p>
                        <Badge bg="info" className="me-2 mb-2">2015-16</Badge>
                        <Badge bg="info" className="me-2 mb-2">2016-17</Badge>
                        <Badge bg="info" className="me-2 mb-2">2017-18</Badge>
                        <Badge bg="info" className="me-2 mb-2">2019-20</Badge>
                        <Badge bg="info" className="me-2 mb-2">2020-21</Badge>
                        <Badge bg="info" className="me-2 mb-2">2021-22</Badge>
                        <Badge bg="info" className="me-2 mb-2">2022-23</Badge>
                    </div>
                </Card.Body>
            </Card>

            {/* Advisory Committee */}
            <Card className="shadow rounded-4 border-0">
                <Card.Body>
                    <Card.Title className="h5 text-dark">
                        <PeopleFill className="me-2" />
                        Unit Level NSS Advisory Committee
                    </Card.Title>
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item><strong>1. Principal:</strong> Smt. Asha R <em>– Chairperson</em></ListGroup.Item>
                        <ListGroup.Item>
                            <strong>2. Two Staff Members with Social Background:</strong>
                            <ul className="mb-0">
                                <li>Anilkumar P R – Lecturer in Electronics (HG)</li>
                                <li>Ranthidev C S – Lecturer in Electronics</li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>3. Development Dept. Representative:</strong> Sri. K.R. Jojo – President, Aloor Grama Panchayat
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>4. Adopted Village Representative:</strong> Smt. Mini Sudheesh – Ward Member
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>5. Two NSS Leaders:</strong>
                            <ul className="mb-0">
                                <li>Abhinavkrishna M S</li>
                                <li>Anuja Santhosh</li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>6. NSS Program Officer:</strong> Ms. Yamini C K <em>– Member Secretary</em>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Container fluid className="px-0">
                <NssGallery />
            </Container>
        </Container>


    );
}
