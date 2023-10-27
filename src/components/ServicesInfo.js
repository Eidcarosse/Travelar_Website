import React, { useState } from "react";
import "../Stylesheets/ServicesInfo.css";
import "../Stylesheets/RTL/ServicesInfo_RTL.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bnrimg from "../images/Home_Banner.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";

export default function ServicesInfo() {
  const { t } = useTranslation();
  const Slng = i18next.language;
  const ar_icon = (
    <FontAwesomeIcon icon="check-double" size="xs" color="#00E784" />
  );

  const[ddir, setDdir] = useState('ltr')
  useEffect(() => {
    Slng == 'ara'|| Slng == 'ur' ? setDdir('rtl') : setDdir('ltr');
  }, [Slng]);

  return (
    <>
      <main>
        <section id="ServicesInfo">
          <div className="ServicesInfo_Wrapper">
            <div className="Hme_img">
              <img className="Hme_img_ds" src={bnrimg} alt="Our Services =>" />
            </div>
            <div className="Hme_info" dir={`${ddir}`}>
              <span className="H_info_h3" S_language={Slng}>
                <h3>{t("ServicesInfo.Heading")}</h3>
              </span>
              <span className="H_info_li efi2" dir={`${ddir}`} S_language={Slng}>
                <ul>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li1")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={100}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li2")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={200}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li3")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={300}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li4")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={400}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li5")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={500}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li6")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={600}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li7")}
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOnce={true}
                    delay={700}
                  >
                    <li className="bf_li">
                      {ar_icon} {t("ServicesInfo.Li8")}
                    </li>
                  </ScrollAnimation>
                </ul>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
