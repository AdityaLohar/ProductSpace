import downloadLogo from "../assets/download.svg";
import greenArrow from "../assets/green-arrow.svg";
import smallCommitment from "../assets/small-commitment.svg";
import courseContent from "../data/CourseContent";
import tick from "../assets/tick-green.svg";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";
import DownloadCurriculumForm from "./DownloadCurriculumForm";

const CurriculumMaterial = ({ title, desc, imgs, isOpen, onClick }) => {
  return (
    <div
      className={`relative bg-white rounded-lg transition-all duration-500 ease-in-out ${
        isOpen
          ? "border border-2 border-[#00B5CE]"
          : "border border-2 border-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out ${
          isOpen ? "rounded-t-md" : "rounded-md"
        } bg-[#D7F5FF] p-5`}
        onClick={onClick}
      >
        <div className="text-[18px] font-semibold text-black font-sans">
          <h2 className="font-sans text-[18px] font-semibold  text-center lg:text-start">
            <span className="text-[24px]">
              {" "}
              {title[0] === "0"
                ? `0${+title[1]}`
                : `${title[0] + title[1] + title[2]}`}{" "}
            </span>
            {title[0] === "0" ? title.slice(2) : title.slice(3)}
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
        className={`overflow-hidden bg-white rounded-b-md transition-all duration-300 ease-in-out px-12 space-y-8 ${
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

        <div className="space-y-3 rounded-2xl">
          <div className="font-bold text-[16px]">Case Studies</div>
          <div className="flex gap-4">
            {imgs.map((logo, index) => (
              <div key={index}>
                <img
                  src={logo}
                  alt=""
                  className="object-contain w-24 h-16 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Curriculum1 = () => {
  const [openIndex, setOpenIndex] = useState([0]);

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
    <div className="flex flex-col px-4 xl:px-20">
      <div className="py-5 lg:py-8 flex px-10 justify-between">
        <div className="w-2/3 space-y-2">
          <div className="text-[40px] font-bold font-sans">
          How your curriculum will look like 
          what you will learn
          </div>
          <div className="text-[16px]">
            <p>
              A sneak peak into what you will learn in our 10-week curriculum.
            </p>
            <p>
              You will have to commit to investing 6 to 8 hours of dedicated
              time to this program every week.
            </p>
            {/* Progress through weekly segments that build your product
              management skills, from strategy to hands-on projects, preparing
              you for real-world challenges. */}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-4 xl:gap-12">
            <div className="text-hind font-medium">
              <p className="text-[40px] text-black font-semibold font-sans">
                5
              </p>
              <p>Weeks</p>
            </div>
            <div className="text-hind font-medium">
              <p className="text-[40px] text-black font-semibold font-sans">
                40+
              </p>
              <p>Hours</p>
            </div>
            <div className="text-hind font-medium">
              <p className="text-[40px] text-black font-semibold font-sans">
                100+
              </p>
              <p>Classes</p>
            </div>
          </div>
          <div>
            <button
              onClick={toggleModalEnquire}
              className="flex w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 px-6 md:p-2 md:px-8 rounded-full flex items-center justify-center text-[16px]"
            >
              <div className="flex flex-col gap-0 md:gap-1 text-start font-semibold">
                Enroll Now
              </div>
              <div className="ml-2 text-xl">→</div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex relative">
          <img src={greenArrow} alt="" className="absolute -left-6" />
          <img src={smallCommitment} alt="" />
        </div>
        <div className="text-transparent">A</div>
      </div>

      <div className="flex flex-col justify-between px-4 xl:px-20 gap-2 pt-8">
        {courseContent.map((course, index) => (
          <CurriculumMaterial
            key={index}
            title={course.title}
            desc={course.desc}
            imgs={course.imgs}
            isOpen={openIndex.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center pt-14 gap-4">
        <button
          onClick={toggleModal}
          className="w-1/5 bg-white text-[16px] text-black font-semibold border border-1 border-black py-3 rounded-full flex justify-center items-center gap-2"
        >
          <img src={downloadLogo} alt="" />
          <p>Download Curriculum</p>
        </button>
      </div>

      <div className="relative">
        {/* Modal */}
        <EnrollmentForm
          setIsOpen={setIsOpenEnquire}
          isVisible={isVisibleEnquire}
          setIsVisible={setIsVisibleEnquire}
          isOpen={isOpenEnquire}
          toggleModal={toggleModalEnquire}
        />
        <DownloadCurriculumForm
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

export default Curriculum1;
