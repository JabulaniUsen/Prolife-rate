import React from 'react';

function WaitingRoom() {
    
    const activities = [
        { subjectName: 'Maths', tutor: 'Adepoju Ademola', date: '10/03/2024'},
        { subjectName: 'Chemistry', tutor: 'Jabulani Usen', date: '10/03/2024', },
        { subjectName: 'German Studies', tutor: 'Odumayo Akindele', date: '10/03/2024', },
        { subjectName: 'Latin', tutor: 'Goodness Mbakara', date: '10/03/2024', },
        { subjectName: 'French', tutor: 'Badiru Pomile', date: '10/03/2024'},
        { subjectName: 'English', tutor: 'Emmanuel John', date: '10/03/2024', },
    ];

    return (
        <div className='relative  lg:w-[450px] w-[400px] lg:h-[430px] h-[400px] my-6 shadow-lg border rounded-2xl p-4'>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[8rem]">
                <p className='jost text-[#9e9e9e]'>No enrollment yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold'>All classes I attend</h2>
                    {/* <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2> */}
                </div>
                <div className="waitingRoom overflow-y-scroll h-[320px] pr-4">
                    {activities.map((item, index) => (
                        <div className="class flex justify-between gap-3 border-t-2 py-5 cursor-pointer" key={index}>

                            {/* <p className="num bg-[#186bad] flex items-center justify-center rounded-full jost w-[1rem] h-[1rem] m-auto"></p> */}

                            <div className="jost w-[200px]">
                                <h3 className='name font-bold ' title={item.name}>
                                    {item.subjectName}
                                </h3>
                                <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    {item.tutor}
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


