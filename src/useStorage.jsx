import { useState, useEffect } from 'react';

const useStorage = (key) => {

  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key) || localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : '';
  });


  useEffect(() => {
    if (value) {
      sessionStorage.setItem(key, JSON.stringify(value));
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
