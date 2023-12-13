import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import logo from '../Assets/logo.png'


function Header() {
  return (
    <div className='poppins flex justify-between items-center px-10 lg:px-28 py-5 z-10'>

      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="list">
        <ul className='flex gap-6 text-sm font-semibold'>
          <Link to='/tutor'>Find Tutor</Link>
          <Link to='/about'>About us</Link>
          <Link to='/program'>Our Programs</Link>
          <Link to='/pricingpage'>Pricing</Link>
          <Link>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </div>
      
      <div className="accounts flex gap-3 font-semibold">
        <Link to='/signin'><p className='bg-[#186bad] px-8 flex items-center py-1 text-white rounded-lg'>Login</p></Link>
        <Link to='/register'><button className='bg-transparent px-6 py-1 rounded-lg border-2'>Sign Up</button></Link>
      </div>

    </div>
  )
}

export default Header