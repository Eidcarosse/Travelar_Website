import React from 'react'
import emailjs from '@emailjs/browser';
import Typed from 'react-typed';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CountriesList from './CountriesList';
import '../Stylesheets/Contact.css'
import { useState } from 'react';
import "animate.css/animate.min.css";




export default function Contact() {
  const[Smsg, setSmsg] = useState(null);
  const[Altmsg, setAltmsg] = useState(null);
  const[Atclr, setAtclr] = useState(null);

  const RenderedStrings = [
    "Queries",
    "Concerns",
    "Suggestions",
    "Feedback"
  ];

   
  const sspp = (e) =>{
    e.preventDefault();
    let Subject = document.querySelector("#Fm_Subject").value;
    let Country = document.querySelector("#Fm_Country").value;
    let Name = document.querySelector("#Fm_Name").value;
    let Email = document.querySelector("#Fm_Email").value;
    let CommentV = () => {
      let Comment = document.querySelector("#Fm_Cmnt").value;
      if (Comment == '') return null;
    } 


    if (Subject && Country && Name && Email && CommentV() !== null)
    {
      emailjs.sendForm(process.env.REACT_APP_ServiceID, process.env.REACT_APP_TemplateID, e.target, process.env.REACT_APP_ApiID)
      setAtclr("success");
      setSmsg("show");
      setAltmsg("Submitted Successfully, Thank you !")
      setTimeout(() => {
      setSmsg(null)
      }, 2500);}
    else
    {
      setAtclr("danger");
      setSmsg("show");
      setAltmsg("All fields must be field");
      setTimeout(() => {
        setSmsg(null)
      }, 2500);
    }
  }

  const sendEmail = (e)=>{
    e.preventDefault();
  } 

  return (
    <>
    <div className='Contact_Sec_1'>
      <h2 style={{marginBottom:"0em"}} className="head_style highlight">Contact us</h2>
     <p className='head_style_def'>Your <Typed className='highlight_def' strings={RenderedStrings} typeSpeed={130} backSpeed={20} cursorChar='&nbsp;_' loopCount={1}/></p>
      
    </div>
    <Container className="Media_1">
      <Row>
        <Col xs={12}>
          <h4 style={{ fontWeight: "bold" }}>Fill out the form</h4>
          <Form onSubmit={sspp}>
            <Form.Group className="mb-3" controlId="ContactForm">
                
              <Form.Label>Subject</Form.Label>
              <FloatingLabel
                controlId="Fm_Subject"
                label="Enter Subject"
                className="mb-3"
              >
              <Form.Control type="text" name='Cs_Subject' placeholder="Enter Subject" />
              </FloatingLabel>

              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Country/Residence" name='Cs_Country' id='Fm_Country'>
                <CountriesList/>     
              </Form.Select>
              
              <Form.Label>Name</Form.Label>
              <FloatingLabel
                controlId="Fm_Name"
                label="Enter Name"
                className="mb-3"
              >
              <Form.Control type="text" name='Cs_Name' placeholder="Enter Name" />
              </FloatingLabel>

              <Form.Label>Email address</Form.Label>
              <FloatingLabel
                controlId="Fm_Email"
                label="Enter email"
                className="mb-3"
              >
              <Form.Control type="email" name='Cs_Mail' placeholder="name@gmail.com" />
              </FloatingLabel>

              <Form.Group controlId='Fm_Cmnt'>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                name='Cs_Concern'
                as="textarea"
                rows={5}
                placeholder="Leave a comment"
              />
              </Form.Group>

            </Form.Group>

            <Button className="bg_anim"  style={{width:"100%", border:"none"}} type="submit">
              Submit
            </Button>
            <Alert variant={Atclr} show={Smsg} style={{width:"87%",margin:"1em auto 0 auto", textAlign:"center"}}>{Altmsg}</Alert>

            
          </Form>
        </Col>
      </Row>
    </Container>
</>

  );

  
}
