import React, { useState } from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ video }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link key={video.postId} to={`/video/${video.postId}`}>
        <img
          src={video.submission.thumbnail}
          alt=""
          className="w-full h-[30rem] object-cover"
        />
      </Link>
      {isHovering && (
        <div className="absolute inset-0 w-full h-full object-cover pointer-events-none">
          <video className="inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 12L6 6V18Z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;