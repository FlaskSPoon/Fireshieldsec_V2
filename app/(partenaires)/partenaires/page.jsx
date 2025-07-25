"use client";

import Cta from "@/components/footers/Cta";
import { usePartenaire } from "@/components/hook/usePartenaire";
import Team from "@/components/pages/home/Team";
import TextSlider from "@/components/pages/home/TextSlider";
import { getLogoById } from "@/data/partenaire";

export default function Partenaires() {
  const { data: partenaires = [], isLoading, error } = usePartenaire();

  if (isLoading) return <div className="text-center">Chargement...</div>;
  if (error) return <div className="text-danger text-center">Erreur de chargement</div>;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Nos Partenaires</h2>
        <div className="marquee-container overflow-hidden position-relative">
          <div className="marquee d-flex">
            {partenaires.map((partenaire) => (
              <div
                key={partenaire.id}
                className="card text-center mx-3 p-3 shadow-sm"
                style={{ minWidth: "180px", maxWidth: "180px" }}
              >
                <img
                  src={getLogoById(partenaire.id)}
                  className="img-fluid mx-auto"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                  alt={partenaire.nom}
                />
                <h6 className="mt-2">{partenaire.nom}</h6>
                {partenaire.siteWeb && (
                  <a
                    href={partenaire.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary small"
                  >
                    Visiter le site
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .marquee-container {
          width: 100%;
        }
        .marquee {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .card {
          flex-shrink: 0;
        }
      `}</style> */}
      <Team />
        <TextSlider />
        <div className="pb-300"></div>
        <Cta />
    </section>
  );
}
