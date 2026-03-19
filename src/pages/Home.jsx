import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Zap, Target, Expand, CircleCheck, Clock4, Users, Shield, Lock, Eye } from 'lucide-react'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const features = [
  { icon: Zap, title: 'Rapid Delivery', desc: 'Ship faster than competitors — weeks, not months.' },
  { icon: Target, title: 'Precision Execution', desc: 'Data-driven, no guesswork, exactly what you need.' },
  { icon: Expand, title: 'Smart Scalability', desc: 'MVP to enterprise — future-proofed from day one.' },
  { icon: CircleCheck, title: 'Proven Results', desc: 'Track record of measurable success.' },
  { icon: Clock4, title: 'Always Ready', desc: 'On standby 24/7, from kickoff to beyond launch.' },
  { icon: Users, title: 'Ownership', desc: 'Strategy → Design → Dev → Launch, one team.' },
]

const services = [
  { num: '01', title: 'Desktop Software', desc: 'Powerful AI-powered desktop applications built for performance and reliability.', image: '/images/generated-1773641564086.png' },
  { num: '02', title: 'Mobile Application', desc: 'Native and cross-platform mobile apps designed for seamless user experience.', image: '/images/generated-1773641584592.png' },
  { num: '03', title: 'Web Application', desc: 'Full-stack web applications with modern frameworks and cloud-native architecture.', image: '/images/generated-1773641600167.png' },
]

const securityFeatures = [
  { icon: Shield, text: 'End-to-end encryption & data protection' },
  { icon: Lock, text: 'Offline functionality for desktop applications' },
  { icon: Eye, text: 'Regular security audits & compliance checks' },
]

const clientNames = ['Tops', 'BTS', 'Central', 'LH BANK', "Chester's", 'AXONS', 'Booking Hotel']

export default function Home() {
  return (
    <div className="pt-[72px]">

      {/* ═══ HERO — editorial, asymmetric ═══ */}
      <section className="relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-16 lg:pt-28 pb-20 lg:pb-36">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left — large editorial type */}
            <div className="flex-1 flex flex-col gap-8 lg:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-text-muted text-sm font-medium">Digital Product Solutions</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[80px] leading-[1.05] tracking-tight">
                Turning your{' '}
                <em className="text-accent-lime not-italic font-serif">complexity</em>
                <br />into simplicity
              </h1>

              <p className="text-text-muted text-lg leading-relaxed max-w-[480px]">
                We deliver precisely built, AI-powered software solutions with superior speed — transforming every customer's needs into measurable success.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact" className="inline-flex items-center gap-2.5 bg-accent-lime text-bg-dark font-semibold text-[15px] px-8 py-4 rounded-full no-underline hover:brightness-110 transition-all">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <Link to="/works" className="inline-flex items-center gap-2.5 border border-border-subtle text-text-white font-medium text-[15px] px-8 py-4 rounded-full no-underline hover:border-border-hover hover:bg-white/[0.02] transition-all">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right — hero image with editorial overlay */}
            <div className="w-full lg:w-[520px] shrink-0 relative">
              <img src="/images/generated-1773641492288.png" alt="ACELLIQ" className="w-full h-[320px] lg:h-[460px] object-cover rounded-2xl" />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-bg-elevated border border-border-subtle rounded-xl px-5 py-4 backdrop-blur-sm">
                <span className="text-accent-lime text-2xl font-bold tabular-nums">50+</span>
                <p className="text-text-muted text-xs mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Trusted by — inline, minimal */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-20 lg:mt-28 pt-10 border-t border-border-subtle">
            <span className="text-text-dim text-xs font-medium tracking-widest">TRUSTED BY</span>
            {clientNames.map((name) => (
              <span key={name} className="text-text-dim text-sm font-medium hover:text-text-muted transition-colors">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — minimal grid ═══ */}
      <section className="bg-dot-grid">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left — editorial heading */}
            <div className="lg:w-[400px] shrink-0">
              <span className="text-accent-teal text-xs font-semibold tracking-widest">WHY US</span>
              <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">
                Fast. Precise.<br /><em className="text-accent-lime">Results.</em>
              </h2>
            </div>

            {/* Right — feature grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-subtle rounded-2xl overflow-hidden">
              {features.map((f) => (
                <div key={f.title} className="bg-bg-dark p-8 flex flex-col gap-4 hover:bg-bg-card transition-colors">
                  <f.icon size={22} className="text-accent-teal" />
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — editorial numbered cards ═══ */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <div className="flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div>
                <span className="text-accent-lime text-xs font-semibold tracking-widest">SERVICES</span>
                <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">What we <em className="text-accent-teal">build</em></h2>
              </div>
              <Link to="/services" className="text-text-muted text-sm font-medium flex items-center gap-1.5 hover:text-text-white transition-colors no-underline">
                All Services <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Service cards — large, editorial */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s.num} to="/services" className="group rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col no-underline hover:border-border-hover transition-all">
                  <div className="h-[220px] bg-cover bg-center relative" style={{ backgroundImage: `url(${s.image})` }}>
                    <span className="absolute top-5 left-5 text-white/30 font-serif text-[56px] leading-none italic">{s.num}</span>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-semibold text-text-white">{s.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                    <span className="text-accent-teal text-sm font-medium flex items-center gap-1.5 mt-auto pt-4 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO — magazine layout ═══ */}
      <section className="bg-bg-card border-y border-border-subtle">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <div className="flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div>
                <span className="text-accent-lime text-xs font-semibold tracking-widest">PORTFOLIO</span>
                <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">Selected <em className="text-accent-teal">work</em></h2>
              </div>
              <Link to="/works" className="text-text-muted text-sm font-medium flex items-center gap-1.5 hover:text-text-white transition-colors no-underline">
                View All <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Project grid — first row 2 cols, second row 3 cols for visual variety */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((p) => (
                <Link key={p.slug} to={`/works/${p.slug}`} className="group rounded-2xl bg-bg-dark border border-border-subtle overflow-hidden flex flex-col no-underline hover:border-border-hover transition-all">
                  <div className="h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`${p.tagColor} text-[11px] font-semibold px-2.5 py-1 rounded-md`}>{p.category}</span>
                    </div>
                    <h3 className="text-base font-semibold text-text-white">{p.title}</h3>
                    <p className="text-text-muted text-[13px] leading-relaxed line-clamp-2">{p.description}</p>
                    {p.cardStats && (
                      <div className="flex gap-4 pt-1">
                        {p.cardStats.map((stat) => (
                          <span key={stat.text} className={`${stat.color} text-xs font-medium`}>{stat.text}</span>
                        ))}
                      </div>
                    )}
                    <span className="text-text-dim text-xs font-medium flex items-center gap-1.5 mt-2 group-hover:text-accent-lime transition-colors">
                      View Project <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECURITY — asymmetric editorial ═══ */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-[520px] shrink-0 relative">
              <img src="/images/generated-1773641621336.png" alt="Security" className="w-full h-[300px] lg:h-[420px] object-cover rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-bg-dark/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-accent-teal text-xs font-semibold tracking-widest">SECURITY</span>
              <h2 className="font-serif text-3xl lg:text-[44px] leading-[1.15]">
                Built with <em className="text-accent-lime">security-first</em> architecture
              </h2>
              <p className="text-text-muted text-base leading-[1.7]">
                Every application undergoes rigorous testing, encryption protocols, and compliance audits to ensure your data and users are protected at all times.
              </p>
              <div className="flex flex-col gap-5 pt-2">
                {securityFeatures.map((sf) => (
                  <div key={sf.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <sf.icon size={16} className="text-accent-teal" />
                    </div>
                    <span className="text-text-muted text-sm leading-relaxed">{sf.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
