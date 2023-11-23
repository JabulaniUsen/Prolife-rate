// src/App.js

import React, { useState } from 'react';

const tabs = ['Reports', 'Transactions', 'Credit', 'Debit', 'Upcoming', 'Due'];

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ tabData }) => {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tabData.map((row, index) => (
            <tr key={index}>
              <td>{row.serialNo}</td>
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.transactionId}</td>
              <td>{row.amount}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const tabData = [
    // Data for Tab 1
    [
      { serialNo: 1, name: 'John Doe', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    // Data for Tab 2
    [
      { serialNo: 1, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    [
      { serialNo: 1, name: 'David David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    [
      { serialNo: 1, name: 'Henry Ola', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    [
      { serialNo: 1, name: 'Mike Sediong', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    [
      { serialNo: 1, name: 'Amaka David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
    [
      { serialNo: 1, name: 'Victor David', date: '2023-11-23', time: '12:00 PM', transactionId: '123456', amount: '$100', status: 'Completed' },
      // Add more rows as needed
    ],
  ];

  return (
    <div className="p-4">
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 mr-2 ${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <Table tabData={tabData[activeTab]} />
    </div>
  );
};

export default App;
