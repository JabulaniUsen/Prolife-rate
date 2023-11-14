import React from 'react'

function College() {
  return (
    <div className='college2 poppins mx-10 lg:mx-28 my-5 h-[100vh] flex items-center bg-[#ede9f2] rounded-3xl'>
        <div className="slide w-[100%] lg:w-[50%] p-10">
            <h2 className='text-[#186bad] font-bold my-8 bg-[#e4e2f4] p-2 rounded-lg w-[125px]'>College Level</h2>
            <h1 className='font-bold text-4xl leading-snug my-2 text-[#186bad]'>Learn Anywhere, Anytime
                with our Expert Tutors 
                at Your Fingertips
            </h1>
           
            <p className=' w-[500px] text-[#5d5a6f] '>
                Access to top-quality education is just a click 
                away. Our platform connects you with expert 
                tutors who are passionate about sharing their 
                knowledge.
            </p>
            
            <button className='rounded-xl mt-8 p-4 bg-[#186bad] text-white font-semibold'>Sign up as Student</button>
            
          </div>
    </div>
  )
}

export default College