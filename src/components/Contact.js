import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Typed from "react-typed";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CountriesList from "./CountriesList";
import "../Stylesheets/Contact.css";
import "animate.css/animate.min.css";
import lottie from 'lottie-web';
import tickAnim from '../Animations/tickanim.json'
import crossanim from '../Animations/crossanim.json'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [sbmsg, setSbmsg] = useState(null);
  const [Atclr, setAtclr] = useState(null);
  const [smstatus, setSmstatus] = useState(null);
  let animContainer = React.createRef();
  const RenderedStrings = ["Queries", "Concerns", "Suggestions", "Feedback"];
  useEffect(() => {
    lottie.destroy();
    if((isVisible) && (smstatus == 'failed'))  
    {
      lottie.loadAnimation({
      container : animContainer.current,
      animationData : crossanim,
      loop : false
    })
    }
    else if((isVisible) && (smstatus == 'submitted'))  
    {
      
      lottie.destroy()
      lottie.loadAnimation({
      container : animContainer.current,
      animationData : tickAnim,
      loop: false
    })
    }
    
  }, [isVisible, smstatus]);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
 
  const Sbmit_Mail = (e) => {
    e.preventDefault();
    const Subject = document.querySelector("#Fm_Subject").value;
    const Country = document.querySelector("#Fm_Country").value;
    const Name = document.querySelector("#Fm_Name").value;
    const Email = document.querySelector("#Fm_Email").value;
    const CommentV = () => {
      let Comment = document.querySelector("#Fm_Cmnt").value;
      if (Comment === "") return null;
    };
    const cleanup = ()=> {
      document.querySelector("#Fm_Subject").value = null;
      document.querySelector("#Fm_Country").value = '';
      document.querySelector("#Fm_Name").value = null;
      document.querySelector("#Fm_Email").value = null;
      document.querySelector("#Fm_Cmnt").value = '';
    }

    if (Subject && Country && Name && Email && CommentV() !== null) {
      {/*emailjs.sendForm(
        process.env.REACT_APP_ServiceID,
        process.env.REACT_APP_TemplateID,
        e.target,
        process.env.REACT_APP_ApiID
      );*/}
      cleanup()
      setIsVisible(true)
      setSmstatus('submitted')
      //setAtclr('success');
      setSbmsg("Submitting, One Moment !");
      setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    } else {
      setIsVisible(true);
      setSmstatus('failed')
      //setAtclr('danger');
      setSbmsg("All fields must be field");
       setTimeout(() => {
        setIsVisible(false);
      }, 1600);
    }
  };

  return (
    <>
      <div className="Contact_Sec_1">
        <h2 style={{ marginBottom: "0em" }} className="head_style highlight">
          Contact us
        </h2>
        <p className="head_style_def">
          Your{" "}
          <Typed
            className="highlight_def"
            strings={RenderedStrings}
            typeSpeed={130}
            backSpeed={20}
            cursorChar="&nbsp;_"
            loopCount={1}
          />
        </p>
      </div>
      <Container className="Media_1">
        <Row>
          <Col xs={12}>
            <h4 style={{ fontWeight: "bold" }}>Fill out the form</h4>
            <Form onSubmit={Sbmit_Mail}>
              <Form.Group className="mb-3" controlId="ContactForm">
                <Form.Label>Subject</Form.Label>
                <FloatingLabel
                  controlId="Fm_Subject"
                  label="Enter Subject"
                  className="mb-3"
                >
                  <Form.Control type="text" name="Cs_Subject" />
                </FloatingLabel>

                <Form.Label>Country</Form.Label>
                <Form.Select
                  aria-label="Country/Residence"
                  name="Cs_Country"
                  id="Fm_Country"
                  style={{ marginBottom: "1em" }}
                >
                  <CountriesList />
                </Form.Select>

                <Form.Label>Name</Form.Label>
                <FloatingLabel
                  controlId="Fm_Name"
                  label="Enter Name"
                  className="mb-3"
                >
                  <Form.Control type="text" name="Cs_Name" />
                </FloatingLabel>

                <Form.Label>Email address</Form.Label>
                <FloatingLabel
                  controlId="Fm_Email"
                  label="Enter email"
                  className="mb-3"
                >
                  <Form.Control type="email" name="Cs_Mail" />
                </FloatingLabel>

                <Form.Group controlId="Fm_Cmnt">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    name="Cs_Concern"
                    as="textarea"
                    rows={5}
                    placeholder="Leave a comment"
                  />
                </Form.Group>
              </Form.Group>
              <Button
                className="bg_anim"
                id="showButton"
                style={{ width: "100%", border: "none" }}
                type="submit"
              >
                Submit
              </Button>
              <div style={{display: `${isVisible ? 'block' : 'none'}`}} className={`${isVisible ? 'entryanim' : ''} ${!isVisible && 'exitanim'}`}>
              <div ref={animContainer} className='animContainer'></div>
              <p style={{color : `${smstatus == 'submitted' ? 'green' : 'red'}`, width:"fit-content", margin:"0 auto 1em auto", fontFamily : 'Carme'}}>{sbmsg}</p>
              </div>
              
             {/* { <Alert
                className={`${isVisible ? 'entryanim' : ''} ${!isVisible && 'exitanim'}`}
                variant={Atclr}
                show={isVisible}
                style={{
                  width: "87%",
                  margin: "1em auto 1em auto",
                  textAlign: "center"
                }}
              >
                
                asdasd
                
                
              </Alert>} */}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
