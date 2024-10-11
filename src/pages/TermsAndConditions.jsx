import React, { useEffect } from 'react'
import termsConditionsData from './../data/termsConditionsData';

const Section = ({ title, content }) => {
    return (
      <div className="text-[18px] flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return (
    <div className="w-full py-0 lg:py-6 bg-white font-hind">
      <div className="flex flex-col gap-8 bg-gray-100 mx-auto max-w-screen-xl px-8 py-8 lg:py-12">
        <div className="text-[32px] lg:text-[40px] font-bold font-sans">
          <h1>Terms and Conditions</h1>
        </div>

        <div className="flex flex-col gap-8">
          {termsConditionsData.map((terms, index) => (
            <Section key={index} title={terms.title} content={terms.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions
