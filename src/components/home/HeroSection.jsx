import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function HeroSection() {
  const reduce = useReducedMotion()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      className="relative pt-32 pb-16 bg-white overflow-hidden"
      aria-label="Hero utama BEM UMM"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial={reduce ? false : 'hidden'}
          animate="visible"
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12"
        >
          {/* Left Title */}
          <div className="flex-1">
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-[#C0272D] leading-none tracking-tight mb-2 uppercase"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              BEM UMM
            </motion.h1>
            <motion.div variants={itemVariants} className="inline-block bg-[#C0272D] px-4 py-2">
              <h2
                className="font-display font-black text-white leading-none tracking-tight uppercase"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Kabinet Satya Prabaswara
              </h2>
            </motion.div>
          </div>

          {/* Right Description */}
          <motion.div variants={itemVariants} className="flex-1 max-w-lg lg:pb-4">
            <p className="text-gray-600 text-lg leading-relaxed font-body">
              <strong className="text-gray-900 font-bold">Kabinet Satya Prabaswara</strong> merupakan kabinet Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang periode 2024-2025 yang bertugas menjalankan roda organisasi, menampung aspirasi, menggerakkan kegiatan serta menjadi jembatan antara mahasiswa dengan pihak kampus.
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-white"
        >
          <img 
            src="/hero-bg.jpg" 
            alt="Universitas Muhammadiyah Malang Campus" 
            className="w-full h-auto block"
          />
          
          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </motion.div>

        {/* Vertical Scroll Text */}
        <div className="hidden xl:flex absolute top-[60%] left-2 -translate-y-1/2 flex-col items-center gap-1 font-body text-xs tracking-[0.3em] uppercase font-bold text-gray-400">
          {'SCROLL DOWN'.split('').map((char, i) => (
            <span key={i} className={char === ' ' ? 'h-3' : ''}>{char}</span>
          ))}
        </div>
        <div className="hidden xl:flex absolute top-[60%] right-2 -translate-y-1/2 flex-col items-center gap-1 font-body text-xs tracking-[0.3em] uppercase font-bold text-gray-400">
          {'SCROLL DOWN'.split('').map((char, i) => (
            <span key={i} className={char === ' ' ? 'h-3' : ''}>{char}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

