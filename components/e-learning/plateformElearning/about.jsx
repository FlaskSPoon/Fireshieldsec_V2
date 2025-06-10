"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";

export default function About2() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("../../../public/assets/js/tilt.min.js").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  return (
    <>
      <section className="hero-3" id="hero">
        <div className="hero-inner style3 img-shine">
          <div className="container">
            <div className="row align-items-center">
              {/* Contenu à gauche */}
              <div className="col-xl-6 col-lg-10">
                <div className="hero-style3">
                  <h6 className="hero-sub-title wow fadeInLeft" data-wow-delay=".2s">
                    <span className="me-1">
                      <Image alt="icon" src="/assets/img/icon/titleIconWhite.png" width="28" height="7" />
                    </span>
                    PLATEFORME E-LEARNING
                    <span className="ms-1">
                      <Image alt="icon" src="/assets/img/icon/titleIconWhite.png" width="28" height="7" />
                    </span>
                  </h6>
                  <h1 className="hero-title wow fadeInLeft" data-wow-delay=".4s">
                    <span className="title1">Formations et Certifications </span>
                    <span className="title2"> sur fireshield </span>
                    <span className="title3">  Security.</span>
                  </h1>
                  <div className="media-wrapper wow fadeInUp" data-wow-delay="1s">
                    <div className="btn-wrap">
                      <Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon">
                        Inscrivez vous gratuitement
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image à droite */}
              <div className="col-xl-6 col-lg-2">
                <div className="image-container">
                  <Image
                    alt="e-learning illustration"
                    src="assets\img\hero\study-group-african-people.jpg"// Remplace avec le chemin vers ton image
                    width={600} // Taille de l'image
                    height={700}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
