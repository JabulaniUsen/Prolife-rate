import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ScheduledClasses from '../Components/ScheduledClasses';
import ClassHistory from '../Components/ClassHistory';
import StartClass from '../Components/StartClass';

const tabs = ['Scheduled Classes', 'Class History', 'Start Class'];

const Classes = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <ScheduledClasses />;
      case 1:
        return <ClassHistory />;
      case 2: 
      return <StartClass/>
      default:
        return null;
    }
  };

  return (
    <div className=" px-12">
      <div className="">
        {/* <div className=" poppins bg-[#F1F1F1] rounded p-2 px-4 lg:w-[400px] w-[300px] lg:float-right ">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#979797] mr-2'/>
          <input type="text" placeholder='Search...' className='w-[90%] bg-transparent' />
        </div> */}
        <div className="flex gap-10 my-[4rem] ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer text-lg font-semibold ${
                activeTab === index ? ' text-[#186BAD] border-[#186BAD] border-b-[2px]' : 'text-[#000]'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Classes;
