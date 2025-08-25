import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollTo = useCallback((targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleSmoothScroll = useCallback(
    (e, targetId) => {
      e.preventDefault();
      scrollTo(targetId);
    },
    [scrollTo]
  );

  return { scrollTo, handleSmoothScroll };
};
