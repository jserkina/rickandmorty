import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className="flex justify-center mt-10 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="prev"
        nextClassName="next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  )
}

export default Pagination;
