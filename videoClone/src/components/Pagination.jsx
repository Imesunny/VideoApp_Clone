import React from "react";
import PreviousPage from "./PreviousPage";
import NextPage from "./NextPage";

const Pagination = ({ currentPage, handlePagination }) => {
  return (
    <div className="flex justify-center mt-8 items-center gap-4 bg-gradient-to-r from-blue-400 to-green-500 p-4 rounded-lg shadow-md">
      <PreviousPage currentPage={currentPage} handlePagination={handlePagination} />
      <h3 className="font-bold text-xl text-gray-800">{currentPage}</h3>
      <NextPage currentPage={currentPage} handlePagination={handlePagination} />
    </div>
  );
};

export default Pagination;
