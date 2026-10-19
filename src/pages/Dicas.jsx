import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { PageIntro, Eyebrow } from "../components/SiteLayout.jsx";

const guides = [
  {
    icon: Gauge,
    title: "Motor e filtros",
    description:
      "Filtros e componentes variam conforme motor, ano e versão. Verifique o manual do veículo e os códigos da peça antiga antes de comprar.",
    checklist: "Modelo, ano, motorização e código da peça, quando disponível.",
  },
  {
    icon: ShieldCheck,
    title: "Freios e suspensão",
    description:
      "Peças de freio e suspensão precisam ser compatíveis com a versão exata do veículo. Ruídos, vibrações ou perda de eficiência merecem avaliação profissional.",
    checklist: "Modelo, ano, versão e eixo/lado da peça, se aplicável.",
  },
  {
    icon: BatteryCharging,
    title: "Elétrica e bateria",
    description:
      "Bateria, lâmpadas e componentes elétricos podem ter medidas e especificações diferentes. Confirme os dados técnicos recomendados para seu veículo.",
    checklist: "Modelo, ano e especificação escrita na peça atual.",
  },
  {
    icon: Wrench,
    title: "Pneus, rodas e acessórios",
    description:
      "Medidas, encaixes e fixações devem corresponder às especificações do veículo. Não escolha apenas pela aparência ou por uma medida parecida.",
    checklist: "Medida indicada, modelo do veículo e uso pretendido.",
  },
];

const faqs = [
  {
    question: "Quais informações devo levar para procurar uma peça?",
    answer:
      "Tenha em mãos a marca, o modelo, o ano e a versão do veículo. A motorização, o código da peça antiga ou uma foto nítida da etiqueta também podem ajudar.",
  },
  {
    question: "O catálogo mostra o estoque disponível?",
    answer:
      "Não. O catálogo do site serve para explorar grupos de peças e exemplos. Disponibilidade, marca, preço e prazo precisam ser confirmados diretamente com a loja.",
  },
  {
    question: "Uma peça que serve em um carro do mesmo modelo também serve no meu?",
    answer:
      "Nem sempre. O mesmo modelo pode ter versões, motores e anos diferentes. Confirme a aplicação pelo veículo e pelos dados técnicos da peça.",
  },
  {
    question: "Posso instalar a peça por conta própria?",
    answer:
      "Isso depende do componente e da sua experiência. Freios, direção, suspensão e sistemas elétricos podem envolver riscos; procure um profissional qualificado quando necessário.",
  },
  {
    question: "Como encontro a loja?",
    answer:
      "Use a página Contato e localização para abrir a rota e o Street View no Google Maps, com base no ponto enviado pela loja.",
  },
];

export default function Dicas() {
  return (
    <>
      <PageIntro
        eyebrow="Guia automotivo"
        title="Dicas para encontrar a peça certa."
        description="Informações práticas para organizar sua consulta, comparar especificações e confirmar a compatibilidade antes de comprar."
      />

      <section className="section guide-intro-section">
        <div className="container guide-intro-grid">
          <div>
            <Eyebrow>Antes de consultar</Eyebrow>
            <h2>Pequenos detalhes fazem diferença.</h2>
            <p>
              Uma peça pode mudar conforme o ano, a versão e a motorização do
              veículo. Reunir alguns dados antes da consulta ajuda a reduzir
              dúvidas e evita escolher um item apenas pela aparência.
            </p>
          </div>
          <div className="guide-checklist">
            <div className="guide-checklist-title">
              <ClipboardCheck size={22} />
              <strong>Checklist para sua consulta</strong>
            </div>
            {[
              "Marca e modelo do veículo",
              "Ano de fabricação e modelo",
              "Versão e motorização, se souber",
              "Código ou foto legível da peça antiga",
              "Lado ou posição da peça, quando aplicável",
            ].map((item) => (
              <div className="guide-check-item" key={item}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section guide-cards-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Orientações por categoria</Eyebrow>
              <h2>O que verificar antes de comprar</h2>
              <p>Use estas orientações como ponto de partida e confirme sempre a aplicação específica.</p>
            </div>
          </div>
          <div className="guide-card-grid">
            {guides.map(({ icon: Icon, title, description, checklist }) => (
              <article className="guide-card" key={title}>
                <span className="guide-card-icon"><Icon size={23} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="guide-card-check">
                  <strong>Tenha em mãos</strong>
                  <span>{checklist}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="faq-intro">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h2>Respostas para se preparar melhor.</h2>
            <p>
              Reunimos algumas perguntas comuns sobre a busca por peças e o uso
              do catálogo. Para confirmar um item específico, consulte a loja.
            </p>
            <a className="button button-primary" href="#/catalogo">
              Explorar catálogo <ArrowRight size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>
                  <span>{question}</span>
                  <CircleHelp size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-disclaimer">
        <div className="container guide-disclaimer-inner">
          <ShieldCheck size={24} />
          <p>
            Estas dicas são gerais e não substituem o manual do fabricante ou a
            avaliação de um profissional. Especificações e procedimentos variam
            conforme o veículo e o componente.
          </p>
        </div>
      </section>
    </>
  );
}