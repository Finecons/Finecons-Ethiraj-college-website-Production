import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = window.innerWidth < 900 ? 120 : 160;
          const top =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
          clearInterval(timer);
        } else if (attempts >= 15) {
          clearInterval(timer);
        }
      }, 150);
      return () => clearInterval(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  return null;
}

export default CustomScrollToTop;
