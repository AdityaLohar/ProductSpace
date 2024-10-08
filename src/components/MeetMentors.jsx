import magicbricks from "../assets/magicbricks-logo.png";
import narayana from "../assets/narayana-health.svg";
import microsoft from "../assets/microsoft.svg";
import fedex from "../assets/fedex.svg";
import reliance from "../assets/reliance.svg";
import inmobi from "../assets/inmobi.svg";
import MentorCard1 from "./MentorCard1";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

const mentors = [
  {
    id: 1,
    profile:
      "https://media.licdn.com/dms/image/v2/C5603AQGZh1nhPJbd9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586993297319?e=1731542400&v=beta&t=cF6UVCHOY84ehfuuNzCb2qABr6lTtJH82qrQ753MaK4",
    name: "Sonia Vora",
    company: "Narayana Health",
    post: "Head of Product",
    linkedIn:
      "https://www.linkedin.com/in/sonia-vora-4b321377/?originalSubdomain=in",
    img: narayana,
  },
  {
    id: 2,
    profile:
      "https://media.licdn.com/dms/image/v2/C4E03AQHjZ3JB90t_nA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1587323348124?e=1731542400&v=beta&t=P6-MxMiuaUnfGnqcdcVi_QOxkDjIbGG3Nmz_J3nlJC4",
    name: "Arun Nandewal",
    company: "Microsoft",
    post: "Sr. Product Manager",
    linkedIn: "https://www.linkedin.com/in/arun-nandewal/?originalSubdomain=in",
    img: microsoft,
  },
  {
    id: 3,
    profile:
      "https://media.licdn.com/dms/image/v2/C4E03AQFnGwyNhCQADg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1637825840329?e=1731542400&v=beta&t=FL_hXMi556xTvEyyg34P0prdiAADiTB9HOmII1Ff26A",
    name: "Lalith Kumar",
    company: "FedEx",
    post: "VP of Product",
    linkedIn:
      "https://www.linkedin.com/in/lalithkumarvemali/?originalSubdomain=in",
    img: fedex,
  },
  {
    id: 4,
    profile:
      "https://media.licdn.com/dms/image/v2/C5103AQFvYT_gMa_31Q/profile-displayphoto-shrink_400_400-alternative/profile-displayphoto-shrink_400_400-alternative/0/1528975669833?e=1731542400&v=beta&t=EZcfogH9xxfygIpn0yOfYVCouJTvOD3x5hlAF8ebLh4",
    name: "Shilpi",
    company: "Reliance",
    post: "Sr. Product Manager",
    linkedIn: "https://www.linkedin.com/in/shilpi-swati/?originalSubdomain=in",
    img: reliance,
  },
  {
    id: 5,
    profile:
      "https://media.licdn.com/dms/image/v2/D5603AQGzVCf2qubRGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721931911839?e=1731542400&v=beta&t=Jwj6bqoXiush9EsZrL5CqZwzbVoHQPhV8O2DNrKJa7w",
    name: "Kanishk Mehta",
    company: "InMobi",
    post: "Director of Product",
    linkedIn: "https://www.linkedin.com/in/kanishkm/",
    img: inmobi,
  },
  {
    id: 6,
    profile:
      "https://www.productleadership.com/wp-content/uploads/elementor/thumbs/PamitAnand-qmxkokvkzv0bog8m181ixmu3wadbnidfy2jnbc5xc0.png",
    name: "Pamit Anand",
    company: "Magicbricks",
    post: "VP of Product",
    linkedIn: "https://www.linkedin.com/in/pamit82anand/?originalSubdomain=in",
    img: magicbricks,
  },
];

const MeetMentors = ({ bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <div
      className={`flex flex-col pt-2 lg:pt-0 pb-10 lg:pb-16`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="py-5 lg:py-10">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans">
          Meet our Mentors
        </div>
        <div className="text-[14px] lg:text-[16px] text-center text-gray-700 font-medium px-4 xl:px-60 pt-2 pb-1">
          <p className="lg:hidden">
            Meet Expert Mentors Ready to Guide On Your Product Journey
          </p>

          <p className="hidden lg:block">
            Meet Expert Mentors Ready to Guide On Your Product Journey
          </p>
        </div>
      </div>

      {/* <div
        className="overflow-x-auto md:overflow-hidden hover:cursor-default mentor-scrollbar md:scroll-container"
        onMouseEnter={() =>
          document.documentElement.style.setProperty(
            "--scroll-animation-play-state",
            "paused"
          )
        }
        onMouseLeave={() =>
          document.documentElement.style.setProperty(
            "--scroll-animation-play-state",
            "running"
          )
        }
      >
        <div className="flex scroll-wrapper">
          {[...Array(5)].map((_, i) =>
            mentors.map((mentor, index) => (
              <div key={`${mentor.id}-${index}-${i}`} className="scroll-item">
                <MentorCard1
                  id={mentor.id}
                  profile={mentor.profile}
                  name={mentor.name}
                  company={mentor.company}
                  post={mentor.post}
                  linkedIn={mentor.linkedIn}
                  img={mentor.img}
                />
              </div>
            ))
          )}
        </div>
      </div> */}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {mentors.map((mentor, index) => (
            <div key={`${mentor.id}-${index}`} className="mentor-card">
              <MentorCard1
                id={mentor.id}
                profile={mentor.profile}
                name={mentor.name}
                company={mentor.company}
                post={mentor.post}
                linkedIn={mentor.linkedIn}
                img={mentor.img}
              />
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center pt-6 lg:pt-12">
        <button
          onClick={toggleModal}
          className="w-[300px] bg-[#FFC303] text-[18px] text-black font-semibold py-4 rounded-full"
        >
          <p>Enroll Now</p>
        </button>
      </div>

      <div>
        <EnrollmentForm
          setIsOpen={setIsOpen}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default MeetMentors;
