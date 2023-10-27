import React from 'react'
import '../Stylesheets/MwBtn.css'
import '../Stylesheets/RTL/MwBtn_RTL.css'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export default function MwBtn() {
  const Slng = i18next.language;
  const {t} = useTranslation();
  return (
    <div className='MWB_Container'>
    <h4 className='head_style highlight' S_language={Slng}>{t('MwBtn.Heading')}</h4>
    <Link className='MWStyle try_trans' to="Services" S_language={Slng}>{t('MwBtn.Btn')}</Link>        
    </div>
  )
}
