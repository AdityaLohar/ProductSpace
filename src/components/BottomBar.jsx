import { useState } from "react";
import flash from "../assets/flash.svg";
import EnrollmentForm from "./EnrollmentForm";

const BottomBar = () => {
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
    <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 bg-white px-[120px] py-4 shadow-[0_-15px_28px_-10px_rgba(0,0,0,0.2)]">
      <div className="flex gap-0 2xl:gap-20 justify-between w-full max-w-screen-2xl mx-auto font-hind text-[14px] xl:text-[17px]">
        <div className="flex gap-1 xl:gap-8">
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Course Duration
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              10 Weeks
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Time commitment
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              6-8 hrs/weeks
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Next cohort starts on
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              19th October
            </div>
          </div>
          <div>
            <div className="text-gray-500 font-light border-l border-l-2 border-gray-300 px-2">
              Mode of delivery
            </div>
            <div className="font-bold border-l border-l-2 border-[#21C1F3] px-2">
              Online
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="bg-[#FFF7D9] flex gap-1 xl:gap-3 items-center py-1 px-5">
            <div>Seats filling fast</div>
            <div>
              <img src={flash} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="shimmer bg-[#FF559E] text-white py-2 px-4 2xl:px-8 rounded-full" onClick={toggleModal}>
            Enroll Now
          </button>
        </div>
      </div>

      {/* Modal Form */}
      <div className="relative">
          {/* Modal */}
        <EnrollmentForm setIsOpen={setIsOpen} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    </div>
  );
};

export default BottomBar;
