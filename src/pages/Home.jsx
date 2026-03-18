import { Link } from 'react-router-dom'
import { Zap, Target, Expand, CircleCheck, Clock4, Users, ArrowRight, Shield, Lock, ServerCog } from 'lucide-react'
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
  { title: 'Desktop Software', desc: 'Powerful AI-powered desktop applications built for performance and reliability.' },
  { title: 'Mobile Application', desc: 'Native and cross-platform mobile apps designed for seamless user experience.' },
  { title: 'Web Application', desc: 'Full-stack web applications with modern frameworks and cloud-native architecture.' },
]

const securityFeatures = [
  { icon: Shield, text: 'End-to-end encryption for all data in transit and at rest' },
  { icon: Lock, text: 'SOC 2 Type II compliant infrastructure and processes' },
  { icon: ServerCog, text: 'Automated security scanning and penetration testing' },
]

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="flex flex-col items-center gap-10 px-8 md:px-20 py-16 md:py-20">
        <div className="flex flex-col items-center gap-8">
          <span className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-text-white text-sm font-medium">
            Digital Product Solutions
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-center max-w-[900px]">
            Turning Your Business{'\n'}Complexity Into Simplicity
          </h1>
          <p className="text-text-muted text-lg leading-relaxed text-center max-w-[700px]">
            We deliver precisely built, AI-powered software solutions with superior speed — transforming every customer's needs into measurable success.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-lime text-bg-dark font-semibold px-9 py-4 rounded-3xl no-underline hover:brightness-110 transition">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/works" className="inline-flex items-center gap-2 border border-border-subtle text-text-white font-medium px-9 py-4 rounded-3xl no-underline hover:bg-white/5 transition">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 pt-5 w-full">
          <span className="text-white/30 text-[11px] font-semibold tracking-[3px]">TRUSTED BY</span>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white/5 rounded-lg h-8 w-[100px] flex items-center justify-center">
              <span className="text-white/30 text-xs">Client {i}</span>
            </div>
          ))}
        </div>

        {/* Product Preview */}
        <div className="rounded-2xl border border-border-subtle h-[300px] md:h-[420px] w-full bg-bg-card flex items-center justify-center">
          <span className="text-white/20 text-base font-medium">Product Dashboard Preview</span>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Fast. Precise. Results.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-bg-dark to-bg-deeper px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col h-[380px]">
              <div className="h-[200px] bg-bg-card/50" />
              <div className="flex-1 p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                <Link to="/services" className="text-accent-teal text-sm font-medium no-underline mt-auto flex items-center gap-1.5 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Successful Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {projects.map((p) => (
            <Link key={p.slug} to={`/works/${p.slug}`} className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col no-underline group">
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

      {/* Security */}
      <section className="px-8 md:px-20 py-20">
        <div className="flex flex-col md:flex-row gap-15 items-center">
          <div className="rounded-2xl h-[300px] md:h-[400px] w-full md:w-[560px] shrink-0 bg-bg-card" />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight">Security Software</h2>
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
      </section>

      {/* Trusted Clients */}
      <section className="px-8 md:px-20 py-15 flex flex-col items-center gap-9">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Trusted Clients</h2>
        {[0, 1].map((row) => (
          <div key={row} className="flex flex-wrap justify-center gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 h-[70px] w-[180px] flex items-center justify-center">
                <span className="text-white/20 text-sm">Logo {row * 4 + i}</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      <CTASection />
    </div>
  )
}
