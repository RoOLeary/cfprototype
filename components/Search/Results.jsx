import React, { forwardRef, Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import SearchItem from './SearchItem';

const Results = forwardRef(
  (
    {
      results, noResults, resultsMeta, isLoading, isNavigating,
    },
    { resultsListElement, resultsListContainer },
  ) => (
    <div
      className={`overflow-y-scroll flex-1 transition-opacity duration-300 ease-out opacity-0 ${
        results.length || noResults ? 'opacity-100' : ''
      }`}
      ref={resultsListElement}
    >
      <div className="o-wrapper max-w-4xl">
        {noResults && (
          <h1 className="my-xl text-center lg:mt-xxl lg:mb-4xl">
            Sorry, couldn&apos;t find anything!
          </h1>
        )}

        {!!results.length && (
          <div
            className={`transition-opacity ease-in-out duration-200 ${
              isLoading ? 'opacity-50' : ''
            }`}
            ref={resultsListContainer}
          >
            {resultsMeta.currentStartIndex === 1 && (
              <h1
                className={`my-xl text-center transition-spacing ease-in-out duration-200 lg:mt-xxl lg:mb-4xl ${
                  isNavigating ? 'lg:mt-4xl' : ''
                }`}
              >
                {resultsMeta.countFormatted}
                {' '}
                result
                {results.length !== 1 && 's'}
                {' '}
                for &quot;
                {resultsMeta.query}
                &quot;
              </h1>
            )}

            <ul className="flex-1 overflow-y-scroll">
              {results.map(
                (
                  {
                    id, title, linkArticle, snippet, thumbnail, tags, author, publishDate,
                  },
                  index,
                ) => (
                  <Fragment key={id ?? title}>
                    {index === 0 && resultsMeta.currentStartIndex !== 1 && (
                      <div className="min-h-xl" />
                    )}
                    <SearchItem
                      title={title}
                      linkArticle={linkArticle}
                      snippet={snippet}
                      thumbnail={thumbnail}
                      tags={tags}
                      author={author}
                      publishDate={publishDate}
                    />
                  </Fragment>
                ),
              )}

              {/* Keep this empty div here to ensure bottom padding of last result */}
              <div />
            </ul>
          </div>
        )}
      </div>
    </div>
  ),
);

export default memo(Results);

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      linkArticle: PropTypes.string,
      snippet: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      publishDate: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  noResults: PropTypes.bool.isRequired,
  resultsMeta: PropTypes.shape({
    query: PropTypes.string,
    countFormatted: PropTypes.string,
    currentStartIndex: PropTypes.number,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isNavigating: PropTypes.bool.isRequired,
};
