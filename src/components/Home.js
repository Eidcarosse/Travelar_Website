import '../Stylesheets/Home.css'
import "animate.css/animate.min.css";
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


export default function BnerContent(props) {
  const {t} = useTranslation();
  const Slng = i18next.language;
  const[idir, setIdir] = useState('ltr')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Slng == 'ara' || Slng == 'ur' ? setIdir('rtl') : setIdir('ltr');
  }, [Slng]);

  return (
    <>
      <main>
        <section id="Gradient_Home">
          <div className="Banner_Wrapper" dir={idir}>
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
                <button className="BANR_INF_BTN AddcC">{t('Button.Lsgo')} &nbsp;&nbsp;<FontAwesomeIcon icon='car-side'/></button>
              </a>
            </span>
            </div>
            <div className='BW_Data-right' dir={idir}>
            <span className="Item__4" dir={idir}>
              <img src={props.logo} alt=":)"/>
            </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
