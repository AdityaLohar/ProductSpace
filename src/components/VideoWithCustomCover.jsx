import React, { useEffect } from "react";
import { useState } from "react";
import psVideo from "../assets/youtube-thumbnail.svg";

const VideoWithCustomCover = () => {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Generative AI for Product Managers Workshop",
      description: "",
      thumbnailUrl: ["https://example.com/thumbnail.jpg"],
      uploadDate: "2024-12-01T08:00:00+00:00",
      embedUrl: "https://www.youtube.com/embed/V2yr4Z65D5Y",
      contentUrl: "https://www.youtube.com/watch?v=V2yr4Z65D5Y",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(videoSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center my-6 md:my-12 px-4 md:px-20 font-inter">
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
            <div className="relative flex items-center justify-center w-16 md:w-24 h-10 md:h-16 bg-red-600 rounded-lg md:rounded-2xl shadow-md">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-[4px]" />
            </div>
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
