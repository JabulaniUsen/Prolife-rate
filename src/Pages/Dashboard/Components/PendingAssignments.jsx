import React from 'react';
import { Link } from 'react-router-dom';

function PendingAssignments() {
  const room = [
    { assignment: "Python", desc: "Williams Odunayo"},
    { assignment: "Excel", desc: "Ekemini Udo"},
    { assignment: "Statistics", desc: "Jabulani Usen"},
    { assignment: "Maths", desc: "Peter Griffen"},
    { assignment: "French", desc: "Williams Odunayo"},
    { assignment: "French", desc: "Williams Odunayo"},
    { assignment: "French", desc: "Williams Odunayo"},
    { assignment: "French", desc: "Williams Odunayo"},
  ];

  return (
    <div className='classProgress relative lg:w-[450px] w-[400px] h-[430px] lg:m-6 rounded-2xl shadow-lg border'>
      {room.length === 0 && (
        <div className="absolute top-[50%] right-[35%]">
          <p className='jost text-[#9e9e9e]'>No Assignment yet</p>
        </div>
      )}
      <div className="m-6 ">
        <div className="flex justify-between">
          <h2 className='pb-4 jost font-bold'>Assignments</h2>
          <Link to='./Assignments'><h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2></Link>
        </div>
        <div className="waitingRoom overflow-y-scroll h-[335px] pr-3">
          {room.map((item, index) => (
          <div className="class cursor-pointer" key={index}>
              <div className="jost bg-[#f0f7ff] rounded-lg px-5 py-4 my-2 flex items-center justify-between">
                  <div className="">
                      <h3 className='font-bold text-lg'>{item.assignment}</h3>
                      <p className='text-[#9e9e9e] text-sm'>{item.desc}</p>
                  </div>
                  <div className="">
                    <button className='bg-[#186bad] px-4 py-1 rounded text-white'>View</button>
                  </div>
              </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PendingAssignments;
