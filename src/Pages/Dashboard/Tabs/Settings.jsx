import React, { useState } from 'react';
import Calendar from '../../../Components/Calendar'


function Settings() {

    const [time, setTime] = useState('');
   
    const handleChange = (e) => {
       setTime(e.target.value);
    };

  return (
    <div className='poppins flex justify-between mx-20'>
      <div className="side1 w-[400px]">
        <h1 className='text-[#1669AA] my-3 font-bold text-2xl'>Student Info</h1>
        <form action="" className='flex flex-col gap-3'>
          <input type="text" placeholder='Surname' className='bg-[#f2f1f1] p-3'/>
          <input type="text" placeholder='First Name' className='bg-[#f2f1f1] p-3' />
          <input type="text" placeholder='Class' className='bg-[#f2f1f1] p-3' />
          <input type="number" placeholder='Age' className='bg-[#f2f1f1] p-3' />
          <input type="text" placeholder='Gender' className='bg-[#f2f1f1] p-3' />
          <input type="number" placeholder='Phone number' className='bg-[#f2f1f1] p-3' />
          <input type="email" placeholder='Email' name="" id="" className='bg-[#f2f1f1] p-3' />
          <textarea name="" id="" cols="10" rows="7" placeholder='Type a bio' className='bg-[#f2f1f1] p-3'></textarea>
          <button className='bg-[#1669AA] text-white p-3 rounded-lg'>Add Student</button>
        </form>
      </div>
      <div className="side2">
        <Calendar/>
        <div className="bg-[#f2f1f1] my-6 rounded-xl p-4">
          <input
            type="time"
            className="w-full px-3 py-[0.1rem] rounded border-2 bg-transparent"
            value={time}
            onChange={handleChange}
            placeholder="Select Time"
          />
        </div>
        <div className="schedule py-5">
          <h3 className='text-[#186BAD] font-semibold text-xl mb-5'>Schedule</h3>
          <ul className=''>
            <li className='bg-[#f9f9f9] p-4 px-7 rounded-xl flex items-center justify-between mb-3 w-[350px]'>
              <div className="flex items-center items gap-5"> 
                <span className='text-[#186BAD]'>●</span>
                <div className="">
                  <h3 className='font-semibold mb-1 text-lg'>English classes</h3>
                  <p className='text-[#959595] text-sm'>Tika sarak s.pd</p>
                </div>
              </div>
              <span className='text-2xl'>></span>
            </li>
            <li className='bg-[#f9f9f9] p-4 px-7 rounded-xl flex items-center justify-between mb-3 w-[350px]'>
              <div className="flex items-center items gap-5">
                <span className='text-[#186BAD]'>●</span>
                <div className="">
                  <h3 className='font-semibold mb-1 text-lg'>Mathematic classes</h3>
                  <p className='text-[#959595] text-sm'>Tika sarak s.pd</p>
                </div>
              </div>
              <span className='text-2xl'>></span>
            </li>
            <li className='bg-[#f9f9f9] p-4 px-7 rounded-xl flex items-center justify-between mb-3 w-[350px]'>
              <div className="flex items-center items gap-5">
                <span className='text-[#186BAD]'>●</span>
                <div className="">
                  <h3 className='font-semibold mb-1 text-lg'>Physical classes</h3>
                  <p className='text-[#959595] text-sm'>Tika sarak s.pd</p>
                </div>
              </div>
              <span className='text-2xl'>></span>
            </li>
            <li className='bg-[#f9f9f9] p-4 px-7 rounded-xl flex items-center justify-between mb-3 w-[350px]'>
              <div className="flex items-center gap-5">
                <span className='text-[#186BAD]'>●</span>
                <div className="">
                  <h3 className='font-semibold mb-1 text-lg'>English classes</h3>
                  <p className='text-[#959595] text-sm'>Tika sarak s.pd</p>
                </div>
              </div>
              <span className='text-2xl'>></span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Settings