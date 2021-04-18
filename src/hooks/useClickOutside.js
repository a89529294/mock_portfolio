import { useEffect, useRef } from 'react';

export default function useClickOutside(eleRef, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e) => {
      !eleRef?.current?.contains(e.target) && callbackRef.current();
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callbackRef, eleRef]);
}
