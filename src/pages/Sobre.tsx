export default function Sobre() {
  return (
    <main className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Sobre
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-7xl text-white mb-6 leading-tight">
            Não vendemos passagens. Vendemos perspectiva.
          </h1>
          <p className="text-white/40 font-body text-lg max-w-2xl leading-relaxed">
            A VittaNeo nasceu da crença de que o espaço não é destino de cientistas — é o próximo horizonte da experiência humana. Nossa missão é tornar essa perspectiva acessível para quem está pronto para dar o próximo passo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/8 mb-20">
          {[
            { num: '12', label: 'Voos realizados' },
            { num: '47', label: 'Passageiros orbitais' },
            { num: '4', label: 'Destinos ativos' },
            { num: '100%', label: 'Taxa de retorno' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2">{item.num}</p>
              <p className="text-white/30 font-body text-xs tracking-wide uppercase">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">Nossa missão</h2>
            <p className="text-white/40 font-body text-sm leading-loose">
              Acreditamos que ver a Terra de fora transforma a forma como as pessoas a habitam. Cada viagem é desenhada para criar esse momento — a visão que redefine tudo que vem depois.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">Segurança primeiro</h2>
            <p className="text-white/40 font-body text-sm leading-loose">
              Cada missão passa por 18 meses de planejamento, 3 semanas de treinamento do passageiro e aprovação tripla antes do lançamento. A taxa de retorno é e continuará sendo 100%.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
