import React from 'react'
import studentAndTeacher from '../Icons/Teacher and student.png'
import { faBookmark, faChevronRight, faEarthAmericas, faEllipsisVertical, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StackedBarChart from '../Components/StackedBarChart';
import UpcomingActivities from '../Components/UpcomingActivities';
import ClassProgress from '../Components/ClassProgress';
import LineChart from '../Components/LineGraph';
import WaitingRoom from '../Components/WaitingRoom';
import Documents from '../Components/Documents';


function Home() {
  const exampleData = [20, 45, 30, 80, 60];
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className=' py-6'>
      <div className="head bg-[#186BAD] rounded-xl flex justify-between items-center">
        <div className="texts text-white justify-center mx-7 poppins">
          <h1 className='text-3xl '>Welcome back, <span className='font-semibold'>Jabulani</span></h1>
          <p className=' my-5'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
        </div>
        <img src={studentAndTeacher} alt="" />
      </div>
      <div className="flex">
        <div className="rounded-xl my-7 shadow-xl">
          <StackedBarChart />
        </div>
        <div className="classProgress">
          <ClassProgress/>
        </div>
        <div className="upcomingActivities">
          <UpcomingActivities/>
        </div>
      </div>
      <div className="flex ">
        <div className="rounded-xl">
          <LineChart/>
        </div>
        <div className="classProgress">
          <WaitingRoom/>
        </div>
        <div className="upcomingActivities">
          <Documents/>
        </div>
      </div>
    </div>
  )
}

export default Home