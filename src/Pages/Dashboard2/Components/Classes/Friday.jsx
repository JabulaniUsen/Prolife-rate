import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faMagnifyingGlass, faMap, faMapMarked, faUser } from '@fortawesome/free-solid-svg-icons';
import noClass from '../../../../Assets/no-class.png'

const Friday = () => {
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

  const filteredClasses = classdata.filter((item) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      item.studentName.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.subject.toLowerCase().includes(lowerCaseSearchQuery) ||
      item.status.toLowerCase().includes(lowerCaseSearchQuery)
    );
  });

  return (
    <div className="grid grid-cols-3 gap-3 inter ">
      <button className='text-[#186BAD] underline absolute top-32 right-0 text-lg poppins'>Add subject and availability</button>
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
              className="classBox p-3 rounded-lg flex flex-col justify-center items-center bg-[#186BAD]"
              key={index}
            >
              <div className="flex flex-col justify-center gap-2 text-center text-[#fff]">
                <div className="head text-center">
                  <h2 className="font-semibold text-lg py-3">
                    {item.subject}
                  </h2>
                  <hr />
                </div>
                  <p className="rounded flex gap-5 items-center justify-center">
                    <FontAwesomeIcon icon={faUser}/>
                    {item.studentName}
                  </p>
                  <div className="flex justify-between gap-28 my-4">
                    <p className=' flex gap-x-1 items-center'>
                      <FontAwesomeIcon icon={faMapMarked} />
                      704
                    </p>
                    <p className=' flex gap-x-1 items-center'>
                      <FontAwesomeIcon icon={faClock} />
                      {item.time}
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

export default Friday