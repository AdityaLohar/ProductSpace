import Companies from "../components/Companies";
import HandsOnTools from "../components/HandsOnTools";
import MeetAlums from "../components/MeetAlums";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Transitions from "../components/Transitions";
import CourseSnapshot from "../components/CourseSnapshot";
import Curriculum1 from './../components/Curriculum1';
import FaqPmFellowship from "../components/FaqPmFellowship";
import Faq from './../components/Faq';
import StructureOfPmFellowship from "../components/StructureOfPmFellowship";
import BottomBar from "../components/BottomBar";

import disco3 from "../assets/disco-lights1.png";
import disco2 from "../assets/disco-lights2.png";
import disco1 from "../assets/disco-lights3.png";

const PmFellowship = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  const [showBottomBar, setShowBottomBar] = useState(false);

  // Scroll to section if the URL has a hash
  useEffect(() => {
    if (location.hash === "#reviews") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
  })

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
          <Transitions />
          <ResultsPmFellowship />
          <CourseSnapshot />
          {/* <StructureOfPmFellowship /> */}
          <Curriculum1 />
          <HandsOnTools />
          <MeetMentors bgColor={"#fff"} />
          <div ref={sectionRef} id="reviews">
            <ReviewPmFellowship />
          </div>
          <Companies />
          <MeetAlums />
          <FaqPmFellowship />
          {showBottomBar && <BottomBar />}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PmFellowship;
