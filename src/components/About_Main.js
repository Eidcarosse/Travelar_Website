import React from 'react';
import '../Stylesheets/About_Main.css'
import Home from '../components/Home';
import Banner_Hme from '../components/Banner_Hme';
import avatar1 from '../SVGs/Avatar1.svg'
import avatar2 from '../SVGs/Avatar2.svg'
import avatar3 from '../SVGs/Avatar3.svg'
import logo2 from '../SVGs/OdRd2.svg'
import Missn_Img from '../SVGs/OdRd4.svg'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function About_Main() {
  const topfunction = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <>
      <Home title="About us" description="Traveler is led by a powerful purpose to
            simplify and improve the lives of people and build an awesome
            organisation that inspires. Since 2023, Traveler has built a platform
            for the region’s best talent to thrive and for entrepreneurs to
            scale their businesses. Careem operates in over 70 cities across 10
            countries, from Morocco to Pakistan." logo={logo2}
      />
      <div className="About_Main">
        <div className="Abt_Main_Wrapper">
          <h3 className="head_style_cs1">We are always here for</h3>
          <h4 className="head_style_cs2 highlight">you</h4>
          <p>Please share your feedback or report a problem</p>
          <Link  to="/Contact" onClick={topfunction} className="Cotn_Btn try_trans">Contact Us</Link>
        </div>
      </div>
      <Banner_Hme
        Title="24/7 Available"
        description="Rapid Tech Support "
        Image={Missn_Img}
      />
      <div className="About_Main">
        <div className="Abt_Main_Wrapper">
          <h3 className="head_style highlight">Teams</h3>
          <Row>
            <Col md={4}>
              <Card className="mt-3 Abt_Main_Teams_Cards">
                <Card.Body>
                  <Card.Title className='Abt_Inherit_Txt'>Support Team</Card.Title>
                  <Button className="mb-2 Abt_Sb_Inherit_Txt" style={{backgroundColor:"#3a9bdc", border:"none"}} href="mailto:chmuttaqeen2@gmail.com">support@traveler.com</Button>
                  <Card.Title className='Abt_Inherit_Txt'>Policy and Government Relations</Card.Title>
                  <Button className="mb-2 Abt_Sb_Inherit_Txt" style={{backgroundColor:"#3a9bdc", border:"none"}} href="mailto:chmuttaqeen@gmail.com">gr@traveler.com</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mt-3 Abt_Main_Teams_Cards" style={{width: "100%", height:"13em" }}>
                <Card.Body>
                  <Card.Title className='Abt_Inherit_Txt'>Collaboration and Advertising</Card.Title>
                  <Button className="mb-2 Abt_Sb_Inherit_Txt" style={{backgroundColor:"#3a9bdc", border:"none"}} href="mailto:chmuttaqeen@gmail.com">marketing@traveler.com</Button>
                  <Card.Title className='Abt_Inherit_Txt'>PR department</Card.Title>
                  <Button className="mb-2 Abt_Sb_Inherit_Txt" style={{backgroundColor:"#3a9bdc", border:"none"}} href="mailto:chmuttaqeen@gmail.com">pr@traveler.com</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mt-3 Abt_Main_Teams_Cards" style={{ width: "100%", height:"13em" }}>
                <Card.Body>
                  <Card.Title className='Abt_Inherit_Txt'>Cyber Security</Card.Title>
                  <Card.Text className="mb-2 Abt_Sb_Inherit_Txt">We accept vulerablity reports through the HackerOne platform</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Banner_Hme
        Title="Shared Goals"
        description="Innovation, Convenience, and Reliability :) "
        Image={Missn_Img}
      />
      <div className="About_Main2">
        <div className="Abt_Main_Wrapper2">
          <h3 className="head_style highlight">Leadership</h3>
          <Card>
            <Card.Header className='Abt_Sb_Inherit_Txt' style={{ backgroundColor: "#3A9BDC", color: "#fff" }}>
              Our Leadership statement
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-1">
                <p className='Abt_Sb_Inherit_Txt'>
                  '' Adapt to change, and turn challenges into opportunities.''
                </p>
                <footer className="blockquote-footer Abt_Sb_Inherit_Txt">Richard Branson</footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Container fluid>
            <Row className='Card_rw'>
              <Col className='Card_clm' md={4}>
                <Card className='Card_bdy'>
                  <Card.Img className='Avatr_Ds' variant="top" src={avatar1} />
                  <Card.Body>
                    <Card.Title className='Abt_Inherit_Txt'>Chandler</Card.Title>
                    <Card.Text className='Abt_Sb_Inherit_Txt'>Co-founder and CEO</Card.Text>
                    <Button className='try_trans'
                      style={{ backgroundColor: "#3A9BDC", color: "#fff", border:"none" }}
                      href="/"
                      target="_blank"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='Card_clm' md={4}>
                <Card className='Card_bdy'>
                  <Card.Img className='Avatr_Ds' variant="top" src={avatar2} />
                  <Card.Body>
                    <Card.Title className='Abt_Inherit_Txt'>Monica</Card.Title>
                    <Card.Text className='Abt_Sb_Inherit_Txt'>Co-founder</Card.Text>
                    <Button  className='try_trans'
                      style={{ backgroundColor: "#3A9BDC", color: "#fff", border:"none"}}
                      href="/"
                      target="_blank"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='Card_clm' md={4}>
                <Card className='Card_bdy'>
                  <Card.Img className='Avatr_Ds' variant="top" src={avatar3} />
                  <Card.Body>
                    <Card.Title className='Abt_Inherit_Txt'>Jannice</Card.Title>
                    <Card.Text className='Abt_Sb_Inherit_Txt'>Chief Product Architect</Card.Text>
                    <Button className='try_trans'
                      style={{ backgroundColor: "#3A9BDC", color: "#fff", border:"none" }}
                      href="/"
                      target="_blank"
                    >
                      Read More
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

