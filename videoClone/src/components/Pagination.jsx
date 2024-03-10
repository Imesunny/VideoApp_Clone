// Pagination.jsx
import React from "react";
import PreviousPage from "./PreviousPage";
import NextPage from "./NextPage";

const Pagination = ({ currentPage, handlePagination }) => {
  return (
    <div className="flex justify-center mt-8 items-center gap-4">
      <PreviousPage currentPage={currentPage} handlePagination={handlePagination} />
      <h3 className="font-bold text-xl">{currentPage}</h3>
      <NextPage currentPage={currentPage} handlePagination={handlePagination} />
    </div>
  );
};

export default Pagination;
