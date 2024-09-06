import React from "react";

const MentorCard = ({
  id,
  profile,
  name,
  company,
  post,
  linkedIn,
  img,
}) => {
  return (
    <div
      className={`w-[280px] h-[360px] md:w-[320px] md:h-[440px] rounded-2xl bg-white p-2 bg-no-repeat bg-cover bg-center flex items-end`}
      style={{
        backgroundImage: `url(${profile})`,
      }}
    >
      <div className="bg-white p-2 flex flex-col gap-1 md:gap-2 rounded-xl w-full">
        <div className="flex justify-between">
          <div className="font-sans font-semibold text-[20px]">{name}</div>
          <div>
            <a href={linkedIn} className="text-xs">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn Logo"
                className="w-6 h-6 inline"
              />
            </a>
          </div>
        </div>

        <div className="text-[16px] font-medium">{post}</div>

        <div className="">
          <img src={img} alt="mentor-company-logo" />
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
