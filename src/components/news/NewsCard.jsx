import { Link } from 'react-router-dom'
import { Calendar } from '@phosphor-icons/react'
import ScrollReveal from '../ui/ScrollReveal'

export default function NewsCard({ article, delay = 0 }) {
  const date = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <ScrollReveal delay={delay} className="h-full">
      <Link
        to={`/berita/${article.slug}`}
        className="group flex flex-col bg-white rounded-[1.25rem] overflow-hidden border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C0272D] h-full"
        aria-label={`Baca artikel: ${article.title}`}
      >
        <div className="overflow-hidden aspect-[4/3] w-full bg-gray-100 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <rect x="6" y="8" width="36" height="32" rx="4" fill="#d1d5db"/>
              <rect x="12" y="16" width="24" height="3" rx="1.5" fill="#9ca3af"/>
              <rect x="12" y="22" width="18" height="2.5" rx="1.25" fill="#9ca3af"/>
              <rect x="12" y="28" width="20" height="2.5" rx="1.25" fill="#9ca3af"/>
            </svg>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Berita</span>
        </div>
        
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-gray-800 text-lg md:text-xl leading-snug line-clamp-3 mb-4 group-hover:text-[#C0272D] transition-colors">
            {article.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 font-body mb-5">
            <Calendar size={18} aria-hidden="true" /> 
            <span>{date}</span>
          </div>

          <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6 font-body">
            {article.summary}
          </p>
          
          <div className="mt-auto">
            <span className="inline-flex items-center justify-center bg-[#C0272D] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors group-hover:bg-[#a02025]">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}
