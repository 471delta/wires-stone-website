import { Sparkles, Hand, Mail } from "lucide-react"
import { MineralCluster, GemPoint, WireWrap, AtelierMark } from "./MineralArt"

const SPECIMENS = [
  { no: "I", title: "Raw Crystals", copy: "Authentic natural mineral points", icon: Sparkles, art: GemPoint },
  { no: "II", title: "Custom Wraps", copy: "Hand-manipulated wire weaving", icon: Hand, art: WireWrap },
  { no: "III", title: "Private Request", copy: "Arranged by direct email", icon: Mail, art: AtelierMark },
]

export default function Craft() {
  return (
    <section className="section craft" id="craft">
      <div className="wrap">
        <div className="section__head reveal">
          <div>
            <span className="eyebrow">The Craft</span>
            <h2 className="section__title">Handcrafted Precision</h2>
          </div>
          <span className="section__no">Nº 002 — ATELIER RECORD</span>
        </div>

        <div className="craft__grid">
          <article className="craft__panel reveal">
            <div className="craft__panel-top">
              <span className="eyebrow">History</span>
              <span className="bignum">21</span>
            </div>
            <MineralCluster className="craft__panel-mineral" />
            <div>
              <h3>Based in Alberta, Canada</h3>
              <span className="sub">Established 2021</span>
            </div>
          </article>

          <div className="craft__content reveal" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <p className="craft__lede">
              Founded in 2021, Wires &amp; Stone was created to connect <em>raw mineral beauty</em> with intricate wire
              wrapping.
            </p>

            <div className="craft__meta-row">
              <span className="craft__chip">
                <Sparkles size={13} strokeWidth={1.6} />
                Established 2021
              </span>
              <span className="craft__chip">
                <Hand size={13} strokeWidth={1.6} />
                Handcrafted Precision
              </span>
            </div>

            <div className="craft__body">
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--antique-rose)" }}>
                Here&apos;s Some Information:
              </p>
              <p>
                At Wires &amp; Stone, each piece begins with hand-selected raw crystals. Through delicate wire wrapping,
                and precise cold tension techniques, every design highlights the natural beauty of the stone(s), and
                gem(s) chosen, for your own beautiful piece.
              </p>
              <p>
                Specific metallic wire selections, chain styles, and custom gem requests are tailored entirely by
                private arrangement. Reach out directly to discuss bespoke commissions or special stone wraps.
              </p>
            </div>
          </div>
        </div>

        <div className="specimens">
          {SPECIMENS.map(({ no, title, copy, icon: Icon, art: Art }, i) => (
            <article
              key={title}
              className="specimen reveal"
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="specimen__head">
                <span className="specimen__no">SPECIMEN — {no}</span>
                <span className="specimen__icon">
                  <Icon size={16} strokeWidth={1.5} />
                </span>
              </div>
              <div className="specimen__art">
                <Art style={{ height: "88px", width: "auto" }} />
              </div>
              <h4>{title}</h4>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
