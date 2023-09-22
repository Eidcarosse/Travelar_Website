import React from 'react'
import '../Stylesheets/PgeNotFnd.css'
import { Link } from 'react-router-dom'

export default function PgeNotFnd() {
  return (
    <>
    <div className="thisbody">
     <div className="error-container">
        <div className="error-code">404</div>
        <div className='NavLine'></div>
        <div className="error-message">Let's get you back. 	&#129300;</div>
        <div className='NavLine'></div>
        <div><Link to="/" class="back-button">Go Back to Home</Link></div>
    </div>
    </div>
    </>
  )
}
