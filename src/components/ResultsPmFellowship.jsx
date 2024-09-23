import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const ResultCard = ({ id, flag, number, title, desc }) => {
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
      className={`${
        !flag
          ? "md:border-r-2 md:border-[#00B5CE]"
          : "border-r-2 border-[#00B5CE]"
      } px-4 xl:px-12`}
    >
      <div>
        {id == 2 || id == 4 ? "" : "₹"}{" "}
        <span className="text-[28px] md:text-[40px] font-semibold">
          {isVisible && <CountUp start={0} end={number} duration={5} />}
        </span>{" "}
        {title[0] === "." ? (
          <span>
              <span className="text-[28px] md:text-[40px] font-semibold">
                {title[0] + title[1]}
              </span>
              <span> X</span>
          </span>
        ) : (
          title
        )}
      </div>
      <div className="text-[14px] font-medium text-black">{desc}</div>
    </div>
  );
};

const ResultsPmFellowship = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 py-4 lg:py-8 px-2 lg:px-10 mt-6 lg:mt-12 mb-10 lg:mb-12 border-2 border-[#00B5CE] bg-[#D7F5FF] rounded-xl">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 justify-between py-4 items-center">
        <div className="text-[28px] lg:text-[32px] font-semibold w-full lg:w-1/4 text-center lg:text-start font-sans">
          Results you can count on
        </div>

        <div className="flex gap-4 justify-between w-full md:w-auto md:justify-around items-center xl:gap-0 text-[#00B5CE] text-center">
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            <ResultCard
              id={1}
              flag={1}
              number={57}
              title={"LPA"}
              desc={"Highest Salary"}
            />
            <ResultCard
              id={2}
              flag={1}
              number={310}
              title={"+"}
              desc={"Placed Alums"}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            <ResultCard
              id={3}
              flag={0}
              number={14}
              title={" LPA"}
              desc={"Average Salary"}
            />
            <ResultCard
              id={4}
              flag={0}
              number={1}
              title={".6 X"}
              desc={"Average Hike"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPmFellowship;
