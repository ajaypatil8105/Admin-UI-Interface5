import React from "react";

function FirstPageButton({ onClick }) {
  return (
    <button className="pagination-button first-last" onClick={onClick}>
      First
    </button>
  );
}

function LastPageButton({ onClick }) {
  return (
    <button className="pagination-button first-last" onClick={onClick}>
      Last
    </button>
  );
}

function PrevButton({ onClick }) {
  return (
    <button className="pagination-button prev-next" onClick={onClick}>
      Prev
    </button>
  );
}

function PageButton({ pageNumber, isActive, onClick }) {
  return (
    <button
      className={`pagination-button ${isActive ? "active" : ""}`}
      onClick={onClick}
      disabled={isActive}
    >
      {pageNumber}
    </button>
  );
}

function NextButton({ onClick }) {
  return (
    <button className="pagination-button prev-next" onClick={onClick}>
      Next
    </button>
  );
}

function Pagination({ currentPage, handlePageChange, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      <FirstPageButton onClick={() => handlePageChange(1)} />
      {currentPage > 1 && <PrevButton onClick={() => handlePageChange(currentPage - 1)} />}
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          pageNumber={pageNumber}
          isActive={currentPage === pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        />
      ))}
      {currentPage < totalPages && <NextButton onClick={() => handlePageChange(currentPage + 1)} />}
      <LastPageButton onClick={() => handlePageChange(totalPages)} />
    </div>
  );
}

export default Pagination;