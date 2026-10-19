import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Sobre from "./pages/Sobre.jsx";
import Localizacao from "./pages/Localizacao.jsx";
import Dicas from "./pages/Dicas.jsx";

function getRoute() {
  const hash = window.location.hash;
  if (!hash.startsWith("#/")) return "/";
  return hash.slice(1).split(/[?#]/)[0] || "/";
}

const routeMetadata = {
  "/": {
    title: "SP Auto Peças | A peça certa para seguir em frente",
    description: "Conheça a SP Auto Peças, em Vila dos Cabanos, Barcarena – PA. Explore categorias de peças automotivas e encontre a localização da loja.",
  },
  "/catalogo": {
    title: "Catálogo de peças automotivas | SP Auto Peças",
    description: "Pesquise itens de referência por nome e categoria. Confirme preço, disponibilidade e compatibilidade com a SP Auto Peças.",
  },
  "/dicas": {
    title: "Dicas automotivas | SP Auto Peças",
    description: "Confira orientações para identificar seu veículo e reunir informações úteis antes de consultar uma peça automotiva.",
  },
  "/sobre": {
    title: "Sobre a SP Auto Peças | Vila dos Cabanos",
    description: "Conheça a SP Auto Peças e veja recomendações para consultar a aplicação correta de peças automotivas em Barcarena, Pará.",
  },
  "/localizacao": {
    title: "Localização e como chegar | SP Auto Peças",
    description: "Veja o endereço da SP Auto Peças em Vila dos Cabanos, Barcarena – PA, abra a rota e consulte a localização no mapa.",
  },
};

function NotFound() {
  return (
    <section className="section not-found-page">
      <div className="container">
        <h1>Esta página não foi encontrada.</h1>
        <p>Use o menu para continuar navegando pelo site da SP Auto Peças.</p>
        <a className="button button-primary" href="#/">Voltar ao início</a>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const metadata = routeMetadata[route] ?? {
      title: "Página não encontrada | SP Auto Peças",
      description: "A página solicitada não foi encontrada. Volte ao início para navegar pelo site da SP Auto Peças.",
    };

    document.title = metadata.title;
    const updates = [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ];

    updates.forEach(([selector, value]) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute("content", value);
    });
  }, [route]);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  let page;
  switch (route) {
    case "/":
      page = <Home />;
      break;
    case "/catalogo":
      page = <Catalogo />;
      break;
    case "/sobre":
      page = <Sobre />;
      break;
    case "/dicas":
      page = <Dicas />;
      break;
    case "/localizacao":
      page = <Localizacao />;
      break;
    default:
      page = <NotFound />;
  }

  return <SiteLayout currentRoute={route}>{page}</SiteLayout>;
}