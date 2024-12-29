import React from "react";
import arrowTopRight from "../assets/arrow-top-right.svg";
import downloadLight from "../assets/download-light.svg";
import tickPink from "../assets/tick-pink.svg";
import tickBlue from "../assets/tick-blue.svg";
import disountIcon from "../assets/discountIcon.svg";
import disountBlueIcon from "../assets/discountBlue.svg";
import pmFellowshipBg from "../assets/programs-pm-fellowship.svg";
import genAiBg from "../assets/programs-genAi.svg";
import GEN_AI_FOR_PM_DETAILS from "../constants/genAiConstants";
import PM_FELLOWSHIP_DETAILS from "../constants/pmFellowshipConstants";

// const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

const DarkCard = () => {
  return (
    <div className="flex font-inter flex-col justify-end gap-5 h-[530px] lg:h-[674px] w-[348px] lg:w-[500px] text-white relative rounded-2xl bg-gradient-to-b from-[#1B2458] to-[#0B1238] overflow-hidden p-5 lg:p-8 shadow-xl">
      <div className="absolute -top-[10px] -left-[1px] z-0 overflow-hidden bg-[#1B2458] [mask-image:_linear-gradient(to_top,transparent_10px,_black_100px,_black_calc(100%),transparent_10%)]">
        <img src={pmFellowshipBg} alt="" className="h-full object-fit" />
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 z-10">
        <div className="text-[20px] lg:text-[32px] font-bold">
          PM Fellowship Program
        </div>
        <div className="flex">
          <div className="text-[10px] text-[13px] font-bold bg-white bg-opacity-10 px-5 py-2 rounded-md">
            5 weeks (2hrs/week)
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 z-10 text-[10px] lg:text-[14px]">
        <div className="flex items-center gap-2">
          <img src={tickPink} alt="tick" className="h-4 lg:h-5" />
          <p>Hands-on way to learn product management</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickPink} alt="tick" className="h-4 lg:h-5" />
          <p>Learn in small groups with experienced product managers</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickPink} alt="tick" className="h-4 lg:h-5" />
          <p>Solve real-world problems with Live Projects</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickPink} alt="tick" className="h-4 lg:h-5" />
          <p>Live Group mentorship</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickPink} alt="tick" className="h-4 lg:h-5" />
          <p>Build an impressive product portfolio</p>
        </div>
      </div>

      <hr className="text-red-200" />

      <div className="flex flex-col">
        <div className="text-[#F7C4D8] text-[10px] lg:text-[14px] font-bold">
          Course pricing:
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="text-[20px] lg:text-[26px] font-bold text-white">
              {/* Display discounted price */}
              {Math.round(
                (PM_FELLOWSHIP_DETAILS.price *
                  (100 - PM_FELLOWSHIP_DETAILS.discount)) /
                  100
              ).toLocaleString()}
            </div>

            <div className="text-[10px] lg:text-[12px]">
              <div className="text-red-500">
                {PM_FELLOWSHIP_DETAILS.discount}% off
              </div>
              <div className="text-white line-through">
                {PM_FELLOWSHIP_DETAILS.price.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex gap-1 items-center text-[10px] lg:text-[12px] text-white font-bold bg-white bg-opacity-10 px-5 py-2 rounded-full border-2 border-[#383E60]">
            <img src={disountIcon} alt="" className="h-4" />
            <p>{PM_FELLOWSHIP_DETAILS.discount}% off</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-[12px] lg:text-[13px] font-bold ">
        <div className="w-1/2">
          <button className="flex items-center justify-center gap-2 bg-[#FFA000] w-full py-2 lg:py-4 rounded-lg">
            <p>Enroll Now</p>
            <img src={arrowTopRight} alt="" className="h-4" />
          </button>
        </div>
        <div className="w-1/2">
          <button className="flex justify-center items-center gap-2 border border-white w-full py-2 lg:py-4 rounded-lg">
            <p>Download Curriculum</p>
            {/* <img src={downloadLight} alt="" className="h-5" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

const LightCard = () => {
  return (
    <div className="flex font-inter flex-col justify-end gap-5 h-[530px] lg:h-[674px] w-[348px] lg:w-[500px] text-[#404040] relative rounded-2xl bg-white overflow-hidden p-5 lg:p-8 shadow-xl">
      <div className="absolute -top-[10px] -left-[1px] z-0 overflow-hidden bg-[#1B2458] [mask-image:_linear-gradient(to_top,transparent_90px,_white_200px,_black_calc(100%),transparent_10%)]">
        <img src={genAiBg} alt="" className="h-1/2 lg:h-full lg:object-fit" />
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 z-10">
        <div className="text-[20px] lg:text-[32px] font-bold text-black">
          Gen AI Program
        </div>
        <div className="flex">
          <div className="text-[10px] text-[13px] font-bold bg-[#1393FF] px-5 py-2 rounded-md text-white">
            5 weeks (2hrs/week)
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 z-10 text-[10px] lg:text-[14px]">
        <div className="flex items-center gap-2">
          <img src={tickBlue} alt="tick" className="h-4 lg:h-5" />
          <p>Understanding GenAI Fundamentals</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickBlue} alt="tick" className="h-4 lg:h-5" />
          <p>Master Use cases for GenAI in product development</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickBlue} alt="tick" className="h-4 lg:h-5" />
          <p>Strategies for GenAI Product Roadmap & Implementation</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickBlue} alt="tick" className="h-4 lg:h-5" />
          <p>Hands-on Learning on GenAI Tools</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={tickBlue} alt="tick" className="h-4 lg:h-5" />
          <p>Expand career opportunities</p>
        </div>
      </div>

      <hr className="" />

      <div className="flex flex-col">
        <div className="text-[#F7C4D8] text-[10px] lg:text-[14px] font-bold text-black">
          Course pricing:
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="text-[20px] lg:text-[26px] font-bold text-black">
              {/* Display discounted price */}
              {Math.round(
                (GEN_AI_FOR_PM_DETAILS.price *
                  (100 - GEN_AI_FOR_PM_DETAILS.discount)) /
                  100
              ).toLocaleString()}
            </div>

            <div className="text-[10px] lg:text-[12px]">
              <div className="text-red-500">
                {GEN_AI_FOR_PM_DETAILS.discount}% off
              </div>
              <div className="text-black line-through">
                {GEN_AI_FOR_PM_DETAILS.price.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex gap-1 items-center text-[10px] lg:text-[12px] text-white font-bold bg-[#2582FF] px-5 py-2 rounded-full border-2 border-[#3286F6]">
            <img src={disountBlueIcon} alt="" className="h-4" />
            <p>{GEN_AI_FOR_PM_DETAILS.discount}% off</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-[12px] lg:text-[13px] font-bold ">
        <div className="w-1/2">
          <button className="flex justify-center items-center gap-2 bg-[#FFA000] w-full py-2 lg:py-4 rounded-lg text-white">
            <p>Enroll Now</p>
            <img src={arrowTopRight} alt="" className="h-4" />
          </button>
        </div>
        <div className="w-1/2">
          <button className="border border-black w-full py-2 lg:py-4 rounded-lg text-black">
            Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

const ProgramsWeOffer = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-10 p-14 bg-[#F5F5F5]">
      <div className="text-[20px] lg:text-[40px] font-bold text-[#1D1F3D] text-center">
        Programs We Offer
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <DarkCard />
        <LightCard />
      </div>
    </div>
  );
};

export default ProgramsWeOffer;
