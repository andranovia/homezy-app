import React, { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

type PaginationProps = {
  totalPosts?: number;
  postsPerPage: number;
  onPageChange?: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");
  const totalPages = totalPosts ? Math.ceil(totalPosts / postsPerPage) : 0;

  const handleButtonClick = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      if (onPageChange) {
        onPageChange(pageNumber);
      }
    }
  };

  const getDisplayedPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  return (
    <div className=" pagination__wrapper">
      <button
        className="pagination__button"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img alt="arrow-right" src={"placeholder.svg"} />
      </button>
      {getDisplayedPages()
        .slice(0, isMobile ? 5 : 7)
        .map((page, index) => (
          <button
            key={index}
            style={{
                backgroundColor: currentPage === page ? "#191a23" : "white",
                color: currentPage === page ? "white" : "gray",
            }}
            className={` pagination__list`}
            onClick={() => typeof page === "number" && handleButtonClick(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      <button
        className="pagination__button"
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img alt="arrow-right" src={"placeholder.svg"} />
      </button>
    </div>
  );
};

export default Pagination;
