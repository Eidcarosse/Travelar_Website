import React, { useContext } from 'react'
import '../Stylesheets/About.css'
import "animate.css/animate.min.css";
import ABT from '../SVGs/ABt_Us.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';


export default function About() {
  const Scroll_Top = useContext(DataContext)

  return (
    <>
    <main>
        <section id="About">
          <div className="Abt_Wrapper">
            <div className="Abt_description">
              <h3>About us</h3>
              <p>Travelar’s purpose is to simplify and improve the lives of people and build an awesome organisation that inspires. Learn more about our purpose, people and services.</p>
              <Link to='/AboutUs' onClick={Scroll_Top} className='Read_Mr_Dn try_trans'>Read More</Link>
            </div>
      
            <div className="Abt_img">
            <ScrollAnimation animateIn="animate__bounceInDown" animateOnce={true} style={{padding: '0%', width:"100%", height:"95%", animationIterationCount:"1" }}> 
              <img src={ABT} alt="IMG" />
             </ScrollAnimation> 
            </div>
            
          </div>
        </section>
    </main>
    </>
  )
}
