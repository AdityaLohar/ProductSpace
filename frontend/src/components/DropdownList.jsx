import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = ({ question, content, isOpen, onClick }) => {
    return (
        // <div className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${isOpen ? "border border-2 border-[#9747FF]" : "border border-2 border-transparent"}`}>
        <div className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${isOpen ? "border border-2 border-[#21C1F3]" : "border border-2 border-transparent"}`}>
            <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                <div className='text-[16px] font-semibold text-gray-700'>
                    <p>{question}</p>
                </div>
                <div className=''>
                    <svg
                        className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${isOpen ? 'rotate-[0deg] bg-[#21C1F3] text-white' : 'text-gray-400 rotate-[-90deg]'}`}
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
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
                <div className="pt-4 text-gray-600 lg:pr-16">
                    {content}
                </div>
            </div>
        </div>
    );
};

const DropdownList = ({ len, flag }) => {
    const [visibleCount, setVisibleCount] = useState(len);
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        "What is Product Space?",
        "Who is Product Space for?",
        "What programs does Product Space offer?",
        "How do I enroll in a cohort?",
        "What is included in a Product Space cohort?",
        "How long is each cohort program?",
        "What kind of support can I expect during the cohort?",
        "Do I need prior experience in product management to join?",
        "What happens after I complete the cohort?",
        "How can I access the resources and interview guides?",
        "Is there a payment plan available?",
        "Can I get a refund if I am unable to complete the program?",
        "How can I contact support?",
      ];
      
      const contents = [
        "Product Space is an ed-tech platform offering comprehensive programs, resources, and mentorship to help individuals transition into or advance their careers in product management.",
        
        "Product Space is designed for aspiring product managers, current product professionals looking to upskill, and individuals transitioning from other fields like operations, finance, or marketing into product management.",
        
        "We offer various cohorts, including Product Management Fellowships and hands-on mentorship from industry leaders.",
        
        "To enroll, simply visit our Cohort Page and follow the steps to sign up. You will be guided through the process to select the cohort that best fits your career goals.",
        
        "Each cohort includes live sessions with product experts, hands-on case studies, real-world projects, interview preparation, and ongoing mentorship to help you become a successful product manager.",
        
        "Our cohorts typically last 8-12 weeks, depending on the program. Specific timelines can be found on the respective cohort pages.",
        
        "You will receive continuous guidance from mentors, access to a community of peers, personalized feedback on assignments, and exclusive resources designed to help you succeed.",
        
        "No prior experience is necessary. Our programs are designed for beginners as well as professionals looking to enhance their product management skills.",
        
        "Upon completing the cohort, you will receive a certificate, continued access to our alumni network, and the opportunity to participate in job placement support.",
        
        "Resources and interview guides will be available after your cohort completion or as part of our stand-alone product offerings. Stay tuned for updates!",
        
        "Yes, we offer flexible payment plans to make our programs accessible to everyone. Details can be found on the payment section of the cohort page.",
        
        "We offer refunds within a certain time frame before the cohort begins. Please refer to our refund policy for more details.",
        
        "You can reach out to our support team via email at support@productspace.com or through our contact form on the website.",
      ];
      

      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const showMoreQuestions = () => {

        setVisibleCount(questions.length);
      };
      const showLessQuestions = () => {
        setVisibleCount(len);
      };
    
      return (
        <div className='flex flex-col gap-2'>
          {questions.slice(0, visibleCount).map((question, index) => (
            <DropdownItem
              key={index}
              question={question}
              content={contents[index]}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
    
          {flag && visibleCount < questions.length ? (
            <Link to={"/faq"}
              onClick={showMoreQuestions}
              className='mt-8 text-[16px] text-[#FF559E] font-semibold underline text-center'
            >
              Show More Questions
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      );
};

export default DropdownList;