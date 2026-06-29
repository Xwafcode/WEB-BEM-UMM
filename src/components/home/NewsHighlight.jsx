import { Link } from 'react-router-dom'
import articles from '../../data/articles.json'
import ScrollReveal from '../ui/ScrollReveal'
import NewsCard from '../news/NewsCard'

export default function NewsHighlight() {
  const latest = articles.slice(0, 3)

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="news-highlight-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-[#C0272D] rounded-full"></span>
                <span className="text-[#C0272D] font-bold tracking-wider uppercase text-sm">
                  Update Terbaru
                </span>
              </div>
              <h2
                id="news-highlight-heading"
                className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight"
              >
                Berita & Kegiatan
              </h2>
            </div>
            <p className="text-gray-500 max-w-md md:text-right leading-relaxed md:pb-2">
              Ikuti perkembangan terbaru, program kerja, dan informasi penting lainnya seputar BEM UMM.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {latest.map((article, i) => (
            <NewsCard key={article.id} article={article} delay={i * 0.1} />
          ))}
        </div>

        <ScrollReveal delay={0.2} className="flex justify-center">
          <Link
            to="/berita"
            className="inline-flex items-center justify-center bg-[#C0272D] hover:bg-[#8C0D11] text-white font-display font-bold px-8 py-3.5 rounded-full transition-colors shadow-md"
          >
            Lihat Selengkapnya
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
