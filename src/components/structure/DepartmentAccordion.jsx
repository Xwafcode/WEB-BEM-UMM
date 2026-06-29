import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import MemberCard from './MemberCard'
import Badge from '../ui/Badge'

export default function DepartmentAccordion({ departemen }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="space-y-3">
      {departemen.map((dept) => {
        const isOpen = openId === dept.id
        return (
          <div
            key={dept.id}
            className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#C0272D]/40 shadow-[0_4px_20px_rgba(192,39,45,0.08)]' : 'border-gray-200 hover:border-[#C0272D]/30'}`}
          >
            <button
              id={`accordion-btn-${dept.id}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${dept.id}`}
              onClick={() => setOpenId(isOpen ? null : dept.id)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#C0272D] focus:ring-inset rounded-2xl"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#C0272D] flex items-center justify-center shrink-0">
                  <span className="text-white font-display font-extrabold text-xs">{dept.singkatan.slice(0, 2)}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-display font-extrabold text-gray-900 text-base leading-snug truncate">{dept.nama}</p>
                  <p className="text-gray-500 text-xs mt-0.5 hidden sm:block truncate">{dept.deskripsi}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Badge>{dept.anggota.length} Anggota</Badge>
                <CaretDown
                  size={20}
                  weight="bold"
                  className={`text-[#C0272D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </div>
            </button>

            <div
              id={`accordion-panel-${dept.id}`}
              role="region"
              aria-labelledby={`accordion-btn-${dept.id}`}
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-5 pb-5">
                <p className="text-gray-500 text-sm mb-4 sm:hidden">{dept.deskripsi}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dept.anggota.map((member) => (
                    <MemberCard key={member.nama} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
