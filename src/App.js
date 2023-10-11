import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from 'react-bootstrap/Alert';
import Home from './components/Home';
import ServicesInfo from './components/ServicesInfo';
import InfoBanner from './components/InfoBanner';
import About from './components/About';
import Services from './components/Services';
import AboutMain from './components/AboutMain';
import Contact from './components/Contact';
import PgeNotFnd from './components/PgeNotFnd';
import Footer from './components/Footer';
import hme_logo from './SVGs/Tvl_W_U.svg'
import React, { useState } from 'react'
import { DataProvider } from './Contexts/DataContext';
import './components/i18nxt';
import {useTranslation, Trans} from 'react-i18next'
import Gft_Box from './SVGs/Gft_Box.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faX, faShareFromSquare, faGlobe, faCarSide } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faX, faShareFromSquare, faGlobe, faCarSide)


function App() {
  const [Show, setShow] = useState(null);
  const setAlert = () =>{
    setShow("show")
    setTimeout(() => {
      setShow(false)
    }, 1500);  
  }

  const Scroll_Top = () =>{
    const active = 0;
    document.documentElement.scrollTop = active;
    document.body.scrollTop = active;
  }
  const {t} = useTranslation();

  return (
    <>
    <DataProvider value={Scroll_Top}>
    <Navbar showalert={setAlert}/>
    <Alert show={Show} style={{width:"87%",margin:"5em auto -5em", textAlign:"center"}} variant="success">Language Changed!</Alert>
    <Routes>
      <Route path='/' element={[<Home key="UndApp" title={t('Titles.Home')} description={t('Descriptions.Home')} logo={hme_logo} />, <ServicesInfo key='Index_Svcs'/>, <InfoBanner key='IIB01' Title={t('InfoBanner.Titles.Home')} description={t('InfoBanner.Descriptions.Home')} Image={Gft_Box}/>, <About key='IA01'/>]}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/AboutUs' element={<AboutMain top_function={Scroll_Top}/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<PgeNotFnd/>}/>
    </Routes>
    <Footer/>
    </DataProvider>  
       
    </>
  );
}

export default App;
