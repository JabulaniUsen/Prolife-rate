import React from 'react'
import Header from '../Components/Header'
import student from '../Assets/student.png'
import college from '../Assets/college.png'
import school from '../Assets/school.png'
import google from '../Assets/Google.jpg'
import facebook from '../Assets/facebook.png'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className="">
        <Header/>
        <div className=' poppins px-10 lg:px-28 py-7 '>

        <div className="text-center my-10">
            <h1 className='text-[#186BAD] text-3xl font-bold'>Register with us</h1>
        </div>

        <div className=" flex justify-around items-center my-9">
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>Students</h3>
                <img src={student} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>Tutor</h3>
                <img src={college} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>School</h3>
                <img src={school} className='w-[165px]' alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7 my-11">
                <p className='text-[#898A8B]'>Already have an account? <span className='text-[#186BAD] ml-2'>Sign in</span></p>
                <div className="">
                    <p className='text-[#898A8B]'><span className='mr-6'>--------------------</span> or sign in with   <span className='ml-6'>--------------------</span></p>
                </div>
                <div className="socials flex gap-5">
                    <img src={google} className='border-[1px] rounded-full p-4 border-[#8888] cursor-pointer' alt="" />
                    <img src={facebook} className='border-[1px] rounded-full p-4 border-[#8888] cursor-pointer' alt="" />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Register