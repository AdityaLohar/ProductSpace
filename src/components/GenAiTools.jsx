import aitool1 from "../assets/aitool1.svg";
import aitool2 from "../assets/aitool2.svg";
import aitool3 from "../assets/aitool3.svg";
import aitool4 from "../assets/aitool4.svg";
import aitool5 from "../assets/aitool5.svg";
import aitool6 from "../assets/aitool6.svg";
import aitool7 from "../assets/aitool7.svg";
import aitool8 from "../assets/aitool8.svg";

const GenAiTools = () => {
  return (
    <div className="flex flex-col gap-8 items-center px-4 md:px-16 lg:px-32 py-20 font-inter text-[#24304C] text-center bg-gradient-to-b from-[#FFFFFF] to-[#E7F7FC]">
      <div>
        <h2 className="text-[24px] lg:text-[32px] font-bold">
          Tools we are going to cover
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <img src={aitool1} alt="" className="h-12 w-auto lg:h-16" />
          <p>D-ID</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool2} alt="" className="h-12 w-auto lg:h-16" />
          <p>Perplexity</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool3} alt="" className="h-12 w-auto lg:h-16" />
          <p>ChatGPT</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool4} alt="" className="h-12 w-auto lg:h-16" />
          <p>GitHub Co-Pilot</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool5} alt="" className="h-12 w-auto lg:h-16" />
          <p>Figma AI</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool6} alt="" className="h-12 w-auto lg:h-16" />
          <p>Midjourney</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool7} alt="" className="h-12 w-auto lg:h-16" />
          <p>Power BI Fabric</p>
        </div>
        <div className="flex flex-col gap-2">
          <img src={aitool8} alt="" className="h-12 w-auto lg:h-16" />
          <p>ChatPRD</p>
        </div>
      </div>

      <div className="flex text-[#3636368a] text-[18px] lg:text-[28px] font-semibold">
        <p>and many more...</p>
      </div>
    </div>
  );
};

export default GenAiTools;
