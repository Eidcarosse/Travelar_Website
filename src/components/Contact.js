import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CountriesList from './CountriesList';
import '../Stylesheets/Contact.css'



export default function Contact() {

  const sendEmail = (e)=>{
    e.preventDefault();
    console.log("Clicked")
  }

  return (
    <>
    <div className='Contact_Sec_1'>
      <h2 className="head_style highlight">Contact us</h2>
    </div>
    <Container className="Media_1">
      <Row>
        <Col xs={12}>
          <h4 style={{ fontWeight: "bold" }}>Fill out the form</h4>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Subject</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Subject"
                className="mb-3"
              >
              <Form.Control type="text" name='Cs_Subject' placeholder="Enter Subject" />
              </FloatingLabel>

              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Default select example" name='Cs_country'>
                <CountriesList />
              </Form.Select>
              
              <Form.Label>Name</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Name"
                className="mb-3"
              >
              <Form.Control type="text" name='Cs_Name' placeholder="Enter Name" />
              </FloatingLabel>

              <Form.Label>Email address</Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter email"
                className="mb-3"
              >
              <Form.Control type="email" name='Cs_Mail' placeholder="name@example.com" />
              </FloatingLabel>

              <Form.Label>Comment</Form.Label>
              <Form.Control
                name='Cs_Concern'
                as="textarea"
                rows={5}
                placeholder="Leave a comment"
              />
            </Form.Group>

            <Button style={{width:"100%", backgroundColor:"#3a9bdc"}} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</>

  );
}
