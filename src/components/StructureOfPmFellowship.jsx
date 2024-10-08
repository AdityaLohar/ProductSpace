import vector1 from "../assets/benifits-1-1 1.svg";
import vector3 from "../assets/benifits-2-1 1.svg";
import vector2 from "../assets/Vector (3).svg";
import vector4 from "../assets/Vector (4).svg";
import underline from "../assets/yellow-underline.png";

const StructureCard = ({ title, desc }) => {
  return (
    <div>
      <div
        className={`bg-white rounded-2xl p-4 items-center justify-center text-center sm:text-start min-h-full hover:cursor-arrow transition-shadow duration-100 border-2 border-[#E9E9E9] hover:border-transparent hover:shadow-[0_0px_12px_rgba(1,1,1,0.2)]`}
      >
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

const StructureOfPmFellowship = () => {
  return (
    <div className={`flex flex-col bg-white pb-10`}>
      <div className="py-5 lg:py-12">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center font-sans">
          <span
            className="pb-1 bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${underline})`,
              backgroundSize: "60%",
              backgroundPosition: "bottom right"
            }}
          >
            Structure
          </span>{" "}
          of the <span className="text-[#C7C7C7]">PM Fellowship Program</span>
        </div>
        {/* <div className="text-[16px] text-center text-gray-800 font-medium mt-2 px-4 xl:px-60">
          <p>Copy required here</p>
        </div> */}
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-5 px-2 lg:px-16 py-4 lg:py-8">
        <StructureCard
          title={"Heading will come here"}
          desc={`I have just put dummy copy here for now let me know what’s the right copy that will come here.`}
        />
        <StructureCard
          title={"Heading will come here"}
          desc={`I have just put dummy copy here for now let me know what’s the right copy that will come here.`}
        />
        <StructureCard
          title={"Heading will come here"}
          desc={`I have just put dummy copy here for now let me know what’s the right copy that will come here.`}
        />
        <StructureCard
          title={"Heading will come here"}
          desc={`I have just put dummy copy here for now let me know what’s the right copy that will come here.`}
        />
      </div>
    </div>
  );
};

export default StructureOfPmFellowship;
