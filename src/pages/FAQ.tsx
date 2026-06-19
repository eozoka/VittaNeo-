import { useState } from 'react'

interface FAQItem {
  pergunta: string
  resposta: string
}

const faqs: FAQItem[] = [
  {
    pergunta: 'Quais são os requisitos médicos para viajar?',
    resposta: 'Todo passageiro precisa passar por uma avaliação médica completa com nossos parceiros. O processo leva em média 2 semanas e verifica aptidão cardiovascular, pressão arterial e condicionamento físico básico.',
  },
  {
    pergunta: 'Quanto tempo dura o treinamento pré-voo?',
    resposta: 'Nosso programa de treinamento dura três semanas no campus de preparação. Inclui simulação de gravidade zero, treinamento em traje espacial, briefing orbital e protocolos de emergência.',
  },
  {
    pergunta: 'As viagens são seguras?',
    resposta: 'Segurança é nossa prioridade absoluta. Cada missão passa por 18 meses de planejamento, aprovação tripla de protocolos e é segurada pelo Lloyd\'s de Londres. Mantemos taxa de retorno de 100%.',
  },
  {
    pergunta: 'Posso cancelar minha reserva?',
    resposta: 'Sim. Cancelamentos feitos com mais de 12 meses de antecedência recebem reembolso integral. Entre 6 e 12 meses, 70%. Cancelamentos com menos de 6 meses da partida não são reembolsáveis.',
  },
  {
    pergunta: 'O que está incluído no preço?',
    resposta: 'Treinamento pré-voo, transporte até a plataforma de lançamento, acomodação em cabine privativa, todas as refeições a bordo, caminhadas espaciais supervisionadas e concierge dedicado do início ao reingresso.',
  },
  {
    pergunta: 'Posso levar bagagem pessoal?',
    resposta: 'Cada passageiro pode levar até 2kg de itens pessoais. Por questões de segurança, a lista de itens permitidos é fornecida após a confirmação da reserva. Itens especiais podem ser avaliados individualmente.',
  },
]

function FAQItem({ pergunta, resposta }: FAQItem) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display font-semibold text-white text-base group-hover:text-violet-300 transition-colors pr-8">
          {pergunta}
        </span>
        <span className={`text-violet-400 text-xl font-light flex-shrink-0 transition-transform ${aberto ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {aberto && (
        <p className="text-white/40 font-body text-sm leading-loose pb-6">
          {resposta}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="pt-24 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-violet-400 text-xs font-display tracking-[0.3em] uppercase mb-4">
            Dúvidas
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Perguntas frequentes
          </h1>
          <p className="text-white/40 font-body text-base">
            Tudo que você precisa saber antes de dar o próximo passo
          </p>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.pergunta} pergunta={faq.pergunta} resposta={faq.resposta} />
          ))}
        </div>
      </div>
    </main>
  )
}
