import React, { useEffect, useState } from "react";
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
import lottie from "lottie-web";
import tka from "../assets/jsa/tka.json";
import csa from "../assets/jsa/csa.json";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Contact() {
  const { t } = useTranslation();
  const Slng = i18next.language;
  const [isVisible, setIsVisible] = useState(false);
  const [sbmsg, setSbmsg] = useState(null);
  const [smstatus, setSmstatus] = useState(null);
  const [idir, setIdir] = useState("ltr");
  let animContainer = React.createRef();
  const RenderedStrings = [
    t("Contact.St1"),
    t("Contact.St2"),
    t("Contact.St3"),
    t("Contact.St4"),
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    lottie.destroy();
    if (isVisible && smstatus == "failed") {
      lottie.loadAnimation({
        container: animContainer.current,
        animationData: csa,
        loop: false,
      });
    } else if (isVisible && smstatus == "submitted") {
      lottie.loadAnimation({
        container: animContainer.current,
        animationData: tka,
        loop: false,
      });
    }
  }, [isVisible, smstatus]);

  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
  }, [Slng]);

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
    const cleanup = () => {
      Subject.value = null;
      Country.value = "";
      Name.value = null;
      Email.value = null;
      Comment.value = "";
    };

    if (
      Subject.value &&
      Country.value &&
      Name.value &&
      Email.value &&
      CommentV() !== null
    ) {
      {
        emailjs.sendForm(
          process.env.REACT_APP_ServiceID,
          process.env.REACT_APP_TemplateID,
          e.target,
          process.env.REACT_APP_ApiID
        );
      }
      cleanup();
      setIsVisible(true);
      setSmstatus("submitted");
      setSbmsg("Submitted !");
      const Ani_Kntnr = document.querySelector("#Ani_Kntnr");
      setTimeout(() => {
        Ani_Kntnr.classList.remove("entryanim");
        Ani_Kntnr.classList.add("exitanim");
      }, 2000);
      setTimeout(() => {
        setIsVisible(false);
      }, 2350);
    } else {
      setIsVisible(true);
      setSmstatus("failed");
      setSbmsg("Please fill all fields !");
      const Ani_Kntnr = document.querySelector("#Ani_Kntnr");
      setTimeout(() => {
        Ani_Kntnr.classList.remove("entryanim");
        Ani_Kntnr.classList.add("exitanim");
      }, 2400);
      setTimeout(() => {
        setIsVisible(false);
      }, 2750);
    }
  };

  return (
    <>
      <div className="Contact_Sec_1" dir={idir}>
        <h2
          style={{ marginBottom: "0em" }}
          className="head_style highlight RTL_Thd"
          S_language={Slng}
        >
          {t("Titles.Contactus")}
        </h2>
        <p className="RTL_Thd head_style_def" S_language={Slng}>
          {t("Contact.Hd2")}{" "}
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
      <Container className="Media_1" style={{ textAlign: "center" }}>
        <Row>
          <Col xs={12}>
            <h4
              className="RTL_Thd"
              S_language={Slng}
              style={{ fontWeight: "bold" }}
            >
              {t("Contact.Fmhd")}
            </h4>
            <Form onSubmit={Sbmit_Mail}>
              <Form.Group className="mb-3" controlId="ContactForm">
                <span dir="ltr">
                  <Form.Label className="RTL_Tdes" S_language={Slng}>
                    {t("Contact.Sbj")}
                  </Form.Label>
                </span>
                <FloatingLabel
                  aria-label="Subject"
                  controlId="Fm_Subject"
                  label="*"
                  className="mb-3"
                >
                  <Form.Control type="text" name="Cs_Subject" />
                </FloatingLabel>

                <Form.Label className="RTL_Tdes" S_language={Slng}>
                  {t("Contact.Cnt")}
                </Form.Label>
                <Form.Select
                  aria-label="Country/Residence"
                  name="Cs_Country"
                  id="Fm_Country"
                  style={{ marginBottom: "1em" }}
                >
                  <CountriesList />
                </Form.Select>

                <Form.Label className="RTL_Tdes" S_language={Slng}>
                  {t("Contact.Nme")}
                </Form.Label>
                <FloatingLabel
                  aria-label="Name"
                  controlId="Fm_Name"
                  label="*"
                  className="mb-3"
                >
                  <Form.Control type="text" name="Cs_Name" />
                </FloatingLabel>

                <Form.Label className="RTL_Tdes" S_language={Slng}>
                  {t("Contact.Eml")}
                </Form.Label>
                <FloatingLabel
                  aria-label="Email Address"
                  controlId="Fm_Email"
                  label="*"
                  className="mb-3"
                >
                  <Form.Control type="email" name="Cs_Mail" />
                </FloatingLabel>

                <Form.Group controlId="Fm_Cmnt">
                  <Form.Label
                    className="RTL_Tdes"
                    S_language={Slng}
                    aria-label="Suggestion/ Comment"
                  >
                    {t("Contact.Kmnt")}
                  </Form.Label>
                  <Form.Control
                    name="Cs_Concern"
                    as="textarea"
                    rows={5}
                    placeholder="*"
                  />
                </Form.Group>
              </Form.Group>
              <Button
                className="RTL_Thd bg_anim"
                S_language={Slng}
                id="showButton"
                style={{ width: "100%", border: "none" }}
                type="submit"
              >
                {t("Contact.Sbmt")}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "50vmin" }}>
        <div
          id="Ani_Kntnr"
          style={{ display: `${isVisible ? "block" : "none"}` }}
          className={`${isVisible ? "entryanim" : ""}`}
        >
          <div ref={animContainer} className="animContainer"></div>
          <p
            style={{
              color: `${smstatus == "submitted" ? "green" : "red"}`,
              width: "fit-content",
              margin: "0 auto 1em auto",
              fontFamily: "Carme",
            }}
          >
            {sbmsg}
          </p>
        </div>
      </div>
    </>
  );
}
