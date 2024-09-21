import tick from "../assets/tick-green.svg";
import courseSnapshotVideo from "../assets/course-snapshot-video.mp4";
import { useRef, useState } from "react";

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

      {/* <div className="text-center mt-4 text-[20px] font-semibold">
        Message from Program Director - PM Fellowship
      </div> */}
    </div>
  );
};

const CourseSnapshot = () => {
  return (
    <div className="bg-white pb-0 px-4 md:px-10 xl:px-32 pt-10 font-hind">
      <div className="flex flex-col lg:flex-row py-4 lg:py-12 items-center justify-between gap-12">
        <div className="flex flex-col gap-2 lg:gap-6">
          <div className="text-[28px] lg:text-[40px] font-bold px-2 mb-4 lg:mb-8 text-center lg:text-start font-sans">
            Course Snapshot
          </div>

          <div className="flex flex-col lg:hidden w-full items-start gap-6 items-center mb-6 lg:mb-0">
            <VideoContent />
          </div>

          <div className="flex flex-col lg:flex-row bg-[#9747FF] p-4 lg:p-10 text-[18px] text-white gap-4 xl:gap-8 rounded-2xl flex-wrap">
            <div className="flex justify-around w-full md:gap-4 xl:gap-8">
              
              <div className="text-center">
                <span className="text-[32px] lg:text-[40px] 2xl:text-[46px] font-sans font-semibold text-yellow-400">
                  2000+
                </span>{" "}
                <br />
                Alumni
              </div>

              <div className="text-center">
                <span className="text-[32px] lg:text-[40px] 2xl:text-[46px] font-sans font-semibold text-yellow-400">
                  600+
                </span>{" "}
                <br />
                Transitions
              </div>
            </div>

          </div>

          <div className="space-y-3 my-8 text-[16px] md:text-[18px]">
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> PM Foundations
              Modules
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Discovery & Problem Solving
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Product Planning & Documentation
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Product Analytics & Growth Lifecycle
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Product Interview Mastery
            </div>
            <div className="flex gap-2 items-start lg:items-center">
              {" "}
              <img src={tick} alt="" /> Work on Live Projects for real-world product development
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-1/2 items-start gap-6 px-16 items-center">
          <VideoContent />
        </div>
      </div>
    </div>
  );
};

export default CourseSnapshot;
