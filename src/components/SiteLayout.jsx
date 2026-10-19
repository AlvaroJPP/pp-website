import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { mapsUrl } from "../data/site.js";

const navigation = [
  { label: "Início", href: "#/" },
  { label: "Catálogo", href: "#/catalogo" },
  { label: "Sobre a loja", href: "#/sobre" },
  { label: "Contato e localização", href: "#/localizacao" },
];

export function Brand() {
  return (
    <a className="brand" href="#/" aria-label="SP Auto Peças — início">
      <span className="brand-mark">SP</span>
      <span className="brand-wording">
        SP AUTO PEÇAS
        <small>PEÇAS E ACESSÓRIOS</small>
      </span>
    </a>
  );
}

export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}

export default function SiteLayout({ children, currentRoute }) {
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
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={currentRoute === item.href.replace("#", "") ? "nav-link-active" : ""}
                aria-current={currentRoute === item.href.replace("#", "") ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              className="button button-primary nav-cta"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Como chegar <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <Brand />
            <p className="footer-note">
              Peças e acessórios automotivos em Vila dos Cabanos, Barcarena – PA.
              Consulte disponibilidade e compatibilidade diretamente com a loja.
            </p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SP Auto Peças. Todos os direitos reservados.</span>
            <a href="#/" aria-label="Voltar à página inicial">
              Início <MapPin size={14} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}