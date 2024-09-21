import { useState } from "react";
import netflix from "../assets/netflix-logo.jpg";
import primeVideo from "../assets/prime-video.svg";
import miro from "../assets/miro-logo.png";
import magicBricks from "../assets/magic-bricks.svg";
import amazon from "../assets/amazon.svg";
import google from "../assets/google.svg";
import canva from "../assets/canva.svg";

const CaseStudies = () => {
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
    <div className="flex flex-col bg-[#F1E6FF] mb-10 lg:mb-20 rounded-3xl pb-10 px-4 md:px-10 lg:px-20">
      <div className="py-8">
        <div className="text-[28px] lg:text-[44px] font-bold text-center">
          Unlock Real-World Insights
        </div>
        <div className="text-[14px] lg:text-sm text-center text-gray-700 font-medium">
          Dive into Case Studies that Drive Product Innovation
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-5 gap-3 w-full h-full p-4 relative">
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => setSelectedBox(index === selectedBox ? null : index)} // Toggle selection
            className={`flex justify-between font-semibold transition-all duration-100 ease-in-out bg-white ${
              selectedBox === index
                ? "col-span-2 row-span-2 rounded-2xl items-start justify-start"
                : "col-span-1 row-span-1 h-[115px] w-[115px] xl:h-[200px] xl:w-[200px] rounded-lg items-end justify-start"
            }`}
            style={{
              backgroundImage: `url(${box.image})`,
              backgroundSize: "100% 115%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div className="m-2 p-1 px-2 bg-white rounded-2xl text-[12px] xl:text-sm">
              {box.title}
            </div>

            {selectedBox === index && (
              <div className="absolute top-[12%] xl:top-[30%] lg:left-0 w-full h-full flex items-center justify-center">
                <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind">
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
            className="w-full h-[400px] md:h-[400px] mb-4 bg-white rounded-2xl flex flex-col items-start justify-between"
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
            <div className="bg-[rgba(0,0,0,0.7)] border border-2 border-white rounded-2xl text-white p-3 m-3 font-hind">
              <div className="text-[20px] md:text-[24px] pr-4">
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
        <div className="flex overflow-x-auto space-x-2 py-2 pb-4 items-center h-[150px]">
          {boxes.map((box, index) => (
            <div
              key={index}
              onClick={() => setSelectedBox(index)}
              className={`flex-shrink-0 h-[100px] w-[100px] md:h-[140px] md:w-[140px] bg-white rounded-xl flex items-end justify-start transition-all duration-500 ease-in-out ${
                index === selectedBox
                  ? "border-2 border-white h-[110px] w-[110px]"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-2xl text-[10px] md:text-sm px-2 py-1 m-2">
                {box.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
