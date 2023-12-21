import React from 'react'
import studentAndTeacher from '../Icons/Teacher and student.png'
import { faBookmark, faChevronRight, faEarthAmericas, faEllipsisVertical, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StudentStatisticsChart from '../Components/StudentsStatistics';
import WaitingRoom from '../Components/WaitingRoom';
import BarChart from '../../../Components/BarChart';
import StackedBarChart from '../../../Components/StackedBarChart';


function Home() {
  const exampleData = [20, 45, 30, 80, 60];
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className='px-10 py-6'>
      <div className="head bg-[#186BAD] rounded-xl flex justify-between items-center">
        <div className="texts text-white justify-center mx-7 poppins">
          <h1 className='text-3xl font-semibold'>Welcome back</h1>
          <p className=' my-5'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
        </div>
        <img src={studentAndTeacher} alt="" />
      </div>
      <div className="flex">
        <div className="w-[400px] h-[350px] my-7 shadow-xl">

        {/* Student Statistics */}
        {/* <StudentStatisticsChart data={exampleData} date={currentDate} /> */}
        <StackedBarChart/>
        </div>
        <div className="classProgress">
          <WaitingRoom/>
        </div>
      </div>
    </div>
  )
}

export default Home