import React from 'react';
import "./Pagination.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li onClick={(e) => {
            paginate(number);
            e.preventDefault();
          }} key={number} className='page-item'>
            <a href="!#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
 
