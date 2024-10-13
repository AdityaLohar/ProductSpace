import bgImage from "../assets/title-bg.png";
import heroImage from "../assets/home-hero-image.svg";
import stars from "../assets/home-hero-star.svg";
import arrow from "../assets/right-arrow.svg";
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
    <div className="lg:px-20 xl:px-0 flex flex-col lg:flex-row items-center lg:items-center justify-between text-center lg:text-start gap-8 custom-13:gap-24">
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
          <img src={heroImage} alt="" />
        </div>

        <p className="lg:w-4/5 text-[16px] lg:text-[18px] mb-4 font-normal font-inter">
          1:1 Mentorship with Product Leaders who really care
        </p>

        <div className="flex justify-center lg:justify-start gap-2 items-start lg:w-4/5 text-[#334155] text-[12px] lg:text-[16px] font-inter">
          <img src={stars} alt="" className="w-16 h-3 lg:h-4 lg:w-20" />
          <p>4900+ 5 Stars</p>
        </div>

        <div className="flex mt-8 gap-4 justify-center lg:justify-start">
          <Link to={"/pm-fellowship"}>
            <button
              // onClick={toggleModal}
              className="flex items-center gap-2 justify-center text-[16px] w-[135px] lg:w-[164px] bg-[#FFA000] text-white p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <p>
                  Get Started
                </p>
              <img src={arrow} alt="" />
            </button>
          </Link>
          
          <a href={"https://topmate.io/propel/62841"} target="_blank">
            <button
              // onClick={toggleModal}
              className="flex items-center gap-2 justify-center text-[16px] font-medium  bg-[#FFA0001F] text-black p-2 py-4 lg:p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-[#B8B8B8]"
              >
                Meet with 1:1 mentors
            </button>
          </a>
          
        </div>
      </div>

      <div className="hidden lg:flex w-1/2">
        <img src={heroImage} alt="" />
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
