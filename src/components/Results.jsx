import placed from "../assets/group.svg";
import packageImage from "../assets/Rupees-symbol.svg";
import increment from "../assets/arrow.svg";
import bgImage from "../assets/results-pink-bg.svg";

const Results = () => {
  return (
    <div className="flex flex-col bg-[#AEECFF] mb-10 lg:mb-20 rounded-3xl pb-5 md:pb-10">
      <div className="text-[28px] lg:text-[40px] font-bold p-4 md:p-10 text-center font-sans">
        Results delivered by Product Space Team
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-around px-2 lg:px-8 pt-2">
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
            <img src={placed} alt="" className="w-12 h-10" />
          </div>
          <div>
            <div className="text-[#21C1F3] font-semibold text-lg text-xl lg:text-3xl font-sans">
              2000+ Members
            </div>
            <div className="text-xl font-medium">Already placed</div>
          </div>
        </div>

        <div className="flex items-center text-start gap-1 border border-1 border-[#21C1F3] bg-white rounded-2xl p-4"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "120px", // Adjust the size as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left", // You can change to 'top left', 'bottom right', etc.
              }}
        >
          <div className="w-10">
            <img src={packageImage} alt="" className="w-10 h-8" />
          </div>
          <div>
            <div className="text-[#21C1F3] font-semibold text-lg text-xl lg:text-3xl font-sans">
              46.7 LPA
            </div>
            <div className="text-xl font-medium">Highest Package</div>
          </div>
        </div>

        <div className="flex items-center text-start gap-1 border border-1 border-[#21C1F3] bg-white rounded-2xl p-4"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "120px", // Adjust the size as needed
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left", // You can change to 'top left', 'bottom right', etc.
              }}
        >
          <div className="w-10">
            <img src={increment} alt="" className="w-12 h-10" />
          </div>
          <div>
            <div className="text-[#21C1F3] font-semibold text-lg text-xl lg:text-3xl font-sans">
              4.5x Increment
            </div>
            <div className="text-xl font-medium">Average CTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
