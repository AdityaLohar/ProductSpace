import pamit from "../assets/pamit1.svg";
import rumit from "../assets/rumit1.svg";
import arun from "../assets/arun1.svg";
import magicbricks from "../assets/magicbricks-logo.png";
import microsoft from "../assets/microsoft.svg";
import inmobi from "../assets/inmobi.svg";
import arrow from "../assets/right-arrow.svg";
import { useState } from "react";
import GenAiEnrollmentForm from "./GenAiEnrollmentForm";
import { Link } from "react-router-dom";

const Card = ({ name, profile, title, desc, company }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-[200px] xl:w-[250px] h-[300px] xl:h-[350px] pt-[53px] bg-[#fec923] rounded-tl-[200px] rounded-tr-[200px] rounded-bl-2xl rounded-br-2xl flex-col justify-end items-center inline-flex">
        <img className="w-full rounded-2xl" src={profile} />
      </div>

      <div className="flex flex-col items-center gap-3">
        <div>
          <div className="text-center text-[#0d2d36] text-[24px] font-bold">
            {name}
          </div>

          <div className="text-center text-[#24304c] text-[16px] font-medium font-inter">
            {title}
            <br />({desc})
          </div>
        </div>

        <img src={company} alt="" />
      </div>
    </div>
  );
};

const GenAiInstructors = () => {
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
          Meet Your Instructors!
        </h2>

        <p className="text-center text-[#969696] text-[16px]">
          Learn from the industry leaders, who have been there, done that!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-[90%] gap-16 lg:gap-0">
        <Card
          name={"Pamit Anand"}
          title={"Sr. VP & Head of Product"}
          desc={"20+ years"}
          profile={pamit}
          company={magicbricks}
        />
        <Card
          name={"Arun Nandewal"}
          title={"Sr. Product Manager"}
          desc={"mentored 600+ students"}
          profile={arun}
          company={microsoft}
        />
        <Card
          name={"Rumit Anand"}
          title={"VP of Gen AI Products"}
          desc={"15+ years"}
          profile={rumit}
          company={inmobi}
        />
      </div>

      <div className="flex justify-center">
        {/* <button
          onClick={toggleModalEnquire}
          className="bg-[#FEB70F] text-white flex items-center gap-2 p-3 rounded-xl px-4 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <p>Join Waitlist to learn from the best</p>
          <img src={arrow} alt="" />
        </button> */}
        <Link
          to={"/ai-form"}
          className="bg-[#FEB70F] text-white flex items-center gap-2 p-3 rounded-xl px-4 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <p>Join Waitlist to learn from the best</p>
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

export default GenAiInstructors;
