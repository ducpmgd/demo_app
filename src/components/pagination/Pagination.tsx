import React from "react";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

export default function Pagination(props: IPaginationProps) {
  const { totalPages, setCurrentPage, currentPage } = props;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPage: () => JSX.Element | undefined = () => {
    if (totalPages) {
      let arrPage = [];
      for (let index = 1; index <= totalPages; index++) {
        arrPage.push(
          <button
            key={index}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage === index ? "text-red-700 font-extrabold" : ""
            } `}
            onClick={() => setCurrentPage(index)}
          >
            {index}
          </button>
        );
      }
      return <>{arrPage.map((item) => item)}</>;
    }
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={handlePreviousPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages ? true : false}
          onClick={handleNextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 1 ? true : false}
              onClick={handlePreviousPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className=" text-gray-700">Previous</span>
            </button>
            {renderPage()}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages ? true : false}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="text-gray-700">Next</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
