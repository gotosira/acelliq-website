import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Zap, Target, Expand, CircleCheck, Clock4, Users, Shield, Lock, Eye, Star } from 'lucide-react'
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
  { title: 'Desktop Software', desc: 'Powerful AI-powered desktop applications built for performance and reliability.', image: '/images/generated-1773641564086.png' },
  { title: 'Mobile Application', desc: 'Native and cross-platform mobile apps designed for seamless user experience.', image: '/images/generated-1773641584592.png' },
  { title: 'Web Application', desc: 'Full-stack web applications with modern frameworks and cloud-native architecture.', image: '/images/generated-1773641600167.png' },
]

const securityFeatures = [
  { icon: Shield, text: 'End-to-end encryption & data protection' },
  { icon: Lock, text: 'Offline functionality for desktop applications' },
  { icon: Eye, text: 'Regular security audits & compliance checks' },
]

const clientNames = ['Tops', 'BTS', 'Central', 'LH BANK', "Chester's", 'AXONS', 'Booking Hotel']

const stats = [
  { value: '50+', label: 'Projects Delivered', color: 'text-accent-lime' },
  { value: '36%', label: 'Faster Delivery', color: 'text-accent-teal' },
  { value: '98%', label: 'Satisfaction Rate', color: 'text-accent-lime' },
  { value: '24/7', label: 'Support Available', color: 'text-accent-teal' },
]

export default function Home() {
  return (
    <div className="pt-[72px]">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-lime/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-16 lg:pt-28 pb-16 lg:pb-24">
          {/* Centered headline */}
          <div className="text-center flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-lime" />
              <span className="text-text-muted text-sm font-medium">Digital Product Solutions</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight">
              Turning your <em className="text-accent-lime not-italic">complexity</em>
              <br />into simplicity
            </h1>

            <p className="text-text-muted text-lg leading-relaxed max-w-[540px]">
              We deliver precisely built, AI-powered software solutions with superior speed — transforming every customer's needs into measurable success.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2.5 bg-accent-lime text-bg-dark font-semibold text-[15px] px-8 py-4 rounded-full no-underline hover:brightness-110 transition-all">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/works" className="inline-flex items-center gap-2.5 border border-border-subtle text-text-white font-medium text-[15px] px-8 py-4 rounded-full no-underline hover:border-border-hover hover:bg-white/[0.02] transition-all">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Hero image — full width, centered */}
          <div className="mt-14 lg:mt-20 relative">
            <img src="/images/generated-1773641492288.png" alt="ACELLIQ" className="w-full h-[280px] lg:h-[420px] object-cover rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-bg-dark/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <section className="border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <span className="text-text-dim text-xs font-medium tracking-widest">TRUSTED BY</span>
            {clientNames.map((name) => (
              <span key={name} className="text-text-dim text-sm font-semibold tracking-wide hover:text-text-muted transition-colors">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center flex flex-col items-center gap-2">
              <span className={`${s.color} text-4xl lg:text-5xl font-bold tabular-nums`}>{s.value}</span>
              <span className="text-text-muted text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="bg-bg-card border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="text-center mb-14">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">WHY US</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">
              Fast. Precise. <em className="text-accent-lime">Results.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-bg-dark border border-border-subtle rounded-2xl p-7 flex flex-col gap-4 hover:border-border-hover transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center">
                  <f.icon size={20} className="text-accent-teal" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-accent-lime text-xs font-semibold tracking-widest">SERVICES</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">
              What we <em className="text-accent-teal">build</em>
            </h2>
          </div>
          <Link to="/services" className="text-text-muted text-sm font-medium flex items-center gap-1.5 hover:text-text-white transition-colors no-underline shrink-0">
            All Services <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} to="/services" className="group rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col no-underline hover:border-border-hover transition-all">
              <div className="h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold text-text-white">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                <span className="text-accent-teal text-sm font-medium flex items-center gap-1.5 mt-auto pt-3 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="bg-bg-card border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-accent-lime text-xs font-semibold tracking-widest">PORTFOLIO</span>
              <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] mt-4">
                Selected <em className="text-accent-teal">work</em>
              </h2>
            </div>
            <Link to="/works" className="text-text-muted text-sm font-medium flex items-center gap-1.5 hover:text-text-white transition-colors no-underline shrink-0">
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p) => (
              <Link key={p.slug} to={`/works/${p.slug}`} className="group rounded-2xl bg-bg-dark border border-border-subtle overflow-hidden flex flex-col no-underline hover:border-border-hover transition-all">
                <div className="h-[180px] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="p-6 flex flex-col gap-3">
                  <span className={`${p.tagColor} text-[11px] font-semibold px-2.5 py-1 rounded-md w-fit`}>{p.category}</span>
                  <h3 className="text-base font-semibold text-text-white">{p.title}</h3>
                  <p className="text-text-muted text-[13px] leading-relaxed line-clamp-2">{p.description}</p>
                  {p.cardStats && (
                    <div className="flex gap-4 pt-1">
                      {p.cardStats.map((stat) => (
                        <span key={stat.text} className={`${stat.color} text-xs font-medium`}>{stat.text}</span>
                      ))}
                    </div>
                  )}
                  <span className="text-text-dim text-xs font-medium flex items-center gap-1.5 mt-1 group-hover:text-accent-lime transition-colors">
                    View Project <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECURITY ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img src="/images/generated-1773641621336.png" alt="Security" className="w-full h-[280px] lg:h-[380px] object-cover rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-bg-dark/50 to-transparent" />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">SECURITY</span>
            <h2 className="font-serif text-3xl lg:text-[44px] leading-[1.15]">
              Built with <em className="text-accent-lime">security-first</em> architecture
            </h2>
            <p className="text-text-muted text-base leading-[1.7]">
              Every application undergoes rigorous testing, encryption protocols, and compliance audits to ensure your data and users are protected at all times.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              {securityFeatures.map((sf) => (
                <div key={sf.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-teal/10 flex items-center justify-center shrink-0">
                    <sf.icon size={16} className="text-accent-teal" />
                  </div>
                  <span className="text-text-muted text-sm leading-relaxed pt-2">{sf.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
