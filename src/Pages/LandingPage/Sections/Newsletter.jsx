import React from 'react'

function Newsletter() {
  return (
    <div className='poppins px-10 lg:px-28 my-28 flex justify-center items-center'>
        <div className="side1"></div>
        <div className="side2 flex flex-col justify-center items-center gap-9">
            <h1 className='text-[#186bad] text-4xl font-bold text-center'>Subscribe For Get Update <br />
                Every New Courses
            </h1>
            <p className='text-sm'>20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
            <form action="">
            <div className=" flex bg-white my-5 px-2 py-1 w-[450px] gap-4 text-black rounded-lg shadow-lg">
                <input type="text" className='bg-transparent outline-none pl-4' placeholder='Enter your email' />
                <button className='bg-[#186bad] px-10 py-4 border-none rounded-lg text-white ml-[4.8rem]'>Subscribe</button>
            </div>
            </form>
        </div>
        <div className="side3"></div>
    </div>
  )
}

export default Newsletter