import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-lime/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32 flex flex-col items-center gap-8 text-center">
        <span className="text-accent-teal text-xs font-semibold tracking-widest">LET'S WORK TOGETHER</span>
        <h2 className="font-serif text-3xl lg:text-[52px] leading-[1.1] max-w-[700px]">
          Ready to transform your <em className="text-accent-lime">business</em>?
        </h2>
        <p className="text-text-muted text-base leading-relaxed max-w-[520px]">
          Let us help you build the next generation of digital products. From strategy to launch, we are your trusted partner.
        </p>
        <div className="pt-4">
          <Link to="/contact" className="inline-flex items-center gap-2.5 bg-accent-lime text-bg-dark font-semibold text-[15px] px-9 py-4 rounded-full no-underline hover:brightness-110 transition-all">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
