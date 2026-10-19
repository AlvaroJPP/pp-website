import { ArrowUpRight, Clock3, MapPin, Navigation } from "lucide-react";
import { address, coordinates, mapEmbedUrl, mapsUrl, streetViewUrl } from "../data/site.js";
import { Eyebrow, PageIntro } from "../components/SiteLayout.jsx";

export default function Localizacao() {
  return (
    <>
      <PageIntro
        eyebrow="Contato e localização"
        title="Visite a SP Auto Peças."
        description="Consulte o endereço e abra a rota para chegar ao ponto de localização indicado no Google Maps."
      />

      <section className="section location-page-section">
        <div className="container location-grid">
          <div className="location-copy location-page-copy">
            <Eyebrow>Estamos em Barcarena</Eyebrow>
            <h2>Encontre nossa localização.</h2>
            <p className="location-intro">
              Use a rota do Google Maps para iniciar a navegação até as coordenadas informadas.
            </p>

            <div className="address-row">
              <span className="address-icon"><MapPin size={21} /></span>
              <div>
                <strong>Endereço informado</strong>
                <p>
                  Rua Germano Aranha, 33<br />
                  Quadra 275, Lote 33, Núcleo Urbano<br />
                  Vila dos Cabanos, Barcarena – PA<br />
                  CEP 68447-000
                </p>
              </div>
            </div>

            <div className="address-row">
              <span className="address-icon"><Navigation size={21} /></span>
              <div>
                <strong>Coordenadas do mapa</strong>
                <p>{coordinates}</p>
              </div>
            </div>

            <div className="address-row">
              <span className="address-icon"><Clock3 size={21} /></span>
              <div>
                <strong>Horário de atendimento</strong>
                <p>Consulte os horários de funcionamento diretamente com a loja.</p>
              </div>
            </div>

            <div className="location-actions">
              <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">
                Abrir rota no Google Maps <ArrowUpRight size={16} />
              </a>
              <a className="button button-outline" href={streetViewUrl} target="_blank" rel="noreferrer">
                Ver no Street View <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="map-frame location-page-map">
            <iframe
              title={"Mapa da SP Auto Peças nas coordenadas " + coordinates}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="location-help-section">
        <div className="container location-help-panel">
          <div>
            <Eyebrow>Antes de sair</Eyebrow>
            <h2>Confirme a disponibilidade da peça.</h2>
            <p>Confira se o item serve no seu veículo e se está disponível antes de se deslocar até a loja.</p>
          </div>
          <a className="button button-primary" href="#/catalogo">
            Consultar categorias <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}