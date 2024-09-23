import vector1 from "../assets/benifits-1-1 1.svg";
import vector3 from "../assets/benifits-2-1 1.svg";
import vector2 from "../assets/Vector (3).svg";
import vector4 from "../assets/Vector (4).svg";

const BenefitCard = ({ vector, title, desc, size }) => {
  return (
    <div>
      <div
        className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full hover:cursor-arrow transition-shadow duration-100 hover:shadow-[0_0px_18px_rgba(151,71,255,0.3)]`}
      >
        <div
          className={`flex ${
            size == 16 ? "mb-4" : "mb-6"
          } justify-center sm:justify-start`}
        >
          <img src={vector} alt="" className={`w-${size} h-${size - 1}`} />
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

const Benefits = ({ bgColor }) => {
  return (
    <div className={`flex flex-col bg-[${bgColor}] pb-10`}>
      <div className="py-5 lg:py-12">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center font-sans px-4">
          Benefits of Joining Product Space
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-800 font-medium px-4 xl:px-60 py-2">
          <p>Connect with Mentors and Alums to get career counselling </p>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-5 px-2 lg:px-16 py-4 lg:py-8">
        <div>
          <div
            className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full hover:cursor-arrow transition-shadow duration-100 hover:shadow-[0_0px_18px_rgba(151,71,255,0.3)]`}
          >
            <div className={`flex mb-2 justify-center sm:justify-start`}>
              <img src={vector1} alt="" className="w-[70px] h-[70px]" />
            </div>
            <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
              Personalized Guidance
            </div>
            <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7">
              With dedicated 1:1 mentorship by seasoned product leaders like
              VPs, Directors & Sr PMs
            </div>
          </div>
        </div>

        <BenefitCard
          vector={vector2}
          title={"Interview Preparation"}
          desc={`Comprehensive interview preparation, feedback sessions and mock
            interviews.`}
          size={16}
        />

        <div>
          <div
            className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full hover:cursor-arrow transition-shadow duration-100 hover:shadow-[0_0px_18px_rgba(151,71,255,0.3)]`}
          >
            <div className={`flex mb-2 justify-center sm:justify-start`}>
              <img src={vector3} alt="" className="w-[70px] h-[70px]" />
            </div>
            <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
              Industry Focus Content
            </div>
            <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7">
            Actionable insights tailored to specific domains & real product use-cases.
            </div>
          </div>
        </div>

        <div>
          <div
            className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full hover:cursor-arrow transition-shadow duration-100 hover:shadow-[0_0px_18px_rgba(151,71,255,0.3)]`}
          >
            <div className={`flex mb-4 justify-center sm:justify-start`}>
              <img src={vector4} alt="" className="h-16 w-14 md:h-14" />
            </div>
            <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
              Job Placements Support
            </div>
            <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7">
              Access to the latest jobs from 350+ product companies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
