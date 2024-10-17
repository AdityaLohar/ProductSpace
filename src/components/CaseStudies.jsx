import { useEffect, useState } from "react";
import caseStudies from "../data/CaseStudiesData";
import arrowLight from "../assets/right-arrow.svg";
import arrowDark from "../assets/right-arrow-dark.svg";
import { Link } from "react-router-dom";

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
  return (
    <div className="relative w-full bg-white pt-12 pb-12 lg:pt-16 lg:pb-24 font-inter px-0 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 mb-4 lg:mb-8 gap-2">
        <div className="flex flex-col gap-3 mb-2 lg:mb-8 text-start">
          <h2 className="text-[28px] lg:text-[40px] font-bold font-sans">
          Product Tear-down & Case Studies
          </h2>
          <p className="text-[16px] lg:text-[18px]">
            Dive into Case Studies that Drive Product Innovation
          </p>
        </div>

        <div>
          <Link to={"/case-studies"} className="flex gap-2 border rounded-lg p-2 lg:p-3 text-[14px] lg:text-[16px] transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <p>Read more</p>
            <img src={arrowDark} alt="" style={{ transform: 'rotate(-45deg)' }} />
          </Link>
        </div>
      </div>

      <div className="flex justify-between overflow-x-scroll xl:overflow-hidden">
        {/* Visible Cards */}
          {caseStudies.slice(0,3).map((box, index) => (
            <CaseStudyCard
            key={index}
            logo={box.image}
            title={box.title}
            desc={box.desc}
            url={box.url}
            flag={index == caseStudies.length - 1 && window.innerWidth > 1023}
          />
          ))}
      </div>
    </div>
  );
};

export default CaseStudies;
