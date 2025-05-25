import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const staffData = [
  {
    title: 'JS. Superintendent',
    members: ['FILLY K J'],
  },
  {
    title: 'Technical Store Keeper',
    members: ['SREELATHA C T'],
  },
  {
    title: 'Data Entry Operators',
    members: ['LIJA A R', 'NANDHANA MUKUND'],
  },
  {
    title: 'Office Assistant',
    members: ['SRUTHI P S'],
  },
  {
    title: 'Last Grade Servants',
    members: ['Smt. PREETHI M G', 'SMITHA P S'],
  },
  {
    title: 'P.T. Sweepers',
    members: ['KHAIRUNNISA V K', 'BINDHU A R', 'MOVISHA A M'],
  },
  {
    title: 'Security Guards',
    members: ['LOHITHAKSHAN C C', 'ASOKAN T S'],
  },
];

const Administration = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Administrative Staff</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {staffData.map((group, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary">{group.title}</Card.Title>
                <ul className="mb-0">
                  {group.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Administration;
