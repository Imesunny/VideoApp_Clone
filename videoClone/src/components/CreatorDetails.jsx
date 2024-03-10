import React from "react";
import Like from "./Like";
import Comment from "./Comment";

const CreatorDetails = ({ video, handleLike, handleComment }) => {
  return (
    <div className="w-3/4 pl-2 text-left">
      <h2 className="text-lg font-bold mb-1">
        {video.creator.name ? video.creator.name : "Creator missing"}
      </h2>
      <p className="text-gray-400 mb-1">@{video.creator.handle}</p>
      <Like video={video} handleLike={handleLike} />
      <Comment video={video} handleComment={handleComment} />
    </div>
  );
};

export default CreatorDetails;
