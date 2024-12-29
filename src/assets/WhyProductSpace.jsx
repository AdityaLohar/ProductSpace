import React, { useState, useEffect } from "react";

const VerticalProgressBar = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex gap-6">
      {/* Progress Bar */}
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[50%] -translate-x-1/2 w-[2px] bg-gray-200">
          {/* Dynamic Progress Line */}
          <div
            className="absolute top-0 left-0 w-full bg-blue-500"
            style={{
              height: `${(activeIndex / (data.length - 1)) * 100}%`,
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center relative z-10">
          {data.map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`h-4 w-4 rounded-full ${
                  index <= activeIndex ? "bg-blue-500" : "bg-gray-200"
                } ${index === activeIndex ? "border-2 border-blue-500" : ""}`}
              ></div>
              {index < data.length - 1 && (
                <div className="h-[50px] w-[2px] bg-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Items Display */}
      <div className="flex flex-col gap-6 text-[#24304C]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${index === activeIndex ? "" : ""}`}
            onClick={() => setActiveIndex(index)} // For manually changing the active index
          >
            <div className="flex flex-col gap-1">
              <div className="text-[16px] font-semibold">{item.title}</div>
              <div className="text-[14px] text-[#5B5D67]">{item.desc}</div>
            </div>
            <div>
              <img
                src={item.img}
                alt=""
                className={`rounded-xl ${
                  index === activeIndex
                    ? "border-2 border-blue-400 shadow-lg shadow-blue-200"
                    : "border-2 border-transparent"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const pic1 = "https://wallpapershome.com/images/pages/ico_h/25594.jpg";
const pic2 =
  "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?cs=srgb&dl=pexels-ekamelev-927497.jpg&fm=jpg";
const pic3 =
  "https://c4.wallpaperflare.com/wallpaper/202/596/22/vipers-reptiles-snake-red-wallpaper-preview.jpg";
const pic4 = "https://wallpapershome.com/images/pages/ico_h/26021.jpg";

const WhyProductSpace = () => {
  const data = [
    {
      img: pic1,
      title: "Industry Focus Content",
      desc: "Fast track your journey into product management and emerge into your dream role as PM",
    },
    {
      img: pic2,
      title: "Personalized Guidance from Industry Leaders",
      desc: "Fast track your journey into product management and emerge into your dream role as PM",
    },
    {
      img: pic3,
      title: "Interview Preparation with Mock Interviews",
      desc: "Fast track your journey into product management and emerge into your dream role as PM",
    },
    {
      img: pic4,
      title: "Job Placement Support and Career Guidance",
      desc: "Fast track your journey into product management and emerge into your dream role as PM",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % data.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-14 font-inter pt-16 pb-12 lg:pt-20 lg:pb-16 px-4 md:px-10 xl:px-32">
      <div className="flex flex-col items-center gap-2">
        <div className="text-[20px] lg:text-[40px] font-bold text-[#1D1F3D]">
          Why Product Space
        </div>
        <div className="text-[14px] lg:text-[24px] text-[#A3A7B6]">
          Fast track your journey into product management and emerge into your
          dream role as PM
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-10">
        {/* Images */}
        <div className="w-full h-[540px] bg-gray-100 rounded-2xl relative overflow-hidden">
          <div
            className="transition-opacity duration-1000 ease-in-out absolute w-full h-full"
            style={{
              opacity: activeImage === 0 ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={data[0].img}
              alt={data[0].data}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="transition-opacity duration-1000 ease-in-out absolute w-full h-full"
            style={{
              opacity: activeImage === 1 ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={data[1].img}
              alt={data[1].data}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="transition-opacity duration-1000 ease-in-out absolute w-full h-full"
            style={{
              opacity: activeImage === 2 ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={data[2].img}
              alt={data[2].data}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="transition-opacity duration-1000 ease-in-out absolute w-full h-full"
            style={{
              opacity: activeImage === 3 ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={data[3].img}
              alt={data[3].data}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Titles for each image */}
        <div className="flex justify-between gap-6 text-black w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-1/4 transition-opacity duration-1000 ${
                activeImage === index ? "opacity-100" : "opacity-20"
              }`}
            >
              {/* Number and Title Container */}
              <div className="flex flex-col items-start justify-center text-start">
                <div className="text-[32px] font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-[16px] font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:hidden gap-6 text-[#24304C]">
        {data.map((item, index) => (
          <div key={index} className={`flex flex-col gap-2`}>
            <div className="flex flex-col gap-1">
              <div className="text-[16px] font-semibold">{item.title}</div>
              <div className="text-[14px] text-[#5B5D67]">{item.desc}</div>
            </div>
            <div>
              <img
                src={item.img}
                alt=""
                className={`rounded-lg border-2 ${
                  index === activeImage
                    ? "border-blue-400 shadow-lg shadow-blue-200"
                    : "border-transparent"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyProductSpace;
