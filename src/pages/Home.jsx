import Alumini from "../components/Alumni";
import Benefits from "../components/Benefits";
import MeetMentors from "../components/MeetMentors";
import NewsLetter from "../components/NewsLetter";
import Results from "../components/Results";
import Faq from "../components/Faq";
import Companies from "../components/Companies";
import HomeHeroSection from "./../components/HomeHeroSection";
import CaseStudies1 from "../components/CaseStudies1";

const Home = () => {
  return (
    <div className=" font-hind xl:flex xl:flex-col items-center">
      <div className="bg-transparent py-5 max-w-screen-xl lg:py-16">
        <HomeHeroSection />
      </div>

      <div className="w-full max-w-screen-2xl">
        <MeetMentors />
        <Companies />
      </div>

      <hr className="w-full max-w-screen-xl border-t-4" />

      <div className="w-full max-w-screen-2xl space-y-10 md:space-y-0">
        <Results />
        <CaseStudies1 />
        <Alumini />
        <Benefits />
        <NewsLetter />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
