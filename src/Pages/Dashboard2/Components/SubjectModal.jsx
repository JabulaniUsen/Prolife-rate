import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const SubjectFormModal = ({ isOpen, onClose, onSave, selectedSubject }) => {
  const [formData, setFormData] = useState({
    subject: '',
    price: '',
    grade: '',
    classId: '',
    schedules: [], // Array to store time and day schedules
  });

  useEffect(() => {
    if (selectedSubject) {
      setFormData({
        subject: selectedSubject.subject || '',
        price: selectedSubject.price || '',
        grade: selectedSubject.grade || '',
        classId: selectedSubject.classId || generateClassId(),
        schedules: selectedSubject.schedules || [],
      });
    } else {
      setFormData({
        subject: '',
        price: '',
        grade: '',
        classId: generateClassId(),
        schedules: [],
      });
    }
  }, [selectedSubject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSchedule = () => {
    setFormData({
      ...formData,
      schedules: [...formData.schedules, { dayOfWeek: '', time: '' }],
    });
  };

  const handleRemoveSchedule = (index) => {
    const updatedSchedules = [...formData.schedules];
    updatedSchedules.splice(index, 1);
    setFormData({
      ...formData,
      schedules: updatedSchedules,
    });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedules = [...formData.schedules];
    updatedSchedules[index][field] = value;
    setFormData({
      ...formData,
      schedules: updatedSchedules,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const generateClassId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const isAddScheduleButtonDisabled = () => {
    return formData.schedules.length === parseInt(formData.timesPerWeek, 10);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-1/1 left-1/1 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className=" flex gap-10 flex-wrap">
            <div className="">
              <div className="grid">
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder='Select subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                    Price
                  </label>
                  <input
                    required
                    type="number"
                    id="price"
                    name="price"
                    placeholder='Price in $ per month'
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-600">
                    Grade
                  </label>
                  <input
                    required
                    type="number"
                    id="grade"
                    name="grade"
                    placeholder='What grade do you teach'
                    value={formData.grade}
                    onChange={handleChange}
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="classId" className="block text-sm font-medium text-gray-600">
                    Class ID
                  </label>
                  <input
                    required
                    type="number"
                    id="classId"
                    name="classId"
                    value={formData.classId}
                    onChange={handleChange}
                    readOnly
                    className="mt-1 p-2 border bg-slate-100 rounded-md w-[195px]"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-4">
                <label htmlFor="timesPerWeek" className="block text-sm font-medium text-gray-600">
                  How many times will you teach per week?
                </label>
                <input
                  required
                  type="number"
                  id="timesPerWeek"
                  name="timesPerWeek"
                  value={formData.timesPerWeek}
                  onChange={handleChange}
                  placeholder="Enter number of times per week"
                  className="mt-1 p-2 border bg-slate-100 rounded-md w-full"
                />
              </div>

              {/* Time and Day Schedules */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Time and Day Schedules
                </label>
                {formData.schedules.map((schedule, index) => (
                  <div key={index} className="flex gap-4 items-center mt-2">
                    <select
                      value={schedule.dayOfWeek}
                      onChange={(e) => handleScheduleChange(index, 'dayOfWeek', e.target.value)}
                      className="p-2 border bg-slate-100 rounded-md"
                    >
                      <option value="" disabled>Select day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                    <input
                      type="time"
                      value={schedule.time}
                      onChange={(e) => handleScheduleChange(index, 'time', e.target.value)}
                      className="p-2 border bg-slate-100 rounded-md"
                    />
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveSchedule(index)}
                      // disabled={isAddScheduleButtonDisabled()}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={`mt-2 text-blue-500 py-2 rounded-md hover:text-blue-600 ${
                    isAddScheduleButtonDisabled() ? 'cursor-not-allowed text-blue-200' : 'cursor-pointer'
                  }`}
                  onClick={handleAddSchedule}
                  disabled={isAddScheduleButtonDisabled()}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className='text-xl'/>
                </button>
              </div>
            </div>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-500 hover:text-gray-700"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubjectFormModal;
