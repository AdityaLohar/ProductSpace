import chevron from "../assets/chevron-alumni.svg";

const AlumniCard = ({
  profile,
  name,
  prevCompany,
  prevPost,
  curCompany,
  curPost,
  testimonial
}) => {
  return (
    <div
    className="w-[365px] h-[370px] lg:w-[395px] lg:h-[394px] rounded-2xl bg-white bg-[radial-gradient(circle,_#F5F1D8_1px,_transparent_2px)] bg-[length:15px_15px] p-6 flex flex-col gap-8 lg:gap-10 border-2 border-[#E7E7E7]"
  >
  
      <div className="flex items-start gap-2 items-center">
        {/* Circular image */}
        <div className="w-[52px] h-[52px] rounded-lg overflow-hidden border border-1 border-white">
          <img
            src={profile}
            alt="profile-picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name below the image */}
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-inter font-semibold">
            {name}
          </p>
          <p className="text-[16px] text-[#333] font-inter">
            Batch 123
          </p>
        </div>
      </div>

      <div className="text-[18px] flex flex-col items-start  justify-between text-left w-full pr-8 leading-[1.4]">
        {/* {testimonial} */}
        {"With dedicated 1:1 mentorship by seasoned product leaders like VPs, Directors & Sr PMs"}
      </div>

      <div className="flex items-start justify-between w-full ">
        <div className="prev w-[44%] space-y-2 flex flex-col items-center">
          <div className="text-[16px] h-[91px] w-[123px] lg:h-[110px] lg:w-[148px] flex items-center justify-center font-semibold text-center bg-[#F7F7F7] border border-[#E3E3E3] rounded-lg">
            <img
              src={prevCompany}
              className="h-10 w-auto"
              alt="previous-company"
            />
          </div>
          <div className="text-[14px] font-inter font-semibold text-center">{prevPost}</div>
        </div>

        <div className="flex flex-col items-center h-[80%] justify-center w-[12%]">
          <img src={chevron} alt="Chevron Icon" />
        </div>

        <div className="prev w-[44%] space-y-2 flex flex-col items-center">
          <div className="text-[16px] h-[91px] w-[123px] lg:h-[110px] lg:w-[148px] flex items-center justify-center font-semibold text-center bg-[#DEF7FF] border border-[#21C1F352] rounded-lg">
            <img
              src={curCompany}
              className="h-10 w-auto"
              alt="current-company"
            />
          </div>
          <div className="text-[14px] font-inter font-semibold text-center">{curPost}</div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
