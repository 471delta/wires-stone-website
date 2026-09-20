import { Instagram, ArrowUpRight } from "lucide-react"
import { QuartzSpecimen, GemPoint, WireWrap } from "./MineralArt"

const IG = "https://instagram.com/wiresandstone"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__lead">
            <div className="hero__index reveal">MINERAL ATELIER — FILE Nº 001</div>

            <h1 className="hero__title reveal" style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Be elegant, <em>feel</em> elegant.
            </h1>

            <p className="hero__script reveal" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              Connect with the wires, and walk with the stones.
            </p>

            <p className="hero__body reveal" style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
              Bespoke, handcrafted mineral wire art by Wires &amp; Stone. Hand-wrapped around natural raw crystals and
              unheated gems. Tailored by private arrangement.
            </p>

            <div className="hero__actions reveal" style={{ "--reveal-delay": "320ms" } as React.CSSProperties}>
              <a href={IG} target="_blank" rel="noreferrer" className="btn">
                <Instagram size={15} strokeWidth={1.6} />
                VISIT @WIRESANDSTONE
              </a>
              <a href="#inquiry" className="btn btn--ghost">
                PRIVATE COMMISSION
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </a>
            </div>

            <WireWrap className="hero__float hero__float--2" aria-hidden="true" />
          </div>

          <div className="arch reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            <GemPoint className="hero__float hero__float--1" aria-hidden="true" />
            <div className="arch__frame">
              <span className="corner bl" aria-hidden="true" />
              <span className="corner br" aria-hidden="true" />
              <div className="arch__mineral">
                <QuartzSpecimen />
              </div>
              <div className="arch__caption">
                <span className="k">Wires &amp; Stone</span>
                <span className="l">Raw Mineral Art</span>
                <p className="d">
                  Artisan hand-woven wire wrapping around natural gemstones and raw mineral points.
                </p>
                <span className="m">Alberta, Canada • Est. 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
