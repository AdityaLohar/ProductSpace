import { useRef, useState } from "react";
import profilePic from "../assets/Person.svg";
import logo from "../assets/ps-logo.svg";
import { RiArrowRightSFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);

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
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg ">
      <div className="text-white py-2 font-semibold items-center text-center bg-[#AEECFF]">
            <div className="container mx-auto flex items-center justify-center text-yellow-500 gap-1 lg:gap-2 text-[10px] lg:text-[14px] ">
                <div className="text-black">
                    NEXT COHORT STARTS: 22ND JUNE
                </div>
                <div className="flex items-center">
                    <div className='bg-[#130D00] px-2 py-1 rounded-md'>
                        25 DAYS TO GO
                    </div>
                    <div className="text-black">
                        <RiArrowRightSFill />
                    </div>
                </div>
            </div>
        </div>
      <div className="flex justify-between w-full items-center px-[10px] md:px-[80px] lg:px-[120px] py-[15px] custom-12:px-[0px] xl:mx-auto max-w-screen-2xl font-hind">
        <div className="hidden lg:block font-semibold text-[23px] pb-1 font-serif">
          Product <span className="text-[#21C1F3]">Space</span>
        </div>

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
            <img src={logo} alt="" />
          </div>
        </div>

        <a
          href="https://topmate.io/propel/62841"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="lg:hidden bg-[#FEC923] text-black text-sm xl:text-[18px] font-semibold rounded-full px-8 py-2.5 hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out">
            Book a 1:1 Mentor Call
          </button>
        </a>

        <div className="hidden lg:flex space-x-8 items-center">
          <div className="hidden lg:flex space-x-6 xl:space-x-7 font-medium text-[18px]">
            <a href="/pm" className="hover:underline flex items-center gap-1">
              PM Fellowship
              <svg
                className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              Events
              <svg
                className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              Resources
              <svg
                className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <button className="bg-[#FEC923] text-black text-sm xl:text-[18px] font-semibold rounded-full px-4 xl:px-8 py-2.5 hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out">
            <a
              href="https://topmate.io/propel/62841"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 1:1 Mentor Call
            </a>
          </button>
          <button className="rounded-full bg-gray-100 p-3 ml-1">
            <img src={profilePic} alt="profile" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && ( */}
        <div
          ref={navigationRef}
          className="lg:hidden flex flex-col items-start h-[0px] px-[15px] md:px-[80px] space-y-4 py-0 transition-all duration-500 ease-in-out overflow-hidden"
        >
          <a href="/" className="hover:underline text-[18px]">
            PM Fellowship
          </a>
          <a href="#" className="hover:underline text-[18px]">
            Events
          </a>
          <a href="#" className="hover:underline text-[18px]">
            Resources
          </a>
        </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;