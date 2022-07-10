/* eslint-disable no-console */
import { useState } from 'react';

const useModal = () => {
  const [show, setShow] = useState(false);

  function toggleVisibility() {
    setShow(!show);
    document.body.classList.toggle('has-modal');
  }
  return {
    show,
    toggleVisibility,
  };
};
export default useModal;