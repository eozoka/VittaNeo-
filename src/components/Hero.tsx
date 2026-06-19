import luaImg from '../assets/LuaGS.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={luaImg}
          alt="Lua"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-[#030303]/20 to-[#030303]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-[#030303]/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up delay-100">
          VittaNeo · 2026
        </p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 opacity-0 animate-fade-up delay-200">
          Saia do planeta.
        </h1>
        <p className="text-white/50 text-base md:text-lg font-body font-light max-w-md mx-auto mb-10 opacity-0 animate-fade-up delay-300">
          Viagens curadas para as estações que estão redefinindo o que significa viajar. Partindo nesta temporada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-400">
          <a
            href="#reservar"
            className="bg-violet-600 hover:bg-violet-700 text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
          >
            Reservar um lugar
          </a>
          <a
            href="/voos"
            className="border border-white/20 hover:border-white/50 text-white font-display font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
          >
            Ver voos →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white/30 animate-pulse" />
        <span className="text-white/40 text-xs tracking-widest uppercase font-body">Scroll</span>
      </div>
    </section>
  )
}
