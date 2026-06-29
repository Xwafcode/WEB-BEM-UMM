import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/berita', label: 'Berita' },
  { to: '/struktur', label: 'Struktur Kepengurusan' },
  { to: '/kontak', label: 'Contacts' },
]

function BEMLogo() {
  return (
    <img src="/logo-umm.png" alt="Logo UMM" className="h-10 md:h-12 w-auto object-contain" />
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useState(0)

  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      // Hide when scrolling down past 80px, show when scrolling up
      if (currentY > 80) {
        setHidden(currentY > lastY)
      } else {
        setHidden(false)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl
          rounded-2xl border border-white/25
          transition-all duration-300 ease-in-out
          ${scrolled
            ? 'py-2 shadow-[0_8px_32px_rgba(0,0,0,0.14)]'
            : 'py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
          }
          ${hidden ? '-translate-y-[110%]' : 'translate-y-0'}
        `}
        style={{
          background: 'rgba(255,255,255,0.25)',
          backdropFilter: 'blur(5px) saturate(150%)',
          WebkitBackdropFilter: 'blur(10px) saturate(150%)',
        }}
        aria-label="Navigasi utama"
      >
        <div className="px-5 sm:px-7 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <BEMLogo />
          </Link>

          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-display transition-colors duration-200 focus:outline-none
                    ${isActive ? 'font-extrabold text-gray-900' : 'font-semibold text-gray-700 hover:text-gray-900'}
                    ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C0272D] after:rounded-full' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 text-gray-800 hover:bg-white/30 rounded-md transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col pt-20 px-6 pb-8 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          borderLeft: '1px solid rgba(255,255,255,0.4)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        <button
          className="absolute top-4 right-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => setOpen(false)}
          aria-label="Tutup menu"
        >
          <X size={24} weight="bold" />
        </button>

        <ul className="flex flex-col gap-2" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-display rounded-lg transition-colors
                  ${isActive ? 'bg-red-50 text-[#C0272D] font-extrabold' : 'text-gray-600 font-semibold hover:bg-gray-50'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs font-body">© 2025 BEM UMM</p>
          <p className="text-gray-500 text-xs font-body">Kabinet Satya Prabaswara</p>
        </div>
      </div>
    </>
  )
}
