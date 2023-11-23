import React, { useState } from 'react';

function Assignment() {
const assignment = [
    {
      id: 1,
      subject: 'Algebra',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Jeremy Ching",
      date: "21/09/2023"
    },
    {
      id: 2,
      subject: 'Verb',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Olatunde Michael",
      date: "28/09/2023"
    },
    {
      id: 3,
      subject: 'People and Beliefs',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Jabulani Usen",
      date: "21/09/2023"
    },
    {
      id: 4,
      subject: 'Piano Lessons',
      instruction: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
      tutor: "Bello Victor",
      date: "02/10/2023"
    }
  ]
  const [dropdownStates, setDropdownStates] = useState(
    Array.from({ length: assignment.length }, () => false)
  );

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  
  return (
    <div className={`poppins p-12`}>
      <div className="header text-4xl font-semibold">Assignment</div>

      {assignment.map((item, index) => (
        <div key={item.id} className="body">
          <div
            className={`assignment subject relative cursor-pointer rounded-xl ${
              dropdownStates[index] ? 'bg-[#186BAD] text-white' : ''
            }`}
            onClick={() => toggleDropdown(index)}
          >
            <h2
              className={`text-3xl font-semibold w-[100wv] border-[1px] text-black border-black rounded-xl h-[150px] p-8 mt-8 ${
                dropdownStates[index] ? ' text-white border-0' : ''
              }`}
            >
              {item.subject}
            </h2>
            <p className="view absolute bottom-7 right-12 font-light">View</p>
          </div>

          {dropdownStates[index] && (
            <div className="dropDown bg-[#F2F1F1] p-10 rounded-b-xl mt-[-10px] transition-max-height ease-out duration-300">
              <div className="up">
                <p>{item.instruction}</p>
                <div className="names flex justify-between items-center pt-10">
                  <div className="side1 flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Tutor: {item.tutor}</h2>
                    <h3 className="text-xl font-semibold">Date of Submission: {item.date}</h3>
                  </div>
                  <div className="side2 flex gap-10 items-center">
                    <a href="" className="text-[#186BAD]">
                      Download Materials
                    </a>
                    <button className="bg-[#186BAD] py-3 px-5 rounded-lg text-white">
                      Upload Assignment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Assignment;
