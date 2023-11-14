import React, { useState } from 'react';
import kristin from '../../../Assets/kristin.png';
import brooklyn from '../../../Assets/brooklyn.png'

const allMentors = [
    { id: 1, name: 'Kristin Watson', course: 'Mathematics, Science', image: kristin },
    { id: 2, name: 'Product ', course: 'Nulla facilisi..' , image: kristin },
    { id: 3, name: 'Product ', course: 'Fusce semper porta.', image: kristin  },
    { id: 4, name: 'Product ', course: 'Vestibulum lacinia .',image: kristin },
    { id: 5, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 6, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 7, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 8, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 9, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 10, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 11, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 12, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 13, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 14, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 15, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 16, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 17, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 18, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 19, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 20, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 21, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 22, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 23, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 24, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 25, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 26, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 27, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 28, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 55, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 29, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 30, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 31, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 32, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 33, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 34, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 35, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 36, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 37, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 38, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 39, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 40, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 41, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 42, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 43, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 44, name: 'Product ', course: 'Nunc efficitur.' , image: kristin },
    { id: 45, name: 'Product ', course: 'Wetpis egestas.' , image: kristin },
    { id: 46, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 47, name: 'Product ', course: 'Class aptent.' , image: kristin },
    { id: 48, name: 'Product ', course: 'Maecenas interdum.' , image: kristin },
    { id: 49, name: 'Product ', course: 'Suspendisse potenti.' , image: kristin },
    { id: 50, name: 'Product ', course: 'Aenean ullamcorper.' , image: kristin },
  ];
  
  const kindergartenMentors = [
    { id: 51, name: 'Brooklyn Donale ', course: 'ABCs and 123s', image: brooklyn },
    { id: 52, name: ' Donald Kindergarten', course: 'Playing and Learning', image: brooklyn },
    // Add more mentors as needed
  ];
  
  const highSchoolMentors = [
    { id: 1, name: 'High School Mentor 1', course: 'Algebra and Chemistry', image: kristin },
    { id: 2, name: 'High School Mentor 2', course: 'Physics and Literature', image: kristin },
    // Add more mentors as needed
  ];
  
  const collegeMentors = [
    { id: 1, name: 'College Mentor 1', course: 'Computer Science Major', image: kristin },
    { id: 2, name: 'College Mentor 2', course: 'Business Administration Major', image: kristin },
    // Add more mentors as needed
  ];
  
  const technologyMentors = [
    { id: 1, name: 'Tech Mentor 1', course: 'Web Development', image: kristin },
    { id: 2, name: 'Tech Mentor 2', course: 'Data Science', image: kristin },
    // Add more mentors as needed
  ];
  

const Tutors = () => {
    // All Tutors
    const [displayedMentors, setDisplayedMentors] = useState(allMentors);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('all'); // Default to 'all'
    const tutorsPerPage = 30;

    ///////////////
    const totalPages = Math.ceil(allMentors.length / tutorsPerPage);
  
    const startIndex = (currentPage - 1) * tutorsPerPage;
    const endIndex = currentPage * tutorsPerPage;
  
    const currentTutors = allMentors.slice(startIndex, endIndex);

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    
        switch (tab) {
          case 'all':
            setDisplayedMentors(allMentors);
            break;
          case 'kindergarten':
            setDisplayedMentors(kindergartenMentors);
            break;
          case 'highSchool':
            setDisplayedMentors(highSchoolMentors);
            break;
          case 'college':
            setDisplayedMentors(collegeMentors);
            break;
          case 'technology':
            setDisplayedMentors(technologyMentors);
            break;
          default:
            setDisplayedMentors(allMentors);
        }
      };

      const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };



  return (
    <div className='poppins my-40 flex flex-col px-10 lg:px-28'>
    
    <div className="search px-10 lg:px-28 m-auto">
        <div className='border-2 flex justify-center pl-7 rounded-xl w-[90%]'>
            <select id="dropdown"  className='text-slate-400' value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Subject</option>
                <option value="option1">Kindergarten</option>
                <option value="option2">High School</option>
                <option value="option3">College</option>
                <option value="option3">Technology</option>
            </select>
            <select id="dropdown" className='text-slate-400 px-2' value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Grades</option>
                <option value="option1">100%</option>
                <option value="option3">90%</option>
                <option value="option2">80%</option>
                <option value="option3">70%</option>
                <option value="option3">60%</option>
                <option value="option3">50%</option>
                <option value="option3">40%</option>
                <option value="option3">30%</option>
                <option value="option3">20%</option>
                <option value="option3">10%</option>
            </select>
            <input type="text" className='w-[400px]' />
            <button type="submit" className='bg-[#186BAD] text-white px-10 py-4 rounded-r-lg'>Search</button>
        </div>
    </div>

      <div className="tabs flex justify-center items-center gap-20 py-9">
        <h2 onClick={() => handleTabClick('all')} className={activeTab === 'all' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>All Mentor</h2>
        <h2 onClick={() => handleTabClick('kindergarten')} className={activeTab === 'kindergarten' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For Kindergarten</h2>
        <h2 onClick={() => handleTabClick('highSchool')} className={activeTab === 'highSchool' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For High School</h2>
        <h2 onClick={() => handleTabClick('college')} className={activeTab === 'college' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For College</h2>
        <h2 onClick={() => handleTabClick('technology')} className={activeTab === 'technology' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For Technology</h2>
      </div>

            {/* All Tutors */}
            {activeTab === 'all' && (
                <ul className='flex flex-row flex-wrap justify-center gap-10'>
                {displayedMentors.map((tutor) => (
                    <li key={tutor.id}>
                    <img src={tutor.image} alt="" />
                    <h3 className='text-[#186BAD] font-bold text-lg'>{tutor.name}</h3>
                    <small>{tutor.course}</small>
                    </li>
                ))}
                </ul>
            )}

      {/* Kindergarten */}
      {activeTab === 'kindergarten' && (
        <ul className='flex flex-row flex-wrap justify-center gap-10'>
          {displayedMentors.map((mentor) => (
            <li key={mentor.id}>
              <img src={mentor.image} alt="" />
              <h3 className='text-[#186BAD] font-bold text-lg'>{mentor.name}</h3>
              <small>{mentor.course}</small>
            </li>
          ))}
        </ul>
      )}

      {/* You can add similar blocks for other tabs with different content */}

      <div className='mt-4 flex justify-center items-center'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className={`mr-2 ${currentPage === 1 ? 'hidden' : ''}`}>
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index + 1} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`ml-2 ${currentPage === totalPages ? 'hidden' : ''}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Tutors