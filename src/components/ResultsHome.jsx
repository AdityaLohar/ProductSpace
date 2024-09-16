import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import placed from "../assets/group.svg";
import packageImage from "../assets/Rupees-symbol.svg";
import increment from "../assets/arrow.svg";
import bgImage from "../assets/results-pink-bg.svg";

const ResultsCard = ({ iconImg, number, title, subTitle }) => {
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
      className="flex items-center text-start gap-1 border border-1 border-[#21C1F3] bg-transparent rounded-2xl p-4"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg width='126' height='36' viewBox='0 0 126 36' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M105.869 -36.7249C130.903 -40.2568 126.757 -69.7697 121.556 -84.0846L-10.1093 -11.8853C-12.1951 -9.40857 -15.5431 -0.854497 -12.249 13.5482C-8.13122 31.5517 28.0266 47.5555 38.4088 23.5098C48.7909 -0.535959 55.1086 13.5446 76.6007 10.6472C98.0929 7.7497 74.5761 -32.31 105.869 -36.7249Z' fill='%23FFE3EF'/></svg>")`,
        backgroundSize: "120px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      <div className="w-10">
        <img src={iconImg} alt="" className="w-8 h-8 lg:w-10 lg:h-8" />
      </div>
      <div>
        <div className="text-[#21C1F3] font-semibold text-[24px] md:text-[28px] xl:text-[32px] font-sans">
          {isVisible && <CountUp start={0} end={number} duration={3} />}
          {title}
        </div>
        <div className="text-[18px] lg:text[22px] font-medium">{subTitle}</div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="flex flex-col bg-white pb-5 md:pb-10 bg-red-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-around px-2 md:px-22 xl:px-28 pt-10">
        <ResultsCard iconImg={placed} number={2000} title={"+ Members"} subTitle={"Already Placed"} />
        <ResultsCard iconImg={packageImage} number={46} title={".7 LPA"} subTitle={"Highest Package"} />
        <ResultsCard iconImg={increment} number={4} title={".5x Increment"} subTitle={"Average CTC"} />
      </div>
    </div>
  );
};

export default Results;