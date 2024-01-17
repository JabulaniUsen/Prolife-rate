import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function JoinClassModal({ showModal, closeModal, roomId }) {
  const [localRoomId, setLocalRoomId] = useState(roomId || ''); // Set initial value
  const navigate = useNavigate();

  useEffect(() => {
    // Update localRoomId when the roomId prop changes
    setLocalRoomId(roomId || '');
  }, [roomId]);

  function handleJoin() {
    navigate(`/room/${localRoomId}`);
  }

  return (
    <>
      {showModal && (
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
            <span
              className="absolute top-2 right-4 text-2xl text-gray-500 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <main>
              <p>Class ID</p>
              <input
                type="text"
                placeholder="Enter room id"
                value={localRoomId}
                onChange={(e) => setLocalRoomId(e.target.value)}
                required
                className="block w-full p-2 my-5 rounded-md border-[5px] border-black shadow focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <button
                onClick={handleJoin}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Join now
              </button>
            </main>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default JoinClassModal;
