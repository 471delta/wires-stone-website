import { useState, useRef } from "react"
import { Mail, Copy, Check } from "lucide-react"
import { QuartzSpecimen, AtelierMark } from "./MineralArt"

const EMAIL = "wiresandstone@gmail.com"

export default function Inquiry() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const ta = document.createElement("textarea")
        ta.value = EMAIL
        ta.style.position = "fixed"
        ta.style.opacity = "0"
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
      }
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section inquiry" id="inquiry">
      <QuartzSpecimen className="inquiry__mineral" aria-hidden="true" />
      <div className="wrap">
        <div className="inquiry__grid">
          <div className="inquiry__intro reveal">
            <span className="eyebrow">Inquiries</span>
            <div className="inquiry__script">Private Arrangement</div>
          </div>

          <div className="inquiry__card reveal" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <AtelierMark className="inquiry__envelope" style={{ width: "58px", height: "58px" }} />
            <p>
              For custom raw stone wraps, commission details, or private inquiries, please reach out directly via email.
            </p>

            <div className="inquiry__actions">
              <a href={`mailto:${EMAIL}`} className="btn">
                <Mail size={15} strokeWidth={1.6} />
                OPEN E-MAIL SERVICE
              </a>
              <button type="button" className="btn btn--gold" onClick={copyEmail} aria-live="polite">
                {copied ? <Check size={15} strokeWidth={1.8} /> : <Copy size={15} strokeWidth={1.6} />}
                COPY EMAIL ADDRESS
              </button>
            </div>

            <div className="inquiry__email">
              Direct Email: <span>{EMAIL}</span>
              <span className={`copy-flash${copied ? " is-on" : ""}`}>Copied</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
