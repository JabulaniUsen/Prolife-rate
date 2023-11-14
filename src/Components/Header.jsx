import React from 'react'
import { useSpring, animated } from 'react-spring';
import logo from '../Assets/logo.png'


function Header() {
  return (
    <div className='poppins flex justify-between items-center px-10 lg:px-28 py-5 shadow-lg z-10'>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="list">
        <ul className='flex gap-6 text-sm font-semibold'>
          <li>Find Tutor</li>
          <li>About us</li>
          <li>Our Programs</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <div className="accounts flex gap-3 font-semibold">
        <button className='bg-[#186bad] px-8 py-1 text-white rounded-lg'>Login</button>
        <button className='bg-transparent px-6 py-1 rounded-lg border-2'>Sign Up</button>
      </div>

    </div>
  )
}

export default Header