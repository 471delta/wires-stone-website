import { useEffect, useState } from "react"
import { Home, Gem, Archive, Mail, Menu, X, ArrowUpRight } from "lucide-react"

const NAV = [
  { label: "HOME", href: "#home", icon: Home },
  { label: "THE CRAFT", href: "#craft", icon: Gem },
  { label: "CATALOG STATUS", href: "#catalog", icon: Archive },
  { label: "PRIVATE INQUIRY", href: "#inquiry", icon: Mail },
]

const EMAIL = "wiresandstone@gmail.com"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header__bar">
          <a href="#home" className="brand" aria-label="Wires & Stone — home">
            <svg className="brand__mark" width="26" height="30" viewBox="0 0 26 30" fill="none" aria-hidden="true">
              <path d="M13 1 L24 9 L20 28 L6 28 L2 9 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M2 9 L24 9 M13 1 L13 28 M8 9 L13 3 L18 9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
            </svg>
            <span className="brand__name">
              Wires &amp; <b>STONE</b>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="nav__link">
                <Icon size={13} strokeWidth={1.5} />
                {label}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="nav__link nav__link--email">
              <Mail size={13} strokeWidth={1.5} />
              DIRECT EMAIL
            </a>
          </nav>

          <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <div className="mobile-menu__panel">
          <div className="mobile-menu__top">
            <span className="brand__name" style={{ fontSize: "1.1rem" }}>
              Wires &amp; <b>STONE</b>
            </span>
            <button className="mobile-menu__close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mobile-menu__list" aria-label="Mobile">
            {NAV.map(({ label, href }, i) => (
              <a key={label} href={href} className="mobile-menu__link" onClick={() => setOpen(false)}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="mobile-menu__link" onClick={() => setOpen(false)}>
              <span className="idx">→</span>
              DIRECT EMAIL
              <ArrowUpRight size={20} strokeWidth={1.3} style={{ marginLeft: "auto" }} />
            </a>
          </nav>

          <div className="mobile-menu__meta">
            <div>ALBERTA, CANADA • EST. 2021</div>
            <div>{EMAIL}</div>
          </div>
        </div>
      </div>
    </>
  )
}
