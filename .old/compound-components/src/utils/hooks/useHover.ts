import { RefObject, useEffect, useState } from "react";

export const useHover = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const element = ref.current;

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref]);

  return isHovering;
};
