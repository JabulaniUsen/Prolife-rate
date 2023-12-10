import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Signin() {
  const [showModal, setShowModal] = useState(false);
  const [proceedingText, setProceedingText] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission processing
    setShowModal(true);

    // Show the welcome message after 2 seconds
    setTimeout(() => {
      setProceedingText(true);
      // Proceed to Dashboard after 4 seconds
      setTimeout(() => {
        navigate('/dashboard'); // Use navigate instead of history.push
      }, 4000);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="px-10 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className='text-3xl'>Hi, Welcome back!</h1>
        </div>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Email</p>
              <input type="email" name="" placeholder='Email' className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" />
            </div>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Password</p>
              <input type="password" name="" placeholder='Password' className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" />
            </div>
            <div className="w-[400px] flex gap-3 items-baseline my-7" >
              <input type="checkbox" name="" id="" />
              <p className='text-[#186BAD] font-semibold'>Keep me signed in</p>
            </div>
            <button type="submit" className='signup text-white font-semibold py-3 bg-[#186BAD] w-[400px]  rounded-lg'>Sign in</button>
            <p className='text-[#898A8B] text-center py-5'>Don't have an account? <span className='text-[#186BAD] ml-2'><Link to='/signup'>Sign Up</Link></span></p>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="popup-modal">
          <FontAwesomeIcon icon={faCheckCircle} className='text-6xl text-[#186BAD] my-2' />
          <h2 className='text-2xl font-bold'>Welcome back, Buddy!</h2>
          {proceedingText && <p className='my-3 text-[#186BAD] font-semibold'>Proceeding to Dashboard...</p>}
        </div>
      )}
    </div>
  );
}

export default Signin;
