import { useState, useEffect } from "react";
import Alumini from "../components/Alumni";
import Benefits from "../components/Benefits";
import MeetMentors from "../components/MeetMentors";
import NewsLetter from "../components/NewsLetter";
import Results from "../components/ResultsHome";
import Faq from "../components/Faq";
import Companies from "../components/Companies";
import HomeHeroSection from "./../components/HomeHeroSection";
import CaseStudies1 from "../components/CaseStudies1";
import BottomBar from './../components/BottomBar';
import Footer from "../components/Footer";

const Home = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition > (4*screenHeight/5)) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-hind xl:flex xl:flex-col items-center">
      <div className="bg-transparent py-5 max-w-screen-xl lg:py-16">
        <HomeHeroSection />
      </div>

      <div className="w-full max-w-screen-2xl">
        <MeetMentors bgColor={"#D7F5FF"} />
        <Companies />
      </div>

      <hr className="w-full max-w-screen-xl border-t-2" />

      <div className="w-full max-w-screen-2xl space-y-10 md:space-y-0">
        <Results />
        <CaseStudies1 />
        <Alumini />
        <Benefits bgColor={"#F1E6FF"} />
        {/* <NewsLetter /> */}
        <Faq />
      </div>

      <div className="w-full max-w-screen-2xl">
        <Footer />
      </div>

      {showBottomBar && <BottomBar />}
    </div>
  );
};

export default Home;