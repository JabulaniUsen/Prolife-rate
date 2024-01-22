import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ScheduledClasses from '../Components/ScheduledClasses';
import ClassHistory from '../Components/ClassHistory';

const tabs = ['Scheduled Classes', 'Class History'];

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
      default:
        return null;
    }
  };

  return (
    <div className=" px-12">
      <div className="">
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
