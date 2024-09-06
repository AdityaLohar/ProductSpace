import AlumniCard from "./AlumniCard";
import alum from "../assets/AlumFace.svg";

const alumni = [
  {
    id: 1,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 2,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 3,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 4,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 5,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  {
    id: 6,
    profile: alum,
    name: "Arpita",
    prevCompany: "Company A",
    prevPost: "Role A",
    curCompany: "Company B",
    curPost: "Role B",
  },
  // Add more alumni data here
];

const Alumni = () => {

  return (
    <div className="flex flex-col bg-[#AEECFF] mb-10 lg:mb-20 rounded-3xl pb-10">
      <div className="py-5 lg:py-10">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Our Successful Alumni
        </div>
        <div className="text-[14px] lg:text-[17px] text-center text-gray-700 font-medium px-4 xl:px-60">
          <p className="lg:hidden">
          A sneak peak into what you will learn in our 10-week curriculum. You will have to commit to investing 6 to 8 hours of dedicated time
          to this program every week.
          </p>

          <p className="hidden lg:block">
            A sneak peak into what you will learn in our 10-week curriculum.{" "}
          </p>
          <p className="hidden lg:block">
            {" "}
            You will have to commit to investing 6 to 8 hours of dedicated time
            to this program every week.{" "}
          </p>
        </div>
      </div>

      <div className="overflow-x-scroll md:overflow-x-hidden mentor-scrollbar md:scroll-container">
        <div
          className={`scroll-wrapper ml-6 animate`}
        >
          {[...alumni, ...alumni].map((alums, index) => (
            <div key={`${alums.id}-${index}`} className="scroll-item">
              <AlumniCard
                profile={alums.profile}
                name={alums.name}
                prevCompany={alums.prevCompany}
                prevPost={alums.prevPost}
                curCompany={alums.curCompany}
                curPost={alums.curPost}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
