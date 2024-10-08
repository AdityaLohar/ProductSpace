// EnrollmentForm.js
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import axios from 'axios';
import { isOpenFormState, isVisibleformState } from "../atoms/modalState";
import { useRecoilState } from "recoil";

const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_BASE_CONTACT_US_URL;
const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;


const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useRecoilState(isVisibleformState); // Recoil for visibility
  const [isOpen, setIsOpen] = useRecoilState(isOpenFormState);

  const toggleModal = () => {
    setIsVisible(false);
    setIsOpen(false);
  }

  const saveUserData = async (name, email, phoneNumber, query, currentTimestamp) => {
    try {
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            Name: name,
            'Mobile Number': phoneNumber, // Make sure this matches exactly
            'Email Id': email,           // Make sure this matches exactly
            'Query': query,
            "Timestamp": currentTimestamp,

          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Use the personal access token here
            'Content-Type': 'application/json',
          },
        }
      );

      setNotification({
        type: "success",
        title: "Details Submitted!",
        description: "Our Mentors will reach out to you soon.",
      });
      setShowNotification(true);
    } 
    catch (error) {
      setNotification({
        type: "error",
        title: "Error",
        description: "Error in saving you data in air table",
      });

      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      
      console.error('Error saving data:', error);
      
      return;
    }
  };

  const handleSubmit = async () => {

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
    const res = await saveUserData(name, email, number, query, currentTimestamp);
    setLoading(false);

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
            <div className="bg-white p-6 py-12 lg:p-12 rounded-3xl shadow-lg relative w-[300px] custom-3:w-[400px] lg:w-[500px] transform transition-transform duration-300 ease-out">
              {/* Close button */}
              <button
                onClick={toggleModal}
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>

              {/* Form */}
              <div>
                <div className="text-center space-y-3 pb-4">
                  <h2 className="text-[25px] md:text-[34px] font-bold font-sans text-center">
                    Contact Us
                  </h2>
                  <p>You will hear from us within 12 hours</p>
                </div>

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
                
                <div className="mb-4">
                  <input
                    type="text"
                    className="input w-full p-3 md:p-5 border font-semibold placeholder:text-gray-400 border-gray-300 rounded-lg outline-none"
                    placeholder="Query"
                    required
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                <div className="flex flex-col items-center">
                  <button
                    onClick={handleSubmit}
                    className="text-[14px] lg:text-[20px] w-full bg-[#FEC923] text-black font-semibold p-4 md:px-6 md:py-4 rounded-full hover:bg-yellow-500"
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                  <div className="text-[12px] md:text-[16px] p-2 py-3 font-semibold">
                    <p>One of our mentors will reach out to you</p>
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
                    x
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

export default ContactUsForm;