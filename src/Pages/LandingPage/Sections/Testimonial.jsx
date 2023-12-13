import React from 'react'
import gloria from '../../../Assets/gloria.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Testimonial() {
  return (
    <div className=' lg:px-28 flex flex-col lg:flex-row items-center'>
        <div className="text poppins w-[90%] lg:w-[60%] ">
            <div className="header flex flex-col gap-5">
                <h2 className='font-light text-[#186bad] text-lg'>------ TESTIMONIAL</h2>

                <h1 className='font-bold text-3xl text-[#186bad]'>What They Say?</h1>
            </div>

            <div className="w-[550px] my-10 text-[#5D5A6F] flex flex-col gap-5">
                <p>
                    High-definition video is video of higher resolution 
                    and quality than standard-definition. While there is 
                    no standardized meaning for high-definition, generally 
                    any video.
                </p>
                <p>
                    High-definition video is video of higher resolution 
                    and quality than standard-definition. While there is 
                    no standardized meaning for high-definition, generally 
                    any video.
                </p>
                <p>
                    High-definition video is video of higher resolution 
                    and quality than standard-definition. 
                </p>
            </div>
            <Link to='/program'>
                <button className='signup rounded-xl  p-4 bg-[#186bad] text-white font-semibold'>Check out our programs</button>
            </Link>
        </div>

        <div className="image relative p-20 poppins">  
            <img src={gloria} className='w-300px' alt="" />
            <div className="absolute bg-white text-[#186bad] p-2 px-[18px] text-3xl rounded-full shadow top-[300px] right-[50px]">></div>
            <div className=" flex flex-col items-center justify-center gap-2 text-center w-[450px] p-[2rem] rounded-lg shadow-lg absolute bottom-0 right-[-50px] bg-white border-l-8 border-red-400">
                <div className="text">
                    <p className='text-[#186bad] text-xs px-5 pb-10 border-l-2'>
                        "Thank you so much for your help. It's exactly what 
                        I've been looking for. You won't regret it. It 
                        really saves me time and effort. TOTC is exactly 
                        what our business has been lacking." 
                    </p>
                </div>
                <div className="flex items-center justify-between gap-20">
                    <div className="name">
                        <h2 className='text-lg font-bold text-[#186bad]'>Gloria Rose</h2>
                    </div>
                    
                    <div className="rating text-start">
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#fba333]' />
                        </div>
                        <div className="reviews mt-1">
                            <p className='text-sm text-[#80819A]'>12 reviews at Yelp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial