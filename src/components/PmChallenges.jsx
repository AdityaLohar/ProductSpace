import React, { useState } from "react";
import img1 from "../assets/challenege1.svg";
import img2 from "../assets/challenege2.svg";
import img3 from "../assets/challenege4.svg";
import img4 from "../assets/challenege3.svg";
import img5 from "../assets/challenege5.svg";

const questions = [
  "Don't know how to begin in PM ?",
  "Lack of prior experience in product management",
  "Not getting shortlisted for product roles",
  "Struggling with interview preparation and finding the right guidance",
  "Already in early stage product-career but unsure how to advance further",
];

const contents = [
  "Get structured and customized learning roadmaps designed specifically for your growth.",
  "Participate in live industry projects and master PM tools to become job-ready in just 10 weeks.",
  "Get your resume directly in the hands of the hiring manager.",
  "Get expert interview coaching and mentorship from top product leaders in the industry.",
  "Receive tailored guidance to confidently navigate and accelerate your career progression. | Get 1:1 guidance with our top product leaders",
];

const images = [img1, img2, img3, img4, img5];

const DropdownItem = ({ question, content, image, isOpen, onClick }) => {
  return (
    <div
      className={`relative bg-white p-6 rounded-lg transition-all duration-200 ease-in-out border border-[#E7E7E7]`}
    >
      <div
        className="flex justify-between items-center cursor-pointer gap-8"
        onClick={onClick}
      >
        <div className="text-[18px] lg:text-[20px] font-semibold text-black">
          <p>{question}</p>
        </div>

        <div className="">
          <svg
            className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${
              isOpen ? "rotate-[180deg]" : "rotate-[0deg]"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        <div className="flex flex-col gap-4">
          <div className="pt-4 text-gray-600 lg:pr-16">{content}</div>

          <div className="lg:hidden">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PmChallenges = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedIndex(index);
  };

  return (
    <div
      className={`flex flex-col gap-8 lg:gap-16 pt-16 pb-8 px-4 lg:px-28 font-inter`}
    >
      <div className="flex flex-col gap-4 w-full text-center">
        <div className="text-[28px] lg:text-[40px] font-bold font-sans">
          Conquer Product Management Challenges
        </div>

        <div className="text-[16px] lg:text-[18px] text-gray-800 font-medium">
          From zero experience to industry-ready, we provide the solutions to
          help you thrive in every phase of your product career.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex flex-col gap-2 lg:gap-4">
          {questions.map((question, index) => (
            <DropdownItem
              key={index}
              question={question}
              content={contents[index]}
              image={images[index]}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="hidden lg:flex justify-center">
          <img src={images[selectedIndex]} alt="" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default PmChallenges;
