import { useState } from 'react'
import {
  Fingerprint, Search, MapPin, Bomb, Archive, Mail, Phone, Link2, AtSign,
  GraduationCap, Briefcase, Wrench, FolderOpen, IdCard, Images,
} from 'lucide-react'
import { WindowFrame, SectionTitle, Sticker, Sparkle } from '@/components/Chrome'
import Lightbox from '@/components/Lightbox'
import { profile, artworks } from '@/data/character'
import type { Artwork } from '@/data/character'

const caseIcons: Record<string, typeof Fingerprint> = {
  fingerprint: Fingerprint,
  search: Search,
  'map-pin': MapPin,
  bomb: Bomb,
  archive: Archive,
}
const contactIcons: Record<string, typeof Mail> = {
  mail: Mail,
  phone: Phone,
  link: Link2,
  'at-sign': AtSign,
}

export default function Character() {
  const [picked, setPicked] = useState<Artwork | null>(null)

  return (
    <div className="bg-polka min-h-screen pb-24">
      {/* header */}
      <div className="relative border-b-2 border-[#ffd3e0] bg-gradient-to-b from-[#ffe6ef] to-[#fff9fb] px-6 pb-10 pt-12 text-center">
        <Sparkle className="anim-twinkle absolute left-[15%] top-8 h-6 w-6 text-[#f78fb8]" />
        <Sparkle className="anim-twinkle absolute right-[14%] top-16 h-7 w-7 text-[#baaad7] [animation-delay:0.8s]" />
        <p className="font-hand rotate-[-3deg] text-3xl text-[#e86ca4]">detective file — open!</p>
        <h1 className="mt-1 text-3xl font-bold text-[#54453f] md:text-5xl">{profile.name}</h1>
        <p className="font-pixel mt-2 tracking-widest text-[#7b6b9e]">{profile.nameEn}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Sticker text={`♛ ${profile.title}`} className="bg-[#ffd3e0]" />
          <Sticker text={profile.agency} className="bg-[#e9e4f5]" />
          <span className="anim-stamp font-pixel inline-block rounded-lg border-4 border-[#e86ca4] px-3 py-1 text-sm tracking-[0.3em] text-[#e86ca4]">
            {profile.badgeId}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[340px_1fr]">
        {/* left column */}
        <div className="space-y-8">
          {/* ID photo */}
          <div className="relative">
            <div className="washi -left-4 -top-3 z-10 rotate-[-12deg]" />
            <WindowFrame title="id_photo.jpg" lavender icon={<IdCard className="h-4 w-4 text-[#7b6b9e]" />}>
              <div className="bg-polka-lav rounded-xl p-3">
                <div className="stitch-lav overflow-hidden rounded-lg border-2 border-[#baaad7]">
                  <img
                    src={artworks[3].src}
                    alt={profile.name}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-[#7b6b9e]">
                ภาพประจำตัวเจ้าหน้าที่ · {profile.agencyEn}
              </p>
            </WindowFrame>
          </div>

          {/* quick facts */}
          <WindowFrame title="ข้อมูลเบื้องต้น" icon={<FolderOpen className="h-4 w-4 text-[#e86ca4]" />}>
            <dl className="space-y-3 text-sm">
              {[
                ['ชื่อ', profile.name],
                ['วันเกิด', profile.birthday],
                ['มหาวิทยาลัย', profile.university],
                ['ระดับการศึกษา', profile.degree],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2 border-b border-dashed border-[#ffd3e0] pb-2">
                  <dt className="w-28 shrink-0 font-bold text-[#e86ca4]">{k}</dt>
                  <dd className="text-[#54453f]">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="mb-2 font-bold text-[#e86ca4]">แผนกที่ได้รับอนุญาตให้ปฏิบัติงาน</dt>
                <dd className="space-y-1.5">
                  {profile.licensedFields.map((f) => (
                    <p key={f} className="rounded-lg bg-[#fff0f6] px-3 py-1.5 text-[13px]">
                      ✿ {f}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </WindowFrame>

          {/* contacts */}
          <WindowFrame title="ช่องทางการติดต่อ" lavender icon={<Mail className="h-4 w-4 text-[#7b6b9e]" />}>
            <ul className="space-y-2.5 text-sm">
              {profile.contacts.map((c) => {
                const Icon = contactIcons[c.icon]
                return (
                  <li
                    key={c.label}
                    className="flex items-center gap-2.5 rounded-lg bg-[#f4f1fa] px-3 py-2 transition-transform hover:translate-x-1"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#7b6b9e]" />
                    <span className="break-all">{c.label}</span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-3 text-center text-xs text-[#7b6b9e]/70">— ข้อมูลติดต่อภายในเรื่อง —</p>
          </WindowFrame>
        </div>

        {/* right column */}
        <div className="space-y-8">
          {/* career */}
          <WindowFrame title="ประวัติการทำงาน" icon={<Briefcase className="h-4 w-4 text-[#e86ca4]" />}>
            <p className="leading-loose">{profile.careerIntro}</p>
            <div className="mt-5 rounded-xl border-2 border-dashed border-[#f78fb8]/60 bg-[#fff9fb] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-pixel tracking-widest text-[#e86ca4]">{profile.workHistory.code}</p>
                <p className="text-sm font-semibold text-[#7b6b9e]">{profile.workHistory.period}</p>
              </div>
              <p className="mt-1 font-bold">{profile.workHistory.place}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {profile.workHistory.roles.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <Sparkle className="h-3 w-3 shrink-0 text-[#f78fb8]" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </WindowFrame>

          {/* skills */}
          <WindowFrame title="ทักษะ" lavender icon={<Wrench className="h-4 w-4 text-[#7b6b9e]" />}>
            <div className="flex flex-wrap gap-2.5">
              {profile.skills.map((s, i) => (
                <span
                  key={s}
                  className={`hover-wiggle rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold shadow-[2px_2px_0_0_rgba(84,69,63,0.2)] ${
                    i % 2 === 0
                      ? 'border-[#f78fb8] bg-[#fff0f6] text-[#d44f8a]'
                      : 'border-[#baaad7] bg-[#f4f1fa] text-[#7b6b9e]'
                  }`}
                >
                  ✦ {s}
                </span>
              ))}
            </div>
          </WindowFrame>

          {/* education */}
          <WindowFrame title="การศึกษา" icon={<GraduationCap className="h-4 w-4 text-[#e86ca4]" />}>
            <ol className="relative space-y-4 border-l-2 border-dashed border-[#f78fb8] pl-6">
              {profile.education.map((e) => (
                <li key={e.degree + e.field} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#e86ca4] bg-white" />
                  <p className="font-bold text-[#54453f]">{e.degree}</p>
                  <p className="text-sm text-[#7b6b9e]">{e.field}</p>
                </li>
              ))}
            </ol>
          </WindowFrame>

          {/* cases */}
          <WindowFrame title="คดีที่รับผิดชอบ" lavender icon={<FolderOpen className="h-4 w-4 text-[#7b6b9e]" />}>
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.cases.map((c) => {
                const Icon = caseIcons[c.icon]
                return (
                  <div
                    key={c.name}
                    className="group flex items-center gap-3 rounded-xl border-2 border-[#e9e4f5] bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[#baaad7] hover:shadow-[4px_4px_0_0_#baaad7]"
                  >
                    <span className="rounded-full bg-[#e9e4f5] p-2 text-[#7b6b9e] transition-transform group-hover:rotate-12">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold">{c.name}</span>
                  </div>
                )
              })}
            </div>
          </WindowFrame>
        </div>
      </div>

      {/* artworks strip */}
      <section className="mx-auto max-w-6xl px-6">
        <SectionTitle hand="character arts" title="อัลบั้มภาพตัวละคร" className="mb-8" />
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 [scrollbar-width:thin]">
          {artworks.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setPicked(a)}
              data-cursor
              className={`doll-card hover-wiggle w-52 shrink-0 overflow-hidden ${i % 2 ? 'doll-card-lav' : ''}`}
            >
              <img src={a.src} alt={a.title} className="aspect-square w-full object-cover object-top" />
              <p className="flex items-center justify-center gap-1.5 border-t-2 border-[#ffd3e0] bg-white py-2.5 text-sm font-bold text-[#54453f]">
                <Images className="h-3.5 w-3.5 text-[#e86ca4]" /> {a.title}
              </p>
            </button>
          ))}
        </div>
        <p className="text-sm text-[#7b6b9e]">♡ {profile.credits} — แตะภาพเพื่อขยายดู</p>
      </section>

      <Lightbox art={picked} onClose={() => setPicked(null)} />
    </div>
  )
}
