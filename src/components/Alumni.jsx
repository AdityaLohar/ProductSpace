import alumni from "../data/AlumniData";
import AlumniCard from "./AlumniCard";

const Alumni = () => {
  return (
    <div className="flex flex-col bg-white pb-0 lg:pb-16">
      <div className="py-5 lg:py-10">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>
      </div>

      <div className="h-[340px] overflow-y-hidden overflow-x-scroll mentor-scrollbar">
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

      <div className="flex justify-center font-semibold">
        <a href="https://topmate.io/propel/1232054 " target="_blank" className="flex justify-center w-full md:w-2/5 lg:w-1/3">
          <button className="w-[300px] text-[20px] bg-[#FFC303] hover:bg-yellow-500 text-black p-4 lg:p-3 rounded-full mt-6">
              Meet with Alums
          </button>
        </a>
      </div>
    </div>
  );
};

export default Alumni;
