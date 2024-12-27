import magicbricks from "../assets/magicbricks-logo.png";
import narayana from "../assets/narayana-health.svg";
import microsoft from "../assets/microsoft.svg";
import fedex from "../assets/fedex.svg";
import reliance from "../assets/reliance.svg";
import inmobi from "../assets/inmobi.svg";
import sonia from "../assets/sonia.svg";
import lalith from "../assets/lalith.jpeg";
import shilpi from "../assets/shilpi.jpeg";
import kanishk from "../assets/kanishk.jpeg";
import arun from "../assets/arun1.svg";
import MentorCard1 from "./MentorCard1";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

const mentors = [
  {
    id: 1,
    profile: sonia,
    name: "Sonia Vora",
    company: "Narayana Health",
    post: "Head of Product",
    linkedIn:
      "https://www.linkedin.com/in/sonia-vora-4b321377/?originalSubdomain=in",
    img: narayana,
  },
  {
    id: 2,
    profile: arun,
    name: "Arun Nandewal",
    company: "Microsoft",
    post: "Sr. Product Manager",
    linkedIn: "https://www.linkedin.com/in/arun-nandewal/?originalSubdomain=in",
    img: microsoft,
  },
  {
    id: 3,
    profile: lalith,
    name: "Lalith Kumar",
    company: "FedEx",
    post: "VP of Product",
    linkedIn:
      "https://www.linkedin.com/in/lalithkumarvemali/?originalSubdomain=in",
    img: fedex,
  },
  {
    id: 4,
    profile: shilpi,
    name: "Shilpi",
    company: "Reliance",
    post: "Sr. Product Manager",
    linkedIn: "https://www.linkedin.com/in/shilpi-swati/?originalSubdomain=in",
    img: reliance,
  },
  {
    id: 5,
    profile: kanishk,
    name: "Kanishk Mehta",
    company: "InMobi",
    post: "Director of Product",
    linkedIn: "https://www.linkedin.com/in/kanishkm/",
    img: inmobi,
  },
  // {
  //   id: 6,
  //   profile:
  //     "https://www.productleadership.com/wp-content/uploads/elementor/thumbs/PamitAnand-qmxkokvkzv0bog8m181ixmu3wadbnidfy2jnbc5xc0.png",
  //   name: "Pamit Anand",
  //   company: "Magicbricks",
  //   post: "VP of Product",
  //   linkedIn: "https://www.linkedin.com/in/pamit82anand/?originalSubdomain=in",
  //   img: magicbricks,
  // },
];

const MentorCard = ({ profile, company, name, post }) => {
  return (
    <div className="relative w-[265px] h-[395px] text-white border border-[#42AAFF] shadow-[0px_0px_13px_0px_#0062B4] rounded-xl overflow-hidden">
      {/* Mentor Image as Background */}
      <img
        src={profile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-xl"></div>

      {/* Mentor Details */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <div className="border-b border-b-gray-500 pb-2 mb-2">
          <img src={company} alt="Company Logo" className="h-6" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-[20px] font-bold">{name}</div>
          <div className="text-[14px]">{post}</div>
        </div>
      </div>
    </div>
  );
};

const MeetMentorsRevamped = () => {
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
      className={`flex flex-col gap-20 py-12 lg:py-20 bg-gradient-to-b from-[#1F3F6F] via-[#081228] to-[#081228]`}
    >
      <div className="text-center">
        <div className="text-[40px] font-bold bg-gradient-to-b from-[#FFF] via-[#FFF] to-[#999] bg-clip-text text-transparent">
          Learn from the Best
        </div>
        <div className="text-[24px] bg-gradient-to-r from-[#585859] via-[#DCDCDC] to-[#585859] bg-clip-text text-transparent">
          Fast track your journey into product management and emerge into your
          dream role as PM
        </div>
      </div>

      <div className="flex gap-6">
        {mentors.map((mentor, id) => (
          <MentorCard
            key={id}
            profile={mentor.profile}
            company={mentor.img}
            name={mentor.name}
            post={mentor.post}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleModal}
          className="text-[18px] lg:text-[24px] w-[270px] text-white font-bold p-4 rounded-full border border-[#42AAFF] shadow-[0px_0px_13px_0px_#0062B4]"
        >
          Become a Mentor
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

export default MeetMentorsRevamped;
