import React from "react";

const usePagination = <T,>(data: T[], pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(pageSize);
  const numberOfPages = Math.ceil(data.length / perPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage,
    perPage,
    setPerPage,
    numberOfPages,
    pages,
    paginatedData,
  };
};

export default usePagination;
