import { useState } from 'react'
import { Code, Brain, Smartphone, Cloud, Palette, BarChart3, ChevronDown } from 'lucide-react'
import CTASection from '../components/CTASection'

const serviceCards = [
  { icon: Code, iconBg: 'bg-accent-purple', title: 'Custom Software\nDevelopment', desc: 'Bespoke software solutions engineered to solve your unique business challenges with scalable architecture.' },
  { icon: Brain, iconBg: 'bg-accent-teal', title: 'AI & Machine\nLearning', desc: 'Intelligent systems powered by machine learning that automate processes and unlock data-driven insights.' },
  { icon: Smartphone, iconBg: 'bg-accent-lime', title: 'Mobile App\nDevelopment', desc: 'Native and cross-platform mobile applications that deliver seamless experiences on every device.' },
  { icon: Cloud, iconBg: 'bg-gradient-to-br from-accent-teal to-accent-purple', title: 'Cloud\nSolutions', desc: 'Scalable cloud infrastructure and migration strategies that optimize performance and reduce operational costs.' },
  { icon: Palette, iconBg: 'bg-accent-pink', title: 'UI/UX\nDesign', desc: 'Human-centered design that creates intuitive interfaces and delightful user experiences that drive engagement.' },
  { icon: BarChart3, iconBg: 'bg-accent-lime', title: 'Data\nAnalytics', desc: 'Transform raw data into actionable intelligence with advanced analytics, dashboards, and reporting systems.' },
]

const processSteps = [
  { num: '01', bg: 'bg-accent-purple', title: 'Discovery', desc: 'We analyze your needs, research the market, and define project scope and technical requirements.' },
  { num: '02', bg: 'bg-accent-teal', title: 'Design', desc: 'We create wireframes, prototypes, and polished UI designs aligned with your brand and user needs.' },
  { num: '03', bg: 'bg-accent-lime', title: 'Development', desc: 'Our engineers build robust, scalable solutions using modern technologies and agile methodology.' },
  { num: '04', bg: 'bg-accent-pink', title: 'Delivery', desc: 'We deploy, monitor, and optimize your product with ongoing support and continuous improvement.' },
]

const techStack = ['React', 'Node.js', 'Python', 'AWS', 'Flutter', 'TypeScript', 'PostgreSQL', 'Docker', 'TensorFlow', 'Firebase', 'GraphQL', 'Kubernetes']

const faqs = [
  { q: 'What types of software do you develop?', a: 'We develop custom web applications, mobile apps (iOS & Android), desktop software, AI/ML solutions, cloud infrastructure, and enterprise platforms. Our expertise spans across industries including fintech, healthtech, e-commerce, and more.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity. A typical MVP takes 8-12 weeks, while enterprise solutions may take 4-6 months. We provide detailed timeline estimates during the discovery phase.' },
  { q: 'Do you offer ongoing maintenance and support?', a: 'Yes, we offer comprehensive post-launch support packages including bug fixes, performance monitoring, security updates, and feature enhancements. Our SLA guarantees 99.9% uptime.' },
  { q: 'What is your development methodology?', a: 'We follow Agile/Scrum methodology with 2-week sprints, daily standups, and regular demo sessions. This ensures transparency, rapid iteration, and alignment with your business goals.' },
  { q: 'Can you work with our existing tech stack?', a: 'Absolutely. We are technology-agnostic and can integrate with your existing systems. Our team has experience with a wide range of technologies, frameworks, and cloud platforms.' },
  { q: 'How do you handle project communication?', a: 'We assign a dedicated project manager and use tools like Slack, Jira, and Notion for real-time communication. You will receive weekly progress reports and have access to our project dashboard.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-8 md:px-20 py-20 md:py-[100px]">
        <div className="flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-5 py-2">
          <div className="w-2 h-2 rounded-full bg-accent-lime" />
          <span className="text-accent-lime text-[11px] font-bold tracking-[2px]">DIGITAL PRODUCT SOLUTIONS</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center">Our Services</h1>
        <p className="text-text-muted text-lg leading-relaxed text-center max-w-[700px]">
          We craft cutting-edge digital solutions that transform businesses.{'\n'}From concept to deployment, our expert team delivers excellence.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-lime to-accent-teal rounded-sm" />
      </section>

      {/* Services Overview */}
      <section className="px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-accent-teal text-[11px] font-bold tracking-[2px]">WHAT WE DO</span>
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight">Services Overview</h2>
          <p className="text-text-muted text-base">End-to-end digital solutions tailored to your business needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div key={card.title} className="bg-bg-card border border-border-subtle rounded-xl p-8 flex flex-col gap-5">
              <div className={`${card.iconBg} w-12 h-12 rounded-[10px] flex items-center justify-center`}>
                <card.icon size={24} className={card.iconBg.includes('purple') || card.iconBg.includes('gradient') ? 'text-text-white' : 'text-bg-dark'} />
              </div>
              <h3 className="text-xl font-bold leading-[1.3] whitespace-pre-line">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
              <span className="text-accent-lime text-[13px] font-semibold cursor-pointer hover:underline">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-card px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-accent-lime text-[11px] font-bold tracking-[2px]">HOW WE WORK</span>
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight">Our Process</h2>
          <p className="text-text-muted text-base">A proven methodology that ensures quality delivery at every stage</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="flex flex-col items-center gap-5 px-4">
              <div className={`${step.bg} w-16 h-16 rounded-full flex items-center justify-center`}>
                <span className={`text-2xl font-extrabold ${step.bg === 'bg-accent-lime' || step.bg === 'bg-accent-teal' ? 'text-bg-dark' : 'text-text-white'}`}>{step.num}</span>
              </div>
              <div className="w-0.5 h-6 bg-border-subtle" />
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-accent-purple text-[11px] font-bold tracking-[2px]">TECHNOLOGIES</span>
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight">Our Tech Stack</h2>
          <p className="text-text-muted text-base">We leverage the latest technologies to build future-proof solutions</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech) => (
            <div key={tech} className="bg-bg-card rounded-xl px-6 py-4 text-text-white text-sm font-medium border border-border-subtle">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-card px-8 md:px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <span className="text-accent-teal text-[11px] font-bold tracking-[2px]">FAQ</span>
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-center">Frequently Asked Questions</h2>
          <p className="text-text-muted text-base text-center">Everything you need to know about our services and process</p>
        </div>
        <div className="flex flex-col gap-0 w-full">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex flex-col border-b border-border-subtle bg-transparent text-left cursor-pointer"
            >
              <div className="flex items-center justify-between py-6 px-0">
                <span className="text-text-white text-base font-medium">{faq.q}</span>
                <ChevronDown size={20} className={`text-text-muted shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === i && (
                <p className="text-text-muted text-sm leading-relaxed pb-6">{faq.a}</p>
              )}
            </button>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
