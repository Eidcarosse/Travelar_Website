import React from 'react'
import '../Stylesheets/Footer.css'
import badge1 from '../images/apple-badge.png';
import badge2 from '../images/google-badge.png';
import scl1 from '../images/fb_icon.png'
import scl2 from '../images/twtr_icon.png'
import scl3 from '../images/lin_icon.png'
import scl4 from '../images/ig_icon.png'


export default function Footer() {
  return (
    <footer id="footer_wrapper">
      <nav id="nav_footer">
        <div className='FR_Sec1'>
          <div className='FR_Sec1_a'>
            <h6>Travelar</h6>
            <a href="" target='_blank'><img className='Badge_d1 try_trans' src={badge1} alt="" /></a>
            <a href="" target='_blank'><img className='Badge_d2 try_trans' src={badge2} alt="" /></a>
          </div>
          
          <div className='FR_Sec1_b Dimensions'>
            <h6>Services</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Eat</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Get</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Pay</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Travelar Plus</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_c Dimensions'>
            <h6>Parters</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Corporate packages</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Restaurant Delivery</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">B2B delivery</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Pay merchant solution</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_d Dimensions'>
            <h6>Join our Team</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">About us</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Enginerring at Travelar</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Careers</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Explore roles</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Why Travelar</a></li>
            </ul>
          </div>
          <div className='FR_Sec1_e Dimensions'>
            <h6>About Us</h6>
            <ul>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Our Social Impact</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Information security</a></li>
            <li className='Ft_Sec1_li'><a className='Lst_Anim' href="">Blog</a></li>
            </ul>
          </div>
        </div>
        <hr className='FR_Middle'/>
        <div className='FR_Sec2'>
          <div className='FR_Sec2_a'><span>All rights reserved. Travelar @ 2023</span></div>
          <div className='FR_Sec2_b'>
              <span><a className='Lst_Anim' href="">Terms of Service</a></span>
              <span><a className='Lst_Anim' href="">Privacy Policy</a></span>
              <span><a className='Lst_Anim' href="">Code of Coduct</a></span>
              <span><a className='Lst_Anim' href="">Third Party Code of Conduct</a></span> 
          </div>
          <div className='FR_Sec2_c'>
              <span><a href=""><img src={scl1} alt="" /></a></span>
              <span><a href=""><img src={scl2} alt="" /></a></span>
              <span><a href=""><img src={scl3} alt="" /></a></span>
              <span><a href=""><img src={scl4} alt="" /></a></span>
          </div>
        </div></nav>
    </footer>
  )
}
