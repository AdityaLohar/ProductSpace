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
import BottomBar from "./../components/BottomBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import CourseSnapshot from "../components/CourseSnapshot";
import Partnerships from "../components/Partnerships";
import HelpSucceed from "../components/HelpSucceed";

const Home = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition > (4 * screenHeight) / 5) {
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
      <Helmet>
        <title>
          Product Space | The Only Personalized Product Management Course for
          Your Unique Journey
        </title>
        <meta
          name="description"
          content="Join our PM Fellowship cohort to upskill and excel into product management roles from any background. Get access to industry live projects, 1-1 expert mentorship, and placement support to thrive in your PM job."
        />
        <link rel="canonical" href="https://theproductspace.in/" />
      </Helmet>

      <Partnerships />
      <HelpSucceed />
    </div>
  );
};

export default Home;
