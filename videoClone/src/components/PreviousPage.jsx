import React from "react";

const PreviousPage = ({ currentPage, handlePagination }) => {
  const handleClick = () => {
    if (currentPage > 0) {
      handlePagination(currentPage - 1);
    }
  };

  return (
    <button
      disabled={currentPage === 0}
      onClick={handleClick}
      className={`bg-gradient-to-l from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-200 ${
        currentPage === 0 && "opacity-50 cursor-not-allowed"
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
            d="M11 15l-3-3 3-3m-6 4h12a3 3 0 003-3V8.5l-3-3-3 3v5.5a3 3 0 01-3 3z"
          />
        </svg>
        Previous
      </span>
    </button>
  );
};

export default PreviousPage;