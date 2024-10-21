import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/ps-logo.svg";
import substackLogo from "../assets/substack-logo.svg";
import linkedin from "../assets/linkedin-circle.svg";
import "react-toastify/dist/ReactToastify.css";
import footerBg from "../assets/footer bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
  className="pb-12 pt-16 bg-black bg-no-repeat sm:bg-right sm:bg-contain mx-auto xl:mx-auto max-w-screen-2xl"
  style={{
    backgroundImage: window.innerWidth >= 1024 ? `url(${footerBg})` : 'none',
  }}
>
      <div className="flex flex-col gap-12 lg:flex-row justify-between text-white bg-transparent px-4 md:px-32 custom-12:px-[0px] pb-12">
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
              <Link
                to="/terms-and-conditions"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund-policy"
              >
                Refund Policy
              </Link>
              <Link
                to="/contact-us"
              >
                Contact Us
              </Link>
              
            </div>
          </div>
        </div>

        <div className="hidden lg:flex text-transparent flex-col gap-12 lg:flex-row justify-between md:gap-20">
          <div>
            <p className="mb-3 font-semibold">Resources</p>
            <div className="flex flex-col gap-4">
              <p
              >
                Terms and Conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 lg:gap-12 justify-between text-gray-400 bg-transparent px-4 md:px-32 custom-12:px-[0px]">
            <div>
                © Propel Learnings
            </div>
            <div className="flex gap-4 text-gray-400">
                <div>
                    <a href="https://theproductspace.substack.com" target="_blank" className="flex items-center gap-2">
                      <img src={substackLogo} alt="" className="h-8 w-8" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/theproductspace/" target="_blank" className="">
                      <img src={linkedin} alt="" className="h-8 w-8" />
                    </a>
                </div>
            </div>
      </div>

    </div>
  );
};

export default Footer;
