import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqItem = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div
      className={`w-[60%] m-auto faq-item p-4 shadow-lg cursor-pointer border rounded-md overflow-hidden transition-all duration-300 ease-in-out relative ${
        isOpen ? 'h-auto' : 'h-14'
      }`}
    >
      <div onClick={toggleFaq} className="flex justify-between items-center">
        <div className="font-bold">{question}</div>
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
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      id: 3,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      id: 4,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      id: 5,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      id: 6,
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Faq px-10 lg:px-28 flex flex-col gap-5 my-28 ">
      <div className="">
        <h1></h1>
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
