import React from "react";
import bgImage from "../assets/meetAlumBg.svg"

const MeetAlums = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white pt-3 pb-10 px-1 md:px-10 xl:px-32 text-[#111111]">

      <div className="flex flex-col gap-4 lg:gap-10 py-5 lg:py-12 text-start w-full lg:w-1/2">
        <div className="text-[18px] text-gray-800 font-medium mt-2 px-2">
            Meet the <span className="font-bold">Mentors</span> and clarify all your queries.
        </div>
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
            Want to know if PM is the right fit for you?
        </div>
        <div className="text-[16px] text-gray-800 font-medium mt-2 px-2">
            Join us every Tuesday and Thursday at 9 PM, and ask any questions you have on product management.
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center justify-center lg:justify-start font-semibold">
        <a href="https://topmate.io/propel/62841" target="_blank" className="w-3/4 md:w-1/2">
            <button className="w-full text-[18px] bg-[#FFC303] hover:bg-yellow-500 text-black p-2 py-3 px-6 md:p-3 rounded-full mt-6">
                Meet 1:1 with Mentors
            </button>
          </a>
        </div>
      </div>

      <div className="flex justify-center w-full lg:w-1/2">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default MeetAlums;
