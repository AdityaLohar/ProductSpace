import { useEffect, useRef, useState } from "react";
import logo from "../assets/ps-logo-dark.svg";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);
  const [showTopBar, setShowTomBar] = useState(true);
  const [daysToGo, setDaysToGo] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

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

      if (scrollPosition < (screenHeight - buffer)) {
        setShowTomBar(true);
      } else if (scrollPosition > (screenHeight + buffer)) {
        setShowTomBar(false);
      }
    };

    const calculateDaysLeft = () => {
      // Set the cohort start date
      const cohortDate = new Date('2024-10-19'); // Adjust the year if needed
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
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg ">
      {
        showTopBar && (
          <div className="text-white py-2 font-semibold items-center text-center bg-[#AEECFF]">
            <div className="container mx-auto flex items-center justify-center text-yellow-500 gap-1 lg:gap-2 text-[10px] lg:text-[14px] ">
              <div className="text-black">NEXT COHORT STARTS: 19th October</div>
              <Link to={"/pm-fellowship"} className="flex items-center">
                
                <button className="bg-[#130D00] px-2 py-1 rounded-md">
                  {daysToGo} DAYS TO GO
                </button>
                <div className="text-black">
                  <RiArrowRightSFill />
                </div>
                
              </Link>
            </div>
          </div>
        )
      }

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

        <a
          href="https://topmate.io/propel/62841"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden bg-[#FEC923] text-black text-sm xl:text-[18px] font-semibold rounded-full px-8 py-2.5 hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out block text-center"
        >
          Book a 1:1 Mentor Call
        </a>


        <div className="hidden lg:flex space-x-8 items-center">
          <div className="hidden lg:flex space-x-10 xl:space-x-16 font-medium text-[18px]">
            <a href="/pm-fellowship" className="hover:underline flex items-center gap-1">
              PM Fellowship
            </a>
            <a onClick={handleScrollOrNavigate} className="hover:cursor-pointer hover:underline flex items-center gap-1">
              Alumni
            </a>
            <a href="/blogs" className="hover:underline flex items-center gap-1">
              Blogs
            </a>
          </div>

            <a
              href="https://topmate.io/propel/62841"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="bg-[#FEC923] text-black text-sm xl:text-[18px] font-semibold rounded-full px-4 xl:px-8 py-2.5 hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out">
                Book a 1:1 Mentor Call
            </button>
            </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={navigationRef}
        className="lg:hidden flex flex-col items-start h-[0px] px-[15px] md:px-[80px] space-y-4 py-0 transition-all duration-500 ease-in-out overflow-hidden"
      >
        <a href="/pm-fellowship" className="hover:underline text-[18px]">
          PM Fellowship
        </a>
        <a onClick={handleScrollOrNavigate} className="hover:underline text-[18px]">
          Alumni
        </a>
        <a href="/blogs" className="hover:underline text-[18px]">
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
