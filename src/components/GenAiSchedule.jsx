import arrow from "../assets/right-arrow-dark.svg";
import netLeft from "../assets/net-pattern-left.svg";
import netRight from "../assets/net-pattern-right.svg";
import { Link } from "react-router-dom";

const GenAiSchedule = () => {
  return (
    <div className="bg-white px-4 md:px-10 xl:px-32 pt-16 pb-10 font-inter">
        Hello
      {/* <div
        className="hidden lg:flex bg-black text-white flex-col py-12 rounded-2xl max-w-[1180px] mx-auto items-between justify-between text-center gap-6"
        style={{
          backgroundImage: `url(${netLeft}), url(${netRight})`,
          backgroundPosition: "left 10px top, right 10px top", // Adjust as needed
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // Adjust to fit your images as needed
        }}
      >
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          Join our Successful Alumni Network
        </div>

        <div className="text-[18px] text-[#FFFFFFE5] font-light">
          <p>This is your chance to secure your spot in the next cohort!</p>
          <p>
            Have doubts? Book a 1:1 call with Product Space&apos;s leading
            mentors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <Link
            to={"/pm-fellowship"}
            className="flex items-center gap-2 justify-center text-[16px] w-full lg:w-[204px] font-medium bg-white text-black p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p>Get Started</p>
            <img src={arrow} alt="" />
          </Link>

          <a
            href="https://topmate.io/propel/62841"
            target="_blank"
            className="flex items-center gap-2 justify-center text-[16px] w-full lg:w-[204px] font-medium bg-[#DBF6FF1A] text-white border border-gray-200 p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Meet with 1:1 mentors
          </a>
        </div>
      </div>

      <div className="lg:hidden bg-black text-white flex flex-col py-24 px-4 rounded-2xl max-w-[1180px] mx-auto items-between justify-between text-center gap-8">
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          Join our Successful Alumni Network
        </div>

        <div className="text-[16px] text-[#FFFFFFE5] font-light px-4">
          <p>This is your chance to secure your spot in the next cohort!</p>
          <p>
            Have doubts? Book a 1:1 call with Product Space&apos;s leading
            mentors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <Link
            to={"/pm-fellowship"}
            className="flex items-center gap-2 justify-center text-[16px] w-[80%] font-medium bg-white text-black p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p>Get Started</p>
            <img src={arrow} alt="" />
          </Link>

          <a
            href="https://topmate.io/propel/62841"
            target="_blank"
            className="flex items-center gap-2 justify-center text-[16px] w-[80%] font-medium bg-[#DBF6FF1A] text-white border border-gray-200 p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Meet with 1:1 mentors
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default GenAiSchedule;
