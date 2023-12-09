import React from 'react'
import tutor from '../../../Assets/tutorr.png'
import { Link } from 'react-router-dom'

function Tutor() {
  return (
    <div className='flex justify-between flex-wrap-reverse items-center px-10 lg:px-28 my-28'>
        <div className="img lg:w-[50%]">
            <img src={tutor} alt="" />
        </div>

        <div className="text poppins lg:w-[40%]">
            <div className="header pb-5">
                <h1 className='font-semibold text-4xl leading-[45px]'>
                    Want to share <br /> your <span className='text-[#186BAD] font-semibold'>Knowledge? </span>
                </h1>
            </div>
            <div className="description">
                <p>
                    High-definition video is video of higher resolution 
                    and quality than standard-definition. While there is 
                    no standardized meaning for high-definition, generally 
                    any video.
                </p>
            </div>

            <Link to='/signup'>
                <button className='signup rounded-xl mt-8 p-4 bg-[#186bad] text-white font-semibold'>Sign up as Student</button>
            </Link>
        </div>
    </div>
  )
}

export default Tutor