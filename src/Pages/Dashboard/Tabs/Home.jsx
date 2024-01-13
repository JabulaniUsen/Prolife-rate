import React from 'react'
import sub1 from '../Icons/sub1.png'
import sub2 from '../Icons/sub2.png'
import { faBookmark, faChevronRight, faEarthAmericas, faEllipsisVertical, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calender2 from '../../../Components/Calender2';
import StackedBarChart from '../../../Components/StackedBarChart';

function Home() {
  return (
    <div className='px-20 py-6'>
      {/* <div className="header mb-7">
        <h1 className='text-2xl font-semibold mb-1'>Subjects</h1>
        <p className='text-[#BCC1CD]'>Upcoming Classes/Events</p>
      </div>
      <div className="subjects flex gap-10">
        <div className="sub-boxes relative w-[140px] h-[110px] rounded-2xl">
          <img src={sub1} className=' sub-head absolute right-0 top-0 ' alt="" />
          <FontAwesomeIcon icon={faEllipsisVertical} className='text-white text-2xl absolute top-4 right-6' />
          <FontAwesomeIcon icon={faSquareRootVariable} className='text-lg absolute top-5 left-5' />
          <h3 className='absolute bottom-4 left-4 font-semibold'>Statistics</h3>
        </div>
        <div className="sub-boxes relative w-[140px] h-[110px] rounded-2xl">
          <img src={sub2} className=' sub-head absolute right-0 top-0 ' alt="" />
          <FontAwesomeIcon icon={faEllipsisVertical} className='text-white text-2xl absolute top-4 right-6' />
          <FontAwesomeIcon icon={faEarthAmericas} className='text-lg absolute top-5 left-5' />
          <h3 className='absolute bottom-4 left-4 font-semibold'>Geography</h3>
        </div>
        <div className="sub-boxes relative w-[140px] h-[110px] rounded-2xl">
          <img src={sub1} className=' sub-head absolute right-0 top-0 ' alt="" />
          <FontAwesomeIcon icon={faEllipsisVertical} className='text-white text-2xl absolute top-4 right-6' />
          <FontAwesomeIcon icon={faBookmark} className='text-lg absolute top-5 left-5' />
          <h3 className='absolute bottom-4 left-4 font-semibold'>Vocabulary</h3>
        </div>
        <div className="sub-boxes relative w-[140px] h-[110px] rounded-2xl">
          <img src={sub2} className=' sub-head absolute right-0 top-0 ' alt="" />
          <FontAwesomeIcon icon={faEllipsisVertical} className='text-white text-2xl absolute top-4 right-6' />
          <FontAwesomeIcon icon={faEarthAmericas} className='text-lg absolute top-5 left-5' />
          <h3 className='absolute bottom-4 left-4 font-semibold'>Biology</h3>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <p className='text-[#0997D9] font-semibold text-lg'>See all</p>
          <FontAwesomeIcon icon={faChevronRight} className='text-3xl' />
        </div>
      </div> */}

      <div className="calender my-10">
        <Calender2/>
      </div>

      <div className="">
        <StackedBarChart/>
      </div>
    </div>
  )
}

export default Home