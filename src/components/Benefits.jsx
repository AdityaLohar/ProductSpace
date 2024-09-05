import vector1 from "../assets/benifits-1-1 1.svg";
import vector3 from "../assets/benifits-2-1 1.svg";
import vector2 from "../assets/Vector (3).svg";
import vector4 from "../assets/Vector (4).svg";

const Benefits = () => {
  return (
    <div className="flex flex-col bg-[#F1E6FF] mb-10 lg:mb-20 rounded-3xl pb-10">
      <div className="py-5 lg:py-12">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center font-sans">
          Benefits of Joining Product Space
        </div>
        <div className="text-[16px] text-center text-gray-800 font-medium px-4 xl:px-60">
          <p>Connect with Mentors and Alums to get career counselling </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-2 lg:px-16 py-4 lg:py-8">
        <div className="lg:border-r lg:border-r-[3px] border-[#9747FF] md:border-b-0 w-full md:w-auto lg:px-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
          <div className="flex-shrink-0 mb-4">
            <img src={vector1} alt="" className="w-16 h-15" />
          </div>
          <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
            Personalized Guidance
          </div>
          <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7 lg:pr-2">
            With dedicated 1:1 mentorship by seasoned product leaders like VPs,
            Directors & Sr PMs.
          </div>
        </div>

        <div className="lg:border-r lg:border-r-[3px] border-[#9747FF] md:border-b-0 w-full md:w-auto lg:px-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
          <div className="flex-shrink-0 mb-8">
            <img src={vector2} alt="" className="w-16 h-12" />
          </div>
          <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
            Interview Preparation
          </div>
          <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7 lg:pr-2">
            Comprehensive interview preparation, feedback sessions and mock
            interviews.
          </div>
        </div>

        <div className="lg:border-r lg:border-r-[3px] border-[#9747FF] w-full md:w-auto lg:px-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
          <div className="flex-shrink-0 mb-4">
            <img src={vector3} alt="" className="w-16 h-15" />
          </div>
          <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
            Industry Focus Content
          </div>
          <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7 lg:pr-2">
            Actionable insights tailored to specific domains & real product
            use-cases.
          </div>
        </div>

        <div className="w-full md:w-auto lg:px-2 flex flex-col items-center lg:items-start text-center lg:text-start">
          <div className="flex-shrink-0 mb-4">
            <img src={vector4} alt="" className="w-16 h-12 lg:mb-4" />
          </div>
          <div className="text-[20px] lg:text-[28px] font-semibold mb-4 lg:mb-10 font-sans">
            Job Placements Support
          </div>
          <div className="text-[14px] lg:text-[18px] text-gray-500 font-medium md:leading-7 lg:pr-2">
            Access to the latest jobs from 350+ product companies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
