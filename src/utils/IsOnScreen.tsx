"client";

import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visibilityLocked, setVisibilityLocked] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      return new IntersectionObserver(([entry]) => {
        if (!visibilityLocked) {
          setIsIntersecting(entry.isIntersecting);
        }
        if (entry.isIntersecting && !visibilityLocked) {
          setVisibilityLocked(true);
        }
      });
    }
    return null;
  }, [ref, visibilityLocked]);

  useEffect(() => {
    if (ref?.current && !visibilityLocked && observer) {
      observer.observe(ref.current);
    }
    return () => (observer && observer.disconnect()) || undefined;
  }, [ref, observer, visibilityLocked]);

  return { isIntersecting, visibilityLocked };
}
