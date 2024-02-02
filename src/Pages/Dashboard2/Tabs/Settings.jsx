import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faStar, faUsers, faX } from '@fortawesome/free-solid-svg-icons';
import placeholderImage from '../Icons/placeholder.jpg';
import { faFacebook, faFacebookF, faInstagram, faTwitch, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Bio from '../Components/Bio';
import SubjectsTaught from '../Components/SubjectsTaught';
import AccountDetail from '../Components/AccountDetail';

function Settings() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-white lg:p-9 p-4 rounded-lg shadow-md flex items-center justify-between">
        <div className="">
          <div className="flex items-center relative">
            <div className="lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] bg-gray-200 rounded-full overflow-hidden relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${selectedImage || placeholderImage})`,
                }}
                onChange={handleImageChange}
              >
                {selectedImage && (
                  <label className="flex items-end justify-end h-full w-full z-10 absolute bottom-5">
                    <input
                      className="opacity-0 h-full w-full"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="name ml-5 ">
              <div className="">
                <p className='inter lg:text-[32px] text-2xl'>Jabulani</p>
                <div className=""></div>
              </div>
              <div className="">
                <p className='inter lg:text-[16px] text-[16px] text-[#6E7485]'>Etokakpan, Usenobong</p>
              </div>
              <div className="text-[16px] mt-3 flex lg:flex-row flex-col lg:gap-[20px]">
                <p>
                  <FontAwesomeIcon icon={faStar} className='text-[#FD8E1F] lg:text-base' /> 0.0 <span className='text-[#6E7485] lg:text-base text-sm'>(no reviews yet)</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faUsers} className='text-[#564FFD] lg:text-base' /> 0 <span className='text-sm text-[#6E7485]'>Students</span>
                </p>
              </div>
            </div>
            <div className="absolute lg:left-[10rem] left-[6rem] lg:bottom-4 bottom-[-0.1rem]">
              <label className="text-blue-500 cursor-pointer ">
                <FontAwesomeIcon icon={faEdit} className="text-xl bg-white p-2 rounded-full" />
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col gap-5 w-full mt-10">
        <div className="bio lg:w-[40%]">
          <Bio />
        </div>
        <div className="subjectsTaught lg:w-[60%]">
          <SubjectsTaught/>
        </div>
      </div>
      <div className="">
        <AccountDetail/>
      </div>
    </div>
  );
}

export default Settings;
