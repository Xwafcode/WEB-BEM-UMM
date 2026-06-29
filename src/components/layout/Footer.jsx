import { Link } from 'react-router-dom'
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/berita', label: 'Berita' },
  { to: '/struktur', label: 'Struktur' },
  { to: '/kontak', label: 'Kontak' },
]

const socials = [
  { icon: InstagramLogo, href: 'https://instagram.com/bemumm', label: 'Instagram BEM UMM' },
  { icon: WhatsappLogo, href: 'https://wa.me/6281234967746', label: 'WhatsApp BEM UMM' },
  { icon: EnvelopeSimple, href: 'mailto:bemu.umm@gmail.com', label: 'Email BEM UMM' },
]

export default function Footer() {
  return (
    <footer className="bg-[#8C0D11] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-umm.png" alt="Logo BEM UMM" className="h-14 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
              Satu portal untuk seluruh gerakan mahasiswa Universitas Muhammadiyah Malang.
            </p>
            <div className="flex items-start gap-2 mt-4 text-white/60 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Sekretariat BEM UMM, Kampus III UMM, Jl. Raya Tlogomas 246, Malang</span>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/80 mb-4">Navigasi</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/80 mb-4">Ikuti Kami</h3>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/25 transition-colors duration-200 text-white"
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>bemu.umm@gmail.com</p>
              <p>+62 812-3496-7746</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © 2025 BEM UMM — Kabinet Satya Prabaswara. Hak Cipta Dilindungi.
          </p>
          <p className="text-white/40 text-xs">
            Universitas Muhammadiyah Malang
          </p>
        </div>
      </div>
    </footer>
  )
}
