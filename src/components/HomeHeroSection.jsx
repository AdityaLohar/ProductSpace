import bgImage from "../assets/title-bg.png";
import heroImage from "../assets/home-hero-image.svg";
import stars from "../assets/home-hero-star.svg";
import arrow from "../assets/right-arrow.svg";
import fromBg from "../assets/from-bg.png";
import { useRef, useState } from "react";
import EnrollmentForm from "./EnrollmentForm";
import { Link } from "react-router-dom";
import courseSnapshotVideo from "../assets/pamit-intro-video.mp4";
import "react-toastify/dist/ReactToastify.css";

const VideoContent = () => { 
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  // Pause the video if clicked outside of the play button
  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(false); // Update state
    }
  };

  return (
    <div className="relative w-full">
      <div className="w-full aspect-square rounded-[10%] overflow-hidden">
        <video
          ref={videoRef} // Attach the ref to the video element
          className="w-full h-full object-cover"
          controls={isPlaying ? true : false} // Disable default controls
          onClick={handleVideoClick} // Pause video when clicked
        >
          <source src={courseSnapshotVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlayPause} // Toggle play/pause
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-16 h-16 bg-black bg-opacity-50 rounded-full p-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 3.553v16.894c0 1.15 1.238 1.87 2.22 1.253l12.447-8.447c.936-.635.936-1.972 0-2.607L7.22 3.553C6.238 2.936 5 3.656 5 4.806z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const HomeHeroSection = () => {
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
    <div className="lg:px-20 xl:px-0 flex flex-col lg:flex-row items-center lg:items-center justify-between text-center lg:text-start gap-8 custom-13:gap-24 ">
      <div className="w-full lg:w-1/2 px-6 xl:px-24 custom-13:px-0">
        <p
          className="font-sans text-[17px] text-transparent font-semibold ml-0 sm:ml-1 md:text-[24px] pt-8 
          custom-0:bg-[position:top_50%_left_3%] custom-1:bg-[position:top_50%_left_14%] custom-2:bg-[position:top_50%_left_21%] md:bg-[position:top_50%_left_0%]"
          style={{
            backgroundImage: `url(${fromBg})`,
            backgroundSize: "110px 50px", // Adjust the background to fit the text
            backgroundRepeat: "no-repeat", // No repeat for the background image
          }}
        >
          From
        </p>

        <h1
          className="text-2xl lg:text-[50px] font-bold mb-6 lg:leading-[60px] bg-auto bg-no-repeat font-sans bg-[position:top_2%_left_50%] 
    md:bg-[position:top_6%_left_25%] xl:bg-[position:top_2%_left_25%]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "59%",
          }}
        >
          <span className="font-normal text-[28px] lg:text-[44px]">
            Beginner to Expert{" "}
          </span>
          <span className="text-[34px] lg:text-[50px]">Accelerate your </span>
          <span className="text-[#21C1F3] text-[34px] lg:text-[52px]">
            Product{" "}
          </span>{" "}
          <span className="text-[34px] lg:text-[52px]">Career</span>
        </h1>

        <div className="lg:hidden w-full lg:w-1/2 flex justify-center mb-10 items-center">
          <VideoContent />
        </div>

        <p className="lg:w-4/5 text-[16px] lg:text-[18px] mb-4 font-normal font-inter">
          1:1 Mentorship with Product Leaders who really care
        </p>

        <div className="flex justify-center lg:justify-start gap-2 items-start lg:w-4/5 text-[#334155] text-[12px] lg:text-[16px] font-inter">
          <img src={stars} alt="" className="w-16 h-3 lg:h-4 lg:w-20" />
          <p>490+ 5 Stars</p>
        </div>

        <div className="flex mt-8 gap-4 justify-center lg:justify-start">
          <Link to={"/pm-fellowship"}>
            <button
              className="flex items-center gap-2 justify-center text-[16px] w-[135px] lg:w-[164px] bg-[#FFA000] text-white p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <p>
                  Get Started
                </p>
              <img src={arrow} alt="" />
            </button>
          </Link>
          
          <a href={"https://topmate.io/propel/62841"} target="_blank">
            <button
              // onClick={toggleModal}
              className="flex items-center gap-2 justify-center text-[16px] font-medium  bg-[#FFA0001F] text-black p-2 py-4 lg:p-4 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-[#B8B8B8]"
              >
                Meet with 1:1 mentors
            </button>
          </a>
          
        </div>
      </div>

      <div className="hidden lg:flex w-1/3">
        <VideoContent />
      </div>
          
      {/* Modal Form */}
      <div className="relative">
        {/* Modal */}
        <EnrollmentForm setIsOpen={setIsOpen} isVisible={isVisible} setIsVisible={setIsVisible} isOpen={isOpen} toggleModal={toggleModal} />
      </div>   
    </div>
  );
};

export default HomeHeroSection;
