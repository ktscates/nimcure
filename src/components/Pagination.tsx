import React from "react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 text-page">
      <Button
        text="Prev"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={`w-16 h-3 p-0 flex justify-center items-center rounded-full border border-3 border-page text-page text-sm disabled:opacity-50 ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
      />

      {pageNumbers.map((page) => (
        <Button
          key={page}
          text={page.toString()}
          onClick={() => onPageChange(page)}
          className={`w-8 h-1 rounded-full flex justify-center items-center text-page text-sm ${
            page === currentPage
              ? "border border-page rounded-full"
              : "border-none"
          }`}
        />
      ))}
      <Button
        text="Next"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`w-16 h-3 p-0 rounded-full flex justify-center items-center border border-page text-page text-sm disabled:opacity-50 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default Pagination;
