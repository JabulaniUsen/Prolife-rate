import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Tutor from './Pages/Tutor/Tutor'
import PricingPage from './Pages/PricingPage/PricingPage';
import Program from './Pages/Program/Program';
import Register from './Modals/Register';
import Signup from './Modals/Signup';
import Signin from './Modals/Signin';
import TutorDetail from './Pages/TutorDetail/TutorDetail';
import Dashboard from './Pages/Dashboard/Dashboard';
import PaymentPage from './Pages/Payment/PaymentPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/tutor' element={<Tutor/>} />
        <Route path='/pricingpage' element={<PricingPage/>} />
        <Route path="/program" element={<Program/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/tutordetail' element={<TutorDetail/>} />
        <Route path='/paymentpage' element={<PaymentPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
