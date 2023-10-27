import "../Stylesheets/Services.css";
import Home from "./Home";
import ServicesInfo from "./ServicesInfo";
import InfoBanner from "./InfoBanner";
import Accordian from "./Accordian";
import React, { useEffect } from "react";
import Svcs_Logo from "../SVGs/Svcs_Logo.svg";
import Md_Dlvry from "../SVGs/Md_Dlvry.svg";
import Cty_Dvr from "../SVGs/Cty_Dvr.svg";
import { useTranslation } from "react-i18next";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="Services_Main">
      <div className="SS_Section1">
        <Home
          key="UndSvcs"
          title={t("Titles.Services")}
          description={t("Descriptions.Services")}
          logo={Svcs_Logo}
        />
        <h3 className="head_style highlight">Our Services</h3>
        <ServicesInfo key="Svcs_Svcs" />
      </div>
      <div className="SS_Section1">
        <h3 className="head_style highlight">Your Health, Delivered</h3>
        <div className="Stcky_Stl">
          <InfoBanner
            Title={t("InfoBanner.Titles.Svcs1")}
            description={t("InfoBanner.Descriptions.Svcs1")}
            Image={Md_Dlvry}
          />
        </div>
        <div className="MD_Details">
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h4 className="highlight2">Convenient Medicine Delivery App</h4>
          </ScrollAnimation>
          <p>
            In today's fast-paced world, where our lives are constantly on the
            move, convenience and accessibility are paramount. One aspect that
            has seen significant innovation and transformation is healthcare,
            and in particular, medicine delivery. "Traveler" is a revolutionary
            mobile app that has redefined the way we access essential medicines.
            With its user-friendly interface and an extensive network of
            pharmacies, Traveler is your go-to solution for hassle-free medicine
            delivery.
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h4 id='abd1' className="highlight2">The Traveler Experience</h4>
          </ScrollAnimation>
          <p>
            Traveler simplifies the process of ordering and receiving your
            medications. With just a few taps on your smartphone, you can have
            your prescribed medicines delivered right to your doorstep. No more
            waiting in long queues at the pharmacy or worrying about running out
            of vital medications.
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h4 className="highlight2">Key Features of Traveler</h4>
          </ScrollAnimation>
            Traveler offers a range of features designed to make your medicine
            delivery experience as smooth as possible:
          <ul style={{listStyleType: "none", textAlign:"center"}}>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Easy Prescription Upload:</strong></h5>
              </ScrollAnimation>
              Simply upload a
              photo of your prescription, and Traveler's partner pharmacies will
              process it promptly.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Pharmacy Locator:</strong></h5>
              </ScrollAnimation>
              Find nearby pharmacies that
              are part of the Traveler network, ensuring that you have access to
              a wide range of medicines.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Secure Payment:</strong></h5>
              </ScrollAnimation>
              Traveler supports secure
              payment options, providing peace of mind for every transaction.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Real-time Order Tracking:</strong></h5>
              </ScrollAnimation>
              Keep track of your
              order from the moment it's placed until it arrives at your
              doorstep
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5 style={{height:"fit-content"}}><strong>Customer Support:</strong></h5>
              </ScrollAnimation>
              Traveler's dedicated
              customer support team is available to assist you with any
              questions or concerns.
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h4 className="highlight2">Benefits of Traveler</h4>
          </ScrollAnimation>
          Traveler offers numerous advantages, including:
          <ul style={{listStyleType: "none", textAlign:"center"}}>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Convenience:</strong></h5>
              </ScrollAnimation>
              Order your medications from the
              comfort of your home, office, or even while traveling.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Time-Saving:</strong></h5>
              </ScrollAnimation>
              No more time wasted in pharmacy
              queues; Traveler ensures your medicines are delivered on time.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Accessibility:</strong></h5>
              </ScrollAnimation>
              Traveler partners with a vast
              network of pharmacies, so you have access to a wide range of medicines.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5><strong>Healthcare on the Go:</strong></h5>
              </ScrollAnimation>
              For frequent travelers,
              having access to medicines from any location is invaluable.
            </li>
            <li>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <h5 style={{height:"fit-content"}}><strong>Customer Support:</strong></h5>
              </ScrollAnimation>
              Traveler's dedicated
              customer support team is available to assist you with any
              questions or concerns.
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <h4 className="highlight2">Join the Traveler Community</h4>
          </ScrollAnimation>
          <p>
            Join the Traveler community and experience a new level of
            convenience when it comes to your healthcare needs. Download the
            Traveler app today and say goodbye to the hassle of medicine
            procurement. Your well-being is our priority, and we're here to make
            your life easier, one prescription at a time.
          </p>

          <p style={{padding:"1.5em 0em 1.5em 0em", color : "#00493E"}}>
            <em>Traveler: Where convenience meets healthcare.</em>
          </p>
        </div>
      </div>
      <div className="SS_Section1">
        <h3 className="head_style highlight">Your GoTo Assistant</h3>
        <div className="Stcky_Stl">
        <InfoBanner
          Title={t("InfoBanner.Titles.Svcs2")}
          description={t("InfoBanner.Descriptions.Svcs2")}
          Image={Cty_Dvr}
        />
        </div>
        <div className="MD_Details">
  <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <h4 className="highlight2">Fully Tracked and Secure Rides</h4>
  </ScrollAnimation>
  <p>
    In today's fast-paced world, where getting around efficiently and securely is crucial, car booking services have revolutionized the way we commute. Our car booking app is designed to provide you with secure and fully tracked rides, ensuring peace of mind during your journeys.
  </p>
  <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <h4 className="highlight2">The Car Booking Experience</h4>
  </ScrollAnimation>
  <p>
    Our car booking service simplifies the process of reserving and tracking your rides. With just a few taps on your smartphone, you can book a ride that's secure, efficient, and fully traceable.
  </p>
  <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <h4 className="highlight2">Key Features of Car Booking</h4>
  </ScrollAnimation>
  
    Our car booking app offers a range of features designed to make your transportation experience as smooth as possible:

  <ul style={{ listStyleType: "none", textAlign: "center" }}>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Secure and Efficient Rides:</strong></h5>
      </ScrollAnimation>
      Enjoy secure and efficient rides with our trusted drivers.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Real-time Ride Tracking:</strong></h5>
      </ScrollAnimation>
      Track your ride in real-time, ensuring safety and transparency.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Driver Ratings:</strong></h5>
      </ScrollAnimation>
      Rate your drivers and provide feedback for continuous improvement.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Secure Payment:</strong></h5>
      </ScrollAnimation>
      Enjoy secure payment options, making your transactions hassle-free.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Customer Support:</strong></h5>
      </ScrollAnimation>
      Our dedicated customer support team is here to assist you with any questions or concerns.
    </li>
  </ul>
  <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <h4 className="highlight2">Benefits of Car Booking</h4>
  </ScrollAnimation>
    Our car booking service offers numerous advantages, including:
  <ul style={{ listStyleType: "none", textAlign: "center" }}>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Security:</strong></h5>
      </ScrollAnimation>
      Your safety is our top priority.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Efficiency:</strong></h5>
      </ScrollAnimation>
      Save time and energy with our efficient rides.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>Transparency:</strong></h5>
      </ScrollAnimation>
     We provide transparent, fully tracked rides for your peace of mind.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5><strong>24/7 Accessibility:</strong></h5>
      </ScrollAnimation>
      Our services are available whenever you need them.
    </li>
    <li>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <h5 style={{ height: "fit-content" }}>
          <strong>Customer Support:</strong>
        </h5>
      </ScrollAnimation>
      Our dedicated customer support team is available to assist you with any questions or concerns.
    </li>
  </ul>
  <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
    <h4 className="highlight2">Join the Car Booking Community</h4>
  </ScrollAnimation>
  <p>
    Join the car booking community and experience a new level of convenience when it comes to your transportation needs. Download our car booking app today and enjoy secure, efficient, and fully tracked rides for a stress-free commute.
  </p>
  <p style={{padding:"1.5em 0em 1.5em 0em", color : "#00493E"}}>
  <em>Car Booking: Where Security Meets Efficiency.</em>
  </p>
  
</div>
      </div>
      <div className="SS_Section2">
        <h3 className="head_style highlight">FAQ's</h3>
        <Accordian />
      </div>
    </div>
  );
}
