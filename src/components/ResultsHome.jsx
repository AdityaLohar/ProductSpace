import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import placed from "../assets/resultsIcon.svg";
import packageImage from "../assets/resultsIcon.svg";
import increment from "../assets/resultsIcon.svg";
import { Link } from "react-router-dom";

const ResultsCard = ({ iconImg, number, title, subTitle, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
  ref={cardRef}
  className="flex gap-4 items-center text-start gap-1 border border-2 border-[#21C1F36A] bg-[#21C1F31A] rounded-2xl p-6">

      <div className="">
        <img src={iconImg} alt="" className="w-8 h-8 lg:w-12 lg:h-12" />
      </div>

      <div className="">
        <div className="text-black font-bold text-[24px] md:text-[28px]">
          {isVisible && <CountUp start={0} end={number} duration={duration} />}
          {title}
        </div>
        <div className="text-[18px] lg:text[22px] font-medium">{subTitle}</div>
      </div>

    </div>
  );
};

const Results = () => {

  return (
    <div className="flex flex-col bg-white pb-10 gap-8 font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-around px-4 md:px-22 xl:px-28 pt-4 lg:pt-10">
        <ResultsCard
          iconImg={placed}
          number={310}
          title={"+ Members"}
          subTitle={"Already Placed"}
          duration={5}
        />
        <ResultsCard
          iconImg={packageImage}
          number={57}
          title={" LPA"}
          subTitle={"Highest Package"}
          duration={7}
        />
        <ResultsCard
          iconImg={increment}
          number={1}
          title={".6x Increment"}
          subTitle={"Average Hike"}
          duration={15}
        />
      </div>
    </div>
  );
};

export default Results;
