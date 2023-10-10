import '../Stylesheets/Services.css';
import Home from './Home';
import ServicesInfo from './ServicesInfo'
import InfoBanner from './InfoBanner'
import Accordian from './Accordian';
import React from 'react'
import ABT from '../SVGs/OdCr.svg'
import MDDY from '../SVGs/Src_1.svg'
import MDDY2 from '../SVGs/Src_2.svg'
import {useTranslation} from 'react-i18next'

export default function Services() {
  const {t} = useTranslation();
  return (
    <div className='Services_Main'>
        <div className="SS_Section1">
        <Home key="UndSvcs" title={t('Titles.Services')} description={t('Descriptions.Services')} logo={ABT}/>
        <h3 className="head_style highlight">Our Services</h3>
        <ServicesInfo key='Svcs_Svcs'/>
        </div>
        <div className="SS_Section1">
        <h3 className='head_style highlight'>Your Health, Delivered</h3>
        <InfoBanner Title={t('InfoBanner.Titles.Svcs1')} description={t('InfoBanner.Descriptions.Svcs1')} Image={MDDY}/>
        </div>
        <div className="SS_Section1">
        <h3 className='head_style highlight'>Your GoTo Assistant</h3>
        <InfoBanner Title={t('InfoBanner.Titles.Svcs2')} description={t('InfoBanner.Descriptions.Svcs2')} Image={MDDY2}/>
        </div>
        <div className="SS_Section2">
        <h3 className='head_style highlight'>FAQ's</h3>
        <Accordian/>
        </div>
        
      
    </div>
  )
}
