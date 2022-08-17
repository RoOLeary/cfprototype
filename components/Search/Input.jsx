import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  searchQuery,
  searchSuccessful,
  isNavigating,
  isLoading,
  handleInputChange,
  handleRemoveTextClick,
}, ref) => (
  <div
    className={`relative z-10 w-full transition ease-in-out duration-500 bg-white bg-opacity-0 shadow-0-0-16-black-0 ${
      isNavigating ? 'shadow-0-0-16-black-15 bg-opacity-100' : ''
    }`}
  >
    <div
      className={`o-wrapper max-w-lg transition-all ease-in-out duration-300 mb-sm mt-xxl md:mt-sm transform md:scale-100 ${
        isNavigating ? '' : 'mt-5xl md:mt-7xl'
      } ${searchSuccessful ? '' : 'md:scale-150 translate-y-3xl'}`}
    >
      <input
        type="text"
        ref={ref}
        className={`c-input ${
          !searchSuccessful ? 'rounded-none border-t-0 border-l-0 border-r-0' : ''
        }`}
        style={{ paddingLeft: '2.5rem' }}
        onChange={handleInputChange}
        placeholder="Enter your search term"
      />

      <div className="absolute top-0 left-l md:left-3xl lg:left-xl h-xxl w-xxl p-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="text-copy-main fill-current"
        >
          <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5S5.91,16,9.5,16  c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5  S11.99,14,9.5,14z" />
        </svg>
      </div>

      {/* eslint-disable-next-line */}
      <div
        role="button"
        className={`absolute top-0 right-l md:right-3xl lg:right-xl h-xxl w-xxl p-sm ${
          searchQuery.length ? 'cursor-pointer' : 'cursor-text'
        }`}
        onClick={handleRemoveTextClick}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`fill-current transition duration-150 ${
            searchQuery.length ? 'text-copy-main hover:text-brand-aqua opacity-100' : 'opacity-0'
          } `}
        >
          <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M17,15.6L15.6,17L12,13.4L8.4,17L7,15.6  l3.6-3.6L7,8.4L8.4,7l3.6,3.6L15.6,7L17,8.4L13.4,12L17,15.6z" />
        </svg>
      </div>

      <div
        className={`absolute top-xs md:top-0 -right-s md:right-m lg:-right-m w-l md:w-xl h-l md:h-xl m-s p-xs transition-opacity opacity-0 duration-75 ${
          isLoading ? 'opacity-100' : ''
        }`}
      >
        {isLoading && (
          <svg
            className="animate-spin text-copy-light"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
      </div>
    </div>
  </div>
));

export default Input;

Input.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchSuccessful: PropTypes.bool.isRequired,
  isNavigating: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleRemoveTextClick: PropTypes.func.isRequired,
};
