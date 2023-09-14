import React from 'react'
import '../Stylesheets/ServicesInfo.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bnrimg from '../images/Home_Banner.jpeg'

export default function Services() {
  const ar_icon = <FontAwesomeIcon icon="share-from-square" size="xs"/>
 
  return (
    <>
    <main>
        <section id="ServicesInfo">
          <div className="ServicesInfo_Wrapper">
            <div className='Hme_img'>
              <img className="Hme_img_ds" src={bnrimg} alt="Our Services =>" />
            </div>
            <div className='Hme_info'>
              <span><h3>We Provide</h3></span>
              <span>          
                  <ul>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true'>  
                  <li>{ar_icon} Certified Drivers</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={100}>  
                  <li>{ar_icon} Medicine Delivery</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={200}>  
                  <li>{ar_icon} Car Booking</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={300}>  
                  <li>{ar_icon} Real-time Tracking</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={400}>  
                  <li>{ar_icon} Emergency Sharing</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={500}>  
                  <li>{ar_icon} Peace of Mind</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={600}>  
                  <li>{ar_icon} Enhanced Security</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={700}>  
                  <li>{ar_icon} Customized Choices</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce='true' delay={800}>  
                  <li>{ar_icon} Comprehensive Solution</li>
                  </ScrollAnimation>
                  </ul>
            </span>
                
             </div>
          </div>
        </section>
    </main>
    </>
  )
}
