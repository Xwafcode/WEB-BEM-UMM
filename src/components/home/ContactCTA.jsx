import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'

function WavyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
        <path d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z" fill="white" fillOpacity="0.05"></path>
        <path d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,112C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z" fill="white" fillOpacity="0.05"></path>
      </svg>
    </div>
  )
}



export default function ContactCTA() {
  return (
    <section
      className="relative bg-[#C0272D] z-20"
      aria-labelledby="cta-heading"
    >
      <WavyBackground />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between min-h-[300px] md:min-h-[400px]">
          
          {/* Left: Mascot/Character breaking out */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-start order-2 md:order-1 relative self-end h-[280px] md:h-[450px]">
            <ScrollReveal className="absolute bottom-0 w-full flex justify-center md:justify-start">
              <img 
                src="/contact-character.png" 
                alt="Hubungi Kami" 
                className="relative bottom-0 w-[300px] md:w-[480px] h-[380px] md:h-[580px] object-cover object-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] pointer-events-none"
              />
            </ScrollReveal>
          </div>

          {/* Right: CTA Content */}
          <div className="w-full md:w-[50%] text-center md:text-left py-12 md:py-16 order-1 md:order-2">
            <ScrollReveal delay={0.2}>
              <h2
                id="cta-heading"
                className="font-display font-black text-white text-4xl lg:text-5xl leading-tight mb-6"
              >
                Punya Pertanyaan atau Kolaborasi?
              </h2>
              <p className="text-red-100 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                Jangan ragu untuk menghubungi kami. BEM UMM selalu terbuka untuk aspirasi dan kerja sama.
              </p>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center bg-white text-[#C0272D] px-8 py-3.5 rounded-full font-display font-bold text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Hubungi Kami Sekarang
              </Link>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
