import { Link } from "react-router-dom";
import DropdownList from "../components/DropdownList";
import { Helmet, HelmetProvider } from "react-helmet-async";

const FaqPage = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col pb-40 bg-white">
        <Helmet>
          <title>Frequently Asked Questions - Product Space</title>
          <meta name="description" content="Welcome to the faq page of Product Space. Look at all questions you may have." />
        </Helmet>
        
        <div className="">
          <div className="flex px-4 md:px-[120px] items-center justify-start text-gray-700 max-w-screen-2xl mx-auto">
            <Link to="/" className="text-gray-500 hover:underline">
              Home
            </Link>

            <svg
              className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out rotate-[-90deg] text-gray-500`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>

            <Link to="/faq" className="text-gray-500 hover:underline">
              Faq
            </Link>
          </div>
        </div>
        <div className="py-5 lg:py-8 max-w-screen-2xl mx-auto">
          <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
            Frequently Asked Questions
          </div>
        </div>

        <div className="flex justify-between px-0 md:px-12 lg:px-[95px] gap-4 max-w-screen-2xl mx-auto">
          <DropdownList len={13} flag={0} />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default FaqPage;
