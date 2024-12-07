import { useState } from "react";
import psVideo from "../assets/ps-youtube-video.png";

const VideoWithCustomCover = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center mt-12 px-4 md:px-20 font-inter">
      <div className="text-[24px] lg:text-[32px] font-bold text-center text-[#24304C]">
        Watch the Gen AI for PMs Event Recording
      </div>
      <div
        className="relative w-full sm:w-[95%] bg-gray-800 rounded-xl overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        {!playVideo && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 cursor-pointer"
            onClick={() => setPlayVideo(true)}
          >
            <img
              src={psVideo}
              alt="Custom Cover"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
            <button className="absolute bg-transparent text-transparent px-4 py-2 rounded-lg font-semibold">
              Play Video
            </button>
          </div>
        )}
        {playVideo && (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/V2yr4Z65D5Y?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoWithCustomCover;
