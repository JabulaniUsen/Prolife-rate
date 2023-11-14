import React from 'react'
import our from '../../../Assets/our.png'

function Our() {
  return (
    <div className='flex items-center poppins my-20 bg-[#186bad] shadow-inner px-10 lg:px-28'>
        <div className="">
            <img src={our} alt="" />
        </div>
        <div className="w-[50%] text-white">
            <div className="header">
                <h3 className=''>OUR ONE BILLION MISSIONS</h3>
                <h1 className='text-3xl font-bold pb-5'>Our one billion mission <br /> sounds bold, We agree.</h1>
            </div> 
            <div className="text text-justify">
                "We cannot solve our problems with the same thinking 
                we used when we created them."—Albert Einstein. 
                Institutions are slow to change. Committees are 
                where good ideas and innovative thinking go to die. 
                Choose agility over dogma. Embrace and drive change. 
                We need to wipe the slate clean and begin with bold, 
                radical thinking.
            </div>
        </div>
    </div>
  )
}

export default Our