import React from "react";
import Link from "next/link";
import Image from "next/image";



export default function NotFound() {
  return (
    <section className="error-area space-top pb-425 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div className="error-image">
                <Image
                  src="/assets/img/bg/error.png"
                  width={896}
                  height={539}
                  alt="img"
                />
              </div>
              <h2>
                <span>Oops! </span> Page non trouvée
              </h2>
              <p>
                La ressource à la quelle vous éssayez d'accéder n'existe pas
              </p>
              <Link
                scroll={false}
                href={`/`}
                className="gt-btn gt-btn-icon wow fadeInUp"
                data-wow-delay=".8s"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
