import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <Header/>
        <div className=" px-10 lg:px-28 my-16">
            <div className="poppins header text-center">
                <h1 className='text-3xl'>Hey there, Sign Up!</h1>
            </div>
            <div className="poppins m-auto flex items-center justify-center py-10">
                <form action="">
                    <div className='mb-3'>
                        <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Name</p>
                        <input type="text" name="" placeholder='Full Name' className='bg-[#F2F1F1] p-3 w-[400px] outline-none rounded-sm' id="" />
                    </div>
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
                        <p className='text-[#898A8B] text-xs'>By creating an account, you have agreed to the terms of use and our privacy policy </p>
                    </div>
                    <button type="submit" className='text-white font-semibold py-3 bg-[#186BAD] w-[400px]  rounded-lg'>Sign up</button>
                    <p className='text-[#898A8B] text-center py-5'>Already have an account? <span className='text-[#186BAD] ml-2'><Link to='/signin'>Sign in</Link></span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup