import { useState } from 'react'
import { Images } from 'lucide-react'
import { Sparkle, Sticker } from '@/components/Chrome'
import Lightbox from '@/components/Lightbox'
import { artworks, profile } from '@/data/character'
import type { Artwork } from '@/data/character'

export default function Gallery() {
  const [picked, setPicked] = useState<Artwork | null>(null)

  return (
    <div className="bg-polka min-h-screen pb-24">
      <div className="relative border-b-2 border-[#ffd3e0] bg-gradient-to-b from-[#ffe6ef] to-[#fff9fb] px-6 pb-10 pt-12 text-center">
        <Sparkle className="anim-twinkle absolute left-[12%] top-12 h-7 w-7 text-[#f78fb8]" />
        <Sparkle className="anim-twinkle absolute right-[13%] top-10 h-6 w-6 text-[#baaad7] [animation-delay:0.7s]" />
        <p className="font-hand rotate-[-3deg] text-3xl text-[#e86ca4]">art collection ♡</p>
        <h1 className="mt-1 text-3xl font-bold text-[#54453f] md:text-5xl">แกลเลอรี</h1>
        <p className="mt-3 text-[#7b6b9e]">รวมภาพวาดต้นฉบับของ{profile.name} — แตะภาพเพื่อขยายดู</p>
        <div className="mt-4 flex justify-center gap-2">
          <Sticker text={`✿ ${artworks.length} ภาพ`} className="bg-white" />
          <Sticker text={profile.credits} className="bg-[#e9e4f5]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {artworks.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setPicked(a)}
              data-cursor
              className={`doll-card hover-wiggle group relative mb-8 block w-full break-inside-avoid overflow-hidden text-left ${
                i % 2 ? 'doll-card-lav' : ''
              }`}
            >
              <div className={`washi ${i % 2 ? 'washi-lav' : ''} -top-0 left-6 z-10 rotate-[-8deg]`} />
              <img src={a.src} alt={a.title} className="w-full object-cover" />
              <div className="border-t-2 border-dashed border-[#ffd3e0] bg-white px-4 py-3">
                <p className="flex items-center gap-2 font-bold text-[#54453f]">
                  <Images className="h-4 w-4 text-[#e86ca4]" /> {a.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#54453f]/70">{a.caption}</p>
              </div>
              <span className="font-hand absolute right-3 top-3 rotate-6 rounded-full bg-white/90 px-3 py-1 text-lg text-[#e86ca4] opacity-0 shadow transition-opacity group-hover:opacity-100">
                view ♡
              </span>
            </button>
          ))}

          {/* empty slot for future art */}
          <div className="mb-8 flex h-56 break-inside-avoid flex-col items-center justify-center gap-2 rounded-[18px] border-2 border-dashed border-[#f78fb8]/60 bg-white/50 text-[#e86ca4]">
            <Images className="h-6 w-6" />
            <p className="text-sm font-semibold">ภาพใหม่เร็วๆ นี้</p>
          </div>
        </div>
      </div>

      <Lightbox art={picked} onClose={() => setPicked(null)} />
    </div>
  )
}
