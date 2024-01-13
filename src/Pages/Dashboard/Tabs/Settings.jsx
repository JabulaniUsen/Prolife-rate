import React, { useState } from 'react';
import Calendar from '../../../Components/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  const [time, setTime] = useState('');
  const [schedule, setSchedule] = useState([
    // { class: "English classes", description: "Tika sarak s.pd" },
    // { class: "Maths classes", description: "Tika sarak s.pd" },
    // { class: "Geography classes", description: "Tika sarak s.pd" }
  ]);

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className='poppins flex justify-between mx-20'>
    <div className="side1 w-[400px]">
      <h1 className='text-[#1669AA] my-3 font-bold text-2xl'>Student Info</h1>
      <form action="" className='flex flex-col gap-3'>
        <input type="text" placeholder='Surname' className='bg-[#f2f1f1] p-3'/>
        <input type="text" placeholder='First Name' className='bg-[#f2f1f1] p-3' />
        <input type="text" placeholder='Class' className='bg-[#f2f1f1] p-3' />
        <input type="number" placeholder='Age' className='bg-[#f2f1f1] p-3' />
        <input type="text" placeholder='Gender' className='bg-[#f2f1f1] p-3' />
        <input type="number" placeholder='Phone number' className='bg-[#f2f1f1] p-3' />
        <input type="email" placeholder='Email' name="" id="" className='bg-[#f2f1f1] p-3' />
        <textarea name="" id="" cols="10" rows="7" placeholder='Type a bio' className='bg-[#f2f1f1] p-3'></textarea>
        <button className='bg-[#1669AA] text-white p-3 rounded-lg'>Add Student</button>
      </form>
    </div>
    <div className="side2">
        <Calendar />
        <div className="bg-[#f2f1f1] my-6 rounded-xl p-4">
          <input
            type="time"
            className="w-full px-3 py-[0.1rem] rounded border-2 bg-transparent"
            value={time}
            onChange={handleChange}
            placeholder="Select Time"
          />
        </div>
        <div className="schedule py-5">
          <h3 className='text-[#186BAD] font-semibold text-xl mb-5'>Schedule</h3>
          {schedule.length > 0 ? (
            <ul className=''>
              {schedule.map((item, index) => (
                <li
                  className='bg-[#f9f9f9] p-4 px-7 rounded-xl flex items-center justify-between mb-3 w-[350px]'
                  key={index}
                >
                  <div className="flex items-center items gap-5">
                    <span className='text-[#186BAD]'>●</span>
                    <div className="">
                      <h3 className='font-semibold mb-1 text-lg'>{item.class}</h3>
                      <p className='text-[#959595] text-sm'>{item.description}</p>
                    </div>
                  </div>
                  <span className='text-2xl'>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="">
              <div className="flex flex-col my-10 justify-center items-center">
                <p className='text-[#898A8B]'>No Schedules</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
