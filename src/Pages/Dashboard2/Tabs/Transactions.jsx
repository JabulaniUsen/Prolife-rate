import React, { useState } from 'react';
import { faCalendarDays, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tabs = ['Reports', 'Transactions', 'Debit', 'Upcoming', 'Due'];

const Transactions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ tabData }) => {
    return (
      <table className="poppins my-8">
        <thead className=''>
          <tr className=' grid grid-cols-8' >
            <th className='py-5 text-sm '>S.No.</th>
            <th className='py-5 text-sm '>Name</th>
            <th className='py-5 text-sm '>Date</th>
            <th className='py-5 text-sm '>Transaction ID</th>
            <th className='py-5 text-sm '>Amount</th>
            <th className='py-5 text-sm '>No. Of Classes</th>
            <th className='py-5 text-sm '>Payment Method</th>
            <th className='py-5 text-sm '>Status</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-3'>
        {tabData.map((row, index) => (
          <tr 
            key={index} 
            className='border-2 border-[#cdcdcd] border-separate grid grid-cols-8 gap-5 place-items-center'
            >
            <td className='mx-4 py-3'>{row.serialNo}</td>
            <td className='py-3'>{row.name}</td>
            <td className=' py-3'>{row.date}</td>
            <td className=' py-3'>{row.transactionId}</td>
            <td className={` py-3 text-[#2E8760] ${row.specialStyle ? 'text-red-500' : ''}`}>{row.amount}</td>
            <td className=' py-3'>{row.numberOfClasses}</td>
            <td className=' py-3 '>{row.paymentMethod}</td>
            <td className=' py-3 text-[#2E8760]'>{row.status}</td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };

  const tabData = [
    
    [
      { serialNo: 1, name: 'John Doe', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: 13, paymentMethod: 'Wire Transfer', status: 'Success' },
      { serialNo: 2, name: 'Amaka David', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: 24, paymentMethod: 'Wire Transfer', status: 'Success' },
      { serialNo: 3, name: 'David David', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +12, paymentMethod: 'Wire Transfer', status: 'Success', },
      { serialNo: 4, name: 'Henry Ola', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +14, paymentMethod: 'Wire Transfer', status: 'Success', specialStyle: { color: 'red' }  },
      { serialNo: 5, name: 'Mike Sediong', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +14, paymentMethod: 'Wire Transfer', status: 'Success' },
      { serialNo: 6, name: 'Amaka David', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +55, paymentMethod: 'Wire Transfer', status: 'Success' },
      { serialNo: 7, name: 'Victor David', date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    
    [
      { serialNo: 1, name: 'Amaka David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      { serialNo: 1, name: 'David David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      { serialNo: 1, name: 'Henry Ola',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      { serialNo: 1, name: 'Mike Sediong',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      { serialNo: 1, name: 'Amaka David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
    [
      { serialNo: 1, name: 'Victor David',  date: '02 Apr 2024', transactionId: '123456', amount: '$80,000', numberOfClasses: +23, paymentMethod: 'Wire Transfer', status: 'Success' },
    ],
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">

          <div className="flex justfly-between gap-5 mt-[3rem]">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2  font-semibold transition hover:text-[#186BAD] ${
                  activeTab === index ? 'text-[#186BAD] border-b-2 border-b-[#186BAD]' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="">
              <button className='text-[#186BAD] py-2 px-6 bg-[#F4EEFF] rounded font-semibold transition hover:bg-[#d9d2e7]'>Expenses</button>
            </div>
            <div className="">
              <button className='border-[1px] border-[#186BAD] text-[#186BAD] rounded font-semibold py-2 px-6 transition hover:bg-[#186BAD] hover:text-white'>Invoice</button>
            </div>
            <div className="">
              <button className='bg-[#186BAD] py-2 px-6 text-white rounded font-semibold flex gap-1 items-center transition hover:bg-[#0f3f66]'><FontAwesomeIcon icon={faFileExport} />Export Data</button>
            </div>
          </div>
          
      </div>
      <div className="payments flex justify-between items-center mt-8">
        <div className="dateRange poppins flex items-center gap-3">
          <p>From </p>
          <div className="flex items-center gap-1 bg-[#ededf5] p-1 px-3 rounded">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>12-01-2024</p>
          </div>
          <p> to </p>
          <div className="flex items-center gap-1 bg-[#ededf5] p-1 px-3 rounded">
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>12-12-2024</p>
          </div>
        </div>
        <div className="">
        <button className='border-[1px] mx-3 border-[#B63A3A] text-[#B63A3A] hover:bg-[#B63A3A] hover:text-white transition rounded font-semibold py-2 px-6'>Make Payment</button>
          <button className='border-[1px] border-[#3AB690] text-[#3AB690] hover:bg-[#3AB690] hover:text-white transition rounded font-semibold py-2 px-6'>Request Payment</button>
        </div>
      </div>
      <Table tabData={tabData[activeTab]} />
    </div>
  );
};

export default Transactions;
