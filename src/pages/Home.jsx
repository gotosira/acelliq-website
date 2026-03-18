import { Link } from 'react-router-dom'
import { Zap, Target, Expand, CircleCheck, Clock4, Users, ArrowRight, Shield, Lock, Eye } from 'lucide-react'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

const features = [
  { icon: Zap, color: 'text-accent-teal', bgFrom: '#12F2CD25', bgTo: '#12F2CD10', borderFrom: '#12F2CD40', title: 'Rapid Delivery', desc: 'Ship faster than competitors — weeks, not months' },
  { icon: Target, color: 'text-accent-lime', bgFrom: '#F4FF0125', bgTo: '#F4FF0110', borderFrom: '#F4FF0140', title: 'Precision Execution', desc: 'Data-driven, no guesswork, exactly what you need' },
  { icon: Expand, color: 'text-accent-pink', bgFrom: '#ff5ed126', bgTo: '#EA10AC10', borderFrom: '#EA10AC40', title: 'Smart Scalability', desc: 'MVP to enterprise — future-proofed from day one' },
  { icon: CircleCheck, color: 'text-accent-purple', bgFrom: '#b983ff26', bgTo: '#690BE510', borderFrom: '#b780ff40', title: 'Proven Results', desc: 'Track record of measurable success' },
  { icon: Clock4, color: 'text-accent-teal', bgFrom: '#12F2CD25', bgTo: '#12F2CD10', borderFrom: '#12F2CD40', title: 'Always Ready', desc: 'On standby 24/7, from kickoff to beyond launch' },
  { icon: Users, color: 'text-accent-lime', bgFrom: '#F4FF0125', bgTo: '#F4FF0110', borderFrom: '#F4FF0140', title: 'Ownership', desc: 'Strategy → Design → Dev → Launch, one team' },
]

const services = [
  { title: 'Desktop Software', desc: 'Powerful AI-powered desktop applications built for performance and reliability.', image: '/images/generated-1773641564086.png', linkColor: 'text-accent-teal' },
  { title: 'Mobile Application', desc: 'Native and cross-platform mobile apps designed for seamless user experience.', image: '/images/generated-1773641584592.png', linkColor: 'text-accent-lime' },
  { title: 'Web Application', desc: 'Full-stack web applications with modern frameworks and cloud-native architecture.', image: '/images/generated-1773641600167.png', linkColor: 'text-accent-purple' },
]

const securityFeatures = [
  { icon: Shield, text: 'End-to-end encryption & data protection' },
  { icon: Lock, text: 'Offline functionality for desktop applications' },
  { icon: Eye, text: 'Regular security audits & compliance checks' },
]

const clientLogos = [
  ['Tops', 'BTS', 'Central', 'LH BANK'],
  ["Chester's", 'AXONS', 'Booking Hotel', 'Others'],
]

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero — two column */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <span className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-accent-teal text-sm font-medium w-fit tracking-[1px]">
              Digital Product Solutions
            </span>
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.15]">Turning Your</h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.15] text-accent-lime">Business Complexity</h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.15]">Into Simplicity</h1>
            </div>
            <p className="text-text-muted text-base leading-[1.7] max-w-[500px]">
              The digital product solutions, delivering precisely built, AI-powered software solutions with superior speed, transforming every customer's needs into measurable success.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-lime text-bg-dark font-semibold px-9 py-4 rounded-3xl no-underline hover:brightness-110 transition">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/works" className="inline-flex items-center gap-2 border border-border-subtle text-text-white font-medium px-9 py-4 rounded-3xl no-underline hover:bg-white/5 transition">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[500px] shrink-0">
            <img
              src="/images/generated-1773641492288.png"
              alt="ACELLIQ Product"
              className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center gap-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">Fast. Precise. Results.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{
                  background: 'linear-gradient(180deg, #232838 0%, #1E2433 100%)',
                  borderTop: `1px solid ${f.borderFrom}`,
                  borderLeft: '1px solid transparent',
                  borderRight: '1px solid transparent',
                  borderBottom: '1px solid transparent',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(180deg, ${f.bgFrom} 0%, ${f.bgTo} 100%)` }}
                >
                  <f.icon size={28} className={f.color} />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-text-dim text-sm leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-bg-dark to-bg-deeper py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center gap-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col h-[380px]">
                <div
                  className="h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/services" className={`${s.linkColor} text-sm font-medium no-underline mt-auto flex items-center gap-1.5 hover:gap-3 transition-all`}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center gap-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">Successful Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((p) => (
              <Link key={p.slug} to={`/works/${p.slug}`} className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col no-underline group">
                <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="p-6 flex flex-col gap-3">
                  <span className={`${p.tagColor} text-xs font-semibold px-3 py-1 rounded-lg w-fit`}>{p.category}</span>
                  <h3 className="text-lg font-semibold text-text-white">{p.title}</h3>
                  <p className="text-text-muted text-[13px] leading-relaxed">{p.description}</p>
                  {p.cardStats && (
                    <div className="flex gap-5 pt-2">
                      {p.cardStats.map((stat) => (
                        <span key={stat.text} className={`${stat.color} text-xs font-semibold`}>{stat.text}</span>
                      ))}
                    </div>
                  )}
                  <span className="bg-white/10 border border-white/15 rounded-[20px] px-4 py-2 text-white text-xs font-medium flex items-center gap-1.5 w-fit mt-2 group-hover:bg-white/20 transition">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <img
              src="/images/generated-1773641621336.png"
              alt="Security"
              className="rounded-[20px] h-[280px] sm:h-[350px] lg:h-[400px] w-full lg:w-[560px] shrink-0 object-cover"
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-[42px] font-bold leading-tight">Security Software</h2>
              <p className="text-text-muted text-base leading-[1.7]">
                We build with security-first architecture. Every application undergoes rigorous testing, encryption protocols, and compliance audits to ensure your data and users are protected at all times.
              </p>
              <div className="flex flex-col gap-4">
                {securityFeatures.map((sf) => (
                  <div key={sf.text} className="flex items-center gap-3">
                    <sf.icon size={20} className="text-accent-teal shrink-0" />
                    <span className="text-text-muted text-sm">{sf.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center gap-9">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Trusted Clients</h2>
          {clientLogos.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {row.map((name) => (
                <div key={name} className="rounded-xl bg-white/5 border border-white/10 h-[70px] w-[160px] lg:w-[180px] flex items-center justify-center">
                  <span className="text-white/60 text-base lg:text-xl font-bold tracking-[2px]">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
