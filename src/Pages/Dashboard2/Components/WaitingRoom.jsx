import React from 'react'

function WaitingRoom() {

    const room = [
        { class: "Class A", desc: "78 Registed" },
        { class: "Class B", desc: "78 Registed" },
        { class: "Class C", desc: "78 Registed" },
        { class: "Class D", desc: "78 Registed" },
        { class: "Class E", desc: "78 Registed" },
    ]
  return (
    <div className='waitingRoom w-[300px] h-[400px] overflow-y-scroll m-6 rounded-2xl shadow-xl'>
        <div className="m-6">
            <h2 className='text-lg poppins'>Class Progress</h2>
            {room.map((item, index) => (
                <div className="class" key={index}>
                    <div className="poppins bg-[#f0f7ff] rounded-xl p-5 my-2">
                        <h3 className='Font-bold'>{item.class}</h3>
                        <p className='text-[#9e9e9e] text-sm'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WaitingRoom