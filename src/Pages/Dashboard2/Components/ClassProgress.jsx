import React from 'react';

function ClassProgress() {
  const room = [
    { class: "Class A", desc: "38 Registered", progress: 45 },
    { class: "Class B", desc: "43 Registered", progress: 60 },
    { class: "Class C", desc: "21 Registered", progress: 30 },
    { class: "Class D", desc: "45 Registered", progress: 75 },
    { class: "Class E", desc: "61 Registered", progress: 90 },
  ];

  return (
    <div className='classProgress relative waitingRoom lg:w-[300px] w-[400px] h-[430px] overflow-y-scroll lg:m-6 rounded-2xl shadow-xl'>
      {room.length === 0 && (
        <div className="absolute top-[50%] right-[35%]">
          <p className='jost text-[#9e9e9e]'>No progress yet</p>
        </div>
      )}
      <div className="m-6 ">
        <h2 className='pb-4 jost font-bold'>Class Progress</h2>
        {room.map((item, index) => (
        <div className="class" key={index}>
            <div className="jost bg-[#f0f7ff] rounded-xl p-5 my-2 flex items-center justify-between">
                <div className="">
                    <h3 className='font-bold'>{item.class}</h3>
                    <p className='text-[#9e9e9e] text-sm'>{item.desc}</p>
                </div>
            </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default ClassProgress;
