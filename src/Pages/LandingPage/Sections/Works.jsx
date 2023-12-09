import React from 'react'
import search from '../../../Assets/search.png'
import learning from '../../../Assets/learning.png'
import evaluate from '../../../Assets/evaluate.png'
import tutor from '../../../Assets/tutor.png'

function Works() {
  return (
    <div className='bg-[#f2f1f1] poppins flex flex-col lg:flex-row my-10 py-8 px-10 lg:px-28'>

        <div className=" flex flex-col items-center gap-5 p-7 text-center w-[30%] ">
            <img src={search} className='w-10' alt="" />
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <p className='leading-7 text-sm'>
                Sign Up to Expand and join the ranks 
                of proud parents who have the incredible 
                opportunity to witness their child's 
                knowledge flourish
            </p>
        </div>

        <div className="tutor flex flex-col items-center gap-5 p-7 text-center w-[30%] border-x-4 ">
            <img src={tutor} className='w-10' alt="" />
            <h1 className='text-2xl font-bold'>Choose Tutor</h1>
            <p className='leading-7 text-sm'>
                Find your personal online tutor 
                from our wide range of
                competent professionals to 
                work with your child.
            </p>
        </div>

        <div className="learning flex flex-col items-center gap-5 p-7 text-center w-[30%] border-r-4 ">
            <img src={learning} className='w-10' alt="" />
            <h1 className='text-2xl font-bold'>Start Learning</h1>
            <p className='leading-7 text-sm'>
                Book sessions using our convenient 
                scheduling tool. Remember, consistency 
                is essential for achieving success.
            </p>
        </div>

        <div className="evaluate flex flex-col items-center gap-5 p-7 text-center w-[30%]">
            <img src={evaluate} className='w-10' alt="" />
            <h1 className='text-2xl font-bold'>Evaluate</h1>
            <p className='leading-7 text-sm'>
                Monitor your child's progress 
                and see a higher level of 
                confidence and success.
            </p>
        </div>

    </div>
  )
}

export default Works