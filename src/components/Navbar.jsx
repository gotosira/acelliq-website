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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border-subtle/50">
      {/* .pen spec: padding:[20,80] justify:space_between align:center */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-20 py-5">
        <Link to="/" className="text-text-white text-2xl font-bold tracking-[3px] no-underline">
          ACELLIQ
        </Link>

        {/* Desktop — gap:32 (8×4) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium no-underline transition-colors ${
                pathname === link.path ? 'text-text-white' : 'text-text-muted hover:text-text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* .pen: rounded-24 padding:[10,24] */}
          <Link to="/contact" className="bg-accent-lime text-bg-dark text-sm font-semibold px-6 py-2.5 rounded-3xl no-underline hover:brightness-110 transition">
            Contact us
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-text-white bg-transparent border-none cursor-pointer">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg-dark border-t border-border-subtle px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}
              className={`text-base font-medium no-underline ${pathname === link.path ? 'text-text-white' : 'text-text-muted'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="bg-accent-lime text-bg-dark text-sm font-semibold px-6 py-2.5 rounded-3xl no-underline text-center mt-2">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  )
}
