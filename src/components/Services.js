import "../Stylesheets/Services.css";
import Home from "./Home";
import ServicesInfo from "./ServicesInfo";
import InfoBanner from "./InfoBanner";
import About from "./About";
import Accordian from "./Accordian";
import React, { useEffect, useState } from "react";
import Svcs_Logo from "../SVGs/Svcs_Logo.svg";
import Md_Dlvry from "../SVGs/Md_Dlvry.svg";
import Cty_Dvr from "../SVGs/Cty_Dvr.svg";
import { useTranslation } from "react-i18next";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import i18next from "i18next";

export default function Services() {
  const { t } = useTranslation();
  const Slng = i18next.language;
  const [idir, setIdir] = useState("ltr");

  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
  }, [Slng]);

  return (
    <div className="Services_Main">
      <div className="SS_Section1">
        <Home
          key="UndSvcs"
          title={t("Titles.Services")}
          description={t("Descriptions.Services")}
          logo={Svcs_Logo}
        />
        <h3 className="head_style highlight RTL_Thd" S_language={Slng}>
          {t("Services.Headings.OrSvcs")}
        </h3>
        <ServicesInfo key="Svcs_Svcs" />
      </div>

      <div className="SS_Section1">
        <h3 className="head_style highlight RTL_Thd" S_language={Slng}>
          {t("Services.Headings.YourHDlvr")}
        </h3>
        <div className="Stcky_Stl">
          <InfoBanner
            Title={t("InfoBanner.Titles.Svcs1")}
            description={t("InfoBanner.Descriptions.Svcs1")}
            Image={Md_Dlvry}
          />
        </div>

        <div className="MD_Details" dir={idir}>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YourHDlvr.CMDApp")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YourHDlvr.CMDAppC")}
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YourHDlvr.TTExp")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YourHDlvr.CMDAppC")}
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YourHDlvr.KFoT")}
            </h4>
          </ScrollAnimation>
          <span className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YourHDlvr.KFoTC.des")}
          </span>
          <ul style={{ listStyleType: "none", textAlign: "center" }}>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.KFoTC.H&C.EPU")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.KFoTC.H&C.EPUC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.KFoTC.H&C.PL")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.KFoTC.H&C.PLC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.KFoTC.H&C.SP")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.KFoTC.H&C.SPC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.KFoTC.H&C.ROT")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.KFoTC.H&C.ROTC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5 style={{ height: "fit-content" }}>
                  <strong>
                    {t("Services.Content.YourHDlvr.KFoTC.H&C.CS")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.KFoTC.H&C.CSC")}
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YourHDlvr.BOT")}
            </h4>
          </ScrollAnimation>
          <span className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YourHDlvr.BOTc.des")}
          </span>
          <ul style={{ listStyleType: "none", textAlign: "center" }}>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YourHDlvr.BOTc.H&C.Cn")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.BOTc.H&C.CnC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YourHDlvr.BOTc.H&C.TS")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.BOTc.H&C.TSC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.BOTc.H&C.Acs")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.BOTc.H&C.AcsC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>
                    {t("Services.Content.YourHDlvr.BOTc.H&C.HOTG")}
                  </strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YourHDlvr.BOTc.H&C.HOTGC")}
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YourHDlvr.BOTc.H&C.JTTC")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YourHDlvr.BOTc.H&C.JTTCC")}
          </p>
        </div>
      </div>

      <div className="SS_Section1" dir={idir}>
        <h3 className="head_style highlight RTL_Thd" S_language={Slng}>
          {t("Services.Headings.YourGTAssis")}
        </h3>
        <div className="Stcky_Stl">
          <InfoBanner
            Title={t("InfoBanner.Titles.Svcs2")}
            description={t("InfoBanner.Descriptions.Svcs2")}
            Image={Cty_Dvr}
          />
        </div>

        <div className="MD_Details">
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YGTA.FTASR")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YGTA.FTASRC")}
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YGTA.TCBE")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YGTA.TCBEC")}
          </p>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YGTA.KFoCB")}
            </h4>
          </ScrollAnimation>
          <span className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YGTA.KFoCBC.des")}
          </span>
          <ul style={{ listStyleType: "none", textAlign: "center" }}>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.KFoCBC.H&C.SAER")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.KFoCBC.H&C.SAERC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.KFoCBC.H&C.RRT")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.KFoCBC.H&C.RRTC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.KFoCBC.H&C.DR")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.KFoCBC.H&C.DRC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.KFoCBC.H&C.SP")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.KFoCBC.H&C.SPC")}
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YGTA.BOCB")}
            </h4>
          </ScrollAnimation>
          <span className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YGTA.BOCBc.des")}
          </span>
          <ul style={{ listStyleType: "none", textAlign: "center" }}>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.BOCBc.H&C.Scu")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.BOCBc.H&C.ScuC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.BOCBc.H&C.Efy")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.BOCBc.H&C.EfyC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.BOCBc.H&C.Ty")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.BOCBc.H&C.TyC")}
            </li>
            <li className="RTL_Tdes" S_language={Slng}>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h5>
                  <strong>{t("Services.Content.YGTA.BOCBc.H&C.24A")}</strong>
                </h5>
              </ScrollAnimation>
              {t("Services.Content.YGTA.BOCBc.H&C.24AC")}
            </li>
          </ul>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <h4 className="highlight2 RTL_Thd" S_language={Slng}>
              {t("Services.Content.YGTA.JCBC")}
            </h4>
          </ScrollAnimation>
          <p className="RTL_Tdes" S_language={Slng}>
            {t("Services.Content.YGTA.JCBCC")}
          </p>
        </div>
      </div>
      <About />
      <div className="SS_Section2">
        <h3 className="head_style highlight RTL_Thd" S_language={Slng}>
          {t("Services.Headings.FAQ")}
        </h3>
        <Accordian />
      </div>
    </div>
  );
}
