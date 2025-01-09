import { useEffect, useState } from "react";
import arrowIcon from "../assets/right-arrow.svg";
import locationIcon from "../assets/location.svg";
import copyIcon from "../assets/copy.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import whatsappIcon1 from "../assets/whatsapp1.svg";
import emailIcon from "../assets/email.svg";
import facebookIcon from "../assets/facebook.svg";
import locationDarkIcon from "../assets/location-dark.svg";
import timeIcon from "../assets/access-time.svg";
import shareIcon from "../assets/share.svg";
import calendarIcon from "../assets/calendar.svg";
import linkedInIcon from "../assets/linkedin-circle.svg";
import substackIcon from "../assets/substack-logo.svg";
import greenTick from "../assets/tick-green.svg";
import hackBg from "../assets/ai-for-pm-bg.svg";
import hackBg1 from "../assets/ai-for-pm-bg-1.svg";
import eventsBg1 from "../assets/events-bg.png";
import eventsBg2 from "../assets/events-bg.svg";
import judge1 from "../assets/rumit.jpeg";
import judge2 from "../assets/pamit.svg";
import judge3 from "../assets/arun.svg";
import icon1 from "../assets/ai-pm-icon1.svg";
import icon2 from "../assets/ai-pm-icon2.svg";
import icon3 from "../assets/ai-pm-icon3.svg";
import icon4 from "../assets/ai-pm-icon4.svg";
import icon5 from "../assets/ai-pm-icon5.svg";
import referIcon from "../assets/refer-and-earn.svg";
import uberLogo from "../assets/uber-logo.svg";
import aitool1 from "../assets/aitool1.svg";
import aitool2 from "../assets/aitool2.svg";
import aitool3 from "../assets/aitool3.svg";
import aitool4 from "../assets/aitool4.svg";
import aitool5 from "../assets/aitool5.svg";
import aitool6 from "../assets/aitool6.svg";
import aitool7 from "../assets/aitool7.svg";

import GenAiForPMRegisteration from "../components/GenAiForPMRegisteration";
import FaqAiForPm from "../components/FaqAiForPm";
import AiForPmStickyBar from "../components/AiforPmStickyBar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const slackInviteLink =
  "https://productspacecommunity.slack.com/join/shared_invite/zt-2l4itbe2r-fiAdPz5jEW8pPn6wacYrIw#/shared-invite/email";
const whatsappInviteLink = "https://chat.whatsapp.com/GyOBDk1JVJvArbj7wnVb3i";
const eventDate = new Date("2025-01-18T23:59:59");

const EventInfo = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-3 w-full md:w-1/2 items-center">
      <div className="bg-[#E7E8EB] p-2 rounded-xl">
        <img src={icon} alt="" className="h-8 lg:h-12" />
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
            You&apos;ve successfully registered for AI for PMs workshop
          </div>
          <div className="text-[14px] lg:text-[16px]">
            You will receive email on the next steps shortly
          </div>
        </div>

        <button className="bg-[#24304C] text-white p-4 text-[16px] lg:text-[18px] rounded-xl px-4 lg:px-12">
          <a
            href="https://chat.whatsapp.com/GyOBDk1JVJvArbj7wnVb3i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full h-full"
          >
            Join Our Community for Active Updates
          </a>
        </button>
      </div>
    </div>
  );
};

const Event1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(eventsBg1);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPastEventDate, setIsPastEventDate] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
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
      <div className="text-[28px] lg:text-[48px] text-center font-bold px-4 lg:px-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#041540] to-[#062677]">
          Start your AI Journey in Product Management with Us
        </h1>
      </div>

      <div className="flex px-4 lg:px-8 xl:px-28 lg:gap-8 2xl:gap-12">
        <div className="w-full lg:w-[70%] flex flex-col gap-10 lg:gap-16 rounded-xl sm:shadow-xl bg-white p-4 lg:p-8">
          <div className="flex flex-col gap-8 md:gap-14">
            <div className="relative">
              <img
                src={hackBg}
                alt=""
                className="h-[250px] sm:h-[400px] lg:h-[507px] w-full object-cover rounded-xl"
              />

              <button
                onClick={toggleSharePopup}
                className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-white p-2 md:p-3 shadow-lg rounded-xl"
              >
                <img src={shareIcon} alt="Share Icon" />
              </button>

              {/* <div className="absolute -top-[5.5px] right-3 md:-top-2 md:right-4 flex items-center justify-center">
                <img
                  src={liveSticker}
                  alt="Live Sticker"
                  className="h-12 w-12 md:h-auto md:w-auto"
                />
              </div> */}
            </div>

            <div className="text-[20px] lg:text-[26px] text-[#24304C] font-bold">
              3 hours extensive session to help you transform your PM career
              with AI
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3">
              <EventInfo
                icon={calendarIcon}
                title={"When"}
                desc={"Sat, Jan 18, 2025 (11 AM - 2 PM)"}
              />
              <EventInfo
                icon={locationDarkIcon}
                title={"Where"}
                desc={"Online"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Description
            </div>
            <div className="text-[#7f7f7f]">
              Ready to transform your product career? Join us for this 3-hour
              workshop that provides the foundational AI knowledge and practical
              skills to navigate the evolving product landscape.
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Who Should Attend
            </div>
            <ul className="font-normal text-[#7f7f7f] list-disc ml-4 flex flex-col gap-2 lg:gap-4">
              <li>
                Product Managers looking to leverage AI & improve their daily
                productivity.
              </li>
              <li>Startup founders who want to build & launch AI products</li>
              <li>
                Aspiring PMs who want to stay ahead of the curve with the latest
                AI technologies.
              </li>
              <li>
                Tech enthusiasts interested in the concepts & applications of
                Gen AI.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              What will you learn
            </div>
            <div className="font-semibold flex flex-col gap-3 lg:gap-5">
              <div className="flex items-start gap-2 items-start lg:items-center">
                <img
                  src={icon1}
                  alt="icon"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                />
                <p>
                  AI fundamentals & classification:{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    ML, NLP, Computer Vision, more.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2 items-start lg:items-center">
                <img
                  src={icon2}
                  alt="icon"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                />
                <p>
                  Hands-on project:{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    Create a website from scratch using AI tools.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2 items-start lg:items-center">
                <img
                  src={icon3}
                  alt="icon"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                />
                <p>
                  Basics of GPT:{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    Tokens, Contexts, Parameters & OpenAI Playground.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2 items-start lg:items-center">
                <img
                  src={icon4}
                  alt="icon"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                />
                <p>
                  Solving real-world Case studies:{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    Use cutting edge AI.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-2 items-start lg:items-center">
                <img
                  src={icon5}
                  alt="icon"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#E7E8EB] p-2 rounded-lg"
                />
                <p>
                  NPD on steroids using AI:{" "}
                  <span className="font-normal text-[#7f7f7f]">
                    Prototyping and PRD writing.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Speaker
            </div>

            <div className="flex flex-col gap-10 lg:gap-12">
              {/* Speaker 1 */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-[18px] lg:text-[24px] items-center justify-between">
                  <div className="flex items-center gap-4 w-4/5">
                    <img
                      src={judge1}
                      alt="Rumit Anand"
                      className="h-16 lg:h-28 rounded-full"
                    />
                    <div className="flex flex-col gap-1 md:gap-2">
                      <p className="font-semibold">Rumit Anand</p>
                      <p className="text-[#4B5563] text-[16px] lg:text-[20px]">
                        VP of Product, InMobi
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rumit-anand/"
                    target="_blank"
                    className="flex flex-col items-center text-center gap-3 font-semibold"
                  >
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="h-8 lg:h-12"
                    />
                  </a>
                </div>

                <div className="text-[#7f7f7f] text-[16px] lg:text-[20px]">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      Formerly Head of Digital Experience for <b>Invideo</b> and{" "}
                      <b>Republic TV</b>.
                    </li>
                    <li>
                      Presently leading P&L for <b>Glance</b> & their smart lock
                      screen product.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Speaker 3 */}
              {/* <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-[18px] lg:text-[24px] items-center justify-between">
                  <div className="flex items-center gap-4 w-4/5">
                    <img
                      src={judge3}
                      alt="Arun Nandewal"
                      className="h-16 lg:h-28 rounded-full"
                    />
                    <div className="flex flex-col gap-1 md:gap-2">
                      <p className="font-semibold">Arun Nandewal</p>
                      <p className="text-[#4B5563] text-[16px] lg:text-[20px]">
                        Sr. PM at Microsoft
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/arun-nandewal/?originalSubdomain=in"
                    target="_blank"
                    className="flex flex-col items-center text-center gap-3 font-semibold"
                  >
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="h-8 lg:h-12"
                    />
                  </a>
                </div>
                <div className="text-[#7f7f7f] text-[16px] lg:text-[20px]">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      Formerly led Mobile App development with <b>Myntra</b>.
                    </li>
                    <li>
                      Covered by <b>Times of India</b> for contributions to
                      academia & learning at IIM-Ahmedabad.
                    </li>
                  </ul>
                </div>
              </div> */}

              {/* Speaker 2 */}
              {/* <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-[18px] lg:text-[24px] items-center justify-between">
                  <div className="flex items-center gap-4 w-4/5">
                    <img
                      src={judge2}
                      alt="Pamit Anand"
                      className="h-16 lg:h-28 rounded-full"
                    />
                    <div className="flex flex-col gap-1 md:gap-2">
                      <p className="font-semibold">Pamit Anand</p>
                      <p className="text-[#4B5563] text-[16px] lg:text-[20px]">
                        Product Head, MagicBricks
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/pamit82anand/?originalSubdomain=in"
                    target="_blank"
                    className="flex flex-col items-center text-center gap-3 font-semibold"
                  >
                    <img
                      src={linkedInIcon}
                      alt="LinkedIn"
                      className="h-8 lg:h-12"
                    />
                  </a>
                </div>
                <div className="text-[#7f7f7f] text-[16px] lg:text-[20px]">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      Winner of IAMAI's Product Leadership Award for{" "}
                      <b>Shaadi.com</b> App.
                    </li>
                    <li>
                      <b>Ex-OLA</b> with 15+ years in AI-based Recommendation
                      Systems.
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>

          {/* <form-widget ucid='4GWsRF4tkIFUmdFNINMGw8VOCxE'></form-widget> */}

          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Workshop takeaways
            </div>
            <ul className=" text-[16px] lg:text-[20px] flex flex-col gap-2 lg:gap-4 list-disc ml-4">
              <li>Certificate of participation.</li>
              <li>
                Guides & resources on:
                <ul className="font-normal lg:text-[18px] text-[#7f7f7f] space-y-2 list-none mt-1">
                  <li className="relative pl-5 before:content-['→'] before:absolute before:left-0">
                    GenAI Fundamentals 101 guide
                  </li>
                  <li className="relative pl-5 before:content-['→'] before:absolute before:left-0">
                    Introduction to LLMs guide
                  </li>
                  <li className="relative pl-5 before:content-['→'] before:absolute before:left-0">
                    Prompt Engineering guide for PMs
                  </li>
                  <li className="relative pl-5 before:content-['→'] before:absolute before:left-0">
                    Case Studies - How Netflix & Uber uses AI in their products
                  </li>
                  <li className="relative pl-5 before:content-['→'] before:absolute before:left-0">
                    Changing your content diet - [top 25 AI products and
                    Influencers]
                  </li>
                </ul>
              </li>
              <li>Doubt Clearing, Live Q&A</li>
              <li>Recording of the session</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5 text-[16px] lg:text-[20px]">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              ✨AI Tools being covered
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <img src={aitool1} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool2} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool3} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool4} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool5} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool6} alt="" className="h-12 w-auto lg:h-16" />
              <img src={aitool7} alt="" className="h-12 w-auto lg:h-16" />
            </div>

            <div className="text-[#7f7f7f]">
              <p>and many more...</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[20px] lg:text-[28px] font-semibold">
              Find us on
            </div>
            <div className="flex flex-col gap-3 lg:gap-5">
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
                  href={whatsappInviteLink}
                  target="_blank"
                  className="shadow shadow-xl rounded-xl p-2"
                >
                  <img src={whatsappIcon1} alt="" className="h-8 lg:h-12" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center gap-4 my-8">
            <div className="text-[20px] lg:text-[28px] w-full font-semibold text-start">
              Refer & Earn exciting Rewards
            </div>

            <div>
              <img
                src={referIcon}
                alt=""
                className="h-60 w-80  lg:w-full lg:h-full"
              />
            </div>

            <div className="flex flex-col gap-4 w-full text-center">
              <div className="flex flex-col gap-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full py-6 lg:py-8 lg:px-20">
                <div className="text-[18px] lg:text-[24px] font-semibold">
                  Refer 1 friend
                </div>

                <div className="text-center text-[16px] lg:text-[20px]">
                  <div>Get Access to the Workshop Deck</div>
                  <div>+</div>
                  <div>Prompts Guide for PM use case</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full py-6 lg:py-8 lg:px-20">
                <div className="text-[18px] lg:text-[24px] font-semibold">
                  Refer 3 friends
                </div>

                <div className="text-center text-[16px] lg:text-[20px]">
                  <div>Reward for referring 1 friend</div>
                  <div>+</div>
                  <div>Full Recordings and deck</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full py-6 lg:py-8 lg:px-20">
                <div className="text-[18px] lg:text-[24px] font-semibold">
                  Refer 5 friends
                </div>

                <div className="text-center text-[16px] lg:text-[20px]">
                  <div>Reward for referring 3 friends</div>
                  <div>+</div>
                  <div>
                    Access to 5 exclusive AI guides - tools case studies,
                    interview prep and more!
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://pages.viral-loops.com/product-space-gen-ai-for-pms-bcp5e0e2"
              target="_blank"
              className={`flex w-full lg:w-1/3 gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white ${
                isPastEventDate ? "pointer-events-none opacity-70" : ""
              }`}
            >
              <p className="text-[18px] md:text-[20px] font-medium">
                Refer Now
              </p>
              <img src={arrowIcon} alt="icon" />
            </a>
          </div> */}

          <FaqAiForPm />
        </div>

        <div className="hidden lg:flex w-[30%] flex-col">
          <div className="flex flex-col gap-1 bg-white shadow-[0_5px_25px_rgba(0,0,0,0.1)] rounded-xl p-8 sticky top-24">
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
                Gen AI for Product Managers Workshop
              </div>

              <div className="flex flex-col gap-2 text-[#7f7f7f] font-semibold">
                <div className="flex gap-2 items-center">
                  <img src={timeIcon} alt="" className="h-5" />
                  <p>11 AM - 2 PM - Jan 18, 2025</p>
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
                <Link
                  to={"/events/gen-ai-form"}
                  // onClick={togglePopup}
                  disabled={isPastEventDate}
                  className={`flex w-full gap-3 p-3 rounded-xl justify-center items-center bg-[#24304C] text-white ${
                    isPastEventDate ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <p className="text-[20px] font-medium">Join Waitlist Now</p>
                  <img src={arrowIcon} alt="icon" />
                </Link>
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

      {/* {showBottomBar && <AiForPmStickyBar togglePopup={togglePopup} />} */}
      <AiForPmStickyBar togglePopup={togglePopup} />

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
