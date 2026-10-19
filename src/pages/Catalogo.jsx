import { useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { categories } from "../data/site.js";
import { Eyebrow, PageIntro } from "../components/SiteLayout.jsx";

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const visibleCategories = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    if (!term) return categories;
    return categories.filter((category) =>
      [category.title, category.description, category.examples, category.keywords]
        .join(" ")
        .toLocaleLowerCase("pt-BR")
        .includes(term)
    );
  }, [search]);

  return (
    <>
      <PageIntro
        eyebrow="Categorias automotivas"
        title="Encontre a categoria da peça que você procura."
        description="Explore as categorias e use a busca para localizar tipos de peças. Consulte a loja para confirmar aplicação, disponibilidade e preço."
      />

      <section className="section catalog-page-section">
        <div className="container">
          <div className="catalog-toolbar">
            <label className="catalog-search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar peças, pneus, filtros..."
                aria-label="Buscar categorias e tipos de peças"
              />
              <span className="search-shortcut"><SlidersHorizontal size={15} /> Catálogo</span>
            </label>
            <p className="results-count">
              {visibleCategories.length} {visibleCategories.length === 1 ? "categoria" : "categorias"}
            </p>
          </div>

          {visibleCategories.length > 0 ? (
            <div className="category-grid catalog-full-grid">
              {visibleCategories.map((category) => (
                <article className="category-card catalog-card" key={category.title}>
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
                    <span className="catalog-card-kicker">Categoria</span>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <div className="catalog-examples">
                      <strong>Exemplos para consultar</strong>
                      <span>{category.examples}</span>
                    </div>
                    <a className="text-link" href="#/localizacao">
                      Consulte na loja <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-search">
              <Search size={25} />
              <h2>Nenhuma categoria encontrada</h2>
              <p>Tente buscar por outro termo, como motor, freios, pneus ou bateria.</p>
              <button className="button button-primary" type="button" onClick={() => setSearch("")}>
                Limpar busca
              </button>
            </div>
          )}

          <div className="catalog-note">
            <strong>Importante:</strong> este catálogo apresenta categorias e exemplos de itens, não um estoque em tempo real. Antes de se deslocar, confirme com a loja se a peça está disponível e se serve no seu veículo.
          </div>

          <div className="catalog-help-panel">
            <div className="catalog-help-icon"><Search size={22} /></div>
            <div className="catalog-help-copy">
              <strong>Não sabe exatamente o nome da peça?</strong>
              <p>Você pode começar pelo sistema do veículo — freios, motor, elétrica ou suspensão — e usar o nosso guia para reunir os dados corretos antes de consultar.</p>
            </div>
            <a className="button button-primary" href="#/dicas">
              Abrir guia automotivo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}