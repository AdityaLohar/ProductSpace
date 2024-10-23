import React, { useEffect, useState } from "react";
import arrowIcon from "../assets/right-arrow.svg";
import locationIcon from "../assets/location.svg";
import copyIcon from "../assets/copy.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import emailIcon from "../assets/email.svg";
import facebookIcon from "../assets/facebook.svg";
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
import person1 from "../assets/demoPerson1.svg";
import person2 from "../assets/demoPerson2.svg";
import person3 from "../assets/demoPerson3.svg";
import submissionImg1 from "../assets/submission1.svg";
import submissionImg2 from "../assets/submission2.svg";
import uberLogo from "../assets/uber-logo.svg";
import HackathonRegistrationForm from "./HackathonRegistrationForm";
import EventsStickyBar from "./EventsStickyBar";

const slackInviteLink =
  "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";
const whatsappInviteLink =
  "https://chat.whatsapp.com/FliRxZnuOz04AbZRXDWsZo";

const timelines = [
  {
    title: "Registration",
    startDateNumber: "24",
    startDateMonth: "Oct 24",
    endDate: "3 Nov 24",
    endTime: "11:59 PM",
    startTime: "",
  },
  {
    title: "Hackathon Kickoff Session",
    startDateNumber: "4",
    startDateMonth: "Nov 24",
    endDate: "4 Nov 24",
    endTime: "",
    startTime: "",
  },
  {
    title: "Start your 7 Day Streak for Learning Challenge",
    startDateNumber: "5",
    startDateMonth: "Nov 24",
    endDate: "11 Nov 24",
    endTime: "",
    startTime: "9-11 AM",
  },
  {
    title: "Doubt clearing session",
    startDateNumber: "7",
    startDateMonth: "Nov 24",
    endDate: "7 Nov 24",
    endTime: "",
    startTime: "",
  },
  {
    title: "Submission Day",
    startDateNumber: "",
    startDateMonth: "",
    endDate: "10 Nov 24",
    endTime: "",
    startTime: "",
  },
  {
    title: "Result Day",
    startDateNumber: "13",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "",
    startTime: "",
  },
  {
    title: "Get detailed feedback on your work",
    startDateNumber: "13",
    startDateMonth: "Nov 24",
    endDate: "16 Nov 24",
    endTime: "",
    startTime: "",
  },
  {
    title: "Demo Day For Top 5 Teams",
    startDateNumber: "17",
    startDateMonth: "Nov 24",
    endDate: "28 Oct 24",
    endTime: "",
    startTime: "",
  },
];

const submissions = [
  {
    title: "Croma Product Teardown",
    image: submissionImg1,
    url: "https://drive.google.com/file/d/10Ya0gDTQDjG_sQdc9kkMn71_qEJZkKKF/view",
  },
  {
    title: "Improve Customer Purchase and Satisfaction",
    image: submissionImg2,
    url: "https://drive.google.com/file/d/1oiEX8ON6DVjotX20SeKLfoYE0mnyFNz-/view",
  },
];

const EventInfo = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-3 w-full md:w-1/2">
      <div className="bg-[#E7E8EB] p-2 rounded-xl">
        <img src={icon} alt="" className="h-8 lg:h-12" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[12px] lg:text-[18px] text-[#7f7f7f]">{title}</div>
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
        {title}: <span className="text-[#7f7f7f] font-normal">{desc}</span>
      </div>
    </div>
  );
};

const TimelineCard = ({
  title,
  startDateNumber,
  startDateMonth,
  endDate,
  endTime,
  startTime,
  flag,
}) => {
  const parseDate = (day, monthYear, time) => {
    // Extract the first date from a range (e.g., "13-16" becomes "13")
    const firstDate = day.includes("-") ? day.split("-")[0] : day;

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
    <div className="flex text-[#0A244B] gap-4">
      <div className="flex flex-col gap-2">
        <div>
          <div className="bg-[#C3F1FF] font-semibold py-1 w-[60px] text-center rounded-t-xl text-[20px]">
            {startDateNumber}
          </div>
          <div className="bg-[#E1F8FF] py-1 w-[60px] text-center rounded-b-xl text-[12px] text-[#2A3B64]">
            {startDateMonth}
          </div>
        </div>

        <div className="grid grid-cols-2 bg-white text-white h-full">
          <div className={`${flag ? "border-r-2 border-[#0073E6]" : ""}`}>
            18
          </div>
          <div>Oct</div>
        </div>
      </div>

      <div className="flex justify-between p-4 border border-[#E2E2E2] shadow shadow-md w-full rounded-xl text-[12px]">
        <div className="flex flex-col gap-3">
          <div className="text-[16px] font-semibold">{title}</div>

          <div className="flex flex-col gap-1 text-[#5D5D5D]">
            <div>
              Start :{" "}
              <span>
                {startDateNumber} {startDateMonth}, {startTime}{" "}
              </span>
            </div>
            <div>
              End :{" "}
              <span>
                {endDate}, {endTime}{" "}
              </span>
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
  );
};

const PreviousSubmissionCard = ({ title, image, url }) => {
  return (
    <div className="flex flex-col justify-between gap-4 items-center">
      <div className="flex flex-col gap-2">
        <div>
          <img src={image} alt="" />
        </div>

        <div className="text-18px] lg:text-[20px] font-semibold">{title}</div>
      </div>

      <div className="w-full">
        <a
          href={url}
          target="_blank"
          className="flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white "
        >
          <p className="text-[14px] lg:text-[16px] font-medium">View more</p>
          <img src={arrowIcon} alt="icon" />
        </a>
      </div>
    </div>
  );
};

const RegisterationSuccess = ({ toggleSuccess }) => {
  return (
    <div className="bg-white p-6 pb-12 mx-4 md:mx-0 rounded-xl">
      <div className="flex justify-end">
        <button onClick={toggleSuccess}>✖</button>
      </div>

      <div className="text-[14px] text-center flex flex-col gap-8 items-center">
        <div className="flex justify-center">
          <img src={greenTick} alt="" className="h-10" />
        </div>

        <div className="flex flex-col gap-3 lg:w-3/4 justify-center">
          <div className="text-[20px] font-semibold">
            You&apos;re Registered for the Product Management Hackathon!
          </div>
          <div>
            Thank you for registering. You will receive event details on email
            shortly.
          </div>
        </div>

        <div>
          <a
            href={whatsappInviteLink}
            target="_blank"
            onClick={toggleSuccess}
            className="bg-[#24304C] text-white p-4 rounded-xl px-12"
          >
            Join Hackathon Group
          </a>
        </div>
      </div>
    </div>
  );
};

const Event1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(eventsBg1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSharePopup = () => {
    setCopied(false);
    setIsShareOpen(!isShareOpen);
  };
  const currentUrl = window.location.href;

  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "instagram":
        // Instagram doesn't allow direct sharing via URL; users have to share manually on their app
        alert("Please share this link manually on Instagram.");
        return;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        break;
      case "email":
        shareUrl = `mailto:?subject=Check this out&body=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  // For checking scroll & displaying sticky bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition > (4 * screenHeight) / 5) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
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
          The <span className="font-libre">Most Happening Product Event</span>{" "}
          in Nov&apos; 2024
        </h1>
      </div>

      <div className="flex px-4 lg:px-8 xl:px-28 lg:gap-8 2xl:gap-12">
        <div className="w-full lg:w-[70%] flex flex-col gap-8 lg:gap-16 rounded-xl sm:shadow-xl bg-white p-4 lg:p-8">
          <div className="flex flex-col gap-8">
            <div className="relative">
              <img
                src={hackBg}
                alt=""
                className="h-[200px] sm:h-[300px] lg:h-[507px] w-full object-cover rounded-xl"
              />
              <button
                onClick={toggleSharePopup}
                className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-white p-2 md:p-3 shadow-lg rounded-xl"
              >
                <img src={shareIcon} alt="Share Icon" />
              </button>
            </div>

            <div className="text-[16px] lg:text-[24px] text-[#24304C] font-bold">
              Join the Ultimate Product Management Challenge - <br />
              <span className="font-semibold font-libre italic">
                Innovate, Collaborate, and Win Big !
              </span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3">
              <EventInfo
                icon={calendarIcon}
                title={"RUNS FROM"}
                desc={"Nov 4-17, 2024"}
              />
              <EventInfo
                icon={locationDarkIcon}
                title={"HAPPENING AT"}
                desc={"Online"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              What is Product Management Hackathon
            </div>
            <div className="text-[#7f7f7f]">
            It&apos;s a unique, immersive program designed by Product Space mentors (from companies like Microsoft, BharatPe, Ajio, Intuit, Moengage, Jio and more) to provide aspiring and current Product Managers with practical, hands-on experience, build your PM skills and enhance your product portfolio.
            </div>
          </div>

          <div className="flex flex-col gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[16px] lg:text-[18px] font-medium text-[#7f7f7f]">
              <img src="" alt="" />
              <p>STAGES AND TIMELINES</p>
            </div>
            <div className="flex flex-col gap-8 text-[#7f7f7f]">
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

            <ul className="flex flex-col gap-8 font-semibold list-disc ml-4 lg:ml-8">
                <li>
                  Current PMs & APMs{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    seeking to upskill and tackle new challenges.
                  </span>
                </li>
                
                <li>
                  Aspiring PMs{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    looking to break into PM role with practical experience.
                  </span>
                </li>

                <li>
                  Recent Graduates & MBA Students{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    seeking to upskill and tackle new challenges.
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
                <img
                  src={judge1}
                  alt=""
                  className="h-16 lg:h-28 rounded-full"
                />
                <p>Soni Vora</p>
              </div>
              <div className="flex flex-col items-center gap-3 font-semibold">
                <img
                  src={judge2}
                  alt=""
                  className="h-16 lg:h-28 rounded-full"
                />
                <p>Pamit Anand</p>
              </div>
              <div className="flex flex-col items-center gap-3 font-semibold">
                <img
                  src={judge3}
                  alt=""
                  className="h-16 lg:h-28 rounded-full"
                />
                <p>Arun Nandewal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Previous submissions
            </div>

            <div className="grid grid-cols-2 gap-3">
              {submissions.map((submission, index) => (
                <PreviousSubmissionCard
                  key={index}
                  title={submission.title}
                  image={submission.image}
                  url={submission.url}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Prizes
            </div>

            <ul className="flex flex-col gap-4 text-[#7f7f7f] list-disc ml-4 lg:ml-8">
              <li>
                Top 2 - upto Rs. 15000* worth voucher + 1 sessions [1-1 connect for 30 mins] + certificate of winning and top 1% + get featured on PS website
              </li>
              <li>
                Top 3 - upto Rs. 12000* worth voucher + 1 sessions [1-1 connect for 15 mins] + certificate of top 5%
              </li>
              <li>
                Certificate of participation for all
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Find us on
            </div>
            <div className="flex gap-2 lg:gap-5">
              <a
                href="https://www.linkedin.com/company/theproductspace/"
                target="_blank"
                className="shadow shadow-xl rounded-xl p-2"
              >
                <img src={linkedInIcon} alt="" className="h-8 lg:h-12" />
              </a>
              <a
                href="https://theproductspace.substack.com/"
                target="_blank"
                className="shadow shadow-xl rounded-xl p-2"
              >
                <img src={substackIcon} alt="" className="h-8 lg:h-12" />
              </a>
              <a
                href={slackInviteLink}
                target="_blank"
                className="shadow shadow-xl rounded-xl p-2"
              >
                <img src={slackIcon} alt="" className="h-8 lg:h-12" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[18px] lg:text-[20px] font-semibold">
            <div>
              💁🏻 Have questions? Reach out to us on our Hackathon Community, and we&apos;ll be
              happy to assist you!
            </div>
            <a
              href={whatsappInviteLink}
              target="_blank"
              className="underline text-[#FFA600]"
            >
              Join Hackathon Group
            </a>
          </div>

          <FaqEvents />
        </div>

        <div className="hidden lg:flex w-[30%] flex-col">
          <div className="flex flex-col gap-4 bg-white shadow shadow-lg rounded-xl p-8 sticky top-24">
            <div className="flex justify-between items-center">
              <div>
                <img src={uberLogo} alt="" />
              </div>
              <div>
                <button onClick={toggleSharePopup} className="p-3 shadow shadow-lg rounded-xl">
                  <img src={shareIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[28px] font-bold">Product Hackathon</div>

              <div className="flex flex-col gap-2 text-[#7f7f7f] font-semibold">
                <div className="flex gap-2 items-center">
                  <img src={timeIcon} alt="" className="h-5" />
                  <p>Nov 4, 2024</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={locationIcon} alt="" className="h-5" />
                  <p>Online</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg">
                  Live
                </div>
              </div>

              <div className="">
                <button
                  onClick={togglePopup}
                  className="flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white "
                >
                  <p className="text-[20px] font-medium">Join Waitlist</p>
                  <img src={arrowIcon} alt="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <HackathonRegistrationForm
            togglePopup={togglePopup}
            setShowSuccess={setShowSuccess}
          />
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <RegisterationSuccess toggleSuccess={toggleSuccess} />
        </div>
      )}

      {showBottomBar && <EventsStickyBar togglePopup={togglePopup} />}

      {/* Popup for sharing options */}
      {isShareOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="w-[80%] lg:w-[20%] bg-white border border-gray-300 shadow-lg rounded-lg py-4 z-30">
            <div className="text-center font-semibold text-[20px] pb-6">
              Share with friends
            </div>

            <div className="flex flex-col gap-2 px-4">
              <button
                onClick={() => handleShare("copy")}
                className="flex items-center justify-start gap-5 pl-3 pb-2"
              >
                <img src={copyIcon} alt="Copy Link" />
                <p>{copied ? "Link Copied" : "Copy Link"}</p>
              </button>

              <button
                onClick={() => handleShare("facebook")}
                className="flex items-center justify-start gap-2"
              >
                <img src={facebookIcon} alt="Facebook" />
                <p>Share to Facebook</p>
              </button>
              <button
                onClick={() => handleShare("email")}
                className="flex items-center justify-start gap-2"
              >
                <img src={emailIcon} alt="Email" />
                <p>Share via Email</p>
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className="flex items-center justify-start gap-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
                <p>Share to WhatsApp</p>
              </button>
            </div>

            <div className="mx-3">
              <button
                onClick={toggleSharePopup}
                className="w-full rounded-xl text-center p-3 bg-[#EEEEEF]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event1;
