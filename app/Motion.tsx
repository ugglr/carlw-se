"use client";

import { useEffect } from "react";

// Adds `is-in` to [data-reveal] and .shutter elements as they enter the screen.
// Without JavaScript the `js` class never lands on <html>, so nothing is hidden.
export default function Motion() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal], .shutter");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
