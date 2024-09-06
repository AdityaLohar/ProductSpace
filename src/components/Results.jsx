import placed from "../assets/group.svg";
import packageImage from "../assets/Rupees-symbol.svg";
import increment from "../assets/arrow.svg";
import bgImage from "../assets/results-pink-bg.svg";

const ResultsCard = ({iconImg, title, subTitle}) => {
  return (
    <div
      className="flex items-center text-start gap-1 border border-1 border-[#21C1F3] bg-white rounded-2xl p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "120px", // Adjust the size as needed
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left", // You can change to 'top left', 'bottom right', etc.
      }}
    >
      <div className="w-10">
        <img src={iconImg} alt="" className="w-12 h-10" />
      </div>
      <div>
        <div className="text-[#21C1F3] font-semibold text-lg text-xl lg:text-3xl font-sans">
          {title}
        </div>
        <div className="text-xl font-medium">{subTitle}</div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="flex flex-col bg-white pb-5 md:pb-10">
      {/* <div className="text-[28px] lg:text-[40px] font-bold p-4 md:p-10 text-center font-sans">
        Results delivered by Product Space Team
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-around px-2 lg:px-8 pt-10">
        <ResultsCard iconImg={placed} title={"2000+ Members"} subTitle={"Already Placed"} />
        <ResultsCard iconImg={packageImage} title={"46.7 LPA"} subTitle={"Highest Package"} />
        <ResultsCard iconImg={increment} title={"4.5x Increment"} subTitle={"Average CTC"} />
      </div>
    </div>
  );
};

export default Results;
