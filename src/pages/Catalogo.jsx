import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  ClipboardList,
  Copy,
  PackageSearch,
  Search,
  Send,
  Share2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { categories, products } from "../data/site.js";
import { Eyebrow, PageIntro } from "../components/SiteLayout.jsx";

const emptyVehicleForm = {
  brand: "",
  model: "",
  year: "",
  version: "",
  engine: "",
  partCode: "",
  notes: "",
};

function normalizeText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function ProductCard({ product, onConsult }) {
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
          <button
            className="text-link product-consult-button"
            type="button"
            onClick={() => onConsult(product)}
            aria-label={`Preparar consulta de ${product.name}`}
          >
            Consultar <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}

function buildConsultationMessage(product, form) {
  const vehicle = [
    `Marca: ${form.brand.trim()}`,
    `Modelo: ${form.model.trim()}`,
    `Ano: ${form.year.trim()}`,
    form.version.trim() ? `Versão: ${form.version.trim()}` : null,
    form.engine.trim() ? `Motorização: ${form.engine.trim()}` : null,
    form.partCode.trim() ? `Código/referência da peça: ${form.partCode.trim()}` : null,
  ].filter(Boolean);

  return [
    "Olá, SP Auto Peças! Gostaria de consultar uma peça.",
    "",
    `Peça: ${product.name}`,
    `Categoria: ${product.category}`,
    "",
    "Dados do veículo:",
    ...vehicle,
    form.notes.trim() ? `Informações adicionais: ${form.notes.trim()}` : null,
    "",
    "Poderiam confirmar a compatibilidade, o preço e a disponibilidade? Obrigado(a)!",
  ].filter((line) => line !== null).join("\n");
}

function ConsultationDialog({ product, onClose }) {
  const [form, setForm] = useState(emptyVehicleForm);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("info");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatusMessage("");
  };

  const copyMessage = async (message) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
      } else {
        const helper = document.createElement("textarea");
        helper.value = message;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(helper);
        if (!copied) throw new Error("Clipboard indisponível");
      }
      setStatusType("success");
      setStatusMessage("Mensagem copiada. Agora você pode colar e enviar pelo aplicativo ou canal de atendimento da loja.");
    } catch {
      setGeneratedMessage(message);
      setStatusType("info");
      setStatusMessage("Não foi possível copiar automaticamente. A mensagem está disponível abaixo para você selecionar e copiar.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = buildConsultationMessage(product, form);
    setGeneratedMessage(message);
    setStatusMessage("");

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: "Consulta de peça — SP Auto Peças",
          text: message,
        });
        setStatusType("success");
        setStatusMessage("Compartilhamento aberto. Confira a mensagem no aplicativo escolhido antes de enviar.");
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
        // If native sharing is unavailable or fails, use clipboard as a fallback.
      }
    }

    await copyMessage(message);
  };

  const handleCopyAgain = () => copyMessage(generatedMessage);

  return (
    <div
      className="consultation-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="consultation-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        aria-describedby="consultation-description"
      >
        <header className="consultation-header">
          <div className="consultation-heading">
            <span className="consultation-heading-icon"><ClipboardList size={22} /></span>
            <div>
              <span className="consultation-eyebrow">Consulta de peça</span>
              <h2 id="consultation-title">Vamos identificar a aplicação.</h2>
            </div>
          </div>
          <button className="consultation-close" type="button" onClick={onClose} aria-label="Fechar consulta">
            <X size={21} />
          </button>
        </header>

        <div className="consultation-body">
          <div className="consultation-selected-product">
            <span className="consultation-product-icon"><CarFront size={22} /></span>
            <div>
              <span>Item selecionado · referência ilustrativa</span>
              <strong>{product.name}</strong>
              <small>{product.category}</small>
            </div>
          </div>

          <p id="consultation-description" className="consultation-intro">
            Preencha os dados conhecidos do veículo para preparar uma mensagem mais completa. Não precisa saber tudo: versão, motor e código da peça são opcionais.
          </p>

          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="consultation-form-grid">
              <label>
                Marca do veículo <span aria-hidden="true">*</span>
                <input
                  name="brand"
                  value={form.brand}
                  onChange={updateField}
                  placeholder="Ex.: Fiat"
                  autoComplete="off"
                  required
                />
              </label>
              <label>
                Modelo <span aria-hidden="true">*</span>
                <input
                  name="model"
                  value={form.model}
                  onChange={updateField}
                  placeholder="Ex.: Argo"
                  autoComplete="off"
                  required
                />
              </label>
              <label>
                Ano <span aria-hidden="true">*</span>
                <input
                  name="year"
                  value={form.year}
                  onChange={updateField}
                  placeholder="Ex.: 2020"
                  inputMode="numeric"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  type="number"
                  required
                />
              </label>
              <label>
                Versão (opcional)
                <input
                  name="version"
                  value={form.version}
                  onChange={updateField}
                  placeholder="Ex.: Drive"
                  autoComplete="off"
                />
              </label>
              <label>
                Motor/motorização (opcional)
                <input
                  name="engine"
                  value={form.engine}
                  onChange={updateField}
                  placeholder="Ex.: 1.3 flex"
                  autoComplete="off"
                />
              </label>
              <label>
                Código da peça (opcional)
                <input
                  name="partCode"
                  value={form.partCode}
                  onChange={updateField}
                  placeholder="Se tiver a referência"
                  autoComplete="off"
                />
              </label>
            </div>

            <label className="consultation-notes">
              Observações (opcional)
              <textarea
                name="notes"
                value={form.notes}
                onChange={updateField}
                placeholder="Ex.: peça dianteira, lado esquerdo; posso enviar uma foto depois."
                rows={3}
              />
            </label>

            <div className="consultation-actions">
              <button className="button button-primary" type="submit">
                <Share2 size={17} /> Preparar consulta
              </button>
              <button className="button button-outline" type="button" onClick={onClose}>
                Cancelar
              </button>
            </div>
            <p className="consultation-privacy-note">
              Seus dados ficam apenas nesta página enquanto a consulta está aberta. Nenhum pedido é enviado automaticamente e não há confirmação de estoque ou preço.
            </p>
          </form>

          {statusMessage ? (
            <div className={`consultation-status consultation-status-${statusType}`} role="status">
              {statusType === "success" ? <CheckCircle2 size={18} /> : <ClipboardList size={18} />}
              <span>{statusMessage}</span>
            </div>
          ) : null}

          {generatedMessage ? (
            <div className="consultation-message-preview">
              <label htmlFor="consultation-message">Mensagem preparada</label>
              <textarea id="consultation-message" value={generatedMessage} readOnly rows={9} onFocus={(event) => event.target.select()} />
              <button className="button button-outline" type="button" onClick={handleCopyAgain}>
                <Copy size={16} /> Copiar mensagem novamente
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const syncHeaderSearch = () => {
      const hash = window.location.hash;
      const queryIndex = hash.indexOf("?");
      const query = queryIndex >= 0 ? hash.slice(queryIndex + 1) : "";
      const value = new URLSearchParams(query).get("q") ?? "";
      setSearch(value);
      if (value) setSelectedCategory("Todas");
    };
    syncHeaderSearch();
    window.addEventListener("hashchange", syncHeaderSearch);
    return () => window.removeEventListener("hashchange", syncHeaderSearch);
  }, []);

  const closeConsultation = useCallback(() => setSelectedProduct(null), []);
  const openConsultation = (product) => setSelectedProduct(product);

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
                <ProductCard key={product.name} product={product} onConsult={openConsultation} />
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

      {selectedProduct ? (
        <ConsultationDialog key={selectedProduct.name} product={selectedProduct} onClose={closeConsultation} />
      ) : null}
    </>
  );
}
