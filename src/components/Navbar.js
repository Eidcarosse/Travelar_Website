import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css/animate.min.css";
import "../Stylesheets/Navbar.css";
import "../Stylesheets/RTL/Navbar_Ar_Ur.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import DataContext from "../Contexts/DataContext";
import { StProvider } from "../Contexts/StateContext";
import NavMenu from "./NavMenu";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar(props) {
  const Slng = i18next.language;
  const { t, i18n } = useTranslation();
  const Scroll_Top = useContext(DataContext);
  const [NavMn, setNavMenu] = useState("none");
  const [MenuIcon, setMenIc] = useState("bars");
  const [idir, setIdir] = useState("ltr");

  useEffect(() => {
    document.getElementById("Menu_BTN").addEventListener("click", (e) => {
      e.target.classList.remove("Btn_Aniim");
      setTimeout(() => {
        e.target.classList.add("Btn_Aniim");
      });
    });
  }, []);

  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
  }, [Slng]);

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("#nav_wrapper");
    window.scrollY > 0
      ? nav.classList.add("Scroll_border")
      : nav.classList.remove("Scroll_border");
  });

  const ToggleIcon = () => {
    NavMn == "none" ? setNavMenu("block") : setNavMenu("none");
    MenuIcon == "bars" ? setMenIc("x") : setMenIc("bars");
  };

  const lngs = {
    en: {
      nativeName: "English",
      flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
    },
    ara: {
      nativeName: "Arabic",
      flag: "https://www.worldometers.info/img/flags/sa-flag.gif",
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
    ja: {
      nativeName: "Japanese",
      flag: "https://www.worldometers.info/img/flags/ja-flag.gif",
    },
    ur: {
      nativeName: "Urdu",
      flag: "https://www.worldometers.info/img/flags/pk-flag.gif",
    }    
  };

  const Tgle_LngChng = async (lng) => {
    props.setSpner();
    Scroll_Top();
    setTimeout(async () => {
      await i18n.changeLanguage(lng);
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <header id="nav_wrapper" className="nav_wrapper">
        <nav id="nav" dir={idir}>
          <div className="nav left">
            <span className="Main_Logo RTL_Thd" s_language={Slng}>
              <Link to="/" onClick={Scroll_Top}>
                <strong>{t("Navbar.Titles.Logo")}</strong>
              </Link>
            </span>
            <span className="nav-link RTL_Thd" dir={idir} s_language={Slng}>
              <Link to="/" onClick={Scroll_Top} className="Lst_Anim">
                {t("Navbar.Titles.Home")}
              </Link>
            </span>
            <span className="nav-link RTL_Thd" s_language={Slng}>
              <Link to="/Services" onClick={Scroll_Top} className="Lst_Anim">
                {t("Navbar.Titles.Services")}
              </Link>
            </span>
            <span className="nav-link RTL_Thd" s_language={Slng}>
              <Link to="/AboutUs" onClick={Scroll_Top} className="Lst_Anim">
                {t("Navbar.Titles.About")}
              </Link>
            </span>
            <span className="nav-link RTL_Thd" s_language={Slng}>
              <Link to="/Contact" onClick={Scroll_Top} className="Lst_Anim">
                {t("Navbar.Titles.Contact")}
              </Link>
            </span>
          </div>

          <div className="nav right">
            <span className="Clapsed_Btn">
              <button onClick={ToggleIcon} id="Menu_BTN" className="btn-nav">
                <FontAwesomeIcon icon={`${MenuIcon}`} size="lg" />
              </button>
            </span>
            <span className="Res_dropdown">
              <FontAwesomeIcon
                className="lev_el"
                style={{ margin: "3.2vh 0 0 0" }}
                icon="globe"
                size="xl"
              />
              <NavDropdown id="basic-nav-dropdown">
                <span></span>
                {Object.keys(lngs).map((lng) => (
                  <NavDropdown.Item
                    key={lng}
                    style={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? "bold" : "normal",
                    }}
                    onClick={() => {
                      Tgle_LngChng(lng);
                    }}
                  >
                    <img
                      src={lngs[lng].flag}
                      alt="Flag"
                      width="25px"
                      height="15px"
                    />
                    &nbsp;{lngs[lng].nativeName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </span>
            <span className="btn-cstm App_Downld try_trans" s_language={Slng}>
              <a href="/" target="_blank">
                {t("Navbar.Titles.Dapp")}
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
