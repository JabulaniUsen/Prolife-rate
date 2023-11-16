import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
        <Header/>
        <div className=" px-10 lg:px-28 my-16">
            <div className="poppins header text-center">
                <h1 className='text-3xl'>Hi, Welcome back!</h1>
            </div>
            <div className="poppins m-auto flex items-center justify-center py-10">
                <form action="">
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
                    <button type="submit" className='text-white font-semibold py-3 bg-[#186BAD] w-[400px]  rounded-lg'>Sign in</button>
                    <p className='text-[#898A8B] text-center py-5'>Don't have an account? <span className='text-[#186BAD] ml-2'><Link to='/signup'>Sign Up</Link></span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signin