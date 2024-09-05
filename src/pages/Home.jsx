import Alumini from "../components/Alumni";
import Benefits from "../components/Benefits";
import CaseStudies from "../components/CaseStudies";
import MeetMentors from "../components/MeetMentors";
import NewsLetter from "../components/NewsLetter";
import Results from "../components/Results";
import bgImage from "../assets/title-bg.svg";
import Faq from "../components/Faq";
import CircleFlipGrid from "../components/CircleFlipGrid";

const Home = () => {
  return (
    <div className="mx-[12px] md:mx-[80px] lg:mx-[120px] font-hind">
      <div className="bg-transparent py-16 lg:py-16">
        <div className=" mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start gap-24 lg:gap-4">
          <div className="w-full lg:w-1/2 px-6 lg:px-0">
            <h1
              className="text-2xl lg:text-[50px] font-bold mb-6 lg:leading-[60px] bg-auto bg-no-repeat font-sans bg-[position:top_2%_left_50%] 
    lg:bg-[position:top_2%_left_25%]"
              style={{
                backgroundImage: `url(${bgImage})`,
                // backgroundPosition: "top 2% left 30%",
                backgroundSize: "59%",
              }}
            >
              <span className="font-normal text-[28px] lg:text-[44px]">
                Beginner to Expert{" "}
              </span>
              <span className="text-[34px] lg:text-[50px]">
                Accelerate your{" "}
              </span>
              <span className="text-[#21C1F3] text-[34px] lg:text-[52px]">
                Product{" "}
              </span>{" "}
              <span className="text-[34px] lg:text-[52px]">Career</span>
            </h1>

            <div className="lg:hidden w-full lg:w-1/2 flex justify-center mb-10 items-center">
              <CircleFlipGrid />
            </div>

            <p className="lg:w-4/5 text-[16px] lg:text-[18px] mb-4 font-medium">
              1:1 Mentorship with Product Leaders who really care
            </p>

            <div className="lg:w-4/5 items-center mb-4 text-sm lg:text-lg">
              4.8 stars
              <span className="ml-2 text-sm lg:text-lg font-base">
                500+ Student Reviews
              </span>
            </div>

            <div className="mt-8 font-semibold text-sm lg:text-lg">
              <button className="w-full lg:w-3/5 bg-[#FEC923] text-black py-1.5 px-4 lg:px-16 rounded-full hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out">
                Enroll Now!
              </button>
            </div>
          </div>

          <div className="hidden lg:flex w-full md:w-3/4 lg:w-1/2 flex justify-center">
            <CircleFlipGrid />
          </div>
        </div>
      </div>

      <MeetMentors />
      <Results />
      <CaseStudies />
      <Alumini />
      <Benefits />
      <NewsLetter />
      <Faq />
    </div>
  );
};

export default Home;
