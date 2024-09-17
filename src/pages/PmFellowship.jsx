import Companies from "../components/Companies";
import CourseSnapshot from "../components/CourseSnapshot";
import Footer from "../components/Footer";
import HandsOnTools from "../components/HandsOnTools";
import LearningWithPace from "../components/LearningWithPace";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PmFellowship = () => {
    return (
      <HelmetProvider>
        <div className="bg-white font-hind xl:flex xl:flex-col items-center">
          <Helmet>
            <title>PM Fellowship Page - Product Space</title>
            <meta name="description" content="Welcome to the PM Fellowship page of Product Space." />
          </Helmet>

          <div className="w-full max-w-screen-2xl">
            <PmFellowshipHeroSection />
            <CourseSnapshot />
            <LearningWithPace />
            <HandsOnTools />
            <WhyPmFellowship />
            <Companies />
            <ResultsPmFellowship />
            <MeetMentors bgColor={"#fff"} />
            <ReviewPmFellowship />
            <Footer />
          </div>
    
          <div className="w-full max-w-screen-2xl space-y-10 md:space-y-0">
            
          </div>
        </div>
      </HelmetProvider>
      );
}

export default PmFellowship
