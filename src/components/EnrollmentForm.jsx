// EnrollmentForm.js
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const EnrollmentForm = ({ isVisible, setIsVisible, setIsOpen, isOpen, toggleModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async () => {
    const result = schema.safeParse({ email });

    if (!result.success) {
      setNotification({
        type: "error",
        title: "Failed",
        description: "Invalid email address. Please try again.",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    }
    else if (name === "" || !number) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Fill in all details",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    }
    else if(!/^\d{10}$/.test(number)) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Enter Valid Number",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return;
    }
    else {
      setNotification({
        type: "success",
        title: "Details Submitted!",
        description: "We will reach out to you soon.",
      });
      setShowNotification(true);
    }

    // Prepare data to send to the backend
  const formData = { name, phone: number, email };

  try {
    // const response = await fetch('https://product-space-be.vercel.app/api/submit-enquiry', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    const response = await fetch('https://product-space-be.vercel.app/api/submit-enquiry', {
      method: 'GET',
    });
     

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
    
  } catch (error) {
    setNotification({
      type: "error",
      title: "Submission Failed",
      description: "There was an error submitting your details. Please try again.",
    });
    setShowNotification(true);
    console.error('Error:', error);
  }

    // Automatically hide notification after 10 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
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
                  PM Enquiry Form
                </h2>
                <h3 className="text-[14px] md:text-[16px] mb-4 text-center">
                Personalized Guidance | Interview Preparation | Industry Focus Content | Job Placements Support -{" "}
                  <span className="font-bold">All at one place</span>
                </h3>

                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your name*"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your email*"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    className="w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
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
                    Submit
                  </button>
                  <div className="text-[12px] md:text-[16px] p-2 py-3 font-semibold">
                    <p>Get 1-1 mentorship via our PM Fellowship cohort</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Section */}
            {notification && (
              <div
                className={`fixed left-1/2 transform -translate-x-1/2 ${
                  showNotification
                    ? "bottom-4 opacity-100"
                    : "-bottom-20 opacity-0"
                } transition-all duration-500 ease-in-out z-50 max-w-[340px] md:max-w-[400px] w-full`}
              >
                <div
                  className={`flex items-center justify-between gap-3 p-4 rounded-lg shadow-lg ${
                    notification.type === "success"
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : "bg-gradient-to-r from-red-400 to-red-600"
                  } text-white`}
                >
                  {/* Icon */}
                  <div className="text-2xl">
                    {notification.type === "success" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaExclamationCircle />
                    )}
                  </div>

                  {/* Notification Content */}
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{notification.title}</span>
                    <span className="text-sm">{notification.description}</span>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setShowNotification(false)}
                    className="text-xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EnrollmentForm;