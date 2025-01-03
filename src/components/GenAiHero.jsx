import arrow from "../assets/right-arrow-dark.svg";
import download from "../assets/download.svg";
import geoLines from "../assets/geolines.png";
import priceTag from "../assets/bitcoin-icons_tag-filled.svg";
import rock from "../assets/rock.svg";
import curveBg from "../assets/curves.svg";

import clock from "../assets/clock.svg";
import cohortSeats from "../assets/cohortIcon.svg";
import offer from "../assets/offer-valid.svg";
import { useEffect, useState } from "react";
import GenAiEnrollmentForm from "./GenAiEnrollmentForm";
import GenAiDownloadCurriculumForm from "./GenAiDownloadCurriculumForm";
import { Link } from "react-router-dom";
import GEN_AI_FOR_PM_DETAILS from "../constants/GenAiDetails";

const GenAiHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="bg-transparent px-4 md:px-10 xl:px-16 md:py-2 pb-16 lg:pb-20 font-inter">
      <div
        className="relative py-4 lg:py-12 px-4 lg:px-20 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${geoLines})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Right Bottom Image */}
        <div
          className="absolute -right-24 bottom-[30%] lg:-right-4 lg:bottom-0 z-10"
          style={{
            width: "200px", // adjust width as needed
            height: "200px", // adjust height as needed
          }}
        >
          <img src={rock} alt="Left Bottom" className="w-full h-full" />
        </div>

        {/* Top Center Image */}
        <div className="absolute -top-28 lg:top-12 right-[50%] z-1 w-[300px] h-[300px] lg:w-[100px] lg:h-[100px]">
          <img src={rock} alt="Left Bottom" className="w-full h-full" />
        </div>

        {/* left bottom Image */}
        <div className="absolute -bottom-24 lg:-bottom-40 -left-16 lg:-left-20 z-10 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]">
          <img src={rock} alt="Left Bottom" className="w-full h-full" />
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-16 my-4 lg:my-12 px-4 lg:px-16 pb-6 lg:py-12 bg-gradient-to-b from-[#F6FCFE] to-[#D8F4FD] rounded-3xl opacity-100">
          <div className="flex flex-col gap-7 w-full lg:w-1/2 bg-transparent py-8 lg:py-12 text-center lg:text-start">
            <div className="flex flex-col gap-2">
              <div className="text-[28px] lg:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#001F32] to-[#0074C2]">
                AI for Product Management Course
              </div>
              <div className="text-[16px] lg:text-[20px]">
                Become an AI Powered Product Manager and future proof your
                career
              </div>
            </div>

            <div className="flex justify-around lg:justify-between w-full md:w-5/6 xl:w-1/2 text-[16px] lg:text-[18px]">
              <div>
                <div>Start Date</div>
                <div>Feb 01, 2025</div>
              </div>
              <div>
                <div>Duration</div>
                <div>5 Weeks</div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-3 w-full cursor-pointer lg:w-full text-center items-center">
              <Link
                to={"/gen-ai-form"}
                className="flex w-4/5 md:w-full gap-2 justify-center p-3 lg:p-4 rounded-lg bg-[#FACC14] text-black items-center transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <p>Apply Now</p>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </Link>

              <button
                className="flex w-4/5 lg:w-full gap-2 justify-center p-3 lg:p-4 lg:px-2 rounded-lg bg-[#f3f3f3] border-2 text-black items-center transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                onClick={toggleModal}
              >
                <div>Download Curriculum</div>
                <div>
                  <img src={download} alt="" />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/2 bg-transparent rounded-lg">
            <div
              className="flex flex-col gap-2 lg:gap-4 bg-[#f5f5f5] rounded-lg pt-4 lg:pt-8"
              style={{
                backgroundImage: `url(${curveBg})`,
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="flex items-center justify-center gap-1 bg-[#21c1f3] text-[12px] lg:text-[16px] font-semibold text-white mx-4 lg:mx-8 p-1 py-2 w-[100px] lg:w-[120px] rounded-md">
                <img src={priceTag} alt="" className="h-3 lg:h-5" />
                <p>Offer price</p>
              </div>

              <div className="flex items-center gap-2 px-4 lg:px-8">
                <div className="text-[28px] lg:text-[44px] font-bold">
                  ₹
                  {Math.round(
                    (GEN_AI_FOR_PM_DETAILS.price *
                      (100 - GEN_AI_FOR_PM_DETAILS.discount)) /
                      100
                  ).toLocaleString()}
                </div>
                <div>
                  <div className="text-[#eb2c2f] font-semibold text-[12px] lg:text-[20px]">
                    {GEN_AI_FOR_PM_DETAILS.discount}% off
                  </div>
                  <div className="text-[12px] lg:text-[20px] line-through">
                    {GEN_AI_FOR_PM_DETAILS.price.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex justify-start items-center px-4 lg:px-8 gap-1 text-[14px] lg:text-[16px] text-black py-3 rounded-b-lg">
                <img src={offer} alt="" className="h-4" />
                <p>Offer valid till {GEN_AI_FOR_PM_DETAILS.valid} </p>
              </div>
            </div>

            {/* <div className="bg-[#f5f5f5] rounded-lg">
              <div className="text-center bg-[#e2e2e2] rounded-t-lg font-semibold py-2">
                Pay in Installments
              </div>
              <div className="flex justify-between px-4 lg:px-6 py-4 text-[12px] lg:text-[16px]">
                <div className="flex flex-col gap-1 text-start">
                  <div>Pay first 50% now</div>
                  <div>Pay remaining 50%</div>
                </div>

                <div className="flex flex-col gap-1 text-end">
                  <div>For confirming your seat</div>
                  <div>In the next 2 weeks</div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col gap-2 bg-[#f5f5f5] py-4 px-4 lg:px-6 rounded-lg text-[12px] lg:text-[16px]">
              <div className="flex items-center gap-2">
                <img src={cohortSeats} alt="" className="h-4" />
                <p>Total cohort seats : 40</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={clock} alt="" className="h-4 w-5" />
                <p>
                  {/* Hurry! <b>20 people</b> have enrolled in the past 1 month */}
                  Hurry! seats are filling fast
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default GenAiHero;
