"use client";
import { metadata } from "@/app/not-found";
import SeoMeta from "@/components/common/SeoMeta";
import { sensibilisation } from "@/data/formation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Importez useEffect
import Cta from "@/components/footers/Cta";
export default function Sensibilsations() {


  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/assets/img/hero/confident.png",
    "/assets/img/hero/group.png",
    "/assets/img/hero/diverse-stud.png",
    "/assets/img/hero/diverse-stud.png",
    "/assets/img/hero/confident1.png",
  ];

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique avec useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Change d'image toutes les 5 secondes
    }, 5000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [activeIndex]); // Redémarre l'intervalle si activeIndex change

  return typeof window !== "undefined" && (
    <>

<SeoMeta title={metadata.title} />
<div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
               Sensibilisation En Cybersécurité
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Accueil{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <div className="container p-2">
        <div className="row d-flex align-items-center">
          {/* Première carte */}
          <div className="col-md-6">
            <div className="p-3">
              <h3 className="bg-dark text-white text-center">
                Formations et Sensibilisation
              </h3>
              <p className="">
                Notre programme de formation complet est conçu pour permettre à
                votre équipe d'acquérir les connaissances et les compétences
                nécessaires pour identifier, prévenir, et répondre efficacement
                aux cybermenaces. Grâce à des sessions interactives et
                engageantes, nous visons à favoriser une culture de la sécurité au
                sein de votre organisation, transformant vos employés de
                vulnérabilités potentielles en votre ligne de défense la plus
                forte.
              </p>
            </div>
          </div>

          {/* Deuxième carte avec le carrousel */}
          <div className="col-md-6">
            <div className="p-3">
              <div className="carousel slide">
                <div className="carousel-inner">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                    >
                      <Image
                        src={src}
                        className="d-block w-100"
                        alt={`Slide ${index + 1}`}
                        width={400}
                        height={150}
                      />
                    </div>
                  ))}
                </div>

                {/* Boutons de navigation */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={prevSlide}
                >
                  <span className="carousel-control-prev-icon" />
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={nextSlide}
                >
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Sensibilisation />
      </div>
    </>
  );
 
}

export function Sensibilisation() {
  return (
    
    <>
    <SeoMeta title={metadata.title}s />
      <div className="p-2 text-center  pb-425">
        <h3 className="">SENSIBILISATION</h3>
        <div className="container pb-425">
          <div className="service-card-wrapper style2 p-4">
            {sensibilisation.map((service, index) => (
              <div
                className="service-card style2 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
              >
                <div className="service-thumb " ></div>
                <div className="service-content">
                  <h3 className="service-content_title ">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>

                  </h3>
                  <p className="text-container">{service.description}</p>
                  <Link
                    scroll={false}
                    className="link"
                    href={`/service-details/${service.id}`}
                  >
                    Plus de détails
                    <i className="fa-sharp fa-light fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
      
      </div>
      <Cta  
      />
    </>
  );
}