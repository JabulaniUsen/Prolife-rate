import React from 'react';
import CircularProgressBar from './CircularProgressBar';

function ClassProgress() {
  const room = [
    { class: "Class A", desc: "78 Registered", progress: 45 },
    { class: "Class B", desc: "78 Registered", progress: 60 },
    { class: "Class C", desc: "78 Registered", progress: 30 },
    { class: "Class D", desc: "78 Registered", progress: 75 },
    { class: "Class E", desc: "78 Registered", progress: 90 },
  ];

  return (
    <div className='classProgress waitingRoom w-[300px] h-[430px] overflow-y-scroll m-6 rounded-2xl shadow-xl'>
      <div className="m-6 ">
        <h2 className='pb-4 jost font-bold'>Class Progress</h2>
        {room.map((item, index) => (
        <div className="class" key={index}>
            <div className="jost bg-[#f0f7ff] rounded-xl p-5 my-2 flex items-center justify-between">
                <div className="">
                    <h3 className='font-bold'>{item.class}</h3>
                    <p className='text-[#9e9e9e] text-sm'>{item.desc}</p>
                </div>
                {/* <CircularProgressBar /> */}
            </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default ClassProgress;
