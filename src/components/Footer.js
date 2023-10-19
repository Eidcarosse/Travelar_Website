import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import NavDropdown from "react-bootstrap/NavDropdown";
import DataContext from '../Contexts/DataContext';
import '../Stylesheets/Footer.css'
import badge1 from '../images/apple-badge.png';
import badge2 from '../images/google-badge.png';
import fb_icon from '../images/fb_icon.png'
import twtr_icon from '../images/twtr_icon.png'
import lin_icon from '../images/lin_icon.png'
import ig_icon from '../images/ig_icon.png'
import i18next from 'i18next';


export default function Footer(props) {
  const[idir, setIdir] = useState('ltr');
  const Slng = i18next.language;
  useEffect(()=>{
    Slng == 'ara' || Slng == 'ur' ? setIdir('rtl') : setIdir('ltr')
  }, [Slng]);
  const lngs = {
    en: {
      nativeName: "English",
      flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
    },
    fr: {
      nativeName: "French",
      flag: "https://www.worldometers.info/img/flags/fr-flag.gif",
    },
    ger: {
      nativeName: "German",
      flag: "https://www.worldometers.info/img/flags/gm-flag.gif",
    },
    ru: {
      nativeName: "Russian",
      flag: "https://www.worldometers.info/img/flags/rs-flag.gif",
    },
    ara: {
      nativeName: "Arabic",
      flag: "https://www.worldometers.info/img/flags/sa-flag.gif",
    },
    ur: {
      nativeName: "Urdu",
      flag: "https://www.worldometers.info/img/flags/pk-flag.gif",
    },
    ja: {
      nativeName: "Japanese",
      flag: "https://www.worldometers.info/img/flags/ja-flag.gif",
    },  
  };

  const {t, i18n} = useTranslation(); 
  const Scroll_Top = useContext(DataContext);
  const Tgle_LngChng = async (lng) => {
    props.setSpner();
    Scroll_Top();
    setTimeout( async () => {  
      await i18n.changeLanguage(lng);
      window.location.reload();
    }, 1500);
  };

  return (
    <footer id="footer_wrapper">
      <nav id="nav_footer">
        <div className='FR_Sec1' dir={idir}>
          <div className='FR_Sec1_a'>
            <h6>{t('Footer.Titles.Travelar')}</h6>
            <a rel='noreferrer' href="/" target='_blank'><img className='Badge_d1 try_trans' src={badge1} alt="App Store Download =>" /></a>
            <a rel='noreferrer' href="/" target='_blank'><img className='Badge_d2 try_trans' src={badge2} alt="Play Store Download =>" /></a>
          </div>
          
          <div className='FR_Sec1_b Dimensions'>
            <h6>{t('Footer.Titles.Services')}</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Eat</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Get</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Pay</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Travelar Plus</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_c Dimensions'>
            <h6>{t('Footer.Titles.Partners')}</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Corporate packages</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Restaurant Delivery</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">B2B delivery</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Pay merchant solution</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_d Dimensions'>
            <h6>{t('Footer.Titles.JoinTeam')}</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">About us</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Enginerring at Travelar</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Careers</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Explore roles</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim2' href="/">Why Travelar</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_e Dimensions'>
            <h6>{t('Footer.Titles.Aboutus')}</h6>
            <ul>
            <li className='Ft_Sec1_li'><a rel='noreferrer' className='Lst_Anim2' href="/">Our Social Impact</a></li>
            <li className='Ft_Sec1_li'><a rel='noreferrer' className='Lst_Anim2' href="/">Information security</a></li>
            <li className='Ft_Sec1_li'><a rel='noreferrer' className='Lst_Anim2' href="/">Blog</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_f Dimensions'>
            <h6>{t('Footer.Titles.Langes')}</h6>
            <div>
            {Object.keys(lngs).map((lng)=> (
              <NavDropdown.Item key={lng} style={{fontWeight : i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} onClick={()=>{Tgle_LngChng(lng);}}>
              <ul><li><img src={lngs[lng].flag} alt="Ctry: " width='25px' />&nbsp;{lngs[lng].nativeName}</li></ul>
              </NavDropdown.Item>
            ))} 
            </div>           
          </div>
        </div>
        <hr className='FR_Middle' style={{backgroundColor : "black", color:"black", height:"1px"}}/>
        <div className='FR_Sec2'>
          <div className='FR_Sec2_a'><span>All rights reserved. Travelar @ 2023</span></div>
          <div className='FR_Sec2_b'>
              <span><a rel='noreferrer'className='Lst_Anim' href="/">Terms of Service</a></span>
              <span><a rel='noreferrer'className='Lst_Anim' href="/">Privacy Policy</a></span>
              <span><a rel='noreferrer'className='Lst_Anim' href="/">Code of Coduct</a></span>
              <span><a rel='noreferrer' className='Lst_Anim' href="/">Third Party Code of Conduct</a></span> 
          </div>
          <div className='FR_Sec2_c'>
              <span><a href="/" rel='noreferrer'><img src={fb_icon}  alt="FB" /></a></span>
              <span><a href="/" rel='noreferrer'><img src={twtr_icon}  alt="TW" /></a></span>
              <span><a href="/" rel='noreferrer'><img src={lin_icon}  alt="LI" /></a></span>
              <span><a href="/" rel='noreferrer'><img src={ig_icon}  alt="IG" /></a></span>
          </div>
        </div></nav>
    </footer>
  )
}
