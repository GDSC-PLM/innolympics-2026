import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Guests',   href: '#guests'   },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ',      href: '#faq'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1208]/95 backdrop-blur-md ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo — horizontal, white-toned */}
        <a href="#hero" onClick={() => handleNav('#hero')} className="shrink-0">
          <img
            src={logo}
            alt="Innolympics 2026"
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-brand-cream/80 hover:text-brand-gold transition-colors duration-200 rounded-full hover:bg-brand-gold/10 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Register CTA */}
        <div className="hidden md:block shrink-0">
          <button className="px-5 py-2.5 text-sm font-semibold rounded-full bg-brand-coral text-white hover:bg-brand-coral/90 active:scale-95 transition-all duration-200 shadow-md shadow-brand-coral/30 cursor-pointer">
            Register
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-brand-cream cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1208]/98 backdrop-blur-md border-t border-brand-sand/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-2.5 text-sm font-medium text-brand-cream/80 hover:text-brand-gold hover:bg-brand-gold/10 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button className="mt-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-brand-coral text-white hover:bg-brand-coral/90 transition-all duration-200 cursor-pointer">
            Register
          </button>
        </div>
      )}
    </nav>
  )
}
