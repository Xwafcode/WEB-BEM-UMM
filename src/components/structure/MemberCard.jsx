function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function MemberCard({ member }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5D0D0] hover:border-[#C0272D]/30 hover:shadow-sm transition-all duration-200">
      <div
        className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-[#C0272D] text-white font-display font-bold text-sm ring-2 ring-[#C0272D]/20"
        aria-label={`Avatar inisial untuk ${member.nama}`}
      >
        {getInitials(member.nama)}
      </div>
      <div className="min-w-0">
        <p className="font-display font-semibold text-[#1A0808] text-sm leading-snug truncate">{member.nama}</p>
        <p className="text-[#7A6060] text-xs mt-0.5 truncate">{member.jabatan}</p>
      </div>
    </div>
  )
}
