import heroIcon1 from "../assets/pm-hero-4.svg";
import heroIcon2 from "../assets/pm-hero-1.svg";
import heroIcon3 from "../assets/pm-hero-3.svg";
import heroIcon4 from "../assets/pm-hero-2.svg";

const WhyGenAi = () => {
  return (
    <div className="md:px-10 xl:px-28 md:py-8 flex flex-col gap-8 font-inter">
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-[#24304C]">
          Why Gen AI for PM ?
        </h1>
        <div className="text-[16px] text-[#24304C] w-3/4">
          <p>
            AI is transforming product management. This course equips you with
            the tools to leverage AI effectively, enhancing your ability to
            build innovative, data-driven products.
          </p>
        </div>
      </div>

      <div className="hidden text-[16px] lg:grid grid-cols-2 lg:grid-cols-4 gap-2 rounded-2xl px-4 lg:px-8 py-6 border-2 border-gray-100 mt-2 mx-4 lg:mx-8 shadow-lg mb-12 lg:mb-0 text-[#141414]">
        {/* PM-Focused Expertise */}
        <div className="flex flex-col justify-between items-start gap-2 text-start">
          <div className="flex items-start gap-2">
            <img
              src={heroIcon1}
              alt="PM-Focused Expertise Icon"
              className="h-5 w-5"
            />
            <div className="font-medium text-[20px]">Expert-led Training</div>
          </div>
          <div className="text-[16px]">
            Designed by PM specific application
          </div>
        </div>

        {/* Real-World Applications   */}
        <div className="flex flex-col justify-between items-start gap-2 text-start ">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon2}
              alt="Real-World Applications   Icon"
              className="h-5 w-5"
            />
            <div className="font-medium text-[20px]">
              Hands-on Learning{" "}
            </div>
          </div>
          <div className="text-[16px]">
            Work on practical, real world projects
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="flex flex-col justify-between items-start gap-2 text-start ">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon3}
              alt="Competitive Edge Icon"
              className="h-6 w-6"
            />
            <div className="font-medium text-[20px]">8+ Trending AI Tools</div>
          </div>
          <div className="text-[16px]">
            Master in-demand AI tools
          </div>
        </div>

        {/* Placement Support */}
        <div className="flex flex-col justify-between items-start gap-2 text-start ">
          <div className="flex items-start lg:items-center gap-2">
            <img
              src={heroIcon4}
              alt="Placement Support Icon"
              className="h-6 w-6"
            />
            <div className="font-medium text-[20px]">AI Resource Library</div>
          </div>
          <div className="text-[16px]">
            Get access to exhaustive AI resource guides and case studies
          </div>
        </div>
      </div>

      {/* Carousel for smaller screens */}
      <div className="pm-hero-wrapper text-[16px] lg:hidden py-6 border-t-2 border-b-2 border-gray-200 mt-2 mb-12 lg:mb-0">
        <div className="carousel flex gap-0">
          {/* Original items */}
          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon1}
                alt="PM-Focused Expertise Icon"
                className="h-5 w-5"
              />
              <div className="font-medium text-[18px] lg:text-[20px]">
                PM-Focused Expertise
              </div>
            </div>
            <div className="text-[16px]">
              Designed by Product Leaders
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon2}
                alt="Real-World Applications   Icon"
                className="h-5 w-5"
              />
              <div className="font-medium text-[18px] lg:text-[20px]">
                Real-World Applications{" "}
              </div>
            </div>
            <div className="text-[16px]">
              Practical, Project-Based Learning
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon3}
                alt="Competitive Edge Icon"
                className="h-6 w-6"
              />
              <div className="font-medium text-[18px] lg:text-[20px]">Competitive Edge</div>
            </div>
            <div className="text-[16px]">
              AI Fundamentals for PMs
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon4}
                alt="Placement Support Icon"
                className="h-6 w-6"
              />
              <div className="font-medium text-[18px] lg:text-[20px]">Networking</div>
            </div>
            <div className="text-[16px]">
              Connect with AI-Savvy PMs and Mentors
            </div>
          </div>

          {/* Duplicate */}
          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon1}
                alt="PM-Focused Expertise Icon"
                className="h-5 w-5"
              />
              <div className="font-medium text-[20px]">
                PM-Focused Expertise
              </div>
            </div>
            <div className="text-[16px]">
              Designed by Product Leaders
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon2}
                alt="Real-World Applications   Icon"
                className="h-5 w-5"
              />
              <div className="font-medium text-[20px]">
                Real-World Applications{" "}
              </div>
            </div>
            <div className="text-[16px]">
              Practical, Project-Based Learning
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon3}
                alt="Competitive Edge Icon"
                className="h-6 w-6"
              />
              <div className="font-medium text-[20px]">Competitive Edge</div>
            </div>
            <div className="text-[16px]">
              AI Fundamentals for PMs
            </div>
          </div>

          <div className="item flex gap-4">
            <div className="flex gap-2">
              <img
                src={heroIcon4}
                alt="Placement Support Icon"
                className="h-6 w-6"
              />
              <div className="font-medium text-[20px]">Networking</div>
            </div>
            <div className="text-[16px]">
              Connect with AI-Savvy PMs and Mentors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGenAi;
