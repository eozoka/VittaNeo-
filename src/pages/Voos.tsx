import { useEffect, useState } from 'react'

interface Voo {
  id: number
  codigo: string
  rota: string
  partida: string
  duracao: number
  preco: number
}

function formatarDuracao(minutos: number): string {
  if (minutos < 60) return `${minutos}min`
  const horas = Math.floor(minutos / 60)
  if (horas < 24) return `${horas}h`
  const dias = Math.floor(horas / 24)
  const horasRestantes = horas % 24
  return horasRestantes > 0 ? `${dias}d ${horasRestantes}h` : `${dias} dias`
}

function formatarPreco(preco: number): string {
  if (preco >= 1_000_000) {
    const milhoes = preco / 1_000_000
    return `R$ ${milhoes % 1 === 0 ? milhoes.toFixed(0) : milhoes.toFixed(1)}M`
  }
  return `R$ ${preco.toLocaleString('pt-BR')}`
}

function formatarData(dataStr: string): string {
  const data = new Date(dataStr)
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function Voos() {
  const [voos, setVoos] = useState<Voo[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch('https://vittaneo-api-rest.onrender.com/voos')
      .then((res) => {
        if (!res.ok) throw new Error('Erro na API')
        return res.json()
      })
      .then((data) => {
        setVoos(data)
        setLoading(false)
      })
      .catch(() => {
        setErro(true)
        setLoading(false)
      })
  }, [])

  return (
    <main className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Agenda
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Próximos voos
          </h1>
        </div>

        {loading && (
          <div className="border border-white/8 rounded-2xl px-6 py-16 text-center">
            <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/30 font-body text-sm">Carregando voos...</p>
          </div>
        )}

        {erro && (
          <div className="border border-red-500/20 rounded-2xl px-6 py-16 text-center">
            <p className="text-red-400 font-display font-semibold mb-2">Não foi possível carregar os voos.</p>
            <p className="text-white/30 font-body text-sm">Verifique sua conexão ou tente novamente mais tarde.</p>
          </div>
        )}

        {!loading && !erro && voos.length > 0 && (
          <div className="border border-white/8 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-6 px-6 py-4 border-b border-white/8 bg-white/[0.02]">
              <span className="text-white/30 text-xs font-display tracking-widest uppercase">Voo</span>
              <span className="text-white/30 text-xs font-display tracking-widest uppercase col-span-2">Rota</span>
              <span className="text-white/30 text-xs font-display tracking-widest uppercase">Partida</span>
              <span className="text-white/30 text-xs font-display tracking-widest uppercase">Duração</span>
              <span className="text-white/30 text-xs font-display tracking-widest uppercase text-right">Preço</span>
            </div>

            {voos.map((voo, i) => (
              <div
                key={voo.id}
                className={`grid grid-cols-6 px-6 py-5 items-center hover:bg-white/[0.02] transition-colors ${
                  i < voos.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <span className="font-display font-semibold text-white text-sm">{voo.codigo}</span>
                <span className="font-body text-white/60 text-sm col-span-2">{voo.rota}</span>
                <span className="font-body text-white/40 text-sm">{formatarData(voo.partida)}</span>
                <span className="font-body text-white/40 text-sm">{formatarDuracao(voo.duracao)}</span>
                <span className="font-display font-semibold text-white text-sm text-right">{formatarPreco(voo.preco)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
