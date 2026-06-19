import murilloFoto from '../assets/murillovitta.jpg'
import cauaFoto from '../assets/cauavitta.jpg'
import pradoFoto from '../assets/pradovitta.jpg'

interface Integrante {
  nome: string
  rm: string
  cargo: string
  foto: string
  github: string
  linkedin: string
}

const integrantes: Integrante[] = [
  {
    nome: 'Murillo Kenzo Loureiro Kacinvazaki',
    rm: 'RM - 566948',
    cargo: 'Front-end',
    foto: murilloFoto,
    github: 'https://github.com/murillokenzo',
    linkedin: 'https://www.linkedin.com/in/murillo-kenzo-loureiro-kacinvazaki-38362b347/',
  },
  {
    nome: 'Cauã Rocha do Amaral',
    rm: 'RM - 567593',
    cargo: 'Java',
    foto: cauaFoto,
    github: 'https://github.com/eozoka',
    linkedin: 'https://www.linkedin.com/in/cau%C3%A3-rocha-983171269/',
  },
  {
    nome: 'Kauan Prado Famelli',
    rm: 'RM - 566990',
    cargo: 'Python',
    foto: pradoFoto,
    github: 'https://github.com/kauanpf',
    linkedin: 'http://www.linkedin.com/in/kauan-prado-famelli-38018a381',
  },
]

export default function Integrantes() {
  return (
    <main className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Equipe
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            A tripulação.
          </h1>
          <p className="text-white/40 font-body text-base">
            Os responsáveis por construir essa experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrantes.map((integrante) => (
            <div
              key={integrante.rm}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 text-center hover:border-violet-500/30 transition-colors"
            >
              <img
                src={integrante.foto}
                alt={integrante.nome}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-violet-500/30"
              />

              <h2 className="font-display font-bold text-white text-lg mb-1">{integrante.nome}</h2>
              <p className="text-white/30 font-body text-xs mb-1">{integrante.rm}</p>
              <p className="text-violet-400 font-display text-xs font-semibold tracking-widest uppercase mb-6">{integrante.cargo}</p>

              <div className="flex justify-center gap-3">
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-white/10 hover:border-white/30 text-white/40 hover:text-white text-xs font-display px-3 py-2 rounded-full transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-white/10 hover:border-violet-500/50 text-white/40 hover:text-violet-400 text-xs font-display px-3 py-2 rounded-full transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
