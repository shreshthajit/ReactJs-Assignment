import React from "react";
import { useState } from "react";
import "/home/shreshthajit/React_part2/my-app/src/component/Pagination.css";
///we are destructure the props into several variable
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  handlePrevbtn,
  handleNextbtn,
  maxPageNumberLimit,
  minPageNumberLimit,
}) => {
  const pageNumbers = [];
  // const [recentPage, setrecentPage] = useState(currentPage)

  // console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pageNumbers justify-content-center">
        <li>
          <button
            onClick={handlePrevbtn}
            // disabled={currentPage === pageNumbers[0] ? true : false}
          >
            <a href="!#" className="page-link">
              <h6>prev</h6>
            </a>
            {/* <h4>Prev</h4> */}
          </button>
        </li>

        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                aria-current="page"
                className={currentPage === number ? "active" : null}
              >
                <a href="!#" className="page-link">
                  {number}
                </a>
                {/* <h4 className="px-2">{number}</h4> */}
              </li>
            );
          } else {
            return null;
          }
        })}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
          >
           <a href="!#" className="page-link">
              <h6>Next</h6>
            </a>
           </button>
        </li>
        
      </ul>
    </nav>
  );
};

export default Pagination;
