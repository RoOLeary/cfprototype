import { useEffect, useRef, useState } from 'react';
const useElementWhenOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFn = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.disconnect(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};
export default useElementWhenOnScreen();