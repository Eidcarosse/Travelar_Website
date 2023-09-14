import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServicesInfo from './components/ServicesInfo';
import Banner_Hme from './components/Banner_Hme';
import About_Main from './components/About_Main';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Alert from 'react-bootstrap/Alert';
import logo from './SVGs/OdRd.svg'
import React, { useState } from 'react'
import ABT from './SVGs/Gift.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faX, faReplyAll, faShareFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faX, faReplyAll, faShareFromSquare, faGlobe)


function App() {
  const [Show, setShow] = useState(null);
  const setAlert = () =>{
    setShow("show")
    setTimeout(() => {
      setShow(false)
    }, 1500);  
  }
  return (
    <>
    <Navbar showalert={setAlert}/>
    <Alert show={Show} style={{width:"87%",margin:"5em auto -5em", textAlign:"center"}} variant="info">Language changed successfull!</Alert>
    <Routes>
      <Route path='/' element={[<Home title="Travel with us" description=" Your ultimate destination for seamless car booking experiences!
                Whether you're planning a road trip, a business venture, or a
                leisurely escape, Travelar is here to redefine the way you embark
                on your journeys. With a vast network of trusted rental
                providers and a user-friendly interface, we bring you a world of
                convenience at your fingertips." logo={logo} />, <ServicesInfo/>, <Banner_Hme Title="Travelar" description="Enjoy 30% discount on your first Rides !" Image={ABT}/>, <About/>]}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About_Main' element={<About_Main/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>  
       
    </>
  );
}

export default App;
