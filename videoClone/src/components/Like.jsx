import React from "react";
import { VideoType } from "../types/types";
// import '../styles/Like.css'

const Like = ({ video, handleLike }) => {
  return (
    <div className="flex items-center text-gray-800 gap-4 bg-gray-200 p-2 rounded-lg">
      <button
        onClick={() => handleLike(video.postId)}
        className="text-red-500 font-bold mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        Like
      </button>
      <span>👍{video.likes}</span>
    </div>
  );
};

export default Like;