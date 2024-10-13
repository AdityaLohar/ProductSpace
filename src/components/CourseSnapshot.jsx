import tick from "../assets/tick-green.svg";
import courseSnapshot from "../assets/course-snapshot.jpg";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

const CourseSnapshot = () => {
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
    <div className="bg-white px-4 md:px-10 xl:px-32 pb-4 lg:pb-16 font-hind">
      <div className="flex flex-col lg:flex-row pt-6 pb-16 lg:py-8 items-between justify-between gap-12">
        
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="text-[28px] lg:text-[40px] font-bold px-2 mb-4 lg:mb-4 text-center lg:text-start font-sans">
            Course Snapshot
          </div>

          <div className="flex flex-col lg:hidden w-full items-start gap-6 items-center">
            <img src={courseSnapshot} alt="" />
          </div>

          <div className="grid grid-cols-1 gap-3 lg:gap-4 font-inter font-semibold">
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>PM Foundations Modules</p>
            </div>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>Discovery & Problem Solving</p>
            </div>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>Product Planning & Documentation</p>
            </div>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>Product Analytics & Growth Lifecycle</p>
            </div>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>Product Interview Mastery</p>
            </div>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-4 py-4">
              <img src={tick} alt="" className="w-4 h-4" />
              <p>Work on Live Projects for real-world product development</p>
            </div>
          </div>

        </div>


        <div className="hidden lg:flex w-1/2 items-center gap-6 px-16">
          {/* <VideoContent /> */}
          <img src={courseSnapshot} alt="" />
        </div>
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

export default CourseSnapshot;
