import { RefObject, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) => {
  function onClickOutside(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [callback]);

  return ref;
};
