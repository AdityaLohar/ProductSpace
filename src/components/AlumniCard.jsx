import chevron from "../assets/chevron-double.svg";

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
      className="w-[330px] h-[340px] rounded-3xl bg-white p-4 flex flex-col items-center gap-2 border border-1 border-white"
      style={{
        background:
          "linear-gradient(to bottom, #AEECFF 10%, white 50%, white 100%)", // Smooth gradient transition
      }}
    >
      <div className="flex flex-col items-center">
        {/* Circular image */}
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden border border-1 border-white">
          <img
            src={profile}
            alt="profile-picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name below the image */}
        <p className="text-[14px] font-sans font-bold text-center mt-3">
          {name}
        </p>
      </div>

      <div className="flex items-start h-[90px] justify-between w-full">
        <div className="prev w-[44%] space-y-2 flex flex-col items-center">
          <div className="text-[16px] font-semibold text-center">
            <img
              src={prevCompany}
              className="h-10 w-auto"
              alt="previous-company"
            />
          </div>
          <div className="text-xs text-center">{prevPost}</div>
        </div>

        <div className="flex flex-col items-center h-full justify-center w-[12%]">
          <img src={chevron} alt="Chevron Icon" />
        </div>

        <div className="w-[44%] space-y-2 flex flex-col items-center">
          <div className="text-[16px] font-semibold text-center">
            <img
              src={curCompany}
              className="h-10 w-auto"
              alt="previous-company"
            />
          </div>
          <div className="text-xs text-center">{curPost}</div>
        </div>
      </div>

      <div className="text-[14px] flex flex-col items-start justify-between text-left pt-4 w-full">
        {testimonial}
        <div className="text-white">
          {"."}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
