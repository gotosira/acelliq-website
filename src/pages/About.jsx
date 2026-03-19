import { Target, Eye, Heart } from 'lucide-react'
import CTASection from '../components/CTASection'

const mvvCards = [
  { icon: Target, iconBg: 'bg-accent-purple', title: 'Our Mission', desc: 'To empower businesses with cutting-edge digital solutions that accelerate growth, streamline operations, and create lasting competitive advantages in an ever-evolving market.' },
  { icon: Eye, iconBg: 'bg-accent-teal', title: 'Our Vision', desc: 'To be the global benchmark for digital product innovation — where every solution we deliver sets new standards of excellence, usability, and impact.' },
  { icon: Heart, iconBg: 'bg-accent-lime', title: 'Our Values', desc: 'Integrity, innovation, and collaboration drive everything we do. We believe in transparent partnerships, relentless curiosity, and delivering measurable results for every client.' },
]

const team = [
  { name: 'Marcus Chen', role: 'CEO & Founder', color: 'text-accent-lime', bio: '15+ years in tech leadership. Previously VP of Product at a Fortune 500.' },
  { name: 'Sarah Nakamura', role: 'CTO', color: 'text-accent-teal', bio: 'Ex-Google engineer. Architect of scalable systems serving millions of users globally.' },
  { name: 'David Park', role: 'Design Director', color: 'text-accent-teal', bio: 'Award-winning designer with a passion for crafting intuitive, beautiful digital experiences.' },
  { name: 'Lisa Wong', role: 'Head of AI', color: 'text-accent-pink', bio: 'PhD in Machine Learning. Built AI systems processing 10M+ data points daily.' },
  { name: 'James Rivera', role: 'Lead Engineer', color: 'text-accent-teal', bio: 'Full-stack architect with deep expertise in cloud-native, event-driven systems.' },
  { name: 'Mia Tanaka', role: 'UX Lead', color: 'text-accent-lime', bio: 'Human-centered design advocate. Led UX for products used by 5M+ people worldwide.' },
]

const stats = [
  { value: '200+', color: 'text-accent-lime', label: 'Projects Delivered' },
  { value: '45+', color: 'text-accent-teal', label: 'Team Members' },
  { value: '12+', color: 'text-accent-teal', label: 'Countries Served' },
  { value: '98%', color: 'text-text-white', label: 'Client Satisfaction' },
]

const milestones = [
  { year: '2020', title: 'Founded' },
  { year: '2022', title: '50+ Projects' },
  { year: '2024', title: 'Global Reach' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-8">
          <span className="text-accent-teal text-xs font-semibold tracking-widest">
            WHO WE ARE
          </span>
          <h1 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">About <em className="text-accent-lime">ACELLIQ</em></h1>
          <p className="text-text-muted text-lg leading-[1.7] text-center max-w-[800px]">
            We are a forward-thinking digital product solutions company dedicated to transforming ambitious ideas into powerful, scalable technology. Since our founding, we've partnered with startups and enterprises alike to build products that drive real business growth.
          </p>
          <div className="rounded-2xl h-[250px] sm:h-[350px] lg:h-[400px] w-full max-w-[900px] bg-bg-card border border-border-subtle" />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">OUR FOUNDATION</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">Mission, Vision & <em className="text-accent-lime">Values</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {mvvCards.map((card) => (
              <div key={card.title} className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-4 hover:border-border-hover transition">
                <div className={`${card.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <card.icon size={24} className={card.iconBg === 'bg-accent-purple' ? 'text-text-white' : 'text-bg-dark'} />
                </div>
                <h3 className="text-[22px] font-bold">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bg-card border-y border-border-subtle py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">THE TEAM</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">Meet the <em className="text-accent-lime">Minds</em> Behind ACELLIQ</h2>
            <p className="text-text-muted text-base leading-relaxed text-center max-w-[600px]">
              A diverse team of strategists, designers, and engineers united by a passion for building exceptional digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-4 pb-6">
                <div className="rounded-2xl h-[280px] w-full bg-bg-elevated" />
                <h3 className="text-lg font-bold text-center">{m.name}</h3>
                <span className={`${m.color} text-[13px] font-semibold text-center`}>{m.role}</span>
                <p className="text-text-muted text-[13px] leading-relaxed text-center">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">OUR JOURNEY</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">From Vision to <em className="text-accent-teal">Global Impact</em></h2>
          </div>
          <div className="flex items-center gap-0 w-full justify-center">
            {milestones.map((ms, i) => (
              <div key={ms.year} className="flex items-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-accent-lime text-3xl font-bold">{ms.year}</span>
                  <span className="text-text-muted text-sm">{ms.title}</span>
                </div>
                {i < milestones.length - 1 && <div className="h-0.5 w-12 lg:w-20 bg-border-subtle mx-6 lg:mx-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-card border-y border-border-subtle py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col sm:flex-row gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex-1 flex flex-col items-center gap-2 py-4 sm:py-0 ${i > 0 ? 'sm:border-l border-border-subtle' : ''}`}>
              <span className={`${s.color} text-5xl font-bold`}>{s.value}</span>
              <span className="text-text-muted text-sm font-medium text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
