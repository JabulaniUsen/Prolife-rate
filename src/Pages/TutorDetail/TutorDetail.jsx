import React, {useState} from 'react'
import  Header from '../../Components/Header'
import user from '../../Assets/user1.png'
import { faCircleInfo, faHeart, faHeartCircleCheck, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from '../../Components/Calendar';
import call from '../../Assets/call.png'
import Footer from '../../Components/Footer';

function TutorDetail() {
    const [time, setTime] = useState('');
    const [isClicked, setClicked] = useState(false);
    const [isClicked2, setClicked2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("'Hello Bamidele, I'm in search of a tutor. Can we schedule a complimentary meeting? I'm eager to learn more about your approach. Anxiously awaiting your response!'");


    const initialText = `Greetings! I'm passionate about exploring the intersection of technology
    and creativity. I thrive on the journey of continuous learning and believe 
    in the power of collaboration to bring innovative ideas to life.
    In my endeavours, I strive to create meaningful and impactful solutions. 
    Whether it's navigating the complexities of technology or delving into 
    the nuances of creative expression, I am dedicated to pushing boundaries 
    and discovering new possibilities.`;

  const [showFullText, setShowFullText] = useState(false);
  const truncatedText = showFullText ? initialText : initialText.slice(0, Math.floor(initialText.length * 0.4));

    const handleChange = (e) => {
        setTime(e.target.value);
    };

    const handleHeartClick = () => {
        setClicked(!isClicked);
    };
    const handleHeartClick2 = () => {
        setClicked2(!isClicked2);
    };

    const handleInputChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const show = () => {
        setShowMessage(true);
    
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      };
    
    const Tutors = [
        {
            id: 1,
            image: user,
            name: "BAMIDELE MOSES", 
            course: "BSc. BIOCHEMISTRY", 
            subjects: "General Reasoning, Science and Mathematics",
            experience: "13+ years",
            bio: "I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......",
            grade: "1 - 12"
        },
        {
            id: 2,
            image: user,
            name: "David Mark", 
            course: "MS. CHEMISTRY", 
            subjects: "General Reasoning, Science and Mathematics",
            experience: "13+ years",
            bio: "I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......",
            grade: "1 - 12"
        },
        {
            id: 3,
            image: user,
            name: "MOSES BAMIDELE", 
            course: "BSc. BIOLOGY", 
            subjects: "General Reasoning, Science and Mathematics",
            experience: "13+ years",
            bio: "I authored a math and quantitative reasoning book currently incorporated in schools' curiculum. I have successfully transformed 'F' students to 'A' students and on several .......",
            grade: "1 - 12"
        },

    ]

  return (
    <div>
        <Header/>

        <div className="poppins px-5 lg:px-28 my-10">
            <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-40">
                <div className="sideOne lg:p-7 p-4 lg:w-[600px] shadow-md ">
                    <div className="flex gap-4">
                        <div className="">
                            <img src={user} className='lg:w-24 w-[4rem]' alt="" />
                        </div>
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

                    <div className="about-me my-10 ">
                        <h3 className='text-[#186BAD] font-bold text-lg my-5'>About me</h3>
                        <p>{truncatedText}</p>
                        {!showFullText && (
                            <p
                            className='text-[#186BAD] cursor-pointer text-sm my-5'
                            onClick={() => setShowFullText(true)}
                            >
                            View more
                            </p>
                        )}
                    </div>

                    <hr />

                    <div className="reviews my-8">
                        <div className="header">
                            <h2 className='font-bold text-lg text-[#186BAD]'>Featured Reviews</h2>
                        </div>
                        <div className="review-list my-8 flex flex-col gap-10">
                            <div className="flex lg:flex-row flex-col gap-4 items-start justify-center relative pr-7 pb-9">
                                <img src={user} className='lg:w-24 w-[4rem]' alt="" />
                                <div className="">
                                    <div className="titles">
                                        <h3 className='font-bold'>BAMIDELE MOSES</h3>
                                    </div>
                                    <div className="rating flex items-center gap-3 my-[5px]">
                                        <div className="rates flex gap-1 my-1">
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStarHalfStroke} className='text-[#FBBC05]'/>
                                        </div>
                                        <p className='text-[#898A8B] text-xs'>1 Year ago</p>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            onClick={handleHeartClick}
                                            className={`cursor-pointer p-2 bg-[#f2f1f1] rounded-full absolute bottom-0 right-5 ${isClicked ? 'text-red-500' : 'text-black'}`}
                                        />
                                    </div>
                                    <div className="review-text">
                                        <p className='text-sm text-[#898A8B]'>
                                            The digital magician of the web! This versatile programming language 
                                            breathes life into static websites, creating interactive experiences. 
                                            From sleek animations to complex web apps, JavaScript's power knows no 
                                            bounds. Unlock the potential of the virtual realm and shape the future 
                                            of the internet with JavaScript wizardry!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col gap-4 items-start justify-center relative pr-7 pb-9">
                                <img src={user} className='lg:w-24 w-[4rem]' alt="" />
                                <div className="">
                                    <div className="titles">
                                        <h3 className='font-bold'>BAMIDELE MOSES</h3>
                                    </div>
                                    <div className="rating flex items-center gap-3 my-[5px]">
                                        <div className="rates flex gap-1 my-1">
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStar} className='text-[#FBBC05]' />
                                            <FontAwesomeIcon icon={faStarHalfStroke} className='text-[#FBBC05]'/>
                                        </div>
                                        <p className='text-[#898A8B] text-xs'>1 Year ago</p>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            onClick={handleHeartClick2}
                                            className={`cursor-pointer p-2 bg-[#f2f1f1] rounded-full absolute bottom-0 right-5 ${isClicked2 ? 'text-red-500' : 'text-black'}`}
                                        />
                                    </div>
                                    <div className="review-text">
                                        <p className='text-sm text-[#898A8B]'>
                                            The digital magician of the web! This versatile programming language 
                                            breathes life into static websites, creating interactive experiences. 
                                            From sleek animations to complex web apps, JavaScript's power knows no 
                                            bounds. Unlock the potential of the virtual realm and shape the future 
                                            of the internet with JavaScript wizardry!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                                    
                            <hr />
                        </div>
                    </div>
                    <div className="lg:px-7">
                        <h2 className='text-[#186BAD] text-xl font-semibold my-10'>Subjects Offered</h2>
                        <div className="head flex justify-around font-semibold">
                            <h2>Subject</h2>
                            <h2>Level</h2>
                            <h2>Price</h2>
                        </div>
                        <div className="bodyy my-4">
                            <div className="flex py-3 my-2 justify-around font-semibold bg-[#f2f1f1] rounded-lg">
                                <h2>Maths</h2>
                                <h2>K-3</h2>
                                <h2>$15/hr</h2>
                            </div>
                            <div className="flex py-3 my-2 justify-around font-semibold bg-[#f2f1f1] rounded-lg">
                                <h2>English</h2>
                                <h2>K-6</h2>
                                <h2>$15/hr</h2>
                            </div>
                            <div className="flex py-3 my-2 justify-around font-semibold bg-[#f2f1f1] rounded-lg">
                                <h2>Physics</h2>
                                <h2>K-10</h2>
                                <h2>$15/hr</h2>
                            </div>
                            <div className="flex py-3 my-2 justify-around font-semibold bg-[#f2f1f1] rounded-lg">
                                <h2>Maths</h2>
                                <h2>K-3</h2>
                                <h2>$15/hr</h2>
                            </div>
                            <div className="flex py-3 my-2 justify-around font-semibold bg-[#f2f1f1] rounded-lg">
                                <h2>Maths</h2>
                                <h2>K-3</h2>
                                <h2>$15/hr</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideTwo lg:p-8 p-2">
                <h3 className='text-[#186BAD] font-bold text-lg my-2'>Availability</h3>
                    <Calendar/>
                    <div className="bg-[#f2f1f1] my-6 rounded-xl p-4">
                        <input
                            type="time"
                            className="w-full px-3 py-[0.1rem] rounded border-2 bg-transparent"
                            value={time}
                            onChange={handleChange}
                            placeholder="Select Time"
                        />
                    </div>
                    <button className='bg-[#186bad] p-3 rounded-lg w-[100%] text-white'>Schedule a Call</button>
                    <div className="my-8">
                        <div className="headers">
                            <h3 className='text-[#186bad] text-xl font-semibold'>Send a message to Bamidele</h3>
                            <p className='text-xs w-full my-1'>Wish to have a free meeting? send  a free message to Bamidele</p>
                        </div>
                        <div className="my-5">
                            <label className="block text-sm font-medium text-[#186bad]">Subject and Level</label>
                            <select
                                value={selectedOption}
                                onChange={handleInputChange}
                                className="mt-1 block w-full text-[#898A8B] py-2 px-3 pr-7 bg-[#f2f1f1] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="" className='text-[#898A8B]'>Select Subject and Level</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="my-5">
                            <label className="block text-sm font-medium text-[#186bad]">Your Message:</label>
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                className="mt-1 block w-full h-40 py-2 px-3 border bg-[#f2f1f1] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <button onClick={show} className='bg-[#186bad] p-3 rounded-lg w-[100%] text-white'>
                            Send Message
                        </button>
                        
                    </div>
                    {showMessage && (
                        <p className='p-2 shadow rounded-lg w-[230px] text float-right text-sm flex items-center gap-2 mb-5'>
                        Tutor has been contacted <FontAwesomeIcon icon={faCircleInfo} />
                        </p>
                    )}
                    <iframe className='lg:h-[50vh] h-[30vh]'
                        width="100%"
                        src="https://www.youtube.com/embed/vVCakfUchVI?si=7vi8Xd8TkTIb7K_6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className=" my-20">
                    <h2 className='text-[#186bad] font-semibold lg:text-3xl text-xl'>Similar tutors for this subject</h2>
                <div className="flex lg:gap-5 lg:flex-row flex-col ">
                    { Tutors.map((item, index) => {
                    return (
                        <div className="tutors my-8 flex gap-5" key={index}>
                            <div className="boxes w-[380px] shadow p-3 rounded-xl">
                                <div className="head flex items-center gap-4 border-b-[1px] border-[#464646] p-3">
                                    <img src={item.image} className='w-[80px]' alt="" />
                                    <div className="names">
                                        <h3 className='font-bold '>{item.name}</h3>
                                        <p className='text-sm'>{item.course}</p>
                                    </div>
                                </div>
                                <div className="body p-5">
                                    <div className="flex gap-2">
                                        <h3 className='font-semibold mb-2'>Subjects:</h3> <p className='text-sm'>{item.subjects}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className='font-semibold mb-2'>Grade:</h3> <p className='text-sm'>{item.grade}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className='font-semibold mb-2'>Experience:</h3> <p className='text-sm'>{item.experience}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className='font-semibold mb-2'>Bio:</h3> <p className='text-sm'>{item.bio}</p>
                                    </div>
                                </div>
                                <button className='bg-[#186bad] px-5 py-2 rounded-lg text-white'>View Full Profile</button>
                            </div>
                        </div>
                    );
                })}
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default TutorDetail


