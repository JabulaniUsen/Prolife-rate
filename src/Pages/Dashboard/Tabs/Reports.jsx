import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import user from '../Icons/report.png'

const tabs = ['All', 'Incomplete', 'Completed',];

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ tabData }) => {
    return (
      <table className="poppins table-auto w-full my-8 ">
        <thead>
          <tr >
            <th className='text-white'>img</th>
            <th className='py-5'>Name</th>
            <th className='py-5'>Subject</th>
            <th className='py-5'>Status</th>
            <th className='py-5'>Summary</th>
            <th className='py-5'>Reports</th>
          </tr>
        </thead>
        <tbody>
        {tabData.map((row, index) => (
          <tr 
            key={index} 
            className='border-separate'
            >
            <td><img src={row.img} alt="" /></td>
            <td className='px-10 py-5'>{row.name}</td>
            <td className='px-10 py-5'>{row.subject}</td>
            <td className='px-10 py-5'>{row.status}</td>
            <td className='px-10 py-5 text-[#186BAD] cursor-pointer'>{row.summary}</td>
            <td className='px-10 py-5 text-[#186BAD] cursor-pointer'>{row.reports}</td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };

  const tabData = [
    
    [
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '40% Completed', summary: 'Input Summary', reports: 'Generate'},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '80% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '90% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '20% Completed', summary: 'Input Summary', reports: 'Generate',},
      { img: user, name: 'John Doe', subject: 'Mathematics', status: '10% Completed', summary: 'Input Summary', reports: 'Generate',},
    ],
    
    [
      { img: user, name: 'Rite Doe', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      { img: user, name: 'John Adam', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      { img: user, name: 'Andrew Iman', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      { img: user, name: 'Joan Amos', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      { img: user, name: 'King King', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
    [
      { img: user, name: 'Bamidele Andrew', subject: 'Mathematics', status: '100% Completed', summary: 'Input Summary', reports: 'Generate', },
    ],
  ];

  return (
    <div className="pt-16 px-12 " >
      <div className="header">
        <h1 className='text-4xl font-semibold text-center'>Report</h1>
      </div>
      <div className="">
        <div className="border-[1px] border-[#979797] rounded-3xl p-3 w-[300px] lg:float-right ">
          <input type="text" placeholder='What do you want to to search' className='w-[90%]' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#979797]'/>
        </div>
        <div className="flex justfly-between gap-20  my-[4rem] ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 mr-2 py-4 text-lg ${
                activeTab === index ? ' font-bold ' : 'text-[#979797]'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <Table tabData={tabData[activeTab]}   />
      </div>
    </div>
  );
};

export default Reports;
