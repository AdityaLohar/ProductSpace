import discountBg from "../assets/discountBg.svg";
import disco3 from "../assets/disco-lights1.svg";
import disco2 from "../assets/disco-lights2.svg";
import disco1 from "../assets/disco-lights3.svg";
import clock from "../assets/clock.svg";
import download from "../assets/download.svg";
import offer from "../assets/offer-valid.svg";
import { useEffect, useState } from "react";

const PmFellowshipHeroSection = () => {
  const [bgImages, setBgImages] = useState([disco1, disco2, disco3]);

  const rotateBackgrounds = () => {
    setBgImages((prev) => {
      return [prev[2], prev[0], prev[1]]; // Rotate the images
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateBackgrounds();
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="bg-transparent pt-8 pb-16 px-4 md:px-10 xl:px-48 py-2 md:py-8 lg:py-32 font-hind"
      style={{
        backgroundImage: `url(${bgImages[0]}), url(${bgImages[1]}), url(${bgImages[2]})`,
        backgroundPosition: "bottom center, bottom right -10%, bottom left -5%",
        backgroundSize: "cover, contain, contain", // Adjust size for each image
        backgroundRepeat: "no-repeat, no-repeat, no-repeat", // Prevent repeating
      }}
    >
      <div className="bg-white relative flex flex-col lg:flex-row py-4 lg:py-12 items-center justify-between gap-6 md:gap-8 lg:gap-12 border border-1 border-[#00B5CE] rounded-[24px] md:rounded-[32px] px-4 md:px-12 lg:px-20">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="text-[24px] md:text-[28px] lg:text-[36px] font-bold font-sans">
                Product Management Fellowship Programme
              </h1>
            </div>
            <div className="text-[16px] lg:text-[18px]">
              Want to build a successful-product career?
            </div>
          </div>

          <div className="flex justify-around lg:justify-start gap-10 text-[18px]">
            <div>
              <div className="text-[16px]">Start Date</div>
              <div className="font-semibold text-blue-400">Sep 14, 2024</div>
            </div>
            <div>
              <div className="text-[16px]">Duration</div>
              <div className="font-semibold text-blue-400">30 Days</div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[12px] mt-3 lg:mt-6">
            <img src={clock} alt="" className="pb-1"/>
            <div>
              Hurry! <span className="font-bold">668 people</span> have already
              enrolled in the past 1 month
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-[24px] md:rounded-[32px] lg:w-[37%] shadow-lg p-4 md:p-12 lg:absolute border border-1 border-[#00B5CE] lg:right-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            style={{
                background: "linear-gradient(to bottom, white 62%, #D7F5FF 62%)", // 2/3 white, 1/3 blue
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
           <span className="font-bold">15%</span> <br /> OFF
          </div>
          <div className="text-start pt-2">
            <p className="text-[14px]">👉🏻 Early Bird Price</p>
            <div className="flex gap-2 items-end">
              <p className="text-[24px] md:text-[32x] lg:text-[40px] font-bold text-black font-sans">
                ₹21,249
              </p>
              <p className="text-[14px] line-through pb-1">₹24,999</p>
            </div>
          </div>

          <div className="space-y-2 mt-4 text-[14px]">
            <div className="flex items-end gap-1">
              <div>
                <img src={offer} alt="offer-valid" className="h-[20px] w-[20px]" /> 
              </div>
              <div>
                <p>
                  Offer valid till 21st Aug 2024
                </p>
              </div>
            </div>
            <p className="">EMI from INR ₹1,455/month available at checkout</p>
          </div>
          
          <a href="https://pages.razorpay.com/getintoPM" target="_blank">
            <button className="flex w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 px-6 md:p-3 md:px-8 rounded-full mt-6 flex items-center justify-between shadow-[5px_5px_0_rgba(0,0,0)] ">
              <div className="flex flex-col gap-0 md:gap-1 text-start font-semibold">
                <div className="text-[20px]">Enroll Now</div>
                <div className="font-medium text-[13px]">
                  Last <span className="text-red-500">43 seats left</span>
                </div>
              </div>

              <div className="ml-2 text-xl">→</div>
            </button>
          </a>

          <a href="https://drive.google.com/file/d/1P8zYLnS2A2ysqXJ_wpOYJlQWctU0ZDx8/view" target="_blank">
            <button className="w-full bg-white border border-black text-black font-medium py-3 rounded-full mt-4 flex justify-center gap-2">
              <div>
                <img src={download} alt="download" className="w-[20px] h-[20px]" />
              </div>
              <div>
                <p>
                  Download Curriculum
                </p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PmFellowshipHeroSection;
