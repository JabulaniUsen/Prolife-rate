import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { faAngleLeft, faAngleRight, faBell, faChevronDown, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
import user from '../Dashboard2/Icons/user.png'

// Import Tab Components
import Classes from './Tabs/Classes';
import Home from './Tabs/Home';
import Assignment from './Tabs/Assignment';
import Settings from './Tabs/Settings';
import Messages from './Tabs/Messages';
import Reports from './Tabs/Reports';
import Footer2 from '../../Components/Footer2';
import { Link } from 'react-router-dom';
import Transactions from './Tabs/Transactions';

// Tabs Component
const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="tab-buttons flex flex-col gap-2 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={
            index === activeTab
              ? 'active hover:bg-[#509cdb]'
              : ' flex gap-2 items-center justify-start text-white bg-[#186bad] w-[170px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'
          }
        > 
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('')

  const location = useLocation();

  useEffect(() => {
    // Check if the location state contains fullName and email and update the state
    if (location.state) {
      setFullName(location.state.fullName || '');
      setEmail(location.state.email || '');
    }
  }, [location.state]);
  

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
        label: 'Transactions',
        contentComponent: <Transactions />,
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
    <div className="">
      <div className='flex w-[20%] sidebar-hidden'>
        <div className="sideBar bg-[#2977B5] h-[100%] flex flex-col items-center px-2">
          <Link to='/'>
            <div className="logo py-10 px-10">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className=" flex flex-col gap-2 my-20">
            <Tabs tabs={tabs} setActiveTab={setActiveTab} />
          </div>

          <div className="logout">
            <button className="flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          </div>

          <div className="refer flex flex-col justify-center item-center my-20">
            <img src={refer} alt="" />
            <button className="bg-[#D9D9D9] py-2 px-4 rounded-full shadow">Refer your friend</button>
          </div>

          <div className="">
            <button className="flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]">
              <img src={support} alt="" />
              Support
            </button>
            <button className="flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]">
              <img src={setting} alt="" />
              Settings
            </button>
          </div>

          <div className="profile poppins flex items-start justify-center py-5 border-t-[1px] my-5 mx-2 border-white">
            <div className="w-[50px]">
              <img src={user} alt="" className='rounded-full' />
            </div>
            <div className="">
              <p className='name text-white text-sm'>{fullName}</p> 
              <p className="email text-white text-xs w-[140px]">{email}</p>
            </div>
            <button className='text-white'><FontAwesomeIcon icon={faRightFromBracket} /></button>
          </div>
        </div>

        <div className="body px-[20px]">
          <div className='header flex justify-end gap-3 pt-10 w-[1050px] bg-white items-center sidebar-hidden'>
            <div className="div w-[200px] border-[2px] rounded-2xl flex items-center gap-2 p-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-400 text-sm" />
              <input type="text" placeholder="Search" className='text-sm' />
            </div>

            <div className="relative">
              <span className="absolute border-white border-[2px] bg-[#186bad] p-[4.5px] rounded-full top-[-2px] right-[0px]"></span>
              <FontAwesomeIcon icon={faBell} className="text-2xl text-[#979797]" />
            </div>

            <div className="user flex items-center gap-1">
              <img src={user} alt="" />
              <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
            </div>

          </div>
          {tabs[activeTab].contentComponent}
        </div>

      </div>
      <Footer2 />
    </div>
  );
};

export default TutorDashboard;
