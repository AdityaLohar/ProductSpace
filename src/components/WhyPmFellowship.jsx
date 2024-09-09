import vector1 from "../assets/benifits-1-1 1.svg";
import vector3 from "../assets/benifits-2-1 1.svg";
import vector2 from "../assets/Vector (3).svg";
import vector4 from "../assets/Vector (4).svg";

const WhyPmFellowshipCard = ({ vector, title, desc, size }) => {
  return (
    <div>
      <div
        className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full`}
        style={{ boxShadow: "0 -4px 15px rgba(0, 0, 0, 0.1)" }}
      >
        <div className={`flex ${size == 16 ? "mb-4" : "mb-6"} justify-center sm:justify-start`}>
          <img src={vector} alt="" className={`w-${size} h-${size-1}`} />
        </div>
        <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
          {title}
        </div>
        <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7">
          {desc}
        </div>
      </div>
    </div>
  );
};

const WhyPmFellowship = () => {
  return (
    <div className="flex flex-col bg-[#F1E6FF] pb-10 px-1 md:px-10 xl:px-32">
      <div className="py-5 lg:py-12">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center font-sans px-4">
          Why should you choose our <span className="text-[#9747FF]">PM Fellowship programme</span>
        </div>
        <div className="text-[16px] text-center text-gray-800 font-medium px-4 xl:px-60">
          <p>Connect with Mentors and Alums to get career counselling </p>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-5 px-2 lg:px-16 py-4 lg:py-8">
        <WhyPmFellowshipCard
          vector={vector1}
          title={"Personalized Guidance"}
          desc={`With dedicated 1:1 mentorship by seasoned product leaders like VPs,
          Directors & Sr PMs.`}
          size={16}
          />

        <WhyPmFellowshipCard
          vector={vector2}
          title={"Interview Preparation"}
          desc={`Comprehensive interview preparation, feedback sessions and mock
            interviews.`}
            size={14}
            />

        <WhyPmFellowshipCard
          vector={vector3}
          title={"Industry Focus Content"}
          desc={`Actionable insights tailored to specific domains & real product use-cases.`}
          size={16}
          />
        
        <WhyPmFellowshipCard
          vector={vector4}
          title={" Job Placements Support"}
          desc={`Access to the latest jobs from 350+ product companies`}
          size={14}
        />

      </div>
    </div>
  );
};

export default WhyPmFellowship;
