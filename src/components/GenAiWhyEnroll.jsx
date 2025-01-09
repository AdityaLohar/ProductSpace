import { useState } from "react";
import curveBg from "../assets/curves.svg";
import arrow from "../assets/right-arrow.svg";
import GenAiEnrollmentForm from "./GenAiEnrollmentForm";
import { Link } from "react-router-dom";

const GenAiWhyEnroll = () => {
  const [isOpenEnquire, setIsOpenEnquire] = useState(false);
  const [isVisibleEnquire, setIsVisibleEnquire] = useState(false);

  const toggleModalEnquire = () => {
    if (!isOpenEnquire) {
      setIsOpenEnquire(true);
      setTimeout(() => setIsVisibleEnquire(true), 10);
    } else {
      setIsVisibleEnquire(false);
      setTimeout(() => setIsOpenEnquire(false), 300);
    }
  };

  return (
    <div className="px-4 md:px-10 xl:px-32 py-16 lg:py-20 flex flex-col gap-8 items-center font-inter text-center">
      <div className="flex flex-col gap-2 text-[#24304C]">
        <h2 className="text-[24px] lg:text-[32px] font-bold">
          Why Enroll in AI for PM?
        </h2>

        <p className="text-center text-[#969696] text-[16px]">
          Stand out as a product leader with skills that redefine what’s
          possible in product management.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div
          className="flex flex-col gap-2 lg:gap-4 w-full lg:w-1/2 bg-[#E9F9FE] p-12 lg:pt-16 rounded-tl-xl rounded-tr-[100px] rounded-bl-[100px] rounded-br-xl text-start"
          style={{
            backgroundImage: `url(${curveBg})`,
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="text-[#00c0fc] text-[40px] lg:text-[52px] font-bold">
            54%
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[#24304c] text-[18px] lg:text-[20px] font-semibold">
              worry their organization lacks a plan and vision for
              implementation
            </div>

            <div className="text-[#24304c] text-[12px] lg:text-[16px] font-medium">
              Source : Microsoft and LinkedIn 2024 Work Trend Index
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 lg:gap-4 w-full lg:w-1/2 bg-[#E9F9FE] p-12 lg:pt-16 rounded-tr-xl rounded-tl-[100px] rounded-br-[100px] rounded-bl-xl text-start"
          style={{
            backgroundImage: `url(${curveBg})`,
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="text-[#00c0fc] text-[40px] lg:text-[52px] font-bold">
            ₹40.3 Lakhs
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[#24304c] text-[18px] lg:text-[20px] font-semibold">
              is the Average Salary as an AI Product Manager
            </div>

            <div className="text-[#24304c] text-[12px] lg:text-[16px] font-medium">
              Source : Microsoft and LinkedIn 2024 Work Trend Index
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {/* <button onClick={toggleModalEnquire} className="bg-[#FEB70F] text-white flex items-center gap-2 p-3 rounded-xl px-4 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <p>Take the Next Step</p>
            <img src={arrow} alt="" />
        </button> */}
        <Link
          to={"/ai-form"}
          className="bg-[#FEB70F] text-white flex items-center gap-2 p-3 rounded-xl px-4 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <p>Take the Next Step</p>
          <img src={arrow} alt="" />
        </Link>
      </div>

      <div className="relative">
        {/* Modal */}
        <GenAiEnrollmentForm
          setIsOpen={setIsOpenEnquire}
          isVisible={isVisibleEnquire}
          setIsVisible={setIsVisibleEnquire}
          isOpen={isOpenEnquire}
          toggleModal={toggleModalEnquire}
        />
      </div>
    </div>
  );
};

export default GenAiWhyEnroll;
