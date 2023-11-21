import React, { useState } from 'react';
import menu from '../../Assets/menu.png';
import user from '../../Assets/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faChevronDown, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/logo2.png';
import home from './Icons/home.png';
import teacher from './Icons/teacher.png';
import bank from './Icons/bank.png';
import settings from './Icons/setting.png';
import report from './Icons/chart-square.png';
import messages from './Icons/ChatBubble.png';
import refer from './Icons/refer.png';
import support from './Icons/support.png';
import setting from './Icons/settings.png';

// Import Tab Components
import Classes from './Tabs/Classes'
import Home from './Tabs/Home'
import Assignment from './Tabs/Assignment'
import Settings from './Tabs/Home'
import Messages from './Tabs/Messages'
import PaymentInfo from './Tabs/PaymentInfo'
import Reports from './Tabs/Reports'

// Tabs Component
const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="tab-buttons flex flex-col gap-2 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={index === activeTab ? 'active' : ' flex gap-2 items-center justify-start text-white bg-[#186bad] w-[170px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define tabs with corresponding content components
  const tabs = [
    {
      label: 'Dashboard',
      contentComponent: <Home/>,
      img: home
    },
    {
      label: 'My Classes',
      contentComponent: <Classes />,
      img: home
    },
    {
        label: 'Assignments',
        contentComponent: <Assignment />,
        img: teacher
    },
    {
        label: 'Payment Info',
        contentComponent: <PaymentInfo />,
        img: bank
    },
    {
        label: 'Settings and profile',
        contentComponent: <Settings />,
        img: settings
    },
    {
        label: 'Reports',
        contentComponent: <Reports />,
        img: report
    },
    {
        label: 'Messages',
        contentComponent: <Messages />,
        img: messages
    },
    
  ];

  return (
    <div className='flex w-[20%]'>
        <div className="sideBar bg-[#2977B5] h-[100%] static flex flex-col items-center px-5">
          <div className="logo py-10 px-10">
            <img src={logo} alt="" />
          </div>
          <div className=" flex flex-col gap-2 my-20">
          <Tabs tabs={tabs} setActiveTab={setActiveTab} />
            {/* <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                <img src={home} alt="" />
                Dashboard
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                    <img src={home} alt="" />
                    My Classes
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                <img src={teacher} alt="" />
                Assignments
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                <img src={bank} alt="" />
                    Payment Info
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 pr-[1px] hover:bg-[#509cdb] rounded'>
                <img src={settings} alt="" />
                Settings and profile
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                <img src={report} alt="" />
                Reports
            </button>
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
                <img src={messages} alt="" />
                Messages
            </button> */}
         </div>

          <div className="logout">
            <button className='flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          </div>

          <div className="refer flex flex-col justify-center item-center my-20">
            <img src={refer} alt="" />
            <button className='bg-[#D9D9D9] py-2 px-4 rounded-full shadow'>Refer your friend</button>
          </div>

          <div className="">
            <button className='flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]'>
              <img src={support} alt="" />
              Support
            </button>
            <button className='flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]'>
              <img src={setting} alt="" />
              Settings
            </button>
          </div>
        </div>

        <div className="header flex justify-between shadow-lg p-10 w-[82%] bg-white items-center fixed right-0">
                <div className="">
                    <img src={menu} className='cursor-pointer' alt="" />
                </div>
                <div className="div w-[400px]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 mx-3' />
                    <input type="text" placeholder='Search anything' />
                </div>
                <div className="">
                    <button className='bg-[#186bad] py-3 px-6 text-white rounded-lg text-sm'>+ Add Student</button>
                </div>
                <div className="relative">
                    <span className="absolute text-white bg-[#186bad] p-[0,5px] px-[5.5px] rounded-full text-[11px] top-[-5px] right-[-6px]">9</span> 
                    <FontAwesomeIcon icon={faBell} className='text-2xl text-[#56606D]' />
                </div>
                <FontAwesomeIcon icon={faCartShopping} className='text-2xl text-[#56606D]' />
                <div className="user flex items-center gap-2">
                    <img src={user} alt="" />
                    <div className="">
                        <h2>Carl Esquer</h2>
                        <p className='text-[#56606d] text-sm'>Level 3</p>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>

        <div className="body mt-40">
            {tabs[activeTab].contentComponent}
        </div>
    </div>
  );
}

export default Dashboard;
