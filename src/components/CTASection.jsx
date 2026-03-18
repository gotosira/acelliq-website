import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1A2A3A_0%,#1A1E2A_100%)]" />
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-24 flex flex-col items-center gap-6 text-center">
        <h2 className="text-text-white text-3xl lg:text-[42px] font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="text-text-muted text-base leading-relaxed max-w-[600px]">
          Let us help you build the next generation of digital products. From strategy to launch, we are your trusted partner.
        </p>
        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-lime text-bg-dark font-semibold px-9 py-4 rounded-[28px] no-underline hover:brightness-110 transition"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
