import "../Stylesheets/Footer.css";
import "../Stylesheets/RTL/Footer_RTL.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import DataContext from "../Contexts/DataContext";
import badge1 from "../assets/images/apple-badge.png";
import badge2 from "../assets/images/google-badge.png";
import fb_icon from "../assets/images/fb_icon.png";
import twtr_icon from "../assets/images/twtr_icon.png";
import lin_icon from "../assets/images/lin_icon.png";
import ig_icon from "../assets/images/ig_icon.png";
import i18next from "i18next";

export default function Footer(props) {
  const { t, i18n } = useTranslation();
  const Scroll_Top = useContext(DataContext);
  const [idir, setIdir] = useState("ltr");
  const Slng = i18next.language;

  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
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

  const Tgle_LngChng = async (lng) => {
    props.setSpner();
    Scroll_Top();
    setTimeout(async () => {
      await i18n.changeLanguage(lng);
      window.location.reload();
    }, 1500);
  };

  return (
    <footer id="footer_wrapper">
      <nav id="nav_footer">
        <div className="FR_Sec1" dir={idir}>
          <div className="FR_Sec1_a">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.Travelar")}
            </h6>
            <a rel="noreferrer" href="/" target="_blank">
              <img
                loading="lazy"
                className="Badge_d1 try_trans"
                src={badge1}
                alt="Slow Network"
              />
            </a>
            <a rel="noreferrer" href="/" target="_blank">
              <img
                loading="lazy"
                className="Badge_d2 try_trans"
                src={badge2}
                alt="Slow Network"
              />
            </a>
          </div>

          <div className="FR_Sec1_b Dimensions">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.Services")}
            </h6>
            <ul>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/Services">
                  {t("Footer.services.CB")}
                </Link>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/Services">
                  {t("Footer.services.MD")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="FR_Sec1_c Dimensions">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.JoinTeam")}
            </h6>
            <ul>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.joinRteam.Au")}
                </Link>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.joinRteam.Cr")}
                </Link>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.joinRteam.Er")}
                </Link>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.joinRteam.WT")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="FR_Sec1_d Dimensions">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.Aboutus")}
            </h6>
            <ul>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link rel="noreferrer" className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.Abtus.Exp")}
                </Link>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="Lst_Anim2"
                  href="https://eidcarosse.ch/en/"
                >
                  {t("Footer.Abtus.Ec")}
                </a>
              </li>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link rel="noreferrer" className="Lst_Anim2" to="/AboutUs">
                  {t("Footer.Abtus.Bg")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="FR_Sec1_e Dimensions">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.ContUs")}
            </h6>
            <ul>
              <li className="Ft_Sec1_li RTL_Tdes" s_language={Slng}>
                <Link className="Lst_Anim2" to="/Contact">
                  {t("Footer.Cntkt.Cu")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="FR_Sec1_f Dimensions">
            <h6 className="FR_Sec1_h6 RTL_Thd" s_language={Slng}>
              {t("Footer.Titles.Langes")}
            </h6>
            <div>
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
                  <ul>
                    <li>
                      <img src={lngs[lng].flag} loading='lazy' alt="Slow Network " width="25px" />
                      &nbsp;{lngs[lng].nativeName}
                    </li>
                  </ul>
                </NavDropdown.Item>
              ))}
            </div>
          </div>
        </div>
        <hr
          className="FR_Middle"
          style={{ backgroundColor: "black", color: "black", height: "1px" }}
        />
        <div className="FR_Sec2">
          <div className="FR_Sec2_a">
            <span>All rights reserved. Travelar @ 2023</span>
          </div>
          <div className="FR_Sec2_b">
            <span>
              <a rel="noreferrer noopener" className="Lst_Anim" href="/">
                Terms of Service
              </a>
            </span>
            <span>
              <a rel="noreferrer noopener" className="Lst_Anim" href="/">
                Third Party Code of Conduct
              </a>
            </span>
            <span>
              <a rel="noreferrer noopener" className="Lst_Anim" href="/">
                Privacy Policy
              </a>
            </span>
          </div>
          <div className="FR_Sec2_c">
            <span>
              <a href="/" rel="noreferrer noopener">
                <img loading='lazy' src={fb_icon} alt="FB" />
              </a>
            </span>
            <span>
              <a href="/" rel="noreferrer noopener">
                <img loading='lazy' src={twtr_icon} alt="TW" />
              </a>
            </span>
            <span>
              <a href="/" rel="noreferrer noopener">
                <img loading='lazy' src={lin_icon} alt="LI" />
              </a>
            </span>
            <span>
              <a href="/" rel="noreferrer noopener">
                <img loading='lazy' src={ig_icon} alt="IG" />
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div className="Grad_Btm"></div>
    </footer>
  );
}
