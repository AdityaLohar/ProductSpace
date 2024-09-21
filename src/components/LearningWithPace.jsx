import tick from "../assets/tick-green.svg";
import { useEffect, useState } from "react";
import courseContent from "../data/CourseContent";
import rotatingArc from "../assets/pink-rotating.svg";

const CircleSegment = ({ index, activeIndex }) => {
  // Determine if the segment should be active (colored)
  const isActive = index + 1 <= activeIndex % 8; // Reset color every full rotation

  return (
    <div
      className={`absolute
        ${isActive ? "bg-transparent" : "bg-transparent"}
        transform origin-left`}
      style={{
        transform: `rotate(${(index - 2) * 45}deg)`, // Each arc covers 45 degrees (360/8)
        width: "50%",
        height: "50%",
        left: "25%", // Center the segment
        top: "25%", // Center the segment
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 193 147"
        fill={isActive ? "#CAE9F9" : "#FFE3EF"}
        // fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M177.92 0.636726C197.047 47.3896 196.983 99.796 177.742 146.502L0.179448 73.3523L177.92 0.636726Z" />
      </svg>
    </div>
  );
};

const RotatingArc = ({ activeIndex }) => {
  return (
    <div
      className={`absolute bg-transparent transform origin-bottom transition-transform duration-2000`}
      style={{
        transform: `rotate(${activeIndex * 45}deg)`,
        width: "50%",
        height: "50%",
        left: "0%", // Center the rotating arc
        top: "0%", // Center the rotating arc
      }}
    >
      <img src={rotatingArc} alt="" className="w-full h-full" />
    </div>
  );
};

const LearningWithPace = () => {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWeekChange = (weekIndex) => {
    setCurrentWeekIndex(weekIndex);
    setActiveIndex(weekIndex);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg screen size is 1024px in TailwindCSS

    const startInterval = () => {
      const interval = setInterval(() => {
        setCurrentWeekIndex(
          (prevIndex) => (prevIndex + 1) % courseContent.length
        );
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Update every 3 seconds

      return interval;
    };

    let interval;
    if (mediaQuery.matches) {
      interval = startInterval();
    }

    const handleResize = () => {
      if (mediaQuery.matches && !interval) {
        interval = startInterval();
      } else if (!mediaQuery.matches && interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [courseContent]);

  const { title, desc, imgs, week } = courseContent[currentWeekIndex];

  return (
    <div className="bg-[#FFF1D4] pb-16 px-4 md:px-10 xl:px-32 pt-8 md:pt-12 lg:pt-16 font-hind">
      <div className="flex flex-col lg:flex-row py-4 px-4 md:px-8 lg:px-20 lg:py-12 justify-between gap-2 bg-white rounded-3xl">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 w-full">
            <div className="text-[28px] lg:text-[40px] font-bold text-center lg:text-start font-sans">
              Your 10-Week Learning Journey
            </div>
            <div className="text-[16px] text-center lg:text-start">
              Progress through weekly segments that build your product
              management skills, from strategy to hands-on projects, preparing
              you for real-world challenges.
            </div>
          </div>

          <div className="lg:hidden">
            {/* Scrollable Content */}
            <div
              id="scrollableDiv"
              className="flex gap-2 justify-start overflow-x-scroll invisible-scrollbar p-1 bg-[#F6F6F6] rounded-lg"
            >
              {courseContent.map((content, index) => (
                <button
                  key={index}
                  onClick={() => handleWeekChange(index)}
                  className={`px-4 py-2 whitespace-nowrap font-medium rounded-lg ${
                    activeIndex === index
                      ? "bg-[#FFA600] text-white text-[16px]"
                      : "text-black"
                  }`}
                >
                  Week {content.week}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-7 my-4 text-[18px]">
            <div>
              <h2 className="font-sans text-[24px] font-semibold  text-center lg:text-start">
                <span className="text-[24px] lg:text-[40px]">
                  {" "}
                  {title[0] === "0"
                    ? `0${+title[1]}`
                    : `${title[0] + title[1] + title[2]}`}{" "}
                </span>
                {title[0] === "0" ? title.slice(2) : title.slice(3)}
              </h2>
            </div>
            <div className="space-y-2 lg:space-y-4">
              {desc.map((point, index) => (
                <div
                  key={index}
                  className="text-[15px] flex gap-2 items-start lg:items-center"
                >
                  <img src={tick} alt="tick" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 border border-2 rounded-2xl p-6 max-w-max">
            <div className="font-medium">Case Studies</div>
            <div className="flex gap-4">
              {imgs.map((logo, index) => (
                <div key={index}>
                  <img
                    src={logo}
                    alt=""
                    className="object-contain w-24 h-16 rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center w-2/5 gap-6 px-16">
          <div className="w-full h-auto">
            <div className="ml-16">
              <div className="relative w-[25vw] h-[25vw] rounded-full">
                {/* Base circle divided into 8 parts */}
                {[...Array(8)].map((_, index) => (
                  <CircleSegment
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                  />
                ))}

                {/* Rotating arc */}
                <RotatingArc activeIndex={activeIndex} />

                {/* Inner text or content */}
                <div className="absolute bg-white w-[82%] h-[82%] rounded-full border border-1 border-[#21C1F3] flex items-center justify-center top-[9%] -left-[16%] text-[37px] font-sans font-semibold">
                  <p>Week {week}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningWithPace;
