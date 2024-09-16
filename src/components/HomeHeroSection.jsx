import CircleFlipGrid from "./CircleFlipGrid";
import bgImage from "../assets/title-bg.png";
import fromBg from "../assets/from-bg.png";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";

const HomeHeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const handleSubmit = () => {
    if(name === "" || !number) {
      toast.error("Fill all the fields");
      return;
    }

    toast.success("Enrolled sucessfully!");
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);

    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "https://pages.razorpay.com/getintoPM"; // Replace with your desired external URL
    }, 600);
  };

  return (
    <div className="mx-0 lg:px-20 xl:px-0 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start gap-8 lg:gap-24 lg:gap-4">
      <div className="w-full lg:w-1/2 px-6 lg:px-0">
        <p
          className="font-sans text-[17px] text-transparent font-semibold ml-0 sm:ml-1 md:text-[24px] pt-8 
    custom-0:bg-[position:top_50%_left_3%] custom-1:bg-[position:top_50%_left_14%] custom-2:bg-[position:top_50%_left_21%] md:bg-[position:top_50%_left_0%]"
          style={{
            backgroundImage: `url(${fromBg})`,
            backgroundSize: "110px 50px", // Adjust the background to fit the text
            backgroundRepeat: "no-repeat", // No repeat for the background image
          }}
        >
          From
        </p>

        <h1
          className="text-2xl lg:text-[50px] font-bold mb-6 lg:leading-[60px] bg-auto bg-no-repeat font-sans bg-[position:top_2%_left_50%] 
    md:bg-[position:top_6%_left_25%] xl:bg-[position:top_2%_left_25%]"
          style={{
            backgroundImage: `url(${bgImage})`,
            // backgroundPosition: "top 2% left 30%",
            backgroundSize: "59%",
          }}
        >
          <span className="font-normal text-[28px] lg:text-[44px]">
            Beginner to Expert{" "}
          </span>
          <span className="text-[34px] lg:text-[50px]">Accelerate your </span>
          <span className="text-[#21C1F3] text-[34px] lg:text-[52px]">
            Product{" "}
          </span>{" "}
          <span className="text-[34px] lg:text-[52px]">Career</span>
        </h1>

        <div className="lg:hidden w-full lg:w-1/2 flex justify-center mb-10 items-center">
          <CircleFlipGrid />
        </div>

        <p className="lg:w-4/5 text-[16px] lg:text-[18px] mb-4 font-medium">
          1:1 Mentorship with Product Leaders who really care
        </p>

        <div className="lg:w-4/5 items-center mb-4 text-sm lg:text-lg">
          4.8 <span className="text-yellow-400">★</span>
          <span className="ml-2 text-sm lg:text-lg font-base">
            500+ Student Reviews
          </span>
        </div>

        <div className="mt-8 font-semibold text-sm lg:text-lg">
          <button
            onClick={toggleModal}
            className="text-[18px] w-full lg:w-3/5 bg-[#FEC923] text-black py-2.5 px-4 lg:px-16 rounded-full hover:shadow-[5px_5px_0_rgba(245,133,119)] transform hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-in-out"
          >
            Enquire Now!
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full md:w-3/4 lg:w-1/2 flex justify-center">
        <CircleFlipGrid />
      </div>
          
      {/* Modal Form */}
      <div className="relative">
        {/* Modal */}
        {isOpen && (
          <>
            {/* Modal overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={toggleModal}
            ></div>

            {/* Modal container */}
            <div
              className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              {/* Form content */}
              <div className="bg-white p-12 rounded-3xl shadow-lg relative w-[300px]  custom-3:w-[400px] lg:w-[500px] transform transition-transform duration-300 ease-out">
                {/* Close button */}
                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>

                {/* Form */}
                <div>
                  <h2 className="text-[25px] md:text-[34px] font-bold mb-4 font-sans text-center">
                    PM Fellowship Enrolment
                  </h2>
                  <h3 className="text-[14px] md:text-[16px] mb-4 text-center">
                    Product Portfolio | 1-1 Mentorship | Interview Prep |
                    Placement Assistance -{" "}
                    <span className="font-bold">All at one place</span>
                  </h3>

                  <div className="mb-4">
                    <input
                      type="text"
                      className="w-full p-3 md:p-5 border border-gray-300 rounded-lg outline-none"
                      placeholder="Enter your name*"
                      required
                      onChange={(e) => setName(e.target.value)}
                      />
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      className="w-full p-3 md:p-5 border border-gray-300 rounded-lg outline-none"
                      placeholder="Your Mobile Number*"
                      required
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      onClick={handleSubmit}
                      className="text-[14px] lg:text-[20px] bg-blue-700 text-white p-2 md:p-4 rounded-lg hover:bg-blue-600"
                    >
                      Enroll Now
                    </button>
                    <div className="text-[12px] md:text-[16px] p-2 py-3 font-semibold">
                      <p>Get 1-1 mentorship via our PM Fellowship cohort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>   
    </div>
  );
};

export default HomeHeroSection;
