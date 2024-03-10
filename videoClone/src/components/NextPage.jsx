// NextPage.jsx
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
      className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
        currentPage === 9 && "opacity-50 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  );
};

export default NextPage;
