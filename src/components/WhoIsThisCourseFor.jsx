import { Link } from "react-router-dom";
import icon1 from "../assets/resultsIcon.svg";
import arrow from "../assets/right-arrow.svg";

const Card = () => {
  return (
    <div className="h-[250px] lg:h-[300px] bg-white flex flex-col rounded-xl p-6 gap-4 hover:shadow hover:shadow-2xl hover:pointer-default">
      <div>
        <img
          src={icon1}
          alt=""
          className="h-12 w-12 bg-[#21C1F31A] rounded-md p-2"
        />
      </div>

      <div className="text-[28px] font-semibold">Working Professional</div>

      <div>
        With dedicated 1:1 mentorship by seasoned product leaders like VPs,
        Directors & Sr PMs
      </div>
    </div>
  );
};

const WhoIsThisCourseFor = () => {

  return (
    <div
      className="flex flex-col gap-12 bg-white px-4 md:px-10 xl:px-32 pt-24 pb-24 font-inter"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F6F7 50%, #F5F6F7 100%)",
      }}
    >
      <div>
        <div className="text-[28px] lg:text-[40px] font-bold mb-4 lg:mb-4 text-center font-sans">
          Who is this course for ?
        </div>

        <div className="text-[18px] text-[#000000BF] text-center">
          From zero experience to industry-ready, we provide the solutions to
          help you thrive in every phase of your product career.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <Link
          to={"/pm-fellowship"}
            className="flex items-center gap-2 justify-center text-[16px] w-3/4 lg:w-[164px] font-medium bg-[#21C1F3] text-white p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p>Get Started</p>
            <img src={arrow} alt="" />
          </Link>

          <button
            className="flex items-center gap-2 justify-center text-[16px] w-3/4 lg:w-[164px] font-medium bg-[#21C1F31F] text-black border border-[#B8B8B8] p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Book a Call
          </button>
        </div>

    </div>
  );
};

export default WhoIsThisCourseFor;
