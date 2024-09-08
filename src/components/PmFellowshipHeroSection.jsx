import discountBg from "../assets/discount-bg.svg";
import disco3 from "../assets/disco-lights-1.svg";
import disco2 from "../assets/disco-lights-2.svg";
import disco1 from "../assets/disco-lights-3.svg";
import clock from "../assets/clock.svg";
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
      className="bg-transparent px-1 md:px-10 xl:px-48 py-32 font-hind"
      style={{
        backgroundImage: `url(${bgImages[0]}), url(${bgImages[1]}), url(${bgImages[2]})`,
        backgroundPosition: "top center, bottom right, bottom left",
        backgroundSize: "contain, contain, contain", // Adjust size for each image
        backgroundRepeat: "no-repeat, no-repeat, no-repeat", // Prevent repeating
      }}
    >
      <div className="bg-white relative flex py-5 lg:py-12 justify-between gap-12 border border-1 border-[#00B5CE] rounded-[32px] px-20">
        <div className="flex flex-col gap-6 w-1/2">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className="text-[36px] font-bold font-sans">
                Product Management Fellowship Programme
              </h1>
            </div>
            <div className="text-[18px]">
              Want to build a successful-product career?
            </div>
          </div>

          <div className="flex gap-10 text-[18px]">
            <div>
              <div className="text-[16px]">Start Date</div>
              <div className="font-semibold text-blue-400">Sep 14, 2024</div>
            </div>
            <div>
              <div className="text-[16px]">Duration</div>
              <div className="font-semibold text-blue-400">30 Days</div>
            </div>
          </div>

          <div className="flex  items-center gap-1 text-[12px] mt-6">
            <img src={clock} alt="" className="pb-1"/>
            <div>
              Hurry! <span className="font-bold">668 people</span> have already
              enrolled in the past 1 month
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-[32px] w-[37%] shadow-lg p-12  lg:absolute border border-1 border-[#00B5CE]  lg:right-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            style={{
                background: "linear-gradient(to bottom, white 62%, #D7F5FF 62%)", // 2/3 white, 1/3 blue
              }}
        >
          <div
            className="absolute top-0 right-10 h-1/2 text-white py-1 px-3 text-[19px] font-semibold pt-3"
            style={{
              backgroundImage: `url(${discountBg})`,
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            15% <br /> OFF
          </div>
          <div className="text-start">
            <p className="">Price</p>
            <div className="flex gap-2 items-end">
              <p className="text-[40px] font-bold text-black font-sans">
                ₹21,249
              </p>
              <p className="text-[14px] line-through pb-1">₹24,999</p>
            </div>
          </div>

          <div className="space-y-2 mt-4 text-[14px]">
            <p className="flex items-center">
              ✔ Offer valid till 21st Aug 2024
            </p>
            <p className="">EMI from INR ₹1,455/month available at checkout</p>
          </div>

          <button className="flex w-full bg-yellow-400 hover:bg-yellow-500 text-black p-3 px-4 rounded-full mt-6 flex items-center justify-between shadow-[5px_5px_0_rgba(0,0,0)] ">
            <div className="flex flex-col gap-1 text-start font-bold">
              <div className="text-[20px]">Enroll Now</div>
              <div className="font-medium text-[13px]">
                Last <span className="text-red-500">43 seats left</span>
              </div>
            </div>

            <div className="ml-2 text-xl">→</div>
          </button>

          <button className="w-full bg-white border border-black text-black font-bold py-3 rounded-full mt-4">
            📄 Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default PmFellowshipHeroSection;
