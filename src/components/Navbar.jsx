import { useEffect, useRef, useState } from "react";
import logo from "../assets/ps-logo-dark.svg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactUsForm from "./ContactUsForm";
import profile from "../assets/profile.svg";
import { useRecoilState } from "recoil";
import {
  authAtom,
  isOpenFormState,
  isOpenLogin,
  isOpenSignin,
  isVisibleformState,
  isVisibleLogin,
  isVisibleSignin,
} from "../atoms/modalState";
import GEN_AI_FOR_PM_DETAILS from "../constants/GenAiDetails.jsx";
import PM_FELLOWSHIP_DETAILS from "../constants/PmFellowshipDetails.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTomBar] = useState(true);
  const [daysToGo, setDaysToGo] = useState(0);

  const [isVisible, setIsVisible] = useRecoilState(isVisibleformState); // Recoil for visibility
  const [isOpenForm, setIsOpenForm] = useRecoilState(isOpenFormState);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const [isLoginVisible, setIsLoginVisible] = useRecoilState(isVisibleLogin); // Recoil for visibility
  const [isLoginOpen, setIsLoginOpen] = useRecoilState(isOpenLogin);

  const [isSignupVisible, setIsSignupVisible] = useRecoilState(isVisibleSignin); // Recoil for visibility
  const [isSignupOpen, setIsSignupOpen] = useRecoilState(isOpenSignin);

  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

  const [auth, setAuth] = useRecoilState(authAtom);

  const toggleAuthDropdown = () => setIsAuthDropdownOpen(!isAuthDropdownOpen);

  const toggleLoginModal = () => {
    setIsLoginOpen(true);
    setTimeout(() => setIsLoginVisible(true), 10);
  };

  const toggleSignupModal = () => {
    setIsSignupOpen(true);
    setTimeout(() => setIsSignupVisible(true), 10);
  };

  const toggleModal = () => {
    if (!isOpenForm) {
      setIsOpenForm(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      console.log("enter");
      setIsVisible(false);
      setTimeout(() => setIsOpenForm(false), 300);
    }
  };

  const handleScrollOrNavigate = () => {
    if (location.pathname === "/pm-fellowship") {
      // Same page, scroll to section
      document.getElementById("reviews").scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to /pm and scroll to the section after page load
      navigate("/pm-fellowship#reviews");
    }
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    setAuth(false);
    navigate("/");
  };

  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    };

    getToken();
  }, [setAuth]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      const buffer = 20; // Adjust the buffer size if needed

      if (scrollPosition < screenHeight - buffer) {
        setShowTomBar(true);
      } else if (scrollPosition > screenHeight + buffer) {
        setShowTomBar(false);
      }
    };

    const calculateDaysLeft = () => {
      // Set the cohort start date
      // let cohortDate = new Date("2025-01-12"); // Adjust the year if needed
      let cohortDate = new Date(PM_FELLOWSHIP_DETAILS.startDate); // Adjust the year if needed
      if (location.pathname === "/ai-for-pm") {
        cohortDate = new Date(GEN_AI_FOR_PM_DETAILS.startDate);
      }
      const today = new Date();

      // Calculate the difference in time (in milliseconds)
      const diffTime = cohortDate - today;

      // Convert the difference in milliseconds to days
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Set the calculated days left in state
      setDaysToGo(diffDays);
    };

    calculateDaysLeft();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (navigationRef.current) {
      // Add or remove the active class based on the state
      if (isOpen) {
        navigationRef.current.classList.remove("active");
      } else {
        navigationRef.current.classList.add("active");
      }
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg ">
      {showTopBar && (
        <div className="text-white py-2 font-semibold items-center text-center bg-[#AEECFF]">
          <div className="container mx-auto flex items-center justify-center text-yellow-500 gap-1 lg:gap-2 text-[10px] lg:text-[14px] ">
            <div className="text-black">
              {location.pathname === "/ai-for-pm"
                ? `NEXT AI FOR PM COURSE STARTS: ${GEN_AI_FOR_PM_DETAILS.startDateText}`
                : `NEXT PM FELLOWSHIP COHORT STARTS: ${PM_FELLOWSHIP_DETAILS.startDateText}`}
            </div>
            <Link
              to={
                location.pathname === "/ai-for-pm"
                  ? "/ai-for-pm"
                  : "/pm-fellowship"
              }
              className="flex items-center"
            >
              <button className="bg-[#130D00] px-2 py-1 rounded-md">
                {daysToGo} DAYS TO GO
              </button>
              <div className="text-black">
                <RiArrowRightSFill />
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full items-center px-[10px] md:px-[80px] lg:px-[120px] py-[15px] custom-12:px-[0px] xl:mx-auto max-w-screen-2xl font-hind">
        <a
          href="/"
          className="hidden lg:block font-semibold text-[23px] pb-1 font-serif"
        >
          Product <span className="text-[#21C1F3]">Space</span>
        </a>

        <div className="flex gap-4 items-center">
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="lg:hidden font-semibold text-[23px] pb-1 font-serif">
            <a href="/">
              <button>
                <img src={logo} alt="" />
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex space-x-8 items-center">
          <div className="hidden lg:flex space-x-10 xl:space-x-16 font-medium text-[18px]">
            <a
              href="/pm-fellowship"
              className="hover:underline flex items-center gap-1"
            >
              PM Fellowship
            </a>
            <a
              href="/ai-for-pm"
              className="hover:underline flex items-center gap-1"
            >
              AI for PM
            </a>
            {/* Events Dropdown */}
            <div className="relative group">
              <a className="hover:underline flex items-center gap-1 cursor-pointer">
                Events
              </a>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg space-y-1 rounded-md p-2">
                <a
                  href="/pm-workshop"
                  className="px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  PM Workshop
                </a>
                <a
                  href="/product-meetups-offline"
                  className="px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  Product Meet-ups (Offline)
                </a>
                <a
                  href="/events/ai-for-pm"
                  className="px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  AI for PM Workshop
                </a>
                <a
                  href="/pm-hackathon"
                  className="px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  PM Hackathon
                </a>
              </div>
            </div>
            <a
              onClick={handleScrollOrNavigate}
              className="hover:cursor-pointer hover:underline flex items-center gap-1"
            >
              Alumni
            </a>
            <a
              href="/blogs"
              className="hover:underline flex items-center gap-1"
            >
              Blogs
            </a>
            <button
              onClick={toggleModal}
              className="hover:underline flex items-center gap-1"
            >
              Contact Us
            </button>

            {!auth ? (
              <div className="relative group">
                <div>
                  <img src={profile} alt="" className="h-6" />
                </div>
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg space-y-1 rounded-md p-2">
                  <button
                    onClick={toggleLoginModal}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Login
                  </button>
                  <button
                    onClick={toggleSignupModal}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Signup
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative group">
                <div>
                  <img src={profile} alt="" className="h-6" />
                </div>
                <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg space-y-1 rounded-md p-2">
                  <Link
                    to={"/user/profile"}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignout}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={navigationRef}
        className="lg:hidden flex flex-col items-start h-[0px] px-[15px] md:px-[80px] space-y-4 py-0 transition-all duration-500 ease-in-out overflow-hidden"
      >
        <a href="/pm-fellowship" className="hover:underline">
          PM Fellowship
        </a>
        <a
          href="/ai-for-pm"
          className="hover:underline flex items-center gap-1"
        >
          AI for PM
        </a>
        {/* Events Dropdown for Mobile */}
        <div className="relative">
          <a
            onClick={toggleDropdown}
            className="flex items-center gap-1 cursor-pointer"
          >
            Events
          </a>
          {isDropdownOpen && (
            <div className="flex flex-col bg-white shadow-lg space-y-0 rounded-md p-0 mt-1">
              <a
                href="/pm-workshop"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                PM Workshop
              </a>
              <a
                href="/product-meetups-offline"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Product Meet-ups (Offline)
              </a>
              <a
                href="/events/ai-for-pm"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                AI for PM Workshop
              </a>
              <a
                href="/pm-hackathon"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                PM Hackathon
              </a>
            </div>
          )}
        </div>
        <a onClick={handleScrollOrNavigate} className="hover:underline">
          Alumni
        </a>
        <a href="/blogs" className="hover:underline">
          Blogs
        </a>
        <a
          onClick={toggleModal}
          className="hover:underline flex items-center gap-1"
        >
          Contact Us
        </a>
        <div className="relative group">
          <div onClick={toggleAuthDropdown}>
            <img src={profile} alt="" className="h-6" />
          </div>
          {isAuthDropdownOpen && (
            <div className="group-hover:flex items-start bg-white shadow-lg rounded-md p-2">
              {!auth ? (
                <div className="flex flex-col">
                  <button
                    onClick={toggleLoginModal}
                    className="px-2 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Login
                  </button>
                  <button
                    onClick={toggleSignupModal}
                    className="px-2 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Signup
                  </button>
                </div>
              ) : (
                <div className="flex flex-col">
                  <Link
                    to="/user/profile"
                    className="px-2 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignout}
                    className="px-2 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
