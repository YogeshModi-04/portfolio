import { useEffect, useRef } from "react";

// Attaches an IntersectionObserver to every [data-reveal] element inside
// the returned ref's subtree, adding "is-visible" once it enters the
// viewport. Runs once on mount; safe if elements are static.
export function useReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const targets = root.matches("[data-reveal]")
      ? [root, ...root.querySelectorAll("[data-reveal]")]
      : Array.from(root.querySelectorAll("[data-reveal]"));

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
