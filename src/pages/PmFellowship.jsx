import Companies from "../components/Companies";
import HandsOnTools from "../components/HandsOnTools";
import LearningWithPace from "../components/LearningWithPace";
import MeetAlums from "../components/MeetAlums";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PmFellowship = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  // Scroll to section if the URL has a hash
  useEffect(() => {
    if (location.hash === "#reviews") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <HelmetProvider>
      <div className="bg-white font-hind xl:flex xl:flex-col items-center">
        <Helmet>
          <title>PM Fellowship Page - Product Space</title>
          <meta
            name="description"
            content="Welcome to the PM Fellowship page of Product Space."
          />
        </Helmet>

        <div className="w-full max-w-screen-2xl">
          <PmFellowshipHeroSection />
          <LearningWithPace />
          <HandsOnTools />
          <WhyPmFellowship bgColor={"#F7F0FF"} />
          <Companies />
          <ResultsPmFellowship />
          <MeetMentors bgColor={"#fff"} />
          <div ref={sectionRef} id="reviews">
            <ReviewPmFellowship />
          </div>
          <MeetAlums />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PmFellowship;
