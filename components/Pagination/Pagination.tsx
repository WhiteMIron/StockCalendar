import React from 'react';
import './Pagination.css';
// import fillArrow from '../../resources/images/fill-arrow.svg';
// import inverseArrow from '../../resources/images/inverse-arrow.svg';
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: number | any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function minusCurrentIndex(currentPage: number) {
    return new Promise(function (resolve, reject) {
      if (currentPage > 1) {
        const idx = currentPage - 1;
        paginate(idx);
      }
    });
  }

  function plusCurrentIndex(currentPage: number) {
    return new Promise(function (resolve, reject) {
      if (currentPage < pageNumbers.length) {
        const idx = currentPage + 1;
        paginate(idx);
      }
    });
  }

  return (
    <div>
      <nav>
        <ul className="pagination-ul">
          <img
            className="pagination-list-previous"
            // src={fillArrow}
            alt="이전 목록 보기"
            onClick={() => {
              minusCurrentIndex(currentPage);
            }}
            height="2.1vh"
          />
          {pageNumbers.map((number) => (
            <li key={number} className="pagination-item">
              <span
                className={currentPage === number ? 'pagination-color' : ''}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </span>
            </li>
          ))}
          <img
            className="pagination-list-next"
            // src={fillArrow}
            alt="다음 목록 보기"
            onClick={() => {
              plusCurrentIndex(currentPage);
            }}
            height="2.1vh"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
