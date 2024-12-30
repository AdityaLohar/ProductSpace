import downloadLogo from "../assets/download.svg";
import greenArrow from "../assets/green-arrow.svg";
import greenBox from "../assets/green-box.svg";
import smallCommitment from "../assets/small-commitment.svg";
import analyticsContent from "../data/AnalyticsContent";
import tick from "../assets/tick-green.svg";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";
import DownloadCurriculumForm from "./DownloadCurriculumForm";
import GenAiDownloadCurriculumForm from "./GenAiDownloadCurriculumForm";

const CurriculumMaterial = ({ title, desc, imgs, isOpen, onClick }) => {
  return (
    <div
      className={`relative bg-white rounded-lg transition-all duration-500 ease-in-out ${
        isOpen
          ? "border border-2 border-[#111]"
          : "border border-2 border-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out ${
          isOpen ? "rounded-t-md" : "rounded-md"
        } ${title[2] !== "Y" ? "bg-[#E6E6E6]" : "bg-[#AEECFF]"} p-5`}
        onClick={onClick}
      >
        <div className="text-[18px] font-semibold text-black ">
          <h2 className=" text-[14px] md:text-[18px] font-semibold  text-start">
            {title[2] !== "Y" ? (
              <div>
                <span className="text-[20px] md:text-[24px]">
                  {" "}
                  {title[0] === "0"
                    ? `0${+title[1]}`
                    : `${title[0] + title[1] + title[2]}`}{" "}
                </span>

                {title[0] === "0" ? title.slice(2) : title.slice(3)}
              </div>
            ) : (
              title
            )}
          </h2>
        </div>

        <div className="">
          <svg
            className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${
              isOpen
                ? "rotate-[0deg] bg-[#111] text-white"
                : "text-black rotate-[-90deg]"
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
        className={`overflow-hidden bg-white rounded-b-md transition-all duration-300 ease-in-out px-6 lg:px-12 space-y-8 ${
          isOpen ? "max-h-screen opacity-100 py-6" : "py-0"
        }`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        <div className="space-y-2 lg:space-y-4">
          <div className="font-bold text-[16px]">This Module Covers</div>
          {desc.map((point, index) => (
            <div
              key={index}
              className="text-[14px] flex gap-2 items-start lg:items-center"
            >
              <img src={tick} alt="tick" className="h-4 w-4" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalyticsCuricullum = () => {
  const [openIndex, setOpenIndex] = useState([0, 8]);

  const [isOpenEnquire, setIsOpenEnquire] = useState(false);
  const [isVisibleEnquire, setIsVisibleEnquire] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModalEnquire = () => {
    if (!isOpenEnquire) {
      setIsOpenEnquire(true);
      setTimeout(() => setIsVisibleEnquire(true), 10);
    } else {
      setIsVisibleEnquire(false);
      setTimeout(() => setIsOpenEnquire(false), 300);
    }
  };

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const handleClick = (index) => {
    // Check if index is already in openIndex
    if (openIndex.includes(index)) {
      // Remove the index by filtering it out
      setOpenIndex(openIndex.filter((val) => val !== index));
    } else {
      // Add the index
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <div className="flex flex-col pt-2 pb-6 lg:pb-10 lg:pt-0 font-inter">
      <div className="text-[20px] lg:text-[28px] font-bold text-center lg:text-start text-[#24304C]">
        What will you learn in the workshop
      </div>

      <div className="flex flex-col justify-between gap-2 pt-8">
        {analyticsContent.map((course, index) => (
          <CurriculumMaterial
            key={index}
            title={course.title}
            desc={course.desc}
            imgs={course.toolsLearned}
            isOpen={openIndex.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="relative">
        {/* Modal */}
        <GenAiDownloadCurriculumForm
          setIsOpen={setIsOpen}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default AnalyticsCuricullum;
