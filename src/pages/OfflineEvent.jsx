import { useEffect, useRef, useState } from "react";
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
import clockIcon from "../assets/clock1.svg";
import greenTick from "../assets/tick-green.svg";
import hackBg from "../assets/offline-event-bg.svg";
import eventsBg1 from "../assets/events-bg.png";
import eventsBg2 from "../assets/events-bg.svg";

// import psMeetup1 from "../assets/ps-meetup-1.jpg";
import psMeetup2 from "../assets/ps-meetup-2.jpeg";
// import psMeetup3 from "../assets/ps-meetup-3.HEIC";

import magicbricks from "../assets/magicbricks-logo.png";
import wexa from "../assets/wexa.svg";
import inmobi from "../assets/inmobi.svg";

import eventFlow1 from "../assets/event-flow1.svg";
import eventFlow2 from "../assets/event-flow2.svg";
import eventFlow3 from "../assets/event-flow3.svg";
import eventFlow4 from "../assets/event-flow4.svg";

import pamit from "../assets/pamit1.svg";
import rumit from "../assets/rumit1.svg";
import kiran from "../assets/kiran.svg";

import GenAiForPMRegisteration from "../components/GenAiForPMRegisteration";
import { Helmet } from "react-helmet-async";
import OfflineEventRegisterForm from "../components/OfflineEventRegisterForm";
import ReviewOfflineEvent from "../components/ReviewOfflineEvent";
import FaqOfflineEvent from "../components/FaqOfflineEvents";

const slackInviteLink =
  "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";
const whatsappInviteLink = "https://wa.me/917219542525";
const eventDate = new Date("2024-12-10T23:59:59");

const EventInfo = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-3 w-full md:w-1/2 items-center">
      <div className="bg-[#E7E8EB] p-2 rounded-xl">
        <img src={icon} alt="" className="h-8 lg:h-10" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[16px] lg:text-[18px] text-[#7f7f7f]">{title}</div>
        <div className="text-[16px] lg:text-[18px] text-[#120D26] font-semibold">
          {desc}
        </div>
      </div>
    </div>
  );
};

const EventSchedule = () => {
  const data = [
    {
      time: "10 mins",
      topic: "Product Management Foundations",
      speaker: ["Pamit"],
    },
    ...Array(9).fill({
      time: "30 mins",
      topic: "Product Management Foundations",
      speaker: ["Pamit"],
    }),
  ];

  return (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-gray-400 w-full max-w-5xl">
        <thead className="rounded-t-xl">
          <tr className="bg-[#24304C] text-white text-[10px] md:text-[14px] text-center">
            <th className="border border-gray-400 px-2 p-4 md:px-4">Time</th>
            <th className="border border-gray-400 px-2 p-4 md:px-4">
              Topic Name
            </th>
            <th className="border border-gray-400 px-2 p-4 md:px-4">
              Speaker Name
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-50 text-center text-[10px] md:text-[14px]"
            >
              <td className="border border-gray-200 px-2 p-4 md:px-4 font-bold">
                {row.time}
              </td>
              <td className="border border-gray-200 px-2 p-4 md:px-4 font-bold">
                {row.topic}
              </td>
              <td className="border border-gray-200 px-2 p-4 md:px-4">
                <ul className="">
                  {row.speaker.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <div className="text-[20px] lg:text-[24px] font-semibold">
            You&apos;ve successfully registered for the Offline Event
          </div>
          <div className="text-[14px] lg:text-[16px]">
            You will receive email on the next steps shortly
          </div>
        </div>

        {/* <button className="bg-[#24304C] text-white p-4 text-[16px] lg:text-[18px] rounded-xl px-4 lg:px-12">
          <a
            href="https://chat.whatsapp.com/GyOBDk1JVJvArbj7wnVb3i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full h-full"
          >
            Join Our Community for Active Updates
          </a>
        </button> */}
      </div>
    </div>
  );
};

const Speakers = ({ title, name, desc, company, profile }) => {
  return (
    <div className="flex flex-col justify-between bg-[#00C1FD1A] text-[#00C1FD] text-[16px] md:text-[22px] rounded-xl">
      <div className="p-6">
        {title[0]} <span className="font-bold">{title[1]}</span> {title[2]}
      </div>

      <div className="flex pl-6 items-center justify-between">
        <div className="flex flex-col gap-1 text-[10px] text-[#24304C]">
          <div className="text-[16px] font-black">{name}</div>
          <div>{desc}</div>
          <div>
            <img src={company} alt="" className="h-4" />
          </div>
        </div>

        <div>
          <img src={profile} alt="" className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
};

const MeetupGallery = () => {
  const images = [psMeetup2, psMeetup2, psMeetup2];

  return (
    <div className="flex gap-4 overflow-scroll">
      {/* Carousel scrollable */}
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-[240px] w-[330px] md:w-[360px] flex-shrink-0 overflow-hidden"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

const OfflineEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(eventsBg1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPastEventDate, setIsPastEventDate] = useState(false);
  const sectionRef = useRef(null);

  const scrollToForm = () => {
    console.log("hello");
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  useEffect(() => {
    const checkEventDate = () => {
      const currentDate = new Date();
      setIsPastEventDate(currentDate >= eventDate);
    };

    checkEventDate(); // Run the check initially

    const interval = setInterval(checkEventDate, 21600000); // Check every 6 hours

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 lg:gap-16 font-inter bg-transparent py-4 lg:py-12 text-[#120D26]">
      <div className="flex justify-center text-[28px] lg:text-[48px] text-center font-bold px-4 lg:px-12">
        <div className="relative">
          <img
            src={hackBg}
            alt=""
            className="h-[200px] sm:h-[400px] lg:h-[627px] w-full object-cover rounded-xl"
          />

          <button
            onClick={toggleSharePopup}
            className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-white p-2 md:p-3 shadow-lg rounded-xl"
          >
            <img src={shareIcon} alt="Share Icon" />
          </button>
        </div>
      </div>

      <div className="flex lg:px-8 xl:px-28 lg:gap-8 2xl:gap-12">
        <div className="w-full lg:w-[70%] flex flex-col gap-10 lg:gap-16 rounded-xl sm:shadow-xl bg-white p-4 lg:p-8">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col lg:flex-row justify-between gap-3">
              <EventInfo
                icon={calendarIcon}
                title={"Event Date"}
                desc={"Sat, Dec 07, 2024"}
              />
              <EventInfo
                icon={clockIcon}
                title={"Event Time"}
                desc={"11 AM onwards"}
              />
              <EventInfo
                icon={locationDarkIcon}
                title={"Location"}
                desc={"Hyderabad"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[22px] font-semibold">
              Explore how AI is transforming workflows and driving innovation in
              product management.
            </div>

            <ul className="flex flex-col gap-2 lg:gap-5 font-normal text-[#7f7f7f] list-disc ml-4">
              <li>Understanding Generative AI and its applications.</li>
              <li>Actionable strategies for product teams.</li>

              <li>Networking with PM professionals.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-[20px] lg:text-[28px] font-semibold">
                Event Flow Highlights
              </div>

              <div className="text-[16px] lg:text-[22px]">
                Here's a quick look at what to expect..
              </div>
            </div>
            
            {/* Event Flow */}
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="text-[#FFA000] flex gap-3 items-center bg-gradient-to-tr from-[#FFA0004D] to-white rounded-xl p-4 py-6 w-full md:w-2/3">
                <img src={eventFlow1} alt="" className="h-12 md:h-16" />
                <div>
                  <div className="text-[20px] md:text-[24px] font-semibold">Panel discussion</div>
                  <div className="text-[16px] md:text-[18px]">with product leaders</div>
                </div>
              </div>
              <div className="text-[#FE6D38] flex gap-3 items-center bg-gradient-to-tr from-[#FE6D384D] to-white rounded-xl p-4 py-6 w-full md:w-2/3">
                <img src={eventFlow2} alt="" className="h-12 md:h-16" />
                <div>
                  <div className="text-[20px] md:text-[24px] font-semibold">Networking</div>
                  <div className="text-[16px] md:text-[18px]">Open networking session</div>
                </div>
              </div>
              <div className="text-[#00C1FD] flex gap-3 items-center bg-gradient-to-tr from-[#00C1FD4D] to-white rounded-xl p-4 py-6 w-full md:w-2/3">
                <img src={eventFlow3} alt="" className="h-12 md:h-16" />
                <div>
                  <div className="text-[20px] md:text-[24px] font-semibold">Interactive Q&A</div>
                  <div className="text-[16px] md:text-[18px]">session</div>
                </div>
              </div>
              <div className="text-[#00858C] flex gap-3 items-center bg-gradient-to-tr from-[#00858C4D] to-white rounded-xl p-4 py-6 w-full md:w-2/3">
                <img src={eventFlow4} alt="" className="h-12 md:h-16" />
                <div>
                  <div className="text-[20px] md:text-[24px] font-semibold">Product challenge</div>
                  <div className="text-[16px] md:text-[18px]">Exciting challenges</div>
                </div>
              </div>
              <div className="font-bold">
                Any many more...
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Meet our panelists
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Speakers
                title={[
                  "Kiran brings technical expertise with",
                  "product strategy, driving innovations in AI, IoT, and SaaS.",
                  "",
                ]}
                name={"Kiran Pasavedala"}
                desc={"Founder and CEO, Wexa.ai"}
                company={wexa}
                profile={kiran}
              />
              <Speakers
                title={[
                  "Pamit has built and scaled",
                  "multiple internet businesses",
                  "across India, Singapore, and London.",
                ]}
                name={"Pamit Anand"}
                desc={"Sr. VP & Head of Product (20+ years)"}
                company={magicbricks}
                profile={pamit}
              />
              <Speakers
                title={[
                  "Rumit brings a unique blend of",
                  "technical expertise in GenAI",
                  "and product strategy experience.",
                ]}
                name={"Rumit Anand"}
                desc={"Director of Product (15+ years)"}
                company={inmobi}
                profile={rumit}
              />
            </div>
          </div>

          <div ref={sectionRef} id="register-form">
            <OfflineEventRegisterForm setShowSuccess={setShowSuccess} />
          </div>

          {/* Past Events */}
          <div className="flex flex-col gap-4">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Relive Our Past Events
            </div>

            <div className="flex gap-4 overflow-scroll">
              <MeetupGallery />
            </div>
          </div>

          <div>
            <ReviewOfflineEvent />
          </div>

          <FaqOfflineEvent />
        </div>

        <div className="hidden lg:flex w-[30%] flex-col">
          <div className="flex flex-col gap-1 bg-white shadow-[0_5px_25px_rgba(0,0,0,0.1)] rounded-xl p-8">
            <div className="flex justify-between items-center">
              <div>{/* <img src={uberLogo} alt="" /> */}</div>
              <div>
                <button
                  onClick={toggleSharePopup}
                  className="p-3 shadow shadow-lg rounded-xl"
                >
                  <img src={shareIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[28px] font-bold">
                The future of Product Management with AI
              </div>

              <div className="flex flex-col gap-2 text-[#7f7f7f] font-semibold">
                <div className="flex gap-2 items-center">
                  <img src={timeIcon} alt="" className="h-5" />
                  <p>11 AM - Dec 07, 2024</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={locationIcon} alt="" className="h-5" />
                  <p>Hyderabad</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="bg-[#E7F7FC] border border-[#013B4D3D] p-2 px-3 rounded-lg">
                  Offline Event
                </div>
              </div>

              <div className="">
                <button
                  onClick={scrollToForm}
                  disabled={isPastEventDate}
                  className={`flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white ${
                    isPastEventDate ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <p className="text-[20px] font-medium">Register Now</p>
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
          <GenAiForPMRegisteration
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

export default OfflineEvent;
