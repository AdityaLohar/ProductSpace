import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import axios from "axios";

const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_GEN_AI_ENROLLMENT_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

const GenAiEnrollmentForm = ({
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
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use the personal access token here
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data saved successfully:", response.data);

      setNotification({
        type: "success",
        title: "Details Submitted!",
        description:
          "You have been waitlisted, our admission counsellor will contact you soon",
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
      }, 6000);

      // console.error("Error saving data:", error);

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
    const currentTimestamp = new Date().toLocaleString(); // e.g., "10/7/2024, 12:34:56 PM"
    const res = await saveUserData(name, email, number, currentTimestamp);
    setLoading(false);

    // window.location.href = "https://rzp.io/rzp/join-genaicourse";

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
                <h2 className="text-[25px] md:text-[34px] font-extrabold mb-4 font-inter text-center">
                  Enroll in Gen AI for PM Program
                </h2>
                <h3 className="text-[14px] md:text-[16px] mb-4 text-center">
                  Excel in your Product Management Career with practical AI
                  skills and 1:1 mentorship from industry experts.
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
                    className="text-[16px] lg:text-[20px] w-full bg-[#FFA000] text-black font-semibold px-2 md:px-6 py-3 rounded-lg transform hover:bg-[#FFAD1D]"
                  >
                    {loading ? "Loading..." : "Join Waitlist Now"}
                  </button>
                  <div className="text-[12px] md:text-[16px] p-2 py-3 font-semibold">
                    <p>Get 1-1 mentorship via our Gen AI cohort</p>
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

export default GenAiEnrollmentForm;
