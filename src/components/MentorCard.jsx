import React from "react";

const MentorCard = ({
  id,
  profile,
  name,
  company,
  post,
  interest,
  linkedIn,
}) => {
  return (
    <div
      className={`w-[280px] h-[360px] md:w-[320px] md:h-[440px] rounded-2xl bg-white p-2 bg-no-repeat bg-cover bg-center flex items-end`}
      style={{
        backgroundImage: `url(${profile})`,
      }}
    >
      <div className="bg-white p-2 flex flex-col gap-1 rounded-xl w-full">
        <div className="flex justify-between">
          <div className="font-sans font-semibold text-[20px]">{name}</div>
          <div>
            <a className="text-xs" href={linkedIn}>
              linkedin
            </a>
          </div>
        </div>

        <div className="text-[16px] font-medium">{post}</div>

        <div className="text-[16px] font-medium">{company}</div>
      </div>
    </div>
  );
};

export default MentorCard;
