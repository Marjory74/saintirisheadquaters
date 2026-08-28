import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { Home as HomeIcon, Search, Clock3, Images, Heart } from 'lucide-react'
import Cursor from '@/components/Cursor'
import Sparkles from '@/components/Sparkles'
import Home from '@/pages/Home'
import Character from '@/pages/Character'
import Timeline from '@/pages/Timeline'
import Gallery from '@/pages/Gallery'
import NotFound from '@/pages/NotFound'
import { profile } from '@/data/character'
import { useEffect } from 'react'

const NAV = [
  { to: '/', label: 'หน้าแรก', icon: HomeIcon },
  { to: '/detective', label: 'แฟ้มนักสืบ', icon: Search },
  { to: '/timeline', label: 'ไทม์ไลน์', icon: Clock3 },
  { to: '/gallery', label: 'แกลเลอรี', icon: Images },
] as const

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-[70] border-b-2 border-[#ffd3e0] bg-[#fff9fb]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
        <button onClick={() => navigate('/')} data-cursor className="mr-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path
              d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
              fill="#e86ca4"
              stroke="#54453f"
              strokeWidth="1"
            />
          </svg>
          <span className="font-pixel hidden text-sm tracking-widest text-[#54453f] sm:block">
            DETECTIVE OF TIME
          </span>
        </button>
        <div className="ml-auto flex items-center gap-1.5 md:gap-2">
          {NAV.map((n) => {
            const Icon = n.icon
            const active = pathname === n.to
            return (
              <button
                key={n.to}
                onClick={() => navigate(n.to)}
                data-cursor
                className={`flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-all md:px-4 md:text-sm ${
                  active
                    ? 'border-[#54453f] bg-[#ffd3e0] text-[#54453f] shadow-[2px_2px_0_0_#54453f]'
                    : 'border-transparent text-[#7b6b9e] hover:border-[#ffd3e0] hover:bg-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="hidden sm:inline">{n.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Sparkles />
      <ScrollTop />
      <Nav />

      <main className="page-enter relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detective" element={<Character />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="relative z-10 border-t-2 border-[#ffd3e0] bg-[#ffe6ef] px-6 py-8 text-center">
        <p className="font-hand text-2xl text-[#e86ca4]">Detective of Time</p>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-[#54453f]/80">
          สำนักงานใหญ่เซนต์ไอริส{' '}
          <Heart className="h-3.5 w-3.5 fill-[#f78fb8] text-[#f78fb8]" />
          {' '}{profile.badgeId}
        </p>
        <p className="mt-2 text-xs text-[#7b6b9e]">
          {profile.credits} · เว็บไซต์แฟนเมดสำหรับตัวละครในนิยาย
        </p>
      </footer>
    </div>
  )
}
