import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Artwork } from '@/data/character'

export default function Lightbox({
  art,
  onClose,
}: {
  art: Artwork | null
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!art) return null
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#54453f]/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <figure
        className="doll-card relative max-h-[86vh] w-full max-w-2xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="window-bar">
          <span className="window-dot bg-[#f78fb8]" />
          <span className="window-dot bg-[#baaad7]" />
          <span className="window-dot bg-[#c9e7b5]" />
          <span className="ml-2 text-sm font-semibold text-[#54453f]">{art.title}</span>
          <button
            onClick={onClose}
            className="ml-auto rounded-full border-2 border-[#54453f] bg-white p-1 transition-transform hover:rotate-90"
            aria-label="ปิด"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <img
          src={art.src}
          alt={art.title}
          className="max-h-[64vh] w-full object-contain bg-[#fff9fb]"
        />
        <figcaption className="border-t-2 border-dashed border-[#ffd3e0] px-5 py-3 text-sm text-[#54453f]">
          {art.caption}
        </figcaption>
      </figure>
    </div>
  )
}
