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
import { benefits, categories, mapsUrl, products, whatsappNumber } from "../data/site.js";
import { Eyebrow } from "../components/SiteLayout.jsx";

const benefitIcons = {
  package: PackageCheck,
  wrench: Wrench,
  map: MapPin,
  shield: ShieldCheck,
};

function FeaturedProductCard({ product }) {
  return (
    <article className="featured-product-card">
      <div className="featured-product-image">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80";
          }}
        />
        <span>Item de referência</span>
      </div>
      <div className="featured-product-content">
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p>Preço e disponibilidade sob consulta.</p>
        <a href="#/catalogo" className="featured-product-link">
          Consultar peça <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

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
        <div className="container home-hero-grid">
          <div className="home-hero-promo">
            <div className="home-hero-copy">
              <Eyebrow>Sua parceira automotiva</Eyebrow>
              <h1>A peça certa para o seu carro</h1>
              <p className="hero-copy">
                Peças e acessórios para manutenção e reposição. Explore o catálogo
                e consulte a equipe sobre a aplicação correta para seu veículo.
              </p>
              <div className="hero-actions">
                <a className="button button-amber" href="#/catalogo">
                  Ver catálogo <ArrowRight size={17} />
                </a>
                <a className="button button-outline" href="#/dicas">
                  Como identificar uma peça
                </a>
              </div>
              <div className="trust-line">
                <span className="trust-icon"><Check size={18} /></span>
                <span>Confirme compatibilidade, preço e disponibilidade antes de comprar.</span>
              </div>
            </div>
          </div>
          <div className="home-hero-side">
            <article className="home-hero-side-card">
              <span className="home-hero-side-icon"><Wrench size={24} /></span>
              <h2>Troca de óleo</h2>
              <p>Óleo, filtros e itens de revisão para consultar conforme seu veículo.</p>
              <a href="#/catalogo">Ver itens <ArrowUpRight size={15} /></a>
            </article>
            <article className="home-hero-side-card home-hero-side-accent">
              <span className="home-hero-side-icon"><ShieldCheck size={24} /></span>
              <h2>Não sabe qual peça?</h2>
              <p>Reúna marca, modelo e ano. Uma foto da peça antiga também pode ajudar na consulta.</p>
              <a href="#/dicas">Como identificar <ArrowUpRight size={15} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="vehicle-finder-section" aria-labelledby="vehicle-finder-title">
        <div className="container vehicle-finder">
          <div className="vehicle-finder-heading">
            <h2 id="vehicle-finder-title">Peça para o seu veículo</h2>
            <p>Informe os dados básicos para preparar uma consulta pelo WhatsApp.</p>
          </div>
          <form
            className="vehicle-finder-form"
            onSubmit={(event) => {
              event.preventDefault();
              const values = new FormData(event.currentTarget);
              const brand = values.get("vehicle-brand").toString().trim();
              const model = values.get("vehicle-model").toString().trim();
              const year = values.get("vehicle-year").toString().trim();
              const message = [
                "Olá, SP Auto Peças! Gostaria de consultar uma peça para meu veículo.",
                "",
                `Marca: ${brand}`,
                `Modelo: ${model}`,
                `Ano: ${year}`,
                "",
                "Poderiam me ajudar a identificar a peça correta e confirmar preço e disponibilidade?",
              ].join("\n");
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <label>Marca<input name="vehicle-brand" placeholder="Ex.: Fiat" autoComplete="off" required /></label>
            <label>Modelo<input name="vehicle-model" placeholder="Ex.: Uno" autoComplete="off" required /></label>
            <label>Ano<input name="vehicle-year" placeholder="Ex.: 2018" inputMode="numeric" pattern="[0-9]{4}" required /></label>
            <button className="button button-primary" type="submit">Consultar no WhatsApp <ArrowUpRight size={16} /></button>
          </form>
        </div>
      </section>

      <section className="vehicle-brands-section" aria-labelledby="vehicle-brands-title">
        <div className="container">
          <div className="vehicle-brands-heading">
            <span className="eyebrow">Marcas atendidas</span>
            <h2 id="vehicle-brands-title">Peças para diversas marcas de veículos</h2>
            <p>Consulte a equipe para confirmar a aplicação e a disponibilidade da peça para seu carro.</p>
          </div>
          <div className="vehicle-brands-list" aria-label="Marcas de veículos">
            {[
              { name: "Citroën", logo: "citroen" },
              { name: "Toyota", logo: "toyota" },
              { name: "Chevrolet", logo: "chevrolet" },
              { name: "Fiat", logo: "fiat" },
              { name: "Hyundai", logo: "hyundai" },
              { name: "Honda", logo: "honda" },
              { name: "Nissan", logo: "nissan" },
              { name: "Peugeot", logo: "peugeot" },
              { name: "Kia", logo: "kia" },
              { name: "Renault", logo: "renault" },
              { name: "Ford", logo: "ford" },
            ].map((brand) => (
              <span className="vehicle-brand-name" key={brand.name} title={brand.name}>
                <img
                  src={`https://cdn.simpleicons.org/${brand.logo}`}
                  alt={`Logo da ${brand.name}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.dataset.fallback = brand.name;
                  }}
                />
              </span>
            ))}
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
            {categories.slice(0, 6).map((category) => (
              <CategoryCard category={category} key={category.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Itens de referência</Eyebrow>
              <h2>Produtos em destaque</h2>
              <p>Exemplos de peças para facilitar sua busca. Preços e estoque são confirmados com a loja.</p>
            </div>
            <a className="button button-outline heading-link" href="#/catalogo">
              Ver catálogo completo <ArrowRight size={16} />
            </a>
          </div>
          <div className="featured-product-grid">
            {products.slice(0, 8).map((product) => (
              <FeaturedProductCard product={product} key={product.name} />
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