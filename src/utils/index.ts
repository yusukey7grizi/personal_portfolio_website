import { RefObject, useEffect, useState } from 'react';

export const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!!window) {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};

export const executeScroll = (ref: RefObject<HTMLDivElement> | null) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
