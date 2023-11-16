import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqItem = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div
      className={`poppins w-[60%] m-auto faq-item p-5 shadow-lg cursor-pointer border rounded-md overflow-hidden transition-all duration-300 ease-in-out relative ${
        isOpen ? 'h-auto' : 'h-16'
      }`}
    >
      <div onClick={toggleFaq} className="flex justify-between items-center">
        <div className="font-semibold text-xl">{question}</div>
        <button>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </button>
      </div>
      {isOpen && <div className="mt-2">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is the difference between a UI and UX Designer?',
      answer:
        'A UI (User Interface) designer focuses on the visual aspects and layout of a digital product, ensuring it is aesthetically pleasing and user-friendly. On the other hand, a UX (User Experience) designer is concerned with the overall user experience, including user research, usability, and interaction design, aiming to create a seamless and satisfying experience for users.',
    },
    {
      id: 2,
      question: 'How to become a UI designer?',
      answer:
        'To become a UI designer, acquire design education, develop skills with tools like Figma, build a diverse portfolio, and stay updated on design principles and trends.',
    },
    {
      id: 3,
      question: 'What is the best UI design tool?',
      answer:
        'Figma is widely regarded as one of the best UI design tools.',
    },
    {
      id: 4,
      question: 'What is the best place to learn Figma?',
      answer:
        "Online platforms like Figma's official website, YouTube tutorials, and courses on platforms like Udemy or Coursera are great places to learn Figma.",
    },
    {
      id: 5,
      question: 'Should designers code?',
      answer:
        "While not mandatory, learning basic coding skills can enhance a designer's understanding and collaboration with developers, improving the overall design process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Faq px-10 lg:px-28 flex flex-col gap-5 my-28 ">
      <div className="">
        <h1 className='font-bold text-3xl text-center mb-10'>FREQUENTLY ANSWERED <span className='text-[#186BAD]'>QUESTIONS</span></h1>
      </div>
      {faqData.map((faq, index) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleFaq={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
