const categoryColors = {
  'Kegiatan': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Pengumuman': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Rilis Pers': 'bg-purple-50 text-purple-700 border border-purple-200',
  'Prestasi': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'default': 'bg-[#F2D5D6] text-[#C0272D] border border-[#E5D0D0]',
}

export default function Badge({ children, category = false, className = '' }) {
  const colorClass = category
    ? (categoryColors[children] || categoryColors.default)
    : 'bg-[#F2D5D6] text-[#C0272D] border border-[#E5D0D0]'

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider font-body ${colorClass} ${className}`}>
      {children}
    </span>
  )
}
