import React, { useEffect, useState } from "react";
import hackathonImg from "../assets/prime-video.svg";
import arrowIcon from "../assets/right-arrow.svg";
import locationIcon from "../assets/location.svg";
import locationDarkIcon from "../assets/location-dark.svg";
import timeIcon from "../assets/access-time.svg";
import shareIcon from "../assets/share.svg";
import calendarIcon from "../assets/calendar.svg";
import linkedInIcon from "../assets/linkedin-circle.svg";
import substackIcon from "../assets/substack-logo.svg";
import slackIcon from "../assets/slack.svg";
import FaqEvents from "./FaqEvents";
import greenTick from "../assets/tick-green.svg";
import hackBg from "../assets/event-hack-bg.svg";
import linkIcon from "../assets/link-icon.svg";
import eventsBg1 from "../assets/events-bg.png";
import eventsBg2 from "../assets/events-bg.svg";
import judge1 from "../assets/sonia.svg";
import judge2 from "../assets/pamit.svg";
import judge3 from "../assets/arun.svg";
import HackathonRegistrationForm from "./HackathonRegistrationForm";

const slackInviteLink =
  "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";

const timelines = [
  {
    title: "Registration",
    startDateNumber: "18",
    startDateMonth: "Oct 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Hackathon Kickoff Session",
    startDateNumber: "4",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Start your 7 Day Streak for Learning Challenge",
    startDateNumber: "5",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Doubt clearing session",
    startDateNumber: "7",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Submission Day",
    startDateNumber: "10",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Result Day",
    startDateNumber: "13",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Get detailed feedback on your work",
    startDateNumber: "13-16",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  },
  {
    title: "Demo Day For Top 5 Teams",
    startDateNumber: "17",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "12:30 AM",
    startTime: "05:30 AM"
  }
];  

const EventInfo = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-3">
      <div className="bg-[#E7E8EB] p-2 rounded-xl">
        <img src={icon} alt="" className="h-8 lg:h-12" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[12px] lg:text-[18px] text-[#969696]">{title}</div>
        <div className="text-[16px] lg:text-[20px] text-[#120D26] font-semibold">
          {desc}
        </div>
      </div>
    </div>
  );
};

const EventBenefit = ({ title, desc }) => {
  return (
    <div className="text-[16px] lg:text-[20px] font-semibold">
      <div>
        {title}: <span className="text-[#969696] font-normal">{desc}</span>
      </div>
    </div>
  );
};

const TimelineCard = ({title, startDateNumber, startDateMonth, endDate, endTime, startTime, flag}) => {
  const parseDate = (day, monthYear, time) => {
    // Extract the first date from a range (e.g., "13-16" becomes "13")
    const firstDate = day.includes('-') ? day.split('-')[0] : day;

    // Assuming monthYear is like "Oct 24"
    const [month, year] = monthYear.split(" ");
    const dateString = `${firstDate} ${month} ${year} ${time} UTC`;
    return new Date(dateString);
  };

  // Create start and end date objects
  const startDate = parseDate(startDateNumber, startDateMonth, startTime);
  const endDateTime = new Date(`${endDate} ${endTime} UTC`);

  // Get the current date
  const currentDate = new Date();

  // Check if the current date is between start and end date
  const isLive = currentDate >= startDate && currentDate <= endDateTime;

  return (
    <div className="flex text-[#383838] gap-4"> 
      <div className="flex flex-col gap-2">
        <div>
          <div className="bg-[#DBEBFC] font-semibold py-1 w-[60px] text-center rounded-t-xl text-[20px]">
            {startDateNumber}
          </div>
          <div className="bg-[#EDF5FE] py-1 w-[60px] text-center rounded-b-xl text-[12px] text-[#5D5D5D]">
            {startDateMonth}
          </div>
        </div>

        <div className="grid grid-cols-2 bg-white text-white h-full">
          <div className={`${flag ? "border-r-2 border-[#0073E6]" : ""}`}>18</div>
          <div>Oct</div>
        </div>
      </div>

      <div className="flex justify-between p-4 border border-[#E2E2E2] shadow shadow-md w-full rounded-xl text-[12px]">
        <div className="flex flex-col gap-3">
          <div className="text-[16px] font-semibold">
            {title}
          </div>

          <div className="flex flex-col gap-1 text-[#5D5D5D]">
            <div>
              Start : <span>{startDateNumber} {startDateMonth}, {startTime} </span>
            </div>
            <div>
              End : <span>{endDate}, {endTime} </span>
            </div>
          </div>
        </div>

        <div>
          {isLive ? (
            <div className="flex items-center gap-1 border border-[#E2E2E2] p-2 px-3 rounded-3xl">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <div>Live</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}

const RegisterationSuccess = ({toggleSuccess}) => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-end">
        <button onClick={toggleSuccess}>✖</button>
      </div>

      <div className="text-[14px] text-center flex flex-col gap-8 items-center">
        <div className="flex justify-center">
          <img src={greenTick} alt="" className="h-10" />
        </div>

        <div className="flex flex-col gap-3 w-3/4 justify-center">
          <div className="text-[20px] font-semibold">Registration Complete!</div>
          <div>You have successfully registered for the event. You will receive invite on email shortly.</div>
        </div>

        <div>
          <button onClick={toggleSuccess} className="bg-[#24304C] text-white p-4 rounded-xl px-12">Explore More</button>
        </div>
      </div>
    </div>
  )
}

const Event1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(eventsBg1);
  const [showSuccess, setShowSuccess] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleSuccess = () => {
    setShowSuccess(!showSuccess);
  };

  const updateBackground = () => {
    if (window.innerWidth <= 768) {
      setBackground(eventsBg2);
    } else {
      setBackground(eventsBg1);
    }
  };

  useEffect(() => {
    updateBackground();

    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <div
      className="max-w-screen-2xl mx-auto flex flex-col gap-4 lg:gap-16 font-inter bg-transparent py-8 lg:py-16 text-[#120D26]"
      style={{
        backgroundImage: `url(${background}), radial-gradient(circle, #E6E7E7 1px, transparent 2px)`, // Swap the order of backgrounds
        backgroundSize: "contain, 115px 10px", // Specify sizes for each background
        backgroundPosition: "top, 0 0", // Specify positions for each background
        backgroundRepeat: "no-repeat, repeat", // Specify repeat behavior for each background
      }}      
    >
      <div className="text-[28px] lg:text-[48px] text-center font-bold px-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#041540] to-[#062677]">
          The <span className="font-restora">Most Happening Product Event</span> in Nov&apos; 2024
        </h1>
      </div>

      <div className="flex px-4 lg:px-8 xl:px-28 custom-12:px-[0px] lg:gap-8 2xl:gap-12">
        <div className="w-full lg:w-[70%] flex flex-col gap-8 lg:gap-16 rounded-xl sm:shadow-xl bg-white p-4 lg:p-8">
          <div className="flex flex-col gap-8">
            <div>
              <img
                src={hackBg}
                alt=""
                className="h-[200px] sm:h-[300px] lg:h-[457px] w-full object-cover rounded-xl"
              />
            </div>

            <div className="text-[16px] lg:text-[24px] text-[#24304C] font-bold">
            Join the Ultimate Product Management Challenge - <br /> 
            <span className="font-semibold italic">Innovate, Collaborate, and Win Big !</span> 
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3">
              <EventInfo
                icon={calendarIcon}
                title={"RUNS FROM"}
                desc={"Aug 13-15, 2024"}
              />
              <EventInfo
                icon={locationDarkIcon}
                title={"HAPPENING AT"}
                desc={"Delhi University, New Delhi"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              What is Product Management Hackathon
            </div>
            <div className="text-[#969696]">
              It&apos;s a unique, immersive program designed by Product Space
              mentors (from companies like Magicbricks, BharatPe, Ajio, Intuit,
              Moengage, Reliance Jio and more ) to provide aspiring and current
              Product Managers with practical, hands-on experience, build your
              PM skills and enhance your product portfolio.
            </div>
          </div>

          <div className="flex flex-col gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[16px] lg:text-[18px] font-medium text-[#969696]">
              <img src="" alt="" />
              <p>STAGES AND TIMELINES</p>
            </div>
            <div className="flex flex-col gap-8 text-[#969696]">
              {timelines.map((event, index) => (
                <TimelineCard 
                  key={index}
                  title={event.title} 
                  startDateNumber={event.startDateNumber} 
                  startDateMonth={event.startDateMonth} 
                  endDate={event.endDate} 
                  endTime={event.endTime} 
                  startTime={event.startTime} 
                  flag={index == timelines.length - 1 ? 0 : 1}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Who Should Join ?
            </div>
            <ul className="flex flex-col gap-8 font-semibold list-disc ml-8">
              <li>
                Current PMs & APMs{" "}
                <span className="font-normal text-[#969696]">
                  seeking to upskill and tackle new challenges.
                </span>
              </li>
              <li>
                Aspiring PMs{" "}
                <span className="font-normal text-[#969696]">
                  looking to break into PM role with practical experience.
                </span>
              </li>
              <li>
                Recent Graduates & MBA Students{" "}
                <span className="font-normal text-[#969696]">
                  seeking to upskill and tackle new challenges.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Why Participate ?
            </div>
            <ul className="flex flex-col gap-8 font-semibold list-disc ml-8">
              <li>
                Solve Real-World Problems: {" "}
                <span className="font-normal text-[#969696]">
                  Tackle industry challenges provided by leading companies, offering you hands-on experience that goes beyond theory.
                </span>
              </li>
              <li>
                Gain Expert Mentorship: {" "}
                <span className="font-normal text-[#969696]">
                Collaborate with top product leaders who will guide and mentor you throughout the event, helping you sharpen your ideas.
                </span>
              </li>
              <li>
                Network with Industry Professionals: {" "}
                <span className="font-normal text-[#969696]">
                Meet like-minded participants, product experts, and potential employers who can accelerate your career.
                </span>
              </li>
              <li>
                Earn Recognition & Prizes: {" "}
                <span className="font-normal text-[#969696]">
                Stand out with innovative solutions and earn exciting rewards, including cash prizes, certificates, and potential job or internship offers.
                </span>
              </li>
              <li>
                Boost Your Portfolio: {" "}
                <span className="font-normal text-[#969696]">
                Add this high-impact experience to your resume and demonstrate your ability to think, innovate, and execute in real-world situations.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Exclusive Benefits:
            </div>
            <div className="flex flex-col gap-3">
              <EventBenefit
                title={"💼 Practical Experience"}
                desc={
                  "Work on real-world projects across various domains and industries."
                }
              />
              <EventBenefit
                title={"📂 Portfolio Building"}
                desc={
                  "Finish with a strong, experience-backed portfolio that will impress recruiters."
                }
              />
              <EventBenefit
                title={"🤝 Community Support"}
                desc={
                  "Receive feedback and assistance from peers and our product community."
                }
              />
              <EventBenefit
                title={"📈 Skill Mastery"}
                desc={
                  "Develop and refine over 15 critical PM skills throughout comprehensive projects."
                }
              />
              <EventBenefit
                title={"🎓 Certified by Product Space"}
                desc={
                  "Earn a verified certificate showcasing your expertise and dedication."
                }
              />
              <EventBenefit
                title={"🌐 Networking Opportunities"}
                desc={"Connect with peers and industry professionals."}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Judges
            </div>
            <div className="flex gap-6 text-[12px] lg:text-[18px] lg:gap-8">
              <div className="flex flex-col items-center gap-3 font-semibold">
                <img src={judge1} alt="" className="h-16 lg:h-28 rounded-full" />
                <p>Soni Vora</p>
              </div>
              <div className="flex flex-col items-center gap-3 font-semibold">
                <img src={judge2} alt="" className="h-16 lg:h-28 rounded-full" />
                <p>Pamit Anand</p>
              </div>
              <div className="flex flex-col items-center gap-3 font-semibold">
                <img src={judge3} alt="" className="h-16 lg:h-28 rounded-full" />
                <p>Arun Nandewal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Program Guidelines:
            </div>
            <ul className="flex flex-col gap-8 list-disc ml-8">
              <li>Complete all deliverables and submit by 25th August 2024.</li>
              <li>
                Primary submission format has to be PDF only. If you&apos;d like
                to attach anything else, feel free to add links to your pdf.
              </li>
              <li>
                Write down your process and approach for each phase (word limit:
                500-700 words per section)..
              </li>
              <li>
                Ask your queries in the #general channel of our{" "}
                <a
                  href="https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email"
                  target="_blank"
                  className="underline"
                >
                  Slack community
                </a>
                .
              </li>
              <li>
                You&apos;ll only be eligible for the certificate, if your
                overall score is at least 70%.
              </li>
              <li>
                Personalized mentor feedback and assistance is provided to
                cohort members only.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
                Detailed Problem Statement and Guidelines
            </div>
            <a 
                href="https://theproductspace.notion.site/Product-Space-Live-PM-Project-1-d2af60c726164200a4c0f89f9fb8134a" 
                className="flex underline gap-2 items-center text-[#FFA000] font-semibold"
                target="_blank"
            >
                <img src={linkIcon} alt="" className="h-5" />
                <p>Notion Link</p>
            </a>
          </div>


          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Event Agenda
            </div>
            <div className="flex flex-col gap-4 text-[#969696]">
              <div>1. Register for the Live PM Project.</div>
              <div>
                2. Start your project. Join our Slack community for support and
                collaboration.
              </div>
              <div>3. Submit your project and get it evaluated by mentors.</div>
              <div>
                4. Earn your certificate of project completion and achievement.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Prizes
            </div>
            <div className="flex flex-col gap-4 text-[#969696]">
              <div>✨ Amazon voucher of worth Rs. 1000</div>
              <div>🤝 1-1 call with Product Space Mentors</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Find us on
            </div>
            <div className="flex gap-2 lg:gap-5">
              <a href="https://www.linkedin.com/company/theproductspace/" target="_blank" className="shadow shadow-xl rounded-xl p-2">
                <img src={linkedInIcon} alt="" className="h-8 lg:h-12" />
              </a>
              <a href="https://theproductspace.substack.com/" target="_blank" className="shadow shadow-xl rounded-xl p-2">
                <img src={substackIcon} alt="" className="h-8 lg:h-12" />
              </a>
              <a href={slackInviteLink} target="_blank" className="shadow shadow-xl rounded-xl p-2">
                <img src={slackIcon} alt="" className="h-8 lg:h-12" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[18px] lg:text-[20px] font-semibold">
            <div>
              💁🏻 Have questions? Reach out to us on Slack, and we&apos;ll be
              happy to assist you!
            </div>
            <a
              href={slackInviteLink}
              target="_blank"
              className="underline text-[#FFA600]"
            >
              Join Slack Community
            </a>
          </div>

          <FaqEvents />
        </div>

        <div className="hidden lg:flex w-[30%] flex-col">
          <div className="flex flex-col gap-4 bg-white shadow shadow-lg rounded-xl p-8">
            <div className="flex items-start justify-between">
              <img
                src={hackathonImg}
                alt="img"
                className="rounded-xl h-[84px] w-[84px]"
              />
              <div className="shadow-xl p-3 rounded-xl">
                <img src={shareIcon} alt="share option" />
              </div>
            </div>

            <div className="text-[28px] font-bold">Product Hackathon</div>

            <div className="flex flex-col gap-2 text-[#969696] font-semibold">
              <div className="flex gap-2 items-center">
                <img src={timeIcon} alt="" className="h-5" />
                <p>7 PM . Aug 13, 2024</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={locationIcon} alt="" className="h-5" />
                <p>Delhi University, New Delhi</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg">
                Interview Session
              </div>
              <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg">
                Open
              </div>
              <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg">
                Live
              </div>
            </div>

            <div className="">
              <button onClick={togglePopup} className="flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white ">
                <p className="text-[20px] font-medium">Register Now</p>
                <img src={arrowIcon} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Register Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <HackathonRegistrationForm togglePopup={togglePopup} setShowSuccess={setShowSuccess} />
        </div>
      )}
      
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <RegisterationSuccess toggleSuccess={toggleSuccess} />
        </div>
      )}

    </div>
  );
};

export default Event1;
