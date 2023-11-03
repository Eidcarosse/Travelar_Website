import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../Stylesheets/Accordian.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Accordian() {
  const { t } = useTranslation();
  const Slng = i18next.language;
  const [idir, setIdir] = useState();
  useEffect(() => {
    Slng == "ara" || Slng == "ur" ? setIdir("rtl") : setIdir("ltr");
  }, [Slng]);
  return (
    <>
      <div className="Cr_Container">
        <Accordion dir={idir} className="RTL_Tdes" S_language={Slng}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {t("Services.Content.FAQs.HDIBR")}
            </Accordion.Header>
            <Accordion.Body>{t("Services.Content.FAQs.HDIBRC")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {t("Services.Content.FAQs.WAMD")}
            </Accordion.Header>
            <Accordion.Body>{t("Services.Content.FAQs.WAMDC")}.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {t("Services.Content.FAQs.WADIR")}
            </Accordion.Header>
            <Accordion.Body>{t("Services.Content.FAQs.WADIRC")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
