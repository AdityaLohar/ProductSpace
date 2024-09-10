import React, { useState, useEffect } from "react";
import rotatingArc from "../assets/pink-rotating.svg";

const CircleSegment = ({ index, activeIndex }) => {
  // Determine if the segment should be active (colored)
  const isActive = (index + 1) <= activeIndex % 8; // Reset color every full rotation

  return (
    <div
      className={`absolute
        ${isActive ? "bg-transparent" : "bg-transparent"}
        transform origin-left`}
      style={{
        transform: `rotate(${(index-2) * 45}deg)`, // Each arc covers 45 degrees (360/8)
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
        top: "0%",  // Center the rotating arc
      }}
    >
      <img src={rotatingArc} alt="" className="w-full h-full" />
    </div>
  );
};

const CircleAnimation = ({week}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1); // Increment indefinitely
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-16">
      <div className="relative w-[25vw] h-[25vw] rounded-full">
        {/* Base circle divided into 8 parts */}
        {[...Array(8)].map((_, index) => (
          <CircleSegment key={index} index={index} activeIndex={activeIndex} />
        ))}

        {/* Rotating arc */}
        <RotatingArc activeIndex={activeIndex} />

        {/* Inner text or content */}
        <div className="absolute bg-white w-[84%] h-[84%] rounded-full border border-1 border-[#21C1F3] flex items-center justify-center top-[8%] -left-[17%] text-[37px] font-sans">
          <p>Week {week}</p>
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;
