import arrow from "../assets/right-arrow-dark.svg";

const GenAiKnowMore = () => {
  return (
    <div className="bg-white px-4 md:px-10 xl:px-32 my-20 font-inter">
      <div
        className="hidden lg:flex bg-black text-white flex-col py-12 lg:py-20 px-4 lg:px-16 rounded-2xl max-w-[1280px] mx-auto items-between justify-between text-start gap-3"
      >
        <div className="text-[24px] lg:text-[32px] font-normal font-['Georgia']">
          Want to Know More About AI for PM ?
        </div>

        <div className="text-[16px] text-[#FFFFFFa5] font-light">
          <p>
            Have questions? Our mentors are here to help you find the right fit
            for your career goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <a
            href="https://topmate.io/propel/1309845"
            target="_blank"
            className="flex items-center gap-2 justify-center text-[16px] w-full lg:w-[284px] font-medium bg-white text-black p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p>Request 1-on-1 mentorship</p>
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>

      <div className="lg:hidden bg-black text-white flex flex-col py-24 px-4 rounded-2xl max-w-[1180px] mx-auto items-between justify-between text-center gap-8">
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          Want to Know More About AI for PM ?
        </div>

        <div className="text-[16px] text-[#FFFFFFE5] font-light px-4">
          <p>
            Have questions? Our mentors are here to help you find the right fit
            for your career goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <a
            href="https://topmate.io/propel/1309845"
            target="_blank"
            className="flex items-center gap-2 justify-center text-[14px] sm:text-[16px] w-[80%] font-medium bg-white text-black p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p>Request 1-on-1 mentorship</p>
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenAiKnowMore;
