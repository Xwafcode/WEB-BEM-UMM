const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Rilis Pers', 'Prestasi']

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori berita">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`px-4 py-2 rounded-full text-sm font-display font-semibold border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C0272D] focus:ring-offset-2
            ${active === cat
              ? 'bg-[#C0272D] border-[#C0272D] text-white'
              : 'border-[#C0272D] text-[#C0272D] hover:bg-[#FFF5F5]'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
