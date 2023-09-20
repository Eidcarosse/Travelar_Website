import React from 'react'
import '../Stylesheets/InfoBanner.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


export default function InfoBanner(props) {
  return (
    <>
    <main>
        <section id="Info_Banner">
          <div className="Info_Banner_Wrapr">
            <span className="description">
                <h3>{props.Title}</h3>
                <p>{props.description}</p>
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
