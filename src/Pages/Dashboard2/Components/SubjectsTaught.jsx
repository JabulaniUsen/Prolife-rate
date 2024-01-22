import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV, faEdit, faTrash, faSchool } from '@fortawesome/free-solid-svg-icons';
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
  };

  const handleEditSubject = (subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const handleDeleteSubject = (id) => {
    setSubjects((prevSubjects) => prevSubjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className='p-6 shadow-xl lg:h-[370px] h-[430px] overflow-y-scroll waitingRoom`'>
      <h3 className='poppins font-semibold text-2xl '>Subjects I teach</h3>

      {/* Display Subjects */}
      <div className="flex flex-wrap gap-4 mt-6">
        {subjects.map((subject) => (
          <motion.div
            key={subject.id}
            className="w-full h-[110px] rounded-lg bg-[#208ae0] p-5 flex items-center justify-between relative inter"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* <FontAwesomeIcon icon={faEllipsisV} className="absolute top-2 right-2 cursor-pointer" /> */}
            <div className="flex items-center gap-5 text-white">
              <div className="bg-white p-3 rounded-lg">
                <FontAwesomeIcon icon={faSchool} className='text-[#186BAD]'/>
              </div>
              <div className="flex flex-col justify-between">
                <p className='poppins inter font-semibold text-xl'>{subject.subject}</p>
                <p className='poppins inter'>{`$${subject.price}/hour`}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer text-white"
                onClick={() => handleEditSubject(subject)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer text-white"
                onClick={() => handleDeleteSubject(subject.id)}
              />
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
