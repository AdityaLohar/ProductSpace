import WhyGenAi from "../components/WhyGenAi";
import GenAiCourseOutline from "../components/GenAiCourseOutline";
import GenAiHero from "../components/GenAiHero";
import GenAiCurriculum from "../components/GenAiCurriculum";
import GenAiTools from "../components/GenAiTools";
import GenAiInstructors from "../components/GenAiInstructors";
import GenAiIsCourseRight from "../components/GenAiIsCourseRight";
import GenAiCertificate from "../components/GenAiCertificate";
import GenAiFaq from "./../components/GenAiFaq";
import GenAiKnowMore from "../components/GenAiKnowMore";
import GenAiWhyEnroll from "../components/GenAiWhyEnroll";
import GenAiWhyPeopleChoose from "../components/GenAiWhyPeopleChoose";
import VideoWithCustomCover from "../components/VideoWithCustomCover";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GenAi = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  // Scroll to section if the URL has a hash
  useEffect(() => {
    if (location.hash === "#genai-workshop") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full max-w-screen-2xl bg-white mx-auto">
      <Helmet>
        <title>AI for PM - Product Space</title>
        <meta
          name="description"
          content="Join our AI for PM Fellowship course and excel in your Product Management Career with practical AI skills and 1:1 mentorship from industry experts."
        />
        <link rel="canonical" href="https://theproductspace.in/ai-for-pm" />
      </Helmet>

      <GenAiHero />

      {/* <GenAiCourseOutline /> */}
      <div ref={sectionRef} id="genai-workshop">
        <WhyGenAi />
      </div>
      <VideoWithCustomCover />
      <GenAiCurriculum />
      <GenAiTools />
      <GenAiInstructors />
      <GenAiIsCourseRight />
      <GenAiWhyEnroll />
      <GenAiCertificate />
      <GenAiWhyPeopleChoose />
      <GenAiKnowMore />
      <GenAiFaq />
    </div>
  );
};

export default GenAi;
