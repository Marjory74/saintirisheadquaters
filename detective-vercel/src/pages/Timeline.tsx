import { Clock3, Pin, Plus } from 'lucide-react'
import { SectionTitle, Sparkle, Sticker } from '@/components/Chrome'
import { artworks } from '@/data/character'

export default function Timeline() {
  return (
    <div className="bg-gingham min-h-screen pb-24">
      <div className="relative border-b-2 border-[#ffd3e0] bg-gradient-to-b from-[#e9e4f5] to-[#fff9fb] px-6 pb-10 pt-12 text-center">
        <Sparkle className="anim-twinkle absolute left-[16%] top-10 h-6 w-6 text-[#baaad7]" />
        <Sparkle className="anim-twinkle absolute right-[16%] top-14 h-5 w-5 text-[#f78fb8] [animation-delay:0.9s]" />
        <p className="font-hand rotate-[-2deg] text-3xl text-[#7b6b9e]">story timeline</p>
        <h1 className="mt-1 text-3xl font-bold text-[#54453f] md:text-5xl">ไทม์ไลน์นิยาย</h1>
        <p className="mt-3 text-[#7b6b9e]">บอร์ดปักหมุดเหตุการณ์สำคัญของเรื่อง เรียงตามลำดับเวลา</p>
        <div className="mt-4">
          <Sticker text="☂ UNDER INVESTIGATION" className="bg-[#c9e7b5]" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-14">
        <SectionTitle hand="case board" title="กระดานบันทึกคดี" className="mb-10" />

        <div className="relative ml-4 space-y-10 border-l-4 border-dashed border-[#baaad7]/50 pl-10 md:ml-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="relative">
              <span className="absolute -left-[52px] top-6 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#7b6b9e] bg-white md:-left-[54px]">
                <Pin className="h-3.5 w-3.5 text-[#7b6b9e]" />
              </span>
              <div
                className={`doll-card doll-card-lav relative p-6 ${n % 2 ? 'rotate-[0.6deg]' : 'rotate-[-0.6deg]'}`}
              >
                <div className={`washi ${n % 2 ? 'washi-lav' : ''} -top-3 left-8 rotate-[-6deg]`} />
                <p className="font-pixel text-sm tracking-[0.3em] text-[#baaad7]">
                  EVENT {String(n).padStart(2, '0')}
                </p>
                <div className="mt-3 space-y-2">
                  <div className="h-4 w-2/3 rounded-full bg-[#e9e4f5]" />
                  <div className="h-3 w-full rounded-full bg-[#f4f1fa]" />
                  <div className="h-3 w-4/5 rounded-full bg-[#f4f1fa]" />
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#7b6b9e]">
                  <Clock3 className="h-4 w-4" /> รอการบันทึก — เนื้อเรื่องจะถูกปักหมุดที่นี่
                </p>
              </div>
            </div>
          ))}

          {/* add slot */}
          <div className="relative">
            <span className="absolute -left-[52px] top-6 flex h-7 w-7 items-center justify-center rounded-full border-2 border-dashed border-[#baaad7]/60 bg-white md:-left-[54px]">
              <Plus className="h-3.5 w-3.5 text-[#baaad7]" />
            </span>
            <div className="flex h-32 items-center justify-center rounded-[18px] border-2 border-dashed border-[#baaad7]/60 bg-white/50 text-[#7b6b9e]">
              <p className="text-sm font-semibold">ช่องว่างสำหรับเหตุการณ์ถัดไป…</p>
            </div>
          </div>
        </div>

        {/* cute footer note */}
        <div className="doll-card relative mx-auto mt-16 max-w-xl p-6 text-center">
          <img
            src={artworks[4].src}
            alt="จิบิมนัสนันท์"
            className="anim-bob mx-auto -mt-16 h-28 w-28 rounded-full border-4 border-white object-cover shadow-[4px_5px_0_0_#ffd3e0]"
          />
          <p className="font-hand mt-3 text-2xl text-[#e86ca4]">memo ♡</p>
          <p className="mt-1 leading-relaxed text-[#54453f]/85">
            “ตอนนี้แฟ้มไทม์ไลน์ยังว่างอยู่นะคะ เมื่อเนื้อเรื่องของแต่ละคดีพร้อม
            ผู้เขียนจะมาปักหมุดบันทึกไว้ตรงนี้ รอติดตามกันได้เลย”
          </p>
        </div>
      </div>
    </div>
  )
}
