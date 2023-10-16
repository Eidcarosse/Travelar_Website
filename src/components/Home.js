import '../Stylesheets/Home.css'
import "animate.css/animate.min.css";
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function BnerContent(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const Home_Content = document.querySelector("#Home_Content");
  }, []);
  return (
    <>
      <main>
        <section id="Gradient_Home">
          <div className="Banner_Wrapper">
            <div className='BW_Data-left'>
            <span className="Item__1">
              
              <h1>{props.title}</h1>
            </span>
            <span className="Item__2">
              <p>
               {props.description}
              </p>
            </span>
            <span className="Item__3">
              <a href="" target="_blank">
                <button className="BANR_INF_BTN AddcC">Let's Go &nbsp;&nbsp;<FontAwesomeIcon icon='car-side'/></button>
              </a>
            </span>
            </div>
            <div className='BW_Data-right'>
            <span className="Item__4">
              <img src={props.logo} alt=":)"/>
            </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
