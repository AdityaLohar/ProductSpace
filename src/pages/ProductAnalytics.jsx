import React, { useEffect, useState } from "react";
import arrowIconDark from "../assets/right-arrow-dark.svg";
import arrowIcon from "../assets/right-arrow.svg";
import locationIcon from "../assets/location.svg";
import copyIcon from "../assets/copy.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import whatsappIcon1 from "../assets/whatsapp1.svg";
import emailIcon from "../assets/email.svg";
import facebookIcon from "../assets/facebook.svg";
import locationDarkIcon from "../assets/location-dark.svg";
import clockIcon from "../assets/clock1.svg";
import shareIcon from "../assets/share.svg";
import calendarIcon from "../assets/calendar.svg";
import greenTick from "../assets/tick-green.svg";
import pmAnalyticsBanner from "../assets/pmAnalyticsBanner.svg";
import eventsBg1 from "../assets/events-bg.png";
import eventsBg2 from "../assets/events-bg.svg";
import judge1 from "../assets/peeyush.jpeg";
import judge2 from "../assets/pamit.svg";
import judge3 from "../assets/arun.svg";
import liveSticker from "../assets/live-sticker.svg";

import AnalyticsRegistrationForm from "../components/AnalyticsRegistrationForm";
import ReviewAnalytics from "../components/ReviewAnalytics";
import referIcon from "../assets/refer-and-earn.svg";
import FaqAnalytics from "../components/FaqAnalytics";
import AnalyticsCertificate from "./AnalyticsCertificate";
import icon1 from "../assets/ai-pm-icon1.svg";
import icon2 from "../assets/ai-pm-icon2.svg";
import icon3 from "../assets/ai-pm-icon3.svg";
import icon4 from "../assets/ai-pm-icon4.svg";
import icon5 from "../assets/ai-pm-icon5.svg";

import aitool1 from "../assets/aitool1.svg";
import aitool2 from "../assets/aitool2.svg";
import aitool3 from "../assets/aitool3.svg";
import sql from "../assets/sql.svg";
import amplitude from "../assets/amplitude.svg";
import mixpanel from "../assets/mixpanel.svg";

import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import slack from "../assets/slack.svg";
import twitter from "../assets/twitter.svg";

import moengage from "../assets/moengage-logo.png";
import reachifyMe from "../assets/reachify-me-logo.svg";
import microsoft from "../assets/microsoft.svg";
import magicbricks from "../assets/magicbricks-logo.png";
import GenAiCurriculum from "../components/GenAiCurriculum";
import AnalyticsCuricullum from "../components/AnalyticsCuricullum";
import AnalyticsSticky from "../components/AnalyticsSticky";

import videoThumbnail from "../assets/pm-workshop-thumbnail.svg";

const slackInviteLink =
  "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";
const whatsappInviteLink = "https://chat.whatsapp.com/BohDACWS79i7D42OO1iDT9";
const eventDate = new Date("2024-12-20T23:59:59");

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
          <div className="text-[20px] md:text-[24px] font-semibold">
            You&apos;re Registered for the Product Analytics Event!
          </div>
          <div className="text-[14px] md:text-[16px]">
            Thank you for registering! You will receive event details on email
            shortly.
          </div>
        </div>

        <div>
          <a
            href={whatsappInviteLink}
            target="_blank"
            onClick={toggleSuccess}
            className="bg-[#24304C] text-white p-4 text-[16px] md:text-[18px] rounded-xl px-12"
          >
            Join Event Group
          </a>
        </div>
      </div>
    </div>
  );
};

const ProgressBarWithDots = () => {
  const steps = [
    "Gain practical skills in analytics with real-world examples",
    "Hands-on learning with trending analytics tools",
    "Certificate to showcase on LinkedIn or resumes",
    "Premium resources, templates, guides",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="text-[20px] lg:text-[28px] font-bold text-center lg:text-start text-[#24304C]">
        Why Attend?
      </div>

      {/* Progress Bar and Dots */}
      <div
        className="hidden md:grid"
        style={{
          position: "relative",
          marginTop: "20px",
          gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Progress Bar */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(12.5% - 4px)", // Align with the first dot
            width: "calc(75% + 4px)", // Extend between the first and last dots
            height: "2px",
            backgroundColor: "#d3d3d3",
            zIndex: 0,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              backgroundColor: "#00C1FD",
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>

        {/* Dots */}
        {steps.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index <= currentStep ? "#00C1FD" : "#d3d3d3",
              margin: "0 auto", // Centers the dot within its grid cell
              zIndex: 1,
            }}
          />
        ))}
      </div>

      {/* Step Content */}
      <div
        className="grid grid-cols-1 md:grid-cols-4 space-y-3 md:space-y-0 md:space-x-3"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        {steps.map((step, index) => (
          <div
            className={`${
              index <= currentStep || window.innerWidth < 768
                ? "bg-gradient-to-r from-[#1eE7FF] via-[#00C1FD] to-[#00C1FD] shadow-[0px_4px_35.6px_0px_#7BD5FF] border border-[#00C1FD] text-white"
                : "bg-transparent border-transparent text-black"
            } p-3 rounded-lg transition-all duration-100 ease-in-out font-bold py-12`}
            key={index}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

// import psVideo from "../assets/youtube-thumbnail.svg";

const VideoComponent = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/IUPVhnNojYE?si=ryIkf6HMDH4CaWf4&autoplay=0&rel=0"
  );

  useEffect(() => {
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Generative AI for Product Managers Workshop",
      description: "",
      thumbnailUrl: ["https://example.com/thumbnail.jpg"],
      uploadDate: "2024-12-01T08:00:00+00:00",
      embedUrl: "https://www.youtube.com/embed/IUPVhnNojYE?si=ryIkf6HMDH4CaWf4",
      contentUrl:
        "https://www.youtube.com/embed/IUPVhnNojYE?si=ryIkf6HMDH4CaWf4",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(videoSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePlay = () => {
    setPlayVideo(true);
    setVideoSrc(
      "https://www.youtube.com/embed/IUPVhnNojYE?si=ryIkf6HMDH4CaWf4&autoplay=1&rel=0"
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center my-6 md:my-12 md:px-20 font-inter">
      <div
        className="relative w-full sm:w-[95%] bg-gray-800 rounded-xl overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        {/* Video iframe always present */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Custom Thumbnail and Play Button */}
        {!playVideo && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 cursor-pointer"
            onClick={handlePlay}
          >
            <img
              src={videoThumbnail}
              alt="Custom Thumbnail"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            <div className="relative flex items-center justify-center w-16 md:w-24 h-10 md:h-16 bg-red-600 rounded-lg md:rounded-2xl shadow-md">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-[4px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductAnalytics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(eventsBg1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPastEventDate, setIsPastEventDate] = useState(false);

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
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent("Check this out!")}`;
        break;
      case "slack":
        shareUrl = `https://slack.com/intl/en-in/share?text=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        return;
      case "email":
        shareUrl = `mailto:?subject=Check this out&body=${encodeURIComponent(
          currentUrl
        )}`;
        break;
      default:
        alert("Unsupported platform.");
        return;
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
      {/* Hero Section */}
      <div className="flex px-4 lg:px-8 xl:px-28 lg:gap-8 2xl:gap-12">
        <div className="w-full flex flex-col gap-10 lg:gap-20 rounded-xl sm:shadow-xl bg-white p-4 lg:p-8">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="relative">
              <img
                src={pmAnalyticsBanner}
                alt=""
                className="w-full aspect-[1176/735] object-cover rounded-xl"
              />

              <button
                onClick={toggleSharePopup}
                className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-white p-2 md:p-3 shadow-lg rounded-xl"
              >
                <img src={shareIcon} alt="Share Icon" />
              </button>

              <div className="absolute -top-[5.5px] right-3 md:-top-2 md:right-4 flex items-center justify-center">
                <img
                  src={liveSticker}
                  alt="Live Sticker"
                  className="h-12 w-12 md:h-auto md:w-auto"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 bg-[#24304C0D] p-6 rounded-lg">
              <EventInfo
                icon={calendarIcon}
                title={"Event Date"}
                desc={"Sat, Dec 21, 2024"}
              />
              <EventInfo
                icon={clockIcon}
                title={"Event Time"}
                desc={"11 AM - 2 PM"}
              />
              <EventInfo
                icon={locationDarkIcon}
                title={"Location"}
                desc={"Online"}
              />
              <button
                onClick={togglePopup}
                disabled={isPastEventDate}
                className={`flex w-full md:w-1/2 gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white ${
                  isPastEventDate ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <p className="text-[18px] lg:text-[20px] font-medium">
                  Register Now
                </p>
                <img src={arrowIcon} alt="icon" />
              </button>
            </div>
          </div>

          <ProgressBarWithDots />

          <VideoComponent />

          <AnalyticsCuricullum />

          {/* Premium Resources */}
          <div className="flex flex-col gap-4 lg:gap-5 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-bold">
              Unlock premium resources like
            </div>
            <div className="font-semibold flex flex-col gap-3 lg:gap-5">
              <div className="space-y-6">
                <div className="flex items-start gap-2 lg:items-center">
                  <img
                    src={icon1}
                    alt="icon"
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                  />
                  <p>
                    Metrics Guide :{" "}
                    <span className="font-normal text-[#7f7f7f]">
                      A comprehensive reference for metric frameworks.
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-2 lg:items-center">
                  <img
                    src={icon2}
                    alt="icon"
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                  />
                  <p>
                    Gen AI Prompts for Data Analysis :{" "}
                    <span className="font-normal text-[#7f7f7f]">
                      Ready-to-use prompts for efficient insights.
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-2 lg:items-center">
                  <img
                    src={icon3}
                    alt="icon"
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                  />
                  <p>
                    Tools 101 :{" "}
                    <span className="font-normal text-[#7f7f7f]">
                      Quick-start guides for SQL, ChatGPT, Google Analytics,
                      Amplitude, Perplexity, VMO and Mixpanel.
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-2 lg:items-center">
                  <img
                    src={icon4}
                    alt="icon"
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                  />
                  <p>
                    PM Interview RCA Questions :{" "}
                    <span className="font-normal text-[#7f7f7f]">
                      Sample questions to ace interviews.
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-2 lg:items-center">
                  <img
                    src={icon5}
                    alt="icon"
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                  />
                  <p>
                    RCA Template :{" "}
                    <span className="font-normal text-[#7f7f7f]">
                      Structured templates to organize Root Cause Analyses.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mentors */}
          <div className="flex flex-col gap-4">
            <div className="text-[20px] lg:text-[28px] font-bold text-center">
              Meet the Experts Leading Your Analytics Journey
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-3 text-[12px] lg:text-[18px] lg:gap-8">
              <a
                href="https://www.linkedin.com/in/pamit82anand/?originalSubdomain=in"
                target="_blank"
                className="relative flex flex-col items-center text-center font-semibold w-fit"
              >
                <div className="relative">
                  <img
                    src={judge2}
                    alt=""
                    className="h-64 md:h-80 rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3 text-white text-start">
                    <img
                      src={reachifyMe}
                      alt=""
                      className="bg-white p-2 w-36"
                    />
                    <p className="font-bold text-sm md:text-lg">Pamit Anand</p>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Angel investor in ReachifyMe, Milkbasket, RecipeCup
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/arun-nandewal/?originalSubdomain=in"
                target="_blank"
                className="relative flex flex-col items-center text-center font-semibold w-fit"
              >
                <div className="relative">
                  <img
                    src={judge3}
                    alt=""
                    className="h-64 md:h-80 rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3 text-white text-start">
                    <img src={microsoft} alt="" className="bg-white p-2" />
                    <p className="font-bold text-sm md:text-lg">
                      Arun Nandewal
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Sr. Product Manager, Microsoft
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Certificate */}
          <AnalyticsCertificate togglePopup={togglePopup} />

          {/* Reviews */}
          <ReviewAnalytics />

          {/* Share options */}
          <div className="flex flex-col gap-2">
            <div className="text-[20px] lg:text-[28px] font-bold">
              Share this event with your network!
            </div>
            <div className="flex gap-0 items-start">
              <button onClick={() => handleShare("twitter")}>
                <img src={twitter} alt="" className="h-16 lg:h-24" />
              </button>
              <button onClick={() => handleShare("instagram")}>
                <img src={instagram} alt="" className="h-16 lg:h-24" />
              </button>
              <button onClick={() => handleShare("linkedin")}>
                <img
                  src={linkedin}
                  alt=""
                  className="h-10 lg:h-16 mt-2 mx-3 md:mx-5"
                />
              </button>
              <button onClick={() => handleShare("slack")}>
                <img src={slack} alt="" className="h-16 lg:h-24" />
              </button>
            </div>
          </div>

          {/* Google Analytics, VWO. */}
          {/* Tools Covered */}
          <div className="flex flex-col gap-2">
            <div className="text-[20px] lg:text-[28px] font-bold">
              Tools being covered
            </div>
            <div className="flex flex-wrap gap-6 lg:gap-10 items-center">
              <img src={aitool2} alt="" className="h-10 w-auto lg:h-14" />
              <img src={aitool3} alt="" className="h-10 w-auto lg:h-14" />
              <img src={sql} alt="" className="h-10 w-auto lg:h-14" />
              <img src={amplitude} alt="" className="h-12 w-auto lg:h-14" />
              <img src={mixpanel} alt="" className="h-6 w-auto lg:h-10" />
            </div>
          </div>
          <div className="flex flex-col gap-6 text-[18px] lg:text-[20px] font-semibold">
            <div>💁🏻 Have questions? Reach out to us on Whatsapp</div>
            <a
              className="flex"
              href="https://chat.whatsapp.com/BohDACWS79i7D42OO1iDT9"
              target="_blank"
            >
              <div className="bg-[#FFA000] text-white underline p-3 rounded-xl px-6">
                Join our Whatsapp Community
              </div>
            </a>
          </div>
          <FaqAnalytics />
        </div>
      </div>

      {/* Register Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <AnalyticsRegistrationForm
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

      {showBottomBar && (
        <AnalyticsSticky
          togglePopup={togglePopup}
          toggleSharePopup={toggleSharePopup}
        />
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

export default ProductAnalytics;
