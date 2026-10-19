import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  CircleHelp,
  Search,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { benefits, categories, mapsUrl } from "../data/site.js";
import { Eyebrow } from "../components/SiteLayout.jsx";

const benefitIcons = {
  package: PackageCheck,
  wrench: Wrench,
  map: MapPin,
};

function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <div className="category-image">
        <img
          src={category.image}
          alt={category.alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80";
          }}
        />
      </div>
      <div className="category-content">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <a className="text-link" href="#/catalogo">
          Ver categoria <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-banner">
          <img
            className="hero-banner-image"
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2200&q=90"
            alt="Peças e componentes automotivos em uma oficina"
            fetchPriority="high"
          />
          <div className="photo-shade" />
          <div className="container hero-banner-inner">
            <div className="hero-content">
              <Eyebrow>Sua parceira automotiva</Eyebrow>
              <h1>
                A peça certa para você <em>seguir em frente.</em>
              </h1>
              <p className="hero-copy">
                Encontre peças e acessórios automotivos para cuidar do seu
                veículo. Conte com a SP Auto Peças em Vila dos Cabanos,
                Barcarena.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#/catalogo">
                  Explorar catálogo <ArrowRight size={17} />
                </a>
                <a className="button button-outline" href="#/localizacao">
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
          </div>
          <div className="floating-card">
            <span className="floating-icon"><ShieldCheck size={23} /></span>
            <span>
              <b>Confiança em cada escolha</b>
              <small>Atendimento na sua região</small>
            </span>
          </div>
        </div>
      </section>

      <section className="benefits-strip" aria-label="Diferenciais">
        <div className="container benefit-grid">
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];
            return (
              <div className="benefit" key={benefit.title}>
                <span className="benefit-icon"><Icon size={21} /></span>
                <span>
                  <strong>{benefit.title}</strong>
                  <small>{benefit.subtitle}</small>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Explore nossas opções</Eyebrow>
              <h2>Peças para cuidar do seu veículo</h2>
              <p>
                Veja as categorias que você pode consultar com a equipe da
                loja. A disponibilidade depende da confirmação de estoque.
              </p>
            </div>
            <a className="button button-outline heading-link" href="#/catalogo">
              Ver catálogo completo <ArrowRight size={16} />
            </a>
          </div>
          <div className="category-grid">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard category={category} key={category.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="how-to-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Antes de comprar</Eyebrow>
              <h2>Encontre a peça certa em três passos.</h2>
              <p>Algumas informações simples ajudam a identificar a aplicação correta e a evitar dúvidas na hora da consulta.</p>
            </div>
            <a className="button button-outline heading-link" href="#/dicas">
              Ver todas as dicas <ArrowRight size={16} />
            </a>
          </div>
          <div className="how-to-grid">
            <article className="how-to-card">
              <span className="how-to-number">01</span>
              <span className="how-to-icon"><Search size={23} /></span>
              <h3>Identifique o veículo</h3>
              <p>Tenha a marca, o modelo, o ano e, se souber, a versão e a motorização.</p>
            </article>
            <article className="how-to-card">
              <span className="how-to-number">02</span>
              <span className="how-to-icon"><ClipboardCheck size={23} /></span>
              <h3>Reúna os detalhes</h3>
              <p>O código da peça antiga, uma foto legível da etiqueta e o lado de instalação podem ajudar.</p>
            </article>
            <article className="how-to-card">
              <span className="how-to-number">03</span>
              <span className="how-to-icon"><Check size={23} /></span>
              <h3>Confirme antes de comprar</h3>
              <p>Verifique compatibilidade, marca, valor e disponibilidade diretamente com a loja.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container home-about-grid">
          <div className="home-about-photo">
            <img
              src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6f7b4?auto=format&fit=crop&w=1100&q=85"
              alt="Veículo em ambiente automotivo"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>SP Auto Peças</Eyebrow>
            <h2>Mais praticidade para manter você em movimento.</h2>
            <p>
              Nossa loja fica em Vila dos Cabanos, Barcarena. Consulte as
              categorias e confirme a peça certa para seu veículo com a equipe.
            </p>
            <a className="button button-primary" href="#/sobre">
              Conheça a loja <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="home-faq-section section">
        <div className="container home-faq-grid">
          <div className="home-faq-intro">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2>Antes de visitar a loja.</h2>
            <p>Confira respostas rápidas e acesse o guia completo para se preparar para a consulta.</p>
            <a className="text-link" href="#/dicas">
              Ler dicas automotivas <ArrowRight size={15} />
            </a>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary><span>O site mostra os preços e o estoque?</span><CircleHelp size={18} /></summary>
              <p>Não. As categorias são ilustrativas. Preço, marca, disponibilidade e prazo precisam ser confirmados com a loja.</p>
            </details>
            <details className="faq-item">
              <summary><span>Como sei se a peça serve no meu veículo?</span><CircleHelp size={18} /></summary>
              <p>Informe marca, modelo, ano e versão. Quando possível, forneça também o código da peça antiga para ajudar na identificação.</p>
            </details>
            <details className="faq-item">
              <summary><span>Onde encontro a localização exata?</span><CircleHelp size={18} /></summary>
              <p>Acesse Contato e localização para ver o mapa, abrir a rota e visualizar o ponto indicado no Street View.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="home-location">
        <div className="container home-location-inner">
          <div className="home-location-icon"><MapPin size={25} /></div>
          <div>
            <h2>Estamos em Vila dos Cabanos</h2>
            <p>Consulte o mapa e abra a rota até a localização informada.</p>
          </div>
          <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
            Como chegar <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}