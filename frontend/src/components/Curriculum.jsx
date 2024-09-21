import React, { useState, useEffect, useRef } from "react";
import netflix from "../assets/netflix.svg";
import notion from "../assets/notion-logo.svg";
import jira from "../assets/jira-logo.svg";
import tick from "../assets/tick.svg";
import curves from "../assets/bg-curves.svg";
import vertical from "../assets/vertical-blue-line.svg";

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

const Curriculum1 = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const curriculumRef = useRef(null);
  const horizontalScrollContainerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleWeekChange = (weekIndex) => {
    setCurrentWeek(weekIndex);
    setActiveIndex(weekIndex);
  };

  const calculateActiveCard = () => {
    const scrollContainer = horizontalScrollContainerRef.current;
    const scrollLeft = scrollContainer.scrollLeft;
    const card = scrollContainer.children[0];
    const cardWidth = card.getBoundingClientRect().width;
    const totalCards = courseContent.length; // Total number of cards

    // Calculate the active card
    let activeIndex = Math.floor(scrollLeft / cardWidth);

    // Prevent activeIndex from going beyond the last card
    activeIndex = Math.min(activeIndex, totalCards);

    setCurrentWeek(activeIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateActiveCard();
    };

    const scrollContainer = horizontalScrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { title, desc, imgs, week } = courseContent[currentWeek];

  return (
    <div className="lg:flex flex-col gap-8 py-4">
      {/* Title */}
      <div className="text-[40px] font-bold px-1 md:px-10 xl:px-32 font-sans">
        <h2>Our Curriculum</h2>
      </div>        

      {/* Curriculum Content */}
      <div
        ref={curriculumRef}
        className="hidden lg:flex h-full w-full items-center"
        style={{
          backgroundImage: `url(${vertical})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "calc(100% / 10) 100%",
          backgroundPosition: "center",
          scrollSnapAlign: "start",
        }}
      >
        {/* Left Section: Week Info */}
        <div
          className="w-1/2 h-full p-8 flex items-center justify-center bg-white"
          style={{
            backgroundImage: `url(${curves})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "bottom left",
          }}
        >
          {courseContent[currentWeek] && (
            <div
              className="h-[430px] w-[400px] text-center flex flex-col justify-start items-center rounded-[20%]"
              style={{
                background: `
                  radial-gradient(circle, #2ED3EA 30%, #1A95A5 100%),
                  repeating-linear-gradient(transparent, transparent 40px, rgba(1,1,1,0.1) 41px),  /* Horizontal lines */
                  repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(1,1,1,0.1) 41px)  /* Vertical lines */
                `,
                backgroundBlendMode: "overlay",
              }}
            >
              <h2 className="w-1/2 text-3xl font-bold bg-[#FFC303] py-2 rounded-bl-2xl rounded-br-2xl">
                Week {courseContent[currentWeek].week}
              </h2>
              <p className="mt-4 text-[40px] font-bold h-2/3 flex items-center text-white px-8">
                {courseContent[currentWeek].title}
              </p>
            </div>
          )}
        </div>

        {/* Right Section: Horizontal Scrolling */}
        <div
          ref={horizontalScrollContainerRef}
          className="w-1/2 h-full flex items-center overflow-x-scroll mentor-scrollbar overflow-y-hidden gap-8"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {courseContent.map((week, index) => (
            <div
              key={week.week}
              className={`pl-12 relative md:w-2/3 xl:w-1/2 flex-shrink-0 h-full p-4`}
              style={{
                minWidth: "50%",
                scrollSnapAlign: "start", // Ensures proper snap alignment
              }}
            >
              {/* Week Card */}
              <div
                className={`flex flex-col items-center gap-8 transition-all duration-400 ${
                  index === currentWeek ? "blur-none" : "blur-sm"
                } ${
                  index === currentWeek + 1 || index === currentWeek
                    ? ""
                    : "opacity-50"
                }`}
              >
                <div
                  className={`relative min-w-[350px] min-h-[280px] flex flex-col gap-4 h-full p-4 bg-white rounded-lg shadow-lg border border-2 border-[#00B5CE]`}
                  style={{
                    boxShadow: `0px 4px 20px rgba(0, 181, 206, 0.4)`,
                  }}
                >
                  {/* Content */}
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

                  {/* Case Study Images */}
                  <div className="mt-4 flex flex-col gap-2">
                    <p className="font-sans font-bold text-[14px]">
                      Case Studies
                    </p>
                    <div className="flex gap-4">
                      {week.imgs.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="rounded-lg w-16 h-16 object-contain bg-white flex-shrink-0"
                          style={{
                            boxShadow: "0px 4px 20px rgba(0, 181, 206, 0.4)",
                          }}
                        >
                          <img
                            className="h-full w-full rounded-lg object-contain"
                            src={img}
                            alt="case study logo"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty Transparent Space for the last card */}
          <div className="w-1/4 flex-shrink-0 h-full p-4 bg-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum1;
