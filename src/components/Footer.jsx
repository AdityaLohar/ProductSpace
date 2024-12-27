import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/ps-logo.svg";
import footerLogo from "../assets/footer-logo.svg";
import linkedin from "../assets/linkedin-circle.svg";
import "react-toastify/dist/ReactToastify.css";
import psFooter from "../assets/ps-footer.svg";
import plus from "../assets/plus.svg";
import { useNotification } from "../context/NotificationContext";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const Footer = () => {
  const { show } = useNotification();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const airtableBaseUrl = import.meta.env.VITE_AIRTABLE_BASE_NEWSLETTER_URL;
  const accessToken = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;

  const saveUserData = async (email, currentTimestamp) => {
    try {
      const response = await axios.post(
        airtableBaseUrl,
        {
          fields: {
            "Email Id": email,
            Timestamp: currentTimestamp,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setLoading(false);

      show({
        type: "success",
        title: "Subscription Successful",
        description:
          "Thank you for subscribing to our newsletter! Get ready for the latest insights and updates delivered right to your inbox. 🚀",
      });
    } catch (err) {
      show({
        type: "error",
        title: "Error",
        description: "Error in saving you data in air table",
      });
    }
  };

  const handleSubmit = async () => {
    const result = schema.safeParse({ email });

    if (!result.success) {
      show({
        type: "error",
        title: "Subscription Failed",
        description: "Invalid email address. Please try again.",
      });
      return;
    }

    const currentTimestamp = new Date().toLocaleString();
    const res = await saveUserData(email, currentTimestamp);
  };

  return (
    <div className="pb-4 pt-16 bg-no-repeat sm:bg-right sm:bg-contain mx-auto xl:mx-auto max-w-screen-2xl bg-gradient-to-b from-[#081228] to-black">
      <div className="flex flex-col gap-12 lg:flex-row justify-between text-white bg-transparent px-4 lg:px-32 custom-12:px-[0px] pb-12">
        <div className="">
          <div className="pb-2">
            <img src={logo} alt="ps-logo" className="h-7" />
          </div>
          <div className="font-semibold pb-2 text-[24px]">
            <p>PRODUCT SPACE</p>
          </div>
          <div className="text-white pb-2 md:pb-2">
            <p>A Great Place to Upskill</p>
          </div>
        </div>

        <div className="flex gap-12 xl:w-1/2 justify-start lg:justify-center lg:gap-16 xl:gap-24 text-[16px] font-inter">
          <div className="">
            <p className="mb-3 font-bold">Resources</p>
            <div className="flex flex-col gap-2 lg:gap-4 text-[#FFFFFF99]">
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

          <div>
            <p className="mb-3 font-bold">Links</p>
            <div className="flex flex-col gap-2 lg:gap-4 text-[#FFFFFF99]">
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
        </div>
      </div>

      <div className="flex gap-2 lg:gap-12 justify-between items-center text-white bg-transparent px-4 md:px-32 custom-12:px-[0px] font-inter">
        <div className="hidden lg:flex font-semibold">
          Get the latest updates from Product Space
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center justify-between bg-[#242424] px-4 py-3 w-full lg:w-[300px] xl:w-[400px]">
            <input
              type="text"
              className="bg-transparent outline-none text-white placeholder-white"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="flex gap-1 items-center" onClick={handleSubmit}>
              <p>Subscribe</p>
              <img src={plus} alt="" className="w-4" />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <a
                href="https://theproductspace.substack.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <img src={footerLogo} alt="" className="h-8 w-8" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/theproductspace/"
                target="_blank"
                className=""
              >
                <img src={linkedin} alt="" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 lg:mt-32 px-4">
        <img src={psFooter} alt="" />
      </div>
    </div>
  );
};

export default Footer;
