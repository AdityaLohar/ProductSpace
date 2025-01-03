import { useEffect, useRef, useState } from "react";
import logo from "../assets/ps-logo-dark.svg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isOpenFormState, isVisibleformState } from "../atoms/modalState";

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
      let cohortDate = new Date("2025-01-12"); // Adjust the year if needed
      if (location.pathname === "/gen-ai-for-pm") {
        cohortDate = new Date("2025-02-01");
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
              {location.pathname === "/gen-ai-for-pm"
                ? "NEXT GENAI FOR PM COURSE STARTS: 1st Feb 2025"
                : "NEXT PM FELLOWSHIP COHORT STARTS: 12th January, 2025"}
            </div>
            <Link
              to={
                location.pathname === "/gen-ai-for-pm"
                  ? "/gen-ai-for-pm"
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
              href="/gen-ai-for-pm"
              className="hover:underline flex items-center gap-1"
            >
              Gen AI for PM
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
                  href="/ai-for-pm"
                  className="px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  Gen AI for PM
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
          href="/gen-ai-for-pm"
          className="hover:underline flex items-center gap-1"
        >
          Gen AI for PM
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
                href="/ai-for-pm"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Gen AI for PM
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
      </div>
    </div>
  );
};

export default Navbar;
