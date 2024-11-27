import arrow from "../assets/right-arrow.svg";
import certi from "../assets/certi.png";
import { useState } from "react";
import GenAiDownloadCurriculumForm from "./GenAiDownloadCurriculumForm";

const GenAiCertificate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <div className="px-4 md:px-10 xl:px-32 py-16 lg:py-20 flex flex-col lg:flex-row gap-8 items-center font-inter text-start text-[#110c26]">
      <div className="flex flex-col w-full lg:w-[60%] gap-6 lg:gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Get GenAI certified from Product Space
          </h2>
        </div>

        <div className="w-[228px] flex justify-center bg-[#24304c] text-white gap-2 rounded-lg">
          <button onClick={toggleModal} className="flex flex items-center gap-2 p-2 py-4">
            <p>Download Curriculum</p>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div>
        <img src={certi} alt="" />
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

export default GenAiCertificate;
