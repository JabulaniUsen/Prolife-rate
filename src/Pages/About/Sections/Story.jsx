import React from 'react'
import story1 from '../../../Assets/story1.png'
import story2 from '../../../Assets/story2.png'

function Story() {
  return (
    <div className='poppins flex px-10 lg:px-28 my-28 gap-8 items-center'>
        <div className="text w-[40%] flex gap-8 flex-col">
            <div className="headers">
                <h3 className='text-[#186BAD] text-xl font-bold'>Our Story</h3>
                <h1 className='font-bold text-4xl'>
                    We share knowledge <br />
                    with the <span className='text-[#186BAD] '>world</span>
                </h1>
            </div>

            <div className="w-[400px] flex text-justify">
                <p>
                    Welcome To Proliferate Online Tutoring Service 
                    Where Your Child Will Experience Exponential 
                    Growth With Our Comprehensive Tutoring Service! 
                    We have a large team of passionate educators and 
                    experts who are dedicated to making quality 
                    education accessible to all
                </p>
            </div>
        </div>
        <div className="flex gap-5">
            <img src={story1} className='aspect-square' alt="" />
            <img src={story2} className='aspect-square' alt="" />
        </div>
    </div>
  )
}

export default Story