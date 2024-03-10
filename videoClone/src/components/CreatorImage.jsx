import React from 'react';
const CreatorImage = ({ video }) => {
  return (
    <div className="w-1/4 flex justify-center items-center bg-sky-200 p-4">
      <div className="rounded-lg overflow-hidden h-24 w-24">
        <img src={video.creator.pic} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default CreatorImage;