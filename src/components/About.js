import React, { useContext, useState, useEffect } from "react";
import "../Stylesheets/About.css";
import "../Stylesheets/RTL/About_RTL.css";
import "animate.css/animate.min.css";
import AboutImg from "../assets/SVGs/AboutImg.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import DataContext from "../Contexts/DataContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function About() {
  const Scroll_Top = useContext(DataContext);
  const { t } = useTranslation();
  const Slng = i18next.language;
  const [idir, setIdir] = useState("ltr");
  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
  }, [Slng]);

  return (
    <>
      <main>
        <section id="About">
          <div className="Abt_Wrapper">
            <div className="Abt_description" dir={idir}>
              <h3 className="Abt_descrp_h3 RTL_Thd" S_language={Slng}>
                {t("About.Titles.Home")}
              </h3>
              <p className="Abt_descrp_p RTL_Tdes" S_language={Slng}>
                {t("About.Descriptions.Home")}
              </p>
              <Link
                to="/AboutUs"
                onClick={Scroll_Top}
                className="Read_Mr_Dn try_trans RTL_Thd"
                S_language={Slng}
              >
                {t("About.RMore")}
              </Link>
            </div>

            <div className="Abt_img">
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={true}
                style={{
                  padding: "0%",
                  width: "100%",
                  height: "95%",
                  animationIterationCount: "1",
                }}
              >
                <img src={AboutImg} alt="IMG" />
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
