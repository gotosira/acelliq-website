import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github } from 'lucide-react'

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Desktop Software', path: '/services' },
      { label: 'Mobile Apps', path: '/services' },
      { label: 'Web Applications', path: '/services' },
      { label: 'AI Solutions', path: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Case Studies', path: '/works' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', path: '/' },
      { label: 'Privacy Policy', path: '/' },
      { label: 'Terms of Service', path: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-deeper border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:w-[320px] shrink-0">
            <Link to="/" className="text-text-white text-xl font-bold tracking-[3px] no-underline">
              ACELLIQ
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[280px]">
              The most trusted digital product development company. Transforming ideas into measurable success.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-white/[0.04] border border-border-subtle flex items-center justify-center cursor-pointer hover:bg-white/[0.08] hover:border-border-hover transition-all">
                  <Icon size={15} className="text-text-dim" />
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 flex-wrap gap-10 lg:gap-16">
            {cols.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 min-w-[120px] flex-1">
                <h4 className="text-text-white text-xs font-semibold tracking-widest">{col.title.toUpperCase()}</h4>
                {col.links.map((link) => (
                  <Link key={link.label} to={link.path} className="text-text-muted text-sm no-underline hover:text-text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-subtle mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-text-dim text-xs">&copy; 2026 ACELLIQ. All rights reserved.</p>
          <p className="text-text-dim text-xs">Digital Product Solutions</p>
        </div>
      </div>
    </footer>
  )
}
