import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import EnrollmentForm from "./EnrollmentForm";
import profiles from "../assets/profiles.svg";
import star from "../assets/star-big.svg";
import play from "../assets/play-button.svg";
import pamitVideo from "../assets/pamit-intro-video.mp4";

const HomeHeroSection = () => {
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
    <div className="relative px-4 lg:px-32 pt-36 pb-40 sm:pb-80 lg:py-52 font-inter bg-[#081228] text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute bottom-0 lg:top-0 right-0 lg:w-[50%] z-0 w-full lg:h-full">
        <video autoPlay muted loop className="object-cover w-full lg:h-full">
          <source src={pamitVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay on Video */}
        {/* <div className="hidden lg:flex absolute inset-0 bg-gradient-to-r from-[#081228] from-[10%] via-transparent via-[60%] to-[#081228] to-[100%]"></div> */}
        <div className="hidden lg:flex absolute inset-0 bg-gradient-to-r from-[#081228] from-[10%] via-transparent via-[60%] to-transparent to-[100%]"></div>

        {/* <div className="hidden lg:flex absolute inset-0" 
          style={{
            background: "radial-gradient(circle, transparent 10%, #081228 60%)",
          }}
        ></div> */}

        <div className="absolute lg:hidden inset-0 bg-gradient-to-b from-[#081228] from-[5%] via-transparent via-[80%] to-transparent to-[100%]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 lg:gap-10 w-full lg:w-[60%]">
        <div className="flex flex-col gap-2 text-center lg:text-start">
          <div className="text-[28px] lg:text-[64px] font-bold">
            Transform Your Career with Expert-Led Learning
          </div>
          <div className="text-[14px] lg:text-[20px] text-[#E5E5E5] w-full lg:w-2/3">
            Master Product Management with Personalized Guidance and Community
            Support
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-8">
          <div className="flex gap-2 items-start">
            <img src={star} alt="" className="h-8 lg:h-12" />
            <div>
              <p className="text-[24px] lg:text-[40px] font-bold">4.8</p>
              <p className="text-[12px] lg:text-[16px]">Ratings</p>
            </div>
          </div>

          <div>
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </div>

          <div className="flex gap-2 items-start">
            <img src={profiles} alt="" className="h-8 lg:h-12" />
            <div>
              <p className="text-[24px] lg:text-[40px] font-bold">10K+</p>
              <p className="text-[12px] lg:text-[16px]">Students</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-start">
            {/* <button
              onClick={toggleModal}
              className="relative overflow-hidden text-[14px] lg:text-[20px] w-[270px] text-white font-semibold p-4 rounded-full border border-[#42AAFF] shadow-[0px_0px_13px_0px_#0062B4]"
            >
              <span className="absolute inset-[1px]">Start Learning Today</span>

              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
              />
            </button> */}
            <button
              className="relative overflow-hidden px-8 lg:px-20 py-6 lg:py-8 text-[14px] lg:text-[20px] w-[200px] lg:w-[270px] text-white font-semibold rounded-full border border-[#42AAFF] shadow-[0px_0px_10px_1px_#0061B4]"
              onClick={toggleModal}
            >
              <span className="absolute inset-[2px] z-10 flex items-center justify-center rounded-full bg-[#081228]">
                Start Learning Today
              </span>

              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#42AAFF] before:via-[#081228] before:to-[#081228]"
              />
            </button>

            <button
              onClick={toggleModal}
              className="flex items-center gap-2 text-[14px] lg:text-[20px] text-white p-4 px-6"
            >
              <img src={play} alt="" className="h-6 lg:h-8" />
              <p>Watch Demo</p>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <div className="relative">
        {/* Modal */}
        <EnrollmentForm
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

export default HomeHeroSection;
