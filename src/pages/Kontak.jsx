import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, EnvelopeSimple, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Kontak() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Using a public access key for web3forms (free tier)
    // In a real app, this should be in an environment variable, but for this demo, it's fine.
    // However, since we don't have a specific key provided in the PRD, we'll simulate the submission
    // or use a placeholder key. We'll use a placeholder action URL.
    
    // Simulating form submission for now as we don't have a real Web3Forms key
    setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus('success')
        e.target.reset()
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <>
      <Helmet>
        <title>Kontak — BEM UMM Kabinet Satya Prabaswara</title>
        <meta name="description" content="Hubungi Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang. Sampaikan aspirasi, saran, atau pertanyaan Anda kepada kami." />
      </Helmet>

      <main id="main-content">
        <div className="bg-[#C0272D] pt-24 pb-16" aria-labelledby="kontak-page-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="kontak-page-heading" className="font-display font-extrabold text-white text-3xl md:text-5xl mb-4">
              Hubungi Kami
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ada aspirasi, pertanyaan, atau ajakan kolaborasi? Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Information */}
              <ScrollReveal>
                <div>
                  <h2 className="font-display font-extrabold text-[#1A0808] text-2xl md:text-3xl mb-8">
                    Informasi Kontak
                  </h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFF5F5] rounded-xl flex items-center justify-center shrink-0 border border-[#E5D0D0] text-[#C0272D]">
                        <MapPin size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[#1A0808] text-lg mb-1">Sekretariat BEM UMM</h3>
                        <p className="text-[#7A6060] leading-relaxed">
                          Student Center Lt. 1<br />
                          Kampus III Universitas Muhammadiyah Malang<br />
                          Jl. Raya Tlogomas No. 246, Malang, Jawa Timur
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFF5F5] rounded-xl flex items-center justify-center shrink-0 border border-[#E5D0D0] text-[#C0272D]">
                        <EnvelopeSimple size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[#1A0808] text-lg mb-1">Email Resmi</h3>
                        <a href="mailto:bemu.umm@gmail.com" className="text-[#7A6060] hover:text-[#C0272D] transition-colors">
                          bemu.umm@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFF5F5] rounded-xl flex items-center justify-center shrink-0 border border-[#E5D0D0] text-[#C0272D]">
                        <WhatsappLogo size={24} weight="fill" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[#1A0808] text-lg mb-1">WhatsApp (Humas)</h3>
                        <a href="https://wa.me/6281234967746" target="_blank" rel="noopener noreferrer" className="text-[#7A6060] hover:text-[#C0272D] transition-colors">
                          +62 812-3496-7746
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-[#1A0808] text-lg mb-4">Media Sosial</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/bemumm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#E5D0D0] text-[#7A6060] hover:border-[#C0272D] hover:text-[#C0272D] hover:shadow-sm transition-all"
                      aria-label="Instagram BEM UMM"
                    >
                      <InstagramLogo size={24} weight="fill" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E5D0D0] shadow-sm">
                  <h2 className="font-display font-extrabold text-[#1A0808] text-2xl mb-2">
                    Kirim Pesan
                  </h2>
                  <p className="text-[#7A6060] mb-8">
                    Isi formulir di bawah ini dan kami akan membalas secepat mungkin.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1A0808] mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5D0D0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0272D]/50 focus:border-[#C0272D] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="block text-sm font-semibold text-[#1A0808] mb-2">
                        Email atau WhatsApp
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5D0D0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0272D]/50 focus:border-[#C0272D] transition-colors"
                        placeholder="johndoe@student.umm.ac.id / 0812..."
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#1A0808] mb-2">
                        Subjek Pesan
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5D0D0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0272D]/50 focus:border-[#C0272D] transition-colors"
                      >
                        <option value="Aspirasi">Aspirasi Mahasiswa</option>
                        <option value="Kolaborasi">Kerjasama / Kolaborasi</option>
                        <option value="Pertanyaan">Pertanyaan Umum</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1A0808] mb-2">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5D0D0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0272D]/50 focus:border-[#C0272D] transition-colors resize-none"
                        placeholder="Tuliskan pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-sm text-center font-medium">
                        ✓ Pesan Anda berhasil terkirim. Terima kasih!
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-sm text-center font-medium">
                        ✗ Terjadi kesalahan. Silakan coba lagi nanti.
                      </div>
                    )}
                  </form>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
