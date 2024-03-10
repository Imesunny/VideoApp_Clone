// CreatorImage.js
import React from 'react';
const CreatorImage = ({ video }) => {
  return (
    <div className="w-1/4 flex justify-center items-center">
      <div className="rounded-full overflow-hidden h-16 w-16">
        <img src={video.creator.pic} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default CreatorImage;