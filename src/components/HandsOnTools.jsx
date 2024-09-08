import figma0 from "../assets/figma0.svg";
import figma from "../assets/figma.svg";
import figma1 from "../assets/figma1.svg";
import figma2 from "../assets/figma2.svg";
import figma3 from "../assets/figma3.svg";
import figma4 from "../assets/figma4.svg";

const ToolCard = ({logo, title}) => {
  return (
    <div className="flex flex-col items-center justify-end gap-8">
      <img src={logo} alt="" />
      <p>{title}</p>
    </div>
  );
};

const HandsOnTools = () => {
  return (
    <div className="flex flex-col bg-white pb-10 px-1 md:px-10 xl:px-32 pt-10">
      <div className="py-5 lg:py-12 space-y-16">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-start font-sans px-4">
          Hands on practice with tools
        </div>

        <div className="grid gric-cols-3 lg:grid-cols-6">
          <ToolCard logo={figma0} title={"Figma"} />
          <ToolCard logo={figma} title={"Miro"} />
          <ToolCard logo={figma1} title={"Moengage"} />
          <ToolCard logo={figma2} title={"Notion"} />
          <ToolCard logo={figma3} title={"JIRA"} />
          <ToolCard logo={figma4} title={"Postman"} />
        </div>
      </div>
    </div>
  );
};

export default HandsOnTools;
