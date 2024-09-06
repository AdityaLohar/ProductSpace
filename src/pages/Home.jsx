import Alumini from "../components/Alumni";
import Benefits from "../components/Benefits";
import MeetMentors from "../components/MeetMentors";
import NewsLetter from "../components/NewsLetter";
import Results from "../components/Results";
import Faq from "../components/Faq";
import Companies from "../components/Companies";
import HomeHeroSection from './../components/HomeHeroSection';
import CaseStudies1 from "../components/CaseStudies1";

const Home = () => {
  return (
    <div className="mx-[12px] md:mx-[80px] lg:mx-[120px] 2xl:mx-auto max-w-screen-xl font-hind">
      <div className="bg-transparent py-5 lg:py-16">
        <HomeHeroSection />
      </div>

      <MeetMentors />
      <Companies />
      <Results />
      <CaseStudies1 />
      <Alumini />
      <Benefits />
      <NewsLetter />
      <Faq />
    </div>
  );
};

export default Home;
