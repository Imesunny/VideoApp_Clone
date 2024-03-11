import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import VideoDetails from "./VideoDetails";

const VideoCard = ({ video, handleLike, handleComment }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const randomViewCount = Math.floor(Math.random() * 100000) + 1000;
    setViewCount(randomViewCount);
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Thumbnail video={video} />
      <div className="p-4">
        <VideoDetails video={video} handleLike={handleLike} handleComment={handleComment} />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-gray-600">
            <span className="text-sm mr-2">{viewCount} views</span>
            <span className="text-sm mr-2">•</span>
            <span className="text-sm">{video.uploadDate}</span>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
            Watch Now
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={video.creator.pic} alt="" className="w-10 h-10 rounded-full mr-2" />
            <div className="text-sm text-gray-900">
              <p className="font-bold">{video.creator.name}</p>
              <p className="text-gray-500">{video.creator.username}</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-blue-500 text-white-bold rounded-md hover:bg-blue-600 transition duration-200">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;