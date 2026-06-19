export default function Contato() {
  return (
    <main className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Contato
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Fale com a gente.
          </h1>
          <p className="text-white/40 font-body text-base max-w-md">
            Tem alguma dúvida ou quer saber mais sobre nossas viagens? Nossa equipe está pronta para te atender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-violet-900/40 border border-violet-500/30 flex items-center justify-center mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <p className="text-white/30 text-xs font-display tracking-widest uppercase mb-2">E-mail</p>
            <p className="text-white font-display font-semibold text-lg">
              VittaNeo@gmail.com
            </p>
            <p className="text-white/30 font-body text-xs mt-2">Respondemos em até 24 horas</p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-violet-900/40 border border-violet-500/30 flex items-center justify-center mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-white/30 text-xs font-display tracking-widest uppercase mb-2">Telefone</p>
            <p className="text-white font-display font-semibold text-lg">
              +55 (11) 4002-8922
            </p>
            <p className="text-white/30 font-body text-xs mt-2">Seg. a Sex., das 9h às 18h</p>
          </div>
        </div>
      </div>
    </main>
  )
}
