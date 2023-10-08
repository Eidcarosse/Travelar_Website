import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css/animate.min.css";
import "../Stylesheets/Navbar.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import DataContext from "../Contexts/DataContext";
import {StProvider} from '../Contexts/StateContext'
import NavMenu from "./NavMenu";

export default function Navbar(props) {
  useEffect(() => {
    document.getElementById("Menu_BTN").addEventListener("click", (e) => {
      e.target.classList.remove("Btn_Aniim");
      setTimeout(() => {
        e.target.classList.add("Btn_Aniim");
      });
    });
  }, []);

  const Scroll_Top = useContext(DataContext);
  const [NavMn, setNavMenu] = useState("none");
  const [MenuIcon, setMenIc] = useState("bars");

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("#nav_wrapper");
    if (window.scrollY > 0) nav.classList.add("Scroll_border");
    else nav.classList.remove("Scroll_border");
  });

  const ToggleIcon = () => {
    if (NavMn == "none") {
      setNavMenu("block");
      setMenIc("x");
    } else {
      setNavMenu("none");
      setMenIc("bars");
    }
  };

  return (
    <>
      <header id="nav_wrapper" className="nav_wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="Main_Logo">
              <Link to="/" onClick={Scroll_Top}>
                Travel|\r
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/" onClick={Scroll_Top} className="Lst_Anim">
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
                <FontAwesomeIcon icon={`${MenuIcon}`} size="lg" />
              </button>
            </span>
            <span className="Res_dropdown">
              <FontAwesomeIcon
                style={{ margin: "3.2vh 0 0 0" }}
                icon="globe"
                size="xl"
              />
              <NavDropdown  id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={props.showalert}>
                  German
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
            <span className="btn-cstm App_Downld try_trans">
              <a href="" target="_blank">
                Download App
              </a>
            </span>
          </div>
        </nav>
        <StProvider value={ToggleIcon}>
        <NavMenu MenuDisplay={NavMn} />
        </StProvider>
      </header>
    </>
  );
}
