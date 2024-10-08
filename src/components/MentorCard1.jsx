import React from "react";
import rectangle from "../assets/Rectangle.svg";

const MentorCard1 = ({ id, profile, name, company, post, linkedIn, img }) => {
  return (
    <div className="w-[280px] h-[308px] lg:w-[350px] lg:h-[380px] flex flex-col gap-3 items-center p-4 border-2 border-[#f5f5f5] rounded-2xl bg-white shadow-lg">
      <div>
        <div className="flex items-center justify-center overflow-hidden mb-4 mt-2">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] rounded-full border-2 border-gray-200 object-cover"
          />
        </div>

        <div className="text-[18px] lg:text-[24px] font-semibold mb-1 text-center">
          {name}
        </div>

        <div className="text-[14px] lg:text-[20px] text-gray-600 mb-0 text-center">
          {post}
        </div>
      </div>

      <div className="flex items-center p-2 ">
        <img src={rectangle} alt="" />
        <img
          src={img}
          alt="Center Image"
          className="mx-4 w-28 h-10 lg:w-36 lg:h-16 bg-white px-2 py-1 object-contain rounded-md"
        />
        <img src={rectangle} alt="" />
      </div>

      <div>
        <a href={linkedIn} className="text-xs flex gap-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            className="w-4 h-4"
          />

          <div className="font-medium">LinkedIn Profile</div>
        </a>
      </div>
    </div>
  );
};

export default MentorCard1;
