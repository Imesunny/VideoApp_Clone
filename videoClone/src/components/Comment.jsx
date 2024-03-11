import React, { useState } from "react";
import { VideoType } from "../types/types";

const Comment = ({ video, handleComment }) => {
  const [newComment, setNewComment] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      handleComment(video.postId, newComment);
      setNewComment("");
      setShowInput(false);
    }
  };

  return (
    <div className=" bg-sky-200 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-blue-800 mr-2">
          {video.comment.count}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 inline-block mr-1"
          >
            <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1.4 13.4a1.6 1.6 0 1 1 2.8 0L10 11.6l4.6 4.6a1.6 1.6 0 1 1-2.8 2.8L8.4 13.4zM5 11.3c0 .6.4 1 1 1h6.7l-1.5.8H7.4c-.6 0-1-.4-1-1V5.7l1.5-.8H9.5c.6 0 1 .4 1 1zm10.4 0c0 .6-.4 1-1 1H5.3l1.5-.8h6.7c.6 0 1-.4 1-1V5.7l-1.5-.8h2.5c.6 0 1 .4 1 1z" />
          </svg>
        </div>
        <div>
          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="flex items-center justify-center w-full sm:w-auto h-10 px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              <span className="mr-2">Comment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              <span className="mr-2">Post</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M4 4h16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16l-2-2z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className={`${showInput ? "block" : "hidden"} mt-4`}>
        <textarea
          rows={1}
          cols={50}
          value={newComment}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};

export default Comment;
