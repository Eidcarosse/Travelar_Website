import React, { useContext } from 'react'
import '../Stylesheets/About.css'
import "animate.css/animate.min.css";
import AboutImg from '../SVGs/AboutImg.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import DataContext from '../Contexts/DataContext';
import { useTranslation } from 'react-i18next'


export default function About() {
  const Scroll_Top = useContext(DataContext)
  const {t} = useTranslation();

  return (
    <>
    <main>
        <section id="About">
          <div className="Abt_Wrapper">
            <div className="Abt_description">
              <h3>{t("About.Titles.Home")}</h3>
              <p>{t("About.Descriptions.Home")}</p>
              <Link to='/AboutUs' onClick={Scroll_Top} className='Read_Mr_Dn try_trans'>Read More</Link>
            </div>
      
            <div className="Abt_img">
            <ScrollAnimation animateIn="animate__bounceInDown" animateOnce={true} style={{padding: '0%', width:"100%", height:"95%", animationIterationCount:"1" }}> 
              <img src={AboutImg} alt="IMG" />
             </ScrollAnimation> 
            </div>
            
          </div>
        </section>
    </main>
    </>
  )
}
