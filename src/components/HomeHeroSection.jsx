import CircleFlipGrid from "./CircleFlipGrid";
import bgImage from "../assets/title-bg.png";
// import fromBg from "../assets/from.svg";
import fromBg from "../assets/from-bg.png";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import EnrollmentForm from "./EnrollmentForm";
import { Link } from "react-router-dom";

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
    <div className="mx-0 lg:px-20 xl:px-0 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start gap-8 custom-13:gap-24">
      <div className="w-full lg:w-1/2 px-6 xl:px-24 custom-13:px-0">
        <p
          className="font-sans text-[17px] text-transparent font-semibold ml-0 sm:ml-1 md:text-[24px] pt-8 
          custom-0:bg-[position:top_50%_left_3%] custom-1:bg-[position:top_50%_left_14%] custom-2:bg-[position:top_50%_left_21%] md:bg-[position:top_50%_left_0%]"
          style={{
            backgroundImage: `url(${fromBg})`,
            backgroundSize: "110px 50px", // Adjust the background to fit the text
            backgroundRepeat: "no-repeat", // No repeat for the background image
          }}
        >
          From
        </p>

        <h1
          className="text-2xl lg:text-[50px] font-bold mb-6 lg:leading-[60px] bg-auto bg-no-repeat font-sans bg-[position:top_2%_left_50%] 
    md:bg-[position:top_6%_left_25%] xl:bg-[position:top_2%_left_25%]"
          style={{
            backgroundImage: `url(${bgImage})`,
            // backgroundPosition: "top 2% left 30%",
            backgroundSize: "59%",
          }}
        >
          <span className="font-normal text-[28px] lg:text-[44px]">
            Beginner to Expert{" "}
          </span>
          <span className="text-[34px] lg:text-[50px]">Accelerate your </span>
          <span className="text-[#21C1F3] text-[34px] lg:text-[52px]">
            Product{" "}
          </span>{" "}
          <span className="text-[34px] lg:text-[52px]">Career</span>
        </h1>

        <div className="lg:hidden w-full lg:w-1/2 flex justify-center mb-10 items-center">
          <CircleFlipGrid />
        </div>

        <p className="lg:w-4/5 text-[16px] lg:text-[18px] mb-4 font-medium">
          1:1 Mentorship with Product Leaders who really care
        </p>

        <div className="lg:w-4/5 items-center mb-4 text-sm lg:text-lg">
          4.8 <span className="text-yellow-400">★</span>
          <span className="ml-2 text-sm lg:text-lg font-base">
            500+ Student Reviews
          </span>
        </div>

        <div className="mt-8 font-semibold text-sm lg:text-lg">
          <Link to={"/pm-fellowship"}>
            <button
              // onClick={toggleModal}
              className="text-[18px] w-full lg:w-3/5 bg-[#FEC923] text-black py-2.5 px-4 xl:px-16 rounded-full hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out"
              >
              Get Started!
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex w-full md:w-3/4 lg:w-1/2 flex justify-center">
        <CircleFlipGrid />
      </div>
          
      {/* Modal Form */}
      <div className="relative">
        {/* Modal */}
        <EnrollmentForm setIsOpen={setIsOpen} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} toggleModal={toggleModal} />
      </div>   
    </div>
  );
};

export default HomeHeroSection;
