import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ShareNetwork, WhatsappLogo } from '@phosphor-icons/react'
import articles from '../data/articles.json'
import Badge from '../components/ui/Badge'
import NewsCard from '../components/news/NewsCard'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function BeritaDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) return <Navigate to="/berita" replace />

  const idx = articles.findIndex((a) => a.slug === slug)
  const prev = articles[idx - 1] || null
  const next = articles[idx + 1] || null
  const related = articles.filter((a) => a.category === article.category && a.slug !== slug).slice(0, 3)

  const date = new Date(article.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  const shareWA = `https://wa.me/?text=${encodeURIComponent(`${article.title} — Baca selengkapnya di website BEM UMM`)}`

  return (
    <>
      <Helmet>
        <title>{article.title} — BEM UMM</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.image} />
      </Helmet>

      <main id="main-content">
        <div className="relative pt-16 overflow-hidden">
          <div className="w-full h-[40vh] md:h-[55vh] bg-gray-200 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 opacity-40">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <rect x="6" y="8" width="52" height="48" rx="6" fill="#9ca3af"/>
                <rect x="16" y="22" width="32" height="4" rx="2" fill="#6b7280"/>
                <rect x="16" y="30" width="24" height="3" rx="1.5" fill="#6b7280"/>
                <rect x="16" y="37" width="28" height="3" rx="1.5" fill="#6b7280"/>
              </svg>
              <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">Berita</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
            <Badge category>{article.category}</Badge>
            <h1 className="font-display font-extrabold text-white text-2xl md:text-4xl leading-tight mt-3">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#7A6060] mb-8 pb-6 border-b border-[#E5D0D0]">
            <span className="flex items-center gap-2">
              <Calendar size={15} aria-hidden="true" /> {date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} aria-hidden="true" /> {article.readTime} menit baca
            </span>
            <span className="flex items-center gap-2">
              <User size={15} aria-hidden="true" /> {article.author}
            </span>
          </div>

          <article
            className="prose prose-base max-w-none text-[#1A0808] prose-headings:font-display prose-headings:text-[#1A0808] prose-a:text-[#C0272D] prose-strong:text-[#1A0808] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
            aria-label="Isi artikel"
          />

          <div className="mt-10 pt-6 border-t border-[#E5D0D0] flex flex-wrap items-center gap-3">
            <span className="text-sm font-display font-semibold text-[#7A6060] flex items-center gap-2">
              <ShareNetwork size={16} aria-hidden="true" /> Bagikan:
            </span>
            <a
              href={shareWA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-display font-semibold hover:opacity-90 transition-opacity"
            >
              <WhatsappLogo size={16} weight="fill" aria-hidden="true" /> WhatsApp
            </a>
          </div>

          <nav className="mt-10 grid grid-cols-2 gap-4" aria-label="Navigasi artikel">
            {prev ? (
              <Link
                to={`/berita/${prev.slug}`}
                className="flex items-start gap-3 p-4 bg-[#FFF5F5] rounded-xl hover:bg-[#F2D5D6] transition-colors group"
              >
                <ArrowLeft size={20} className="text-[#C0272D] mt-0.5 shrink-0 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                <div>
                  <p className="text-xs text-[#7A6060] mb-1">Sebelumnya</p>
                  <p className="font-display font-semibold text-[#1A0808] text-sm line-clamp-2 leading-snug">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/berita/${next.slug}`}
                className="flex items-start gap-3 p-4 bg-[#FFF5F5] rounded-xl hover:bg-[#F2D5D6] transition-colors group text-right ml-auto w-full"
              >
                <div>
                  <p className="text-xs text-[#7A6060] mb-1">Selanjutnya</p>
                  <p className="font-display font-semibold text-[#1A0808] text-sm line-clamp-2 leading-snug">{next.title}</p>
                </div>
                <ArrowRight size={20} className="text-[#C0272D] mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            ) : <div />}
          </nav>

          {related.length > 0 && (
            <section className="mt-14" aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-display font-bold text-[#1A0808] text-xl mb-6">Berita Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((a) => (
                  <ScrollReveal key={a.id}>
                    <NewsCard article={a} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  )
}
