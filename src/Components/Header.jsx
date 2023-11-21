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
        <button className='bg-[#186bad] px-8 py-1 text-white rounded-lg'><Link to='/signin'>Login</Link></button>
        <button className='bg-transparent px-6 py-1 rounded-lg border-2'><Link to='/register'>Sign Up</Link></button>
      </div>

    </div>
  )
}

export default Header