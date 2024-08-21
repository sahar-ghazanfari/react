import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [val, setVal] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}
