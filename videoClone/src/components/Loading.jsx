import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-bounce bg-blue-500 w-16 h-16 rounded-full"></div>
      <div className="animate-bounce bg-blue-500 w-16 h-16 rounded-full ml-4"></div>
      <div className="animate-bounce bg-blue-500 w-16 h-16 rounded-full ml-4"></div>
    </div>
  );
};

export default Loading;