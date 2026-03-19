import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github } from 'lucide-react'

const footerCols = [
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
      { label: 'Pricing', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', path: '/' },
      { label: 'Documentation', path: '/' },
      { label: 'Privacy Policy', path: '/' },
      { label: 'Terms of Service', path: '/' },
    ],
  },
]

export default function Footer() {
  return (
    /* .pen spec: bg:#0F1520 padding:[60,80] gap:48 */
    <footer style={{ backgroundColor: '#0F1520' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-[60px]">
        {/* Top — gap:60 */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px]">
          {/* Brand — width:350 */}
          <div className="flex flex-col gap-4 lg:w-[350px] shrink-0">
            <Link to="/" className="text-text-white text-2xl font-bold tracking-[3px] no-underline">
              ACELLIQ
            </Link>
            <p className="text-text-muted text-sm leading-[1.6] max-w-[300px]">
              The most trusted digital product development company. Transforming ideas into measurable success.
            </p>
            {/* Social — 36×36 rounded-full gap:12 */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center cursor-pointer hover:bg-white/[0.12] transition">
                  <Icon size={16} className="text-text-muted" />
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 flex-wrap gap-10 lg:gap-[60px]">
            {footerCols.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 min-w-[140px] flex-1">
                <h4 className="text-text-white text-sm font-semibold">{col.title}</h4>
                {col.links.map((link) => (
                  <Link key={link.label} to={link.path} className="text-text-muted text-[13px] no-underline hover:text-text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border-subtle my-10 lg:my-12" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">&copy; 2026 ACELLIQ. All rights reserved.</p>
          <p className="text-text-muted text-xs">Digital Agency Solutions</p>
        </div>
      </div>
    </footer>
  )
}
