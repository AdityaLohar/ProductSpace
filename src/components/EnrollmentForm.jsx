// EnrollmentForm.js
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";

const EnrollmentForm = ({ isVisible, setIsVisible, setIsOpen, isOpen, toggleModal }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    if (name === "" || !number) {
      toast.error("Fill all the fields");
      return;
    }

    toast.success("Enrolled successfully!");
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);

    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "https://pages.razorpay.com/getintoPM"; // Replace with your desired external URL
    }, 600);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Modal overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            onClick={toggleModal}
          ></div>

          {/* Modal container */}
          <div
            className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            {/* Form content */}
            <div className="bg-white p-12 rounded-3xl shadow-lg relative w-[300px] custom-3:w-[400px] lg:w-[500px] transform transition-transform duration-300 ease-out">
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
                  Product Portfolio | 1-1 Mentorship | Interview Prep | Placement
                  Assistance -{" "}
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
                    className="text-[14px] lg:text-[20px] w-full bg-[#FEC923] text-black font-semibold p-2 md:px-6 md:py-4 rounded-full hover:bg-yellow-500"
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
    </>
  );
};

export default EnrollmentForm;