import alumni from "../data/AlumniData";
import AlumniCard from "./AlumniCard";

const Alumni = () => {
  return (
    <div className="flex flex-col bg-[#21C1F31A] py-20 lg:py-24">
      <div className="pb-10 lg:pb-12">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>
      </div>

      <div className="flex justify-center overflow-y-hidden overflow-x-scroll mentor-scrollbar">
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
                <AlumniCard
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

export default Alumni;
