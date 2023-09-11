import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CountriesList from './CountriesList';
import '../Stylesheets/Contact.css'
import { useEffect } from 'react';


export default function Contact() {
  return (
    <>
    <Container className="Media_1" style={{ marginTop: "6em", width:"58%"}}>
      <Row>
        <Col xs={12}>
          <h4 style={{ fontWeight: "bold" }}>Fill out the form</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Subject"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Default select example">
                <CountriesList />
              </Form.Select>
              <Form.Label>Name</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <Form.Label>Email address</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Leave a comment"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</>

  );
}
