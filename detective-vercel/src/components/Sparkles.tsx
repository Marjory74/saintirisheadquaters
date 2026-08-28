import { useEffect, useRef } from 'react'

interface Mote {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  phase: number
  speed: number
  color: string
}

const COLORS = ['rgba(247,143,184,', 'rgba(186,170,215,', 'rgba(255,211,224,', 'rgba(201,231,181,']

/** Ambient floating glitter over the whole page. */
export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const motes: Mote[] = Array.from({ length: 42 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.5 + Math.random() * 3.5,
      vy: -(0.12 + Math.random() * 0.3),
      vx: (Math.random() - 0.5) * 0.15,
      phase: Math.random() * Math.PI * 2,
      speed: 0.015 + Math.random() * 0.025,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let raf = 0
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.y += m.vy
        m.x += m.vx
        m.phase += m.speed
        if (m.y < -10) {
          m.y = h + 10
          m.x = Math.random() * w
        }
        if (m.x < -10) m.x = w + 10
        if (m.x > w + 10) m.x = -10
        const alpha = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(m.phase))
        ctx.save()
        ctx.translate(m.x, m.y)
        ctx.rotate(m.phase)
        ctx.fillStyle = `${m.color}${alpha})`
        ctx.beginPath()
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2)
          ctx.moveTo(0, 0)
          ctx.quadraticCurveTo(m.r * 0.22, m.r * 0.22, 0, m.r)
          ctx.quadraticCurveTo(-m.r * 0.22, m.r * 0.22, 0, 0)
        }
        ctx.fill()
        ctx.restore()
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', onResize)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[90]" />
}
