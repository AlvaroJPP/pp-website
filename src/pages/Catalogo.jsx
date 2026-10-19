import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  PackageSearch,
  X,
} from "lucide-react";
import { categories, products } from "../data/site.js";
import { Eyebrow, PageIntro } from "../components/SiteLayout.jsx";

function normalizeText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80";
          }}
        />
        <span className="product-reference-badge">Item de referência</span>
      </div>
      <div className="product-card-content">
        <span className="product-card-category">{product.category}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-card-bottom">
          <span className="product-availability">
            <span className="availability-dot" />
            Consultar disponibilidade
          </span>
          <a className="text-link" href="#/localizacao" aria-label={`Consultar ${product.name} na loja`}>
            Consultar <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const visibleProducts = useMemo(() => {
    const term = normalizeText(search.trim());

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;
      const searchableText = normalizeText(
        [product.name, product.category, product.description, product.keywords].join(" ")
      );
      const matchesSearch = !term || searchableText.includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <PageIntro
        eyebrow="Catálogo de produtos"
        title="Encontre a peça que você procura."
        description="Pesquise por nome ou categoria e explore os itens de referência. Confirme com a SP Auto Peças a aplicação correta, o preço e a disponibilidade antes da compra."
      />

      <section className="section catalog-page-section">
        <div className="container">
          <div className="catalog-product-search-panel">
            <label className="catalog-search">
              <Search size={20} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: filtro de óleo, pastilha de freio, bateria..."
                aria-label="Pesquisar produtos por nome, categoria ou descrição"
              />
              {search ? (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Limpar pesquisa"
                >
                  <X size={17} />
                </button>
              ) : (
                <span className="search-shortcut">
                  <SlidersHorizontal size={15} /> Buscar
                </span>
              )}
            </label>

            <div className="catalog-filter-heading">
              <span>Filtrar por categoria</span>
              <p className="results-count">
                {visibleProducts.length} {visibleProducts.length === 1 ? "item" : "itens"} encontrados
              </p>
            </div>

            <div className="catalog-category-filters" aria-label="Filtros de categoria">
              <button
                type="button"
                className={`category-filter ${selectedCategory === "Todas" ? "category-filter-active" : ""}`}
                onClick={() => setSelectedCategory("Todas")}
                aria-pressed={selectedCategory === "Todas"}
              >
                Todas as categorias
              </button>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.title}
                  className={`category-filter ${selectedCategory === category.title ? "category-filter-active" : ""}`}
                  onClick={() => setSelectedCategory(category.title)}
                  aria-pressed={selectedCategory === category.title}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-search">
              <PackageSearch size={28} />
              <h2>Nenhum produto encontrado</h2>
              <p>
                Tente outro termo ou escolha uma categoria diferente. Se não souber
                o nome da peça, nosso guia pode ajudar.
              </p>
              <div className="empty-search-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("Todas");
                  }}
                >
                  Limpar filtros
                </button>
                <a className="button button-outline" href="#/dicas">
                  Ver dicas automotivas
                </a>
              </div>
            </div>
          )}

          <div className="catalog-note">
            <strong>Importante:</strong> os produtos exibidos são referências de categorias comuns, não representam o estoque real da loja. Preços, marcas, disponibilidade e compatibilidade devem ser confirmados diretamente com a SP Auto Peças.
          </div>

          <div className="catalog-help-panel">
            <div className="catalog-help-icon"><Search size={22} /></div>
            <div className="catalog-help-copy">
              <strong>Não sabe exatamente o nome da peça?</strong>
              <p>Comece pelo sistema do veículo — freios, motor, elétrica ou suspensão — e use o guia para reunir os dados corretos antes de consultar.</p>
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
