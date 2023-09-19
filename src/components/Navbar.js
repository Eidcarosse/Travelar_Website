import logo from '../images/TR_LG.png';
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "animate.css/animate.min.css";
import '../Stylesheets/Navbar.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavMenu from './NavMenu';
import DataContext from './DataContext';


export default function Navbar(props) {
  
  const Scroll_Top = useContext(DataContext);

  window.addEventListener('scroll', () => {
    const nav = document.querySelector("#nav_wrapper");
    if(window.scrollY>0) nav.classList.add("Scroll_border")
    else nav.classList.remove("Scroll_border")
  });


  const [menu, Setmenu] = useState("none");
  const [mncion, Setmncion] = useState("bars");

  const btn = document.getElementById("Menu_BTN");

  let ToggleIcon = () =>
  {
   btn?.addEventListener('click',function(e){
     console.log(btn)
     e.target.classList.remove("Btn_Aniim");
     setTimeout(()=> {
     e.target.classList.add("Btn_Aniim");
     });
   });
   
   if (menu == "none")
   {
     Setmenu("block");
     Setmncion('x');
   }
   else
    {
     Setmenu("none");
     Setmncion("bars")
   }
  
 };
      

  return (
    <>
      <header id="nav_wrapper" className='nav_wrapper'>
        <nav id="nav">
          <div className="nav left">
            <span className="Main_Logo">
              <Link to="/TravelerApp" onClick={Scroll_Top}>Travel|\r</Link>
            </span>
            <span className="nav-link">
              <Link to="/TravelerApp" onClick={Scroll_Top} className="Lst_Anim">
                Home
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/Services" onClick={Scroll_Top} className="Lst_Anim">
                Services
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/AboutUs" onClick={Scroll_Top} className="Lst_Anim">
                About us
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/Contact" onClick={Scroll_Top} className="Lst_Anim">
                Contact
              </Link>
            </span>
          </div>

          <div className="nav right">
            <span className="Clapsed_Btn">
              <button id="Menu_BTN" onClick={ToggleIcon} className="btn-nav">
                <FontAwesomeIcon icon={`${mncion}`} size="lg" />
              </button>
            </span>
            <span className='Res_dropdown'>
            <FontAwesomeIcon style={{margin:"3.2vh 0 0 0"}} icon="globe" size="xl" />
              <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={props.showalert}
                >German
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={props.showalert}>
                  French
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={props.showalert}>
                  Italic
                </NavDropdown.Item>
              </NavDropdown>
            </span>
            <span className="App_Downld try_trans">
              <a href="" target="_blank">
                Download App
              </a>
            </span>
          </div>
        </nav>
        <NavMenu MenuState={menu}/>
      </header>
    </>
  );
}

