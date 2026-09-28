import { useEffect, useRef, useState } from "react";

// Fires once when the element first scrolls into view, then disconnects.
// Used to trigger reveal animations without re-triggering on every scroll
// up/down, which would feel jittery rather than intentional.
export default function useInView({ threshold = 0.2, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Respect reduced-motion users by simply showing content immediately.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView];
}
