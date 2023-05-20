import React from 'react';

export function useLocalStorage (keyLike, initialValue) {
  const [storedValue, setValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(keyLike);
      return item != null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(keyLike, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
}
