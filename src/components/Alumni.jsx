import AlumniCard from "./AlumniCard";
import alum from "../assets/AlumFace.svg";
import { useEffect, useRef, useState } from "react";

const alumni = [
  {
    id: 1,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 2,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 3,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 4,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 5,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 6,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  // Add more alumni data here
];

const Alumni = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const scrollWrapperRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollWrapperRef.current) {
  //       scrollWrapperRef.current.style.animationPlayState = "paused";
  //       setTimeout(() => {
  //         scrollWrapperRef.current.style.animationPlayState = "running";
  //       }, 2000); // Pause for 2 seconds
  //     }
  //   }, 8000); // Total duration of scroll (including pause)

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col bg-[#AEECFF] mb-10 lg:mb-20 rounded-3xl pb-10">
      <div className="py-5 lg:py-10">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>
        <div className="text-[14px] lg:text-[17px] text-center text-gray-700 font-medium px-4 xl:px-60">
          <p className="lg:hidden">
          A sneak peak into what you will learn in our 10-week curriculum. You will have to commit to investing 6 to 8 hours of dedicated time
          to this program every week.
          </p>

          <p className="hidden lg:block">
            A sneak peak into what you will learn in our 10-week curriculum.{" "}
          </p>
          <p className="hidden lg:block">
            {" "}
            You will have to commit to investing 6 to 8 hours of dedicated time
            to this program every week.{" "}
          </p>
        </div>
      </div>

      <div className="overflow-x-scroll mentor-scrollbar md:scroll-container">
        <div
          className={`scroll-wrapper ml-6 ${isAnimating ? "animate" : ""}`}
          ref={scrollWrapperRef}
        >
          {[...alumni, ...alumni].map((alumnus) => (
            <div key={alumnus.id} className="scroll-item">
              <AlumniCard
                profile={alumnus.profile}
                name={alumnus.name}
                prevCompany={alumnus.prevCompany}
                prevPost={alumnus.prevPost}
                curCompany={alumnus.curCompany}
                curPost={alumnus.curPost}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
