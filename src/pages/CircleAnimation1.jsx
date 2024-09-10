import React, { useState, useEffect } from "react";
import rotatingArc from "../assets/pink-rotating.svg";
import circleArc from "../assets/pink-circle.svg";

const CircleSegment = ({ index, activeIndex }) => {
  // Determine if the segment should be active (colored)
  const isActive = index <= activeIndex % 8; // Reset color every full rotation

  return (
    <div
      className={`absolute
        ${isActive ? "bg-transparent" : "bg-transparent"}
        transform origin-bottom`}
      style={{
        transform: `rotate(${(index - 3) * 45}deg)`, // Each arc covers 45 degrees (360/8)
      }}
    >
      {/* <svg
        width="220"
        height="220"
        viewBox="0 0 100 100"
        style={{ padding: "2px" }}
      >
        <path
          d="M50,50 L100,66 A53,50 100 0,1 73,97 Z"
            fill={isActive ? "green" : "red"}
          stroke="white" // To create a gap between the arcs
          strokeWidth="1" // The gap size
        />
      </svg> */}

      <img src={circleArc} alt="" className="h-[200px] w-[200px]" />
    </div>
  );
};

const RotatingArc = ({ activeIndex }) => {
  return (
    <div
      className={`absolute bg-transparent
        transform origin-bottom transition-transform duration-2000`}
      style={{
        transform: `rotate(${(activeIndex - 3)* 45}deg)`,
      }}
    >
      {/* <svg
        width="220"
        height="220"
        viewBox="0 0 100 100"
        style={{ padding: "2px" }}
      >
        <path
          d="M50,50 L100,65 A48,50 100 0,1 73,97 Z"
          fill="blue"
          stroke="white"
          strokeWidth="1"
        />
      </svg> */}
      <img src={rotatingArc} alt="" className="w-[200px] h-[200px]" />
    </div>
  );
};

const CircleAnimation1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1); // Increment indefinitely
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-40 mt-40 relative rounded-full">
      {/* Base circle divided into 8 parts */}
      {[...Array(8)].map((_, index) => (
        <CircleSegment key={index} index={index} activeIndex={activeIndex} />
      ))}

      {/* Rotating arc */}
      <RotatingArc activeIndex={activeIndex} />

      {/* <div className="absolute bg-white w-48 h-48 top-[15px] left-[14px] rounded-full flex items-center justify-center">
        Hello
      </div> */}
    </div>
  );
};

export default CircleAnimation1;
