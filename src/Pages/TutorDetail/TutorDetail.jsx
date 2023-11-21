import React from 'react'
import  Header from '../../Components/Header'
import user from '../../Assets/user1.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TutorDetail() {
  return (
    <div>
        <Header/>

        <div className="poppins px-10 lg:px-28">
            <div className="flex">
                <div className="sideOne p-5">
                    <div className="flex gap-4">
                        <img src={user} className='w-24' alt="" />
                        <div className="">
                            <div className="titles my-2">
                                <h3 className='text-[#186BAD] font-bold'>BAMIDELE MOSES</h3>
                                <p className='text-[#898A8B] text-sm'>BSc. BIOCHEMISTRY</p>
                            </div>
                            <div className="rating">
                                <div className="rates flex gap-1 my-1">
                                    <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                    <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                    <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                    <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                    <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                </div>
                                <p className='text-sm text-[#898A8B]'>Lessons Completed: <span className='text-[#186BAD] font-bold text-normal'>50</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="about-me my-10 w-[60%]">
                        <h3 className='text-[#186BAD] font-bold text-lg my-5'>About me</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            Ut et massa mi. Aliquam in hendrerit  urna. Pellentesque 
                            sit amet sapien fringilla, mattis ligula consectetur, 
                            ultrices mauris. Maecenas vitae mattis tellus. Nullam 
                            quis imperdiet augue. Vestibulum auctor ornare leo, non 
                            suscipit  magna interdum eu. Curabitur pellentesque nibh 
                            nibh, at maximus ante.
                        </p>
                        <p className='text-[#186BAD] text-sm my-5'>View more</p>
                    </div>

                    <hr />

                    <div className="reviews my-8">
                        <div className="header">
                            <h2 className='font-bold text-lg text-[#186BAD]'>Featured Reviews</h2>
                        </div>
                        <div className="review-list"></div>
                    </div>
                </div>
                <div className="sideTwo w-[300px] h-[100wv] bg-slate-500">

                </div>
            </div>
        </div>
    </div>
  )
}

export default TutorDetail


