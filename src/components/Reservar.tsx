import { useState } from 'react'

export default function Reservar() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    destino: '',
    janela: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="reservar" className="py-24 px-6 md:px-12 bg-[#030303]">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Reserva
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Reserve um lugar.
          </h2>
          <p className="text-white/40 font-body text-base">
            Um especialista entrará em contato em até 24 horas para confirmar autorização médica e itinerário.
          </p>
        </div>

        {enviado ? (
          <div className="text-center py-16">
            <p className="text-violet-400 font-display text-2xl font-bold mb-3">Solicitação enviada!</p>
            <p className="text-white/40 font-body">Nossa equipe entrará em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-white/40 text-xs font-display tracking-widest uppercase mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                placeholder="João da Silva"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/15 hover:border-white/30 focus:border-violet-500 outline-none text-white placeholder-white/20 font-body text-sm px-4 py-3.5 rounded-xl transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/40 text-xs font-display tracking-widest uppercase mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="joao@exemplo.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/15 hover:border-white/30 focus:border-violet-500 outline-none text-white placeholder-white/20 font-body text-sm px-4 py-3.5 rounded-xl transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/40 text-xs font-display tracking-widest uppercase mb-2">
                Destino
              </label>
              <select
                name="destino"
                value={form.destino}
                onChange={handleChange}
                required
                className="w-full bg-[#0d0d0d] border border-white/15 hover:border-white/30 focus:border-violet-500 outline-none text-white font-body text-sm px-4 py-3.5 rounded-xl transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>Selecione um destino</option>
                <option value="estacao">Estação Orbital — Órbita Baixa</option>
                <option value="lunar">Base Lunar — Órbita Lunar</option>
                <option value="terra">Visão da Terra — Órbita Terrestre</option>
                <option value="suborbital">Fronteira do Espaço — Suborbital</option>
              </select>
            </div>

            <div>
              <label className="block text-white/40 text-xs font-display tracking-widest uppercase mb-2">
                Janela de Partida
              </label>
              <input
                type="month"
                name="janela"
                value={form.janela}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/15 hover:border-white/30 focus:border-violet-500 outline-none text-white/60 font-body text-sm px-4 py-3.5 rounded-xl transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-display font-semibold text-sm py-4 rounded-xl transition-colors mt-2"
            >
              Solicitar reserva
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
