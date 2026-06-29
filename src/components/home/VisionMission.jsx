import { CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '../ui/ScrollReveal'

const misiList = [
  'Memperkuat representasi dan advokasi mahasiswa dalam kebijakan kampus',
  'Meningkatkan kapasitas mahasiswa melalui program pendidikan dan pelatihan berkualitas',
  'Membangun jaringan kolaborasi antara BEM UMM dengan organisasi mahasiswa di tingkat regional dan nasional',
  'Mendorong inovasi dan kreativitas mahasiswa dalam menghadapi tantangan zaman',
  'Mewujudkan kampus yang inklusif, demokratis, dan berpihak pada mahasiswa',
]

export default function VisionMission() {
  return (
    <section className="bg-[#8C0D11] py-20 lg:py-28" aria-labelledby="visi-misi-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <div>
              <h2
                id="visi-misi-heading"
                className="font-display font-extrabold text-white text-3xl lg:text-4xl leading-tight mb-6"
              >
                Visi Kabinet
              </h2>
              <div className="w-12 h-1 bg-white/40 rounded-full mb-6" aria-hidden="true" />
              <p className="text-white/85 text-xl leading-relaxed font-display font-500 italic">
                "Terwujudnya BEM UMM yang aspiratif, inovatif, dan berdampak nyata bagi civitas akademika Universitas Muhammadiyah Malang."
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-6">Misi Kabinet</h3>
              <ul className="space-y-4" role="list" aria-label="Daftar misi kabinet">
                {misiList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={22}
                      weight="fill"
                      className="text-white/50 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white/80 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
