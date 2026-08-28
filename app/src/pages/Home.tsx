import { useState } from 'react'
import { Search, Image as ImageIcon, Clock3, Heart, Lock, ArrowRight, Sparkles as SparklesIcon } from 'lucide-react'
import { WindowFrame, Marquee, SectionTitle, Sparkle, Sticker } from '@/components/Chrome'
import { profile, artworks } from '@/data/character'
import type { Page } from '@/App'

export default function Home({ go }: { go: (p: Page) => void }) {
  const [flipped, setFlipped] = useState(false)
  const chibi = artworks[4]
  const sofa = artworks[0]

  return (
    <div className="pb-24">
      {/* ---------- HERO ---------- */}
      <header className="bg-gingham relative overflow-hidden border-b-2 border-[#ffd3e0]">
        <Sparkle className="anim-twinkle absolute left-[8%] top-16 h-6 w-6 text-[#f78fb8]" />
        <Sparkle className="anim-twinkle absolute right-[12%] top-24 h-8 w-8 text-[#baaad7] [animation-delay:0.6s]" />
        <Sparkle className="anim-twinkle absolute bottom-20 left-[18%] h-5 w-5 text-[#e86ca4] [animation-delay:1.2s]" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-[1.2fr_1fr] md:pt-20">
          <div className="relative z-10 text-center md:text-left">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <Sticker text="✿ นิยายสืบสวน" />
              <Sticker text="CASE FILE: OPEN" className="anim-heartbeat bg-[#c9e7b5]" />
            </div>
            <p className="font-hand rotate-[-2deg] text-3xl text-[#e86ca4] md:text-4xl">
              welcome to the case…
            </p>
            <h1 className="mt-1 text-4xl font-bold leading-tight text-[#54453f] md:text-6xl">
              Detective
              <span className="font-hand mx-3 align-middle text-[#baaad7]">of</span>
              Time
            </h1>
            <p className="mt-3 text-lg font-semibold text-[#7b6b9e] md:text-xl">
              — สำนักงานใหญ่เซนต์ไอริส —
            </p>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#54453f]/85 md:mx-0">
              เว็บไซต์รวมแฟ้มข้อมูลตัวละครจากนิยายสืบสวนสุดน่ารัก
              เปิดแฟ้มคดี ทำความรู้จักนักสืบ และตามรอยเรื่องราวทั้งหมดได้ที่นี่
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button className="btn-doll" onClick={() => go('detective')} data-cursor>
                <Search className="h-4 w-4" /> เปิดแฟ้มนักสืบ
              </button>
              <button className="btn-doll btn-ghost" onClick={() => go('gallery')} data-cursor>
                <ImageIcon className="h-4 w-4" /> ดูแกลเลอรี
              </button>
            </div>
          </div>

          {/* floating portrait */}
          <div className="relative mx-auto w-64 md:w-80">
            <div className="washi -left-6 -top-3 rotate-[-14deg]" />
            <div className="washi washi-lav -right-8 top-10 rotate-[18deg]" />
            <div className="anim-floaty relative rounded-full border-4 border-white bg-[#ffd3e0] p-2 shadow-[8px_10px_0_0_#ffd3e0]">
              <div className="stitch overflow-hidden rounded-full border-2 border-[#f78fb8]">
                <img src={chibi.src} alt={chibi.title} className="aspect-square w-full object-cover" />
              </div>
            </div>
            <div className="anim-bob absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <Sticker text={`♡ ${profile.name} ♡`} className="bg-white" />
            </div>
          </div>
        </div>
      </header>

      <Marquee
        items={[
          'SAINT IRIS HEADQUARTERS',
          'แฟ้มข้อมูลนักสืบ',
          'DETECTIVE OF TIME',
          'เปิดรับคดีใหม่',
          profile.badgeId,
          '✿',
        ]}
      />

      {/* ---------- ABOUT THE NOVEL ---------- */}
      <section className="bg-polka mx-auto max-w-6xl px-6 py-16">
        <SectionTitle hand="about the story" title="เรื่องราวของเรา" className="mb-10" />
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <WindowFrame title="prologue.txt" icon={<Heart className="h-4 w-4 text-[#e86ca4]" />}>
            <p className="leading-loose">
              ในเมืองที่ทุกคดีล้วนมี “เวลา” เป็นพยาน…
              <span className="mx-1 font-bold text-[#e86ca4]">สำนักงานใหญ่เซนต์ไอริส</span>
              คือหน่วยสืบสวนที่รับเฉพาะคดีที่ไม่มีใครกล้าแตะ — ตั้งแต่คดีฆาตกรรมอันซับซ้อน
              ไปจนถึง <span className="font-pixel rounded bg-[#baaad7]/25 px-1">COLD CASE</span>{' '}
              ที่ถูกลืมในลิ้นชักเก็บแฟ้ม
            </p>
            <p className="mt-3 leading-loose">
              และหัวใจของทุกคดี คือนักสืบสาวผู้เชี่ยวชาญนิติวิทยาศาสตร์
              ที่พร้อมจะไขปริศนาทุกชิ้นด้วยหลักฐาน… และหัวใจที่อ่อนโยนกว่าที่ใครคิด
            </p>
            <p className="font-hand mt-4 rotate-[-2deg] text-right text-2xl text-[#baaad7]">
              — the case is only beginning ♡
            </p>
          </WindowFrame>

          <div className="relative">
            <div className="washi -top-3 right-8 rotate-[10deg]" />
            <button
              onClick={() => go('gallery')}
              data-cursor
              className="doll-card hover-wiggle group block w-full overflow-hidden text-left"
            >
              <img src={sofa.src} alt={sofa.title} className="w-full object-cover" />
              <div className="flex items-center justify-between border-t-2 border-[#ffd3e0] bg-white px-4 py-3">
                <span className="font-hand text-2xl text-[#54453f]">{sofa.title}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-[#e86ca4] transition-transform group-hover:translate-x-1">
                  เข้าแกลเลอรี <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ---------- CHARACTER ROSTER ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle hand="meet the cast" title="แฟ้มตัวละคร" className="mb-10" />
        <div className="flex flex-wrap items-start justify-center gap-10">
          {/* flip card */}
          <div className="flip-scene w-72">
            <div
              className={`flip-inner relative h-[26rem] w-full ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped(!flipped)}
              data-cursor
              role="button"
              aria-label="พลิกการ์ดตัวละคร"
            >
              {/* front */}
              <div className="flip-face doll-card absolute inset-0 overflow-hidden">
                <div className="window-bar">
                  <span className="window-dot bg-[#f78fb8]" />
                  <span className="window-dot bg-[#baaad7]" />
                  <span className="window-dot bg-[#c9e7b5]" />
                  <span className="font-pixel ml-2 text-xs tracking-widest">{profile.badgeId}</span>
                </div>
                <div className="bg-polka-lav p-4">
                  <div className="overflow-hidden rounded-xl border-2 border-[#baaad7]">
                    <img src={artworks[2].src} alt={profile.name} className="aspect-square w-full object-cover" />
                  </div>
                </div>
                <div className="px-4 pb-4 text-center">
                  <p className="text-lg font-bold text-[#54453f]">{profile.name}</p>
                  <p className="text-sm font-semibold text-[#7b6b9e]">
                    {profile.title} · {profile.agency}
                  </p>
                  <p className="mt-2 flex items-center justify-center gap-1 text-xs text-[#e86ca4]">
                    <SparklesIcon className="h-3 w-3" /> แตะเพื่อพลิกการ์ด
                  </p>
                </div>
              </div>
              {/* back */}
              <div className="flip-face flip-back doll-card doll-card-lav absolute inset-0 flex flex-col overflow-hidden">
                <div className="window-bar window-bar-lav">
                  <span className="window-dot bg-[#f78fb8]" />
                  <span className="window-dot bg-[#baaad7]" />
                  <span className="window-dot bg-[#c9e7b5]" />
                  <span className="ml-2 text-xs font-bold">PROFILE CARD</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 text-sm">
                  {[
                    ['วันเกิด', profile.birthday],
                    ['สังกัด', profile.agency],
                    ['การศึกษา', `${profile.degree} · ${profile.university}`],
                    ['สายงาน', 'นิติวิทยาศาสตร์ / อาวุธและวัตถุระเบิด'],
                  ].map(([k, v]) => (
                    <p key={k} className="rounded-lg bg-[#fff9fb] px-3 py-2 leading-relaxed">
                      <span className="font-bold text-[#e86ca4]">{k} ✦ </span>
                      {v}
                    </p>
                  ))}
                  <button
                    className="btn-doll btn-lav mt-auto justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      go('detective')
                    }}
                    data-cursor
                  >
                    อ่านแฟ้มฉบับเต็ม <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* locked slots */}
          {[1, 2].map((n) => (
            <div
              key={n}
              className="flex h-[26rem] w-64 flex-col items-center justify-center gap-3 rounded-[18px] border-2 border-dashed border-[#baaad7]/60 bg-white/60 text-[#7b6b9e]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#baaad7]/60">
                <Lock className="h-6 w-6" />
              </span>
              <p className="font-pixel text-2xl tracking-widest">???</p>
              <p className="text-sm font-semibold">แฟ้มตัวละครถัดไป — เร็วๆ นี้</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- MENU TILES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              page: 'detective' as Page,
              title: 'แฟ้มนักสืบ',
              hand: 'detective file',
              desc: 'ประวัติ ทักษะ การศึกษา และคดีที่รับผิดชอบของมนัสนันท์',
              icon: <Search className="h-5 w-5" />,
            },
            {
              page: 'timeline' as Page,
              title: 'ไทม์ไลน์นิยาย',
              hand: 'story timeline',
              desc: 'บอร์ดปักหมุดเหตุการณ์สำคัญของเรื่อง — กำลังรอบันทึกแรก',
              icon: <Clock3 className="h-5 w-5" />,
            },
            {
              page: 'gallery' as Page,
              title: 'แกลเลอรี',
              hand: 'art gallery',
              desc: 'รวมภาพวาดต้นฉบับของตัวละคร ทั้งเวอร์ชันเต็มและจิบิ',
              icon: <ImageIcon className="h-5 w-5" />,
            },
          ].map((m) => (
            <button
              key={m.page}
              onClick={() => go(m.page)}
              data-cursor
              className="doll-card hover-wiggle relative p-6 text-left"
            >
              <span className="font-hand absolute -top-4 right-4 rotate-6 text-xl text-[#e86ca4]">
                {m.hand}
              </span>
              <span className="inline-flex rounded-full border-2 border-[#54453f] bg-[#ffd3e0] p-3 text-[#54453f]">
                {m.icon}
              </span>
              <p className="mt-4 text-xl font-bold text-[#54453f]">{m.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#54453f]/75">{m.desc}</p>
              <p className="mt-4 flex items-center gap-1 text-sm font-bold text-[#e86ca4]">
                เปิดดู <ArrowRight className="h-4 w-4" />
              </p>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
