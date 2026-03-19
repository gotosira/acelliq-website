import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.detail) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-serif text-4xl lg:text-[52px] leading-[1.1]">Project Not Found</h1>
        <p className="text-text-muted text-center">This project detail page is coming soon.</p>
        <Link to="/works" className="bg-accent-lime text-bg-dark font-semibold px-8 py-3 rounded-full no-underline hover:brightness-110 transition">
          Back to Works
        </Link>
      </div>
    )
  }

  const d = project.detail

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col gap-8">
          <div className="flex items-center gap-2 text-[13px]">
            <Link to="/works" className="text-text-muted no-underline hover:text-text-white transition">Works</Link>
            <span className="text-border-subtle">/</span>
            <span className="text-text-white font-medium">{d.heroTitle}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-4xl lg:text-[52px] leading-[1.1]">{d.heroTitle}</h1>
            <span className="text-text-muted text-sm">{d.heroCategory}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <img
          src={d.heroImage}
          alt={d.heroTitle}
          className="rounded-2xl h-[250px] sm:h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">OVERVIEW</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1]">The Challenge & <em className="text-accent-lime">Solution</em></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-accent-pink">The Challenge</h3>
              <p className="text-text-muted text-sm leading-relaxed">{d.challenge}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-accent-teal">Our Solution</h3>
              <p className="text-text-muted text-sm leading-relaxed">{d.solution}</p>
            </div>
          </div>
          <div className="bg-bg-card border border-border-subtle rounded-2xl grid grid-cols-2 lg:grid-cols-4">
            {d.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 py-8 px-6">
                <span className={`${s.color} text-3xl lg:text-4xl font-bold`}>{s.value}</span>
                <span className="text-text-muted text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg-card border-y border-border-subtle py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">KEY FEATURES</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">What We <em className="text-accent-lime">Delivered</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features.map((f) => (
              <div key={f.title} className="bg-bg-elevated border border-border-subtle rounded-2xl p-8 flex flex-col gap-4 hover:border-border-hover transition">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-accent-teal text-xs font-semibold tracking-widest">TECH STACK</span>
            <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">Technologies <em className="text-accent-teal">Used</em></h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {d.techStack.map((tech) => (
              <div key={tech} className="bg-bg-card rounded-2xl px-6 py-4 text-text-white text-sm font-medium border border-border-subtle hover:border-border-hover transition">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg-card border-y border-border-subtle py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
          <span className="text-accent-teal text-xs font-semibold tracking-widest">CLIENT FEEDBACK</span>
          <p className="text-text-white text-lg lg:text-[22px] font-medium leading-relaxed text-center max-w-[800px] italic">
            {d.testimonial.quote}
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-text-white text-base font-semibold">{d.testimonial.name}</span>
            <span className="text-text-muted text-sm">{d.testimonial.role}</span>
          </div>
        </div>
      </section>

      {/* Next Project */}
      {d.nextProject && (
        <Link to={`/works/${d.nextProject.slug}`} className="bg-bg-elevated border-y border-border-subtle no-underline block hover:bg-bg-card transition">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-32 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-accent-teal text-xs font-semibold tracking-widest">NEXT PROJECT</span>
              <span className="font-serif text-2xl lg:text-[28px] text-text-white">{d.nextProject.title}</span>
              <span className="text-text-muted text-sm">{d.nextProject.category}</span>
            </div>
            <div className="bg-accent-lime rounded-full p-4">
              <ArrowRight size={24} className="text-bg-dark" />
            </div>
          </div>
        </Link>
      )}

      <CTASection />
    </div>
  )
}
