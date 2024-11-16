import rumit from "../assets/rumit.jpeg";

const CardLeft = ({title, image}) => {
  return (
    <div className="flex justify-center items-center p-4 lg:p-6 rounded-l-full bg-gradient-to-r from-[#FFFFFF] to-transparent w-full lg:w-[700px] shadow-[-15px_0px_28px_-20px_rgba(0,0,0,0.5)]">

      <div className="font-semibold text-[16px] lg:text-[20px] text-center">
        <p>{title}</p>
      </div>

    </div>
  );
};

const CardRight = ({title, image}) => {
  return (
    <div className="flex justify-center items-center p-4 lg:p-6 rounded-r-full bg-gradient-to-l from-[#FFFFFF] to-transparent w-full lg:w-[700px] shadow-[15px_0px_28px_-20px_rgba(0,0,0,0.5)]">
      <div className="font-semibold text-[16px] lg:text-[20px] text-center">
        <p>{title}</p>
      </div>
    </div>
  );
};

const GenAiIsCourseRight = () => {
  return (
    <div className="px-4 md:px-10 xl:px-32 py-16 lg:py-20 flex flex-col gap-8 items-center font-inter text-center"
      style={{
        background: "radial-gradient(circle at top center, #f2f2f2, #A1E1F5)",
      }}
    >
      <div className="flex flex-col gap-2 text-[#24304C]">
        <h2 className="text-[24px] lg:text-[32px] font-bold">Is This Course Right for You?</h2>
        <p className="text-[#848484] text-[16px] lg:text-[18px]">
          This course is ideal for the following candidates
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <CardLeft title={"PMs & SPMs"} image={rumit} />
        <CardRight title={"Technology Professionals"} image={rumit} />
        <CardLeft title={"Technology Consultants"} image={rumit} />
        <CardRight title={"UI/UX Designers"} image={rumit} />
        <CardLeft title={"Founders of AI Startups"} image={rumit} />
      </div>
    </div>
  );
};

export default GenAiIsCourseRight;
