// DEPENDENCIES
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [arrCharacters, setArrCharacters] = useState(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return [...initialValue];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(arrCharacters));
  }, [key, arrCharacters]);

  return [arrCharacters, (newValue) => setArrCharacters(newValue)];
};
