import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import EnrollmentForm from "./EnrollmentForm";

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
          ? `${id != 4 && "md:border-r-2 md:border-[#C3C3C3]"}`
          : "border-r-2 border-[#C3C3C3]"
      } px-4 xl:px-12`}
    >
      <div>
        {id == 2 || id == 4 ? "" : "₹"}{" "}
        <span className="text-[24px] lg:text-[40px] font-semibold">
          {isVisible && <CountUp start={0} end={number} duration={5} />}
        </span>{" "}
        {title[0] === "." ? (
          <span>
            <span className="text-[24px] lg:text-[40px] font-semibold">
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
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <div className="flex flex-col gap-8 mb-2 lg:mb-12">
      <div className="mx-4 md:mx-10 lg:mx-20 py-4 lg:py-8 px-2 lg:px-10 mt-6 lg:mt-12 border-2 border-[#C3C3C3] bg-[#F5F5F5] rounded-xl">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 justify-between py-4 items-center">
          <div className="text-[24px] lg:text-[32px] font-bold w-full lg:w-1/4 text-center lg:text-start font-sans">
            Placement Stats
          </div>

          <div className="flex gap-4 justify-between w-full md:w-auto md:justify-around items-center font-sans xl:gap-0 text-center">
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

      <div className="flex justify-center">
        <button
          onClick={toggleModal}
          className="bg-[#FFC303] font-semibold text-[18px] p-4 rounded-full w-[300px] md:w-[300px]"
        >
          Kickstart Your Journey
        </button>
      </div>

      <div>
        <EnrollmentForm
          setIsOpen={setIsOpen}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default ResultsPmFellowship;
