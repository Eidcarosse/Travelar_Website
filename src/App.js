import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./components/i18nxt";
import React, { useState } from "react";
import { DataProvider } from "./Contexts/DataContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicesInfo from "./components/ServicesInfo";
import MwBtn from "./components/MwBtn";
import InfoBanner from "./components/InfoBanner";
import About from "./components/About";
import Services from "./components/Services";
import AboutMain from "./components/AboutMain";
import Contact from "./components/Contact";
import PgeNotFnd from "./components/PgeNotFnd";
import Footer from "./components/Footer";
import hme_logo from "./SVGs/Tvl_W_U.svg";
import HashLoader from "react-spinners/HashLoader";
import Gft_Box from "./SVGs/Gft_Box.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faX,
  faGlobe,
  faCarSide,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faX, faCheckDouble, faGlobe, faCarSide);

function App() {
  let [loading, setLoading] = useState(false);
  const setSpner = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  };

  const Scroll_Top = () => {
    const active = 0;
    document.documentElement.scrollTop = active;
    document.body.scrollTop = active;
  };
  const { t } = useTranslation();

  return (
    <>
      <DataProvider value={Scroll_Top}>
        <Navbar setSpner={setSpner} />
        <HashLoader
          style={{
            width: "fit-content",
            margin: "5em 50% 0 50%",
            position: "fixed",
          }}
          color="#00493E"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <Routes>
          <Route
            path="/"
            element={[
              <Home
                key="UndApp"
                title={t("Titles.Home")}
                description={t("Descriptions.Home")}
                logo={hme_logo}
              />,
              <ServicesInfo key="Index_Svcs" />,
              <MwBtn />,
              <InfoBanner
                key="IIB01"
                Title={t("InfoBanner.Titles.Home")}
                description={t("InfoBanner.Descriptions.Home")}
                Image={Gft_Box}
              />,
              <About key="IA01" />,
            ]}
          />
          <Route path="/Services" element={<Services />} />
          <Route
            path="/AboutUs"
            element={<AboutMain top_function={Scroll_Top} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<PgeNotFnd />} />
        </Routes>
        <Footer setSpner={setSpner}/>
      </DataProvider>
    </>
  );
}

export default App;
