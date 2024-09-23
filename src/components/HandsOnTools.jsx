import figma from "../assets/figma-logo.svg";
import miro from "../assets/miro-logo.svg";
import moengage from "../assets/moengage-logo.svg";
import notion from "../assets/notion-logo.svg";
import jira from "../assets/jira-logo.svg";
import postman from "../assets/postman-logo.svg";

const ToolCard = ({logo, title}) => {
  return (
    <div className="flex flex-col items-center justify-end gap-3 lg:gap-8">
      <img src={logo} alt="" className="w-16 h-16 md:w-[90px] md:h-[100px]" />
      <p>{title}</p>
    </div>
  );
};

const HandsOnTools = () => {
  return (
    <div className="flex flex-col bg-white pb-10 px-4 md:px-10 xl:px-32 pt-10">
      <div className="py-5 lg:py-12 lg:space-y-12">
        <div className="text-[28px] lg:text-[40px] font-bold px-2 text-center font-sans">
          Hands on practice with tools
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 space-y-8">
          <div className="flex flex-col items-center justify-end gap-3 lg:gap-8">
            <img src={figma} alt="" className="w-16 h-16 pb-1 pt-2 md:w-[90px] md:h-[88px] md:pb-2" />
            <p>Figma</p>
          </div>

          <ToolCard logo={miro} title={"Miro"} />
          <ToolCard logo={moengage} title={"Moengage"} />
          <ToolCard logo={notion} title={"Notion"} />
          <ToolCard logo={jira} title={"JIRA"} />

          <div className="flex flex-col items-center justify-end gap-3 lg:gap-8">
            <img src={postman} alt="" className="w-16 h-16 pb-1 pt-2   md:w-[80px] md:h-[88px] md:pb-2" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOnTools;
