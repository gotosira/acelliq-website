import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import CTASection from '../components/CTASection'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.detail) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-6 px-8">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-text-muted text-center">This project detail page is coming soon.</p>
        <Link to="/works" className="bg-accent-lime text-bg-dark font-semibold px-8 py-3 rounded-3xl no-underline hover:brightness-110 transition">
          Back to Works
        </Link>
      </div>
    )
  }

  const d = project.detail

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="px-8 md:px-20 py-15 flex flex-col gap-8">
        <div className="flex items-center gap-2 text-[13px]">
          <Link to="/works" className="text-text-muted no-underline hover:text-text-white transition">Works</Link>
          <span className="text-border-subtle">/</span>
          <span className="text-text-white font-medium">{d.heroTitle}</span>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-[42px] font-bold leading-tight">{d.heroTitle}</h1>
          <span className="text-text-muted text-sm">{d.heroCategory}</span>
        </div>
      </section>

      {/* Hero Image */}
      <div className="px-8 md:px-20">
        <div className="rounded-2xl h-[300px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${d.heroImage})` }} />
      </div>

      {/* Overview */}
      <section className="px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-accent-teal text-xs font-semibold tracking-[3px]">OVERVIEW</span>
          <h2 className="text-3xl md:text-4xl font-bold">The Challenge & Solution</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-accent-pink">The Challenge</h3>
            <p className="text-text-muted text-sm leading-relaxed">{d.challenge}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-accent-teal">Our Solution</h3>
            <p className="text-text-muted text-sm leading-relaxed">{d.solution}</p>
          </div>
        </div>
        {/* Stats Bar */}
        <div className="bg-bg-card rounded-2xl grid grid-cols-2 md:grid-cols-4">
          {d.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 py-8 px-6">
              <span className={`${s.color} text-3xl md:text-4xl font-bold`}>{s.value}</span>
              <span className="text-text-muted text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-bg-dark to-bg-deeper px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-accent-lime text-xs font-semibold tracking-[3px]">KEY FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">What We Delivered</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.features.map((f) => (
            <div key={f.title} className="bg-bg-card rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gradient-to-b from-bg-deeper to-bg-dark px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-accent-lime text-xs font-semibold tracking-[3px]">TECH STACK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Technologies Used</h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {d.techStack.map((tech) => (
            <div key={tech} className="bg-bg-card rounded-xl px-6 py-4 text-text-white text-sm font-medium border border-border-subtle">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-8 md:px-20 py-20 flex flex-col items-center gap-12">
        <span className="text-accent-teal text-xs font-semibold tracking-[3px]">CLIENT FEEDBACK</span>
        <p className="text-text-white text-lg md:text-[22px] font-medium leading-relaxed text-center max-w-[800px] italic">
          {d.testimonial.quote}
        </p>
        <div className="flex flex-col items-center gap-1">
          <span className="text-text-white text-base font-semibold">{d.testimonial.name}</span>
          <span className="text-text-muted text-sm">{d.testimonial.role}</span>
        </div>
      </section>

      {/* Next Project */}
      {d.nextProject && (
        <Link to={`/works/${d.nextProject.slug}`} className="bg-bg-card no-underline block">
          <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-15 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-text-muted text-[11px] font-semibold tracking-[2px]">NEXT PROJECT</span>
              <span className="text-text-white text-2xl md:text-[28px] font-bold">{d.nextProject.title}</span>
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
