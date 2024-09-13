import tick from "../assets/tick-green.svg";

const VideoContent = () => {
  return (
    <div>
      <div className="w-full aspect-square rounded-[10%] overflow-hidden bg-black">
        <video className="w-full h-full object-cover">
          <source src="video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center mt-4 text-[20px] font-semibold">
        Message from Program Director - PM Fellowship
      </div>
    </div>
  );
};

const CourseSnapshot = () => {
  return (
    <div className="bg-[#F7F0FF] pb-0 px-4 md:px-10 xl:px-32 pt-10 font-hind">
      <div className="flex flex-col lg:flex-row py-4 lg:py-12 items-center justify-between gap-12">
        <div className="flex flex-col gap-2 lg:gap-6">
          <div className="text-[28px] lg:text-[40px] font-bold px-2 mb-4 lg:mb-8 text-center lg:text-start font-sans">
            Course Snapshot
          </div>

          <div className="flex flex-col lg:hidden w-full items-start gap-6 items-center mb-6 lg:mb-0">
            <VideoContent />
          </div>

          <div className="flex flex-col lg:flex-row bg-[#9747FF] p-4 lg:p-10 text-[18px] text-white gap-4 xl:gap-8 rounded-2xl flex-wrap">
            <div className="flex items-center w-full lg:max-w-[150px] justify-center lg:justify-start">
              Analytics India Magazine, 2023
            </div>
            <div className="flex justify-around md:gap-4 xl:gap-8">
              <div className="lg:max-w-[120px] text-center">
                <span className="text-[32px] font-semibold text-yellow-400">
                  15+
                </span>{" "}
                <br />
                Case Studies
              </div>
              <div className="lg:max-w-[120px] text-center">
                <span className="text-[32px] font-semibold text-yellow-400">
                  14+
                </span>{" "}
                <br />
                Live Projects
              </div>
            </div>
          </div>

          <div className="space-y-3 my-8 text-[16px] md:text-[18px]">
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Up-to-date Syllabus with Generative AI
              Modules
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Complimentary Python Programming
              Bootcamp
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> 60+ Case studies & 14+ Industry Projects
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> IIIT Bangalore Alumni Status
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Outcomes of these programs have been
              audited by Deloitte
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> About 30 weeks of specialized content as
              per track of choice
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-1/2 items-start gap-6 px-16 items-center">
          <VideoContent />
        </div>
      </div>
    </div>
  );
};

export default CourseSnapshot;
