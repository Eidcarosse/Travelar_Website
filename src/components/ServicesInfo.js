import React from 'react'
import '../Stylesheets/ServicesInfo.css'
import banner_img from '../images/Home_Banner.jpeg'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
  const ar_icon = <FontAwesomeIcon icon="share-from-square" size="lg"/>;
 
  return (
    <>
    <main>
        <section id="ServicesInfo">
          <div className="ServicesInfo_Wrapper">
            <div className='Hme_img'>
              <img className="Hme_img_ds" src={banner_img} alt="Our Services =>" />
            </div>
            <div className='Hme_info'>
              <span><h3>We Provide</h3></span>
              <span>     
            <ScrollAnimation animateIn="animate__bounceInRight" animateOnce='true' style={{padding: '0%', width:"100%", height:"95%", animationIterationCount:"1" }}> 
             
                  <ul>
                  <li>Certified Drivers</li>
                  <li>Trustworthy Profiles</li>
                  <li>Informed Decisions</li>
                  <li>Real-time Tracking</li>
                  <li>Emergency Sharing</li>
                  <li>Peace of Mind</li>
                  <li>Enhanced Security</li>
                  <li>Customized Choices</li>
                  <li>Comprehensive Solution</li>
                  </ul>
             
            </ScrollAnimation>
            </span>
                
             </div>
          </div>
        </section>
    </main>
    </>
  )
}
