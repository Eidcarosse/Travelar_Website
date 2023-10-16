import React from 'react'
import '../Stylesheets/MwBtn.css'
import { Link } from 'react-router-dom'

export default function MwBtn() {
  return (
    <div className='MWB_Container'>
    <h4 className='head_style highlight'>Explore Services</h4>
    <Link className='MWStyle try_trans' to="Services">Read More</Link>        
    </div>
  )
}
