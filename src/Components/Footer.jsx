import React from 'react';
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='poppins px-10 lg:px-28 py-20 flex justify-between items-start bg-[#204c6c]'>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="socials flex gap-3 items-center">
          <FontAwesomeIcon icon={faFacebookF} className='text-[#186bad] text-lg'/>
          <FontAwesomeIcon icon={faInstagram} className='bg-[#186bad] text-[#ffff] p-2 rounded-full text-sm' />
          <FontAwesomeIcon icon={faTwitter} className='text-[#186bad] text-lg' />
          <FontAwesomeIcon icon={faLinkedin} className='text-[#186bad] text-lg' />
        </div>
        <div className="copyright">
          <p className='text-white'>
            © 2023 proliferate.ai <br />
            All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="text-white">
        <h2 className='text-[#186BAD] text-2xl font-semibold my-5'>Courses</h2>
        <ul className='text-sm flex flex-col gap-2'>
          <li>Classroom courses</li>
          <li>Virtual classroom courses</li>
          <li>E-learning courses</li>
          <li>Video Courses</li>
          <li>Offline Courses</li>
        </ul>
      </div>

      <div className="text-white">
        <h2 className='text-[#186BAD] text-2xl font-semibold my-5'>Community</h2>
        <ul className='text-sm flex flex-col gap-2'>
          <li>Learners</li>
          <li>Parteners</li>
          <li>Developers</li>
          <li>Transactions</li>
          <li>Blog</li>
          <li>Teaching Center</li>
        </ul>
      </div>

      <div className="text-white">
        <h2 className='text-[#186BAD] text-2xl font-semibold my-5'>Quick links</h2>
        <ul className='text-sm flex flex-col gap-2'>
          <li>Home</li>
          <li>Professonal Eduction</li>
          <li>Courses</li>
          <li>Admissions</li>
          <li>Testimonial</li>
          <li>Programs</li>
        </ul>
      </div>

      <div className="text-white">
        <h2 className='text-[#186BAD] text-2xl font-semibold my-5'>More</h2>
        <ul className='text-sm flex flex-col gap-2'>
          <li>Press</li>
          <li>Investors</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
