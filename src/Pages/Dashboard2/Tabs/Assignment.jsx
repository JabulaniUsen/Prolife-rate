import React, { useState } from 'react';
import { faCalendarDays, faEllipsisVertical, faFileExport, faPaperPlane, faPaperclip, faPenToSquare, faPlus, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const tabs = ['Reports', 'Transactions', 'Debit', 'Upcoming', 'Due'];

const Assignment = () => {
  // const [activeTab, setActiveTab] = useState(0);

  // const handleTabClick = (index) => {
  //   setActiveTab(index);
  // }; font-semibold

  const Table = ({ tabData }) => {
    return (
      <table className="poppins my-8">
        <thead className=''>
          <tr className=' grid grid-cols-9 bg-[#f3f6f9] items-center rounded-t-2xl' >
            <th className='py-5 text-sm '>126</th>
            <th className='py-5 text-sm text-[#B5B5C3]'>Edit</th>
            <th className='py-5 text-sm '>Name</th>
            <th className='py-5 text-sm '>Date</th>
            <th className='py-5 text-sm '>Title</th>
            <th className='py-5 text-sm '>Attachment</th>
            <th className='py-5 text-sm '>Assessment</th>
            <th className='py-5 text-sm '>Send Message</th>
          </tr>
        </thead>
        <tbody className='flex flex-col'>
        {tabData.map((row, index) => (
          <tr 
            key={index} 
            className='border-2 border-[#f3f6f9] grid grid-cols-9  place-items-center'
            >
            <td className=''>
              {row.serialNo}
              <input type="checkbox" name="" id="" className='ml-2' /> 
            </td>
            <td className='bg-[#FFAF53] p-1 px-2 rounded-lg text-white'>
              <button>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </td>
            <td className='py-3 '>{row.assignedStudent}</td>
            <td className=' py-3  text-center text-[#B5B5C3]'>{row.deadline}</td>
            <td className=' py-3  text-center  text-[#186BAD] font-semibold'>{row.title}</td>
            <td className='text-[#000] flex items-center gap-2'>
              {row.attachment}
              <FontAwesomeIcon icon={faPaperclip} className={` ${row.attachment < 1 ? 'text-[#B5B5C3]' : 'text-[#0FA958]'}`} />
            </td>
            <td className=' py-3 '>{row.numberOfClasses}</td>
            <td className=' bg-[#186BAD] px-2 py-1 rounded-lg text-white'>
              <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </td>
            <td className=' text-[#F64E60] text-3xl'>
              <button>< FontAwesomeIcon icon={faXmarkCircle} /></button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    );
  };

  const tabData = [
      { serialNo: 1, assignedStudent: 'John Doe', deadline: '5th of Feb. 2024 17:00', title: 'Human Sense Organs', attachment: 1, numberOfClasses: 13, paymentMethod: 'Wire Transfer' },
      { serialNo: 2, assignedStudent: 'Amaka David', deadline: '5th of Feb. 2024 17:00', title: 'Artifical Intelligence in Schools', attachment: 0, numberOfClasses: 24, paymentMethod: 'Wire Transfer' },
      { serialNo: 3, assignedStudent: 'David David', deadline: '5th of Feb. 2024 17:00', title: 'Artificial Intelligence and Design System', attachment: 1, numberOfClasses: +12, paymentMethod: 'Wire Transfer', },
      { serialNo: 4, assignedStudent: 'Henry Ola', deadline: '5th of Feb. 2024 17:00', title: 'Principles of Human Computer Interaction', attachment: 2, numberOfClasses: +14, paymentMethod: 'Wire Transfer', },
      { serialNo: 5, assignedStudent: 'Mike Sediong', deadline: '5th of Feb. 2024 17:00', title: 'Principles of Human Computer Interaction', attachment: 1, numberOfClasses: +14, paymentMethod: 'Wire Transfer' },
      { serialNo: 6, assignedStudent: 'Amaka David', deadline: '5th of Feb. 2024 17:00', title: 'Principles of Human Computer Interaction', attachment: 4, numberOfClasses: +55, paymentMethod: 'Wire Transfer' },
      { serialNo: 7, assignedStudent: 'Victor David', deadline: '5th of Feb. 2024 17:00', title: 'Principles of Human Computer Interaction', attachment: 0, numberOfClasses: +23, paymentMethod: 'Wire Transfer' },

  ];

  return (
    <div className="p-4">
  
      <div className="payments flex justify-between items-end mt-8">
        <div className="poppins ">
          <p className='text-[#B5B5C3] mb-[-2rem] text-sm'>A Total of 125 Assignment Have Listed.</p>
        </div>
        <div className="">
          <button className='mx-3 border-[#696969] border-[1px] bg-[#F6F6F6] hover:bg-[#cacaca] text-[#4F4E4E] transition rounded-xl font-semibold py-[0.3rem] px-8'>Filter Assignment <FontAwesomeIcon icon={faEllipsisVertical} className='ml-3' /></button>
          <button className='bg-[#186BAD] text-white items-center transition hover:bg-[#0f3f66] rounded-xl font-semibold py-[0.3rem] px-8'>ADD NEW<FontAwesomeIcon icon={faPlus} className='ml-3'/></button>
        </div>
      </div>
      <Table tabData={tabData} />
    </div>
  );
};

export default Assignment;
