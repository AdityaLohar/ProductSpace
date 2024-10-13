import DropdownList from "./DropdownList";
import { Link } from "react-router-dom";
import arrow from "../assets/right-arrow-dark.svg";
import faqBg from "../assets/faqBg.svg";
import faqBg1 from "../assets/faqBg1.svg";

const Faq = () => {
  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:justify-between py-16 px-4 lg:px-28 font-inter bg-gradient-to-r from-[#EEFAFD] to-[#DBF6FF]`}
      style={{
        backgroundImage: `url(${faqBg}) left top no-repeat, 
                     url(${faqBg1}) left top no-repeat`,
        backgroundSize: "auto, auto", // Adjust as needed
      }}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="text-[32px] lg:text-[40px] font-bold text-start font-sans">
          Frequently Asked <br /> Questions
        </div>

        <div className="text-[18px] text-start text-gray-800 font-medium">
          Have more Queries?
        </div>

        <div className="flex">
          <Link to={"/pm-fellowship"}>
            <button
              // onClick={toggleModal}
              className="flex items-center font-semibold gap-2 justify-center text-[16px] w-full lg:w-[164px] bg-transparent text-black p-4 rounded-lg border border-[#60A5FA] transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <p>Contact Us</p>
              <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-[95%]">
        <DropdownList len={5} flag={1} />
      </div>
    </div>
  );
};

export default Faq;
