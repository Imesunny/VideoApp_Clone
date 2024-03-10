// PreviousPage.jsx
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
      className={`mr-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
        currentPage === 0 && "opacity-50 cursor-not-allowed"
      }`}
    >
      Previous
    </button>
  );
};

export default PreviousPage;
