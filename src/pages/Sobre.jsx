import { ArrowRight, Check, MapPin, PackageCheck, Wrench } from "lucide-react";
import { Eyebrow, PageIntro } from "../components/SiteLayout.jsx";

const values = [
  {
    icon: MapPin,
    title: "Presença local",
    description: "Atendimento em Vila dos Cabanos, no município de Barcarena.",
  },
  {
    icon: Wrench,
    title: "Busca orientada",
    description: "A marca, o modelo, o ano e o código ajudam a identificar a peça correta.",
  },
  {
    icon: PackageCheck,
    title: "Categorias variadas",
    description: "Consulte diferentes grupos de peças e acessórios para seu veículo.",
  },
];

export default function Sobre() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre a SP Auto Peças"
        title="Atendimento local para ajudar você a encontrar a peça certa."
        description="A SP Auto Peças está em Vila dos Cabanos, Barcarena, Pará. Esta página reúne informações sobre a loja e como facilitar sua busca por peças automotivas."
      />

      <section className="section about-page-section">
        <div className="container about-page-grid">
          <div className="about-page-photo">
            <img
              src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6f7b4?auto=format&fit=crop&w=1200&q=85"
              alt="Automóvel em ambiente automotivo"
              loading="lazy"
            />
          </div>
          <div className="about-page-copy">
            <Eyebrow>Quem somos</Eyebrow>
            <h2>Seu veículo merece a peça adequada.</h2>
            <p>
              Encontrar uma peça compatível começa com as informações corretas
              do veículo. Por isso, ao consultar a SP Auto Peças, tenha em mãos
              a marca, o modelo, o ano e, se possível, o código da peça antiga.
            </p>
            <p>
              A disponibilidade, os valores e a compatibilidade devem ser
              confirmados diretamente com a loja antes da compra.
            </p>
            <a className="button button-primary" href="#/catalogo">
              Explorar categorias <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Como podemos ajudar</Eyebrow>
              <h2>Uma busca mais simples e objetiva.</h2>
              <p>Algumas informações que ajudam a direcionar sua consulta.</p>
            </div>
          </div>
          <div className="value-grid">
            {values.map(({ icon: Icon, title, description }) => (
              <article className="value-card" key={title}>
                <span className="value-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-compatibility-section">
        <div className="container about-compatibility-grid">
          <div>
            <Eyebrow>Compatibilidade</Eyebrow>
            <h2>Uma peça parecida nem sempre é a peça correta.</h2>
            <p>
              Veículos do mesmo modelo podem usar componentes diferentes
              dependendo do ano, da versão e da motorização. Por isso, confirme
              os dados antes de fechar a compra ou iniciar a instalação.
            </p>
            <a className="button button-primary" href="#/dicas">
              Ver guia de identificação <ArrowRight size={16} />
            </a>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary><span>E se eu não tiver o código da peça?</span><ArrowRight size={18} /></summary>
              <p>Leve os dados do veículo e, se possível, uma foto nítida da peça antiga ou da etiqueta. A identificação ainda precisa ser confirmada.</p>
            </details>
            <details className="faq-item">
              <summary><span>Por que o ano e a versão são importantes?</span><ArrowRight size={18} /></summary>
              <p>Uma linha de veículos pode ter mudanças entre anos, motores, versões e sistemas de montagem. Esses dados ajudam a filtrar as opções corretas.</p>
            </details>
            <details className="faq-item">
              <summary><span>Posso confirmar o estoque pelo site?</span><ArrowRight size={18} /></summary>
              <p>Não neste momento. O site apresenta categorias de referência. Estoque, preço, marca e prazo devem ser confirmados diretamente com a loja.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="about-page-reminder">
        <div className="container about-reminder-inner">
          <span className="reminder-check"><Check size={19} /></span>
          <div>
            <strong>Dica para sua consulta</strong>
            <p>Confirme a peça pelo veículo e, quando possível, pelo código do fabricante.</p>
          </div>
          <a className="button button-outline" href="#/localizacao">
            Ver localização <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}