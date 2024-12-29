import React from "react";
import tick from "../assets/Tick1.svg";
import star from "../assets/star-blue.svg";
import wallet from "../assets/wallet-blue.svg";

const Icon = ({ img, title, desc, size }) => {
  return (
    <div className="flex flex-col gap-4 px-8 lg:px-8 py-6 lg:py-12 w-auto lg:w-[250px]">
      <div>
        <img src={img} alt="" className={`h-[50px] lg:h-[${size}px] w-auto`} />
      </div>
      <div className="w-full">
        <div className="text-[24px] lg:text-[40px] font-bold">{title}</div>
        <div className="text-[14px] lg:text-[24px] ">{desc}</div>
      </div>
    </div>
  );
};

const HelpSucceed = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-10 text-[#1D1F3D] px-4 lg:px-32 py-10 lg:py-28">
      <div className="order-2 lg:order-1 flex flex-col">
        <div className="flex">
          <div className="border-r border-b w-1/2">
            <Icon img={tick} title={"90%"} desc={"Graduation Rate"} size={70} />
          </div>
          <div className="border-b w-1/2">
            <Icon img={star} title={"80%"} desc={"Placement Rate"} size={70} />
          </div>
        </div>
        <div className="flex">
          <div className="border-r w-1/2">
            <Icon
              img={wallet}
              title={"₹57 LPA"}
              desc={"Median Graduate Salary"}
              size={70}
            />
          </div>
          <div className="w-1/2">
            <Icon img={tick} title={"90%"} desc={"Graduation Rate"} size={70} />
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 flex flex-col gap-1 lg:gap-3 text-center lg:text-left">
        <div className="text-[20px] lg:text-[40px] font-bold">
          We help you succeed in your career
        </div>
        <div className="text-[16px] lg:text-[24px] text-[#A3A7B6]">
          Our proven track record of transforming aspiring product managers into
          industry-leading professionals across top-tier tech companies.
        </div>
      </div>
    </div>
  );
};

export default HelpSucceed;
