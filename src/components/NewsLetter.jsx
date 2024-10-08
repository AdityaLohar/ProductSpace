import { useState, useEffect } from "react";
import { z } from "zod";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Import success/error icons

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = () => {
    const result = schema.safeParse({ email });

    if (!result.success) {
      setNotification({
        type: "error",
        title: "Subscription Failed",
        description: "Invalid email address. Please try again.",
      });
      setShowNotification(true);
    } else {
      setNotification({
        type: "success",
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter! Get ready for the latest insights and updates delivered right to your inbox. 🚀",
      });
      setShowNotification(true);
    }

    // Automatically hide notification after 10 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col bg-[#F5F5F5] pb-20 pt-16">
      <div className="py-6 lg:pb-8">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans px-4">
          Subscribe to our Newsletter
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium px-2 md:px-20 lg:px-60 py-2">
          <p>
            Subscribe to our Newsletter to stay up-to-date on the latest
            courses, news, and discounts from us.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-0 lg:mt-10 px-4">
        <div className="flex justify-between items-center bg-white border border-2 border-[#c3c3c3] rounded-full p-1 lg:p-2 mx-2 lg:mx-0 w-full lg:w-3/5">
          <input
            type="text"
            placeholder="Enter your Email Id"
            className="px-3 rounded-full text-gray-800 input font-semibold w-1/2 lg:w-2/3 placeholder-gray-500 bg-transparent focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-[#F5F5F5] text-[#111] py-2 px-3 lg:px-3 rounded-full font-semibold text-[16px] lg:text-base"
            onClick={handleSubmit}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Notification Section */}
      {notification && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            showNotification
              ? "bottom-8 opacity-100"
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
  );
};

export default NewsLetter;
