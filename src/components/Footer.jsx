import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/ps-logo.svg";
import discord from "../assets/discord-circle.svg";
import linkedin from "../assets/linkedin-circle.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { useState } from "react";
import footerBg from "../assets/footer bg.png";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    try {
      const result = schema.safeParse({ email });

      if (!result.success) {
        toast.error("Invalid Email");
        return;
      } else {
        toast.success("Subscribed sucessfully for the Newsletter!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
  className="pb-12 pt-16 bg-black bg-no-repeat lg:bg-right lg:bg-contain"
  style={{
    backgroundImage: window.innerWidth >= 1024 ? `url(${footerBg})` : 'none',
  }}
>
      <div className="flex flex-col gap-12 lg:flex-row justify-between text-white bg-transparent px-4 md:px-32 pb-12">
          
        <div>
          <div className="text-2xl font-bold pb-2">
            <img src={logo} alt="ps-logo" />
          </div>
          <div className="font-semibold pb-2 text-[16px]">
            <p>PRODUCT SPACE</p>
          </div>
          <div className="text-white pb-2 md:pb-2">
            <p>A Great Place to Upskill</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row justify-between md:gap-20">
          <div>
            <p className="mb-3 font-semibold">Resources</p>
            <div className="flex flex-col gap-4 text-white">
              <a
                href="https://theproductspace.notion.site/Terms-and-Conditions-3a424120bc6a4b51a681e48b471da06c"
                target="_blank"
              >
                Terms and Conditions
              </a>
              <a
                href="https://theproductspace.notion.site/Privacy-Policy-Terms-3aa9b55d3e1f4bafb12dd6d00ff60c68"
                target="_blank"
              >
                Privacy policy
              </a>
              <a
                href="https://theproductspace.notion.site/Refund-Deferral-Discount-and-Cancellation-330088def6144266aa1e68d8a8c4b058"
                target="_blank"
              >
                Refund policy
              </a>
              <a
                href="https://theproductspace.notion.site/Contact-Us-9b3ba23c447a41bebc35e9a2b6b359e3"
                target="_blank"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="w-2/3">
            <p className="mb-3 font-semibold">Subscribe</p>
            <div className="flex flex-col gap-4 text-white">
              Subscribe to stay tuned for new web-design and latest updates.
              Let&apos;s do it!
            </div>

            <div className="flex gap-1 justify-between mt-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  className="p-3 lg:p-4 w-[210px] lg:w-[300px] text-black outline-none rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button onClick={handleSubmit} className="p-3 lg:p-4 lg:px-12 bg-[#FFC303] text-black font-semibold rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
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

      <div className="flex gap-2 lg:gap-12 justify-between text-gray-400 bg-transparent px-4 md:px-32">
            <div>
                © Propel Learnings
            </div>
            <div className="flex gap-4 text-gray-400">
                <div>
                    <a href="https://www.linkedin.com/company/theproductspace/" target="_blank" className="">
                      <img src={linkedin} alt="" className="h-8 w-8" />
                    </a>
                </div>
                <div>
                    <a href="https://discord.com/invite/2ytvQhDBS8" target="_blank" className="flex items-center gap-2">
                      <img src={discord} alt="" className="h-8 w-8" />
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
