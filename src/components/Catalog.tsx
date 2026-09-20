import { Instagram } from "lucide-react"
import { MineralCluster, ArchiveRing } from "./MineralArt"

const IG = "https://instagram.com/wiresandstone"

export default function Catalog() {
  return (
    <section className="section catalog" id="catalog">
      <div className="wrap">
        <div className="catalog__intro reveal">
          <div className="catalog__script">Digital Catalog</div>
          <h2 className="catalog__title">Gallery Status</h2>
        </div>

        <div className="catalog__panel reveal" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <span className="catalog__filed-l">ARCHIVE — Nº 003</span>
          <span className="catalog__filed">CATALOGUING IN PROGRESS</span>

          <MineralCluster className="catalog__specimen" />

          <div className="status-mark">
            <ArchiveRing className="status-mark__ring" />
            <div className="status-mark__core">
              <MineralCluster style={{ width: "52px", height: "auto" }} />
            </div>
          </div>

          <div className="catalog__status-label">
            <span className="tick" aria-hidden="true" />
            GALLERY UNDER CONSTRUCTION
          </div>
          <div className="catalog__wip">Work in Progress</div>

          <p className="catalog__copy">
            The web catalog is currently under construction, while I navigate production of the website. All custom
            requests and available inventory are managed by private arrangement.
          </p>
          <p className="catalog__copy">
            To view my beautiful pieces, crystal wraps, and past work, please visit my official Instagram account
            directly at @wiresandstone.
          </p>

          <a href={IG} target="_blank" rel="noreferrer" className="btn btn--gold">
            <Instagram size={15} strokeWidth={1.6} />
            VISIT INSTAGRAM @WIRESANDSTONE
          </a>
        </div>
      </div>
    </section>
  )
}
