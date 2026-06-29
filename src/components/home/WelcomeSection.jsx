import ScrollReveal from '../ui/ScrollReveal'

import { Quotes } from '@phosphor-icons/react'

function DecorativeLogo() {
  return (
    <div className="text-[#C0272D]">
      <Quotes weight="fill" size={48} />
    </div>
  )
}

export default function WelcomeSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="welcome-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left: Photo */}
          <ScrollReveal className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden aspect-[4/5] p-2">
              <div className="w-full h-full rounded-[1.75rem] overflow-hidden bg-gray-100 relative flex flex-col items-center justify-center gap-4">
                <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                    <circle cx="40" cy="30" r="18" fill="#d1d5db"/>
                    <path d="M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32" fill="#d1d5db"/>
                  </svg>
                </div>
                <div className="text-center px-6">
                  <p className="font-display font-bold text-gray-700 text-base">Muhammad Faris Al-Ghazali</p>
                  <p className="text-gray-400 text-sm mt-1">Ketua BEM UMM</p>
                  <div className="w-8 h-0.5 bg-[#C0272D] rounded-full mx-auto mt-3"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={0.15} className="flex-1 w-full pt-4">
            <div className="flex justify-between items-start gap-4 mb-8">
              <h2
                id="welcome-heading"
                className="font-display font-black text-gray-900 leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Sambutan Ketua<br />BEM UMM<br />2024 / 2025.
              </h2>
              <div className="hidden sm:block shrink-0 mt-2">
                <DecorativeLogo />
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed font-body">
              <p>Assalamualaikum Wr. Wb.</p>
              <p>
                Dengan segala hormat, marilah kita panjatkan puji dan syukur ke hadirat Allah SWT atas limpahan rahmat dan hidayah-Nya, sehingga kita semua dapat melaksanakan kegiatan ini dengan baik.
              </p>
              <p>
                Berkat rahmat-Nya pula, kami dapat menyusun formulasi kepengurusan, merancang berbagai program kerja, serta menjalankan kegiatan lain yang berkaitan dengan Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang (BEM UMM).
              </p>
              <p>
                Kami menyadari sepenuhnya bahwa tanpa dukungan dari berbagai pihak, khususnya civitas akademika Universitas Muhammadiyah Malang, BEM UMM tidak akan mampu bertahan dan berkembang hingga saat ini.
              </p>
              <p>
                Harapan kami, khususnya saya selaku Ketua BEM UMM, Muhammad Faris Al-Ghazali, semoga kepengurusan ini dapat terus bersinergi, berkontribusi secara nyata, serta membawa manfaat bagi mahasiswa dan masyarakat luas.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
