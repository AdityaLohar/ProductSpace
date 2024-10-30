import { useState } from "react";
import netLeft from "../assets/net-pattern-left.svg";
import netRight from "../assets/net-pattern-right.svg";
import { z } from "zod";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

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
        description:
          "Thank you for subscribing to our newsletter! Get ready for the latest insights and updates delivered right to your inbox. 🚀",
      });
      setShowNotification(true);
    }

    // Automatically hide notification after 10 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="bg-transparent px-4 md:px-10 xl:px-32 pt-10 lg:pt-10 pb-16 font-inter">
      <div
        className="hidden lg:flex bg-black text-white flex-col py-12 rounded-2xl max-w-[1180px] mx-auto items-between justify-between text-center gap-6"
        style={{
          backgroundImage: `url(${netLeft}), url(${netRight})`,
          backgroundPosition: "left 10px top, right 10px top", // Adjust as needed
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // Adjust to fit your images as needed
        }}
      >
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          Subscribe to our Newsletter
        </div>

        <div className="text-[18px] text-[#FFFFFFE5] font-light">
          <p>
            Subscribe to our Newsletter to stay up-to-date on the latest
            courses, news, and discounts from us.
          </p>
        </div>

        <div className="flex justify-center items-center mt-0 lg:mt-10 px-2">
          <div className="flex justify-between items-center bg-white rounded-lg p-1 lg:p-1 mx-2 lg:mx-0 w-full lg:w-3/5">
            <input
              type="text"
              placeholder="Enter your Email Id"
              className="px-3 rounded-full text-gray-800 input font-semibold w-1/2 lg:w-2/3 placeholder-black bg-transparent focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-black text-white py-3 px-3 lg:px-5 rounded-lg font-medium text-[16px] lg:text-base"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-black text-white flex flex-col py-24 px-4 rounded-2xl max-w-[1180px] mx-auto items-between justify-between text-center gap-8">
        <div className="text-[24px] lg:text-[40px] font-bold px-2 font-sans">
          Subscribe to Our Newsletter
        </div>

        <div className="text-[16px] text-[#FFFFFFE5] font-light px-4">
          <p>This is your chance to secure your spot in the next cohort!</p>
          <p>
            Have doubts? Book a 1:1 call with Product Space&apos;s leading
            mentors.
          </p>
        </div>

        <div className="flex justify-center items-center mt-0 px-2">
          <div className="flex justify-between items-center bg-white rounded-lg p-1 mx-2 w-full">
            <input
              type="text"
              placeholder="Enter your Email Id"
              className="px-2 rounded-full text-black input font-semibold w-full placeholder-black bg-transparent focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-black text-white py-3 px-4 rounded-lg font-light text-[16px]"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Notification Section */}
      {notification && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            showNotification ? "bottom-8 opacity-100" : "-bottom-20 opacity-0"
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
