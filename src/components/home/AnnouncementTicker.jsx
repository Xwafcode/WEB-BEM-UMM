import { useRef } from 'react'
import { motion, useScroll, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'

const BASE_SPEED = 50 // px per second — slow baseline

const TickerContent = () => (
  <div className="flex items-center shrink-0">
    {[...Array(6)].map((_, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="font-display font-black text-4xl md:text-6xl text-white/60 px-6 select-none">#</span>
        <span className="font-display font-black text-4xl md:text-6xl text-outline tracking-wider uppercase select-none">SATYA PRABASWARA</span>
        <span className="font-display font-black text-4xl md:text-6xl text-white/60 px-6 select-none">#</span>
        <span className="font-display font-black text-4xl md:text-6xl text-white tracking-wider uppercase select-none">BEM UMM</span>
      </span>
    ))}
  </div>
)

export default function AnnouncementTicker() {
  const innerRef = useRef(null)
  const x = useMotionValue(0)
  const directionFactor = useRef(1)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 200,
    mass: 1,
  })

  useAnimationFrame((_t, delta) => {
    const velocity = smoothVelocity.get()

    // Update direction from scroll
    if (velocity > 80) directionFactor.current = 1
    else if (velocity < -80) directionFactor.current = -1

    // Scroll boost: capped so it doesn't go too fast
    const scrollBoost = Math.min(Math.abs(velocity) * 0.015, 18)

    const moveBy = directionFactor.current * (BASE_SPEED + scrollBoost) * (delta / 1000)

    // Get the width of one copy (half the total inner width)
    const el = innerRef.current
    if (!el) return
    const halfWidth = el.scrollWidth / 2

    let newX = x.get() + moveBy

    // Seamless reset: when one copy scrolls fully out, snap back exactly one copy width
    if (newX <= -halfWidth) newX += halfWidth
    if (newX >= 0) newX -= halfWidth

    x.set(newX)
  })

  return (
    <div
      className="bg-[#C0272D] py-4 md:py-8 overflow-hidden border-y border-white/20"
      role="marquee"
      aria-label="Pengumuman terbaru BEM UMM"
    >
      <motion.div ref={innerRef} className="flex" style={{ x }}>
        <TickerContent />
        <TickerContent />
      </motion.div>
    </div>
  )
}
