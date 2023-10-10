import React from 'react'
import '../Stylesheets/ServicesInfo.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bnrimg from '../images/Home_Banner.jpg'
import { useTranslation } from 'react-i18next';


export default function ServicesInfo() {
  const {t} = useTranslation();
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
              <span><h3>{t('ServicesInfo.Heading')}</h3></span>
              <span>          
                  <ul>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>  
                  <li>{ar_icon} {t('ServicesInfo.Li1')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={100}>  
                  <li>{ar_icon} {t('ServicesInfo.Li2')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={200}>  
                  <li>{ar_icon} {t('ServicesInfo.Li3')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={300}>  
                  <li>{ar_icon} {t('ServicesInfo.Li4')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={400}>  
                  <li>{ar_icon} {t('ServicesInfo.Li5')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={500}>  
                  <li>{ar_icon} {t('ServicesInfo.Li6')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={600}>  
                  <li>{ar_icon} {t('ServicesInfo.Li7')}</li>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} delay={700}>  
                  <li>{ar_icon} {t('ServicesInfo.Li8')}</li>
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
