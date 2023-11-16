import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Tutor from './Pages/Tutor/Tutor'
import PricingPage from './Pages/PricingPage/PricingPage';
import Program from './Pages/Program/Program';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/tutor' element={<Tutor/>} />
        <Route path='/pricingpage' element={<PricingPage/>} />
        <Route path='/program' element={<Program/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
