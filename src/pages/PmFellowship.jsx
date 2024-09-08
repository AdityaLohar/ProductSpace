import Companies from "../components/Companies";
import CourseSnapshot from "../components/CourseSnapshot";
import HandsOnTools from "../components/HandsOnTools";
import LearningWithPace from "../components/LearningWithPace";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";

const PmFellowship = () => {
    return (
        <div className="bg-white font-hind xl:flex xl:flex-col items-center">
          <div className="w-full max-w-screen-2xl">
            <PmFellowshipHeroSection />
            <CourseSnapshot />
            <LearningWithPace />
            <HandsOnTools />
            <WhyPmFellowship />
            <Companies />
            <ResultsPmFellowship />
            <MeetMentors bgColor={"#F7F0FF"} />
            <ReviewPmFellowship />
          </div>
    
          <div className="w-full max-w-screen-2xl space-y-10 md:space-y-0">
            
          </div>
        </div>
      );
}

export default PmFellowship
