import alum from "../assets/AlumFace.svg";
import { useEffect, useRef, useState } from "react";
import MentorCard from "./MentorCard";

const mentors = [
  {
    id: 1,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Search PM", 
        "Research"
    ],
    linkedIn: "#"
  },
  {
    id: 2,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Discovery",
        "UX", 
    ],
    linkedIn: "#"
  },
  {
    id: 3,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Discovery",
        "UX", 
    ],
    linkedIn: "#"
  },
  {
    id: 4,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Discovery",
        "UX", 
    ],
    linkedIn: "#"
  },
  {
    id: 5,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Discovery",
        "UX", 
    ],
    linkedIn: "#"
  },
  {
    id: 6,
    profile: alum,
    name: "Arpita",
    company: "Magicbricks",
    post: "Vice President of Product",
    interest: [
        "Discovery",
        "UX", 
    ],
    linkedIn: "#"
  },
];

const MeetMentors = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.animationPlayState = "paused";
        setTimeout(() => {
          scrollWrapperRef.current.style.animationPlayState = "running";
        }, 2000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-[#AEECFF] mb-10 lg:mb-20 rounded-3xl pb-10">
      <div className="py-5 lg:py-10">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans">
          Meet our Mentors
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

      <div className="overflow-x-scroll mentor-scrollbar">
        <div className="flex">
          {[...mentors, ...mentors].map((mentor) => (
            <div key={mentor.id} className="scroll-item pl-2 md:pl-4">
              <MentorCard
                id={mentor.id}
                profile={mentor.profile}
                name={mentor.name}
                company={mentor.company}
                post={mentor.post}
                interest={mentor.interest}
                linkedIn={mentor.linkedIn}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetMentors;
