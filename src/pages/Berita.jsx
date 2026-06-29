import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import articles from '../data/articles.json'
import NewsCard from '../components/news/NewsCard'
import CategoryFilter from '../components/news/CategoryFilter'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Berita() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered = activeCategory === 'Semua'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Berita — BEM UMM Kabinet Satya Prabaswara</title>
        <meta name="description" content="Berita dan pengumuman terbaru dari Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang." />
      </Helmet>

      <main id="main-content">
        <div className="bg-[#C0272D] pt-24 pb-12" aria-labelledby="berita-page-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="berita-page-heading" className="font-display font-extrabold text-white text-4xl lg:text-5xl mb-3">Berita</h1>
            <p className="text-white/75 text-lg">Informasi dan kegiatan terbaru BEM UMM</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollReveal>
            <div className="mb-8">
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            </div>
          </ScrollReveal>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#7A6060] text-lg">Belum ada berita dalam kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.06}>
                  <NewsCard article={article} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
