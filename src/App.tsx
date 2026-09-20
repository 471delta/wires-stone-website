import { useReveal } from "./hooks/useReveal"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Craft from "./components/Craft"
import Catalog from "./components/Catalog"
import Inquiry from "./components/Inquiry"
import Footer from "./components/Footer"

const EMAIL = "wiresandstone@gmail.com"

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Header />

      <div className="meta-strip">
        <span>
          <span className="dot" aria-hidden="true" />
          ALBERTA, CANADA • EST. 2021
        </span>
        <span className="designer">
          DESIGNER -{" "}
          <a href="https://jaeden.pages.dev" target="_blank" rel="noreferrer">
            HTTPS://JAEDEN.PAGES.DEV
          </a>
        </span>
      </div>

      <main className="shell">
        <Hero />
        <hr className="rule" />
        <Craft />
        <hr className="rule" />
        <Catalog />
        <Inquiry />
      </main>

      <Footer />

      <a href={`mailto:${EMAIL}`} hidden aria-hidden="true" tabIndex={-1}>
        {EMAIL}
      </a>
    </>
  )
}
