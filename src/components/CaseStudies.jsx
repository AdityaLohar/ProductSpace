import { useEffect, useState } from "react";
import caseStudies from "../data/CaseStudiesData";
import arrowLight from "../assets/right-arrow.svg";
import arrowDark from "../assets/right-arrow-dark.svg";

const CaseStudyCard = ({ logo, title, desc, url, flag }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`flex-shrink-0 w-[380px] lg:w-[395px] lg:h-[500px] p-4 m-2 rounded-xl space-y-2 ${
        flag ? "text-white select-none" : "text-black border"
      }`}
    >
      <div className={`${flag ? "" : "border"} rounded-xl`}>
        {flag ? (
          <p className="h-[312px] w-full rounded-xl" />
        ) : (
          <img
            src={logo}
            alt="brand-logo"
            className="h-[312px] w-full rounded-xl"
          />
        )}
      </div>

      <div className="flex flex-col justify-between h-[145px]">
        <div className="p-2">
          <p className="font-bold">{title}</p>
          <p>{desc}</p>
        </div>

        {flag ? (
          <div
            className={`py-3 text-center rounded-lg font-medium hover:font-normal`}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          >
            <p className="flex items-center gap-2 justify-center w-full">
              <p>Read Now</p>
            </p>
          </div>
        ) : (
        <a
          href={url}
          target="_blank"
          className={`py-3 hover:cursor-pointer text-center hover:text-white bg-[#FFA000] text-white lg:text-black lg:bg-white hover:bg-[#FFA000] border border-[#D4D4D4] rounded-lg font-normal lg:font-medium hover:font-normal`}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          <button className="flex items-center gap-2 justify-center w-full">
            <p>Read Now</p>
            <img 
          src={
            isSmallScreen 
              ? arrowLight  // Lighter arrow for smaller screens
              : isHovered 
                ? arrowLight // Lighter arrow on hover
                : arrowDark // Dark arrow for non-hovered state
          } 
          alt="Arrow"
        />
          </button>
        </a>
        )}

      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle clicking the left arrow (previous)
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle clicking the right arrow (next)
  const handleNextClick = () => {
    if (currentIndex < caseStudies.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-full bg-white py-12 lg:py-24 font-inter px-0 lg:px-20">
      {/* Carousel Header */}
      <div className="flex flex-col gap-3 mb-8 text-center px-4">
        <h2 className="text-[28px] lg:text-[40px] font-bold font-sans">
        Product Tear-down & Case Studies
        </h2>
        <p className="text-[16px] lg:text-[18px]">
          Dive into Case Studies that Drive Product Innovation
        </p>
      </div>

      {/* Carousel Container */}
      <div className="flex items-center justify-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className={`z-10 hidden lg:flex text-2xl bg-gray-200 px-4 py-3 rounded-full hover:bg-gray-300 ${
            currentIndex === 0 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        {/* Visible Cards */}
        <div className="overflow-scroll lg:overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 415}px)` }}
          >
            {caseStudies.map((box, index) => (
              index == caseStudies.length - 1 && window.innerWidth < 1204 ? (
                ""
              ) : (
                <CaseStudyCard
                  key={index}
                  logo={box.image}
                  title={box.title}
                  desc={box.desc}
                  url={box.url}
                  flag={index == caseStudies.length - 1 && window.innerWidth > 1023}
                />
              )
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className={`hidden lg:flex z-10 text-2xl bg-gray-200 px-4 py-3 rounded-full hover:bg-gray-300 ${
            currentIndex >=
              caseStudies.length - (window.innerWidth < 1400 ? 2 : 3) &&
            "opacity-50 cursor-not-allowed"
          }`}
          disabled={
            currentIndex >=
            caseStudies.length - (window.innerWidth < 1400 ? 2 : 3)
          }
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
