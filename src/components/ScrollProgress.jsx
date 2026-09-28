import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// A thin bar fixed to the top of the screen that fills as the visitor
// scrolls down the page.
export default function ScrollProgress() {
  const barRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Recalculate shortly after a route change, once the new page has laid out.
    const timer = setTimeout(update, 80);
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-brand via-azure to-accent"
      />
    </div>
  );
}
