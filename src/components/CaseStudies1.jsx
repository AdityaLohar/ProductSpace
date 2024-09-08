import { useState } from "react";
import netflix from "../assets/netflix-logo.jpg";
import primeVideo from "../assets/prime-video.svg";
import miro from "../assets/miro-logo.png";
import magicBricks from "../assets/magic-bricks.svg";
import amazon from "../assets/amazon.svg";
import google from "../assets/google.svg";
import canva from "../assets/canva.svg";

const CaseStudies1 = () => {
  const [selectedBox, setSelectedBox] = useState(0); // Change to null initially

  const boxes = [
    { id: 1, title: "Amazon Prime", image: primeVideo },
    { id: 2, title: "MagicBricks", image: magicBricks },
    { id: 3, title: "Miro", image: miro },
    { id: 4, title: "Amazon.com", image: amazon },
    { id: 5, title: "Netflix", image: netflix },
    { id: 6, title: "Canva", image: canva },
    { id: 7, title: "Google", image: google },
  ];

  return (
    <div className="flex flex-col bg-[#F1E6FF] md:py-8 px-4 md:px-10 xl:px-20">
      <div className="py-8">
        <div className="text-[28px] lg:text-[44px] font-bold text-center font-sans">
          Product Tear-down & Case Studies
        </div>
        <div className="text-[14px] lg:text-sm text-center text-gray-700 font-medium py-1">
          Dive into Case Studies that Drive Product Innovation
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-4 lg:gap-7 w-full p-4 relative overflow-hidden">
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => setSelectedBox(index === selectedBox ? null : index)} // Toggle selection
            className={`flex flex-col font-semibold transition-all duration-500 ease-in-out bg-white overflow-hidden ${
              selectedBox === index
                ? "col-span-2 row-span-2 h-full w-full rounded-2xl items-start" // Big box when selected
                : "col-span-1 row-span-1 custom-5:h-[170px] custom-5:w-[170px] custom-6:h-[180px] custom-6:w-[180px] custom-8:h-[200px] custom-8:w-[200px] 2xl:h-[245px] 2xl:w-[245px] rounded-lg items-start justify-end"
            }`}
            style={{
              backgroundImage: `url(${box.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              flexShrink: 0, // Prevent shrinking of the boxes
              boxSizing: "border-box", // Ensure padding and border are included in element's total width and height
            }}
          >
            <div className="m-2 p-1 px-2 bg-white rounded-2xl text-[12px] xl:text-sm w-contain">
              {box.title}
            </div>

            {selectedBox === index && (
              <div className="absolute top-[12%] lg:top-[25%] xl:top-[23%] 2xl:top-[30%] lg:left-0 w-full h-full flex items-center justify-center">
                <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind space-y-4">
                  <div className="text-[24px] md:text-[18px] xl:text-[24px] pr-4">
                    Improving {box.title} Viewing Experience
                  </div>
                  <div className="text-[16px] md:text-[14px] xl:text-[16px] font-normal pr-4">
                    A sneak peek into what you will learn in our 10-week
                    curriculum.
                  </div>
                  <div className="flex justify-end">
                    <div className="text-[12px] md:text-[10px] xl:text-[12px] font-normal">
                      Published on: 25th May 24
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        {/* Display the Selected Box */}
        {selectedBox !== null && (
          <div
            className="mx-auto w-full h-[300px] custom-1:h-[300px] custom-2:h-[450px] custom-3:h-[510px] custom-3:w-[520px] mb-4 bg-white rounded-2xl flex flex-col items-start justify-between overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${boxes[selectedBox].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <div className="bg-white rounded-2xl text-[10px] md:text-sm px-2 py-1 m-2">
                {boxes[selectedBox].title}
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind space-y-2">
              <div className="text-[20px] md:text-[24px] font-semibold pr-4">
                Improving {boxes[selectedBox].title} Viewing Experience
              </div>
              <div className="text-[14px] md:text-[16px] font-normal pr-4">
                A sneak peek into what you will learn in our 10-week curriculum.
              </div>
              <div className="flex justify-end">
                <div className="text-[10px] md:text-[12px] font-normal">
                  Published on: 25th May 24
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Non-Selected Boxes */}
        <div className="flex overflow-x-auto space-x-3 py-2 pb-4 pl-2 items-center h-[150px]">
          {boxes.map((box, index) => (
            <div
              key={index}
              onClick={() => setSelectedBox(index)}
              className={`flex-shrink-0 transition-all duration-500 ease-in-out h-[100px] w-[100px] md:h-[120px] md:w-[120px] bg-white rounded-xl flex items-end justify-start ${
                index === selectedBox
                  ? "border-2 border-white h-[110px] w-[110px] scale-110 shadow-[0_6px_1px_rgba(0,0,0,0.6)]"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-2xl text-[10px] md:text-[12px] px-2 py-1 m-2">
                {box.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies1;

