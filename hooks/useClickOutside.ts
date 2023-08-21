import { useRef, useEffect, RefObject } from "react";
import {} from "react";
import { ReactElement } from "react";

function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return { ref };
}

export { useClickOutside };
