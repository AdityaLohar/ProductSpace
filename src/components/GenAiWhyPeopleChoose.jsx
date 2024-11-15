import arrow from "../assets/right-arrow.svg";
import netLeft from "../assets/net-pattern-left.svg";
import netRight from "../assets/net-pattern-right.svg";
import alumni from "../data/AlumniData";

const Card = ({ name, profile, title, desc, company, curCompany }) => {
  return (
    <div className="flex flex-col bg-[#F9F9FB] p-4 lg:p-6 gap-6 rounded-xl text-[#0c0c0c] w-[350px] lg:min-w-[450px] lg:max-w-[500px] scroll-item hover:cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-start">
          <div>
            <img
              src={profile}
              alt="profile-img"
              className="h-[70px] lg:h-[79px] w-[70px] lg:w-[79px]"
            />
          </div>
          <div className="w-[70%]">
            <div className="font-semibold text-[16px] lg:text-[18px]">{name}</div>
            <div className="text-[#808080] text-[12px] lg:text-[16px]">
              {title}, {company}
            </div>
          </div>
        </div>

        <div>
          <img src={curCompany} alt="company-img" className="w-20" />
        </div>
      </div>

      <div className="bg-white rounded-xl text-start p-4 lg:p-6">{desc}</div>
    </div>
  );
};

const GenAiWhyPeopleChoose = () => {
  return (
    <div className="bg-white pt-16 pb-10 font-inter">
      <div
        className="flex bg-[#66DAFE] text-white flex-col py-12 lg:py-24 mx-auto items-between justify-between text-center gap-6"
        style={{
          backgroundImage: `url(${netLeft}), url(${netRight})`,
          backgroundPosition: "left 10px top, right 10px top", // Keep images at the top corners
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundSize: "450px 100%", // Fixes image width to 150px and allows full height
        }}
      >
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          <h2>Why People Choose PS for their career</h2>
        </div>

        <div className="flex flex-col gap-8">
          <div className="overflow-x-scroll mentor-scrollbar">
            <div
              className={`scroll-wrapper-3 animate hover:cursor-default`}
              onMouseEnter={() =>
                document.documentElement.style.setProperty(
                  "--scroll-animation-play-state",
                  "paused"
                )
              }
              onMouseLeave={() =>
                document.documentElement.style.setProperty(
                  "--scroll-animation-play-state",
                  "running"
                )
              }
            >
              {[...Array(20)].map((_, i) =>
                alumni
                  .slice(0, Math.ceil(alumni.length / 2))
                  .map((alum, index) => (
                    <Card
                      key={`${alum.id}-${index}-${i}`}
                      name={alum.name}
                      profile={alum.profile}
                      title={alum.curPost}
                      desc={alum.testimonial}
                      company={alum.company}
                      curCompany={alum.curCompany}
                    />
                  ))
              )}
            </div>
          </div>

          <div className="overflow-x-scroll mentor-scrollbar">
            <div
              className={`scroll-wrapper-4 animate hover:cursor-default`}
              onMouseEnter={() =>
                document.documentElement.style.setProperty(
                  "--scroll-animation-play-state",
                  "paused"
                )
              }
              onMouseLeave={() =>
                document.documentElement.style.setProperty(
                  "--scroll-animation-play-state",
                  "running"
                )
              }
            >
              {[...Array(20)].map((_, i) =>
                alumni
                  .slice(Math.ceil(alumni.length / 2))
                  .map((alum, index) => (
                    <Card
                      key={`${alum.id}-${index}-${i}`}
                      name={alum.name}
                      profile={alum.profile}
                      title={alum.curPost}
                      desc={alum.testimonial}
                      company={alum.company}
                      curCompany={alum.curCompany}
                    />
                  ))
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <a href="https://topmate.io/propel/1232054" target="_blank" className="bg-[#24304c] text-white flex items-center gap-2 p-4 rounded-lg px-4 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <p>Connect with Alums</p>
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenAiWhyPeopleChoose;
