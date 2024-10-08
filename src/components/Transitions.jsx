import alumni from "../data/AlumniData";
import chevron from "../assets/chevron-double.svg";
import { useState } from "react";

const TransitionCard = ({
  profile,
  name,
  curCompany,
}) => {
  const [isSquare, setIsSquare] = useState(false);

    const handleImageLoad = (e) => {
        const imgWidth = e.target.naturalWidth;
        const imgHeight = e.target.naturalHeight;
        
        if (imgWidth === imgHeight) {
            setIsSquare(true);
        } else {
            setIsSquare(false);
        }
    };
    
  return (
    <div
      className="w-[220px] h-[266px] rounded-3xl bg-white p-4 flex flex-col items-center justify-between gap-4 bg-white"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Circular image */}
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border border-1 border-white">
          <img
            src={profile}
            alt="profile-picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name below the image */}
        <p className="text-[16px] font-sans font-bold text-center mt-3">
          {name}
        </p>
      </div>

      <div className="flex items-center h-[50px] justify-center w-full">
        <img
            src={curCompany}
            alt="company"
            className={isSquare ? "w-16 h-auto" : "h-12 w-auto"}
            onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

const Transitions = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] pt-3 pb-10 lg:pb-16">
      <div className="py-5 lg:py-10">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans px-4">
          220+ Product Transitions in last 6 Months
        </div>
      </div>

      <div className="h-[270px] overflow-y-hidden overflow-x-scroll mentor-scrollbar">
      {/* <div className="h-[600px] overflow-x-scroll md:overflow-x-hidden mentor-scrollbar md:scroll-container"> */}
        <div
          className={`scroll-wrapper animate hover:cursor-default`}
          onMouseEnter={() => document.documentElement.style.setProperty('--scroll-animation-play-state', 'paused')}
          onMouseLeave={() => document.documentElement.style.setProperty('--scroll-animation-play-state', 'running')}
        >
          {[...Array(5)].map((_, i) => (
            alumni.map((alums, index) => (
              <a
                href={alums.linkedin}
                target="_blank"
                key={`${alums.id}-${index}-${i}`}
                className="scroll-item hover:cursor-pointer"
              >
                <TransitionCard
                  profile={alums.profile}
                  name={alums.name}
                  prevCompany={alums.prevCompany}
                  prevPost={alums.prevPost}
                  curCompany={alums.curCompany}
                  curPost={alums.curPost}
                  testimonial={alums.testimonial}
                />
              </a>
            ))
          ))}

        </div>
      </div>
    </div>
  );
};

export default Transitions;
