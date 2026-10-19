import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Menu,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";

const address =
  "Rua Germano Aranha, 33, Quadra 275, Lote 33, Núcleo Urbano, Vila dos Cabanos, Barcarena, PA, CEP 68447-000";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua+Germano+Aranha%2C+33%2C+Vila+dos+Cabanos%2C+Barcarena%2C+PA";
const mapEmbedUrl =
  "https://maps.google.com/maps?q=Rua%20Germano%20Aranha%2C%2033%2C%20Vila%20dos%20Cabanos%2C%20Barcarena%2C%20PA&t=&z=15&ie=UTF8&iwloc=&output=embed";

const categories = [
  {
    title: "Peças automotivas",
    description: "Componentes para manutenção e reposição do seu carro.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    alt: "Peças e componentes automotivos",
  },
  {
    title: "Pneus e rodas",
    description: "Itens para o cuidado e a manutenção de pneus e rodas.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Roda de automóvel",
  },
  {
    title: "Motor e filtros",
    description: "Itens de manutenção para ajudar a manter o motor em dia.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    alt: "Componentes de motor automotivo",
  },
  {
    title: "Acessórios",
    description: "Detalhes e itens úteis para o dia a dia do seu veículo.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    alt: "Automóvel em destaque",
  },
];

const benefits = [
  {
    icon: PackageCheck,
    title: "Praticidade para encontrar",
    subtitle: "Peças para a sua necessidade",
  },
  {
    icon: Wrench,
    title: "Variedade de categorias",
    subtitle: "Itens para diferentes veículos",
  },
  {
    icon: MessageCircle,
    title: "Atendimento local",
    subtitle: "Estamos em Vila dos Cabanos",
  },
];

const points = [
  "Atendimento local",
  "Orientação na escolha",
  "Peças e acessórios",
  "Fácil localização",
];

function Brand({ footer = false }) {
  return (
    <a className="brand" href="#inicio" aria-label="PP Auto Peças — início">
      <span className="brand-mark">PP</span>
      <span className="brand-wording">
        PP AUTO PEÇAS
        <small>PEÇAS E ACESSÓRIOS</small>
      </span>
    </a>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="local-status">
            <span className="status-dot" />
            Atendimento local em Vila dos Cabanos
          </span>
          <span>Barcarena · Pará, Brasil</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
            aria-label="Navegação principal"
          >
            <a href="#categorias" onClick={closeMenu}>Categorias</a>
            <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
            <a href="#localizacao" onClick={closeMenu}>Localização</a>
            <a className="button button-primary nav-cta" href={mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Como chegar <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-content">
              <Eyebrow>Sua parceira automotiva</Eyebrow>
              <h1>
                A peça certa para você <em>seguir em frente.</em>
              </h1>
              <p className="hero-copy">
                Encontre peças e acessórios automotivos para cuidar do seu
                veículo. Conte com a PP Auto Peças em Vila dos Cabanos,
                Barcarena.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#categorias">
                  Conheça nossas categorias <ArrowRight size={17} />
                </a>
                <a className="button button-outline" href="#localizacao">
                  Visite nossa loja
                </a>
              </div>
              <div className="trust-line">
                <span className="trust-icon"><Check size={18} /></span>
                <span>
                  Atendimento próximo e orientação para encontrar a peça ideal.
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85"
                  alt="Peças e componentes automotivos em uma oficina"
                  fetchPriority="high"
                />
                <div className="photo-shade" />
                <div className="photo-caption">
                  <strong>PP Auto Peças</strong>
                  <span>Seu veículo merece cuidado em cada detalhe.</span>
                </div>
              </div>
              <div className="floating-card">
                <span className="floating-icon"><ShieldCheck size={23} /></span>
                <span>
                  <b>Confiança em cada escolha</b>
                  <small>Atendimento na sua região</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-strip" aria-label="Diferenciais">
          <div className="container benefit-grid">
            {benefits.map(({ icon: Icon, title, subtitle }) => (
              <div className="benefit" key={title}>
                <span className="benefit-icon"><Icon size={21} /></span>
                <span>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section categories-section" id="categorias">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow>Explore nossas opções</Eyebrow>
                <h2>Peças para cuidar do seu veículo</h2>
                <p>
                  Confira algumas das principais categorias automotivas.
                  Consulte a disponibilidade e a compatibilidade com seu modelo
                  diretamente com a nossa equipe.
                </p>
              </div>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article className="category-card" key={category.title}>
                  <div className="category-image">
                    <img
                      src={category.image}
                      alt={category.alt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                  <div className="category-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <a className="text-link" href="#localizacao">
                      Consultar na loja <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="catalog-note">
              <strong>Procurando uma peça específica?</strong> Informe a marca,
              o modelo, o ano do veículo e, se possível, o código da peça. A
              disponibilidade e a compatibilidade devem ser confirmadas com a
              loja.
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6f7b4?auto=format&fit=crop&w=1000&q=85"
                alt="Detalhes de um veículo em ambiente automotivo"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85";
                }}
              />
            </div>
            <div className="about-copy">
              <Eyebrow>Quem somos</Eyebrow>
              <h2>Mais praticidade para manter você em movimento.</h2>
              <p>
                A PP Auto Peças está localizada em Vila dos Cabanos, Barcarena,
                Pará. Nosso objetivo é facilitar a busca por peças e acessórios
                automotivos, com atendimento próximo para ajudar você a
                encontrar o que precisa.
              </p>
              <p>
                Antes de comprar, consulte a aplicação correta da peça para seu
                veículo e confirme a disponibilidade com a nossa equipe.
              </p>
              <div className="about-points">
                {points.map((point) => (
                  <div className="about-point" key={point}>
                    <span className="check-icon"><Check size={13} /></span>
                    {point}
                  </div>
                ))}
              </div>
              <a className="button button-primary" href="#localizacao">
                Encontre nossa loja <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section location-section" id="localizacao">
          <div className="container location-grid">
            <div className="location-copy">
              <Eyebrow>Venha nos visitar</Eyebrow>
              <h2>Estamos perto de você.</h2>
              <p className="location-intro">
                Passe na PP Auto Peças em Vila dos Cabanos, Barcarena. Consulte
                a disponibilidade do produto antes de se deslocar.
              </p>
              <div className="address-row">
                <span className="address-icon"><MapPin size={21} /></span>
                <div>
                  <strong>Endereço</strong>
                  <p>
                    Rua Germano Aranha, 33<br />
                    Quadra 275, Lote 33, Núcleo Urbano<br />
                    Vila dos Cabanos, Barcarena – PA<br />
                    CEP 68447-000
                  </p>
                </div>
              </div>
              <div className="address-row">
                <span className="address-icon"><Clock3 size={21} /></span>
                <div>
                  <strong>Horário de atendimento</strong>
                  <p>Consulte os horários de funcionamento diretamente com a loja.</p>
                </div>
              </div>
              <a className="button button-primary map-button" href={mapsUrl} target="_blank" rel="noreferrer">
                Abrir rota no Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="map-frame">
              <iframe
                title={`Mapa da localização da PP Auto Peças: ${address}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <h2>Precisa encontrar uma peça?</h2>
                <p>Visite a PP Auto Peças e consulte as opções para o seu veículo.</p>
              </div>
              <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
                Ver como chegar <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <Brand footer />
            <p className="footer-note">
              Peças e acessórios automotivos em Vila dos Cabanos, Barcarena – PA.
              Consulte disponibilidade e compatibilidade diretamente com a loja.
            </p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} PP Auto Peças. Todos os direitos reservados.</span>
            <a href="#inicio">Voltar ao topo <ArrowDownRight size={14} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;