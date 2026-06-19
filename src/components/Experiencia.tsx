interface Feature {
  titulo: string
  descricao: string
}

const features: Feature[] = [
  {
    titulo: 'Treinamento pré-voo',
    descricao: 'Três semanas no nosso campus. Treinamento em gravidade zero, ajuste de traje, briefing orbital.',
  },
  {
    titulo: 'Cabines privativas',
    descricao: 'Cada suíte tem uma janela de altura total. Durma com a Terra abaixo de você.',
  },
  {
    titulo: 'Refeições elaboradas',
    descricao: 'Cardápios projetados para microgravidade por cozinhas estreladas.',
  },
  {
    titulo: 'Caminhadas espaciais',
    descricao: 'Duas EVAs com cabo por viagem, acompanhado por um astronauta veterano.',
  },
  {
    titulo: 'Concierge dedicado',
    descricao: 'Um agente dedicado à sua viagem, do início ao reingresso.',
  },
  {
    titulo: 'Garantia de retorno',
    descricao: 'Segurado pelo Lloyd\'s de Londres. Nós te trazemos de volta. É o acordo.',
  },
]

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-24 px-6 md:px-12 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            A Bordo
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4 max-w-2xl">
            Cada detalhe, considerado.
          </h2>
          <p className="text-white/40 font-body text-base max-w-md">
            Uma viagem conosco é mais próxima de uma residência privada do que um voo.
          </p>
        </div>

        <div className="border border-white/8 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`p-8 border-white/8 hover:bg-white/[0.02] transition-colors
                  ${i < 3 ? 'border-b' : ''}
                  ${i % 3 !== 2 ? 'md:border-r' : ''}
                `}
              >
                <h3 className="font-display font-semibold text-white text-base mb-3">
                  {feature.titulo}
                </h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">
                  {feature.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
