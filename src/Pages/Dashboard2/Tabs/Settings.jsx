import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faStar, faUsers, faX } from '@fortawesome/free-solid-svg-icons';
import placeholderImage from '../Icons/placeholder.jpg';
import { faFacebook, faFacebookF, faInstagram, faTwitch, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Bio from '../Components/Bio';
import SubjectsTaught from '../Components/SubjectsTaught';

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
    <div className="">
      <div className="bg-white p-9 rounded-lg shadow-md flex items-center justify-between">
        <div className="">
          <div className="flex items-center relative">
            <div className="w-[200px] h-[200px] bg-gray-200 rounded-full overflow-hidden relative">
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
                    <FontAwesomeIcon icon={faEdit} className="text-white p-2 bg-blue-500 rounded-full" />
                  </label>
                )}
              </div>
            </div>
            <div className="name ml-5 ">
              <div className="">
                <p className='inter text-[32px]'>Jabulani</p>
                <div className=""></div>
              </div>
              <div className="">
                <p className='inter text-[16px] text-[#6E7485]'>Etokakpan, Usenobong Usen</p>
              </div>
              <div className="text-[16px] mt-3 flex gap-[20px]">
                <p>
                  <FontAwesomeIcon icon={faStar} className='text-[#FD8E1F]' /> 0.0 <span className='text-[#6E7485]'>(no reviews yet)</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faUsers} className='text-[#564FFD]' /> 0 <span className='text-sm text-[#6E7485]'>Students</span>
                </p>
              </div>
            </div>
            <div className="absolute left-[10rem] bottom-4">
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
      <div className="flex justify-between gap-5 w-full mt-10">
        <div className="bio w-[60%]">
          <Bio />
        </div>
        <div className="subjectsTaught w-[50%]">
          <SubjectsTaught/>
        </div>
      </div>
    </div>
  );
}

export default Settings;
