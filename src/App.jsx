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