import mentor1 from "../assets/pamit-mentor.jpg";
import img1 from "../assets/magicbricks-logo.png";

import mentor2 from "../assets/arun-mentor.png";
import img2 from "../assets/microsoft-logo.png";

import { useEffect, useRef, useState } from "react";
import MentorCard from "./MentorCard";

const mentors = [
  {
    id: 1,
    profile: mentor1,
    name: "Pamit Anand",
    company: "Magicbricks",
    post: "VP of Product",
    linkedIn: "#",
    img: img1,
  },
  {
    id: 2,
    profile: mentor2,
    name: "Arun Nandewal",
    company: "Microsoft",
    post: "Sr. Product Manager",
    linkedIn: "#",
    img: img2,
  },
  {
    id: 3,
    profile: mentor1,
    name: "Pamit Anand",
    company: "Magicbricks",
    post: "VP of Product",
    linkedIn: "#",
    img: img1,
  },
  {
    id: 4,
    profile: mentor2,
    name: "Arun Nandewal",
    company: "Microsoft",
    post: "Sr. Product Manager",
    linkedIn: "#",
    img: img2,
  },
  {
    id: 5,
    profile: mentor1,
    name: "Pamit Anand",
    company: "Magicbricks",
    post: "VP of Product",
    linkedIn: "#",
    img: img1,
  },
  {
    id: 6,
    profile: mentor2,
    name: "Arun Nandewal",
    company: "Microsoft",
    post: "Sr. Product Manager",
    linkedIn: "#",
    img: img2,
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
            A sneak peak into what you will learn in our 10-week curriculum. You
            will have to commit to investing 6 to 8 hours of dedicated time to
            this program every week.
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
                img={mentor.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetMentors;
