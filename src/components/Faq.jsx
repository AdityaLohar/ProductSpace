import arrow from "../assets/right-arrow.svg";
import questionMark from "../assets/question-mark.svg";
import faqBg from "../assets/faqBg.svg";
import faqBg1 from "../assets/faqBg1.svg";
import { useRecoilState } from "recoil";
import {
  isOpenGenAiFormState,
  isVisibleGenAiformState,
} from "../atoms/modalState";
import { useState } from "react";

const DropdownItem = ({ question, content, isOpen, onClick }) => {
  return (
    <div
      className={`relative bg-white px-6 py-4 rounded-xl transition-all duration-200 ease-in-out border border-[#42AAFF] shadow-[0px_0px_10px_0px_#0062B4]`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-start gap-2 items-center">
          <div className="flex-shrink-0">
            <img src={questionMark} alt="" className="w-6 h-6" />
          </div>
          <div className="text-[18px] font-normal text-[#24304C]">
            <p>{question}</p>
          </div>
        </div>

        <div className="">
          <svg
            className={`h-6 w-6 transition-transform duration-200 rounded-full text-black ease-in-out ${
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
        <div className="pt-4 text-gray-600 lg:pr-16">{content}</div>
      </div>
    </div>
  );
};

const DropdownList = ({ len, flag }) => {
  const [visibleCount, setVisibleCount] = useState(len);
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    "Who is this workshop for? ",
    "Will I receive a certificate?",
    "Are there any prerequisites for this workshop?",
    "What is the cost of the workshop?",
  ];

  const contents = [
    "This workshop is ideal for current and aspiring Product Managers who want to integrate AI into their existing products & daily work.",
    "Yes, all participants who share their learnings on gen will receive a certificate of participation.",
    "No prior AI experience is required.",
    "The workshop is valued at ₹24,999, but we're offering a 30% discount as a special new course discount. Join waitlist now and get access for just ₹17,499!",
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      {questions.slice(0, visibleCount).map((question, index) => (
        <DropdownItem
          key={index}
          question={question}
          content={contents[index]}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const Faq = () => {
  const [isVisible, setIsVisible] = useRecoilState(isVisibleGenAiformState); // Recoil for visibility
  const [isOpenForm, setIsOpenForm] = useRecoilState(isOpenGenAiFormState);

  const toggleModal = () => {
    if (!isOpenForm) {
      setIsOpenForm(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      console.log("enter");
      setIsVisible(false);
      setTimeout(() => setIsOpenForm(false), 300);
    }
  };

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:justify-between py-16 px-4 lg:py-20 lg:px-28 font-inter bg-[#081228]`}
      style={{
        backgroundImage: `url(${faqBg}) left top no-repeat, 
                     url(${faqBg1}) left top no-repeat`,
        backgroundSize: "auto, auto", // Adjust as needed
      }}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="text-[32px] lg:text-[40px] font-bold text-start font-sans bg-gradient-to-b from-[#FFF] via-[#FFF] to-[#999] bg-clip-text text-transparent">
          Frequently Asked <br /> Questions
        </div>

        <div className="text-[18px] text-start text-[#FFFFFFD9] font-medium">
          Still Have Questions?
        </div>

        <div className="flex">
          <button
            onClick={toggleModal}
            className="flex items-center gap-2 justify-center text-[18px] lg:text-[24px] w-1/2 lg:w-[230px] text-white font-bold p-4 rounded-full border border-[#42AAFF] shadow-[0px_0px_13px_0px_#0062B4]"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[95%]">
        <DropdownList len={5} flag={1} />
      </div>
    </div>
  );
};
export default Faq;
