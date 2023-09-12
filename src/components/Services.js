import '../Stylesheets/Services.css';
import Home from './Home';
import ServicesInfo from './ServicesInfo'
import Accordian from './Accordian';
import React from 'react'
import ABT from '../SVGs/OdCr.svg'

export default function Services() {
  return (
    <div className='Services_Main'>
        <div className="SS_Section1">
        <Home title="Services" description="Traveler, the innovative app, offers a seamless experience for users by providing two essential services - medicine delivery and car booking. You can conveniently order prescription medications from the comfort of their homes. The app ensures timely and safe delivery, making healthcare more accessible than ever. Additionally, Traveler's car booking service enables you to effortlessly arrange transportation for your journeys. Traveler offers a reliable and efficient solution, ensuring users reach their destinations with ease. Traveler is truly a one-stop platform, catering to both healthcare and transportation needs." logo={ABT}/>
        <ServicesInfo/>
        </div>
        <div className="SS_Section2">
        <h3 className='head_style highlight'>FAQ's</h3>
        <Accordian/>
        </div>
      
    </div>
  )
}
