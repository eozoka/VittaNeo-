import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logoVittaNeo.png'

const links = [
  { label: 'Destinos', href: '/#destinos' },
  { label: 'Reservar', href: '/#reservar' },
  { label: 'Voos', href: '/voos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Integrantes', href: '/integrantes' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="flex items-center gap-2.5 group">
        <img
          src={logoImg}
          alt="VittaNeo logo"
          className="w-8 h-8 object-contain"
        />
        <span className="font-display font-bold text-sm tracking-widest uppercase text-white group-hover:text-violet-400 transition-colors">
          VittaNeo
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-sm font-body tracking-wide transition-colors hover:text-white ${
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-white/50'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-white transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-md border-b border-white/5 md:hidden">
          <ul className="flex flex-col py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
