import type { ReactNode } from 'react'

/** y2k window-chrome frame: pink title bar with three dots. */
export function WindowFrame({
  title,
  icon,
  lavender = false,
  className = '',
  children,
}: {
  title: string
  icon?: ReactNode
  lavender?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <section className={`doll-card ${lavender ? 'doll-card-lav' : ''} overflow-hidden ${className}`}>
      <div className={`window-bar ${lavender ? 'window-bar-lav' : ''}`}>
        <span className="window-dot bg-[#f78fb8]" />
        <span className="window-dot bg-[#baaad7]" />
        <span className="window-dot bg-[#c9e7b5]" />
        <span className="ml-2 flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#54453f]">
          {icon}
          {title}
        </span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </section>
  )
}

/** Rotating sticker badge */
export function Sticker({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border-2 border-[#54453f] bg-white px-3 py-1 text-xs font-bold shadow-[2px_2px_0_0_#54453f] ${className}`}
    >
      {text}
    </span>
  )
}

/** Marquee ribbon */
export function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee-wrap overflow-hidden border-y-2 border-[#54453f] bg-[#ffd3e0] py-2 ${className}`}>
      <div className="anim-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-bold tracking-widest text-[#54453f]">
            {it}
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path
                d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
                fill="#e86ca4"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}

/** Section heading with hand-written accent */
export function SectionTitle({
  hand,
  title,
  className = '',
}: {
  hand: string
  title: string
  className?: string
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="font-hand absolute -top-7 left-1 rotate-[-6deg] text-2xl text-[#e86ca4] md:text-3xl">
        {hand}
      </span>
      <h2 className="text-2xl font-bold text-[#54453f] md:text-4xl">{title}</h2>
      <svg viewBox="0 0 200 12" className="mt-1 h-3 w-40 md:w-56">
        <path
          d="M2 8 Q 30 2 60 7 T 120 7 T 198 6"
          fill="none"
          stroke="#f78fb8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

/** Sparkle svg */
export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
        fill="currentColor"
      />
    </svg>
  )
}
