// VideoCard.jsx
import React from "react";
import Thumbnail from "./Thumbnail";
import VideoDetails from "./VideoDetails";

const VideoCard = ({ video, handleLike, handleComment }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Thumbnail video={video} />
      <VideoDetails
        video={video}
        handleLike={handleLike}
        handleComment={handleComment}
      />
    </div>
  );
};

export default VideoCard;
