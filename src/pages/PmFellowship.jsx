import Companies from "../components/Companies";
import HandsOnTools from "../components/HandsOnTools";
import LearningWithPace from "../components/LearningWithPace";
import MeetAlums from "../components/MeetAlums";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { Helmet } from "react-helmet-async";
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
    <div className="bg-white font-hind xl:flex xl:flex-col items-center">
     <Helmet>
      <title>PM Fellowship | Product Space</title>
      <meta
        name="description"
        content="Join our PM Fellowship cohort to upskill and excel into product management roles from any background. Get access to industry live projects, 1-1 expert mentorship, and placement support to thrive in your PM job"
      />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "PM Fellowship Page - Product Space",
            "description": "Join our PM Fellowship cohort to upskill and excel into product management roles from any background. Get access to industry live projects, 1-1 expert mentorship, and placement support to thrive in your PM job"
          }
        `}
      </script>
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
  );
};

export default PmFellowship;
