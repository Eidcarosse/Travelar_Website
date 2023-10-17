import React, { useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Typed from "react-typed";
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
import tickAnim from '../Animations/tickanim3.json'
import crossanim from '../Animations/crossanim.json'
import {useTranslation} from 'react-i18next'



export default function Contact() {

  const {t} = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [sbmsg, setSbmsg] = useState(null);
  const [smstatus, setSmstatus] = useState(null);
  let animContainer = React.createRef();
  const RenderedStrings = ["Queries", "Concerns", "Suggestions", "Feedback"];

  useEffect(() => {
    lottie.destroy();
    if(isVisible && smstatus == 'failed')  
    {
      lottie.loadAnimation({
      container : animContainer.current,
      animationData : crossanim,
      loop : false
    })
    }
    else if(isVisible && smstatus == 'submitted')  
    {
      lottie.loadAnimation({
      container : animContainer.current,
      animationData : tickAnim,
      loop: false
    })
    }
    
  }, [isVisible, smstatus]);

  useEffect(()=>{
    window.scrollTo(0, 0);
    const element = document.getElementById('myElement');
    const contentHeight = element.scrollHeight;
    const additionalHeight = 135; // Adjust this value as needed
    element.style.height = `calc(${contentHeight}px + ${additionalHeight}px)`;
  },[])
  
 
  const Sbmit_Mail = (e) => {
    e.preventDefault();
    let Subject = document.querySelector("#Fm_Subject");
    let Country = document.querySelector("#Fm_Country");
    let Name = document.querySelector("#Fm_Name");
    let Email = document.querySelector("#Fm_Email");
    let Comment = document.querySelector("#Fm_Cmnt");
    const CommentV = () => {
      if (Comment.value === "") return null;
    };
    const cleanup = ()=> {
      Subject.value = null;
      Country.value = '';
      Name.value = null;
      Email.value = null;
      Comment.value = '';
    }
    
    if (Subject.value && Country.value && Name.value && Email.value && CommentV() !== null) {
      {/*emailjs.sendForm(
        process.env.REACT_APP_ServiceID,
        process.env.REACT_APP_TemplateID,
        e.target,
        process.env.REACT_APP_ApiID
      );*/}
      cleanup()
      setIsVisible(true)
      setSmstatus('submitted')
      setSbmsg('Submitted !');
      const Ani_Kntnr = document.querySelector('#Ani_Kntnr')
      setTimeout(() => {
        Ani_Kntnr.classList.remove('entryanim')
        Ani_Kntnr.classList.add('exitanim')
        
        
      }, 2000);
      setTimeout(() => {
        setIsVisible(false);
      }, 2350);
    }
    else {
      setIsVisible(true);
      setSmstatus('failed')
      setSbmsg("Please fill all fields !");
      const Ani_Kntnr = document.querySelector("#Ani_Kntnr")
      setTimeout(() => {
        Ani_Kntnr.classList.remove('entryanim')
        Ani_Kntnr.classList.add('exitanim')  
        
      }, 2400);
       setTimeout(() => {
        setIsVisible(false);
      }, 2750);
    }
  };

  return (
    <>
      <div className="Contact_Sec_1">
        <h2 style={{ marginBottom: "0em" }} className="head_style highlight">
          {t('Titles.Contactus')}
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
      <Container id='myElement' className="Media_1">
        <Row>
          <Col xs={12}>
            <h4 style={{ fontWeight: "bold" }}>Fill out the form</h4>
            <Form onSubmit={Sbmit_Mail}>
              <Form.Group className="mb-3" controlId="ContactForm">
                <Form.Label>Subject</Form.Label>
                <FloatingLabel
                  aria-label="Subject"
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
                 aria-label="Name"
                  controlId="Fm_Name"
                  label="Enter Name"
                  className="mb-3"
                >
                  <Form.Control type="text" name="Cs_Name" />
                </FloatingLabel>

                <Form.Label>Email address</Form.Label>
                <FloatingLabel
                  aria-label="Email Address"
                  controlId="Fm_Email"
                  label="Enter email"
                  className="mb-3"
                >
                  <Form.Control type="email" name="Cs_Mail" />
                </FloatingLabel>

                <Form.Group controlId="Fm_Cmnt">
                  <Form.Label  aria-label="Suggestion/ Comment">Comment</Form.Label>
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
              <div id='Ani_Kntnr' style={{display: `${isVisible ? 'block' : 'none'}`}} className={`${isVisible ? 'entryanim' : ''}`}>
              <div ref={animContainer} className='animContainer'></div>
              <p style={{color : `${smstatus == 'submitted' ? 'green' : 'red'}`, width:"fit-content", margin:"0 auto 1em auto", fontFamily : 'Carme'}}>{sbmsg}</p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
