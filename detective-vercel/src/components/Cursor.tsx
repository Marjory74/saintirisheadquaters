import { useEffect, useRef } from 'react'

interface Trail {
  x: number
  y: number
  life: number
  size: number
  rot: number
  color: string
}

const COLORS = ['#f78fb8', '#baaad7', '#ffd3e0', '#c9e7b5']

/** Sparkle cursor: a star follows the mouse and sheds tiny glitter trails. */
export default function Cursor() {
  const starRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    document.body.classList.add('cursor-none-app')

    const star = starRef.current!
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const mouse = { x: w / 2, y: h / 2 }
    const pos = { x: w / 2, y: h / 2 }
    const trails: Trail[] = []
    let scale = 1
    let targetScale = 1
    let raf = 0
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const t = e.target as HTMLElement
      targetScale = t.closest('a,button,[data-cursor]') ? 1.8 : 1
      if (frame % 3 === 0) {
        trails.push({
          x: pos.x + (Math.random() - 0.5) * 14,
          y: pos.y + (Math.random() - 0.5) * 14,
          life: 1,
          size: 3 + Math.random() * 5,
          rot: Math.random() * Math.PI,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const drawStar = (x: number, y: number, r: number, rot: number, color: string, alpha: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2)
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(r * 0.22, r * 0.22, 0, r)
        ctx.quadraticCurveTo(-r * 0.22, r * 0.22, 0, 0)
      }
      ctx.fill()
      ctx.restore()
    }

    const loop = () => {
      frame++
      pos.x += (mouse.x - pos.x) * 0.35
      pos.y += (mouse.y - pos.y) * 0.35
      scale += (targetScale - scale) * 0.2

      star.style.transform = `translate(${pos.x - 12}px, ${pos.y - 12}px) scale(${scale})`

      ctx.clearRect(0, 0, w, h)
      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i]
        t.life -= 0.03
        t.y += 0.4
        t.rot += 0.05
        if (t.life <= 0) {
          trails.splice(i, 1)
          continue
        }
        drawStar(t.x, t.y, t.size * t.life, t.rot, t.color, t.life)
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    raf = requestAnimationFrame(loop)
    return () => {
      document.body.classList.remove('cursor-none-app')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[95] hidden md:block"
      />
      <div
        ref={starRef}
        className="pointer-events-none fixed left-0 top-0 z-[96] hidden h-6 w-6 md:block"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full drop-shadow-sm">
          <path
            d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
            fill="#f78fb8"
            stroke="#54453f"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </>
  )
}
