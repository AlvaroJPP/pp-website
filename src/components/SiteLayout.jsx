import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  Pause,
  Play,
  ShieldCheck,
  Tag,
  Wrench,
  X,
} from "lucide-react";
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

const promoSlides = [
  {
    eyebrow: "Ofertas e condições especiais",
    title: "Cuide bem do seu veículo.",
    description: "Consulte na loja as condições disponíveis para peças e acessórios automotivos.",
    cta: "Explorar catálogo",
    href: "#/catalogo",
    icon: Tag,
    theme: "promo-slide-wine",
  },
  {
    eyebrow: "Preparando a próxima revisão?",
    title: "Encontre as peças para sua manutenção.",
    description: "Explore filtros, freios, suspensão e outros itens de referência para seu veículo.",
    cta: "Ver peças",
    href: "#/catalogo",
    icon: Wrench,
    theme: "promo-slide-sage",
  },
  {
    eyebrow: "Escolha com mais segurança",
    title: "Confirme a aplicação antes de comprar.",
    description: "Tenha a marca, o modelo e o ano do veículo em mãos para consultar compatibilidade e disponibilidade.",
    cta: "Ver dicas automotivas",
    href: "#/dicas",
    icon: ShieldCheck,
    theme: "promo-slide-cream",
  },
];

function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const isPaused = isHovered || isFocusWithin || userPaused;
  const activeSlide = promoSlides[activeIndex];
  const ActiveIcon = activeSlide.icon;

  useEffect(() => {
    if (isPaused || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % promoSlides.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + promoSlides.length) % promoSlides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % promoSlides.length);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocusWithin(false);
    }
  };

  return (
    <section
      className={`promo-carousel ${activeSlide.theme}`}
      aria-label="Ofertas e destaques da SP Auto Peças"
      aria-roledescription="carrossel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={handleBlur}
    >
      <div className="promo-carousel-inner container">
        <div className="promo-carousel-content" key={activeIndex}>
          <div className="promo-icon-wrap" aria-hidden="true">
            <ActiveIcon size={25} strokeWidth={1.8} />
          </div>
          <div className="promo-copy">
            <span className="promo-eyebrow">{activeSlide.eyebrow}</span>
            <h2>{activeSlide.title}</h2>
            <p>{activeSlide.description}</p>
            <a className="promo-cta" href={activeSlide.href}>
              {activeSlide.cta} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="promo-carousel-controls" aria-label="Controles do carrossel">
          <div className="promo-carousel-arrows">
            <button type="button" onClick={showPrevious} aria-label="Promoção anterior">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={showNext} aria-label="Próxima promoção">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="promo-carousel-dots" aria-label="Selecionar destaque">
            {promoSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                className={index === activeIndex ? "promo-dot promo-dot-active" : "promo-dot"}
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar destaque ${index + 1} de ${promoSlides.length}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
          <button
            type="button"
            className="promo-pause"
            onClick={() => setUserPaused((paused) => !paused)}
            aria-label={userPaused ? "Retomar rotação do carrossel" : "Pausar rotação do carrossel"}
            title={userPaused ? "Retomar rotação" : "Pausar rotação"}
          >
            {userPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>
      <div className="promo-progress" aria-hidden="true">
        <span key={activeIndex} className={isPaused ? "promo-progress-bar promo-progress-paused" : "promo-progress-bar"} />
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
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.57 0 11.91-5.34 11.91-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.91 7.01c0 5.47-4.45 9.9-9.93 9.9Zm5.45-7.41c-.3-.15-1.78-.88-2.06-.98-.27-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.24-.25-.59-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.37-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z"
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

      <PromoCarousel />

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