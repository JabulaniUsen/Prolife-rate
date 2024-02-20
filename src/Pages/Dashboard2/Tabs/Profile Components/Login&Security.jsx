import React from 'react'
import lock from '../../Icons/lock.svg'

const LoginSecurity = () => {
  return (
    <div className='flex flex-col items-end'>
      <div className="flex items-start gap-5 poppins">
        <img src={lock} alt="" />
        <div className=" flex flex-col gap-20">
          <div className="text">
            <p>
              Your privacy and security are top priority. We do all 
              we can to keep your account secure, and we encourage 
              you to do the same by following best practices: Update 
              your password regularly, enable Two-Factor Authentication, 
              and keep your Support PIN private.
            </p>
          </div>

          <div className="password flex items-start gap-10 justify-between border-b-2 pb-10">
            <p className='font-bold'>Password</p>
            <div className="">
              <p className='text-lg font-semibold'>Changed on <span>OCT 30, 2022</span>,<span>2:29 PM EDT</span></p>
              <p>* In order to remove captcha from login screen you need to change your password every 6 months.</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]'>EDIT</button>
          </div>

          <div className="authentication flex items-start gap-10 justify-between border-b-2 pb-10">
            <p className='font-bold'>Two-Factor Authentication</p>
            <div className="">
              <p className='text-lg '>ON (SMS)</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]'>MANAGE</button>
          </div>

          <div className="password flex items-start gap-10 justify-between pb-10">
            <p className='font-bold'>Support PIN</p>
            <div className="">
              <p>Valid till Jan 5, 2024, 9:40 AM EST</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]'>REFRESH</button>
          </div>
        </div>
      </div>
      <button className='rounded-lg bg-[#186bad] p-4 font-bold mt-20 text-white'>Next</button>
    </div>
  )
}

export default LoginSecurity