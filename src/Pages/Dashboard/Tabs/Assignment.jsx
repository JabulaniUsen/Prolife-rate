import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import noAssignment from '../../../Assets/no-assignment.png';

function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownStates, setDropdownStates] = useState([]);
  const [uploading, setUploading] = useState([]);
  const [uploaded, setUploaded] = useState([]);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        const response = await fetch('https://newproliferate-backend.onrender.com/api/student/my-assignments/');
        const data = await response.json();
        if (Array.isArray(data)) {
          setAssignments(data);
          setDropdownStates(Array.from({ length: data.length }, () => false));
          setUploading(Array.from({ length: data.length }, () => false));
          setUploaded(Array.from({ length: data.length }, () => false));
        } else {
          console.error('Unexpected response format:', data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    }
    fetchAssignments();
  }, []);

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const handleUpload = async (index, event) => {
    // Your file upload logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="poppins lg:p-12 py-12 p-5 relative">
      <div className="header text-4xl font-semibold">Home Work</div>

      {assignments.length === 0 ? (
        <div className="flex flex-col gap-3 absolute top-[15rem] rounded-xl border-[1px] border-[#000000] left-[20rem] w-[250px] h-[250px] justify-center items-center">
          <div className="">
            <img src={noAssignment} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className='text-[#898A8B]'>No Home work</p>
          </div>
        </div>
      ) : (
        <div>
          {assignments.map((item, index) => (
            <div key={index}>
              <div
                className={`assignment subject relative cursor-pointer rounded-xl ${
                  dropdownStates[index] ? 'active' : ''
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <h2
                  className={`text-3xl font-semibold w-[100wv] border-[1px] bg-[#186BAD] text-white rounded-xl h-[150px] p-8 mt-8 transition-all ${
                    dropdownStates[index] ? 'border-0 ' : ''
                  }`}
                >
                  {item.subject}
                </h2>
                <p className={`view absolute bottom-7 right-12 font-light ${dropdownStates[index] ? 'hidden' : 'block'}`}>View</p>
              </div>

              {dropdownStates[index] && (
                <div className="dropDown bg-[#f2f1f1] p-10 rounded-b-xl mt-[-10px] transition-all">
                  <div className="up">
                    <p>{item.instruction}</p>
                    <div className="names flex lg:flex-row flex-col justify-between lg:items-center pt-10 lg:gap-0 gap-6">
                      <div className="side1 flex flex-col lg:gap-3 gap-2">
                        <h2 className="text-xl font-semibold">Tutor: <span className='font-thin text-lg'>{item.tutor}</span></h2>
                        <h3 className="text-xl font-semibold">Date of Submission: <span className='font-thin text-lg'>{item.date}</span></h3>
                      </div>
                      <div className="side2 flex lg:gap-10 gap-5 items-center">
                        <a href="/" className="text-[#186BAD] font-semibold">
                          Download Materials
                        </a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-[#186BAD] py-3 px-5 rounded-lg text-white ${uploading[index] ? 'cursor-not-allowed' : ''} ${uploaded[index] ? 'bg-gray-300 text-black' : ''}`}
                            disabled={uploading[index] || uploaded[index]}
                          >
                            {uploading[index] ? (
                              'Uploading...'
                            ) : uploaded[index] ? (
                              'Uploaded'
                            ) : (
                              <span>
                                <label htmlFor={`fileInput-${index}`}>
                                  <FontAwesomeIcon icon={faUpload} className="mr-2 cursor-pointer" />
                                  Upload Assignment
                                </label>
                                <input
                                  id={`fileInput-${index}`}
                                  type="file"
                                  style={{ display: 'none' }}
                                  onChange={(e) => handleUpload(index, e)}
                                />
                              </span>
                            )}
                          </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Assignment;
