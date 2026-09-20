interface ArtProps {
  className?: string
  style?: React.CSSProperties
}

/* Large faceted quartz specimen point — hero centerpiece */
export function QuartzSpecimen({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="260"
      height="330"
      viewBox="0 0 260 330"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="qz" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* main crystal body */}
      <path d="M92 322 L92 128 L130 40 L168 128 L168 322 Z" fill="url(#qz)" />
      {/* termination */}
      <path d="M92 128 L130 40 L168 128 Z" fill="url(#qz)" />
      <path d="M130 40 L130 322" strokeOpacity="0.5" />
      <path d="M92 128 L130 90 L168 128" strokeOpacity="0.6" />
      <path d="M130 40 L112 128 M130 40 L148 128" strokeOpacity="0.45" />
      {/* left companion crystal */}
      <path d="M44 322 L44 176 L70 108 L92 176 L92 322 Z" fill="url(#qz)" />
      <path d="M70 108 L70 322" strokeOpacity="0.4" />
      <path d="M44 176 L70 150 L92 176" strokeOpacity="0.5" />
      {/* right companion crystal */}
      <path d="M168 322 L168 196 L198 120 L224 196 L224 322 Z" fill="url(#qz)" />
      <path d="M198 120 L198 322" strokeOpacity="0.4" />
      <path d="M168 196 L198 168 L224 196" strokeOpacity="0.5" />
      {/* base line */}
      <path d="M30 322 L236 322" strokeOpacity="0.3" />
    </svg>
  )
}

/* Single elegant gem — briolette / raw point */
export function GemPoint({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="120"
      height="150"
      viewBox="0 0 120 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M60 6 L104 54 L60 144 L16 54 Z" fill="currentColor" fillOpacity="0.06" />
      <path d="M16 54 L104 54" strokeOpacity="0.55" />
      <path d="M60 6 L60 144" strokeOpacity="0.4" />
      <path d="M16 54 L60 6 L104 54" strokeOpacity="0.7" />
      <path d="M38 54 L60 24 L82 54" strokeOpacity="0.4" />
      <path d="M16 54 L60 88 L104 54" strokeOpacity="0.35" />
    </svg>
  )
}

/* Rough mineral cluster — for panels */
export function MineralCluster({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="180"
      height="150"
      viewBox="0 0 180 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 146 L20 74 L40 34 L60 74 L60 146 Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M40 34 L40 146" strokeOpacity="0.4" />
      <path d="M20 74 L40 56 L60 74" strokeOpacity="0.5" />
      <path d="M60 146 L60 50 L88 12 L116 50 L116 146 Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M88 12 L88 146" strokeOpacity="0.45" />
      <path d="M60 50 L88 30 L116 50" strokeOpacity="0.55" />
      <path d="M116 146 L116 88 L140 52 L160 88 L160 146 Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M140 52 L140 146" strokeOpacity="0.4" />
      <path d="M116 88 L140 70 L160 88" strokeOpacity="0.5" />
      <path d="M6 146 L174 146" strokeOpacity="0.3" />
    </svg>
  )
}

/* Wire-wrap ornamental loop — represents the craft */
export function WireWrap({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="110"
      height="130"
      viewBox="0 0 110 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* bail */}
      <path d="M55 6 C40 6 40 26 55 26 C70 26 70 6 55 6 Z" strokeOpacity="0.8" />
      {/* stone */}
      <path d="M55 34 L84 70 L55 120 L26 70 Z" fill="currentColor" fillOpacity="0.06" />
      {/* wrapping wires */}
      <path d="M40 46 C30 60 30 84 44 100" strokeOpacity="0.7" />
      <path d="M70 46 C80 60 80 84 66 100" strokeOpacity="0.7" />
      <path d="M34 62 C48 56 62 56 76 62" strokeOpacity="0.5" />
      <path d="M32 82 C48 90 62 90 78 82" strokeOpacity="0.5" />
      <path d="M55 34 C48 54 48 92 55 120" strokeOpacity="0.35" />
    </svg>
  )
}

/* Envelope / correspondence seal — inquiry */
export function AtelierMark({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="75" cy="75" r="70" strokeOpacity="0.35" />
      <circle cx="75" cy="75" r="58" strokeOpacity="0.2" strokeDasharray="2 6" />
      <path d="M75 30 L100 70 L75 120 L50 70 Z" fill="currentColor" fillOpacity="0.06" strokeOpacity="0.7" />
      <path d="M50 70 L100 70" strokeOpacity="0.5" />
      <path d="M75 30 L75 120" strokeOpacity="0.4" />
      <path d="M62 70 L75 50 L88 70" strokeOpacity="0.4" />
    </svg>
  )
}

/* Rotating archival ring for catalog status */
export function ArchiveRing({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="75" cy="75" r="72" strokeOpacity="0.4" strokeDasharray="1 9" />
      <circle cx="75" cy="75" r="60" strokeOpacity="0.5" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2
        const x1 = 75 + Math.cos(a) * 60
        const y1 = 75 + Math.sin(a) * 60
        const x2 = 75 + Math.cos(a) * 68
        const y2 = 75 + Math.sin(a) * 68
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.55" />
      })}
    </svg>
  )
}
