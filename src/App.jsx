import { useState} from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Tutor from './Pages/Tutor/Tutor'
import PricingPage from './Pages/PricingPage/PricingPage';
import Program from './Pages/Program/Program';
import Register from './SignupAsStudents/Register';
import Signin from './SignupAsStudents/Signin';
import Signup from './SignupAsStudents/Signup';
import TutorDetail from './Pages/TutorDetail/TutorDetail';
import Dashboard from './Pages/Dashboard/Dashboard';
import PaymentPage from './Pages/Payment/PaymentPage';
//redux imports
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./Redux/store"
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TutorDashboard from './Pages/Dashboard2/TutorDashboard';
import Signup2 from './SignupAsTutor/Signup2';
import BuildProfile from './SignupAsTutor/BuildProfile';
import VerificationAndIdentity from './SignupAsTutor/VerificationAndIdentification';
import VerifyEmail from './SignupAsTutor/VerifyEmail';


let persistor = persistStore(store);

function App() {

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
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
              <Route path='/tutordashboard' element={<TutorDashboard/>} />
              <Route path='/signupastutor' element={<Signup2/>} />
              <Route path='/buildprofile' element={<BuildProfile/>} />
              <Route path='/verifyidentify' element={<VerificationAndIdentity/>} />
              <Route path='/verifyemail' element={<VerifyEmail/>} />
            </Routes>
          </BrowserRouter>
          </PersistGate>
      <ToastContainer/>
    </ReduxProvider>
  )
}

export default App
