import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ showSearchModal, isNavigating, setShowSearchModal }) => (
  <div
    role="button"
    className={`absolute z-20 top-0 right-0 h-xxl w-xxl p-sm cursor-pointer transition-spacing duration-75 ease-in ${
      isNavigating ? 'md:top-sm md:right-sm' : ''
    }`}
    onClick={() => setShowSearchModal(!showSearchModal)}
    onKeyPress={() => setShowSearchModal(!showSearchModal)}
    tabIndex={0}
  >
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-copy-main hover:text-brand-aqua fill-current transition-colors duration-150"
    >
      <polygon points="19.778 5.636 18.364 4.222 12 10.586 5.636 4.222 4.222 5.636 10.586 12 4.222 18.364 5.636 19.778 12 13.414 18.364 19.778 19.778 18.364 13.414 12 19.778 5.636" />
    </svg>
  </div>
);

export default memo(CloseButton);

CloseButton.propTypes = {
  showSearchModal: PropTypes.bool.isRequired,
  isNavigating: PropTypes.bool.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
};
