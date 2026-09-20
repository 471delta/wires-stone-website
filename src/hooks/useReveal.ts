import { useEffect } from "react"

/**
 * Adds `is-in` to every `.reveal` element as it scrolls into view.
 * Respects prefers-reduced-motion by revealing everything immediately.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
