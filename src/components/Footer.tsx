import { ShieldCheck, BadgeCheck, Instagram, Mail } from "lucide-react"

const IG = "https://instagram.com/wiresandstone"
const EMAIL = "wiresandstone@gmail.com"

const PLAQUES = [
  {
    tag: "[ LEAD ARCHITECT & DEVELOPER ]",
    no: "01",
    seal: "VERIFIED DESIGNER",
    icon: BadgeCheck,
    title: "SYSTEM ARCHITECT & LEAD ENGINEER",
    by: "DESIGNED AND CODED BY MR. JAEDEN VALLÉE",
    rows: [
      ["DESIGN SYSTEM", "ACTIVE"],
      ["BUILD", "VERIFIED"],
    ],
  },
  {
    tag: "[ CYBERSECURITY SERVICES ]",
    no: "02",
    seal: "GUARANTEED SAFETY",
    icon: ShieldCheck,
    title: "SECURITY INFRASTRUCTURE & PROTOCOL",
    by: "SECURED BY VALLÉE CYBER-DEFENCE",
    rows: [
      ["PROTOCOL", "ENFORCED"],
      ["STATUS", "SECURE"],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__crown reveal">
          <span className="brand__name">
            Wires &amp; <b>STONE</b>
          </span>
          <span className="eyebrow">Alberta, Canada • Est. 2021</span>
        </div>

        <div className="plaques">
          {PLAQUES.map(({ tag, no, seal, icon: Icon, title, by, rows }, i) => (
            <section
              key={no}
              className="plaque reveal"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              aria-label={tag}
            >
              <span className="plaque__corner tl" aria-hidden="true" />
              <span className="plaque__corner tr" aria-hidden="true" />
              <span className="plaque__corner bl" aria-hidden="true" />
              <span className="plaque__corner br" aria-hidden="true" />

              <div className="plaque__head">
                <span className="plaque__tag">{tag}</span>
                <span className="plaque__no">{no}</span>
              </div>

              <div className="plaque__seal">
                <span className="plaque__seal-icon">
                  <Icon size={24} strokeWidth={1.4} />
                </span>
                <span className="plaque__seal-txt">{seal}</span>
              </div>

              <h3>{title}</h3>
              <p className="plaque__by">{by}</p>

              <div className="plaque__meta">
                {rows.map(([k, v]) => (
                  <div key={k} className="plaque__meta-row">
                    <span>{k} /</span>
                    <b>{v}</b>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="footer__base">
          <p>© 2026 Wires &amp; Stone. All Rights Reserved.</p>
          <div className="footer__links">
            <a href={IG} target="_blank" rel="noreferrer">
              <Instagram size={13} strokeWidth={1.5} />
              @wiresandstone
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={13} strokeWidth={1.5} />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
