import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { mapsUrl, whatsappUrl } from "../data/site.js";

const navigation = [
  { label: "Início", href: "#/" },
  { label: "Catálogo", href: "#/catalogo" },
  { label: "Dicas automotivas", href: "#/dicas" },
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

function WhatsAppFloatingButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a SP Auto Peças pelo WhatsApp"
      title="Falar com a SP Auto Peças pelo WhatsApp"
    >
      <svg
        className="whatsapp-float-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 3.1A12.1 12.1 0 0 0 5.6 21.4L4 28l6.8-1.8A12.1 12.1 0 1 0 16 3.1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.4 9.5c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.2-1.3 3s1.3 3.4 1.5 3.6c.2.2 2.5 4 6.3 5.4 3.1 1.2 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.5-1.2c-.3-.1-.6-.2-.8.2-.2.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.2-.4.4-.7.1-.3 0-.5 0-.7l-1.2-2.5Z"
          fill="currentColor"
          transform="translate(3.6 2.5) scale(.9)"
        />
      </svg>
      <span className="whatsapp-float-label">Fale pelo WhatsApp</span>
    </a>
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

      <WhatsAppFloatingButton />
    </>
  );
}