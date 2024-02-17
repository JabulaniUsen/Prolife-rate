import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import noClass from '../../../../Assets/no-class.png'

const Monday = () => {

  const [classdata, setClassdata] = useState([
    { id: 1, subject: "Algebra", studentName: "Canny James", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 2, subject: "Matrix", studentName: "Jabulani Usen", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 3, subject: "Equations", studentName: "Goodness James", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 4, subject: "Geometry", studentName: "Edima Mike", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 5, subject: "Angles", studentName: "James Abraham", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 6, subject: "Numerations", studentName: "Amayen Joseph", time: "12:40 PM", date: "03 Jan 2023", status: "Completed" },
    { id: 7, subject: "Binary Operations", studentName: "Sediong Ibanga", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
    { id: 8, subject: "Trigonometry", studentName: "Etini Ibanga", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
    { id: 9, subject: "Quadratic", studentName: "Gold Etokakpan", time: "12:40 PM", date: "03 Jan 2023", status: "Not started" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredClasses = classdata.filter((item) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      item.studentName.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.subject.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.status.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <div className="grid grid-cols-3 gap-3 inter">
      {filteredClasses.length === 0 ? (
        <div className="flex flex-col gap-3 absolute top-[20rem] rounded-xl border-[1px] border-[#000000] right-[30rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noClass} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Classes</p>
          </div>
        </div>
      ) : (
        <>
          {filteredClasses.map((item, index) => (
            <div
              className="classBox p-3 rounded-xl flex flex-col justify-center items-center bg-[#186BAD]"
              key={index}
            >
              <div className="flex flex-col justify-center gap-10 text-[#fff]">
                <div className="head text-center">
                  <h2 className="font-semibold text-lg py-3 border-b-[2px] border-white">
                    {item.subject}
                  </h2>
                </div>
                <div className="body">
                  <p className=" rounded">
                    {item.studentName}
                  </p>
                  <div className="timeAndDate flex gap-4">
                    <p className=' flex gap-x-1 items-center'><FontAwesomeIcon icon={faClock} />{item.time}</p>
                    <p className=' flex gap-x-1 items-center'><FontAwesomeIcon icon={faCalendarDays} />{item.date}</p>
                  </div>
                  <p
                    className=" status  text-sm my-1 p-1 px-3 rounded "
                  >
                    Status: {item.status}
                  </p>
                </div>
              </div>
              {/* <button className="bg-[#186BAD] w-full p-[0.5rem] rounded text-white transition hover:bg-[#000] font-semibold">Attendance</button> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Monday