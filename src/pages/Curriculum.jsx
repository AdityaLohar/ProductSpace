import React, { useState, useEffect } from "react";
import netflix from "../assets/netflix.svg";
import notion from "../assets/notion-logo.svg";
import jira from "../assets/jira-logo.svg";
import tick from "../assets/tick.svg";

import uber from "../assets/uber-logo.svg";
import slack from "../assets/slack-logo.svg";
import zomato from "../assets/zomato-logo.svg";

import cricket from "../assets/cricket-logo.svg";
import cred from "../assets/cred-logo1.png";
import youtube from "../assets/youtube-logo.jpg";

import google from "../assets/google-logo.png";
import paytm from "../assets/paytm-logo.jpg";
import lazypay from "../assets/lazypay-logo.png";

import moengage from "../assets/moengage-logo.png";
import canva from "../assets/canva.svg";

const tinder =
  "https://logodownload.org/wp-content/uploads/2020/09/tinder-logo.png";
const github = "https://pngimg.com/uploads/github/github_PNG23.png";
const postman =
  "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png";
const sql =
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png";

const courseContent = [
  {
    week: "1",
    title: "01 Fundamentals of Product Management",
    desc: [
      "Fundamentals of Product Management",
      "Essential Skills Required to be a PM",
      "Learn Product & Software Lifecycle",
    ],
    imgs: [uber, zomato, slack],
  },
  {
    week: "2",
    title: "02 Product Discovery and Problem Solving",
    desc: [
      "User Segmentation and Persona",
      "Problem Identification and Prioritization",
      "Framework to identify new products and features",
    ],
    imgs: [cricket, cred, youtube],
  },
  {
    week: "3",
    title: "03 Product Planning and Documentation",
    desc: [
      "Product Backlog, Product Roadmap",
      "Prioritisation Frameworks",
      "Writing Effective User Stories & PRDs to Define Product Features",
    ],
    imgs: [google, paytm, lazypay],
  },
  {
    week: "4",
    title: "04 Product Analysis and Growth Lifecycle",
    desc: [
      "Setup your product on tools like MoEngage/Celevertap/Amplitude",
      "Hands-on to Create Events, Funnels, User Cohorts",
      "Product Led Growth to drive Acquisition, Onboarding, Engagement, Retention, Monetisation stratergies with practical case studies",
    ],
    imgs: [moengage, tinder, canva],
  },
  {
    week: "5",
    title: "05 Tech for PM",
    desc: [
      "What is internet and how it works",
      "Web 2.0: Frontend, Backend, APIs, Databases and Server",
      "Popular Tools, Frameworks and Languages",
    ],
    imgs: [github, postman, sql],
  },
  {
    week: "6",
    title: "06 Product Interview Prep",
    desc: ["Product Improvement", "Product Design", "Root Cause Analysis"],
    imgs: [zomato, uber, slack],
  },
  {
    week: "7-9",
    title: "7-9 Product Development and Agile Methodologies",
    desc: [
      "Defining product metrics",
      "Analyzing data and insights",
      "Using analytics tools",
    ],
    imgs: [moengage, github, canva],
  },
  {
    week: "10",
    title: "10 Graduate Desk | Work on Live Projects",
    desc: ["Capstone Project", "Mentor's Guided Assistance", "Graduation Day"],
    imgs: [google, paytm, lazypay],
  },
];
import { useRef } from "react";

const Curriculum = () => {
  const [currentWeek, setCurrentWeek] = useState(0); // Track current week
  const curriculumRef = useRef(null); // To reference the curriculum container
  const horizontalScrollContainerRef = useRef(null); // To reference the horizontal content container

  const calculateActiveCard = () => {
    const scrollContainer = horizontalScrollContainerRef.current;
    const scrollLeft = scrollContainer.scrollLeft; // Current horizontal scroll position
    const containerWidth = scrollContainer.clientWidth; // Width of the scroll container
    const cardWidth = containerWidth / 2; // Adjusted card width so 2 cards fit in the container

    // Calculate the active card based on the scroll position and container width
    const activeIndex = Math.round(scrollLeft / cardWidth);
    setCurrentWeek(activeIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateActiveCard(); // Calculate the active card during horizontal scroll
    };

    const scrollContainer = horizontalScrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={curriculumRef} className="h-full w-full flex">
      {/* Left Section: Week Number and Title (50% width) */}
      <div className="w-1/2 h-full bg-gray-100 p-8 flex items-center justify-center">
        {courseContent[currentWeek] && (
          <div className="transition-opacity duration-500 text-center">
            <h2 className="text-3xl font-bold">
              Week {courseContent[currentWeek].week}
            </h2>
            <p className="mt-4 text-xl">{courseContent[currentWeek].title}</p>
          </div>
        )}
      </div>

      {/* Right Section: Horizontal Scrolling Content (50% width) */}
      <div
        ref={horizontalScrollContainerRef}
        className="w-1/2 h-full flex overflow-x-scroll mentor-scrollbar overflow-y-hidden flex gap-8"
        style={{ scrollSnapType: "x mandatory" }} // Ensure snapping behavior when scrolling
      >
        {courseContent.map((week, index) => (
          <div
            key={week.week}
            className={`relative md:w-2/3 xl:w-1/2 flex-shrink-0 h-full p-4 transition-transform duration-700`}
            style={{
              minWidth: "50%",
              transform: `translateX(${index < currentWeek ? "-100%" : "0"})`, // Move previous cards completely left out of view
            }}
          >
            {/* Week Card */}
            <div className={`flex flex-col items-center gap-8 transition-all duration-500 ${
                  index === currentWeek ? "blur-none" : "blur-sm"
                } ${
                  index === currentWeek + 1 || index === currentWeek
                    ? ""
                    : "opacity-50"
                }`}>
              <div
                className={`relative flex flex-col gap-4 h-full p-4 bg-white rounded-lg shadow-lg border border-2 border-[#00B5CE] `} 
                // Show current and next cards with transparency
                style={{
                  boxShadow: `0px 4px 20px rgba(0, 181, 206, 0.4)`, // Same color as border
                }}
              >
                <div>
                  <h2 className="text-[14px] font-bold font-sans">
                    This Module Covers
                  </h2>
                  <ul className="text-[14px] mt-4 space-y-4">
                    {week.desc.map((descItem, descIndex) => (
                      <li key={descIndex} className="flex gap-2">
                        <img src={tick} alt="tick" />
                        {descItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="font-sans font-bold text-[14px]">
                    Case Studies
                  </p>
                  <div className="flex gap-2">
                    {week.imgs.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`logo-${imgIndex}`}
                        className="object-contain w-24 h-16 rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[18px] font-semibold">{week.title}</div>
            </div>
          </div>
        ))}

        {/* Empty Transparent Space for the last card */}
        <div className="w-1/4 flex-shrink-0 h-full p-4 bg-transparent"></div>
      </div>
    </div>
  );
};

export default Curriculum;
