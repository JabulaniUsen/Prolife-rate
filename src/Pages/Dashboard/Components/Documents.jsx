import { faCloudArrowDown, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Documents() {
    
    const activities = [
        { name: 'Maths text book'},
        { name: 'Latin lesson outline'},
        { name: 'Maths home work correction'},
    ];

    return (
        <div className='relative lg:w-[450px] w-[400px] my-6 mx-2 rounded-2xl shadow-lg border p-5'>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[7rem]">
                <p className='jost text-[#9e9e9e]'>No progress yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold'>Quick access to resources</h2>
                    {/* <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2> */}
                </div>
                <div className="waitingRoom overflow-y-scroll h-[300px] pr-5">
                    {activities.map((item, index) => (
                        <div className="class p-5 my-2 bg-[#F5FAFF] rounded-lg" key={index}>
                            <div className="jost flex items-center justify-between">
                                <h3 className='name font-bold lg:w-[200px] text-[14px] text-[#186BAD]' title={item.name}>
                                    {item.name}
                                </h3>
                                <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    <FontAwesomeIcon icon={faCloudArrowDown} className='text-[#186BAD] text-[20px]'/>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Documents;


