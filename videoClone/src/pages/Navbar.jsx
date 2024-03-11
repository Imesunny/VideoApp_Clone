import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-6">
      <div className="w-[95%] mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Video Studio Hub</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-purple-500 py-2 px-4 rounded-md hover:bg-gray-100">
            Login
          </button>
          <button className="bg-white text-purple-500 py-2 px-4 rounded-md hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;