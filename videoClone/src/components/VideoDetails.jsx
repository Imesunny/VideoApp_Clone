// VideoDetails.jsx
import React from "react";
import CreatorImage from "./CreatorImage";
import CreatorDetails from "./CreatorDetails";

const VideoDetails = ({ video, handleLike, handleComment }) => {
  return (
    <div className="p-1">
      <div className="flex">
        <CreatorImage video={video} />
        <CreatorDetails
          video={video}
          handleLike={handleLike}
          handleComment={handleComment}
        />
      </div>
    </div>
  );
};

export default VideoDetails;
