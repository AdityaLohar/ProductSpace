import React from "react";
import rectangle from "../assets/Rectangle.svg";

const MentorCard1 = ({
  id,
  profile,
  name,
  company,
  post,
  linkedIn,
  img,
}) => {
  return (
    <div className="w-[280px] h-[308px] flex flex-col gap-3 items-center p-4 my-3 border rounded-lg bg-white shadow 
    shadow-[2px_3px_10px_rgba(1,1,1,0.2)] border-1 border-[#00B5CE]">
    {/* <div className="w-[280px] h-[308px] flex flex-col gap-3 items-center p-4 border rounded-lg shadow-md bg-[#D7F5FF] border-1 border-[#00B5CE]"> */}
        <div>
            <div className="flex items-center justify-center overflow-hidden mb-4 mt-2">
                <img src={profile} alt="Profile Picture" className="w-[88px] h-[88px] rounded-full object-cover" />
            </div>

            <div className="text-[18px] font-semibold mb-1 text-center">
                {name}
            </div>
            
            <div className="text-[14px] text-gray-600 mb-0 text-center">
                {post}
            </div>
        </div>
  
  <div className="flex items-center p-2 mt-4">
    <img src={rectangle} alt="" />
    <img src={img} alt="Center Image" className="mx-4 w-28 h-10 bg-white px-2 py-1 object-contain rounded-md" />
    <img src={rectangle} alt="" />
  </div>
  
  <div>
    <a href={linkedIn} className="text-xs flex gap-2 items-center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn Logo"
        className="w-4 h-4"
    />

    <div className="font-medium">
        LinkedIn Profile
    </div>
    </a>
  </div>
</div>
  );
};

export default MentorCard1;