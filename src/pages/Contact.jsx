import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ChevronDown, Twitter, Linkedin, Github } from 'lucide-react'
import CTASection from '../components/CTASection'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@acelliq.com' },
  { icon: Phone, label: 'Phone', value: '+66 2 XXX XXXX' },
  { icon: MapPin, label: 'Location', value: 'Bangkok, Thailand' },
]

const faqs = [
  { q: 'How quickly can you start a project?', a: 'We can typically kick off within 1-2 weeks after initial consultation and scope alignment.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price projects, time & materials, and dedicated team models depending on your needs and project scope.' },
  { q: 'Do you sign NDAs?', a: 'Absolutely. We sign NDAs before any detailed discussions and treat all client information with strict confidentiality.' },
  { q: 'Can you work in our timezone?', a: 'Yes, we have flexible working hours and can align with your timezone for real-time collaboration.' },
  { q: 'What happens after the project is delivered?', a: 'We offer ongoing maintenance, support packages, and can continue as your long-term technology partner.' },
  { q: 'Do you provide design services as well?', a: 'Yes, we have a full in-house design team covering UX research, UI design, prototyping, and design systems.' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-6">
          <span className="text-accent-teal text-xs font-semibold tracking-widest">
            LET'S BUILD SOMETHING GREAT
          </span>
          <h1 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">Get In <em className="text-accent-lime">Touch</em></h1>
          <p className="text-text-muted text-lg leading-relaxed text-center max-w-[680px]">
            Ready to transform your digital presence? Let's discuss your project and explore how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1]">Send Us a <em className="text-accent-teal">Message</em></h2>
              <p className="text-text-muted text-[15px] leading-relaxed">Fill out the form below and we'll get back to you within 24 hours.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="First Name" className="flex-1 bg-bg-card border border-border-subtle rounded-full px-5 py-3 text-text-white text-sm outline-none focus:border-accent-lime transition" />
                <input type="text" placeholder="Last Name" className="flex-1 bg-bg-card border border-border-subtle rounded-full px-5 py-3 text-text-white text-sm outline-none focus:border-accent-lime transition" />
              </div>
              <input type="text" placeholder="Company Name" className="bg-bg-card border border-border-subtle rounded-full px-5 py-3 text-text-white text-sm outline-none focus:border-accent-lime transition" />
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="flex-1 bg-bg-card border border-border-subtle rounded-full px-5 py-3 text-text-muted text-sm outline-none focus:border-accent-lime transition appearance-none cursor-pointer">
                  <option>Select Service</option>
                  <option>Custom Software</option>
                  <option>Mobile App</option>
                  <option>Web Application</option>
                  <option>AI & ML</option>
                  <option>UI/UX Design</option>
                </select>
                <select className="flex-1 bg-bg-card border border-border-subtle rounded-full px-5 py-3 text-text-muted text-sm outline-none focus:border-accent-lime transition appearance-none cursor-pointer">
                  <option>Budget Range</option>
                  <option>$10K - $25K</option>
                  <option>$25K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K+</option>
                </select>
              </div>
              <textarea rows={5} placeholder="Tell us about your project..." className="bg-bg-card border border-border-subtle rounded-2xl px-5 py-3 text-text-white text-sm outline-none focus:border-accent-lime transition resize-none" />
              <button className="bg-accent-lime text-bg-dark font-semibold h-[52px] rounded-full hover:brightness-110 transition cursor-pointer text-base">
                Send Message
              </button>
            </div>

            {/* Info Cards */}
            <div className="w-full lg:w-[420px] flex flex-col gap-8">
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-7 hover:border-border-hover transition">
                <h3 className="text-lg font-bold">Contact Information</h3>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-lime/10 flex items-center justify-center">
                      <item.icon size={18} className="text-accent-lime" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">{item.label}</p>
                      <p className="text-text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-5 hover:border-border-hover transition">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-accent-teal" />
                  <h3 className="text-lg font-bold">Office Hours</h3>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Mon — Fri</span>
                    <span className="text-text-white font-medium">9:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Saturday</span>
                    <span className="text-text-white font-medium">10:00 AM — 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Sunday</span>
                    <span className="text-text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-5 hover:border-border-hover transition">
                <h3 className="text-lg font-bold">Follow Us</h3>
                <div className="flex gap-3">
                  {[Twitter, Linkedin, Github].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                      <Icon size={18} className="text-text-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1]">Find Us <em className="text-accent-teal">Here</em></h2>
              <span className="text-accent-teal text-[13px] font-medium">Bangkok, Thailand</span>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-2xl h-[320px] flex flex-col items-center justify-center gap-3">
              <MapPin size={48} className="text-border-subtle" />
              <span className="text-text-muted text-sm font-medium">Interactive Map</span>
              <span className="text-text-dim text-xs">Google Maps integration goes here</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-card border-y border-border-subtle py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <span className="text-accent-teal text-xs font-semibold tracking-widest">FAQ</span>
              <h2 className="font-serif text-4xl lg:text-[52px] leading-[1.1] text-center">Frequently Asked <em className="text-accent-lime">Questions</em></h2>
              <p className="text-text-muted text-base text-center">Everything you need to know about working with us</p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-[800px]">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="bg-bg-elevated rounded-2xl px-6 py-5 flex flex-col text-left cursor-pointer border border-border-subtle hover:border-border-hover transition w-full"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-text-white text-sm font-medium">{faq.q}</span>
                    <ChevronDown size={18} className={`text-text-muted shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === i && (
                    <p className="text-text-muted text-sm leading-relaxed mt-3">{faq.a}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
