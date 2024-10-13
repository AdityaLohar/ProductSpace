import { Link } from "react-router-dom";
import arrow from "../assets/right-arrow.svg";
import vectorIcon from "../assets/resultsIcon.svg";

const benefits = [
  "Product strategy",
  "Roadmapping",
  "User research",
  "Data analysis",
  "Feature prioritization",
  "Stakeholder management",
  "User empathy",
  "Market analysis",
  "Product lifecycle management",
  "Agile methodologies",
  "Wireframing",
  "A/B testing",
  "Business modeling",
  "Competitive analysis",
  "Customer journey mapping",
];

const BenefitCard = ({ title }) => {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-2">
      <img src={vectorIcon} alt="" className="w-6 h-6" />
      <p>{title}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <div
      className={`flex flex-col gap-8 lg:gap-0 lg:flex-row pt-20 pb-10 lg:py-28 px-4 lg:px-28`}
    >
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="text-[28px] lg:text-[40px] font-bold text-center lg:text-start font-sans">
          Benefits of Joining <br /> Product Space
        </div>

        <div className="text-[14px] lg:text-[16px] text-center lg:text-start text-gray-800 font-medium">
          <p>Connect with Mentors and Alums to get career counselling </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <Link to={"/pm-fellowship"}>
            <button
              // onClick={toggleModal}
              className="flex items-center gap-2 justify-center text-[16px] w-full lg:w-[164px] bg-[#FFA000] text-white p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <p>Get Started</p>
              <img src={arrow} alt="" />
            </button>
          </Link>

          <a href={"https://topmate.io/propel/62841"} target="_blank">
            <button
              // onClick={toggleModal}
              className="flex items-center gap-2 justify-center text-[16px] font-medium w-full lg:w-[241px] bg-[#FFA0001F] text-black p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-[#B8B8B8]"
            >
              Meet 1-1 with mentors
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 font-inter font-semibold">
        {benefits.map((title, index) => (
          <BenefitCard key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
