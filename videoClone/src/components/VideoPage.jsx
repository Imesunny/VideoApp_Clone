import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white">
      <div className="max-w-md w-full mx-auto">
        <div className="relative">
          <video className="w-full" controls>
            <source src={videoData.submission.mediaUrl} type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
            <h1 className="text-lg font-semibold">{videoData.submission.description}</h1>
            <p className="text-sm">
              Uploaded by {videoData.creator.name} @{videoData.creator.handle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;