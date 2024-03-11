import React from "react";

const NewNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-500 py-4">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-semibold">Explore the World of Videos</h1>
        <div className="flex items-center space-x-6">
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition duration-300 ease-in-out">
            Explore More
          </button>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
