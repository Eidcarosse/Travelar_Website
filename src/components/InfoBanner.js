import React, { useEffect, useState } from 'react'
import '../Stylesheets/InfoBanner.css'
import '../Stylesheets/RTL/InfoBanner_RTL.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import i18next from 'i18next';


export default function InfoBanner(props) {
  const Slng = i18next.language;
  const[idir, setIdir] = useState('ltr')
  useEffect(()=>{
    Slng == 'ara' || Slng == 'ur' ? setIdir('rtl') : setIdir('ltr');
  },[Slng])
  return (
    <>
    <main>
        <section id="Info_Banner">
          <div className="Info_Banner_Wrapr" dir={idir}>
            <span className="description">
                <h3 className='descp_h3' S_language={Slng}>{props.Title}</h3>
                <p className='descp_p' S_language={Slng}>{props.description}</p>
            </span>

            <span className="mb_img">
            <ScrollAnimation animateIn="animate__bounceInDown" animateOnce={true} style={{padding: '0%', width:"100%", height:"95%", animationIterationCount:"1" }}> 
              <img src={props.Image} alt="IMG" />
             </ScrollAnimation> 
            </span>
            
          </div>
        </section>
    </main>
    </>
  )
}
