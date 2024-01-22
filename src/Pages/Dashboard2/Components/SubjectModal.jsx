import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SubjectFormModal = ({ isOpen, onClose, onSave, selectedSubject }) => {
  const [formData, setFormData] = useState({
    subject: '',
    price: '',
  });

  useEffect(() => {
    if (selectedSubject) {
      setFormData({
        subject: selectedSubject.subject || '',
        price: selectedSubject.price || '',
      });
    }
  }, [selectedSubject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject
            </label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
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

