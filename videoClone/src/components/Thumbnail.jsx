// Thumbnail.js
import React from "react";
import { Link } from "react-router-dom";
// import '../styles/Thumbnail.css'

const Thumbnail = ({ video }) => {
  return (
    <div>
      <Link key={video.postId} to={`/video/${video.postId}`}>
        <img
          src={video.submission.thumbnail}
          alt=""
          className="w-full h-[30rem]"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;