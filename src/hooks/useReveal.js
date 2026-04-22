import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref container.
 * Any child element with the class "reveal" gets the class "revealed"
 * once it enters the viewport, triggering the CSS transition.
 *
 * Usage:
 *   const sectionRef = useReveal();
 *   <section ref={sectionRef}>
 *     <h2 className="reveal">...</h2>
 *     <p  className="reveal delay-200">...</p>
 *   </section>
 */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
