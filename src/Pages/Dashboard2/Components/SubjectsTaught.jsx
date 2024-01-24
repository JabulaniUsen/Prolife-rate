import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import SubjectFormModal from './SubjectModal';

const SubjectsTaught = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleAddSubject = () => {
    setIsModalOpen(true);
  };

  const handleSaveSubject = (formData) => {
    if (selectedSubject) {
      // Edit existing subject
      setSubjects((prevSubjects) =>
        prevSubjects.map((subject) =>
          subject.id === selectedSubject.id ? { ...subject, ...formData } : subject
        )
      );
    } else {
      // Add new subject
      setSubjects((prevSubjects) => [...prevSubjects, { id: Date.now(), ...formData }]);
    }
  
    setIsModalOpen(false);
    setSelectedSubject(null);
  
    // Update the formRender div with the new values, including schedules
    const formRenderDiv = document.querySelector('.formRender');
    if (formRenderDiv) {
      const scheduleHtml = formData.schedules.map((schedule) => `
        <div>
          <p class="text-sm">Day: ${schedule.dayOfWeek}</p>
          <p class="text-sm">Time: ${schedule.time}(UTC)</p>
        </div>
      `).join('');
  
      formRenderDiv.innerHTML = `
        <p class="text-sm flex">Grade: ${formData.grade}<span class='text-xs'>th</span></p>
        <p class="text-sm">Price: $${formData.price}/month</p>
        <p class="text-sm">Class Id: ${formData.classId}</p>
        <div class="text-sm">Schedules: ${scheduleHtml}</div>
      `;
    }
  };
  
  

  const handleEditSubject = (subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const handleDeleteSubject = (id) => {
    setSubjects((prevSubjects) => prevSubjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className='p-6 shadow-xl lg:h-[370px] overflow-y-scroll waitingRoom`'>
      <h3 className='poppins font-semibold text-2xl '>Subjects I teach</h3>

      {/* Display Subjects */}
      <div className="subjectDisplay grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <motion.div
            key={subject.id}
            className="bg-white p-4 rounded-lg shadow-md relative w-[200px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <p className="font-semibold text-lg">{subject.subject}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-gray-500 cursor-pointer"
                  onClick={() => handleEditSubject(subject)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteSubject(subject.id)}
                />
              </div>
            </div>
            <div className='formRender'>
              <p className="text-sm flex">Grade: {subject.grade}<span className='text-xs'>th</span></p>
              <p className="text-sm">Price: ${subject.price}/month</p>
              <p className="text-sm">Class Id: {subject.classId}</p>
              {/* Schedules */}
              <div className="text-sm">Schedules:
                {subject.schedules.map((schedule, index) => (
                  <div key={index}>
                    <p>Date: {schedule.date}</p>
                    <p>Time: {schedule.time}(UTC)</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Subject Button */}
      <div
        className="w-[50px] h-[50px] rounded-full hover:border-[#e6e6e6] hover:border-[2px] border-[0.1px] p-1 mt-4 flex flex-col justify-center items-center gap-3 cursor-pointer"
        onClick={handleAddSubject}
      >
        <FontAwesomeIcon icon={faPlus} className='text-3xl text-gray-400 hover:transition-transform hover:rotate-90 hover:text-[#186BAD] hover:border-[#186BAD]' />
      </div>

      {/* Add/Edit Subject Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SubjectFormModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSave={handleSaveSubject}
              selectedSubject={selectedSubject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubjectsTaught;
