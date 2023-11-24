import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <div className='px-10 lg:px-28 flex my-28 justify-around flex-wrap'>
        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between p-8 shadow-md'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>👥 1-on-1 Tutoring</h2>
                </div>
                <h2 className='text-sm font-semibold mt-5'>
                    <span className='font-bold text-5xl'>$12</span> / EDITOR
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Components-driven system
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Sales-boosting landing pages
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Awesome Feather icons pack
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Themed into 3 different styles
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Extended license</button>
        </div>
        </Link>

        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between shadow-xl p-10'>
            <div className="price-header">
                <div className="flex justify-between">
                    <h2 className='text-[#186BAD]'>👤 Group Tutoring</h2>
                    <p className='border-[1px] p-[5px] px-5 text-xs rounded-full border-[#8a8a8a]'>BEST!</p>
                </div>
                <h2 className='text-sm font-semibold mt-5'>
                    <span className='font-bold text-5xl'>$12</span> / MONTHLY
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Components-driven system
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Sales-boosting landing pages
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Awesome Feather icons pack
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Themed into 3 different styles
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Will help to learn Figma
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Extended license</button>
        </div>
        </Link>

        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between p-8 shadow-md'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>🏫 Schools/District Partnership</h2>
                </div>
                <h2 className='text-sm font-semibold  mt-5'>
                    <span className='font-bold text-5xl'>$12</span> / EDITOR
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Components-driven system
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Sales-boosting landing pages
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Awesome Feather icons pack
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Themed into 3 different styles
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Extended license</button>
        </div>
        </Link>
    </div>
  )
}

export default Plans