import { useState } from "react";
import flash from "../assets/flash.svg";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const BottomBar = () => {
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
    <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 bg-white px-[120px] py-4 shadow-[0_-15px_28px_-10px_rgba(0,0,0,0.2)]">
      <div className="flex gap-0 2xl:gap-20 justify-between w-full max-w-screen-2xl mx-auto font-hind text-[14px] xl:text-[17px]">
        <div className="flex gap-1 xl:gap-12">
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Course Duration
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              10 Weeks
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Time commitment
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              6-8 hrs/weeks
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Next cohort starts on
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              12th September
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Mode of delivery
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              Online
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-[#FFF7D9] flex gap-1 xl:gap-3 items-center py-1 px-5">
            <div>Seats filling fast</div>
            <div>
              <img src={flash} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-[#FF559E] text-white py-2 px-4 2xl:px-8 rounded-full" onClick={toggleModal}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Modal Form */}
      <div className="relative">
          {/* Modal */}
          {isOpen && (
            <>
              {/* Modal overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-52"
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

export default BottomBar;
