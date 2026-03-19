import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Works', path: '/works' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border-subtle/40">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-20 h-[72px]">
        <Link to="/" className="text-text-white text-xl font-bold tracking-[3px] no-underline">
          ACELLIQ
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-medium no-underline transition-colors ${
                pathname === link.path ? 'text-text-white' : 'text-text-muted hover:text-text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-accent-lime text-bg-dark text-[13px] font-semibold px-5 py-2 rounded-full no-underline hover:brightness-110 transition">
            Contact us
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-text-white bg-transparent border-none cursor-pointer" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg-dark border-t border-border-subtle px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}
              className={`text-base font-medium no-underline ${pathname === link.path ? 'text-text-white' : 'text-text-muted'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="bg-accent-lime text-bg-dark text-sm font-semibold px-6 py-3 rounded-full no-underline text-center mt-2">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  )
}
