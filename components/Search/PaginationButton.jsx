import React, { memo } from 'react';
import PropTypes from 'prop-types';

const PaginationButton = memo(({ right, enabled, handleOnClick }) => (
  <>
    {/* eslint-disable-next-line */}
    <div
      className={`border border-solid border-border-main rounded-full ${
        right ? 'transform rotate-180' : ''
      } ${enabled ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      style={{ width: '2.5rem', minHeight: '2.5rem' }}
      onClick={enabled ? handleOnClick : null}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`fill-current ${enabled ? 'text-copy-main' : 'text-copy-light'}`}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M13.05995,16.00004l0.94-0.94l-3.055-3.06l3.055-3.06l-0.94-0.94l-4,4L13.05995,16.00004z"
        />
      </svg>
    </div>
  </>
));

export default memo(PaginationButton);

PaginationButton.propTypes = {
  right: PropTypes.bool,
  enabled: PropTypes.bool,
  handleOnClick: PropTypes.func.isRequired,
};

PaginationButton.defaultProps = {
  right: false,
  enabled: false,
};
