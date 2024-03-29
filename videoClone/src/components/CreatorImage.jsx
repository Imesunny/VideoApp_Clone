import React from "react";

const CreatorImage = ({ video }) => {
  return (
    <div className="flex items-center justify-center bg-sky-200 rounded-lg p-4">
      <div className="bg-gray-200 p-0 rounded-full">
      <img
  src={video.creator.pic}
  alt=""
  className="rounded-full w-32 h-32 object-cover"
/>
      </div>
    </div>
  );
};

export default CreatorImage;