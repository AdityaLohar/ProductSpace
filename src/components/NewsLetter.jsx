import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    try {
      console.log(email);
      const result = schema.safeParse({ email });

      if (!result.success) {
        toast.error("Invalid Email");
        return;
      } else {
        toast.success("Subscribed sucessfully!");
        console.log("Valid Data", result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-[#F1E6FF] pb-5 lg:pb-10">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Subscribe to our Newsletter
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium px-2 md:px-20 lg:px-60 py-1">
          <p>
            Subscribe to our Newsletter to stay up-to-date on last courses, news
            and discounts from us.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-0 lg:mt-10 px-4">
        <div className="flex justify-between items-center bg-white rounded-full p-1 lg:p-2 mx-2 lg:mx-0 w-full lg:w-3/5">
          <input
            type="text"
            placeholder="Enter your Email Id"
            className="px-3 rounded-full text-gray-800 w-1/2 lg:w-2/3 placeholder-black bg-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-[#9747FF] text-white py-2 px-3 lg:px-3 rounded-full text-[16px] lg:text-base"
            onClick={handleSubmit}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <ToastContainer
        className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-full max-w-[350px]"
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default NewsLetter;
