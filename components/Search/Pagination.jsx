import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PaginationButton from './PaginationButton';

const PaginationNumberSpan = ({ children, active, handleOnClick }) => (
  <>
    {/* eslint-disable-next-line */}
    <span
      className={`mx-s cursor-pointer ${active ? 'font-medium text-copy-main' : 'text-copy-light'}`}
      onClick={handleOnClick}
    >
      {children}
    </span>
  </>
);

const Pagination = ({ resultsMeta, handleOnClick }) => {
  const {
    count,
    countPerPage,
    previousStartIndex,
    currentStartIndex,
    nextStartIndex,
    query,
  } = resultsMeta;
  const [pagination, setPagination] = useState([]);

  // TODO: This function is not so sexy and needs a good refactor as it's difficult working with
  // the pagination provided from the API.
  // It takes the current page number, puts it in an array and the for loop decides if pagenumbers
  // are being generated before and/or after this date, and puts those in that same array - before
  // or after the current page depending on the situation.
  const generatePagination = () => {
    const countPerPageMinimum = countPerPage < 10 ? 10 : countPerPage;

    const generatePageNumber = (startIndex) => Math.ceil(startIndex / countPerPageMinimum);
    const generatePageIndex = (pageNumber) => (
      pageNumber * countPerPageMinimum - (countPerPageMinimum - 1)
    );

    const currentPage = {
      pageNumber:
        generatePageNumber(currentStartIndex) >= 1 ? generatePageNumber(currentStartIndex) : 1,
      startIndex:
        generatePageIndex(generatePageNumber(currentStartIndex)) >= 1
          ? generatePageIndex(generatePageNumber(currentStartIndex))
          : 1,
    };

    const generatedPagination = [currentPage];

    for (let i = 1; i <= 4; i++) {
      const currentPageIndex = generatedPagination
        .map(({ pageNumber }) => pageNumber)
        .indexOf(currentPage.pageNumber);

      const iOffset = i - currentPageIndex;

      if (currentPage.pageNumber - i >= 1 && currentPageIndex <= 1) {
        generatedPagination.unshift({
          pageNumber: currentPage.pageNumber - i,
          startIndex: generatePageIndex(currentPage.pageNumber - i),
        });
      } else if (currentPage.pageNumber + iOffset <= Math.ceil(count / countPerPageMinimum)) {
        generatedPagination.push({
          pageNumber: currentPage.pageNumber + iOffset,
          startIndex: generatePageIndex(currentPage.pageNumber + iOffset),
        });
      }
    }

    setPagination(generatedPagination);
  };

  useEffect(() => generatePagination(), [resultsMeta]);

  if (pagination.length) {
    return (
      <div className="relative z-10 w-full bg-white shadow-0-0-16-black-15">
        <div className="o-wrapper max-w-4xl w-full flex py-m max-md:justify-center">
          <PaginationButton
            enabled={!!previousStartIndex}
            handleOnClick={() => handleOnClick(query, previousStartIndex)}
          />

          <div className="md:flex-1 flex justify-center items-center">
            <div className="flex-1 text-right text-copy-light">
              {pagination[0].pageNumber >= 2 && (
                <>
                  <PaginationNumberSpan handleOnClick={() => handleOnClick(query, 1)}>
                    1
                  </PaginationNumberSpan>
                </>
              )}
            </div>

            <ul className="flex">
              {pagination.map(({ pageNumber, startIndex }, index, paginationArr) => (
                <li key={pageNumber}>
                  {paginationArr?.[2]?.pageNumber >= 4 && index === 0 ? (
                    <span className="text-copy-light">&hellip;</span>
                  ) : (
                    <PaginationNumberSpan
                      active={startIndex === currentStartIndex}
                      handleOnClick={() => handleOnClick(query, startIndex)}
                    >
                      {pageNumber}
                    </PaginationNumberSpan>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex-1 mr-s">
              {pagination[pagination.length - 1].pageNumber * 10 < count && (
                <span className="text-copy-light">&hellip;</span>
              )}
            </div>
          </div>

          <PaginationButton
            enabled={!!nextStartIndex}
            handleOnClick={() => handleOnClick(query, nextStartIndex)}
            right
          />
        </div>
      </div>
    );
  }

  return null;
};

export default memo(Pagination);

Pagination.propTypes = {
  resultsMeta: PropTypes.shape({
    query: PropTypes.string,
    count: PropTypes.number,
    countPerPage: PropTypes.number,
    previousStartIndex: PropTypes.number,
    currentStartIndex: PropTypes.number,
    nextStartIndex: PropTypes.number,
  }).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

PaginationNumberSpan.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  handleOnClick: PropTypes.func.isRequired,
};

PaginationNumberSpan.defaultProps = {
  active: false,
};
