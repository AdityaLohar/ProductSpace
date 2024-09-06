import chevron from "../assets/chevron-double.svg";

const AlumniCard = ({
  profile,
  name,
  prevCompany,
  prevPost,
  curCompany,
  curPost,
}) => {
  return (
    <div className="w-[320px] rounded-2xl bg-white p-2">
      <div className="relative">
        <img src={profile} alt="" className="rounded-lg" />
        <div className="absolute bottom-1.5 left-2.5">
          <p className="text-lg font-bold text-white">{name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 pb-4 border-b-2">
        <div className="prev w-[44%] space-y-2">
          <div className="text-[16px] font-semibold">{prevCompany}</div>
          <div className="text-xs">{prevPost}</div>
        </div>
        <div className="flex flex-col items-center w-[12%] ">
          <img src={chevron} alt="" />
        </div>
        <div className="after w-[44%] ">
          <div className="text-[16px] font-semibold">{curCompany}</div>
          <div className="text-xs">{curPost}</div>
        </div>
      </div>

      <div className="text-[14px] flex items-center text-center pt-4">
        Dolores in enim cumque et. Voluptatem voluptas accusamus qui tempore vel
        incidunt repellat. Molestiae quia ea. Voluptatem voluptas accusamus qui
        tempore vel incidunt repellat. Molestiae quia ea.
      </div>
    </div>
  );
};

export default AlumniCard;
