import discountBg from "../assets/discountBg.svg";
import disco3 from "../assets/disco-lights1.png";
import disco2 from "../assets/disco-lights2.png";
import disco1 from "../assets/disco-lights3.png";

import heroIcon1 from "../assets/pm-hero-1.svg";
import heroIcon2 from "../assets/pm-hero-2.svg";
import heroIcon3 from "../assets/pm-hero-3.svg";
import heroIcon4 from "../assets/pm-hero-4.svg";
import heroIcon5 from "../assets/pm-hero-5.svg";

import clock from "../assets/clock.svg";
import download from "../assets/download.svg";
import offer from "../assets/offer-valid.svg";
import { useEffect, useState } from "react";
import EnrollmentForm from "./EnrollmentForm";
import DownloadCurriculumForm from "./DownloadCurriculumForm";


const PmFellowshipHeroSection = () => {
  const [bgImages, setBgImages] = useState([disco1, disco2, disco3]);
  const [opacity, setOpacity] = useState([1, 0, 0]);

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

  const rotateBackgrounds = () => {
    setBgImages((prev) => {
      return [prev[2], prev[0], prev[1]]; // Rotate the images
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity([0, 0, 0]); // Start fading out
      setTimeout(() => {
        rotateBackgrounds();
        setOpacity([1, 0, 0]); // Fade in after rotating
      }, 600); // Match this duration with your fade-out duration
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="bg-transparent md:px-10 xl:px-28 md:py-8 lg:pt-20 lg:pb-20 font-hind"
    >
      <div className="bg-white relative flex flex-col lg:flex-row py-4 lg:py-8 items-center justify-between gap-6 md:gap-8 lg:gap-12 rounded-[24px] md:rounded-[32px] px-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[70%]">
          <div className="flex flex-col gap-4 lg:border-2 border-[#00B5CE] px-2 py-0 lg:p-8 rounded-3xl">
            <div className="flex flex-col gap-3 text-center lg:text-start">
              <div>
                <h1 className="text-[24px] md:text-[28px] lg:text-[40px] font-bold font-sans">
                  Product Management <br /> Fellowship Program
                </h1>
              </div>
              <div className="hidden lg:flex text-[18px]">Excel in Your Product Career</div>
            </div>

            <div className="flex justify-around lg:justify-start gap-10 text-[16px]">
              <div>
                <div className="text-[16px]">Start Date</div>
                <div className="font-semibold text-[#00B5CE]">Nov 30, 2024</div>
              </div>
              <div>
                <div className="text-[16px]">Duration</div>
                <div className="font-semibold text-[#00B5CE]">10 Weeks</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-[24px] md:rounded-[32px] lg:w-[37%] shadow-lg p-4 md:p-12 md:py-10 lg:absolute border-2 border-[#00B5CE] lg:right-10 lg:top-[50%] lg:transform lg:-translate-y-1/2"
          style={{
            background: "linear-gradient(to bottom, white 57%, #D7F5FF 50%)", // 2/3 white, 1/3 blue
          }}
        >
          <div
            className="absolute top-0 right-5 sm:right-10 h-1/2 text-white py-1 px-3 text-[14px] pt-3"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg width='55' height='75' xmlns='http://www.w3.org/2000/svg'><g filter='url(%23filter0_d_754_40479)'><path d='M1.44779 1.08393e-05L52.001 1.52588e-05L52.001 72L26.7244 64.2384L1.44778 72L1.44779 1.08393e-05Z' fill='%23D73939'/></g><defs><filter id='filter0_d_754_40479' x='0.665635' y='-0.782607' width='53.6832' height='75.1304' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dx='0.782607' dy='0.782607'/><feGaussianBlur stdDeviation='0.782607'/><feColorMatrix type='matrix' values='0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 0.4 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_754_40479'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_754_40479' result='shape'/></filter></defs></svg>")`,
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="font-bold">25%</span> <br /> OFF
          </div>
          <div className="text-start pt-2">
            <p className="text-[14px]">👉🏻 Best price for next 5 seats</p>
            <div className="flex gap-2 items-end">
              <p className="text-[24px] md:text-[32x] lg:text-[40px] font-bold text-black font-sans">
                ₹22,499
              </p>
              <p className="text-[18px] line-through pb-1">₹29,999</p>
            </div>
          </div>

          <div className="space-y-3 mt-4 text-[14px]">
            <div className="flex items-end gap-1">
              <div>
                <img
                  src={offer}
                  alt="offer-valid"
                  className="h-[20px] w-[20px]"
                />
              </div>
              <div>
                <p>Offer valid till 7th Nov 2024</p>
              </div>
            </div>

            <p className="">
              {" "}
              Pay 50% now to enrol and remaining in next 2 weeks.
            </p>

            <div className="font-semibold text-[14px]">Cohort seats: 60</div>
          </div>

          <button
            onClick={toggleModalEnquire}
            className="flex w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 px-6 md:p-3 md:px-8 rounded-full mt-6 flex  items-center justify-center text-[20px] shadow-[5px_5px_0_rgba(0,0,0)] "
          >
            <div className="flex flex-col gap-0 md:gap-1 text-start font-semibold">
              Enroll Now
            </div>
            <div className="ml-2 text-xl">→</div>
          </button>
          {/* <a href="https://pages.razorpay.com/getintoPM" target="_blank">
          </a> */}

          <button
            onClick={toggleModal}
            className="w-full bg-white border border-black text-[20px] text-black font-semibold py-3 rounded-full mt-4 flex justify-center gap-2"
          >
            Download Curriculum
          </button>

          <div className="flex items-center gap-1 text-[14px] lg:text-[16px] mt-6">
            <img src={clock} alt="" className="pb-1" />
            <div>
              Hurry! <span className="font-bold">50 people</span> have already
              enrolled in the past 1 month
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Modal */}
          <EnrollmentForm
            setIsOpen={setIsOpenEnquire}
            isVisible={isVisibleEnquire}
            setIsVisible={setIsVisibleEnquire}
            isOpen={isOpenEnquire}
            toggleModal={toggleModalEnquire}
          />
          <DownloadCurriculumForm
            setIsOpen={setIsOpen}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            isOpen={isOpen}
            toggleModal={toggleModal}
          />
        </div>
      </div>

      <div className="hidden text-[16px] lg:grid grid-cols-2 lg:grid-cols-5 gap-8 rounded-2xl px-4 lg:px-0 py-6 border-2 border-gray-100 mt-2 lg:mt-24 mx-4 lg:mx-8 shadow-lg mb-12 lg:mb-0">
        {/* Live Projects */}
        <div className="flex flex-col justify-between items-start lg:items-center gap-2 text-start">
          <div className="flex items-start lg:items-center gap-2">
            <img src={heroIcon1} alt="Live Projects Icon" className="h-5 w-5" />
            <div className="font-semibold">Live Projects</div>
          </div>
          <div className="text-gray-600">Cases, Contests & Teardowns</div>
        </div>

        {/* Personalized Guidance */}
        <div className="flex flex-col justify-between items-start lg:items-center gap-2 text-start">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon2}
              alt="Personalized Guidance Icon"
              className="h-5 w-5"
            />
            <div className="font-semibold">Personalized Guidance</div>
          </div>
          <div className="text-gray-600">1-1 Mentorship</div>
        </div>

        {/* Interview Preparation */}
        <div className="flex flex-col justify-between items-start lg:items-center gap-2 text-start">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon3}
              alt="Interview Preparation Icon"
              className="h-6 w-6"
            />
            <div className="font-semibold">Interview Preparation</div>
          </div>
          <div className="text-gray-600">Comprehensive Mocks</div>
        </div>

        {/* Placement Support */}
        <div className="flex flex-col justify-between items-start lg:items-center gap-2 text-start">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon4}
              alt="Placement Support Icon"
              className="h-6 w-6"
            />
            <div className="font-semibold">Placement Support</div>
          </div>
          <div className="text-gray-600">1 Year Career Assistance</div>
        </div>

        {/* Portfolio Preparation */}
        <div className="flex flex-col justify-between items-start lg:items-center gap-2 text-start">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon5}
              alt="Portfolio Preparation Icon"
              className="h-6 w-6"
            />
            <div className="font-semibold">Portfolio Preparation</div>
          </div>
          <div className="text-gray-600">Notion</div>
        </div>
      </div>

      {/* Carousel for smaller screens */}
      {/* Carousel for smaller screens */}
      <div className="pm-hero-wrapper text-[16px] lg:hidden py-6 border-t-2 border-b-2 border-gray-200 mt-2 mb-12 lg:mb-0">
        <div className="carousel flex gap-0">
          {/* Original items */}
          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon1}
                alt="Live Projects Icon"
                className="h-5 w-5"
              />
              <div className="font-semibold">Live Projects</div>
            </div>
            <div className="text-gray-600">Cases, Contests & Teardowns</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon2}
                alt="Personalized Guidance Icon"
                className="h-5 w-5"
              />
              <div className="font-semibold">Personalized Guidance</div>
            </div>
            <div className="text-gray-600">1-1 Mentorship</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon3}
                alt="Interview Preparation Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Interview Preparation</div>
            </div>
            <div className="text-gray-600">Comperehence Mocks & Content</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon4}
                alt="Placement Support Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Placement Support</div>
            </div>
            <div className="text-gray-600">1 Year Career Assistance</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon5}
                alt="Portfolio Preparation Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Portfolio Preparation</div>
            </div>
            <div className="text-gray-600">Notion</div>
          </div>

          {/* Duplicate */}
          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon1}
                alt="Live Projects Icon"
                className="h-5 w-5"
              />
              <div className="font-semibold">Live Projects</div>
            </div>
            <div className="text-gray-600">Cases, Contests & Teardowns</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon2}
                alt="Personalized Guidance Icon"
                className="h-5 w-5"
              />
              <div className="font-semibold">Personalized Guidance</div>
            </div>
            <div className="text-gray-600">1-1 Mentorship</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon3}
                alt="Interview Preparation Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Interview Preparation</div>
            </div>
            <div className="text-gray-600">Comperehence Mocks & Content</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon4}
                alt="Placement Support Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Placement Support</div>
            </div>
            <div className="text-gray-600">1 Year Career Assistance</div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon5}
                alt="Portfolio Preparation Icon"
                className="h-6 w-6"
              />
              <div className="font-semibold">Portfolio Preparation</div>
            </div>
            <div className="text-gray-600">Notion</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PmFellowshipHeroSection;
