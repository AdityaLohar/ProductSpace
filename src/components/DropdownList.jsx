import React, { useState } from 'react';

const DropdownItem = ({ question, content, isOpen, onClick }) => {
    return (
        <div className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${isOpen ? "border border-2 border-[#9747FF]" : "border border-2 border-transparent"}`}>
            <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                <div className='text-[16px] font-semibold text-gray-700'>
                    <p>{question}</p>
                </div>
                <div className=''>
                    <svg
                        className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${isOpen ? 'rotate-[0deg] bg-[#9747FF] text-white' : 'text-gray-400 rotate-[-90deg]'}`}
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

const DropdownList = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        "Who is eligible to apply for the product fellowship cohort?",
        "What is the price for the product fellowship cohort?",
        "When does the next cohort begin?",
        "Do I get a certificate post the completion of the cohort?",
        "Can I connect with the past alumni? certificate post the completion of the cohort?"
    ];

    const contents = [
        "A seemingly elegant design can quickly begin to bloat with unexpected content or break under the weight of actual activity. Fake data can ensure a nice looking layout but it doesn&apos;t reflect what a living, breathing application must endure. Real data does.",
        "Content for price...",
        "Content for next cohort...",
        "Content for certificate...",
        "Content for alumni..."
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-2'>
            {questions.map((question, index) => (
                <DropdownItem
                    key={index}
                    question={question}
                    content={contents[index]}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default DropdownList;