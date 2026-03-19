import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    /* .pen spec: padding:[80,120] gap:24 radial-gradient center */
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #1A2A3A 0%, #1A1E2A 100%)' }} />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 lg:py-20 flex flex-col items-center gap-6 text-center">
        <h2 className="text-text-white text-3xl lg:text-[42px] font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="text-text-muted text-base leading-[1.6] max-w-[600px]">
          Let us help you build the next generation of digital products. From strategy to launch, we are your trusted partner.
        </p>
        <div className="pt-4">
          {/* .pen: rounded-28 padding:[16,36] gap:8 */}
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-lime text-bg-dark font-semibold text-base px-9 py-4 rounded-[28px] no-underline hover:brightness-110 transition">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
