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
import { Helmet } from "react-helmet-async";

const GenAi = () => {
  return (
    <div className="w-full max-w-screen-2xl bg-white mx-auto">
      <Helmet>
        <title>Gen AI for PM - Product Space</title>
        <meta
          name="description"
          content="Join our Gen AI for PM Fellowship course and excel in your Product Management Career with practical AI skills and 1:1 mentorship from industry experts."
        />
        <link rel="canonical" href="https://theproductspace.in/gen-ai-for-pm" />
      </Helmet>

      <GenAiHero />

      <WhyGenAi />
      {/* <GenAiCourseOutline /> */}
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
