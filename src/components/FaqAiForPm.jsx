import arrow from "../assets/right-arrow-dark.svg";
import faqBg from "../assets/faqBg.png";
import faqBg1 from "../assets/faqBg1.png";
import { useRecoilState } from "recoil";
import { isOpenFormState, isVisibleformState } from "../atoms/modalState";
import { useState } from "react";

const DropdownItemEvents = ({ question, content, isOpen, onClick }) => {
  return (
    <div
      className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${
        isOpen
          ? "border border-2 border-[#E7E7E7]"
          : "border border-2 border-transparent"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="text-[16px] font-semibold text-[#333333]">
          <p>{question}</p>
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

const DropdownListEvents = ({ len, flag }) => {
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
    "Yes, all participants who share their learnings on LinkedIn will receive a certificate of participation.",
    "No prior AI experience is required.",
    "The workshop is valued at ₹ 2999, but we are offering it for free to the first 100 registrants! Join the waitlist, you could be one of the selected few."
  ];
  

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMoreQuestions = () => {
    setVisibleCount(questions.length);
  };
  const showLessQuestions = () => {
    setVisibleCount(len);
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      {questions.slice(0, visibleCount).map((question, index) => (
        <DropdownItemEvents
          key={index}
          question={question}
          content={contents[index]}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}

      {/* {flag && visibleCount < questions.length ? (
            <Link to={"/faq"}
              onClick={showMoreQuestions}
              className='mt-8 text-[16px] text-[#FF559E] font-semibold underline text-center'
            >
              Show More Questions
            </Link>
          ) : (
            <div></div>
          )} */}
    </div>
  );
};

const FaqAiForPm = () => {
  return (
    <div
      className={`flex flex-col gap-8 py-16 px-4 xl:px-28 font-inter rounded-xl`}
      style={{
        background: `url(${faqBg}) left top no-repeat, 
                      url(${faqBg1}) center top no-repeat, 
                      linear-gradient(to right, #EEFAFD, #DBF6FF)`,
        backgroundSize: "auto, auto, cover", // Adjust the size for each layer
        backgroundPosition: "left top, center top, center", // Adjust position for each background
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="text-[32px] lg:text-[40px] font-bold text-start font-sans">
          Frequently Asked <br /> Questions
        </div>
      </div>

      <div className="w-full lg:w-[95%]">
        <DropdownListEvents len={5} flag={1} />
      </div>
    </div>
  );
};

export default FaqAiForPm;
