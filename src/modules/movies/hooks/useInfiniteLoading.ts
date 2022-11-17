import { useCallback, useEffect } from "react";
import { useFreshRef } from "./useFreshRef";

type Effect = () => void;

export const useInfiniteLoading = (effect: Effect) => {
  const effectRef = useFreshRef(effect);
  const scrollListener = useCallback(() => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isAtBottom) {
      effectRef.current();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);
};
