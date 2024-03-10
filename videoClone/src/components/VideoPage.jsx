// VideoPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "../styles/VideoPage.css"

function VideoPage() {
  const { postId } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://internship-service.onrender.com/videos"
        );
        const videos = response.data.data.posts;
        const video = videos.find((video) => video.postId === postId);
        setVideoData(video);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [postId]);

  if (!videoData) {
    return (
      <div className="video-page">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="video-page">
      <div className="video-container">
        <video className="video" controls>
          <source src={videoData.submission.mediaUrl} type="video/mp4" />
        </video>
        <div className="description">
          <h1 className="text-lg font-regular">
            {videoData.submission.description}
          </h1>
          <p className="author-info">
            Uploaded by {videoData.creator.name} @{videoData.creator.handle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;