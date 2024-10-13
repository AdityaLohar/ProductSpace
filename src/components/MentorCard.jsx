import React from "react";

const MentorCard = ({ id, profile, name, company, post, linkedIn, img }) => {
  return (
    <div className="w-[394px] h-[503px] rounded-2xl bg-[#DBF6FF] p-3 flex flex-col gap-3 border border-[#E7E7E7]">
      <div className="flex items-start gap-2 items-center">
        <div className="w-[370px] h-[312px] rounded-xl overflow-hidden border border-[#E7E7E7]">
          <img
            src={profile}
            alt="profile-picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-[#E7E7E7]">
        <div className="flex flex-col gap-1">
          <p className="text-[20px] font-inter font-semibold">{name}</p>
          <p className="text-[18px] font-inter font-[#000000BF]">{post}</p>
        </div>

        <div>
          <a href={linkedIn} className="text-xs flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn Logo"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white rounded-xl p-4 border border-[#E7E7E7]">
        <img src={img} className="h-6 w-auto" alt="current-company" />
      </div>

    </div>
  );
};

export default MentorCard;
