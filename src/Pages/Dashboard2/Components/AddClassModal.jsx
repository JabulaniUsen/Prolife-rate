import React from 'react';
import { motion } from 'framer-motion';

const ClassModal = ({ showModal, closeModal, formData, handleInputChange, handleSubmit }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 bg-white p-6 rounded-lg w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <span className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Subject:
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="block w-full p-2 rounded-md border-[2px] border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </label>
          <label className="block">
            Student Name:
            <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required className="block w-full p-2 rounded-md border-[2px] border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </label>
          <label className="block">
            Time:
            <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="block w-full p-2 rounded-md border-[2px] border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </label>
          <label className="block">
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="block w-full p-2 rounded-md border-[2px] border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </label>
          <label className="block">
            Class ID:
            <input type="text" name="classid" value={formData.classid} onChange={handleInputChange} required readOnly className="block w-full p-2 rounded-md border-[2px] border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            {formData.editing ? 'Update' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default ClassModal;
