import React from "react";
import "../Stylesheets/AboutMain.css";
import Home from "./Home";
import InfoBanner from "./InfoBanner";
import MWBtn from "./MwBtn";
import avatar1 from "../assets/SVGs/Avatar1.svg";
import avatar2 from "../assets/SVGs/Avatar2.svg";
import avatar3 from "../assets/SVGs/Avatar3.svg";
import AboutUsImg from "../assets/SVGs/AboutUsImg.svg";
import Missn_Img from "../assets/SVGs/OdRd4.svg";
import ShredGoals from "../assets/SVGs/ShredGoals.svg";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function AboutMain(props) {
  const { t } = useTranslation();
  const Slng = i18next.language;

  return (
    <>
      <Home
        key="New1"
        title={t("Titles.Aboutus")}
        description={t("Descriptions.Aboutus")}
        logo={AboutUsImg}
      />

      <div className="About_Main">
        <div className="Abt_Main_Wrapper">
          <h3 className="head_style_cs1 RTL_Thd" s_language={Slng}>
            {t("AboutMain.Titles.WAAH4")}
          </h3>
          <h4 className="head_style_cs2 highlight RTL_Thd" s_language={Slng}>
            {t("AboutMain.Titles.WAAH4U")}
          </h4>
          <p className="RTL_Tdes" s_language={Slng}>
            {t("AboutMain.Descriptions.WAAH4")}
          </p>
          <Link
            to="/Contact"
            onClick={props.top_function}
            className="Cotn_Btn RTL_Thd try_trans"
            s_language={Slng}
          >
            {t("AboutMain.Descriptions.BTN")}
          </Link>
        </div>
      </div>

      <InfoBanner
        key="AM01"
        Title={t("InfoBanner.Titles.Abt1")}
        description={t("InfoBanner.Descriptions.Abt1")}
        Image={Missn_Img}
      />
      <div className="About_Main">
        <div className="Abt_Main_Wrapper">
          <h3 className="head_style highlight RTL_Thd" s_language={Slng}>
            {t("AboutMain.Titles.TMZ")}
          </h3>
          <hr />
          <Row>
            <Col md={4}>
              <Card className="mt-3 Abt_Main_Teams_Cards">
                <Card.Body>
                  <Card.Title
                    className="Abt_Inherit_Txt RTL_Thd"
                    s_language={Slng}
                  >
                    {t("AboutMain.TeamsCard.Titles.H1")}
                  </Card.Title>
                  <Button
                    className="mb-2 Abt_Sb_Inherit_Txt btn_Bs_Stn RTL_Tdes"
                    s_language={Slng}
                    href="mailto:chmuttaqeen2@gmail.com"
                  >
                    {t("AboutMain.TeamsCard.Titles.H1C")}
                  </Button>
                  <Card.Title
                    className="Abt_Inherit_Txt RTL_Thd"
                    s_language={Slng}
                  >
                    {t("AboutMain.TeamsCard.Titles.H2")}
                  </Card.Title>
                  <Button
                    className="mb-2 Abt_Sb_Inherit_Txt RTL_Tdes btn_Bs_Stn"
                    s_language={Slng}
                    href="mailto:chmuttaqeen@gmail.com"
                  >
                    {t("AboutMain.TeamsCard.Titles.H2C")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="mt-3 Abt_Main_Teams_Cards"
                style={{ width: "100%", height: "13em" }}
              >
                <Card.Body>
                  <Card.Title
                    className="Abt_Inherit_Txt RTL_Thd"
                    s_language={Slng}
                  >
                    {t("AboutMain.TeamsCard.Titles.H3")}
                  </Card.Title>
                  <Button
                    className="mb-2 Abt_Sb_Inherit_Txt RTL_Tdes btn_Bs_Stn"
                    s_language={Slng}
                    href="mailto:chmuttaqeen@gmail.com"
                  >
                    {t("AboutMain.TeamsCard.Titles.H3C")}
                  </Button>
                  <Card.Title
                    className="Abt_Inherit_Txt RTL_Thd"
                    s_language={Slng}
                  >
                    {t("AboutMain.TeamsCard.Titles.H4")}
                  </Card.Title>
                  <Button
                    className="mb-2 Abt_Sb_Inherit_Txt RTL_Tdes btn_Bs_Stn"
                    s_language={Slng}
                    href="mailto:chmuttaqeen@gmail.com"
                  >
                    {t("AboutMain.TeamsCard.Titles.H4C")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="mt-3 Abt_Main_Teams_Cards"
                style={{ width: "100%", height: "13em" }}
              >
                <Card.Body>
                  <Card.Title
                    className="Abt_Inherit_Txt RTL_Thd"
                    s_language={Slng}
                  >
                    {t("AboutMain.TeamsCard.Titles.H5")}
                  </Card.Title>
                  <Card.Text className="RTL_Tdes mb-2" s_language={Slng}>
                    {t("AboutMain.TeamsCard.Titles.H5C")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
          <MWBtn />
        </div>
      </div>

      <InfoBanner
        key="AM02"
        Title={t("InfoBanner.Titles.Abt2")}
        description={t("InfoBanner.Descriptions.Abt2")}
        Image={ShredGoals}
      />
      <div className="About_Main2">
        <div className="Abt_Main_Wrapper2">
          <h3 className="head_style highlight RTL_Thd" s_language={Slng}>
            {t("AboutMain.Titles.Lship")}
          </h3>
          <Card>
            <Card.Header
              className="Abt_Sb_Inherit_Txt RTL_Thd"
              s_language={Slng}
              style={{ backgroundColor: "#00493E", color: "#fff" }}
            >
              {t("AboutMain.LshipCard.Lstate")}
            </Card.Header>
            <Card.Body>
              <blockquote
                className="blockquote RTL_Tdes mb-1"
                s_language={Slng}
              >
                <p className="Abt_Sb_Inherit_Txt">
                  '' {t("AboutMain.LshipCard.Lment")}''
                </p>
                <span className="blockquote-footer Abt_Sb_Inherit_Txt">
                  {t("AboutMain.LshipCard.LAuth")}
                </span>
              </blockquote>
            </Card.Body>
          </Card>
          <Container fluid style={{ marginBottom: "135px" }}>
            <Row className="Card_rw">
              <Col className="Card_clm" md={4}>
                <Card className="Card_bdy">
                  <Card.Img loading='lazy' className="Avatr_Ds" variant="top" src={avatar1} />
                  <Card.Body>
                    <Card.Title
                      className="Abt_Inherit_Txt RTL_Thd"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Ledr1")}
                    </Card.Title>
                    <Card.Text
                      className="Abt_Sb_Inherit_Txt RTL_Tdes"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Led1Desg")}
                    </Card.Text>
                    <Button
                      className="RTL_Thd try_trans"
                      s_language={Slng}
                      style={{
                        backgroundColor: "#00E784",
                        color: "#2D2E2E",
                        fontWeight: "bold",
                        border: "none",
                      }}
                      rel="norefere noopener"
                      href="/"
                      target="_blank"
                    >
                      {t("AboutMain.LshipCard.Rmore")}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="Card_clm" md={4}>
                <Card className="Card_bdy">
                  <Card.Img loading='lazy' className="Avatr_Ds" variant="top" src={avatar2} />
                  <Card.Body>
                    <Card.Title
                      className="Abt_Inherit_Txt RTL_Thd"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Ledr2")}
                    </Card.Title>
                    <Card.Text
                      className="Abt_Sb_Inherit_Txt RTL_Tdes"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Led2Desg")}
                    </Card.Text>
                    <Button
                      className="RTL_Thd try_trans"
                      s_language={Slng}
                      style={{
                        backgroundColor: "#00E784",
                        color: "#2D2E2E",
                        fontWeight: "bold",
                        border: "none",
                      }}
                      rel="noreferer noopener"
                      href="/"
                      target="_blank"
                    >
                      {t("AboutMain.LshipCard.Rmore")}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="Card_clm" md={4}>
                <Card className="Card_bdy">
                  <Card.Img loading='lazy' className="Avatr_Ds" variant="top" src={avatar3} />
                  <Card.Body>
                    <Card.Title
                      className="Abt_Inherit_Txt RTL_Thd"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Ledr3")}
                    </Card.Title>
                    <Card.Text
                      className="Abt_Sb_Inherit_Txt RTL_Tdes"
                      s_language={Slng}
                    >
                      {t("AboutMain.LshipCard.Led3Desg")}
                    </Card.Text>
                    <Button
                      className="RTL_Thd try_trans"
                      s_language={Slng}
                      style={{
                        backgroundColor: "#00E784",
                        color: "#2D2E2E",
                        fontWeight: "bold",
                        border: "none",
                      }}
                      rel="noreferer noopener"
                      href="/"
                      target="_blank"
                    >
                      {t("AboutMain.LshipCard.Rmore")}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
