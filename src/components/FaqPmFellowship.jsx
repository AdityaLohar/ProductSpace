import React, { useState } from 'react';
import { Link } from 'react-router-dom';

  const DropdownItem = ({ question, content, isOpen, onClick }) => {
      return (
          <div className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${isOpen ? "border border-2 border-[#C3C3C3]" : "border border-2 border-transparent"}`}>
              <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                  <div className='text-[16px] font-semibold text-gray-700'>
                      <p>{question}</p>
                  </div>
                  <div className=''>
                      <svg
                          className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${isOpen ? 'rotate-[0deg] bg-[#111] text-white' : 'text-gray-400 rotate-[-90deg]'}`}
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
      "What is the Product Space Product Management Fellowship?",
      "Who is eligible to apply for the Product Space Fellowship?",
      "How much does the Product Space Fellowship cost? Are there hidden fees?",
      "What if I miss a live session?",
      "What benefits do I get as a Fellow?",
      "I'm a UG/PG student. Can I still apply?",
      "What resources and support will I have access to during the fellowship?",
      "How often do new cohorts start?",
      "What type of roles can I apply for after completing the fellowship?",
      "Do I need prior work experience to be eligible for job interviews?",
      "Which companies hire from the Product Space Fellowship?",
      "What if I need to withdraw from the program? Is there a refund policy?",
      "Is the Product Space Fellowship worth it?",
      "What are the session timings for the fellowship?",
      " I still have doubts about the course. Can I connect with mentors or alumni of Product Space?"
    ];
    
    const contents = [
      "Our Product Management Fellowship is a 10-week online program designed to help you excel in your product management career. It includes live sessions on Teams, taught by experienced industry experts and product leaders from top companies. You will learn the practical application of key PM skills, work on real-world case studies, and receive personal feedback and mentorship to help you put your knowledge into action.",
      
      "Anyone with a passion for product management can apply! Whether you're a student, working professional, or looking for a career switch, we welcome applicants from all backgrounds. There are no requirements for a specific degree, CGPA, or prior experience.",
      
      "The fellowship has a one-time enrollment fee. There are no hidden costs",
      
      "No worries! All live sessions are recorded and made available to you, so you can watch it later at your convenience. That being said, we do encourage attending live for the best experience, as they're designed to be participatory and interactive and packed with opportunities to ask questions.",
      
      "As a Product Space Fellow, you'll receive: Expert mentorship from seasoned product managers. Practical learning with real-world case studies. 1 year placement support with access to mock interviews, alumni connections, and hiring managers. Exclusive resources and tools to help you succeed in the PM world.",
      
      "Absolutely! We welcome pre-final year students who are eager to learn and build their careers in product management to apply. This fellowship is a great way to kickstart your career and gain valuable early experience in the field.",
      
      "You'll receive: Weekly live sessions with industry experts.Exclusive learning materials, practical tools, and weekly challenges based on real-world scenarios. One year of placement support to help you land a role in product management.",
      
      "We have a new cohort starting every 1.5 months. Stay tuned for our next opening!",
      
      "This fellowship will make you industry-ready to apply for full-time product management roles or internships at top companies. Whether you're a student or a working professional, you'll be prepared for roles like Product Manager (PM), Associate Product Manager (APM), and product internships across various industries.",
      
      "Not at all! As long as you complete the weekly milestones and final project with a passing grade, you'll be eligible for job interviews.",
      
      "We work with a wide variety of companies, from startups to large enterprises. Over 310 companies are part of our hiring network, and we add new partners with each cohort.",
      
      "You can request a refund up to two weeks before the fellowship begins. If your reason is valid, we'll provide a full refund. Any requests made after the deadline will be reviewed on a case-by-case basis by our team.",
      
      "If you're serious about launching your product management career, the fellowship offers the perfect blend of knowledge, mentorship, and placement support. But don't take our word for it—check out our success stories from alumni who've landed their dream PM roles!",

      "The sessions are held on Saturdays and Sundays, with 3-hour classes each day. Any additional sessions are held on Wednesdays from 9:00 PM to 10:30 PM.",

      "Yes, you can! You can book a call with one of our mentors or schedule a call with an alumni member to clarify any questions you have. Book a call with a mentor | Book a call with an alumni."
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
        <div className='flex flex-col gap-2 w-full'>
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

const FaqPmFellowship = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] pt-3 lg:pt-0 pb-20">
      <div className="py-5 lg:py-8">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans px-4">
          Frequently Asked Questions
        </div>
      </div>

      <div className="flex justify-between px-4 lg:px-20 gap-4">
        <DropdownList len={5} flag={1} />
      </div>
    </div>
  );
};

export default FaqPmFellowship;