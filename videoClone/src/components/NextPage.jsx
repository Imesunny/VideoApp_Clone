import React from "react";

const NextPage = ({ currentPage, handlePagination }) => {
  const handleClick = () => {
    if (currentPage < 9) {
      handlePagination(currentPage + 1);
    }
  };

  return (
    <button
      disabled={currentPage === 9}
      onClick={handleClick}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-200 ${
        currentPage === 9 && "opacity-50 cursor-not-allowed"
      }`}
    >
      <span className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        Next
      </span>
    </button>
  );
};

export default NextPage;