import { Link } from "react-router-dom";
import DropdownList from "../components/DropdownList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="flex flex-col pb-40 bg-white">
        <Helmet>
          <title>Frequently Asked Questions - Product Space</title>
          <meta name="description" content="Welcome to the faq page of Product Space. Look at all questions you may have." />
        </Helmet>

        {/* Back Arrow at the top */}
        <div className="px-4 md:px-[120px] pt-6 max-w-screen-2xl">
          <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* FAQ Header */}
        <div className="py-5 lg:py-8 max-w-screen-2xl mx-auto">
          <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
            Frequently Asked Questions
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex justify-between px-0 md:px-12 lg:px-[95px] gap-4 max-w-screen-2xl mx-auto">
          <DropdownList len={13} flag={0} />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default FaqPage;