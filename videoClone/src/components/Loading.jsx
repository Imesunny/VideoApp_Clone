import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
      <div className="w-12 h-12 relative ml-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
      <div className="w-12 h-12 relative ml-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
