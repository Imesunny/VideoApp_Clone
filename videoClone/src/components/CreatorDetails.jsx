import React from "react";
import Like from "./Like";
import Comment from "./Comment";

const CreatorDetails = ({ video, handleLike, handleComment }) => {
  return (
    <div className="w-3/4 pl-2 text-left rounded-lg bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-1 text-gray-800">
        {video.creator.name ? video.creator.name : "Name not found"}
      </h2>
      <p className="text-red-800 mb-1">@{video.creator.handle}</p>
      <Like video={video} handleLike={handleLike} />
      <Comment video={video} handleComment={handleComment} />
    </div>
  );
};

export default CreatorDetails;
