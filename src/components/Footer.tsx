export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm font-body">
          © 2026 VittaNeo. Todas as viagens sujeitas a autorização orbital.
        </p>
        <div className="flex gap-6">
          <a href="/sobre" className="text-white/30 hover:text-white/60 text-sm transition-colors">Sobre</a>
          <a href="/faq" className="text-white/30 hover:text-white/60 text-sm transition-colors">FAQ</a>
          <a href="/integrantes" className="text-white/30 hover:text-white/60 text-sm transition-colors">Equipe</a>
        </div>
      </div>
    </footer>
  )
}
