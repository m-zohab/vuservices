import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position between page navigations the
// way a traditional multi-page site does — without this, moving from a
// long page (e.g. Projects) to a new page keeps the old scroll offset.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // behavior: "auto" overrides the global smooth-scroll CSS so page
    // changes jump instantly instead of animating the whole way up.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
