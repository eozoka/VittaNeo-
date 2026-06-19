import blueOriginImg from '../assets/blueOriginGS.webp'
import fogueteImg from '../assets/fogueteGS.avif'
import terraImg from '../assets/PlanetaTerraGS.webp'
import estacaoImg from '../assets/estacaoEspacialGS.webp'

interface Destino {
  id: number
  tag: string
  nome: string
  descricao: string
  duracao: string
  preco: string
  imagem: string
}

const destinos: Destino[] = [
  {
    id: 1,
    tag: '408 KM',
    nome: 'Estação Espacial Internacional',
    descricao: 'Órbita baixa terrestre, redefinida.',
    duracao: '7 dias',
    preco: 'A partir de R$ 6M',
    imagem: estacaoImg,
  },
  {
    id: 2,
    tag: 'ÓRBITA LUNAR',
    nome: 'Base Lunar',
    descricao: 'Um fim de semana acima da Lua.',
    duracao: '12 dias',
    preco: 'A partir de R$ 19M',
    imagem: blueOriginImg,
  },
  {
    id: 3,
    tag: 'ÓRBITA TERRESTRE',
    nome: 'Visão da Terra',
    descricao: 'O planeta mais bonito do sistema solar.',
    duracao: '5 dias',
    preco: 'A partir de R$ 4.5M',
    imagem: terraImg,
  },
  {
    id: 4,
    tag: 'SUBORBITAL',
    nome: 'Fronteira do Espaço',
    descricao: 'O primeiro passo. Inesquecível.',
    duracao: '3 dias',
    preco: 'A partir de R$ 1.2M',
    imagem: fogueteImg,
  },
]

export default function Destinos() {
  return (
    <section id="destinos" className="py-24 px-6 md:px-12 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Destinos
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Quatro lugares. Nenhum deles a Terra
          </h2>
          <p className="text-white/40 font-body text-base max-w-lg mx-auto">
            Cada destino é construído em torno de uma única ideia: que a vista é o ponto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destinos.map((destino) => (
            <div
              key={destino.id}
              className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/5 group cursor-pointer"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={destino.imagem}
                  alt={destino.nome}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6">
                <p className="text-violet-400 text-xs font-display tracking-[0.2em] uppercase mb-2">
                  {destino.tag}
                </p>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {destino.nome}
                </h3>
                <p className="text-white/40 font-body text-sm mb-4">
                  {destino.descricao}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/30 text-xs font-body">{destino.duracao}</p>
                    <p className="text-white font-display font-semibold text-sm">{destino.preco}</p>
                  </div>
                  <button className="border border-white/20 hover:border-violet-500 hover:text-violet-400 text-white/60 text-xs font-display font-semibold px-4 py-2 rounded-full transition-colors">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
