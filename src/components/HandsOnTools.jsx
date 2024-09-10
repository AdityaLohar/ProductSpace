import figma from "../assets/figma-logo.svg";
import miro from "../assets/miro-logo.svg";
import moengage from "../assets/moengage-logo.svg";
import notion from "../assets/notion-logo.svg";
import jira from "../assets/jira-logo.svg";
import postman from "../assets/postman-logo.svg";

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
          <ToolCard logo={figma} title={"Figma"} />
          <ToolCard logo={miro} title={"Miro"} />
          <ToolCard logo={moengage} title={"Moengage"} />
          <ToolCard logo={notion} title={"Notion"} />
          <ToolCard logo={jira} title={"JIRA"} />
          <ToolCard logo={postman} title={"Postman"} />
        </div>
      </div>
    </div>
  );
};

export default HandsOnTools;
