import React from 'react'

function Form() {
  return (
    <div className='flex flex-wrap justify-centerg poppins px-10 lg:px-28 my-28'>
        <div className="text w-[50%]">
            <div className="header py-6">
                <h3 className='text-[#186BAD]'>Contact Us</h3>
                <h1 className='text-3xl font-semibold'>Get in Touch with Us</h1>
            </div>
            <div className="texts">
                <p className='w-[450px] text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipiscing 
                    elit Ut et massa mi. Aliquam in hendrerit urna. 
                    Pellentesque sit amet sapien fringilla, mattis 
                    ligula consectetur, ultrices mauris. Maecenas 
                    vitae mattis tellus. Nullam quis imperdiet augue. 
                    Vestibulum
                </p>
            </div>
            <div className="tell my-12 flex flex-col gap-7">
                <div className="number">
                    <p>(289)952-2596</p>
                </div>
                <div className="">
                    <p>info@proliferate.ai</p>
                </div>
            </div>
        </div>
        <div className="shadow-lg p-10">
            <form action="" className='flex flex-col gap-4'>
                <input type="text" placeholder='Your Name'  className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'/>
                <input type="email" placeholder='Your Email' name="" id=""  className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'/>
                <input type="number" placeholder='Your Phone Number' name="" id=""  className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'/>
                <textarea name="" id="" cols="40" rows="5" placeholder='Your Message' className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'></textarea>
                <button type="submit" className='bg-[#186bad] hover:bg-[#0e4979] py-3 rounded-lg text-white'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Form