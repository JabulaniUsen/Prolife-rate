import React from 'react';

function WaitingRoom() {
    
    const activities = [
        { name: 'Adepoju Ademola', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', date: '10/03/2024'},
        { name: 'Jabulani Usen', message: 'Please schedule your class test', date: '10/03/2024', },
        { name: 'Odumayo Akindele', message: 'Please resend last session', date: '10/03/2024', },
        { name: 'Goodness Mbakara', message: 'Send Document via email', date: '10/03/2024', },
        { name: 'Badiru Pomile', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', date: '10/03/2024'},
        { name: 'Emmanuel John', message: 'Please schedule your class test', date: '10/03/2024', },
        { name: 'Akindele Odumayo', message: 'Please resend last session', date: '10/03/2024', },
        { name: 'Goodness Emmanuel', message: 'Send Document via email', date: '10/03/2024', },
    ];

    return (
        <div className='relative lg:ml-[-50px] lg:w-[350px] w-[400px] lg:h-[430px] h-[400px] my-6 shadow-lg border rounded-2xl p-4'>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[8rem]">
                <p className='jost text-[#9e9e9e]'>No Tests yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold'>Tests</h2>
                    <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2>
                </div>
                <div className="waitingRoom overflow-y-scroll h-[320px] pr-4">
                    {activities.map((item, index) => (
                        <div className="class flex gap-3 border-t-2 py-5 cursor-pointer" key={index}>

                            <p className="num bg-[#186bad] flex items-center justify-center rounded-full jost w-[1rem] h-[1rem] m-auto"></p>

                            <div className="jost w-[170px]">
                                <h3 className='name font-bold ' title={item.name}>
                                    {item.name}
                                </h3>
                                <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    {item.message}
                                </p>
                            </div>

                            <div className="date jost">
                                <div className="">
                                    <p className='text-[#8A8A8A] text-xs'>{item.date}</p>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WaitingRoom;


