import React from "react";
import tick from "../assets/Tick1.svg";

const Icon = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

const HelpSucceed = () => {
  return (
    <div className="text-[#1D1F3D]">
      <div>
        <Icon img={tick} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-[40px] font-bold">
          We help you succeed in your career
        </div>
        <div className="text-[24px] text-[#A3A7B6]">
          Our proven track record of transforming aspiring product managers into
          industry-leading professionals across top-tier tech companies.
        </div>
      </div>
    </div>
  );
};

export default HelpSucceed;
