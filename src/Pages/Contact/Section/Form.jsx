import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Form() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission processing
    setShowModal(true);

    // Clear input fields after 2 seconds
    setTimeout(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('message').value = '';
      
      // Hide the modal after 4 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    }, 2000);
  };

  return (
    <div className='flex flex-wrap justify-center poppins px-10 lg:px-28 my-28'>
      <div className="text w-[50%]">
        <div className="header py-6">
          <h3 className='text-[#186BAD]'>Contact Us</h3>
          <h1 className='text-3xl font-semibold'>Get in Touch with Us</h1>
        </div>
        <div className="texts">
          <p className='w-[450px] text-justify'>
            Discover Proliferate.AI – your gateway to innovative education! 
            Our platform offers expert-curated courses for every learner, 
            from beginner to pro. Join a vibrant community of over 20,000 
            daily users, staying ahead with cutting-edge content.
            Empower yourself with Proliferate.AI. Elevate your 
            skills, explore new horizons, and shape your future. 
            Ready to dive in? Start learning, growing, and thriving with us!
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
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" id="name" placeholder='Your Name' className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'  required/>
          <input type="email" id="email" placeholder='Your Email' name="" className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'  required/>
          <input type="number" id="phone" placeholder='Your Phone Number' name="" className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'  required/>
          <textarea id="message" cols="40" rows="5" placeholder='Your Message' className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none border-none' required></textarea>
          <button type="submit" className='bg-[#186bad] hover:bg-[#0e4979] py-3 rounded-lg text-white'>Send Message</button>
        </form>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="popup-modal text-center">
          <FontAwesomeIcon icon={faCheckCircle} className='text-7xl text-[#186BAD] my-4' />
          <h2 className='text-2xl'>Thank you <span className='text-[#186BAD] font-semibold '>{document.getElementById('name').value}</span> <br />
           <span className='text-xl my-2'>for reaching out to us! <br /> We will get back to you <br /> as soon as possible.</span></h2>
        </div>
      )}
    </div>
  );
}

export default Form;
