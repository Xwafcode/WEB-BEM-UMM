import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import structure from '../../data/structure.json'
import ScrollReveal from '../ui/ScrollReveal'

export default function LeadershipPreview() {
  const departemen = structure.departemen

  return (
    <section className="bg-white py-20 lg:py-28 pb-24 lg:pb-40 border-t border-gray-100 overflow-hidden" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              id="leadership-heading"
              className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight"
            >
              Bagan Struktur Organisasi
            </h2>
            <p className="text-gray-500 mt-3 text-base md:text-lg">
              Kabinet {structure.kabinet} · Periode {structure.periode}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16 relative">
          
          {/* Level 1: Ketua & Wakil */}
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center relative z-10">
              <div className="bg-gradient-to-br from-[#C0272D] to-[#9a1d23] text-white p-5 rounded-2xl shadow-xl w-64 text-center ring-4 ring-red-50">
                <div className="font-display font-bold text-lg mb-2">Ketua BEM</div>
                <div className="w-12 h-px bg-white/30 mx-auto mb-2"></div>
                <div className="font-display font-bold text-lg">Wakil Ketua BEM</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Vertical Line 1 */}
          <ScrollReveal delay={0.2}>
            <div className="w-px h-10 bg-gray-300 mx-auto"></div>
            
            {/* Level 2: Sekretaris & Bendahara */}
            <div className="flex justify-center relative">
              {/* Horizontal Line */}
              <div className="absolute top-0 w-[70%] md:w-[50%] h-px bg-gray-300"></div>
              
              <div className="flex justify-between w-[70%] md:w-[50%]">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="bg-white text-gray-800 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-md border border-gray-100 font-semibold w-36 md:w-44 text-center text-sm md:text-base">
                    Sekretaris Umum
                  </div>
                </div>
                
                {/* Center Vertical Line passing through */}
                <div className="w-px h-full bg-gray-300 absolute left-1/2 -translate-x-1/2 -top-10 -z-10"></div>
                <div className="w-px h-16 bg-gray-300 absolute left-1/2 -translate-x-1/2 top-0 -z-10"></div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="bg-white text-gray-800 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-md border border-gray-100 font-semibold w-36 md:w-44 text-center text-sm md:text-base">
                    Bendahara Umum
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Vertical Line 2 */}
          <ScrollReveal delay={0.3}>
            <div className="w-px h-12 bg-gray-300 mx-auto"></div>
            
            {/* Level 3: Departemen */}
            <div className="relative max-w-4xl mx-auto">
              {/* Horizontal line for departemen (Desktop only) */}
              <div className="absolute top-0 left-[8.33%] right-[8.33%] h-px bg-gray-300 hidden md:block"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0 pt-0 md:pt-6">
                {departemen.map((dept) => (
                  <div key={dept.id} className="flex flex-col items-center relative">
                    <div className="w-px h-6 bg-gray-300 hidden md:block absolute -top-6"></div>
                    <div className="bg-gray-50 hover:bg-white text-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-[#C0272D]/30 text-center w-[90%] h-full flex flex-col items-center justify-center transition-all duration-300 group cursor-default">
                      <span className="font-bold text-xs md:text-sm group-hover:text-[#C0272D] transition-colors">
                        {dept.singkatan}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link
              to="/struktur"
              className="inline-flex items-center gap-2 bg-[#C0272D] text-white px-8 py-3.5 rounded-full font-display font-medium hover:bg-[#a02025] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C0272D] focus:ring-offset-2"
            >
              Lihat Kepengurusan Lengkap
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
