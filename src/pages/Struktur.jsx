import { Helmet } from 'react-helmet-async'
import structure from '../data/structure.json'
import DepartmentAccordion from '../components/structure/DepartmentAccordion'
import ScrollReveal from '../components/ui/ScrollReveal'

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

function TopNode({ title, nama }) {
  return (
    <div className="bg-[#C0272D] text-white px-6 py-4 rounded-xl shadow-lg min-w-[180px] text-center relative z-10">
      <p className="font-display font-extrabold text-xs tracking-widest uppercase text-red-200 mb-1">{title}</p>
      {nama && <p className="font-display font-bold text-sm leading-tight">{nama}</p>}
    </div>
  )
}

export default function Struktur() {
  const ketua    = structure.pimpinan.find(p => p.id === 'ketua')
  const wakil    = structure.pimpinan.find(p => p.id === 'wakil')
  const sekum    = structure.pimpinan.find(p => p.id === 'sekretaris')
  const bendahara = structure.pimpinan.find(p => p.id === 'bendahara')

  return (
    <>
      <Helmet>
        <title>Struktur Kepengurusan — BEM UMM Kabinet Satya Prabaswara</title>
        <meta name="description" content="Struktur kepengurusan Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang Kabinet Satya Prabaswara periode 2024-2025." />
      </Helmet>

      <main id="main-content" className="bg-white min-h-screen">
        <section className="pt-32 pb-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="scale">
              <div className="text-center mb-16">
                 <h1 className="font-display font-black text-gray-900 text-4xl md:text-5xl mb-6 uppercase tracking-tight">
                    Struktur Organisasi
                 </h1>
                 <div className="inline-block bg-gray-900 text-white font-display font-bold uppercase tracking-widest text-xs px-6 py-2 rounded-full mb-8">
                   Badan Eksekutif
                 </div>
              </div>
            </ScrollReveal>

            <div className="max-w-5xl mx-auto mb-16 relative">
              
              {/* Desktop-only Pimpinan Tree */}
              <div className="hidden lg:flex flex-col items-center pt-4 mb-16">
                
                {/* Level 1: KETUA BEM */}
                <ScrollReveal delay={0.1} direction="scale" className="relative z-10">
                  <TopNode title="KETUA BEM" nama={ketua?.nama} />
                </ScrollReveal>

                {/* Level 2: SEKRETARIS - WAKIL KETUA - BENDAHARA */}
                <ScrollReveal delay={0.2} className="w-full">
                  <div className="flex items-center justify-center gap-12 relative mt-10 w-full max-w-[720px] mx-auto">
                    {/* Horizontal Connector */}
                    <div className="absolute top-1/2 left-[110px] right-[110px] h-[3px] bg-gray-300 -z-0 rounded-full" />
                    
                    <div className="z-10">
                      <TopNode title="SEKRETARIS UMUM" nama={sekum?.nama} />
                    </div>
                    
                    <div className="z-10 relative">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[3px] h-10 bg-gray-300 -z-0 rounded-full" />
                      <TopNode title="WAKIL KETUA" nama={wakil?.nama} />
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[3px] h-16 bg-gray-300 -z-0 rounded-full" />
                    </div>
                    
                    <div className="z-10">
                      <TopNode title="BENDAHARA UMUM" nama={bendahara?.nama} />
                    </div>
                  </div>
                </ScrollReveal>

              </div>

              {/* Mobile View Pimpinan */}
              <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto mb-16 lg:hidden">
                {[ketua, wakil, sekum, bendahara].map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                    <div className="bg-white border border-gray-200 p-6 rounded-2xl text-center shadow-sm">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#C0272D] flex items-center justify-center ring-4 ring-red-50">
                        <span className="text-white font-display font-bold text-2xl">{getInitials(p.nama)}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-gray-900 text-lg">{p.nama}</h3>
                      <p className="text-[#C0272D] font-bold text-sm mt-1">{p.jabatan}</p>
                    </div>
                  </ScrollReveal>
                ))}
                
                <ScrollReveal delay={0.4} direction="scale">
                   <div className="text-center mt-6">
                      <h2 className="font-display font-black text-gray-900 text-2xl mb-2 uppercase">
                          Kementerian
                      </h2>
                   </div>
                </ScrollReveal>
              </div>

              {/* Departemen Accordion */}
              <ScrollReveal delay={0.3} direction="up">
                <div className="max-w-4xl mx-auto relative z-10">
                   <DepartmentAccordion departemen={structure.departemen} />
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}
