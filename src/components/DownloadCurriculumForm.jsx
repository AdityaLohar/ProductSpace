// Download Curriculum.js
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import axios from "axios";

// const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_BASE_DOWNLOAD_CURRICULUM_URL;
const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_PM_FELLOWSHIP_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

const DownloadCurriculumForm = ({
  isVisible,
  setIsVisible,
  setIsOpen,
  isOpen,
  toggleModal,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveUserData = async (name, email, phoneNumber, currentTimestamp) => {
    try {
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            Name: name,
            "Mobile Number": phoneNumber, // Make sure this matches exactly
            "Email Id": email, // Make sure this matches exactly
            Timestamp: currentTimestamp,
            Source: "Download Curriculum",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use the personal access token here
            "Content-Type": "application/json",
          },
        }
      );

      setNotification({
        type: "success",
        title: "Details Submitted!",
        description: "Our Expert Consultant will Call you back.",
      });
      setShowNotification(true);
    } catch (error) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Error in saving you data in air table",
      });

      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      console.error("Error saving data:", error);

      return;
    }
  };

  const handleSubmit = async () => {
    // const result = schema.safeParse({ email });

    if (name === "" || !number || email === "") {
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

    setLoading(true);
    const currentTimestamp = new Date().toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Ensures 24-hour format
    }); // e.g., "10/7/2024, 12:34:56 PM"
    const res = await saveUserData(name, email, number, currentTimestamp);
    setLoading(false);

    window.location.href =
      "https://drive.google.com/file/d/1W1RcHIzl0536bQPJ6W9ka5Fdt4kRNw8q/view";

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
            <div className="bg-white py-12 px-4 lg:px-12 rounded-3xl shadow-lg relative w-[320px] custom-3:w-[400px] lg:w-[500px] transform transition-transform duration-300 ease-out">
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
                  Download Detailed Curriculum
                </h2>
                <h3 className="text-[14px] md:text-[16px] mb-4 text-center">
                  Personalized Guidance | Interview Preparation | Industry Focus
                  Content | Job Placements Support -{" "}
                  <span className="font-bold">All at one place</span>
                </h3>

                <div className="mb-4">
                  <input
                    type="text"
                    className="input w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your name*"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    className="input w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Enter your email*"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    className="input w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Your Mobile Number*"
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col items-center">
                  <button
                    onClick={handleSubmit}
                    className="text-[16px] lg:text-[20px] w-full bg-[#FEC923] text-black font-semibold px-2 py-3 md:px-6 rounded-full hover:bg-yellow-500"
                  >
                    {loading ? "Loading..." : "Submit"}
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
                    <span className="font-bold text-lg">
                      {notification.title}
                    </span>
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

export default DownloadCurriculumForm;
