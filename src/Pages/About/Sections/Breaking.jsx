import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import circle1 from '../../../Assets/circle1.png';
import circle2 from '../../../Assets/circle2.png';
import circle3 from '../../../Assets/circle3.png';
import circle4 from '../../../Assets/circle4.png';

const Counter = ({ value }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const { count } = useSpring({
        from: { count: 0 },
        to: { count: inView ? value : 0 },
        config: { duration: 4000, easing: (t) => t * (2 - t) },
      });
    
      return <animated.p ref={ref} className='absolute text-[#186BAD] text-2xl top-20 font-semibold'>{count.interpolate((val) => Math.floor(val))}</animated.p>;
    };

function Breaking() {
  return (
    <div className='bg-[#f2f1f1] poppins my-10 py-8 px-10 lg:px-28'>
      <div className="">
        <h1 className='text-[#186BAD] text-3xl my-5 leading-10 font-bold text-center'>
          Breaking Barriers <br />
          Building Brighter Futures One Session at a Time.
        </h1>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        <div className=" flex flex-col items-center gap-5 p-7 text-center w-[30%] relative ">
          <img src={circle1} className='' alt="" />
          <Counter value={500} />
          <p className='text-xl text-[#186BAD] font-semibold'>Total Students Enrolled</p>
        </div>

        <div className="tutor flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle2} className='' alt="" />
          <div className="absolute top-5 i"><Counter value={65} /></div>
          <p className='text-xl text-[#186BAD] font-semibold'>Expert Tutors</p>
        </div>

        <div className="learning flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle3} className='' alt="" />
          <Counter value={200} />
          <p className='text-xl text-[#186BAD] font-semibold'>Sessions</p>
        </div>

        <div className="evaluate flex flex-col items-center gap-5 p-7 text-center w-[30%] relative">
          <img src={circle4} className='' alt="" />
          <div className="absolute top-5"><Counter value={10}/></div>
          <p className='text-xl text-[#186BAD] font-semibold'>Years of Operations</p>
        </div>
      </div>
    </div>
  );
}

export default Breaking;
