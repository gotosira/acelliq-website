import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'E-commerce']

const stats = [
  { value: '50+', color: 'text-accent-lime', label: 'Projects Delivered' },
  { value: '36%', color: 'text-accent-teal', label: 'Faster Delivery' },
  { value: '87%', color: 'text-accent-pink', label: 'Satisfaction Rate' },
  { value: '24/7', color: 'text-accent-purple', label: 'Support Available' },
]

const testimonials = [
  { quote: 'ACELLIQ delivered beyond our expectations. The platform they built increased our efficiency by 40% in just 3 months.', name: 'Somchai R.', role: 'CEO, RASRI Group', stars: 5 },
  { quote: 'Their attention to detail and understanding of our business needs made all the difference. Truly a world-class team.', name: 'Pradit W.', role: 'VP Digital, Siam Financial', stars: 5 },
  { quote: 'The AI-powered analytics dashboard they created gave us insights we never had before. Game-changing for our operations.', name: 'Anan S.', role: 'Farm Owner, Chiang Mai', stars: 5 },
]

export default function Works() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-8 md:px-20 py-20">
        <span className="bg-bg-card border border-border-subtle rounded-full px-4 py-2 text-accent-lime text-[11px] font-bold tracking-[2px]">
          OUR PORTFOLIO
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center">Our Work</h1>
        <p className="text-text-muted text-lg leading-relaxed text-center max-w-[700px]">
          We craft digital experiences that drive growth and transform businesses. Explore our latest projects across web, mobile, and AI solutions.
        </p>
        <div className="w-20 h-1 bg-accent-lime rounded-sm" />
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-8 md:px-20">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-6 py-3 rounded-lg text-sm font-medium cursor-pointer transition ${
              active === f
                ? 'bg-accent-lime text-bg-dark font-semibold'
                : 'bg-bg-card text-text-white border border-border-subtle hover:bg-bg-card/80'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <section className="px-8 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/works/${p.slug}`} className="rounded-xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col no-underline group">
              <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="p-5 flex flex-col gap-3">
                <span className={`${p.tagColor} text-xs font-semibold px-3 py-1 rounded-lg w-fit`}>{p.category}</span>
                <h3 className="text-lg font-semibold text-text-white">{p.title}</h3>
                <p className="text-text-muted text-[13px] leading-relaxed">{p.description}</p>
                <span className="text-white/40 text-sm font-medium flex items-center gap-1.5 group-hover:text-accent-lime group-hover:gap-3 transition-all mt-2">
                  View Case Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-card">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 py-6 md:py-0 flex-1">
              <span className={`${s.color} text-5xl font-bold tracking-tight`}>{s.value}</span>
              <span className="text-text-muted text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <span className="bg-bg-card border border-border-subtle rounded-full px-4 py-2 text-accent-lime text-[11px] font-bold tracking-[2px]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-bg-card border border-border-subtle rounded-xl p-7 flex flex-col gap-5">
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent-lime fill-accent-lime" />
                ))}
              </div>
              <p className="text-text-muted text-sm leading-relaxed italic">"{t.quote}"</p>
              <div>
                <p className="text-text-white text-sm font-semibold">{t.name}</p>
                <p className="text-text-muted text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
