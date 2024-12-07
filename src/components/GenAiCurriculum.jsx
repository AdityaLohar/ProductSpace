import downloadLogo from "../assets/download.svg";
import greenArrow from "../assets/green-arrow.svg";
import greenBox from "../assets/green-box.svg";
import smallCommitment from "../assets/small-commitment.svg";
import genAiContent from "../data/GenAiContent";
import tick from "../assets/tick-green.svg";
import psVideo from "../assets/ps-youtube-video.png";
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

        <div className="space-y-3 rounded-2xl">
          <div className="font-bold text-[16px]">Tools Learned</div>
          <div className="flex flex-wrap gap-4 justify-around lg:justify-start">
            {imgs.map((logo, index) => (
              <div key={index}>
                <img
                  src={logo}
                  alt=""
                  className="object-contain w-18 h-12 lg:w-24 lg:h-16 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoWithCustomCover = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center mt-20">
      <div className="text-[24px] lg:text-[32px] font-bold text-center text-[#24304C]">
        Watch the Gen AI for PMs Event Recording
      </div>
      <div className="relative w-full md:w-[95%] h-[230px] md:h-[400px] xl:h-[675px] bg-gray-800 rounded-xl">
        {!playVideo && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 cursor-pointer"
            onClick={() => setPlayVideo(true)}
          >
            <img
              src={psVideo}
              alt="Custom Cover"
              className="w-full h-full object-cover rounded-xl"
            />
            <button className="absolute bg-transparent text-transparent px-4 py-2 rounded-lg font-semibold">
              Play Video
            </button>
          </div>
        )}
        {playVideo && (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/V2yr4Z65D5Y?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

const GenAiCurriculum = () => {
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
    <div className="flex flex-col pt-2 pb-6 lg:pb-10 lg:pt-0 px-4 xl:px-20 font-inter">
      <div className="py-5 lg:py-14 flex flex-col md:flex-row md:px-10 justify-between">
        <div className="w-full md:w-2/3 space-y-4 md:space-y-2">
          <div className="text-[24px] lg:text-[40px] font-bold text-center lg:text-start text-[#24304C]">
            Course Curriculum
          </div>
          <div className="text-[16px]">
            <p>
              5 Weeks of practical & live learning, with a comprehensive AI
              resource library, to help you master AI applications in product
              management.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-between pt-4">
          <div className="flex md:hidden justify-end relative">
            <img src={greenBox} alt="" className="h-1/2 w-1/2" />
          </div>

          <div className="flex justify-around gap-4 xl:gap-12">
            <div className="text-hind font-medium">
              <p className="text-[28px] lg:text-[40px] text-black font-semibold ">
                5
              </p>
              <p>Weeks</p>
            </div>
            <div className="text-hind font-medium">
              <p className="text-[28px] lg:text-[40px] text-black font-semibold ">
                40+
              </p>
              <p>Hours</p>
            </div>
            <div className="text-hind font-medium">
              <p className="text-[28px] lg:text-[40px] text-black font-semibold ">
                5+
              </p>
              <p>projects</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={toggleModal}
              className="w-[300px] bg-[#FFC303] text-[18px] text-black font-semibold p-4 rounded-full flex justify-center items-center gap-2"
            >
              <img src={downloadLogo} alt="" />
              <p>Download Curriculum</p>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-around relative pb-6">
        <div className="flex absolute -top-12 left-[23%]">
          <img src={greenArrow} alt="" className="absolute -top-6" />
          <img src={smallCommitment} alt="" className="" />
        </div>
        <div className="text-transparent">A</div>
      </div>

      <div className="flex flex-col justify-between px-4 xl:px-20 gap-2 pt-8">
        {genAiContent.map((course, index) => (
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

      <VideoWithCustomCover />

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

export default GenAiCurriculum;
