import { useEffect, useState } from "react";
import chevron from "../assets/chevron-double.svg";

const AlumniCard = ({
  profile,
  name,
  prevCompany,
  prevPost,
  curCompany,
  curPost,
  testimonial,
}) => {

  return (
    <div className="w-[320px] h-[545px] rounded-2xl bg-white p-2">
      <div className="relative">
          <div className="relative w-full h-66 rounded-lg overflow-hidden">
      <img
        src={profile}
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: "inset 0 -20px 40px rgba(0, 0, 0, 0.8)", // Adjust the strength and color here
        }}
      ></div>
    </div>

        <div className="absolute bottom-1.5 left-2.5">
          <p className="text-lg font-bold text-white">{name}</p>
        </div>
      </div>

      <div className="flex items-center h-[90px] justify-between pt-3 pb-4 border-b-2">
        <div className="prev w-[44%] space-y-2">
          <div className="text-[16px] font-semibold">{prevCompany}</div>
          <div className="text-xs">{prevPost}</div>
        </div>

        <div className="flex flex-col items-center w-[12%] ">
          <img src={chevron} alt="" />
        </div>

        <div className="after w-[44%] space-y-2">
            <div className="text-[16px] font-semibold">{curCompany}</div>
            <div className="text-xs">{curPost}</div>
        </div>
      </div>

      <div className="text-[14px] flex flex-col items-center text-center pt-4">
      {testimonial}
    </div>
    </div>
  );
};

export default AlumniCard;
