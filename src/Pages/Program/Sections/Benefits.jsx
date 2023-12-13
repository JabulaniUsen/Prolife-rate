import React from 'react'
import student from '../../../Assets/student.png'
import college from '../../../Assets/college.png'
import school from '../../../Assets/school.png'
import { Link } from 'react-router-dom'

function Benefits() {
  return (
    <div className='poppins px-10 lg:px-28 '>
        <div className="header">
            <h1 className='text-[#186BAD] font-semibold text-3xl'>Who Can Benefit from Our Program?</h1>
            <p className='my-5'>Proliferate.ai's program is designed for a broad spectrum of students and learners, including:</p>
        </div>

        <div className=" flex justify-around items-center my-9">
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>K-12 Students</h3>
                <img src={student} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>K-12 Students</h3>
                <img src={college} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg w-[300px]">
                <h3 className='text-lg font-bold'>K-12 Students</h3>
                <img src={school} className='w-[165px]' alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Benefits